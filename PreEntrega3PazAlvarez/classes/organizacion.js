class Organizacion {
    constructor(id, nombre, tamaño, sector, temaMaterial, acciones) {
        this.id = id; 
        this.nombre = nombre.trim();
        this.tamaño = tamaño;
        this.sector = sector; 
        this.temaMaterial = [];
        this.acciones = [];
    }
    toString() {
        return this.nombre;
    }

    // Metodo para asignar a la organización los temas materiales
    setMaterialTopics(temaMaterial = []) {
        this.temaMaterial = temaMaterial
    }
}