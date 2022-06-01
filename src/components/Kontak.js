import React, { Component } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

const sendEmail = (e) => {
  e.preventDefault();

    emailjs.sendForm('service_3hr2fmb','template_gvn98fr', e.target, 'EpiNPoXUct1bJcvid')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  }

export default class Kontak extends Component {

  state = {
    visible: true
  }
  toggle(){
    this.setState({
      visible: ! this.state.visible
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={12} className="text-center mt-4">
              <h2>Kontak Saya</h2>
            </Col>
          </Row>
          <Row className="mt-5">
          <Alert color="success" onClose={this.state.visible} toggle={this.toggle.bind(this)} dismissible>Selamat?? Pertanyaan Anda Success Terkirim</Alert>
            <Col md={6}>
              <h1>Butuh Pertanyaan ...?</h1>
              <h2>Silahkan Hubungi Kontak Saya</h2>
              <p>
                <FontAwesomeIcon
                  className="icon-kontak mt-3"
                  icon={faAddressBook}
                />
                Dusun Kemloko RT/RW 001/012 Desa Sidodadi Kecamatan Garum -
                Blitar
              </p>
              <p>
                <FontAwesomeIcon className="icon-kontak" icon={faMessage} />
                muhammadsubeqi0409@gmail.com
              </p>
              <p>
                <FontAwesomeIcon className="icon-kontak" icon={faPhone} />
                085735621003
              </p>
            </Col>
            <Col md={6}>
              <Form onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Masukkan Nama Anda" name="name"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Masukkan Email Anda" name="user_email"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Apa Yang Anda Tanyakan..?</Form.Label>
                  <Form.Control placeholder="Isi Pertanyaan..." as="textarea" rows={3} name="message"/>
                </Form.Group>

                <Button className="float-end" variant="success" type="submit" value="send" onClick={this.toggle.bind(this)}>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
