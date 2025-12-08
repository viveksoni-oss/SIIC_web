// utils/fetchStartupsFromSheet.js

export async function fetchStartupsFromSheet() {
  const url =
    "https://docs.google.com/spreadsheets/d/1umHgVxeoQPHzmoTcHEVaQAum78ZS1Y_J6W-sqWQkZJk/gviz/tq?tqx=out:json&sheet=Startups";

  const res = await fetch(url);
  const text = await res.text();

  // gviz returns: /*O_o*/ google.visualization.Query.setResponse({...});
  // Safely extract the JSON object between the first "{" and the last "}"
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1) {
    throw new Error("Unexpected response format from Google Sheets");
  }

  const jsonText = text.slice(start, end + 1);
  const data = JSON.parse(jsonText); // <- this was failing before

  const rows =
    data.table.rows
      .map((row) => {
        const c = row.c || [];
        return {
          title: c[0]?.v || "",
          shortDescription: c[1]?.v || "",
        };
      })

      .slice(1) || [];

  return rows;
}
