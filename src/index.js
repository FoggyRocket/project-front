import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// me importo uikit!!!
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "uikit/dist/css/uikit.min.css"
//importamos la configuracion de las rutas!!
import { BrowserRouter } from "react-router-dom"
//usamos uikit para los iconos
UIkit.use(Icons)

//Declaramos el WithRouter para usar las rutas!!!
//JSX
const WithRouter = ()=>(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
ReactDOM.render(
    <WithRouter />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
