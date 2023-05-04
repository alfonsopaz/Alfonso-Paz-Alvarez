class Acciones {
    constructor(id, nombre, dificultad, responsable){
        this.id = id; 
        this.nombre = nombre; 
        this.dificultad = dificultad; 
        this.responsable = responsable;
    }

    toString(){
        return this.organizacion.nombre + " debe realizar las siguientes acciones " + this.acciones.nombre; 
    }
}