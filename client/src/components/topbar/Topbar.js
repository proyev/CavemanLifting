import React from 'react';
import { Nav, Navbar, NavbarBrand, Container } from 'react-bootstrap';
import logo from '../../assets/caveman.svg';
import profilePic from '../../assets/caveman_profile_pic.PNG';

import './Topbar.css';

export default function Topbar() {
  return (
    <div className="navbar__container">
      <Navbar>
        <Container>
          <NavbarBrand href="/dashboard">
            <img id="logo" alt="" src={logo} width="100" height="100" />
          </NavbarBrand>
          <Nav variant="pills">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/workoutinfo">Workouts</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end" id="hmm">
            <img
              id="profiler"
              alt="Profile"
              src={profilePic}
              width="80"
              height="80"
              border-radius="100px"
            />
            <Navbar.Text>
              <a id="profile__name" href="#login">
                Unga Bunga
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
