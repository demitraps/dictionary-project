import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "./Phonetics.css";

export default function Phonetics(props) {
  function playAudio(event) {
    event.preventDefault();
    let audioElement = document.querySelector("audio");
    audioElement.play();
  }

  if (props.phonetic.audio) {
    return (
      <div className="Phonetics">
        <button onClick={playAudio}>
          <audio src={props.phonetic.audio}></audio>
          <span>
            <FontAwesomeIcon icon={faCirclePlay} />
          </span>{" "}
          <span className="ps-3">{props.phonetic.text}</span>
        </button>
      </div>
    );
  } else {
    return null;
  }
}
