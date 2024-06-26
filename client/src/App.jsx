import axios from "axios";
import {  UserContextProvider } from "./UserContext";
import Routes from "./Routes";

function App() {
 
  // axios.defaults.baseURL = 'http://localhost:4040';
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

 
  // axios.defaults.baseURL = 'http://localhost:5173';
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
   
  )
}

export default App


// import axios from "axios";
// import {UserContextProvider} from "./UserContext";
// import Routes from "./Routes";

// function App() {
//   axios.defaults.baseURL = 'http://localhost:4040';
//   axios.defaults.withCredentials = true;
//   return (
//     <UserContextProvider>
//       <Routes />
//     </UserContextProvider>
//   )
// }

// export default App
