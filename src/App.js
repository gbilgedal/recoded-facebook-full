import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import SignUpPage from "./SignUp";
import Navbar from "./Navbar";
import FacebookPage from "./Facebook";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path={"/helloworld"} component={SignUpPage} />
          <Route exact path={"/facebook"} component={FacebookPage} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
