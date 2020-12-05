import React from "react";
import {Switch, Route} from "react-router-dom";
import AuthContainer from "./containers/authContainer/AuthContainer";



const Routes = () => (
    <Switch>
        {/* https://www.dylanpage.com/  */}
        <Route exact path="/"  component={AuthContainer}   />
    </Switch>
);


export default Routes;