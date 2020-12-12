import React from "react";
import {Switch, Route} from "react-router-dom";
import AuthContainer from "./containers/authContainer/AuthContainer";
import SignupContainer from "./containers/authContainer/SignupContainer";
import HomeContainer from "./containers/homeContainer";
import PropertyContainer from "./containers/propertyContainer";



const Routes = () => (
    <Switch>
        {/* https://www.dylanpage.com/  */}
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/login"  component={AuthContainer}   />
        <Route exact path="/signup"  component={SignupContainer}   />
        <Route exact path="/property/new"  component={PropertyContainer}   />
        <Route exact path="/property/:id"  component={PropertyContainer}   />


    </Switch>
);


export default Routes;