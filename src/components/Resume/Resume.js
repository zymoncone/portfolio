import "./Resume.css"
import resume from "../../media/Resume_Sarnowicz_Szymon.pdf"
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

const Resume = () => {
  return (
    <div className="resume-page">
      <Document
        file={resume}
        onLoadError={console.error}
        style={{width:"90vw"}}
      >
        <Page 
          pageIndex={0}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          width={window.innerWidth*0.9}
          className="custom-doc"/>
      </Document>
      <div className="download-button" 
        ><a href={resume} 
            download="resume_szymon_sarnowicz"
            >download</a>
      </div>
      <div className="download-button" 
        ><a href={resume}
            rel="noreferrer"
            target="_blank"
            >view in pdf reader</a>
      </div>
    </div>
  )
}

export default Resume