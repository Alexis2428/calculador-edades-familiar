function probarValidarEdad() {
    console.assert(
        validarEdad('') === 'El campo edad no puede estar vacio',
        'validarEdad no validó que no se ingresó una edad'
    );

    console.assert(
        validarEdad('24,5') === 'El campo edad solo admite números enteros',
        'validarEdad no validó que el número no sea entero'
    );

    console.assert(
        validarEdad('1000') === 'El campo edad solo admite edades validas (entre 1 y 3 caracteres)',
        'validarEdad no validó que la edad no sea valida'
    );

    console.assert(
        validarEdad('24') === '',
        'validarEdad no funcionó con una edad valida'
    );
}

function probarValidarNumero() {
    console.assert(
        validarNumero('') === 'El campo cantidad-integrantes no debe estar vacio',
        'validarNumero no validó que no se ingresó ningún número'
    );

    console.assert(
        validarNumero('5,5') === 'El campo cantidad-integrantes solo acepta números enteros',
        'validarNumero no validó que el número no sea entero'
    );

    console.assert(
        validarNumero('5') === '',
        'validarNumero no funcionó con un número valido'
    );
}

probarValidarEdad();
probarValidarNumero();
