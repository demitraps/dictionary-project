import React from "react";
import "./Definitions.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Definitions(props) {
  if (props.results) {
    return (
      <div className="Definitions">
        <div>
          <h2>{props.results.word}</h2>

          {props.results.phonetics.map(function (phonetic, index) {
            return <Phonetics key={index} phonetic={phonetic} />;
          })}
        </div>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              {" "}
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
