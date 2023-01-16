import logo from "./Scarecrow.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>404 NOT FOUND</header>
      <div className="App-header">
        <div className="Logo">
          <img src={logo} className="scarecrow" alt="logo" />
        </div>
        <div className="InfoPage">
          <h2>I have bad news for you</h2>
          <p>
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <button className="backToHome" href="localhost:3000/home">
            BACK TO HOMEPAGE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
