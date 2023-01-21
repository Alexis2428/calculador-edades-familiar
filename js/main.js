const $botonContinuar = document.querySelector('button[name=continuar]');
$botonContinuar.onclick = function(event) {
    event.preventDefault();

    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');

        borrarIntegrantesAnteriores();
        crearIntegrantes(Number($cantidadIntegrantes.value));
}

const $botonCalcular = document.querySelector('button[name=calcular]');
$botonCalcular.onclick = obtenerRespuestas;

document.querySelector('button[name=reiniciar]').onclick = reiniciar;

function crearIntegrantes(cantidadIntegrantes) {
    if (0 < cantidadIntegrantes) {
        mostrarBotonCalcular();
    } else {
        ocultarBotonCalcular();
    }

    for (let i = 0; i < cantidadIntegrantes; i++) {
        crearIntegrante(i);
    }
}

function crearIntegrante(indice) {
    const $integrante = document.createElement('div');
    $integrante.classList.add('integrante');
    $integrante.classList.add('form-floating');
    $integrante.classList.add('mb-1');

    const $cuadroTexto = document.createElement('input');
    $cuadroTexto.type = 'number';
    $cuadroTexto.className = 'form-control';
    $cuadroTexto.setAttribute('placeholder', 'edad-integrante');
    const $texto = document.createElement('label');
    $texto.innerText = `Ingrese la edad del integrante #${indice + 1}`;

    $integrante.appendChild($cuadroTexto);
    $integrante.appendChild($texto);

    document.querySelector('#integrantes').appendChild($integrante);
}

function borrarIntegrantesAnteriores() {
    const $integrantes = document.querySelectorAll('.integrante');

    for (let i = 0; i < $integrantes.length; i++) {
        $integrantes[i].remove();
    }
}

function obtenerRespuestas() {
    const $edades = document.querySelectorAll('.integrante input');

    if (validarEdades($edades)) {
        const edades = obtenerEdades($edades);

        obtenerRespuesta('mayor', obtenerNumeroMayor(edades));
        obtenerRespuesta('menor', obtenerNumeroMenor(edades));
        obtenerRespuesta('promedio', obtenerPromedio(edades).toFixed(2));

        mostrarRespuestas();
        mostrarBotonReiniciar();
    }
}

function obtenerEdades($edades) {
    const edades = [];

    for (let i = 0; i < $edades.length; i++) {
        edades.push(Number($edades[i].value));
    }

    return edades;
}

function obtenerRespuesta(tipo, valor) {
    document.querySelector(`#edad-${tipo}`).textContent = valor;
}

function reiniciar() {
    borrarIntegrantesAnteriores();
    borrarErroresAnteriores();
    ocultarRespuestas();
    ocultarBotonCalcular();
    ocultarBotonReiniciar();
}

function mostrarBotonCalcular() {
    document.querySelector('button[name=calcular]').classList.remove('oculto');
}

function ocultarBotonCalcular() {
    document.querySelector('button[name=calcular]').classList.add('oculto');
}

function mostrarRespuestas() {
    document.querySelector('#respuestas').className = '';
}

function ocultarRespuestas() {
    document.querySelector('#respuestas').className = 'oculto';
}

function mostrarBotonReiniciar() {
    document.querySelector('button[name=reiniciar]').classList.remove('oculto');
}

function ocultarBotonReiniciar() {
    document.querySelector('button[name=reiniciar]').classList.add('oculto');
}

function validarEdades($edades) {
    const errores = {};

    for (let i = 0; i < $edades.length; i++) {
        errores[i] = validarEdad($edades[i].value);
    }

    const sonValidas = 0 === manejarErrores(errores, $edades);

    return sonValidas;
}

function validarEdad(edad) {
    if ('' === edad) {
        return 'El campo edad no puede estar vacio';
    }

    if (!/^[0-9]+$/.test(edad)) {
        return 'El campo edad solo admite números enteros';
    }

    if (!/^[0-9]{1,3}$/.test(edad)) {
        return 'El campo edad solo admite edades validas (entre 1 y 3 caracteres)';
    }

    return '';
}

function manejarErrores(errores, $edades) {
    let cantidadErrores = 0;

    Object.keys(errores).forEach(function(key) {
        const error = errores[key];

        if (error) {
            cantidadErrores++
            $edades[key].classList.add('error');

            if (!comprobarExisteError(error)) {
                crearError(error);
            }
        } else {
            $edades[key].classList.remove('error');
        }
    })

    borrarErroresCorregidos(errores);

    return cantidadErrores;
}

function crearError(error) {
    const $error = document.createElement('li');
    $error.className = 'list-group-item';
    $error.innerText = error;

    document.querySelector('#errores').appendChild($error);
}

function comprobarExisteError(error) {
    const $errores = document.querySelectorAll('#errores li');

    for (let i = 0; i < $errores.length; i++) {
        if (error === $errores[i].innerText) {
            return true;
        }
    }

    return false;
}

function borrarErroresCorregidos(errores) {
    const valorErrores = Object.values(errores);
    const $errores = document.querySelectorAll('#errores li');

    for (let i = 0; i < $errores.length; i++) {
        let existeError = false;

        for (let j = 0; j < valorErrores.length; j++) {
            if ($errores[i].innerText === valorErrores[j]) {
                existeError = true;
                break;
            }
        }
        
        if (!existeError) {
            $errores[i].remove();
        }
    }
}

function borrarErroresAnteriores() {
    const $errores = document.querySelectorAll('#errores li');

    for (let i = 0; i < $errores.length; i++) {
        $errores[i].remove();
    }
}

