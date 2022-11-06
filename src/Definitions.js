import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "./Definitions.css";
import Meaning from "./Meaning";

export default function Definitions(props) {
  console.log(props.results);

  if (props.results) {
    return (
      <div className="Definitions">
        <div>
          <h2>{props.results.word}</h2>
          <div className="phonetic">
            <button>
              <span>
                <FontAwesomeIcon icon={faCirclePlay} />
              </span>{" "}
              <span className="ps-3">/ˌkɒntɹəˈdɪkʃən/</span>
            </button>
          </div>
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
