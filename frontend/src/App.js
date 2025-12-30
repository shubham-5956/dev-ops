
import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://backend:5000/api")
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  let temp="unused";

  return (
    <div>
      <h1>Client-Server Docker App</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
