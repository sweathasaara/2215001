import React from "react";

export default function StatsPage() {

  const stats = [
    { url: "https://google.com", clicks: 120 },
    { url: "https://facebook.com", clicks: 95 },
    { url: "https://twitter.com", clicks: 60 },
  ];

  return (
    <div>
      <h2>📊 URL Statistics</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Original URL</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((s, i) => (
            <tr key={i}>
              <td>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.url}
                </a>
              </td>
              <td>{s.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
