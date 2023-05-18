import React, { useState, useEffect} from "react"
const style = {
    width: '18rem',
    textAlign: 'center',
    borderColor: 'black'
  };
const Nasa = () => {
    const [api, setApi] = useState();
    console.log(api);
    useEffect(() => {
        apiData();
    }, []);
    const apiData = () => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response => response.json())
        .then((data) => {
            setApi(data);   
        })
        .catch((error)=> {    
            console.log(error);
        })
    };
  

    return(

<div class="card" style={style}>
 <img src={api?.hdurl} width={200} height={200} style={style}></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p width={200} height={200}>{api?.title}</p>
  </div>
</div>

    );
};
export default Nasa;
