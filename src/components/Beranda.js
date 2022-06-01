import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import foto from '../image/me.jpg';
import icon1 from '../image/icon/facebook.svg';
import icon2 from '../image/icon/instagram.svg';
import icon3 from '../image/icon/linkedin.svg';
import icon4 from '../image/icon/whatsapp.svg';

export default class Beranda extends Component {
  render() {
    return (
      <div>
        <Container>
             <Row >
               <Col md={12} className="text-center mt-5">
                 <img className="foto border border-5 border-white rounded-circle shadow" src={foto} alt="foto" />
                 <h1 className="mt-5 fw-bold">Muhammad Subeqi</h1>
                    <p className="fs-5">I'm Web Developer</p>
                    <div class="social-link">
                    <a href=""><img src={icon1} className="icon" alt="icon" /></a>
                    <a href=""><img src={icon2} className="icon" alt="icon" /></a>
                    <a href=""><img src={icon3} className="icon" alt="icon" /></a>
                    <a href=""><img src={icon4} className="icon" alt="icon" /></a>
                    </div>
               </Col>
             </Row>
        </Container>
        </div>
    );
  }
}
