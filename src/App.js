
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/MainPages/Blogs/Blogs';
import Dashboard from './Components/MainPages/Dashboard/Dashboard';
import AddReview from './Components/MainPages/Dashboard/UsersPage/AddReview';
import MyOrders from './Components/MainPages/Dashboard/UsersPage/MyOrders';
import MyProfile from './Components/MainPages/Dashboard/UsersPage/MyProfile';
import Home from './Components/MainPages/Home/Home';
import NotFound from './Components/MainPages/NotFound/NotFound';
import Purchase from './Components/MainPages/Purchase/Purchase';
import RequireAuth from './Components/RegistrationPages/RequireAuth/RequireAuth';
import SignIn from './Components/RegistrationPages/SignIn/SignIn';
import SignUp from './Components/RegistrationPages/SignUp/SignUp';
import Footer from './Components/SharedPages/Footer/Footer';
import Header from './Components/SharedPages/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/product/:Id" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>


      <Footer></Footer>

    </div>
  );
}

export default App;
