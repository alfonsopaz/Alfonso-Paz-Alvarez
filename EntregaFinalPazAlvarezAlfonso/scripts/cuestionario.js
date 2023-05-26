//Definimos los arrays orgSizes, sectores, temasMateriales y accionesSugeridas
const orgSizes = ["Micro: 1-3 empleados", "XS: 4-9 empleados", "S: 10-49 empleados", "M: 49-299 empleados", "L: 300-499 empleados", "XL: >500 empleados"];
const sectores = ["Agricultura", "Fabricación", "Servicios", "Venta al por mayor / minorista"]; 
const posicion = ["Empleado", "Fundador compañía", "Otra posición", "Prensa", "Investigador", "Otra posición", "Estudiante"]; 
const pais = ["Argentina", "España", "Uruguay", "Perú", "Bolivia", "Colombia", "México", "Ecuador", "Paraguay", "Chile"];
const tipoTransporte = ["Caminando", "Bicicleta", "Coche", "Moto"]
const tipoFuel = ["Gasolina", "Diesel","N/A"]
const temasMateriales = [
    new temaMaterial(1, "Cambio climático"),
    new temaMaterial(2, "Polución"),
    new temaMaterial(3, "Biodiversidad y ecosistemas"),
    new temaMaterial(4, "Economía circular y residuos"),
    new temaMaterial(5, "Trabajadores en plantilla"),
    new temaMaterial(6, "Trabajadores de la cadena de valor"),
    new temaMaterial(7, "Conductas de negocio"),
];
const accionesSugeridas = [
    new Acciones(1, "Realizar una evaluación de la materialidad de su organización", "facil", undefined),
    new Acciones(2, "Introducir al menos un producto / servicio con menor impacto en su portfolio de venta a cliente", "medio", undefined),
    new Acciones(3, "Realizar un plan de transición para la mitigación del cambio climático", "medio", undefined),
    new Acciones(4, "Desarrollar e implementar una política de acción climática", "dificil", undefined),
    new Acciones(5, "Realizar una evaluación de materialidad relacionada con el cambio climático" , "facil", undefined),
    new Acciones(6, "Definir el impacto en la estrategia del análisis de impacto relacionado con el clima", "facil", undefined),
    new Acciones(7, "Análisis de potenciales efectos financieros debidos al cambio climático", "dificil", undefined),
    new Acciones(8, "Análisis de potenciales efectos financieros debidos a la polución", "facil", undefined),
    new Acciones(9, "Colaborar con alguna iniciativa independiente por el medioambiente", "medio", undefined),
    new Acciones(10, "Definir objetivos relacionados con el consumo energético", "medio", undefined),
]; 
//Defino variables globales 
let respuestaId = 0
let respuestaNombre
let respuestaOrgSize
let respuestaSector
let respuestaTemaMaterialid
let respuestaAccion
let unaOrganizacion = []
let organizaciones = [];


// Empezamos con el cuestionario
// Cargamos la lista de posiciones y de paises con los arrays creados
    // Primero llamo al nodo id:posicion del html 
    let posicionList = document.getElementById("posicion");
    // Desarrollo el metodo for each que para cada instancia del array sector realiza una función 
    posicion.forEach((unaPosicion) => {
        let item = document.createElement("option");
        item.value = unaPosicion;
        item.innerText = unaPosicion.toString(); 
        posicionList.append(item);
        });
    // Primero llamo al nodo id:pais del html 
    let paisList = document.getElementById("pais");
    // Desarrollo el metodo for each que para cada instancia del array sector realiza una función 
    pais.forEach((unPais) => {
        let item = document.createElement("option");
        item.value = unPais.toString();
        item.innerText = unPais; 
        paisList.append(item);
        });
    // Primero llamo al nodo id:tipoTransporte del html 
    let tipoTransporteList = document.getElementById("tipoTransporte");
    // Desarrollo el metodo for each que para cada instancia del array sector realiza una función 
    tipoTransporte.forEach((untipoTransporte) => {
        let item = document.createElement("option");
        item.value = untipoTransporte.toString();
        item.innerText = untipoTransporte; 
        tipoTransporteList.append(item);
        });
    // Primero llamo al nodo id:tipoFuel del html 
    let tipoFuelList = document.getElementById("tipoFuel");
    // Desarrollo el metodo for each que para cada instancia del array sector realiza una función 
    tipoFuel.forEach((untipoFuel) => {
        let item = document.createElement("option");
        item.value = untipoFuel.toString();
        item.innerText = untipoFuel; 
        tipoFuelList.append(item);
        });
        
    // Recuperamos el boton como btn y le asigno una constante para reconocerlo
    const btn = document.querySelector('#btnCuestionario')
    // Recuperamos en DOM formulario
    const formulario = document.getElementById("formulario");

    //Definimos función de recuperación de los valores recibidos por el usuario 
    function inscribirCuestionario () {
        respuestaPersona = document.getElementById("persona").value;
        respuestaPosicion = document.getElementById("posicion").value;
        respuestaPais = document.getElementById("pais").value;
        respuestaTipoTransporte = document.getElementById("tipoTransporte").value;
        respuestaTipoFuel = document.getElementById("tipoFuel").value;
    //Console.log para ver si se están quedando guardados
        localStorage.setItem("Nombre persona que responde",respuestaPersona)
        localStorage.setItem("Posición",respuestaPosicion)
        localStorage.setItem("Pais",respuestaPais)
        localStorage.setItem("Tipo de transporte",respuestaTipoTransporte)
        localStorage.setItem("Tipo de fuel",respuestaTipoFuel)
    }

    //Registrar resultados
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        event.target.setAttribute("class", "needs-validation");
  
        let resultado = inscribirOrganizacion();
        if (resultado) {
        console.log("Funcionó");
        limpiarCampos();
        }
    });

//Conexión a la API ClimateIQ con los datos del back y cálculo
fetch("https://beta3.api.climatiq.io/estimate",{
    method: "POST",
    headers: {
        "Content-Type": "text/plain",
        "User-Agent": "PostmanRuntime/7.32.2",
        "Accept": "*/*",
        "Connection": "keep-alive",
        "Authorization": "Bearer F94BK9P2NVMYS8PKMYJ2800J5HXJ" 
    },
    body: JSON.stringify( {
        "emission_factor": {
            "activity_id": "passenger_vehicle-vehicle_type_car-fuel_source_na-engine_size_na-vehicle_age_na-vehicle_weight_na"
        },
      "parameters": {
        "distance": 100
        }
    })
})
.then(res => res.json())
.then(data => console.log(data))


