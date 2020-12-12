import React, {Component} from "react";
import {Link} from "react-router-dom";
import AppContext from "../../AppContext";
import { PropertyCard } from "../../components";
import { getProperties, getPropertiesByUser } from "../../services/propertyWs";
import { denormalizeData, normalizeData } from "../../utils/dataUtils";


class HomeContainer extends Component{
    static contextType = AppContext;

    componentDidMount(){
        const {properties,user} = this.context.state;
        const {setProperties} = this.context;
        const {history} = this.props;
        if(!user._id){
            history.push("/login")
        }else{
            if(denormalizeData(properties).length < 1){
                getProperties().then(res=>{
                    const {result} = res.data  
                    const properties = normalizeData(result)
                    console.log(properties)
                    setProperties(properties)
                })
            }
        }

    }
    render(){
        const {properties, user} = this.context.state
        return(
            <div className="uk-section">
                <div className="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top" 
                style={{
                    backgroundImage:"url('https://www.construyehogar.com/wp-content/uploads/2016/10/Hermosa-casa-de-%C3%A1rbol.jpg')"
                }}
                >
                    <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                        <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">IronrbnB</h1>
                        <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">App demo para frontent modulo 2</p>
                    </div>
                </div>
                <div className="uk-container">
                <div className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-3@l  uk-child-width-1-3@m uk-child-width-1-1@s">
                    {denormalizeData(properties).map((property, index) => (
                    <PropertyCard key={index} {...property} userId={user._id} />
                    ))}
                </div>
                </div>
         

            </div>
        )
    }
}

export default HomeContainer;