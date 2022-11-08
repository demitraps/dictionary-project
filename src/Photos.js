import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <div className="Photos">
        <div className="accordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button bg-primary text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                photos
              </button>
            </h2>
            <div
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
              id="panelsStayOpen-collapseOne"
            >
              <div className="accordion-body">
                <div className="row arrangement">
                  {props.photos.map(function (photo, index) {
                    return (
                      <div className="col-4" key={index}>
                        <a
                          href={photo.src.original}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={photo.src.landscape}
                            alt={photo.alt}
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
