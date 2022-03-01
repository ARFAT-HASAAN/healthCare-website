import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Services.css";

const Service = (props) => {
  const { id, title, img, desc } = props.servc;
  return (
    <div>
      <Col>
        <Card className="cardd d-flex">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{desc}</Card.Text>
            <Link to={`/Details/${id}`}>
              <button>Explore</button>{" "}
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
