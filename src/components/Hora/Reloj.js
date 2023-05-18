import { useEffect, useRef } from "react";
import "./estilos.css";

export default function Reloj() {
  const h1 = useRef();//aqui ire  guardando los atributos
  const tiempo = () => {
    //creando las variables cuyo metodo sera desde horas hasta segundos
    const fechahora = new Date();
    const hora = fechahora.getHours();
    const minuto = fechahora.getMinutes();
    const segundo = fechahora.getSeconds();
    //retornarndo en concatenacion el reloj
    return `${hora}:${minuto}:${segundo}`;
  };
  useEffect(() => {
    //creando un estado diferente con un nuevo nombre aclado como
    const nuevtiem = setInterval(() => {
        //devolevoler en sintaxis html con la concatenación de nuestra funcion flecha tiempo
      h1.current.innerHTML = `${tiempo()}`;
    }, 1000);
  
    return () => clearInterval(nuevtiem);
  }, []);
 
  return (
    //sintaxis en html para mostrar mis datos
    <div className="Reloj">
      <h1 ref={h1}>{tiempo()}</h1>
      <h2>Miercoles 17 del 2023</h2>
    </div>
  );
}
