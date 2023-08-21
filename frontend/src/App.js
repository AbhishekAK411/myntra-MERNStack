import './App.css';
import {Routes, Route} from "react-router-dom";
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import Single from './Components/Single';
import Basket from './Components/Basket';

function App() {
  return (
    <Routes>
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/single" element={<Single />} />
      <Route exact path="/basket" element={<Basket />} />
    </Routes>
  );
}

export default App;
