// Array com os caminhos das suas imagens
var imagens = ["imgs/banana.png", "imgs/kiwi.jpg", "imgs/maca.png", "imgs/melancia.png", "imgs/uva.png", "imgs/abacaxi.png"];
var indiceAtual = 0;
var intervalo;

// Função para mudar a imagem central
function mudarImagem(indice) {
  var imagemCentral = document.getElementById('central');
  imagemCentral.src = imagens[indice];
  indiceAtual = indice;
}

// Função para iniciar o carrossel
function iniciarCarrossel() {
  intervalo = setInterval(function() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    mudarImagem(indiceAtual);
  }, 3000); // Troca a imagem a cada 3 segundos
}

// Função para parar o carrossel
function pararCarrossel() {
  clearInterval(intervalo);
}

window.onload = function() {
  // Inicia o carrossel quando a página é carregada
  iniciarCarrossel();

  // Adiciona evento de mouseover para as miniaturas
  var miniaturas = document.querySelectorAll('.miniatura');
  miniaturas.forEach(function(miniatura, indice) {
    miniatura.onmouseover = function() {
      pararCarrossel();
      mudarImagem(indice);
    };
    miniatura.onmouseout = iniciarCarrossel;
  });
};