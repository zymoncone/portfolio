import { projects } from "../portfolio"

const Table = () => {

  return (
    <>
      <table className="table">
        <thead className="tableRowHeader">
          <tr>
            <th className="tableHeader">Project Name</th>
            <th className="tableHeader">Date</th>
            <th className="tableHeader">Link</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((entry, index) => 
            <tr className="tableRowItems" key={index}>
              <td className="tableCell">{entry.projectName}</td>
              <td className="tableCell">{entry.date}</td>
              <td className="tableCell">{entry.link}</td>
            </tr>
          )}
          
        </tbody>

      </table>
    
    </>
  )

}

export default Table