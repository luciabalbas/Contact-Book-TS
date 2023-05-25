"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacto = void 0;
const telefono_1 = require("./telefono");
const mail_1 = require("./mail");
// se crea la clase contacto
class Contacto {
    // constructor de contacto
    constructor(nombre, apellido, edad, dni, cumpleaños, sexo, telefono, direccion, mail, notas) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._dni = dni;
        this._cumpleaños = cumpleaños;
        this._sexo = sexo;
        this._telefono = [];
        this._direccion = [];
        this._mail = [];
        this._notas = notas;
    }
    // getters & setters
    // nombre
    get nombre() {
        return this._nombre;
    }
    set nombre(a) {
        this._nombre = a;
    }
    // apellido
    get apellido() {
        return this._apellido;
    }
    set apellido(b) {
        this._apellido = b;
    }
    // edad
    get edad() {
        return this._edad;
    }
    set edad(c) {
        this._edad = c;
    }
    // dni - no cambia
    get dni() {
        return this._dni;
    }
    // cumpleaños - no cambia
    get cumpleaños() {
        return this._cumpleaños;
    }
    // sexo
    get sexo() {
        return this._sexo;
    }
    set sexo(d) {
        this._sexo = d;
    }
    // notas
    get nota() {
        return this._notas;
    }
    set nota(p) {
        this._notas = p;
    }
    // telefono
    get telefono() {
        return this._telefono;
    }
    // metodo para crear el objeto dentro de contacto
    setTelefono(a, b) {
        var phone = new telefono_1.Telefono(a, b);
        this._telefono = [phone];
    }
    // metodo para que no aparezca como objeto y sea más legible en pantalla
    getTelefono() {
        var a = this.telefono[0].tipo;
        var b = this.telefono[0].numero;
        var c = a + ": " + b;
        return c;
    }
    // correo electronico
    get mail() {
        return this._mail;
    }
    // metodo para crear el objeto dentro de contacto
    setMail(a, b) {
        var mail = new mail_1.Mail(a, b);
        this._mail = [mail];
    }
    // metodo para que no aparezca como objeto y sea más legible en pantalla
    getMail() {
        var a = this.mail[0].tipo;
        var b = this.mail[0].direccion_mail;
        var c = a + ": " + b;
        return c;
    }
    // dirección
    get direccion() {
        return this._direccion;
    }
    // metodo para que una variable Dirección sea la direccion de contacto
    setDireccion(value) {
        this._direccion = [value];
    }
    // metodo para que no aparezca como objeto y sea más legible en pantalla
    mostrarDireccion() {
        // si el objeto tiene valores de piso o letra -> la impresión es diferente según el caso
        if (this.direccion[0].piso != undefined || this.direccion[0].letra != undefined) {
            if (this.direccion[0].piso != undefined && this.direccion[0].letra != undefined) {
                var direccion = this.direccion[0].calle + ", nº" + this.direccion[0].numero + ", ";
                var direccion = direccion + this.direccion[0].piso + "º" + this.direccion[0].letra + ", ";
                var direccion = direccion + this.direccion[0].codigo_postal + ", " + this.direccion[0].poblacion + ", " + this.direccion[0].provincia;
                return direccion;
            }
            else if (this.direccion[0].letra == undefined) {
                var direccion = this.direccion[0].calle + ", nº" + this.direccion[0].numero + ", ";
                var direccion = direccion + this.direccion[0].piso + "º, ";
                var direccion = direccion + this.direccion[0].codigo_postal + ", " + this.direccion[0].poblacion + ", " + this.direccion[0].provincia;
                return direccion;
            }
            else {
                var direccion = this.direccion[0].calle + ", nº" + this.direccion[0].numero + ", ";
                var direccion = direccion + this.direccion[0].letra + ", ";
                var direccion = direccion + this.direccion[0].codigo_postal + ", " + this.direccion[0].poblacion + ", " + this.direccion[0].provincia;
                return direccion;
            }
        }
        else {
            var direccion = this.direccion[0].calle + ", nº" + this.direccion[0].numero + ", " + this.direccion[0].codigo_postal + ", " + this.direccion[0].poblacion + ", " + this.direccion[0].provincia;
            return direccion;
        }
    }
    // metodo para imprimir datos
    mostrarDatos() {
        console.log("Contacto" + ":", this.nombre, this.apellido);
        console.log("Edad:", this.edad);
        console.log("Cumpleaños:", this.cumpleaños);
        console.log("DNI:", this.dni);
        console.log("Género:", this.sexo);
        console.log("Telefono", this.getTelefono());
        console.log("Direccion:", this.mostrarDireccion());
        console.log("Correo electrónico", this.getMail());
        console.log("Notas:", this.nota);
    }
}
exports.Contacto = Contacto;
