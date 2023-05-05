//Definimos los arrays orgSizes, sectores, temasMateriales y accionesSugeridas
const orgSizes = ["Micro: 1-3 empleados", "XS: 4-9 empleados", "S: 10-49 empleados", "M: 49-299 empleados", "L: 300-499 empleados", "XL: >500 empleados"];
const sectores = ["Agricultura", "Fabricación", "Servicios", "Venta al por mayor / minorista"]; 
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

// Cargamos la lista de sectores, de tamaños y de temas materiales en la interfaz con los arrays creados
// Primero llamo al nodo id:tamaños del html 
let orgSizeList = document.getElementById("orgSize");
// Desarrollo el metodo for each que para cada instancia del array sector realiza una función 
orgSizes.forEach((unOrgSize) => {
    let item = document.createElement("option");
    item.value = unOrgSize;
    item.innerText = unOrgSize; 
    orgSizeList.append(item);
    });

// Primero llamo al nodo id:sectores del html 
let sectorList = document.getElementById("sectores");
// Desarrollo el metodo for each que para cada instancia del array sector realiza una función 
sectores.forEach((unSector) => {
    let item = document.createElement("option");
    item.value = unSector;
    item.innerText = unSector; 
    sectorList.append(item);
    });

// Primero llamo al nodo id:temasMateriales del html 
let temasMaterialesList = document.getElementById("temasMateriales");
// Desarrollo el metodo for each que para cada instancia del array sector realiza una función 
temasMateriales.forEach((unTemaMaterial) => {
    let item = document.createElement("option");
    item.value = unTemaMaterial.nombre;
    item.innerText = unTemaMaterial.nombre; 
    temasMaterialesList.append(item);
    });

// Reconozco el boton y le asigno una constante para reconocerlo
const btn = document.querySelector('#btnInscribir')

// Libreria sweet alert --> Cuando haga click en el botón me sale un pop up diciéndome que ha avanzado
btn.addEventListener('click', () => {
    Swal.fire({
        title: 'Genial!',
        text: 'Tu organización ha quedado registrada!',
        icon: 'success',
        confirmButtonText: 'Cool',
    })
})

// Organizaciones --> representa el conjunto de organizaciones
let organizaciones = [];

//recuperamos en DOM formulario
const formulario = document.getElementById("formulario");

//desarrollamos función escribir en tabla 
function pintarTablaOrganizaciones(){
let bodyTable = document.getElementById("organizacionesTableBody")
bodyTable.innerHTML = ""; 
organizacion.foreach((p) => {
    let record = document.createElement("tr");
    record.innerHTML = `<tr> 
    <td scope="row">Número</td>
    <td>Organización</td>
    <td>Tamaño</td>
    <td>Sector</td>
    <td>Temas relevantes</td>
    </tr>`;
    bodyTable.append(record)
});
}

let respuestaNombre
let respuestaOrgSize
let respuestaSector
let respuestaTemaMaterialid
let unaOrganizacion = []

//función de recuperación de los valores recibidos por el usuario 
function inscribirOrganizacion () {
respuestaNombre = document.getElementById("nombres").value;
respuestaOrgSize = document.getElementById("orgSize").value;
respuestaSector = document.getElementById("sectores").value;
respuestaTemaMaterialid = document.getElementById("temasMateriales").value;

unaOrganizacion = new Organizacion ( 
respuestaNombre,
respuestaOrgSize, 
respuestaSector, 
respuestaTemaMaterialid,
)
organizaciones.push(unaOrganizacion);
}

function limpiarCampos() {
    // Limpiar todos y cada uno de los inputs
    document.getElementById("nombres").value = "";
    document.getElementById("orgSize").value = "";
    document.getElementById("sectores").value = "";
    document.getElementById("temasMateriales").value = "";
  }
  
  function validarFormulario() {
    let errores = [];
    respuestaNombre = document.getElementById("nombres").value;
    respuestaOrgSize = document.getElementById("orgSize").value;
    respuestaSector = document.getElementById("sectores").value;
    respuestaTemaMaterialid = document.getElementById("temasMateriales").value;
    return errores;
  }

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    event.target.setAttribute("class", "needs-validation");
    hideMessage();
    let errores = validarFormulario();
    if (errores.length > 0) {
      showErrorMessage(errores);
      event.target.classList.add("was-validated");
      return false;
    }
  
    let resultado = inscribirOrganizacion();
    if (resultado) {
      showSuccessMessage(["Funcionó"]);
      limpiarCampos();
    }
    return resultado;
  });



console.log(respuestaNombre)
console.log(respuestaOrgSize)
console.log(respuestaSector)
console.log(respuestaTemaMaterialid)
console.log(unaOrganizacion)


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