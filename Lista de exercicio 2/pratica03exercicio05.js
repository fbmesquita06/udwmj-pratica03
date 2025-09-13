
document.getElementById('btnCalcular').addEventListener('click', function() {

    
    const inputRaio = document.getElementById('raio');
    const raio = parseFloat(inputRaio.value);

    
    if (isNaN(raio) || raio <= 0) {
        document.getElementById('resultado').innerHTML = 'Por favor, insira um raio válido.';
        document.getElementById('resultado').style.color = 'red';
        return; 
    }
    const volume = (4/3) * Math.PI * Math.pow(raio, 3);

    const resultadoTexto = `O volume da esfera com raio ${raio} cm é de ${volume.toFixed(2)} cm³.`;
    document.getElementById('resultado').innerHTML = resultadoTexto;
    document.getElementById('resultado').style.color = '#28a745'; 
});