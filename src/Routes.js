import React from "react";
import {Switch, Route} from "react-router-dom";
import AuthContainer from "./containers/authContainer/AuthContainer";
import SignupContainer from "./containers/authContainer/SignupContainer";
import HomeContainer from "./containers/homeContainer";
import PropertyContainer from "./containers/propertyContainer";
import ReservationForm from "./containers/reservationContainer";
import UserProfile from "./containers/userProfile";



const Routes = () => (
    <Switch>
        {/* https://www.dylanpage.com/  */}
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/login"  component={AuthContainer}   />
        <Route exact path="/signup"  component={SignupContainer}   />
        <Route exact path="/property/new"  component={PropertyContainer}   />
        <Route exact path="/property/:id"  component={PropertyContainer}   />
        <Route exact path="/profile"  component={UserProfile}   />
        <Route exact path="/reservate/:property_id"  component={ReservationForm}   />
        <Route exact path="/property/:id/edit"  component={ReservationForm}   />



    </Switch>
);


export default Routes;