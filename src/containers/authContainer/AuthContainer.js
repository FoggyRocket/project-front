import React, {Component} from "react";




export default class AuthContainer extends Component {
    render(){
        return(
            <section className="uk-section">
                <div className="uk-container uk-flex uk-flex-center">
                    <div className="uk-width-1-4">
                        <h3>Bienveido </h3>
                        <form
                         className="uk-width-1-1 uk-form-stacked uk-flex uk-flex-center uk-flex-column"
                        >
                            <div className="uk-margin">
                                <div className="uk-inline">
                                    <span className="uk-form-icon" uk-icon="icon: user"></span>
                                    <input className="uk-input" type="text" />
                                </div>
                            </div>

                            <div className="uk-margin">
                                <div className="uk-inline">
                                    <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                                    <input className="uk-input" type="text"/>
                                </div>
                            </div>
                            <button className="uk-button uk-button-primary">
                                Entrar
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}