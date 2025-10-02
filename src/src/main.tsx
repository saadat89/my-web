import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div style={{padding:"2rem", fontFamily:"system-ui, sans-serif"}}>
      <h1>It works! 🎉</h1>
      <p>This is a minimal React + Vite setup deployed on Netlify.</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode><App /></React.StrictMode>
);
