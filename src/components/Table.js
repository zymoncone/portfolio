
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
          <tr className="tableRowItems">
            <td className="tableCell">Feeling Hungry</td>
            <td className="tableCell">September 2023</td>
            <td className="tableCell">Test Link</td>
          </tr>
        </tbody>

      </table>
    
    </>
  )

}

export default Table