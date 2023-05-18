import React from "react"
const Nasa = () => {
  //consumo de servicio web
fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
.then(response => response.json())
.then((data) => {
    //agregar un nuevo nodo ne base a los atributos de la api de la nasa en el documento
    console.log(data)
    //eleccionar un elemento del documento
    const granulosUI = document.getElementById("granulos")
    //recorro los datos en la lista
    data.response.forEach((granulo) => {
        const item = document.createElement("div");
        item.append(granulo)
        //agregar a la UI
        granulosUI.appendChild(item);
});
    
})
.catch((error)=> {
    //lo intento agregar en un log para que me salga en rojo
    console.log(error);
})
    return(

    <div></div>


    );
};
export default Nasa;
