// import React, { useState, useEffect } from "react";
import React from "react";

// // SERVICES THAT CALL OUR API ENDPOINTS
// import { getAllProfiles } from "./services/profileService";

// function App() {
//   const [profiles, setProfiles] = useState(null);

//   useEffect(() => {
//     async function getProfiles() {
//       if (!profiles) {
//         const response = await getAllProfiles();
//         setProfiles(response);
//       }
//     }

//     getProfiles();
//   }, [profiles]);

//   const renderProfile = (user) => {
//     return (
//       <li key={user._id}>
//         <h3>
//           {`${user.first_name} 
//           ${user.last_name}`}
//         </h3>
//         <p>{user.location}</p>
//       </li>
//     );
//   };

//   return (
//     <div>
//       <ul>
//         {profiles && profiles.length > 0 ? (
//           profiles.map((profile) => renderProfile(profile))
//         ) : (
//           <p>No profiles found</p>
//         )}
//       </ul>
//     </div>
//   );
// }
// import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Home from "./Home.js";


function App() {
  return (
    // BEM
    <div className="app">
  
      <Header />
      <Home /> 
     

    </div>
  );
}

export default App;
