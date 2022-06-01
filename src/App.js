import React, { Component } from "react";
import Utama from "./components/Utama";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar-color" expand="sm">
          <Container>
            <Navbar.Brand className="text-white logo">Muhammad Subeqi</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav>
                <Nav.Link className="mx-3"><Link className="menu" to="/Beranda">Home</Link></Nav.Link>
                <Nav.Link className="mx-3"><Link className="menu" to="/Tentang">Tentang</Link></Nav.Link>
                <Nav.Link className="mx-3"><Link className="menu" to="/Portfolio">Portfolio</Link></Nav.Link>
                <Nav.Link className="mx-3"><Link className="menu" to="/Kontak">Kontak</Link></Nav.Link>
                <Button className="mx-4 button-cv" variant="dark" href="https://drive.google.com/file/d/15xxbwpO62jCFqV6c4wiJDLrUe9on4-ty/view?usp=sharing">Download CV</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
          <Utama />
      </div>
    );
  }
}
