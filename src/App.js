import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Routes from './Routes';
import { logout } from './services/userWs';
import AppContext from './AppContext';

class  App extends Component {

  //State nuevo en app
  state = {
    user : JSON.parse( localStorage.getItem("user")   )  || {}
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
  render(){
    //destructure el contexto
    const { state,logout,setUser } = this
    return (
      <AppContext.Provider 
        value={{
          state,
          logout,
          setUser
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

export default App;
