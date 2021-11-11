import React from 'react';
import './Dashboard.css';

import SessionList from './sessionlist/SessionList';
// import Gym from '../gyms/Gym';
import { Button, Alert, Breadcrumb } from 'react-bootstrap';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <SessionList />
    </div>
  );
}
