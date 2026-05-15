import report from "../../media/readiscover/readiscover-report.pdf"
import "./BlogPost.css"

const ReadiscoverPost = () => {
  return (
    <article className="blog-post">

      <header className="blog-post-header">
        <h1 className="blog-post-title">
          Readiscover: Assessing Semantic Retrieval vs LLM Extraction in Long-Form Fiction
        </h1>
        <p className="blog-post-authors">
          Sam Cohen, Szymon Sarnowicz, Sarah Moore
        </p>
        <p className="blog-post-meta">
          University of Michigan, School of Information — MADS Capstone, Fall 2025
        </p>
        <a href={report} target="_blank" rel="noopener noreferrer" className="blog-post-pdf-link">
          view full report (PDF)
        </a>
      </header>

      <section className="blog-section">
        <h2>Background</h2>
        <p>
          The <em>A Song of Ice and Fire</em> series contains more than 2,000 named characters across its
          five books. Authoring and editing long, complex series involves extensive cross-referencing to
          ensure continuity and internal consistency. In practice, editors address this by using keyword
          search, fan-developed wikis, or a series "bible." Each method has limitations — wikis are
          labor-intensive, and keyword search is too simplistic for natural language queries.
        </p>
        <p>
          Large language models seem well-suited to this task, but their hallucinations over book-length
          context windows undermine editorial trust.<sup>1</sup> What editors need is evidence: continuous,
          verbatim passages that can be cited and validated. This reframes the problem as a retrieval challenge.
        </p>
        <p>
          We constructed a baseline mimicking a skilled editorial use of an LLM — ChatGPT with strict
          extraction instructions and access to the full series text — and compared it to our experimental
          condition: an embedding-based semantic retrieval system called <strong>Readiscover</strong>.
        </p>
        <p>Our hypotheses — on a set of gold-standard question-answer pairs, Readiscover will:</p>
        <ol>
          <li>More frequently identify the correct answer passage than the LLM (top-3 accuracy)</li>
          <li>Rank the correct response higher (mean reciprocal rank)</li>
          <li>Identify a passage closer to the correct answer when it provides only wrong answers (mean distance)</li>
        </ol>
        <div className="blog-footnotes">
          <p><sup>1</sup> Liu et al. (2023) highlight that LLM accuracy plummets when the answer lies toward the middle of a large context window — and a typical novel is 50,000–100,000 words, a series a multiple of that. This informed our choice to develop a method that cannot hallucinate by design.</p>
        </div>
      </section>

      <section className="blog-section">
        <h2>Results Summary</h2>
        <p>
          The LLM, with hallucinations removed, achieved the highest top-3 accuracy at 44%, compared to
          Readiscover's 34%. However, 43% of GPT's raw outputs were hallucinations, severely limiting its
          trustworthiness. Overall, neither system as it stands is up to the task of reliably extracting
          passages from long-form text.
        </p>
      </section>

      <section className="blog-section">
        <h2>Data</h2>
        <p>
          We needed a sufficiently long and complex series with at least three books — enough characters,
          locations, and events that even an attentive reader would struggle to recall details. To ensure full
          transparency and reproducibility, we restricted the dataset to public domain works, ultimately
          selecting a subset of <em>The Wizard of Oz</em> series: books one through seven, and book 23.
        </p>
        <p>
          A known difficulty with public domain works is that LLMs may have been heavily exposed to them
          during pretraining, inflating baseline performance. To partially counteract this, we included
          <em> Jack Pumpkinhead of Oz</em> (book 23), the most recent to enter public domain and therefore
          likely less represented in pretraining. All texts were sourced from Project Gutenberg.
        </p>
      </section>

      <section className="blog-section">
        <h2>Methodology</h2>

        <h3>Gold Standard Creation</h3>
        <p>
          Informed by one team member's professional experience in book publishing, we wrote questions
          reflecting the kinds of continuity, characterization, and plot queries an editor would ask — spanning
          events, descriptions, relationships, timelines, and magic systems. We limited trivial
          keyword-matching questions to ensure the task required genuine semantic understanding.
        </p>
        <p>
          After re-reading the full text of all eight books, one researcher identified the single continuous
          passage that most directly answers each question. Each gold passage is taken verbatim from the
          source with no changes or elisions.
        </p>

        <h3>Data Split and Power Analysis</h3>
        <p>
          We performed a power analysis for a two-sample difference-in-proportions test, assuming 50%
          accuracy for GPT and 70% for semantic retrieval. Constrained by the time required to re-read books
          and formulate questions, we developed 70 questions total — 20 for development (hyperparameter
          tuning), 50 for the test set. The resulting minimum detectable effect size is 0.194, which is below
          our expected effect of 0.2, making the sample sufficient to detect the anticipated difference.
        </p>

        <h3>Baseline Condition</h3>
        <p>
          We created a custom GPT using OpenAI's GPT-5.1 with access to the HTML source files for each
          book, and prompted it with detailed instructions to return three verbatim, continuous passages per
          question. Because these tools frequently hallucinate quoted text, we implemented a verification
          procedure: when hallucinations occurred, we re-prompted until three verified passages were
          returned. All hallucinations — including those ultimately replaced — were recorded separately.
        </p>

        <h3>Experimental Condition: Preprocessing</h3>
        <p>
          We parsed the HTML using Beautiful Soup and applied several preprocessing steps: removing
          extraneous whitespace, normalizing line-breaks, standardizing special characters, and stripping
          non-book material such as Project Gutenberg licenses. The parsed data structure:
        </p>
        <pre className="blog-code">{`{
  "title": book_title,
  "author": book_author,
  "chapters": [
    {
      "title": chapter_title,
      "sourceline": chapter_sourceline
    }
  ]
}`}</pre>
        <p>
          For chunking, we split by chapter and then by paragraph. Short paragraphs are carried forward and
          overlapped into the next chunk to preserve continuity. Very large paragraphs are split at sentence
          boundaries with a configurable sentence overlap. All parameters are intentionally calibratable.
        </p>

        <h3>Embedding and Retrieval</h3>
        <p>
          Each chunk was passed to Google's Vertex AI GenAI client to generate dense vector embeddings
          using the <code>text-embedding-005</code> model, stored in a dataframe and serialized via pickle
          for persistence.
        </p>
        <p>
          Before embedding the user's query, we enhanced it using <code>gemini-2.0-flash-001</code> at
          temperature 0.0 for deterministic output.<sup>2</sup> This reformulation improves embedding quality
          and extracts keywords that help narrow the search scope — for instance, matching a book title to
          limit retrieval to that specific book. Finally, we computed cosine similarity between query and book
          embeddings and identified the top three chunks.
        </p>
        <div className="blog-footnotes">
          <p><sup>2</sup> Braga et al. (2025) find that LLM-enhanced text improves ML algorithm performance by up to 6% (F1) versus traditional NLP techniques.</p>
        </div>

        <h3>Hyperparameter Tuning and Ablation Testing</h3>
        <p>
          We performed ablation tests to optimize four segmentation variables: chunk size, chunk overlap,
          small paragraph length, and small paragraph overlap. Each combination was run through the
          development set, optimizing for top-3 accuracy while monitoring mean reciprocal rank and mean
          minimum chunk distance.
        </p>

        <div className="blog-table-wrapper">
          <table className="blog-table">
            <caption>Ablation Testing — Top Results by Accuracy</caption>
            <thead>
              <tr>
                <th>TCS</th><th>SO</th><th>SPL</th><th>SPO</th>
                <th>Accuracy</th><th>MRR</th><th>MMCD</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1200</td><td>3</td><td>300</td><td>3</td><td>55%</td><td>0.38</td><td>12.35</td></tr>
              <tr><td>1000</td><td>2</td><td>200</td><td>2</td><td>50%</td><td>0.42</td><td>19.58</td></tr>
              <tr><td>600</td><td>2</td><td>150</td><td>3</td><td>50%</td><td>0.42</td><td>27.44</td></tr>
            </tbody>
          </table>
        </div>

        <div className="blog-table-wrapper">
          <table className="blog-table">
            <caption>Ablation Testing — Bottom Results by Accuracy</caption>
            <thead>
              <tr>
                <th>TCS</th><th>SO</th><th>SPL</th><th>SPO</th>
                <th>Accuracy</th><th>MRR</th><th>MMCD</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1000</td><td>4</td><td>400</td><td>4</td><td>35%</td><td>0.33</td><td>33.71</td></tr>
              <tr><td>1200</td><td>4</td><td>300</td><td>4</td><td>35%</td><td>0.30</td><td>18.56</td></tr>
            </tbody>
          </table>
        </div>
        <p className="blog-table-note">TCS = target chunk size, SO = sentence overlap, SPL = small paragraph length, SPO = small paragraph overlap</p>

        <p>
          The optimal configuration based on accuracy was: 1,200-character chunks, 3-sentence overlap,
          300-character small paragraphs, and 3-paragraph overlap. Notably, mean minimum chunk distance
          showed a wide spread (roughly 12 to over 50), suggesting it is a sensitive metric. The results
          confirm that no single parameter dominates — retrieval quality depends on the interaction of all
          parameters, implying new series may require recalibration.
        </p>
      </section>

      <section className="blog-section">
        <h2>Evaluation</h2>

        <div className="blog-table-wrapper">
          <table className="blog-table">
            <caption>Results: Readiscover vs GPT-5.1 (hallucinations removed)</caption>
            <thead>
              <tr><th>Metric</th><th>Readiscover</th><th>GPT-5.1</th></tr>
            </thead>
            <tbody>
              <tr><td>Accuracy</td><td>34.0%</td><td>44.0%</td></tr>
              <tr><td>MRR</td><td>0.250</td><td>0.403</td></tr>
              <tr><td>Mean Min Chunk Distance</td><td>18.58</td><td>25.68</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Accuracy</h3>
        <p>
          Of all 50 questions, 22 (44%) were correctly identified by neither system. Readiscover and
          ChatGPT correctly answered 11 (22%) of the same questions. Readiscover correctly answered 6
          questions (12%) that ChatGPT got wrong, while ChatGPT correctly answered 11 questions (22%)
          that Readiscover answered incorrectly. ChatGPT performs notably worse on
          <em> Jack Pumpkinhead of Oz</em> — likely reflecting lesser familiarity with that text from pretraining.
          See the full report for per-book accuracy charts.
        </p>

        <h3>Mean Reciprocal Rank</h3>
        <p>
          ChatGPT also outperforms Readiscover on MRR, ranking the top passage higher in almost every
          book. See the full report for per-book MRR charts.
        </p>

        <h3>Mean Minimum Chunk Distance</h3>
        <p>
          Readiscover outperforms ChatGPT on proximity — even when GPT returns a correct answer, it is
          often further from the relevant text chunk. Our retrieval method consistently identifies results near
          the correct passage when it finds a passage in the same book.
        </p>

        <h3>Hallucination</h3>
        <p>
          To return three verifiable passages for each of 50 questions (150 total), we had to prompt ChatGPT
          266 times — a hallucination rate of <strong>43.6%</strong>. In a real-world scenario, an editor
          would have to validate every passage and reject nearly half of them. Automatically removing
          hallucinations is essential and not available to a typical end-user.
        </p>
      </section>

      <section className="blog-section">
        <h2>Discussion</h2>
        <p>
          Neither method — current LLMs nor off-the-shelf semantic retrieval — is well-suited to verbatim
          passage extraction for long-form fiction. These results point to the need for hybrid systems, more
          robust datasets spanning genres, and more targeted models for book passage retrieval.
        </p>
        <p>
          A key advantage of a pure retrieval system is trustworthiness. Because Readiscover only returns
          continuous verbatim passages, it cannot produce text that isn't in the book. The ChatGPT method,
          with hallucination replacement, is currently more accurate — but that process isn't available in any
          public interface. As far as publicly available tools go, Readiscover is a better fit for publishing
          workflows: no double-checking whether an answer is real, and interpretable failure modes even when
          the retrieved passage is wrong.
        </p>
        <p>
          We also observe inconsistency across LLM trials — identical prompts can produce different outputs.
          For editorial use, this variability could help (if multiple trials return better answers) or hurt (if it
          undermines trust). Retrieval systems are by contrast deterministic.
        </p>
        <p>
          Finally, LLM performance is improving rapidly. Even without changes to our baseline methodology,
          newer models might meaningfully close the gap.
        </p>
      </section>

      <section className="blog-section">
        <h2>Limitations</h2>
        <p>
          Readiscover is constrained by design — it returns continuous verbatim passages, limiting the
          editorial questions it can answer. It handles <em>who, what, when, where</em> queries well but
          cannot address questions requiring synthesis or reasoning across distant chunks — for example,
          tracing relationships across books, identifying absences, or checking continuity requiring inference.
        </p>
        <p>
          The single-passage constraint creates a structural failure mode: when asked about a specific
          instance of an occurrence, it may return a different instance, which is difficult for an editor to detect.
        </p>
        <p>
          All works in our dataset are public domain, which complicates interpretation — the GPT baseline
          may have substantial prior exposure to these books, inflating its performance. This suggests our
          measured effect size is a lower bound on the true effect for unseen texts.
        </p>
        <p>
          Finally, our gold-standard dataset is small. The number of question-answer pairs was constrained
          by the time required to re-read books and identify ideal passages. A larger dataset spanning more
          series, genres, and question types would provide greater confidence.
        </p>
      </section>

      <section className="blog-section">
        <h2>Ethical Considerations</h2>
        <h3>Copyright and Consent</h3>
        <p>
          LLMs are trained on corpora that include copyrighted works, which rights holders may not have
          explicitly permitted. Both methods in this study utilize such models. Especially in the context of
          deploying tools for the publishing industry, issues of copyright, fair use, and authorial consent are
          important considerations.
        </p>
        <h3>Labor and Industry Implications</h3>
        <p>
          In today's flat-sales publishing environment, companies face pressure to reduce costs, and
          generative AI is often positioned as a mechanism for savings. But editorial continuity checking is
          deeply intertwined with the core work of editing — evaluating tone, pacing, character and plot arcs,
          themes, and appeal. This cannot be automated. Any deployment of this tool should be framed as
          augmentative to avoid eroding the creative and interpretive labor that defines book publishing.
        </p>
      </section>

      <section className="blog-section">
        <h2>Future Work</h2>
        <p>Currently the tool accepts only links to HTML files. Industry adoption would require:</p>
        <ul>
          <li>Support for EPUB (final published format) and Word (manuscript delivery format)</li>
          <li>A human feedback loop for editors to mark passages as useful or incorrect, generating data to refine chunking and ranking</li>
          <li>A hybrid LLM + retrieval approach — not full RAG (which reintroduces hallucination risk), but controlled LLM-based reranking or chunk scoring to improve retrieval performance</li>
          <li>BM25 integration as a lexical complement to semantic retrieval, combining scores to improve performance across different question types</li>
        </ul>
      </section>

      <hr className="blog-divider" />

      <section className="blog-section">
        <h2>My Contributions</h2>
        <ul>
          <li>Technical framework and architecture design</li>
          <li>Retrieval pipeline implementation: parsing, chunking, and scoring</li>
          <li>GitHub repository creation and maintenance</li>
          <li>Ablation testing and scoring</li>
          <li>Collaborated on evaluation workflow including classification of matches, non-matches, and hallucinations</li>
          <li>Front end development and visuals</li>
        </ul>
      </section>

      <section className="blog-section">
        <h2>References</h2>
        <ul>
          <li>Braga, M., Milanese, G. C., &amp; Pasi, G. (2025). Investigating Large Language Models' Linguistic Abilities for Text Preprocessing. arXiv:2510.11482.</li>
          <li>Kooser, A. (2020). Data Scientists Just Figured out Why You're Obsessed with Game of Thrones. CNET.</li>
          <li>Liu, N. F., et al. (2023). Lost in the Middle: How Language Models Use Long Contexts. arXiv:2307.03172.</li>
          <li>Kučečka, T., Chudâ, D., &amp; Samuhel, P. (2013). Selective chunking — Easy and effective way to estimate text similarity. IEEE CINTI. doi:10.1109/CINTI.2013.670522.</li>
          <li>Zhu, Y., et al. (2025). Large Language Models for Information Retrieval: A Survey. arXiv:2308.07107. doi:10.1145/3748304.</li>
        </ul>
      </section>

    </article>
  )
}

export default ReadiscoverPost
