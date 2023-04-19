/*
1. Crear un algoritmo con un condicional.
2. Crear un algoritmo utilizando un ciclo.
3. Armar un simulador interactivo, la estructura final de tu proyecto integrador.(Utilizar funciones para realizar esas operaciones.)
Note: Recuerden que tendrán hasta 7 días para resolver la entrega y subirla.
*/

//Objetivo de mi simulador interactivo: Realizar un cuestionario de impacto medioambiental dando opciones para responder y calcular impacto después
console.log("Bienvenido a la consola del cuestionario")

let index = 0; 
const vacio = ""; 

    function usuario (nombre, edad, pais) {
        this.nombre = nombre; 
        this.edad = parseInt(edad); 
        this.pais = pais;
        
        this.especificación = !!parseInt(edad);
    }
    let usuarioUno = new usuario (undefined,undefined,undefined); 

    usuarioUno.nombre = prompt ("¿Cuál es tu nombre?");
    usuarioUno.edad = prompt ("¿Cuál es tu edad?");
    usuarioUno.pais = prompt ("¿Cuál es tu pais?");

    if (usuarioUno.nombre != vacio || usuarioUno.nombre != null || usuarioUno.edad != vacio || usuarioUno.edad != null || usuarioUno.pais != vacio || usuarioUno.pais != null) {
        alert ("Bienvenido al cuestionario " + usuarioUno.nombre + ", vamos a calcular la huella de carbono anual de tu transporte al trabajo. " )
        } 
        else if (usuarioUno.nombre == vacio || usuarioUno.nombre == null)
            alert ("Por favor, escribe un nombre, no lo dejes en blanco");
        else if (usuarioUno.edad == vacio || usuarioUno.edad == null)
            alert ("Por favor, escribe un edad, no lo dejes en blanco");
        else if (usuarioUno.pais == vacio || usuarioUno.pais == null)
            alert ("Por favor, escribe un pais, no lo dejes en blanco");
        else 
            alert ("vamos a comenzar");


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

class resultados {
    constructor(huella, periodo) {
        this.huella = huella; 
        this.periodo = periodo; 
    }
    calcular(resultado) {
    
        //Insertar información tipo de transporte al trabajo
    let variable0 = prompt ("¿Vas andando/bicicleta al trabajo? (si/no)");
    if (variable0.toUpperCase() == "SI") {
    alert ("Enhorabuena, tu huella de carbono es CERO!");
    } else if (variable0.toUpperCase() == "NO"){
    variable1 = prompt("Entonces, ¿cómo vas, en tu vehículo propio? (si/no)");
    };

        //Insertar información sobre el tipo de transporte en vehiculo propio
    if (variable1.toUpperCase() == "SI") {
    variable2 = prompt ("¿Cuántos km aproximados hay desde tu casa al trabajo?");
    variable5 = prompt ("¿Qué tipo de vehiculo tienes: moto o coche");
    variable6 = prompt ("¿Es gasolina o diesel?");
    } else {variable3 = prompt ("Entonces, ¿cómo vas, en transporte público? (si/no)");
    };
        
        //Calculo de huella de carbono
    if (variable5.toUpperCase() == ("MOTO")) {
    resultado = (variable2 * 2 * diastrabanual * coefCO2motoGas) / 1000; 
    console.log(resultado)
    alert ("tu huella de carbono es media, en total es " + resultado + " toneladas de CO2 en el pasado año");
    } else if (variable5.toUpperCase() == ("COCHE") && variable6.toUpperCase() == ("GASOLINA")) {
    resultado = (variable2 * 2 * diastrabanual * coefCO2turisGas) / 1000;
    console.log(resultado)
    alert ("tu huella de carbono es alta, en total es " + resultado + " toneladas de CO2 en el pasado año");
    } else if (variable5.toUpperCase() == ("COCHE") && variable6.toUpperCase() == ("DIESEL")) {
    resultado = (variable2 * 2 * diastrabanual * coefCO2turisDie) / 1000;
    console.log(resultado)
    alert ("tu huella de carbono es alta, en total " + resultado + " toneladas de CO2 en el pasado año");
    } else if (variable3.toUpperCase() == "SI") {
    variable4 = prompt ("¿Cuántos km hay desde tu casa hasta tu trabajo?");
    resultado = (variable4 * 2 * diastrabanual * coefCO2busUrb) / 1000; 
    alert ("tu huella de carbono es muy baja, en total " + resultado + " toneladas de CO2 en el pasado año");
    } else (alert ("Por favor rellena la respuesta correctamente"))
    
    };
};

const perfiles = [
    {id:1, nombre: "muycontaminador", valor:3},
    {id:2, nombre: "contaminador", valor:2},
    {id:3, nombre: "pococontaminador", valor:1},
]

const asociarperfil = perfiles.filter(asociarperfil => perfiles.valor < resultado);
alert(asociarperfil);


function verParametros(p1,p2,p3) {
console.log("El 1er parámetro es ".concat(p1));
console.log("El 2o parámetro es ".concat(p2));
console.log("El 3er parámetro es ".concat(p3));
}
