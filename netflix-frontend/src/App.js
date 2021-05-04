import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer/Index';
import Home from './components/Home/Index';
import Main from './components/Main/Index';
import Browse from './components/Browse/Index';
import ShowPage from './components/ShowPage/Index';
import Player from './components/player/Index';
import Profile from './components/Profile/Index';
import SignInPage from './components/SignInPage/Index';
import SignUp from './components/SignUp/Index';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/main">
            <Main/>
          </Route>
          <Route exact path="/browse">
            <Browse/>
          </Route>
          <Route exact path="/show">
            <ShowPage/>
          </Route>
          <Route exact  path="/video">
            <Player/>
          </Route>
          <Route exact path="/who">
            <Profile/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/login">
            <SignInPage/>
          </Route>
          <Route exact path="/register">
            <SignUp/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
  </div> 
  );
}

export default App;


/**
 *    /*
   <Main/>
    <Jumbotron/>
    <FaQ/>
    <Footer/>
    <Home/>*/
