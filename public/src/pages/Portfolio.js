import React from "react";

export default function Portfolio() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card mt-2">
            <img
              src="https://github.com/TravisMH/HW3/blob/master/Assets/images/03-javascript-homework-demo.png?raw=true"
              className="card-img-top"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">Password Generator</h5>
              <p className="card-text">
                A secure password generator capable of generating a 8-128
                character password including caps, non caps, numbers, and/or
                special characters.
              </p>
              <a
                href="https://github.com/TravisMH/HW3"
                className="btn btn-primary"
              >
                View Repository
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mt-2">
            <img
              src="https://github.com/TravisMH/Burger-Logger/blob/master/Burger%20logger.png?raw=true"
              className="card-img-top"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">Burger Logger</h5>
              <p className="card-text">
                Node, handlebars, express app that logs which burgers have been
                devoured or trashed.
              </p>
              <a
                href="https://github.com/TravisMH/Burger-Logger"
                className="btn btn-primary"
              >
                View Repository
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mt-2">
            <img
              src="https://github.com/TravisMH/Good-ReadMe-Generator/blob/main/README%20GENERATOR.png?raw=true"
              className="card-img-top"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">Good README Generator</h5>
              <p className="card-text">
                A quick and easy README generator for use with projects on
                github
              </p>
              <a
                href="https://github.com/TravisMH/Good-ReadMe-Generator"
                className="btn btn-primary"
              >
                View Repository
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card mt-2">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Fitness Tracker</h5>
              <p className="card-text">
                A fitness tracker app for monitoring your workouts
              </p>
              <a href="/portfolio" className="btn btn-primary">
                View Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
