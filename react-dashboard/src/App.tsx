import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import NavBar from "./components/NavBar";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      <NavBar />
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>Hello World</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>Hello World</Button>
    </div>
  );
}

export default App;
