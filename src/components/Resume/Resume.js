import "./Resume.css"
import resume from "../../media/Resume_Sarnowicz_Szymon.pdf"
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString()

const Resume = () => {
  return (
    <div className="resume-page">
      <Document
        file={resume}
        onLoadError={console.error}
      >
        <Page 
          pageIndex={0}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          className="custom-doc"/>
      </Document>
      <div className="download-button" 
        ><a href={resume} 
            download="resume_szymon_sarnowicz"
            rel="noreferrer"
            target="_blank"
            >download resume</a></div>
    </div>
  )
}

export default Resume