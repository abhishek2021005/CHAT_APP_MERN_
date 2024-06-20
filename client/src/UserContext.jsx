// // import {createContext, useEffect, useState} from "react";
// // import axios from "axios";

// // export const UserContext = createContext({});

// // export function UserContextProvider({children}) {
// //   const [username, setUsername] = useState(null);
// //   const [id, setId] = useState(null);
// //   useEffect(() => {
// //     axios.get('/profile').then(response => {
// //       setId(response.data.userId);
// //       setUsername(response.data.username);
// //     });
// //   }, []);
// //   return (
// //     <UserContext.Provider value={{username, setUsername, id, setId}}>
// //       {children}
// //     </UserContext.Provider>
// //   );
// // }

// // import {createContext, useEffect, useState} from "react";
// // import axios from "axios";

// // export const UserContext = createContext({});

// // export function UserContextProvider({children}) {
// //   const [username, setUsername] = useState(null);
// //   const [id, setId] = useState(null);
// //   useEffect(() => {
// //     axios.get('/profile').then(response => {
// //       setId(response.data.userId);
// //       setUsername(response.data.username);
// //     });
// //   }, []);
// //   return (
// //     <UserContext.Provider value={{username, setUsername, id, setId}}>
// //       {children}
// //     </UserContext.Provider>
// //   );
// // }

// import { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const UserContext = createContext({});

// export function UserContextProvider({ children }) {
//   const [username, setUsername] = useState(null);
//   const [id, setId] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get('/profile')
//       .then(response => {
//         setId(response.data.userId);
//         setUsername(response.data.username);
//       })
//       .catch(error => {
//         setError(error); // Handle the error
//         console.error("Error fetching user profile:", error);
//       });
//   }, []);

//   return (
//     <UserContext.Provider value={{ username, setUsername, id, setId, error }}>
//       {children}
//     </UserContext.Provider>
//   );
// }


import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const UserContext = createContext({});

// eslint-disable-next-line react/prop-types
export function UserContextProvider({children}) {
  const [username, setUsername] = useState(null);
  const [id, setId] = useState(null);
  useEffect(() => {
    axios.get('/profile').then(response => {
      setId(response.data.userId);
      setUsername(response.data.username);
    });
  }, []);
  return (
    <UserContext.Provider value={{username, setUsername, id, setId}}>
      {children}
    </UserContext.Provider>
  );
}