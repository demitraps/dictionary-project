import "./App.css";
import Dictionary from "./Dictionary";
import Signature from "./Signature";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Dictionary defaultWord="sunset" />
        <Signature />
      </div>
    </div>
  );
}

export default App;
