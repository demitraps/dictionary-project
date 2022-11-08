import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./Dictionary.css";
import Definitions from "./Definitions";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [readyStatus, setReadyStatus] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function load() {
    setReadyStatus(true);
    search();
  }

  if (readyStatus) {
    return (
      <div className="Dictionary">
        <header className="navigation mt-1">
          <div className="row">
            <div className="col">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Search"
                  onChange={handleWordChange}
                />
              </form>
            </div>
            <div className="col light-switch d-flex justify-content-end">
              <button className="lightmode off">
                <FontAwesomeIcon icon={faLightbulb} />
              </button>
              <button className="darkmode on">
                <FontAwesomeIcon icon={faMoon} />
              </button>
            </div>
          </div>
        </header>
        <div>
          <Definitions results={results} />
        </div>
      </div>
    );
  } else {
    load();
    return <div>Loading...</div>;
  }
}
