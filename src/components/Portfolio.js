import React, { Component } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import carousel1 from '../image/portfolio/1.png';
import carousel2 from '../image/portfolio/2.png';

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={12} className="text-center mt-4">
              <h2>Portfolio</h2>
              <p className="fs-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Obcaecati, harum quae saepe commodi officiis impedit. Dicta
                debitis maxime illum voluptatum unde! Cumque libero quos, veniam
                veritatis nulla consequatur similique repellat?
              </p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carousel1}
                  alt="First slide"
                />
               
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carousel2}
                  alt="Second slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carousel1}
                  alt="Third slide"
                />

              </Carousel.Item>
            </Carousel>
            </Col>
            <Col md={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carousel1}
                  alt="First slide"
                />
               
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carousel2}
                  alt="Second slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carousel1}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
