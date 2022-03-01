import React from "react";
import "./Contact.css";
import contact from "../../Images/BannerImg/5124557-ai.png";

const Contact = () => {
  return (
    <div id="contact">
      <div className="p-4 my-4  semibanner">
        <h1 className="fs-1 text-center fw-bold">
          We Want to know <br /> <span> About your Experince!</span>
        </h1>
      </div>

      <div className="container my-4">
        <h1 className="text-center"> ---- Contact ----</h1>
        <div class="row">
          <div class="col-6">
            <div className="contactbanner">
              <img src={contact} alt="contact" />
            </div>
          </div>
          <div class="col-6">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div class="mb-3">
                <label for="validationTextarea" class="form-label">
                  Meassage
                </label>
                <textarea
                  class="form-control "
                  id="validationTextarea"
                  placeholder="Required example textarea"
                  required
                ></textarea>
                <div class="invalid-feedback">
                  Please enter a message in the textarea.
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary d-block mx-auto my-5"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
