import React from "react";
import picture from "../../Images/Doctors/doctor (5).jpg";

const About = () => {
  return (
    <div>
      <div className="container my-4">
        <h1 className="text-center"> ---- About us ----</h1>
        <div class="row">
          <div class="col-6">
            <h1>let's start</h1>
            <p>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              id eveniet quod architecto iusto incidunt doloribus cum, assumenda
              laboriosam molestiae provident necessitatibus distinctio.
              Inventore explicabo, maiores harum id necessitatibus veritatis ab,
              possimus neque asperiores ipsa rerum mollitia tempora recusandae
              tempore?
            </p>

            <button>More --</button>
          </div>
          <div class="col-6">
            <img src={picture} alt="doctor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
