import React from "react";

export default function Contact() {
  return (
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name"
              ></input>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="example@gmail.com"
              ></input>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button class="btn btn-secondary">Submit</button>
          </form>
        </div>
        <div class="col-md-1"></div>
        <a href="https://github.com/TravisMH">github</a>
        {" "}<br />
        <a href="https://linkedin.com/in/travis-hill-65b17276">LinkedIn</a>
      </div>
    </div>
  );
}
