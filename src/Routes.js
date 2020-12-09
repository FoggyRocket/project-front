import React from "react";
import {Switch, Route} from "react-router-dom";
import AuthContainer from "./containers/authContainer/AuthContainer";
import SignupContainer from "./containers/authContainer/SignupContainer";
import HomeContainer from "./containers/homeContainer";



const Routes = () => (
    <Switch>
        {/* https://www.dylanpage.com/  */}
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/login"  component={AuthContainer}   />
        <Route exact path="/signup"  component={SignupContainer}   />
    </Switch>
);


export default Routes;