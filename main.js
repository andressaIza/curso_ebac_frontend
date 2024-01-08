function validarFormulario() {
  // Obter os valores dos campos
  var campoA = document.getElementById('campoA').value;
  var campoB = document.getElementById('campoB').value;

  // Converter os valores para números
  campoA = parseFloat(campoA);
  campoB = parseFloat(campoB);

  // Verificar a condição de validação
  if (campoB > campoA) {
      exibirMensagemPositiva();
  } else {
      exibirMensagemNegativa();
  }
}

function exibirMensagemPositiva() {
  var mensagemDiv = document.getElementById('mensagem');
  mensagemDiv.innerHTML = 'Formulário válido! B é maior que A.';
  mensagemDiv.style.color = 'green';
}

function exibirMensagemNegativa() {
  var mensagemDiv = document.getElementById('mensagem');
  mensagemDiv.innerHTML = 'Formulário inválido! Certifique-se de que B é maior que A.';
  mensagemDiv.style.color = 'red';
}
