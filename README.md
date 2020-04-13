# Cifra de César- Mensagem Segura Para o Espaço

## Índice

- [1. Prefácio](#1-prefácio)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [3. Leyout do projeto](#3-leyout-do-projeto)
- [4. Linguagem utilizada](#4-objetivos-de-aprendizagem)
- [5. Instalação](#5-Instalação)
- [6. Considerações finais](#6-considerações-finais)

---

## 1. Prefácio

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

- Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto com cifra: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
- A letra A será D
- A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de César
muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto

O produto foi elaborado pensando nas instituições que trabalham com dados sigilosos e precisam manter o sigilo e segurança dos mesmos. Voltado para a comunicação entre os integrantes da base de lançamento espacial do Brasil e os tripulantes da estação espacial internacional. O projeto permite ao usuário enviar mensagens codificadas, garantido a segurança dos dados e do usuário em questão.

Para ter acesso à página de envio de mensagem o usuario deverá fazer o login, utilizando o e-mail e senha cadastrados. **Para teste, poderá ser usuado o USUÁRIO: luana@gmail.com e SENHA: 102030**.
Para criptografar uma mensagem e envia-la, o usuario deverá:
Inserir seu nome, a mensagem na qual deseja criptografar, a chave de deslocamento desejada e selecionar o nome do destinatário, nos respectivos campos. Após preencher os campos, deverá clicar no botão criptografar, e assim a mensagem criptografada aparecerá no campo "mensagem". Logo após, deverá clicar no botão "Enviar mensagem" e pronto, a mensagem será enviada com segurança ao destinatário.

Para descriptografar uma mensagem o usuario deverá:
Inserir seu nome, a mensagem na qual deseja descriptografar e a chave usadada para criptografar essa mensagem. Depois clicar no botão "descriptografar", então a mensagem descriptografada aparecerá no campo "mensagem". Caso o usuario queira enviar essa mensagem descriptografada para alguem, ele deverá selecionar o destinatario no campo "destinatário" e clicar no botão "enviar mensagem".

## 3. Leyout do projeto

O leyout do projeto foi pensado para que seja legivel e de fácil interpretação pelo usuario.
Comtem uma tela inicial para o usuario realizar o login, inserindo o e-mail e senha cadastrados. Como mostrado abaixo:

![Print página inicial- Login](home_page.gif)

Após o login, o usuario será direcionado para a tela principal, onde encontra-se do lado direito da tela o formulario, a ser preenchido com nome do usuario, mensagem a ser criptografada/descriptografada, chave de deslocamento desejada e a opção de selecionar o destinatário.
Ao lado esquerdo da tela possue uma animação com um pequeno foquete, remetendo a idéia de que a mensagem esteja sendo enviada através de um foguete para o outro usuário.

![Print página de mensagem](message_page.gif)

## 4. Linguagem Utilizada

Foram utilizadas HTML 5, CSS 3 e JavaScript, sendo este separado em index.js, cipher.js e home.js, onde index.js foram colocadas as funções de botão, o cipher.js as funções para codificação e decodificação e o home.js as funções de botão e login.

## 5. Instalação

- Instale as dependências do projeto rodando o comando `npm install`. Mas
  antes disso tenha certeza de ter instalado o [Node.js](https://nodejs.org/)
  (que inclui o [npm](https://docs.npmjs.com/)).
- Caso queira, você conseguirá executar os :traffic_light: testes
  unitários com o comando `npm test`.
- Para ver a interface do programa no seu servidor local, use o comando `npm start`.

* Para acessar a plataforma, utilize o link: https://luana-aredes.github.io/SAP004-cipher/

## 6. Considerações finais

O produto para estar concluído precisa de algumas implementações, que no caso não serão feitas agora. O objetivo é que o usuário consiga enviar mensagens, sejam elas sigilosas ou não, com segurança e privacidade.
