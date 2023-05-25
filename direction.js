"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
// clase dirección para exportar a main y contacto
class Direccion {
    // constructor de dirección
    constructor(a, b, c, d, e) {
        this.calle = a;
        this.numero = b;
        this.codigo_postal = c;
        this.poblacion = d;
        this.provincia = e;
    }
}
exports.Direccion = Direccion;
