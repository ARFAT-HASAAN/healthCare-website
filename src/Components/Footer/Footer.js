import React from "react";

import { Col, Container, Row, Stack } from "react-bootstrap";
import logo from "../../Images/logo/logo (4).png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container>
          <Col className="about-section w-50 mx-auto py-4">
            <Stack gap={3}>
              <img
                className="mx-auto"
                style={{ width: "8%" }}
                src={logo}
                alt=""
              />
              <h2 className="Footer-header" id="about">
                Live Save Clinic
              </h2>
              <p className="about-text">
                The Life Save Clinic started its journey with the vision of
                taking the health care services into a new height through
                providing the most accurate and reliable test results to all its
                customers and caring the patients at the top of its values.
              </p>

              <div>
                {" "}
                <i class="fa-brands fa-facebook"></i>
              </div>
            </Stack>
          </Col>
        </Container>
      </div>

      <div>
        <div className="copyRight">
          <p>Copyright &copy; 2021 Life Save Clinic</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
