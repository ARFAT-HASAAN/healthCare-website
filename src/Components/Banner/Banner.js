import React from "react";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import "./Banner.css";

import { Carousel, Col, Row, Container } from "react-bootstrap";
import doctors from "../../Images/BannerImg/doctors.png";

const Banner = () => {
  // Welcome to our life save clinic

  return (
    <div className="banner">
      <Container>
        <Row xs={1} md={2} lg={2} className="row">
          <Col>
            <div id="home">
              <div className="carousel-desc">
                <h2>
                  {/* <span>Welcome to our </span> */}

                  <Typewriter
                    words={["Welcome to our life save cliinic"]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                  {/* <Typewriter /> */}
                </h2>

                <p>We Take Care Our Patients Health </p>
                <button>About</button>
              </div>
            </div>
          </Col>
          <Col className="banner-img">
            <img src={doctors} alt="temphoto" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
