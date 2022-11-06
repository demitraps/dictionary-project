import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <div className="row mt-5">
        <div className="col-2 border border-white border-opacity-25 pt-5 pb-5 pe-5 d-flex justify-content-end">
          {props.meaning.partOfSpeech}
        </div>
        {props.meaning.definitions.map(function (definition, index) {
          if (definition.example) {
            return (
              <div key={index} className="col-10">
                <div className="border border-white border-opacity-25 pt-5 pb-5">
                  <p>definition</p> <p>{definition.definition}</p>
                </div>
                <div className="border border-white border-opacity-25 pt-5 pb-5">
                  <p>examples</p>
                  <p>{definition.example}</p>
                </div>
              </div>
            );
          } else {
            return (
              <div key={index} className="col-10">
                <div className="border border-white border-opacity-25 pt-5 pb-5">
                  <p>definition</p> <p>{definition.definition}</p>
                </div>
                <div className="border border-white border-opacity-25 pt-5 pb-5">
                  <p>examples</p>
                  <p>No examples available</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
