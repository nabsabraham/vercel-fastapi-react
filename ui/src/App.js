import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const pingServer = async () => {
    const url = "http://localhost:8000/";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      const { name } = await response.json();
      setText(name);
      console.log(name);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={pingServer}>who's the best</button>
        <p>{text}</p>
      </header>
    </div>
  );
}

export default App;
