import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp'
import Login from './pages/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" exact={true} element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
}

export default App;


















// function App() {
//   const [message, setMessage] = useState([]);

//   useEffect(() => {
//     fetch("/greencube/login")
//       .then((response) => {
//         return response.json();
//       })
//       .then(function (data) {
//         setMessage(data);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <ul>
//           {message.map((text, index) => <li key={`${index}-${text}`}>{text}</li>)}
//         </ul>
//       </header>
//     </div>
//   );
// }