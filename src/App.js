import React, {Component} from 'react';
import './App.css';
import {Navbar} from './components';
import Routes from './Routes';
import { logout } from './services/userWs';
import AppContext from './AppContext';

import { withRouter } from 'react-router-dom';
class  App extends Component {

  //State nuevo en app
  state = {
    user : JSON.parse( localStorage.getItem("user")   )  || {},
    properties: {},
    userProperties: {},
    userReservation: {}
  }
  //Simplemente borra la cookie 
  // y nos mueve al login! borrando el usuario!! 
  logout = () => {
    const { history } = this.props;
    logout().then(() => {
      localStorage.removeItem("user"); //<--- Es para almacenar localmente 
      
      this.setState({ user: {} });
      history.push("/login");// esto hace el redirect
    });
  };

  //setUSER es para hacer el hack y guar el usuario de una vez y no tener que hacer refresh()

  setUser = (user) => {
    this.setState({user})
  }

  setProperties = (properties) => {
    this.setState({ properties })
  }
  setUserProperties = (userProperties) =>{
    this.setState({ userProperties })
  }

  setUserReservation=(userReservation)=>{
    this.setState({ userReservation })
  }

  addProperty = (property) =>{
    //me destructuro el state para trabajer mejor
    let {properties} = this.state;
    //creamos un nuevo objeto con la llave id del propio y asignamos sus valores, 
    // con spread operator llenamos nuevemente con los valores anteriores 

    properties = { [property._id]: property, ...property };
    this.setState({properties})
  }

  render(){
    //destructure el contexto
    const { 
      state,
      logout,
      setUser,
      setProperties,
      setUserProperties,
      setUserReservation,
      addProperty
    } = this

    return (
      <AppContext.Provider 
        value={{
          state,
          logout,
          setUser,
          setProperties,
          setUserProperties,
          setUserReservation,
          addProperty
        }}
      >
        <div >
          <Navbar user={state.user} logout={logout}/>
          <Routes />
        </div>

      </AppContext.Provider>
    );
  }
}
//le daamos las propiedad de ruta a nuestro App 

const AppWithRouter = withRouter(App)


export default AppWithRouter;
