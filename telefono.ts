// clase Telefono para exportar a contacto
export class Telefono {
    tipo: string;
    numero: number;
    
    // constructor de telefono
    constructor (a: string, b: number) {
        this.tipo = a;
        this.numero = b;
    }
}
