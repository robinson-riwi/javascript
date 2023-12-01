var persons = [
    {
       nombre: "Julian",
       apellidos: "Jimenex",
       correo : "julian@gmail.com"
    },
    {
       nombre: "Andres",
       apellidos: "Martinez",
       correo : "andres@gmail.com"
    },
    {
       nombre: "carmen",
       apellidos: "matias",
       correo : "carmen@gmail.com"
    }];

    function actualizar(posicion){
       let nombre = document.getElementById('nombre_' + posicion).value;
       let apellido = document.getElementById('apellido_' + posicion).value;
       let correo = document.getElementById('correo_' + posicion).value;
       
       persons[posicion].nombre = nombre;
       persons[posicion].apellidos = apellido;
       persons[posicion].correo = correo;
       console.log(persons);
      
    }

    console.log(persons);