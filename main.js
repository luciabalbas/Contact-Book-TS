"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importación de clases
const contacto_1 = require("./contacto");
// Crea la primera persona de contacto: María
let maria = new contacto_1.Contacto("Maria", "García", 24, "24766754R", "23/04", "mujer", [], [], [], "prima de Juan");
// Crea el telefono y mail de Maria
maria.setTelefono("movil", 6545434);
maria.setMail("trabajo", "mariagar@eri.com");
// Crea el objeto direccion de Maria y se lo añadimos a su perfil de contacto
let direccion_maria = {
    calle: "C. Italia",
    numero: 9,
    codigo_postal: 44002,
    poblacion: "Teruel",
    provincia: "Teruel"
};
maria.setDireccion(direccion_maria);
// Crea la segunda persona de contacto: Juan
let juan = new contacto_1.Contacto("Juan", "Rodriguez", 32, "7882134T", "14/09", "hombre", [], [], [], "primo de Maria");
// Crea el telefono y mail de Juan
juan.setTelefono("casa", 986320844);
juan.setMail("personal", "juanrod@gmail.com");
// Crea el objeto direccion de Juan y se lo añadimos a su perfil de contacto
let direccion_juan = {
    calle: "Av. de Vallcarca",
    numero: 78,
    piso: 5,
    letra: "D",
    codigo_postal: 18023,
    poblacion: "Barcelona",
    provincia: "Barcelona"
};
juan.setDireccion(direccion_juan);
// Crea la tercera persona de contacto: Miguel
let miguel = new contacto_1.Contacto("Miguel Ángel", "Jimenez", 21, "4358123D", "12/11", "hombre", [], [], [], "amigo de Maria");
// Crea el teléfono y mail de Miguel
miguel.setTelefono("trabajo", 43123123);
miguel.setMail("personal", "miguelajime@gmail.com");
// Crea el objeto direccion de Miguel y se lo añadimos a su perfil de contacto
let direccion_miguel = {
    calle: "C. El Almendros",
    numero: 20,
    codigo_postal: 29601,
    poblacion: "Marbella",
    provincia: "Málaga"
};
miguel.setDireccion(direccion_miguel);
// Imprime Maria, Juan y Miguel en consola
maria.mostrarDatos();
console.log("");
juan.mostrarDatos();
console.log("");
miguel.mostrarDatos();
console.log("");
// Búsqueda por DNI
// Crea un array que contenga todos los contactos
let array_personas = [
    maria,
    juan,
    miguel
];
// Crea una variable para el contacto a buscar
let searched_obj = array_personas.find(callback_func);
// Crea la funcion que encuentra el contacto
function callback_func(object) {
    if (object.dni == "24766754R") {
        return true;
    }
    else {
        return false;
    }
}
// Contacto encontrado: se imprime
console.log("La persona que se busca mediante el DNI es", searched_obj === null || searched_obj === void 0 ? void 0 : searched_obj.nombre);
console.log("");
// Modificacion de telefono, correo electronico y direccion 
searched_obj === null || searched_obj === void 0 ? void 0 : searched_obj.setTelefono("movil", 543231245);
searched_obj === null || searched_obj === void 0 ? void 0 : searched_obj.setMail("trabajo", "mariagar@boc.es");
let cambio_direccion = {
    calle: "Plaça de l'Assemblea de Catalunya",
    numero: 3,
    piso: 3,
    // letra: "A",
    codigo_postal: 38911,
    poblacion: "Badalona",
    provincia: "Barcelona"
};
searched_obj === null || searched_obj === void 0 ? void 0 : searched_obj.setDireccion(cambio_direccion);
// Impresión de los cambios
console.log(searched_obj === null || searched_obj === void 0 ? void 0 : searched_obj.nombre, searched_obj === null || searched_obj === void 0 ? void 0 : searched_obj.apellido, "nuevo teléfono", searched_obj === null || searched_obj === void 0 ? void 0 : searched_obj.getTelefono());
console.log(searched_obj === null || searched_obj === void 0 ? void 0 : searched_obj.nombre, searched_obj === null || searched_obj === void 0 ? void 0 : searched_obj.apellido, "nuevo email", searched_obj === null || searched_obj === void 0 ? void 0 : searched_obj.getMail());
console.log(searched_obj === null || searched_obj === void 0 ? void 0 : searched_obj.nombre, searched_obj === null || searched_obj === void 0 ? void 0 : searched_obj.apellido, "nueva dirección:", searched_obj === null || searched_obj === void 0 ? void 0 : searched_obj.mostrarDireccion());
console.log("");
// conctacto actualizado
console.log("Contacto actualizado:");
searched_obj === null || searched_obj === void 0 ? void 0 : searched_obj.mostrarDatos();
