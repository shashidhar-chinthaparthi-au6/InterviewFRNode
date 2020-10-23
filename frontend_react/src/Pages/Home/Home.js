import React from "react";
import Header from "../../Components/Header/Header";
import { Switch, Route } from "react-router-dom";
import NoMatch from "../../Pages/404Page/404Page";
import Profile from "../../Components/Profile/Profile";
const Home = () => {
  return (
    <div>
      <Header />
      <Switch>       
        <Route path="/" component={Profile} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </div>
  );
};

export default Home;
