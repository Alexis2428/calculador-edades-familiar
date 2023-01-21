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

