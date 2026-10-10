

export class pilaLibro {
    constructor() {
        this.items = [];
    }

    push(libro) {
        this.items.push(libro);
    }
    
    pop() {
        return this.items.length > 0 ? this.items.pop() : null;
    }

    peek() {
        return this.items.length > 0 ? this.items[this.items.length - 1] : null;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        
        return this.items.length;

    }

    toArray() {
        return this.items.slice().reverse();
    }

    print() {
        this.toArray().forEach(item => {console.log(item)});
    }
}

export const librosSimulados = [
    { nombre: "El Principito", autor: "Antoine de Saint-Exupéry", genero: " Literatura infantil" },
    { nombre: "La Sombra del Viento", autor: "Carlos Ruiz Zafón", genero: "Misterio" },
    { nombre: "La Metamorfosis", autor: "Franz Kafka ", genero: "Ficción" },
    { nombre: "El Alquimista", autor: "Paulo Coelho", genero: "Ficción espiritual" }
];