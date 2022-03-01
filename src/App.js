import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Notfound from "./Components/Notfound/Notfound";
import Doctors from "./Components/Doctor/Doctors";

import Home from "./Components/Home/Home";

import Services from "./Components/Service/Services";
import Department from "./Components/Department/Department";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sign from "./Components/SingIn/Sign";
import Login from "./Components/Login/Login";
import Authprovider from "./Components/context/Authprovider";
import Privateroute from "./Components/PrivateRoute/Privatroute";
import Details from "./Components/Details/Details";
import Select from "./Components/Select/Select";

function App() {
  return (
    <div>
      <Authprovider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>

            <Privateroute path="/department">
              <Department></Department>
            </Privateroute>

            <Privateroute path="/Details/:serviceId">
              <Details></Details>
            </Privateroute>

            <Route path="/SignIn">
              <Sign></Sign>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/select">
              <Select></Select>
            </Route>

            <Route path="*">
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
