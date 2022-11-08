import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms row">
        <div className="col title-mini">synonyms</div>
        <div className="col">
          {props.synonyms.map(function (synonym, index) {
            return (
              <span className="synonym-word" key={index}>
                {synonym}
              </span>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
