import React, {Component} from "react";
import {Link} from "react-router-dom";


class HomeContainer extends Component{
    render(){
        return(
            <div className="uk-section">
                Este es mi home
                <Link to="/signup">
                    Registro
                </Link>
                <Link to="/login">
                    Ingresar
                </Link>
                <div className="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top" 
                style={{
                    backgroundImage:"url('https://www.construyehogar.com/wp-content/uploads/2016/10/Hermosa-casa-de-%C3%A1rbol.jpg')"
                }}
                >
                    <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                        <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">Headline</h1>
                        <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
         

            </div>
        )
    }
}

export default HomeContainer;