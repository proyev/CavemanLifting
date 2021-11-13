import React from 'react';
import './Sidebar.css';

import profilePic from '../../assets/caveman_profile_pic.PNG';
import logo from '../../assets/caveman.svg';
import home from '../../assets/home.svg';
import user from '../../assets/user.svg';
import dumbbell from '../../assets/fitness-centre.svg';
import building from '../../assets/building.svg';
import plus from '../../assets/plus.svg';

export default function Sidebar({ toggleForm }) {
  // This is a large file of what essentially is just cloning the same code over and over in order to get
  // an eye-pleasing sidebar
  // This was also done using  a mixture of CSS & Bootstrap
  // className can be used to assign values in Bootstrap, it can get a bit confusing but searching
  // the acronym in the DOCS helps

  // <Link to="/dashboard"> </Link>

  return (
    <div className="sidebar__container">
      <a href="/dashboard" className="text-center">
        <img alt="Navigate to dashboard" src={logo} id="logo__pic"></img>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a
            href="/dashboard"
            className="nav-link text-dark"
            aria-current="page"
          >
            <img
              alt="Navigate to dashboard"
              src={home}
              className="me-2"
              width="20"
              height="20"
            />
            Home
          </a>
        </li>
        <li>
          <a href="/profile" className="nav-link text-dark">
            <img
              alt="Navigate to profile"
              src={user}
              className="me-2"
              width="20"
              height="20"
            />
            Profile
          </a>
        </li>
        <li>
          <a href="/workoutinfo" className="nav-link text-dark">
            <img
              alt="View workouts"
              src={dumbbell}
              className="me-2"
              width="20"
              height="20"
            />
            Workouts
          </a>
        </li>
        <li>
          <a href="/gyms" className="nav-link text-dark">
            <img
              alt="View local gyms"
              src={building}
              className="me-2"
              width="20"
              height="20"
            />
            Gyms
          </a>
        </li>
        <li>
          <button className="nav-link text-dark" onClick={toggleForm}>
            <img
              alt="Add a new session"
              src={plus}
              className="me-2"
              width="20"
              height="20"
            />
            Create New Session
          </button>
        </li>
      </ul>
      <hr />

      <a
        href="/profile"
        className="d-flex align-items-center text-dark text-decoration-none"
      >
        <img
          src={profilePic}
          alt=""
          width="55"
          height="55"
          className="rounded-circle me-2"
        />
        <strong>Unga Bunga</strong>
      </a>
    </div>
  );
}

// return (
//   <Router>
//     <div className="sidebar__container">
//       <a href="/dashboard" className="text-center">
//         <img
//           alt="Navigate to dashboard"
//           src={logo}
//           // width="200"
//           // height="100"
//           id="logo__pic"
//         ></img>
//       </a>
//       <hr />
//       <ul className="nav nav-pills flex-column mb-auto">
//         <li className="nav-item">
//           <a
//             href="/dashboard"
//             className="nav-link text-white"
//             aria-current="page"
//           >
//             <img
//               alt="Navigate to dashboard"
//               src={home}
//               className="me-2"
//               width="20"
//               height="20"
//             />
//             Home
//           </a>
//         </li>
//         <li>
//           <a href="/profile" className="nav-link text-white">
//             <img
//               alt="Navigate to profile"
//               src={user}
//               className="me-2"
//               width="20"
//               height="20"
//             />
//             Profile
//           </a>
//         </li>
//         <li>
//           <a href="/workoutinfo" className="nav-link text-white">
//             <img
//               alt="View workouts"
//               src={dumbbell}
//               className="me-2"
//               width="20"
//               height="20"
//             />
//             Workouts
//           </a>
//         </li>
//         <li>
//           <a href="/gyms" className="nav-link text-white">
//             <img
//               alt="View local gyms"
//               src={building}
//               className="me-2"
//               width="20"
//               height="20"
//             />
//             Gyms
//           </a>
//         </li>
//         <li>
//           <button className="nav-link text-white" onClick={toggleForm}>
//             <img
//               alt="Add a new session"
//               src={plus}
//               className="me-2"
//               width="20"
//               height="20"
//             />
//             Create New Session
//           </button>
//         </li>
//       </ul>
//       <hr />
//       <div className="dropdown">
//         <a
//           href="/profile"
//           className="d-flex align-items-center text-white text-decoration-none"
//         >
//           <img
//             src={profilePic}
//             alt=""
//             width="55"
//             height="55"
//             className="rounded-circle me-2"
//           />
//           <strong>Unga Bunga</strong>
//         </a>
//         <Routes>
//           <Route path="/dashboard" element={componentDecider('/dashboard')} />
//           <Route path="/profile" element={componentDecider('/profile')} />
//           <Route
//             path="/workoutinfo"
//             element={componentDecider('/workoutinfo')}
//           />
//           <Route path="/gyms" element={componentDecider('/gyms')} />
//         </Routes>
//       </div>
//     </div>
//   </Router>
// );
// }
