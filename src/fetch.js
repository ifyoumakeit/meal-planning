const SHEET_ID = "1GWyAB-P1FsOM-F7doHkCWqgNu2lmn4u94ambyd36l5s";

export const SHEETS = {
  meals: 1,
  shoppingList: 2,
  ingredients: 3,
  recipes: 4,
  books: 5
};

export default async function fetchSheet(id) {
  const resp = await fetch(
    `https://spreadsheets.google.com/feeds/cells/${SHEET_ID}/${id}/public/full?alt=json`
  );
  const data = await resp.json();
  const columns = parseInt(data.feed.gs$colCount.$t);
  const rows = data.feed.entry.slice(1).reduce((acc, entry, index) => {
    const content = entry.content.$t;
    if (index % columns === 0) {
      return acc.concat([content]);
    }

    return [
      ...acc.slice(0, acc.length - 1),
      [...[acc[acc.length - 1]], content]
    ];
  }, []);
  return rows;
}
