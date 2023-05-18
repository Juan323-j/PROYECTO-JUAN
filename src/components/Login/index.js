import React, { useState } from 'react';
import usersData from '../../data.json';
import { Link, useHistory  } from "react-router-dom";



  const  Login = () => {
      const history = useHistory();
      const irAPantalla = () => {
        history.push('/reloj');
      }
      
    
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        function handleLogin(event) {
        event.preventDefault(); // Evita que el formulario se envíe y se recargue la página
              
                // Verificar las credenciales
                const user = usersData.users.find(
                  (userData) => userData.username === username && userData.password === password
                );
              
                if (user) {
                  // Credenciales válidas, realizar acciones de inicio de sesión exitoso
                  alert("Bienvenido, ya eres parte de nuestro equipo");
                  irAPantalla();
                
                } else {
                  // Credenciales inválidas, mostrar mensaje de error o realizar acciones adicionales
                  alert("Tus datos son incorrectos");
                }
              }
          
                // ...
              
                return (
<div id="template-bg-1" onSubmit={handleLogin}>
<div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
< div class="card p-4 text-light bg-dark mb-5">
          <div class="card-header">
          <h3>Iniciar sesión </h3>
</div>
        <div class="card-body w-100">
        <form name="login" action="" method="post">
        <div class="input-group form-group mt-3">
        <div class="bg-secondary rounded-start">
        <span class="m-3"><i class="fas fa-user mt-2"></i></span>
        </div>
<input type="text" class="form-control"  name="username"
placeholder="Nombre de usuario"
value={username}
onChange={(event) => setUsername(event.target.value)}
/>
</div>
   <div class="input-group form-group mt-3">
   <div class="bg-secondary rounded-start">
<span className="m-3"><i class="fas fa-key mt-2"></i></span>
  </div>
<input  class="form-control"  name="password"
type="password"
placeholder="Contraseña"
value={password}
onChange={(event) => setPassword(event.target.value)}
/>
</div>

<div class="form-group mt-3">
<input type="submit" value="Ingresar" class="btn bg-secondary float-end text-white w-100" name="login-btn"  
/> 
        </div>
</form>
<div class="text-danger">
  </div>

        </div>
<div class="card-footer">
        <div class="d-flex justify-content-center">
            <div class="text-primary"></div>
</div>
    </div>
          </div>
              </div>
</div>
        
                );
                 
              
              


  };
  export default Login;