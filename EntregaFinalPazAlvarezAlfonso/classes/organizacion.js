class Organizacion {
    constructor(id, orgNombre, orgSize, sector, temaMaterial, acciones) {
        this.id = id; 
        this.orgNombre = orgNombre;
        this.orgSize = orgSize;
        this.sector = sector; 
        this.temaMaterial = [];
        this.acciones = [];
    }
    toString() {
        return this.orgNombre;
    }

    // Metodo para asignar a la organización los temas materiales
    setMaterialTopics(temaMaterial = []) {
        this.temaMaterial = temaMaterial
    }
}