const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

const matrizCodigo = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"]
];

function btnEncriptar() {
  const textoEncriptado = aplicarCodigo(textArea.value, matrizCodigo);
  mensagem.value = textoEncriptado;
  textArea.value = "";
}

function btnDesencriptar() {
  const textoDesencriptado = aplicarCodigo(textArea.value, matrizCodigo, true);
  mensagem.value = textoDesencriptado;
  textArea.value = "";
}

function aplicarCodigo(texto, matriz, desencriptar = false) {
  texto = texto.toLowerCase();

  for (let i = 0; i < matriz.length; i++) {
    const letra = matriz[i][desencriptar ? 1 : 0];
    const substituicao = matriz[i][desencriptar ? 0 : 1];
    texto = texto.split(letra).join(substituicao);
  }

  return texto;
}
