// Clase mail para exportar a contacto
export class Mail {
    tipo: string;
    direccion_mail: string;
    
    // constructor de email
    constructor (a: string, b: string) {
        this.tipo = a;
        this.direccion_mail = b;
    }
}