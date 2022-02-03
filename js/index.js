console.log( "Funciona!" );

function obtenerUsuarios(){
    let config = {
        method : "GET"
    };

    fetch( "http://127.0.0.1:5000/api/usuarios", config )
        .then( respuesta => {
            if( respuesta.ok ){
                return respuesta.json()
            }
        })
        .then( datos => {
            let listaUsuarios = document.querySelector( '.listaUsuarios' );
            for( let i = 0; i < datos.length; i ++ ){
                listaUsuarios.innerHTML += `<li> ${datos[i].nombre} ${datos[i].apellido} </li>`;
            }
        });
}

function agregarUsuario( event ){
    event.preventDefault();

    let datos = {
        "nombre" : event.target.nombre.value,
        "apellido" : event.target.apellido.value,
        "id_departamento" : event.target.departamento.value,
        "nombreusuario" : event.target.nombreUsuario.value,
        "password" : event.target.password.value
    }

    let config = {
        method : 'POST',
        headers : {
            'Content-type' : 'application/json'
        },
        body : JSON.stringify( datos )
    };

    fetch( 'http://127.0.0.1:5000/api/usuarios/crear', config )
        .then( respuesta => {
            if( respuesta.ok ){
                return respuesta.json()
            }
        })
        .then( respuestaJSON => {
            console.log( respuestaJSON );
            let listaUsuarios = document.querySelector( '.listaUsuarios' );
            listaUsuarios.innerHTML += `<li> ${datos.nombre} ${datos.apellido} </li>`
        });
    
}

obtenerUsuarios();

let formularioAgregaUsuario = document.querySelector( '.agregaUsuario' );
formularioAgregaUsuario.addEventListener( 'submit', agregarUsuario );


