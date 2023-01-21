function obtenerNumeroMayor(numeros) {
    let numeroMayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > numeroMayor) {
            numeroMayor = numeros[i];
        }
    }
    return numeroMayor;
}

function obtenerNumeroMenor(numeros) {
    let numeroMenor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < numeroMenor) {
            numeroMenor = numeros[i];
        }
    }
    return numeroMenor;
}

function obtenerPromedio(numeros) {
    let sumaTotal = 0;
    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += numeros[i];
    }
    return (sumaTotal / numeros.length);
}
