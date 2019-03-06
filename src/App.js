import React, { Component } from 'react';
import MainComponent from './components/main';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import SignUp from './components/signUp';
import {Row, Col} from  'reactstrap';
import {Button} from 'reactstrap';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,} from 'reactstrap';
import Login from './components/login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar color="white" light expand="md">
              <NavbarBrand>
                <a href={"https://springrole.com"}><img src={"/images/logo.png"} width={"150"} alt="" /></a>
              </NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/vanity"><Button color="primary">SignUp</Button></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/login"><Button outline color="primary">Login</Button></NavLink>
                </NavItem>
              </Nav>
          </Navbar>
          
          <Switch>
            <Route path="/" component={MainComponent} exact />
            <Route path="/vanity" component={SignUp} exact/>
            <Route path="/login" component={Login} />
          </Switch>
          
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
