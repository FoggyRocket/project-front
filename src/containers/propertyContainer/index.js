import React, {Component} from "react";
import AppContext from '../../AppContext';
import { PropertyCard } from "../../components"
//ws
import { createProperty, getPropertyDetail, updateProperty } from "../../services/propertyWs";
import { buildNotification } from "../../utils/notification";
import Form from './Form'

//esta visa nos servira para crear y para ver detalle de las propiedads

export default class PropertyContainer extends Component {
    //Se inicialza context
    static contextType = AppContext;

    state = {
        property:{}
    }

    //utilizamos el ciclo de vida para cargar los datos de la propiedad
    componentWillMount(){
        //utilizamos props de rutas match ya que mandaremos datos por medio del id

        const {id} = this.props.match.params;
        //si viene un id en los paramas realizamos un peticion al backend
        if(id){
            getPropertyDetail(id).then(res =>{
                const {result} = res.data
                this.setState({property: result})
            })
        }
    }


    //handle change para cachar los datos del textInput con una nueva propuesta de para guardar datos
    handleChange = (e) => {
         let {property} = this.state;
         //nueva propuesta para guardar datos
         property = {...property, [e.target.name]:e.target.value};
         this.setState({property})
    }
    //handle Image Change se hace por se parado ya que si recordamos puedemos guardar muchas images 
    //en el backend ya que es un arreglo

    handleImageChange=(e)=>{
        let {property} = this.state;
        //a diferencia del handleChange se agrego split  para poder separ por comas las imagenes que subamos
        //ejemplo: https//wwImagen!.com, http//dadihhoda-.com, 
        property = {...property, [e.target.name]:e.target.value.split(",") };
        this.setState({property})

    }

    handleSubmit = (e)=>{
        e.preventDefault();
        const {property} = this.state;
        const {addProperty} = this.context;
        const {history} = this.props
        const {id } = this.props.match.params;

        //actiones como se reutiliza esta vista verificamos dependiendo de si existe un id
        //realizamos un update o creamos una propiedad

        const action = id ? updateProperty : createProperty //<---- son ws(webservices) chequen si se importaron
        const params = id ? (property, id) : { property } // creamos los parametros depeiendo de la accion 
        action(params)
        .then((res)=>{
            const {result} = res.data
            addProperty(result);
            history.push("/")
        })
        .catch(error=>{
            //almacenamos los errores una variable y sacamos solo los mensajes!!
            const errors = Object.values(error.response.data.error)
            //recorremos el arreglo y constuimos la notificacion (importar buildNotification)
            //error = al mensaje, "danger" = al color de la notificacion, close = si tiene o no metodo para cerra
        
            errors.map((error) => buildNotification(error,"danger","close"))
        })
    }
    render(){
        const {property} = this.state
        return(
            <section className="uk-section">
                <div className="uk-container">
                    <h3>Crear propiedad</h3>
                    <div className="uk-grid uk-child-width-1-2">
                        <Form 
                            property = {property}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            handleImagesChange={this.handleImageChange}
                        />
                        <div>
                            <PropertyCard {...property} isDemo={true} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}