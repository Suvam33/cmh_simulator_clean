import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const sendTrade = async () => {
    try {
      const res = await fetch(
        process.env.REACT_APP_API_URL + "/api/trade",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ symbol: "BTCUSDT", action: "buy" })
        }
      );
      const data = await res.json();
      setMessage(JSON.stringify(data));
    } catch (err) {
      setMessage("Error: " + err.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>CMH Simulator Frontend</h2>
      <button onClick={sendTrade}>Send Trade</button>
      <pre>{message}</pre>
    </div>
  );
}

export default App;
