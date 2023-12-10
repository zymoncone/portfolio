import "./Resume.css"
import { isMobile } from "react-device-detect"
import resume from "../../media/Resume_Sarnowicz_Szymon.pdf"
import { Document, Page, pdfjs } from 'react-pdf'
import { useState, useEffect } from "react"
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

const Resume = () => {

  const [widthFactor, setWidthFactor] = useState(0.6)

  useEffect(() => {
    if (isMobile) {
      setWidthFactor(0.9)
    } else {
      setWidthFactor(0.6)
    }
  },[setWidthFactor])
  

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
          width={window.innerWidth*widthFactor}
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