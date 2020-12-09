import React, {Component} from "react";
import { signup } from "../../services/userWs";
import {Link} from "react-router-dom"


export default class SignupContainer extends Component {
    //state === minibase de datos para la clase e hijos en caso de que los herede (o se los pase)
    state = {
      data:{}
    }

    // esta funcion es para esuchar todo lo que estemos tecleando y 
    // poder guardarlo en data (esta en el state)
    // para puros inputs
    handleChange = (event)=>{
                // {key:value}
        const { value, name} = event.target;
        let { data } = this.state

        data[name] = value

        this.setState({ data })
    }
    //esta funcion es para enviar los datos a la base de datos y validar 
    //esto va en el form 
    onSubmit = (event) => {
        event.preventDefault()
        console.log("Voy a enviar datos")
        //voy a destructurar los pros
        const { history } = this.props;

        signup(this.state.data).then((response)=>{
            //aqui andetro si todo sale bien 
            //monstramos un mensaje y mandamos a la siguiente seccion
            this.setState({ data:{}})
            console.log("Felicidades",response)
            history.push("/login")

        }).catch((error)=>{
            console.log("hay un error",error.response)
        })

        
    }

    render(){
        //aque podemos declarar const var y let
        const {handleChange, onSubmit} = this;
        const {data} = this.state;
        return(
            <section className="uk-section">
                <div className="uk-container uk-flex uk-flex-center">
                    <div className="uk-width-1-4">
                        <h3>Registrate </h3>
                        <form
                        // metodo={(event)=>onSumit(event)}
                            onSubmit={onSubmit}
                         className="uk-width-1-1 uk-form-stacked uk-flex uk-flex-center uk-flex-column"
                        >
                            <div className="uk-margin">
                                <div className="uk-inline">
                                    <span className="uk-form-icon" uk-icon="icon: user"></span>
                                    <input 
                                        className="uk-input"
                                        type="email"
                                        name="email"
                                        onChange={handleChange} 
                                        required
                                        value={data["email"] ? data["email"] : ""}    
                                    />
                                </div>
                            </div>

                            <div className="uk-margin">
                                <div className="uk-inline">
                                    <span className="uk-form-icon" uk-icon="icon: user"></span>
                                    <input 
                                        className="uk-input"
                                        type="text"
                                        name="name"
                                        onChange={handleChange} 
                                        required
                                        value={data["name"] ? data["name"] : ""}    
                                    />
                                </div>
                            </div>

                            <div className="uk-margin">
                                <div className="uk-inline">
                                    <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                                    <input 
                                        className="uk-input" 
                                        type="password"
                                        required
                                        name="password"
                                        onChange={handleChange}
                                        value={data["password"] ? data["password"] : ""}
                                    />
                                </div>
                            </div>

                            <div className="uk-margin">
                                <div className="uk-inline">
                                    <span className="uk-form-icon" uk-icon="icon: lock"></span>
                                    <input 
                                        className="uk-input"
                                        type="password"
                                        name="confirmPassword"
                                        onChange={handleChange} 
                                        required
                                        value={data["confirmPassword"] ? data["confirmPassword"] : ""}    
                                    />
                                </div>
                            </div>

                            <div className="uk-text-meta">
                                Ya tienes cuenta?{" "}
                                <Link className="uk-text-primary" to="/login" >
                                    Ingresa morr@
                                </Link>
                            </div>

                            <button className="uk-button uk-button-primary">
                                Registrate
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}