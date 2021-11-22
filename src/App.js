import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div
          onClick={() => {
            i18n.changeLanguage("tr");
          }}
        >
          tr
        </div>
        <div
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          en
        </div>
        <h1>{t("title")}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
