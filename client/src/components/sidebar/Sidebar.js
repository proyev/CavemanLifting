import React, { useState } from 'react';
import './Sidebar.css';
import {
  Flex,
  Divider,
  Avatar,
  Heading,
  Text,
  IconButton,
  Switch,
} from '@chakra-ui/react';
import { FiMenu, FiHome, FiUser } from 'react-icons/fi';
import { FaCity, FaDumbbell, FaPlusSquare } from 'react-icons/fa';
import profilePic from '../../assets/caveman_profile_pic.PNG';
import NavItem from './navitems/NavItem';
// import logo from '../../assets/caveman.svg';
// import home from '../../assets/home.svg';
// import user from '../../assets/user2.svg';
// import dumbbell from '../../assets/fitness-centre.svg';
// import building from '../../assets/building.svg';
// import plus from '../../assets/plus.svg';

export default function Sidebar({ toggleColorMode }) {
  const [navSize, setSize] = useState('large');

  return (
    // <div className="sidebar__container">
    //   <a href="/dashboard" className="text-center">
    //     <img alt="Navigate to dashboard" src={logo} id="logo__pic"></img>
    //   </a>
    //   <hr />
    //   <ul className="nav nav-pills flex-column mb-auto">
    //     <li className="nav-item">
    //       <a
    //         href="/dashboard"
    //         className="nav-link text-dark"
    //         aria-current="page"
    //       >
    //         <img
    //           alt="Navigate to dashboard"
    //           src={home}
    //           className="me-2"
    //           width="20"
    //           height="20"
    //         />
    //         Home
    //       </a>
    //     </li>
    //     <li>
    //       <a href="/profile" className="nav-link text-dark">
    //         <img
    //           alt="Navigate to profile"
    //           src={user}
    //           className="me-2"
    //           width="20"
    //           height="20"
    //         />
    //         Profile
    //       </a>
    //     </li>
    //     <li>
    //       <a href="/workoutinfo" className="nav-link text-dark">
    //         <img
    //           alt="View workouts"
    //           src={dumbbell}
    //           className="me-2"
    //           width="20"
    //           height="20"
    //         />
    //         Workouts
    //       </a>
    //     </li>
    //     <li>
    //       <a href="/gyms" className="nav-link text-dark">
    //         <img
    //           alt="View local gyms"
    //           src={building}
    //           className="me-2"
    //           width="20"
    //           height="20"
    //         />
    //         Gyms
    //       </a>
    //     </li>
    //     <li>
    //       <button className="nav-link text-dark" onClick={toggleForm}>
    //         <img
    //           alt="Add a new session"
    //           src={plus}
    //           className="me-2"
    //           width="20"
    //           height="20"
    //         />
    //         Create New Session
    //       </button>
    //     </li>
    //   </ul>
    //   <hr />

    //   <a
    //     href="/profile"
    //     className="d-flex align-items-center text-dark text-decoration-none"
    //   >
    //     <img
    //       src={profilePic}
    //       alt=""
    //       width="55"
    //       height="55"
    //       className="rounded-circle me-2"
    //     />
    //     <strong>Unga Bunga</strong>
    //   </a>
    // </div>
    //-------------------------------------------------
    <Flex
      pos="sticky"
      h="100vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize === 'small' ? '15px' : '30px'}
      w={navSize === 'small' ? '75px' : '200px'}
      direction="column"
      justifyContent="space-between"
      bg="tomato"
    >
      <Flex
        p="5%"
        direction="column"
        align={navSize === 'small' ? 'center' : 'flex-start'}
        as="nav"
      >
        <Switch onChange={toggleColorMode} />
        <IconButton
          background="none"
          m={5}
          icon={<FiMenu />}
          onClick={() =>
            navSize === 'small' ? setSize('large') : setSize('small')
          }
        />
        <NavItem
          navSize={navSize}
          title="Dashboard"
          icon={FiHome}
          route="/dashboard"
        ></NavItem>
        <NavItem
          navSize={navSize}
          title="Profile"
          icon={FiUser}
          route="/profile"
        ></NavItem>
        <NavItem
          navSize={navSize}
          title="Workouts"
          icon={FaDumbbell}
          route="/workouts"
        ></NavItem>
        <NavItem
          navSize={navSize}
          title="Gyms"
          icon={FaCity}
          route="/gyms"
        ></NavItem>
        <NavItem
          navSize={navSize}
          title="New Session"
          icon={FaPlusSquare}
        ></NavItem>
      </Flex>

      <Flex
        p="5%"
        direction="column"
        w="100%"
        align={navSize === 'small' ? 'none' : 'flex'}
        mb={4}
      >
        <Divider display={navSize === 'small' ? 'none' : 'flex'} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src={profilePic} />
          <Flex
            direction="column"
            ml={4}
            display={navSize === 'small' ? 'none' : 'flex'}
          >
            <Heading as="h3" size="sm">
              Unga Bunga
            </Heading>
            <Text>SerCaveman</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
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
