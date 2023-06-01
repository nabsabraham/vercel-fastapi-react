import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const pingServer = async () => {
    // const url = "https://vercel-fastapi-react.vercel.app/";
    const url = "api/";
    try {
      options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(url, options);
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
