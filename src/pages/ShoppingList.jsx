import React, { useEffect, useState } from "react";
import fetch, { SHEETS } from "../fetch";

export default function ShoppingList() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    (async function() {
      const rows = await fetch(SHEETS.shoppingList);
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
