import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faMoon,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
    console.log(word);
  }

  return (
    <div className="Dictionary">
      <header className="navigation mt-1">
        <Navbar
          bg="dark"
          variant="dark"
          expand="lg"
          className="navbar pt-4 ms-4 me-5"
        >
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Form className="d-flex pt-3" onSubmit={search}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={handleWordChange}
                />
              </Form>

              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1" className="ms-5">
                  Definitions
                </Nav.Link>
                <Nav.Link href="#action2" className="ms-5">
                  Examples
                </Nav.Link>
                <Nav.Link href="#action3" className="ms-5">
                  Photos
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <div>
        <h2>Typography</h2>
        <div className="col-2 pronunciation border border-white border-opacity-25 rounded ms-5 mt-5 ps-4 pe-4 pt-2 pb-2">
          <span>
            <FontAwesomeIcon icon={faCirclePlay} />
          </span>{" "}
          <span className="ps-3">/taɪˈpɑː.ɡrə.fi/</span>
        </div>
      </div>
      <div className="d-flex justify-content-end me-5 pe-3 light-switch">
        <ButtonGroup vertical size="sm">
          <Button bg="dark" variant="dark">
            <FontAwesomeIcon icon={faLightbulb} />
          </Button>
          <Button bg="light" variant="light">
            <FontAwesomeIcon icon={faMoon} />
          </Button>
        </ButtonGroup>
      </div>
      <div className="row mt-5">
        <div className="col-2 border border-white border-opacity-25 pt-5 pb-5">
          noun
        </div>
        <div className="col-5 border border-white border-opacity-25 pt-5 pb-5">
          <p>definition</p>{" "}
          <p>
            1. The art or practice of setting and arranging type; typesetting.
          </p>
          <p>2. The practice or process of printing with type.</p>
          <p>3. The appearance and style of typeset matter.</p>
        </div>
        <div className="col-5 border border-white border-opacity-25 pt-5 pb-5">
          <p>examples</p>
          <p>Good typography adds to an advertisement's impact.</p>
        </div>
      </div>
    </div>
  );
}
