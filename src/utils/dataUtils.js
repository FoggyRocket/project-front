//normalizar nos crea un objeto con llave de id propiedo del mismo objeto
// se utiliza un reducer para hacer la operacion mas sencilla
export const normalizeData = (arr) => {
    return arr.reduce((acc,item)=>{
        return {...acc,[item._id]:item}
    },{})
}

//vuelve trasformar en un arreglo de objetos sin llaves como nos los manda el response
export const denormalizeData = (obj)=>{
    return Object.values(obj)
}
//ste es un filtro para eliminar un elemento de un objeto

export const filterItem = (items, id) =>{
    delete items[id]
    return items
}