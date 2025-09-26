import info, { sumar, restar, multiplicar, dividir } from "./calculadora.js";

function calcular(nombreCalculo, num1, num2) {
    try {
        let resultado;
        // Switch para seleccionar la operación.
        switch (nombreCalculo.toLowerCase()) { // toLowerCase para Convertir a minúsculas 
            case "sumar":
                resultado = sumar(num1, num2);
                break;
            case "restar":
                resultado = restar(num1, num2);
                break;
            case "multiplicar":
                resultado = multiplicar(num1, num2);
                break;
            case "dividir":
                resultado = dividir(num1, num2);
                break;
            default:
                // Error si el cálculo no se reconoce
                throw new Error(`Operación "${nombreCalculo}" no reconocida.`);
        }
        // Y si está bien, mostramos el resultado.
        console.log(`El resultado de ${nombreCalculo} es: ${resultado}`);
    } catch (error) {
        console.error(`Error al realizar ${nombreCalculo}: ${error.message}`);
    }
}

// Testing esta cosarada

// 1. Mostrar la información del módulo.
console.log(info());
console.log("---");

// 2. Probando funcionamiento de cálculos.
console.log("--- Pruebas de operaciones correctas ---");
calcular("sumar", 20, 10);
calcular("restar", 20, 10);
calcular("multiplicar", 20, 10);
calcular("dividir", 20, 4);

// 3. A ve' que pasa si hago macana
console.log("\n--- Pruebas de manejo de errores ---");
calcular("sumar", "ocho", 10); // Parámetros no numéricos
calcular("dividir", 20, 0);      // División por cero
calcular("potencia", 2, 3);      // Operación no reconocida
calcular("dividir", 0, 5);       // (El resultado debe ser 0, no un error)