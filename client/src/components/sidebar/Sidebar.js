import React, { useState } from 'react';
import './Sidebar.css';

import SessionForm from '../sessioncreation/sessionform/SessionForm';
import profilePic from '../../assets/caveman_profile_pic.PNG';
import logo from '../../assets/caveman.svg';
import home from '../../assets/home.svg';
import user from '../../assets/user.svg';
import dumbbell from '../../assets/fitness-centre.svg';
import building from '../../assets/building.svg';
import plus from '../../assets/plus.svg';

export default function Sidebar({ toggleForm }) {
  return (
    <div className="sidebar__container">
      <a href="/" class="text-center">
        <img
          alt="Navigate to dashboard"
          src={logo}
          class="bi "
          width="200"
          height="100"
        ></img>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="/dashboard" class="nav-link active" aria-current="page">
            <img
              alt="Navigate to dashboard"
              src={home}
              class="bi me-2"
              width="20"
              height="20"
            />
            Home
          </a>
        </li>
        <li>
          <a href="/profile" class="nav-link text-white">
            <img
              alt="Navigate to profile"
              src={user}
              class="bi me-2"
              width="20"
              height="20"
            />
            Profile
          </a>
        </li>
        <li>
          <a href="/workoutinfo" class="nav-link text-white">
            <img
              alt="View workouts"
              src={dumbbell}
              class="bi me-2"
              width="20"
              height="20"
            />
            Workouts
          </a>
        </li>
        <li>
          <a href="/gyms" class="nav-link text-white">
            <img
              alt="View local gyms"
              src={building}
              class="bi me-2"
              width="20"
              height="20"
            />
            Gyms
          </a>
        </li>
        <li>
          <button class="nav-link text-white" onClick={toggleForm}>
            <img
              alt="Add a new session"
              src={plus}
              class="bi me-2"
              width="20"
              height="20"
            />
            Create New Session
          </button>
        </li>
      </ul>
      <hr />
      <div class="dropdown">
        <a
          href="/profile"
          class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
        >
          <img
            src={profilePic}
            alt=""
            width="55"
            height="55"
            class="rounded-circle me-2"
          />
          <strong>Unga Bunga</strong>
        </a>
      </div>
    </div>
  );
}
