// Tipos de datos 

//Personalización de salidas a consola
console.log("%cEjercicio 02: Tipos de Datos ",style_console);

// 1. Undefined - Valor por defecto asignado a variables declaradas pero no inicializadas, no es igual a NULL
console.warn("1.- UNDEFINED (No Definido)")
let usuarioLogeado;
var rolUsuario;
const ultimoAcceso = undefined;

console.log("Valores Actuales de las variables");
console.log(`usuarioLogeado = ${usuarioLogeado}`);
console.log(`rolUsuario = ${rolUsuario}`);
console.log(`ultimoAcceso = ${ultimoAcceso}`);

/* En Java Scrit existe el metodo typeof() que nos devuelve el tipo de dato de una variable preficamente declarada.
*/

console.log("Tipos de datos de las variables declaradas" );
console.log(`usuarioLogeado = ${typeof(usuarioLogeado)}`);
console.log(`rolUsuario = ${typeof(rolUsuario)}`);
console.log(`ultimoAcceso = ${typeof(ultimoAcceso)}`);

// Supongamos que un usuario denominado UrielLeo18 se ha logeado exitosamente, el valor de la variable debera actualizarse a su username

usuarioLogeado = "Vanessa21";
 
// Pero no cambiara su valor, tambien cambiara su tipo 

console.log(`El valor de la variable usuarioLogeado es: ${usuarioLogeado} y su nuevo tipo de dato es: ${typeof(usuarioLogeado)}`);

// 2.- BOOLEAN (TRUE/FALSE) - Verdadero o Falso
console.warn("2.- BOOLEAN (TRUE/FALSE)");
var hayUsuarioLogeado;

/* Supongamos que nuestra app tendrá un menu especifico para que los usuarios registrados, en el podran visualizar sus mensajes o eatdo de sus publicaciones de rednta o venta de prioridades, a diferencia de un usuario que entra de 
manera incognita a visualizar las propiedades*/

function validacionUsuarioLogeado(){
    console.log(`El valor de la variable hayUsuarioLogeado es: ${hayUsuarioLogeado}, que es de tipo: ${typeof(hayUsuarioLogeado)}`);
    
    if(hayUsuarioLogeado === true)
    {
        console.log("Dado que se ha logeado un usuario la app mostrará el menú del usuario");
    }
    else if(!hayUsuarioLogeado)
    {
        console.log("No puedo prosesar este tipo de dato, requiero de un booleano");
    }

}

// test1 : usuario logeado = true
hayUsuarioLogeado = true;
console.log("test 1")
validacionUsuarioLogeado();

// test2 : usuario logeado = false
console.log("Test 2")
hayUsuarioLogeado = false
validacionUsuarioLogeado();

// test3 : usuario logeado = a cualquier otra cosa
console.log("Test 3")
hayUsuarioLogeado = 52.5;
validacionUsuarioLogeado();

// 3.- NUMBER (Numericos)
console.warn("3.- NUMBER (NUMERICOS)");
/*Es importante saber que Java Script a diferencia de otroslenguajes no diferencia los datos de tipo numericos, lo que para otros lenguajes de programación lo que un ENTERO (INT), DOBLE (DOUBLE), para el solo
son numeros (NUMBER)*/

let userID_Owner = 225
let priceProperty = 125000.50
let latGPS = 20.240508
let longGPS = -97.952881
let altGPS = 1180

console.log(`Los valores de las variables declaradas para los datos de la propiedad son:
ID del Usuario propietario: ${userID_Owner}
Precio de la propiedad: ${priceProperty}
Latitud (GPS): ${latGPS}
Longitud (GPS): ${longGPS}
Altitud (GPS): ${altGPS}`);

console.log(`Los tipos de datos de las variables declaradas para los datos de la propiedad son:
ID del Usuario propietario: ${typeof(userID_Owner)}
Precio de la propiedad: ${typeof(priceProperty)}
Latitud (GPS): ${typeof(latGPS)}
Longitud (GPS): ${typeof(longGPS)}
Altitud (GPS): ${typeof(altGPS)}`);
    
// 4.- STRING (Cadena de Caracteres)

var fullnamOwner = "Vanessa Vergara Domínguez";
let nameProperty = "Hermosa Casa en la Playa de Puesto Vallarta";
let descriptionPropiety = " Casa de 2 pisos, 4 habitaciones, 2 baños completos y estacionamiento para 2 automoviles a orilla de mar";
var statusProperty = "Disponible";
const typeProperty = "C";
var addresProperty;

/*Los tipos de datos STRING son palabras, valores cualitativos de las entidades de nuestra aplicacion, que no tienen un tamaño maximo y que estan conformadas por caracteres 
alfabéticos, caracteres especiales como acentos o sibolos de algún idioma*/

console.warn("4.- STRING ( CADENA DE CARACTERES, PALABRAS");

console.log(`El usuario: ${fullnamOwner} 
esta vendiendo o rentando: ${nameProperty}
que consiste en: ${descriptionPropiety}
actualmente esta en estado: ${statusProperty} y es del tipo: ${typeProperty}`);

console.log(`Las variables declaradas son del tipo:
fullnameOwner : ${typeof(fullnamOwner)}
nameProperty : ${typeof(nameProperty)}
descriptionProperty : ${typeof(descriptionPropiety)}
statusProperty : ${typeof(statusProperty)}
typeProperty : ${typeof(typeProperty)}`);

/* Existen Metodos para manipular los datos del tipo STRING, como: */
    
    /* El metodo toUperCase que convierte todas las letras en mayusculas*/
    console.log(`El usuario logeado es: ${usuarioLogeado.toUpperCase()}`);

    /* Por lo contrario en el metodo toLowerCase convierte todo el texto a minusculas*/
    console.log(`Descripcion de la propiedad en venta: ${descriptionPropiety.toLowerCase()}`);

    /* Tambien existe la propiedad que cuenta el número de caracteres que forman el texto, llamado length (tamaño)*/
    console.log(`La longitud del nombre de la propiedad es de: ${nameProperty.length}`);

    /* Tenemos un metodo que nos permite hacer subcadenas o extraer la porcion de la palabra en base a su pocisionamiento*/
    let lastname = fullnamOwner.slice(8, fullnamOwner.length);
    console.log(`El apellido del propietario es: ${lastname}`);

    /* Otra funcion util es aquella que nos permite remplazar letras o palabras dentro del texto denominada replace() */
    console.log(`Remplazo de la palabra MAR por RÍo, Descripcion de la propiedad: ${descriptionPropiety.replace("mar", "RIO")}`);

    /* O el remplazo de todas las ocurrencias de una letra o palabra*/
    console.log(`Remplazo de las letras A por el número 4, Nombre de la propiedad: ${nameProperty.replaceAll("a", "4")}`);


/* 5.- BIGITN (Entero de alta presicion o alta amplitud)*/
    let numeroGrande1 = 1234567890;  // 10 digitos
    let numeroGrande2 = 12345678901234567890; // 20 digitos
    let numeroGrande3 = 123456789012345678901234567890; //30 digitos
    let numeroGrande4 = 1234567890123456789012345678901234567890; //40 digitos

    /*Imprimimos los valores de las variables y observemos que pasa*/
    console.log(`Los valores y tipos de datos son:
    numeroGrande1, valor = ${numeroGrande1}, tipo ${typeof(numeroGrande1)}
    numeroGrande2, valor = ${numeroGrande2}, tipo ${typeof(numeroGrande2)}
    numeroGrande3, valor = ${numeroGrande3}, tipo ${typeof(numeroGrande3)}
    numeroGrande4, valor = ${numeroGrande4}, tipo ${typeof(numeroGrande4)}`);

    /* Para no perder presicion en estos numero JavaScript tiene un tipo de dato especial denominado BIGINT, para poder almacenar el valor en este tipo de dato
    solo basta con invocar el metodo de conversion de la inicializacion*/

    numeroGrande1 = BigInt("1234567890");  // 10 digitos
    numeroGrande2 = BigInt("12345678901234567890"); // 20 digitos
    numeroGrande3 = BigInt("123456789012345678901234567890"); //30 digitos
    numeroGrande4 = BigInt("1234567890123456789012345678901234567890"); //40 digitos
    

    console.log(`Los valores y tipos de datos son:
    numeroGrande1, valor = ${numeroGrande1}, tipo ${typeof(numeroGrande1)}
    numeroGrande2, valor = ${numeroGrande2}, tipo ${typeof(numeroGrande2)}
    numeroGrande3, valor = ${numeroGrande3}, tipo ${typeof(numeroGrande3)}
    numeroGrande4, valor = ${numeroGrande4}, tipo ${typeof(numeroGrande4)}`);

/* 6.- SYMBOL
    /*Es el tipo de daro a parte de almacenar el valor, almacena la direccion fisica en memoria, donde se almacena el valor, logrando
    que todos los valores de cada variable siempre sean UNICOS*/

    console.warn("6.- SYMBOL (Simbolos)");

    const numero1 = 3;
    const numero2 = 3.0;
    const numero3 = "3";
    const numero4 = "3.0";
    const numero5= Symbol(3);
    const numero6 = Symbol(3.0);
    const numero7 = Symbol("3");
    const numero8 = Symbol("3.0");
    const numero9 = Symbol(3);

    console.log(`Imprimir los valores y tipos de datos:
    numero1, valor = ${numero1}, tipoDato: ${typeof(numero1)}
    numero2, valor = ${numero2}, tipoDato: ${typeof(numero2)}
    numero3, valor = ${numero3}, tipoDato: ${typeof(numero3)}
    numero4, valor = ${numero4}, tipoDato: ${typeof(numero4)}
    numero5, valor: ${numero5.description}, tipoDato: ${typeof(numero5)}
    numero6, valor: ${numero6.description}, tipoDato: ${typeof(numero6)}
    numero7, valor: ${numero7.description}, tipoDato: ${typeof(numero7)}
    numero8, valor: ${numero8.description}, tipoDato: ${typeof(numero8)}`);
        

    /* Realizando un par de validaciones*/
    if(numero1 == numero2)
        console.log("Se comparo el valor de numero1 y numero2 evaluando que son iguales en valor");
    else 
        console.log("Se comparo el valor numeor1 y numero2 evaluando que son diferentes en valor");

    if(numero1 == numero3)
        console.log("Se comparo el valor de numero1 y numero3 evaluando que son iguales en valor");
    else 
        console.log("Se comparo el valor numeor1 y numero3 evaluando que son diferentes en valor");

    if(numero1 === numero3)
        console.log("Se comparo el valor de numero1 y numero3 evaluando que son iguales en valor");
    else 
        console.log("Se comparo el valor numeor1 y numero3 evaluando que son iguales en valor pero diferente tipo de dato");

    if(numero1 == numero4)
        console.log("Se comparo el valor de numero1 y numero4 evaluando que son iguales en valor");
    else 
        console.log("Se comparo el valor numeor1 y numero4 evaluando que son diferentes en valor");

        if(numero1 === numero4)
        console.log("Se comparo el valor de numero1 y numero4 evaluando que son iguales en valor");
    else 
        console.log("Se comparo el valor numeor1 y numero4 evaluando que son iguales en valor pero diferente tipo de dato");

    if(numero1 == numero5)
        console.log("Se comparo el valor de numero1 y numero5 evaluando que son iguales en valor");
    else 
        console.log("Se comparo el valor numeor1 y numero5 evaluando que son diferentes en valor");

    if(numero5 == numero9)
        console.log("Se comparo el valor de numero5 y numero9 evaluando que son iguales en valor");
    else 
        console.log("Se comparo el valor numeor5 y numero9 evaluando que son iguales en valor pero diferente tipo de dato");

/* 7.- NULL (Nulo)*/
/*Este tipo de datos es similar o UNDEFINED, con la diferencia de que los usuarios o el sistema es conciente que se le asigno este valor*/

let isPremiumUser;
let isUserLoged;
var todayDate = new Date();
var lastLogin = todayDate;
let isNewUser;

console.warn("7.- NULL (Nulo)");

console.log(`Las variables del usuario son:
isPremiumUser, valor: ${isPremiumUser}, tipo: ${typeof(isPremiumUser)}
isUserLoged, valor: ${isUserLoged}, tipo: ${typeof(isUserLoged)}
isNewUser, valor: ${isNewUser}, tipo: ${typeof(isNewUser)}`)

/*Durante la navegacion del usuario en la plataforma en algun punto ingresa sus credenciales y se valida en base date*/

/*Simulando que las credenciales fueran correctas*/
isUserLoged = true;
isPremiumUser = null;

if(lastLogin == todayDate)
    isNewUser = true;
else 
    isNewUser = false;

console.log(`Las variables del usuario son:
isPremium, valor: ${isPremiumUser}, tipo: ${typeof(isPremiumUser)}
isUserLoged, valor: ${isUserLoged}, tipo: ${typeof(isUserLoged)}
isNewUser, valor: ${isNewUser}, tipo: ${typeof(isNewUser)}`);