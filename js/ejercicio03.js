// Personalizamos el separador del ejercicio 03 
console.log("%cEjercicio 03: Funciones ",style_console);

//1. Funciones Procedurales, funciones vacias (VOID) o funciones que no retornan un valor
console.warn("1.- Funciones Procedurales");
function saludar()
{
    console.log("Bienvenido al sistema de Bienes Raíces");
}
 saludar();

 //2. Funciones Procedurales con parametros de entrada, es decir, que reciben datos para funcionar

 function saludarUsuario(nombreUsuario, generoUsuario)
 {
    if(generoUsuario == "H")
        console.log(`Bienvenido ${nombreUsuario} al sistema de Bienes Raíces`);
    else if(generoUsuario =="M")
        console.log(`Bienvenida ${nombreUsuario} al sistema de Bienes Raíces`);
    else 
        console.log(`Bienvenid@ ${nombreUsuario} al sistema de Bienes Raíces`);
 }

 console.warn("2. Funciones Procedurales con parametros de Entrada");
 // Test 1:
 console.log("nombreUsuario = Juan, generoUsuario = H ")
 saludarUsuario("Juan", "H");
  // Test 2:
 console.log("nombreUsuario = Vanessa, generoUsuario = M ")
 saludarUsuario("Vanessa", "M");
  // Test 3:
 console.log("nombreUsuario = Jan, generoUsuario = null ")
 saludarUsuario("Jan", null);

// 3. Funciones que retornan un valor pero que no reciben parámetro (Datos de Entrada)

function fechaActual()
{
    const fecha = new Date()  //Milisegundos
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"]
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

    const fecha_formatoMX = `${dias[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;

    return fecha_formatoMX

}

console.warn("3.- Funciones que retornan un valor, pero tienen parametros de entrada");
let hoy = fechaActual();
console.log(fechaActual);
console.log(typeof(fechaActual));
console.log(hoy);

// 4. Funciones que Retornan un valor y reciben parámetos (datos de entrada)

function login(userName, password)
{
    let userValidation = false;

    if(userName === "admin" && password == "12345")
    {
        userValidation = true;
        console.log("Bienvenido Usuario Admin")
    }
    else if (userName === "admin" && password!= "12345")
    {
        userValidation = false;
        console.log("Error en la contraseña del admin")
    }
    else if (userName!= "admin" && password=="12345")
    {
        userValidation = false;
        console.log("Error el usuario no existe")
    }
    else if (userName!= "admin" && password!= "12345" )
    {
        userValidation = false;
        console.log ("Por Favor verifica, el usuario y la contraseña estan incorrectos")
    }
    return userValidation;
}

console.warn("4.- Funciones que retornan un dato y reciben parametros de entrada");
var loginStatus;

// Test 1 - Usuario y Contraseñas Correctos
console.log("Test 1 - Usuario: admin , password: 12345");
loginStatus = login("admin", "12345");
console.log(`${loginStatus? "El usuario admin se ha logeado correctamente." : "Hubo un error en el login del usuario admin."}`);

// Test 2 - Usuario Correcto y Contraseñas Incorrecta
console.log("Test 2 - Usuario: admin , password: 1234567890");
loginStatus = login("admin", "1234567890");
console.log(`${loginStatus? "El usuario admin se ha logeado correctamente." : "Hubo un error en el login del usuario admin."}`);

// Test 3 - Usuario Incorrecto y Contraseña Correcta
console.log("Test 3 - Usuario: admin , password: 12345");
loginStatus = login("administrador", "12345");
console.log(`${loginStatus? "El usuario admin se ha logeado correctamente." : "Hubo un error en el login del usuario admin."}`);

// Test 4 - Usuario y Contraseñas Incorrecta
console.log("Test 4 - Usuario: Vanessa , password: abcd");
loginStatus = login("Vanessa", "abcd");
console.log(`${loginStatus? "El usuario admin se ha logeado correctamente." : "Hubo un error en el login del usuario admin."}`);
