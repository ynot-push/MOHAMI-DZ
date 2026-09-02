import React, { useState } from "react";
// hada tableau ta3 awkat travail mais logique ta3o moche kaml (younes rah yskotchih)
const Table = () => {
  const [tableData, setTableData] = useState(
    Array.from({ length: 7 }, () => 0)
  );

  const handleCheckboxChange = (rowIndex, colIndex) => {
    const newData = tableData.map((row, i) =>
      i === colIndex ? rowIndex + 1 : row
    );
    setTableData(newData);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Hours</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(7)].map((_, rowIndex) => (
          <tr key={rowIndex}>
            <td>Hour {rowIndex + 1}</td>
            {tableData.slice(0, -1).map((selectedRowIndex, colIndex) => (
              <td key={colIndex}>
                <input
                  type="checkbox"
                  checked={selectedRowIndex === rowIndex + 1}
                  onChange={() => handleCheckboxChange(rowIndex, colIndex)}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
