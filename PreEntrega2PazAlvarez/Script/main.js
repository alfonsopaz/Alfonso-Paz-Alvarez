/*
1. Objetos - Crear objetos a partir de una clase.
2. Arrays - Cargar elementos en un array con metodos vistos en clase .
3. Funciones de Orden Superior - Utilizar al menos una de los métodos vistos en esta clase de funciones de orden superior I y/o II.
*/

//Objetivo de mi simulador interactivo: Realizar un cuestionario de impacto medioambiental dando opciones para responder y calcular impacto después

//Mando un saludo en console log para ver que está funcionado 
console.log("Bienvenido a la consola del cuestionario")

let index = 0; 

//Utilizo una función constructora para definir  el objeto usuario 

function usuario (nombre, edad, pais) {
    this.nombre = nombre; 
    this.edad = parseInt(edad); 
    this.pais = pais;
}

let usuarioUno = new usuario (undefined,undefined,undefined); 
    
// Desarrollo una función de chequeo sólo por ejercitarlo
function chequeoUsuario(var1, var2, var3) {
    if (var1 == "") {
        alert ("Por favor, no puedes dejar el país en blanco")
    }; 
    if (var2 == "") {
        alert ("Por favor, no puedes dejar el país en blanco")
    };
    if (var3 == "") {
        alert ("Por favor, no puedes dejar el país en blanco")
    };
    }

// Pido nombres con verificación 
    usuarioUno.nombre = prompt ("¿Cuál es tu nombre?");
    if (usuarioUno.nombre == "") {
        alert ("Por favor, escribe un nombre, no lo dejes en blanco");
        usuarioUno.nombre = prompt ("¿Cuál es tu nombre?");
    }        
    usuarioUno.edad = prompt ("¿Cuál es tu edad?");
    if (usuarioUno.edad == "") {
        alert ("Por favor, escribe una edad, no lo dejes en blanco");
        usuarioUno.edad = prompt ("¿Cuál es tu edad?")
    }
    usuarioUno.pais = prompt ("¿Cuál es tu pais?");
    if (usuarioUno.pais == "") {
        alert ("Por favor, escribe un país, no lo dejes en blanco");
        usuarioUno.pais = prompt ("¿Cuál es tu pais?");
    }

// Compruebo el nombre con la función 
    chequeoUsuario(usuarioUno.nombre, usuarioUno.edad, usuarioUno.pais);

//Imprimo en console log el objeto usuarioUno 
    console.log("El usuarioUno tiene guardados estos datos --> ", usuarioUno)   

// Defino todas las variables primero... 
let variable1 = "AS";
let variable2 = "AS";
let variable3 = "AS";
let variable4 = "AS";
let variable5 = "AS";
let variable6 = "AS";
let resultado = 0;  
let coefCO2motoGas = 0.1123;
let coefCO2turisGas = 0.1823;
let coefCO2turisDie = 0.1654;
let coefCO2busUrb = 0.0902; 
let diastrabanual = 230; 

// Defino la clase resultado para poder tener una clase tipo de resultados
class Resultado {
    constructor(huella, periodo) {
        this.huella = huella; 
        this.periodo = periodo; 
    }
}
// Creo una instancia de la clase 
let resultadoUno = new Resultado(undefined, undefined)

// Y empiezo con el cálculo general
// Lo primero para rellenar el período de cáculo 
resultadoUno.periodo = prompt ("¿De qué período quieres calcular tu huella? (Último mes, Último trimestre, Último año")

// Empezamos recolectando información del tipo de transporte al trabajo
let variable0 = prompt ("¿Vas andando/bicicleta al trabajo? (si/no)");
if (variable0.toUpperCase() == "SI") {
    alert ("Enhorabuena, tu huella de carbono es CERO!")
} else if (variable0.toUpperCase() == "NO"){
    variable1 = prompt("Entonces, ¿cómo vas, en tu vehículo propio? (si/no)")
    }

// Después pedimos información sobre si el tipo de transporte en vehiculo propio
    if (variable1.toUpperCase() == "SI") {
    variable2 = prompt ("¿Cuántos km aproximados hay desde tu casa al trabajo?");
    variable5 = prompt ("¿Qué tipo de vehiculo tienes: moto o coche");
    variable6 = prompt ("¿Es gasolina o diesel?");
    } else {variable3 = prompt ("Entonces, ¿cómo vas, en transporte público? (si/no)");
    };
        
// Calculamos la huella de carbono
if (variable5.toUpperCase() == ("MOTO")) {
    resultadoUno.huella = (variable2 * 2 * diastrabanual * coefCO2motoGas) / 1000; 
    console.log(resultadoUno.huella)
    alert ("tu huella de carbono es media, en total es " + resultadoUno.huella + " toneladas de CO2 en el pasado año");
    
} else if (variable5.toUpperCase() == ("COCHE") && variable6.toUpperCase() == ("GASOLINA")) {
    resultadoUno.huella = (variable2 * 2 * diastrabanual * coefCO2turisGas) / 1000;
    console.log(resultadoUno.huella)
    alert ("tu huella de carbono es alta, en total es " + resultadoUno.huella + " toneladas de CO2 en el pasado año");

} else if (variable5.toUpperCase() == ("COCHE") && variable6.toUpperCase() == ("DIESEL")) {
    resultadoUno.huella = (variable2 * 2 * diastrabanual * coefCO2turisDie) / 1000;
    console.log(resultadoUno.huella)
    alert ("tu huella de carbono es alta, en total " + resultadoUno.huella + " toneladas de CO2 en el pasado año");

} else if (variable3.toUpperCase() == "SI") {
    variable4 = prompt ("¿Cuántos km hay desde tu casa hasta tu trabajo?");
    resultado.huella = (variable4 * 2 * diastrabanual * coefCO2busUrb) / 1000; 
    alert ("tu huella de carbono es muy baja, en total " + resultadoUno.huella + " toneladas de CO2 en el pasado año");

} else {
    alert ("Por favor rellena la respuesta correctamente")
}

// Doy el resultado en alert 
alert ("el resultado de la huella de carbono es " + resultadoUno.huella + " para el " + resultadoUno.periodo)


// Defino un array con una lista de ranking para saber cómo de contaminador es
let historicoDeResultados = [];

// Cargo el resultado obtenido en un array
historicoDeResultados.push(resultadoUno);
console.log(historicoDeResultados)

//Utilizo la función superior for each

historicoDeResultados.forEach( (num)=> {
    console.log(num)
} )

const coincide = historicoDeResultados.filter((el) => el.usuarioUno.includes('mes'))
console.log(coincide)


//const asociarperfil = perfiles.filter(perfil => perfil.valor < resultado);
//alert(asociarperfil);
//function verParametros(p1,p2,p3) {
//console.log("El 1er parámetro es ".concat(p1));
//console.log("El 2o parámetro es ".concat(p2));
//console.log("El 3er parámetro es ".concat(p3));
