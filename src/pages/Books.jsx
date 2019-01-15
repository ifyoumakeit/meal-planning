import React, { useEffect, useState } from "react";
import fetch, { SHEETS } from "../fetch";

export default function Books() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    (async function() {
      const rows = await fetch(SHEETS.books);
      setRows(rows);
    })();
  }, []);
  return (
    <table>
      <tbody>
        {rows.map((cell, i) => (
          <tr key={cell}>
            <td>{cell}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
