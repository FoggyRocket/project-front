import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Routes from './Routes';
import { logout } from './services/userWs';

class  App extends Component {

  //State nuevo en app
  state = {
    user : {}
  }
  logout = () => {
    const { history } = this.props;
    logout().then(() => {
      localStorage.removeItem("user");
      this.setState({ user: {} });
      history.push("/login");
    });
  };
  render(){
    const {state,logout} = this
    return (
      <div >
        <Navbar user={state.user} logout={logout}/>
        <Routes />
      </div>
    );
  }

}

export default App;
