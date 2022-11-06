import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning pt-5">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (definition.example) {
          return (
            <div key={index} className="row search-results">
              <div className="col definition">
                <p className="title">definition</p>
                <p className="description">{definition.definition}</p>
              </div>
              <div className="col example">
                <p className="title">examples</p>
                <p className="text">"{definition.example}"</p>
              </div>
            </div>
          );
        } else {
          return (
            <div key={index} className="row search-results">
              <div className="col definition">
                <p className="title">definition</p>
                <p className="description">{definition.definition}</p>
              </div>
              <div className="col example">
                <p className="title">examples</p>
                <p className="no-text">no examples available</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
