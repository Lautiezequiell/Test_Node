
function validarNumeros(a, b) {
    const numA = Number(a);
    const numB = Number(b);

    if (Number.isNaN(numA) || Number.isNaN(numB)) {
        throw new Error("Ambos parámetros deben ser valores numéricos.");
    }
    return { numA, numB }; // Devolvemos los números ya convertidos
}

export function sumar(a, b) {
    const { numA, numB } = validarNumeros(a, b); // Validamos los números
    return numA + numB;
}

export function restar(a, b) {
    const { numA, numB } = validarNumeros(a, b);
    return numA - numB;
}

export function multiplicar(a, b) {
    const { numA, numB } = validarNumeros(a, b);
    return numA * numB;
}

export function dividir(a, b) {
    const { numA, numB } = validarNumeros(a, b);
    if (numB === 0) {
        throw new Error("No se puede dividir por cero.");
    }
    return numA / numB;
}

function info() {
    return "Con el presente módulo usted podrá realizar las operaciones básicas de matemática como sumar, restar, multiplicar y dividir.";
}

// Exportamos "info" por defecto.
export default info;