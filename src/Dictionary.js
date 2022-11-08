import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./Dictionary.css";
import Definitions from "./Definitions";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [readyStatus, setReadyStatus] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleResponse);

    //documentation: https://www.pexels.com/api/documentation/

    const pexelsApiKey = `563492ad6f91700001000001be2700fac20f476689f97d6000ee0039`;
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
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
        <div>
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    load();
    return <div>Loading...</div>;
  }
}
