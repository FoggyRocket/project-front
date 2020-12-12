import React, {Component} from "react";
import { login } from "../../services/userWs";
import { Link } from 'react-router-dom';
import AppContext from '../../AppContext';

export default class AuthContainer extends Component {
    //usar static para poder usar context
    static contextType = AppContext;

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
        login(this.state.data).then((response)=>{
            //aqui andetro si todo sale bien 
            //monstramos un mensaje y mandamos a la siguiente seccion
            this.setState({ data:{}})
            //vamos a guardar los datos en local para ya no volver a realizar 
            //una peticion 
            //estructura basica localSotrage.metodo("llave",JSON.stringyfy("dylan")) //PURO TEXTO
            // si dato es un objeto o arreglo hay que convertilo a texto plano!! JSON.stringyfy(dato)
           
            localStorage.setItem( "user",JSON.stringify( response.data.user ) )
            //setearemos el usuario hasta el app D:!!
            //destoructurando
            
            this.context.setUser(response.data.user)
            console.log( "Felicidades", JSON.stringify(response.data.user) )

        }).catch((error)=>{
            console.log("hay un error",error)
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
                        <h3>Bienveido </h3>
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
                            <div className="uk-text-meta">
                                Aún no tienes cuenta?{" "}
                                <Link className="uk-text-primary" to="/signup" >
                                    Create una cuenta Morr@
                                </Link>
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