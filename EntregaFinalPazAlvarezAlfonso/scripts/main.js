//Definimos los arrays orgSizes, sectores, temasMateriales y accionesSugeridas
const orgSizes = ["Micro: 1-3 empleados", "XS: 4-9 empleados", "S: 10-49 empleados", "M: 49-299 empleados", "L: 300-499 empleados", "XL: >500 empleados"];
const sectores = ["Agricultura", "Fabricación", "Servicios", "Venta al por mayor / minorista"]; 
const posicion = ["Empleado", "Fundador compañía", "Otra posición", "Prensa", "Investigador", "Otra posición", "Estudiante"]; 
const pais = ["Argentina", "España", "Uruguay", "Perú", "Bolivia", "Colombia", "México", "Ecuador", "Paraguay", "Chile"];
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

// Cargamos la lista de sectores, de tamaños y de temas materiales en la interfaz con los arrays creados
    // Primero llamo al nodo id:tamaños del html 
    let orgSizeList = document.getElementById("orgSize");
    // Desarrollo el metodo for each que para cada instancia del array sector realiza una función 
    orgSizes.forEach((unOrgSize) => {
        let item = document.createElement("option");
        item.value = unOrgSize;
        item.innerText = unOrgSize.toString(); 
        orgSizeList.append(item);
        });

    // Primero llamo al nodo id:sectores del html 
    let sectorList = document.getElementById("sectores");
    // Desarrollo el metodo for each que para cada instancia del array sector realiza una función 
    sectores.forEach((unSector) => {
        let item = document.createElement("option");
        item.value = unSector.toString();
        item.innerText = unSector; 
        sectorList.append(item);
        });

    // Primero llamo al nodo id:temasMateriales del html 
    let temasMaterialesList = document.getElementById("temasMateriales");
    // Desarrollo el metodo for each que para cada instancia del array sector realiza una función 
    temasMateriales.forEach((unTemaMaterial) => {
        let item = document.createElement("option");
        item.value = unTemaMaterial.nombre.toString();
        item.innerText = unTemaMaterial.nombre; 
        temasMaterialesList.append(item);
        });

// Recuperamos el boton como btn y le asigno una constante para reconocerlo
    const btn = document.querySelector('#btnInscribir')
// Recuperamos en DOM formulario
    const formulario = document.getElementById("formulario");

// Libreria sweet alert --> Cuando haga click en el botón me sale un pop up diciéndome que ha avanzado al cuetionario de impacto
    btn.addEventListener('click', () => {
        Swal.fire({            
            title: 'Genial!',
            text: 'Tu organización ha quedado registrada!',
            icon: 'success',
            confirmButtonText: '<a href="./pages/cuestionario.html">Accede al cuestionario</a>',
            confirmButtonColor: '#aec485',
            footer: "En la siguiente pantalla podrás calcular tu huella de CO2",
            allowOutsideClick: true,
            allowEscapeKey: true,
        })
    })    
 
//Definimos función escribir en tabla 
    function pintarTablaOrganizaciones(){
        let bodyTable = document.getElementById("organizacionesTableBody")
        bodyTable.innerHTML = ""; 
        organizaciones.forEach((unaOrganizacion) => {
            let record = document.createElement("tr");
            record.innerHTML = `<tr> 
            <td scope="row">${unaOrganizacion.id}</td>
            <td>${unaOrganizacion.respuestaId}</td>
            <td>${unaOrganizacion.respuestaNombre}</td>
            <td>${unaOrganizacion.respuestaOrgSize}</td>
            <td>${unaOrganizacion.respuestaSector}</td>
            <td>${unaOrganizacion.respuestaTemaMaterialid}</td>
            </tr>`;
            bodyTable.append(record)
        });
    }

//Definimos función para limpiar campos
    function limpiarCampos() {
        // Limpiar todos y cada uno de los inputs
        document.getElementById("nombres").value = "";
        document.getElementById("orgSize").value = "";
        document.getElementById("sectores").value = "";
        document.getElementById("temasMateriales").value = "";
    }

//Definimos función para validar que la función está bien 
    function validarFormulario() {
        let errores = [];
        respuestaNombre = document.getElementById("nombres").value;
        respuestaOrgSize = document.getElementById("orgSize").value;
        respuestaSector = document.getElementById("sectores").value;
        respuestaTemaMaterialid = document.getElementById("temasMateriales").value;
        return errores;
    }

//Definimos función de recuperación de los valores recibidos por el usuario 
    function inscribirOrganizacion () {
        respuestaId = respuestaId + 1
        respuestaNombre = document.getElementById("nombres").value;
        respuestaOrgSize = document.getElementById("orgSize").value;
        respuestaSector = document.getElementById("sectores").value;
        respuestaTemaMaterialid = document.getElementById("temasMateriales").value;
        
    //Console.log para ver si se están quedando guardados
        localStorage.setItem("Resupuesta nº",respuestaId)
        localStorage.setItem("Nombre",respuestaNombre)
        localStorage.setItem("Tamaño Organización",respuestaOrgSize)
        localStorage.setItem("Sector",respuestaSector)
        localStorage.setItem("Tema Material",respuestaTemaMaterialid)
        
    //Meto los valores en el objeto unaOrganización que viene de la clase Organizacion
        unaOrganizacion = new Organizacion ( 
        respuestaId,
        respuestaNombre,
        respuestaOrgSize, 
        respuestaSector, 
        respuestaTemaMaterialid,
        respuestaAccion,
        )
        
    //Añadimos la nueva organización a la lista de organizaciones 
        organizaciones.push(unaOrganizacion);
        
        console.log(unaOrganizacion)

        function pintarTablaOrganizaciones(){
            let bodyTable = document.getElementById("organizacionesTableBody")
            bodyTable.innerHTML = ""; 
            organizaciones.forEach((unaOrganizacion) => {
                let record = document.createElement("tr");
                record.innerHTML = `<tr> 
                <td scope="row">${unaOrganizacion.id}</td>
                <td>${respuestaNombre}</td>
                <td>${respuestaOrgSize}</td>
                <td>${respuestaSector}</td>
                <td>${respuestaTemaMaterialid}</td>
                </tr>`;
                bodyTable.append(record)
            });
        }
    
    //Ponemos valor en la tabla
        pintarTablaOrganizaciones(); 
    }

//Cuando se "submit" formulario => hay una función que pasan cosas...
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    event.target.setAttribute("class", "needs-validation");
    let errores = validarFormulario();
    
    if (errores.length > 0) {
    console.log("no funcionó")
    console.log(errores);
    event.target.classList.add("was-validated");
    return false;
    }
  
    let resultado = inscribirOrganizacion();
    if (resultado) {
    console.log("Funcionó");
    limpiarCampos();
    }
});

function hideMessage() {
    let messagesContainer = document.getElementById("messages");
    messagesContainer.innerHTML = "";
  }
  
function showSuccessMessage(messages = []) {
    showMessage(messages, "success");
  }
  
function showErrorMessage(messages = []) {
    showMessage(messages, "danger", "Encontramos errores :(");
  }

  //Conexión a la API ClimateIQ con los datos del back 
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