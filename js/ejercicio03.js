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
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

    const fecha_formatoMX = `${dias[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;

    return fecha_formatoMX

}

console.warn("3.- Funciones que retornan un valor, pero tienen parametros de entrada");
let hoy = fechaActual();
console.log(fechaActual());
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


// 5. Función anónima sin parámetros
 isNewUser = function () {
    const hoy = new Date();

    return (
        lastLogin.getFullYear() === hoy.getFullYear() &&
        lastLogin.getMonth() === hoy.getMonth() &&
        lastLogin.getDate() === hoy.getDate()
    );
};
console.warn("5. Funciones Anónimas, sin parámetros");

console.log("Test 1 - Fecha de ultimo acceso es igual a la fecha de hoy");
console.log(`La fecha del último acceso es: ${lastLogin}`);
console.log(`El usuario logeado es: ${isNewUser()?"Nuevo Usuario":"Usuario Antiguo"}`);

console.log("--------------------------------------------------");
lastLogin= new Date("2025/12/31");
console.log("Test 2 - Fecha de ultimo acceso es diferente a la fecha de hoy");
console.log(`La fecha del último acceso es: ${lastLogin}`);
console.log(`El usuario logeado es: ${isNewUser()?"Nuevo Usuario":"Usuario Antiguo"}`);

// 6. Funciones Anónimas con Parámetros  (Versión Arrow o Lambda)

const sumar =  (a, b) =>{
    let resultado= a+b;
    return resultado;
}

console.warn("6. Funciones Anónima con Parámetros")
console.log(`El resultado de la suma de 15 + 83 es: ${sumar(15,83)}`);

/* Cuando la función anónima tiene solo una línea de operación se puede usar una versión simplificada que no usa {} llaves , ni la palabra reservada (return) */

const multiplicar = (a,b) => a*b;
console.log(`El resultado de la suma de 15 + 125 es: ${multiplicar(15,125)}`);

// 7. Funciones Callback (Regreaso de llamado)
console.warn("7. Funciones Anónimas Callback (Respuesta)")
const recoverPassword = function(email, callback)
{

    // Generamos el código a enviar al usuario.
    const recoveryCode= Math.floor(1000000 + Math.random()*900000)

    console.log(`
=======================================================================
Solicitud de recuperación recibida
Correo del usuario sollicitante: ${email}
Generando Código de Recuperación...
Código de Seguridad Generado: ${recoveryCode}
Enviando el correo al usuario...
Correo Enviado a : ${email}, con el código de seguridad: ${recoveryCode}
=======================================================================`);


// definiendo la respues del sistema
const response ={
    status: "OK",
    message: "Código de recuperación enviado satisfactoriamente."
};

callback(response);
};

// Invocación de una función callback
recoverPassword("vanessa@gmail.com", 
    function(systemResponse){
        console.log("Respuesta del sistema: ");
        console.log(systemResponse.message);
    });