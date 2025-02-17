// Usaremos en la terminal: npm install --save-dev jsdoc para la instalación del JsDoc.

// JSDoc utiliza comentarios especiales para documentar funciones, clases y módulos.

/**
 * Módulo de cálculo matemático.
 * @module Calculadora
 */

/**
 * Suma dos números.
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @returns {number} La suma de a y b.
 */
function sumar(a, b) {
    return a + b;
}

module.exports = { sumar };

/* Si utilizasemos un archivo de configuración inicial usaremos: npx jsdoc -c jsdoc.json
En nuestro caso, que no ha sido creado, utilizaremos npx jsdoc -d docs calculadora.js para generar la documentación, esto creará la carpeta docs para documentación formato HTML.
Si queremos acceder a ella, vamos a docs/index.html. */
