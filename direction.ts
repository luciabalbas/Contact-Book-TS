// clase dirección para exportar a main y contacto
export class Direccion {
    calle: string;
    numero: number;
    piso?: number;
    letra?: string;
    codigo_postal: number;
    poblacion: string;
    provincia: string;

    // constructor de dirección
    constructor(a: string, b: number, c: number, d: string, e: string) {
        this.calle = a;
        this.numero = b;
        this.codigo_postal = c;
        this.poblacion = d;
        this.provincia = e;
    }
}