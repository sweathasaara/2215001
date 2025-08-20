import React, { useState, useMemo } from "react";
import { getAll, addUrl, removeUrl } from "../lib/storage";

export default function ShortenerPage() {
  const [url, setUrl] = useState("");

  const urls = useMemo(() => getAll(), []);

  const handleAdd = () => {
    if (!url) return;
    addUrl({ original: url, short: `short.ly/${Math.random().toString(36).slice(2, 7)}` });
    window.location.reload(); 
  };

  const handleDelete = (index) => {
    removeUrl(index);
    window.location.reload();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>URL Shortener</h1>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleAdd}>Shorten</button>

      <h2>Saved URLs</h2>
      <ul>
        {urls.map((item, index) => (
          <li key={index}>
            <a href={item.original} target="_blank" rel="noreferrer">{item.original}</a> → {item.short}
            <button onClick={() => handleDelete(index)}>Wrong..</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
