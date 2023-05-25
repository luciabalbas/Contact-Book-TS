// importanción de clases direccion, telefono y mail
import { Direccion } from "./direction";
import  { Telefono } from "./telefono";
import { Mail } from "./mail";

// se crea la clase contacto
export class Contacto {
    private _nombre: string;
    private _apellido: string;
    private _edad: number;
    private _dni: string;
    private _cumpleaños: string;
    private _sexo: string;
    private _telefono: Telefono[];
    private _direccion: Direccion[];
    private _mail: Mail[];
    private _notas: string;

    // constructor de contacto
        constructor(nombre: string, apellido: string, edad: number, dni: string, cumpleaños:string, sexo: string, telefono: Telefono[], direccion: Direccion[], mail: Mail[], notas: string) {
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
            public get nombre() {
                return this._nombre;
            }
            public set nombre(a:string) {
                this._nombre = a;
            }
        // apellido
            public get apellido() {
                return this._apellido;
            }
            public set apellido(b:string) {
                this._apellido = b;
            }
        // edad
            public get edad() {
                return this._edad;
            }
            public set edad(c: number) {
                this._edad = c;
            }
        // dni - no cambia
            public get dni() {
                return this._dni;
            }
        // cumpleaños - no cambia
            public get cumpleaños() {
                return this._cumpleaños;
            }
        // sexo
            public get sexo() {
                return this._sexo;
            }
            public set sexo(d: string) {
                this._sexo = d;
            }
        // notas
            public get nota() {
                return this._notas;
            }
            public set nota(p: string) {
                this._notas = p;
            }

        // telefono
            public get telefono() {
                return  this._telefono;
            }
            // metodo para crear el objeto dentro de contacto
                public setTelefono(a: string, b: number) {
                    var phone = new Telefono(a, b);
                    this._telefono = [phone];
                }
            // metodo para que no aparezca como objeto y sea más legible en pantalla
                public getTelefono() {
                    var a = this.telefono[0].tipo;
                    var b = this.telefono[0].numero;
                    var c = a + ": " + b;
                    return c;
                }
        // correo electronico
            public get mail() {
                return this._mail;
            }
            // metodo para crear el objeto dentro de contacto
                public setMail(a: string, b: string) {
                    var mail = new Mail(a, b);
                    this._mail = [mail];
                }
            // metodo para que no aparezca como objeto y sea más legible en pantalla
                public getMail() {
                    var a = this.mail[0].tipo;
                    var b = this.mail[0].direccion_mail;
                    var c = a + ": " + b;
                    return c;
                }
        // dirección
            public get direccion() {
                return this._direccion;
            }
            // metodo para que una variable Dirección sea la direccion de contacto
            public setDireccion(value: Direccion) {
                this._direccion = [value];
            }
            // metodo para que no aparezca como objeto y sea más legible en pantalla
            public mostrarDireccion() {
                // si el objeto tiene valores de piso o letra -> la impresión es diferente según el caso
                if (this.direccion[0].piso != undefined || this.direccion[0].letra != undefined) {
                    if (this.direccion[0].piso != undefined && this.direccion[0].letra != undefined) {
                        var direccion = this.direccion[0].calle + ", nº" + this.direccion[0].numero + ", " 
                        var direccion = direccion + this.direccion[0].piso + "º" + this.direccion[0].letra + ", ";
                        var direccion = direccion + this.direccion[0].codigo_postal + ", " + this.direccion[0].poblacion + ", " + this.direccion[0].provincia;
                        return direccion;
                    }
                    else if (this.direccion[0].letra == undefined) {
                        var direccion = this.direccion[0].calle + ", nº" + this.direccion[0].numero + ", " 
                        var direccion = direccion + this.direccion[0].piso + "º, ";
                        var direccion = direccion + this.direccion[0].codigo_postal + ", " + this.direccion[0].poblacion + ", " + this.direccion[0].provincia;
                        return direccion;
                    }
                    else {
                        var direccion = this.direccion[0].calle + ", nº" + this.direccion[0].numero + ", " 
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
    public mostrarDatos() {
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
