function formatarDinheiro(value) {
  return "R$ " + value.toFixed(2);
}

function atualizar() {
  let conta = Number(document.getElementById('suaConta').value);
  let porcentagemGorjeta = document.getElementById('inputGorjeta').value; 
  let pessoas = document.getElementById('inputPessoas').value;

  let valorGorjeta = (conta * (porcentagemGorjeta / 100));
  let total = conta + valorGorjeta;
  let valorDivididoPorPessoas = total / pessoas;

  document.getElementById('porcentagemGorjeta').innerHTML = porcentagemGorjeta + ' %';
  document.getElementById('valorGorjeta').innerHTML = formatarDinheiro(valorGorjeta);
  document.getElementById('totalComGorjeta').innerHTML = formatarDinheiro(total);
  document.getElementById('pessoas').innerHTML = pessoas + ' Pessoas';
  document.getElementById('divisaoConta').innerHTML = formatarDinheiro(valorDivididoPorPessoas);
};