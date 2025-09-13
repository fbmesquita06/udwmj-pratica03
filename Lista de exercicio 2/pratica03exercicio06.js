
document.getElementById('btnCalcular').addEventListener('click', function() {
    
    const capital = parseFloat(document.getElementById('capital').value);
    const taxa = parseFloat(document.getElementById('taxa').value);
    const tempo = parseFloat(document.getElementById('tempo').value);
    
    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo) || capital <= 0 || taxa < 0 || tempo <= 0) {
        document.getElementById('resultado').innerHTML = 'Por favor, insira valores válidos.';
        document.getElementById('resultado').style.color = 'red';
        return;
    }
    
    const taxaDecimal = taxa / 100;
    
    const montante = capital * Math.pow((1 + taxaDecimal), tempo);
    
    const jurosTotais = montante - capital;
    
    const resultadoTexto = `
        Capital Inicial: R$ ${capital.toFixed(2)}<br>
        Juros Totais: R$ ${jurosTotais.toFixed(2)}<br>
        Montante Final: R$ ${montante.toFixed(2)}
    `;
    
    document.getElementById('resultado').innerHTML = resultadoTexto;
    document.getElementById('resultado').style.color = '#28a745';
});