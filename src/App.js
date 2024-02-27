import "./App.scss";
import ContLateral from "./Componentes/contlateral";
import ContCentral from "./Componentes/contcentral";

function App() {
  return (
    <div className="App">
      <div className="Global-Container">
        <div className="lateral-bar">
          <ContLateral />
        </div>
        <div className="central-content">
          <ContCentral />
        </div>
      </div>
    </div>
  );
}

export default App;
