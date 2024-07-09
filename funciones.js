function encriptar(text) {
    const reglas = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    return text.replace(/[eioua]/g, match => reglas[match]);
}

function desencriptar(text) {
    const reglas = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    return text.replace(/enter|imes|ai|ober|ufat/g, match => reglas[match]);
}

function encriptarTexto() {
    console.log('encriptar')
    const texto = document.getElementById('area__texto').value;
    const resultado = encriptar(texto);
    actualizarResultado(resultado);
    limpiarTextarea()
}

function desencriptarTexto() {
    console.log('desencriptar')
    const texto = document.getElementById('area__texto').value;
    const resultado = desencriptar(texto);
    actualizarResultado(resultado);
    limpiarTextarea()
}

function actualizarResultado(resultado) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML =
        `<h2 class="texto__encriptado__titulo">Resultado:</h2>
    <p class="texto__encriptado__mensaje">${resultado}</p>
    <button onclick="copiarTexto()" class="boton__copia">Copiar</button>`
}

function limpiarTextarea() {
    document.getElementById('area__texto').value = "";
}

function copiarTexto() {
    const resultado = document.querySelector('.texto__encriptado__mensaje');
    const textoACopiar = resultado.textContent;
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = textoACopiar;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('Texto copiado al portapapeles: ' + textoACopiar);
}