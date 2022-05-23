
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/MainPages/Home/Home';
import NotFound from './Components/MainPages/NotFound/NotFound';
import SignUp from './Components/RegistrationPages/SignUp/SignUp';
import Footer from './Components/SharedPages/Footer/Footer';
import Header from './Components/SharedPages/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>


      <Footer></Footer>

    </div>
  );
}

export default App;
