import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faLaptopCode, faHouseLaptop } from '@fortawesome/free-solid-svg-icons'
import skill1 from '../image/skill/ms office.png'
import skill2 from '../image/skill/html.png'
import skill3 from '../image/skill/css.png'
import skill4 from '../image/skill/javascript.png'
import skill5 from '../image/skill/bootstrap.png'
import skill6 from '../image/skill/react.png'
import skill7 from '../image/skill/wordpress.png'

export default class Tentang extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={12} className="text-center mt-4">
              <h2>Tentang Saya</h2>
              <p className="fs-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Obcaecati, harum quae saepe commodi officiis impedit. Dicta
                debitis maxime illum voluptatum unde! Cumque libero quos, veniam
                veritatis nulla consequatur similique repellat?
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="text-center mt-3">
              <Card className="p-3 card-tentang shadow">
              <FontAwesomeIcon className="icon-tentang" icon={faLaptopCode} />
                <Card.Body>
                  <Card.Title><h3>Web Design</h3></Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="danger">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="text-center mt-3">
              <Card className="p-3 card-tentang shadow">
              <FontAwesomeIcon className="icon-tentang" icon={faCode} />
                <Card.Body>
                  <Card.Title><h3>Web Developer</h3></Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="danger">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="text-center mt-3">
              <Card className="p-3 card-tentang shadow">
              <FontAwesomeIcon className="icon-tentang" icon={faHouseLaptop} />
                <Card.Body>
                  <Card.Title><h3>Wordpress Developer</h3></Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="danger">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="text-center mt-4">
              <h2>Skill</h2>
              <div class="skill-link">
              <li><img src={skill1} className="skill" alt="skill" /></li>
              <li><img src={skill2} className="skill" alt="skill" /></li>
              <li><img src={skill3} className="skill" alt="skill" /></li>
              <li><img src={skill4} className="skill" alt="skill" /></li>
              <li><img src={skill5} className="skill" alt="skill" /></li>
              <li><img src={skill6} className="skill" alt="skill" /></li>
              <li><img src={skill7} className="skill" alt="skill" /></li>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
