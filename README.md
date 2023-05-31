# DecoderAluraProject

O Decodificador é um projeto de aprendizado desenvolvido com o objetivo de praticar habilidades de programação. Neste projeto, o objetivo é criar um aplicativo que possa criptografar e descriptografar mensagens utilizando um código específico.

![DeployProjeto](https://github.com/Azeveddo/DecoderAluraProject/blob/main/assets/project.png)

Site:https://azeveddo.github.io/DecoderAluraProject/

## Escopo

O escopo do projeto pode ser definido com base em um design disponibilizado no figma ou adaptado.

## Tecnologias Utilizadas

- Bootstrap: Uma biblioteca de código aberto amplamente utilizada para criar interfaces responsivas e estilizadas.
- JavaScript: Uma linguagem de programação amplamente utilizada para adicionar interatividade e funcionalidade ao aplicativo.

## Funcionalidades

### Criptografar
Ao clicar no botão "Criptografar", o texto inserido no campo de entrada é processado pela função `btnEncriptar()`. Essa função utiliza a matriz de código definida para substituir as letras específicas de acordo com o código estabelecido. O resultado criptografado é exibido no campo de mensagem.

### Descriptografar
Ao clicar no botão "Descriptografar", o texto inserido no campo de entrada é processado pela função `btnDesencriptar()`. Essa função utiliza a mesma matriz de código para reverter as substituições realizadas na criptografia. O texto descriptografado é exibido no campo de mensagem.

### Aplicar Código
A função `aplicarCodigo()` é responsável por percorrer o texto fornecido e substituir as letras especificadas pelo código correspondente. Essa função pode ser utilizada tanto para criptografar como para descriptografar, dependendo do valor do parâmetro `desencriptar`.

## Conclusão

O projeto Decodificador é uma atividade de aprendizado que permite praticar o uso de linguagens de programação, estilização com Bootstrap e a implementação de algoritmos simples de criptografia e descriptografia. O uso do código fornecido e a interação com os elementos da interface do usuário permite compreender melhor conceitos como manipulação de strings, laços de repetição e funções.
