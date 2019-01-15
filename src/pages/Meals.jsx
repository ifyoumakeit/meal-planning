import React, { useEffect, useState } from "react";
import fetch, { SHEETS } from "../fetch";

export default function Meals() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    (async function() {
      const rows = await fetch(SHEETS.meals);
      setRows(rows);
    })();
  }, []);
  return (
    <table>
      <tbody>
        {rows.map((cells, i) => (
          <tr key={cells + i}>
            {cells.map(cell => (
              <td key={cell}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
