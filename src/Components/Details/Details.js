import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const { serviceId } = useParams();
  const [details, setDetails] = useState([]);

  const [data, setdata] = useState({});
  //   console.log(data);

  useEffect(() => {
    fetch("/detailsdata.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  // console.log(details)

  useEffect(() => {
    const datas = details.find((detail) => detail.id == serviceId);
    setdata(datas);
  }, [serviceId, details]);

  return (
    <div className="deatails-container">
      <Container className="class-container my-4">
        <div>
          <Card.Img variant="top" src={data?.img} />
          <Card.Title className="doctors-name text-center py-4 ">
            {data?.title}
          </Card.Title>
          <Card.Body>
            <Card.Text>{data?.aboute}</Card.Text>
            <Link to={"/select"}>
              <button className="text-center">select</button>
            </Link>
          </Card.Body>
        </div>
      </Container>
    </div>
  );
};

export default Details;
