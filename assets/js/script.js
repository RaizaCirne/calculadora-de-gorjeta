function formatarDinheiro(value) {
  return "R$ " + value.toFixed(2);
}; 

function pluralSingular(value) {
  if(value <= 1) {
    return value + ' Pessoa';
  } return value + ' Pessoas';
};

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
  document.getElementById('pessoas').innerHTML = pluralSingular(pessoas);
  document.getElementById('divisaoConta').innerHTML = formatarDinheiro(valorDivididoPorPessoas);
};