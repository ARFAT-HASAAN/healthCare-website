
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Notfound from './Components/Notfound/Notfound';
import Doctors from './Components/Doctor/Doctors';

import Home from './Components/Home/Home'


import Services from './Components/Service/Services';
import Department from './Components/Department/Department';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sign from './Components/SingIn/Sign';
import Login from './Components/Login/Login';
import Authprovider from './Components/context/Authprovider';
import Privateroute from './Components/PrivateRoute/Privatroute'
import Details from './Components/Details/Details';

function App() {
  return (
    <div>
      <Authprovider>

        <Router>
          <Header></Header>

          <Switch>
            <Route exact path='/' >
              <Home></Home>
            </Route>

            <Route exact path='/home' >
              <Home></Home>
            </Route>

            <Privateroute exact path='/doctors' >
              <Doctors></Doctors>
            </Privateroute>


            <Privateroute exact path='/department'>
              <Department></Department>
            </Privateroute>

            <Privateroute exact path='/Details/:serviceId'>
              <Details></Details>
            </Privateroute>

            <Route exact path='/SignIn'>
              <Sign></Sign>
            </Route>

            <Route exact path='/login'>
              <Login></Login>
            </Route>

            <Route exact path='*'>
              <Notfound></Notfound>

            </Route>

          </Switch>

          <Footer></Footer>

        </Router>
      </Authprovider>


    </div>
  );
}

export default App;
