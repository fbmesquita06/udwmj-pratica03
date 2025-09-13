
document.getElementById('btnCalcular').addEventListener('click', function() {
    const inputRaio = document.getElementById('raio');
    const raio = parseFloat(inputRaio.value);
    
    if (isNaN(raio) || raio <= 0) {
        document.getElementById('resultado').innerHTML = 'Por favor, insira um raio válido.';
        document.getElementById('resultado').style.color = 'red';
        return; 
    }
    
    const area = Math.PI * Math.pow(raio, 2);
    
   
    const resultadoTexto = `A área do círculo com raio ${raio} é de ${area.toFixed(2)} cm².`;
    document.getElementById('resultado').innerHTML = resultadoTexto;
    document.getElementById('resultado').style.color = '#28a745'; 
});