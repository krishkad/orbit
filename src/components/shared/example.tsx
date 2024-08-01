import React from "react";

const data = [
  ["Header 1", "Header 2", "Header 3", "Header 4"],
  ["Row 1, Cell 1", "Row 1, Cell 2", "Row 1, Cell 3", "Row 1, Cell 4"],
  ["Row 2, Cell 1", "Row 2, Cell 2", "Row 2, Cell 3", "Row 2, Cell 4"],
  ["Row 3, Cell 1", "Row 3, Cell 2", "Row 3, Cell 3", "Row 3, Cell 4"],
];

const StickyTable = () => {
  return (
    <div className="max-h-[300px] max-w-[600px] overflow-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="sticky top-0 left-0 bg-gray-200 z-30"></th>
            {data[0].map((header, index) => (
              <th key={index} className="min-w-[180px] sticky top-0 bg-gray-200 z-20 px-4 py-2">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="min-w-[180px] sticky left-0 bg-gray-100 z-10 px-4 py-2">
                {`Row ${rowIndex + 1}`}
              </td>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="min-w-[180px] px-4 py-2 border border-gray-300">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StickyTable;
