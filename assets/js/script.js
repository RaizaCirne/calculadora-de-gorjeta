function atualizar() {
  let conta = Number(document.getElementById('suaConta').value);
  let porcentagemGorjeta = document.getElementById('inputGorjeta').value; 
  let pessoas = document.getElementById('inputPessoas').value;

  let valorGorjeta = (conta * (porcentagemGorjeta / 100));
  let total = conta + valorGorjeta;
  let valorDivididoPorPessoas = total / pessoas;

 
};