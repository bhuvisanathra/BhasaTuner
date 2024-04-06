import { useState } from "react";
import "./App.css";
import Form from "./component/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 style={{ marginBottom: "2rem" }}>Sanskrit उपशक्</h1>
      <Form />
    </>
  );
}

export default App;
