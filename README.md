# Cifra de César- Mensagem Segura

## Índice

- [1. Prefácio](#1-prefácio)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [3. Leyout do projeto](#3-leyout-do-projeto)
- [4. Linguagem utilizada](#4-objetivos-de-aprendizagem)
- [5. Considerações finais](#5-considerações-finais)

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

O produto foi elaborado pensando nas instituições que trabalham com dados sigilosos e precisam manter o sigilo e segurança dos mesmos. Voltado para a comunicação entre tripulantes da estação espacial internacional com os integrantes da base de lançamento espacial do Brasil. O projeto permite que as mensgaens sejam enviadas codificadas, garantido a segurança dos dados e do usuário em questão.

Para criptografar uma mensagem e envia-la, o usuario deverá:
Inserir seu nome, a mensagem na qual deseja criptografar, a chave de deslocamento desejada e selecionar o nome do destinatário, nos respectivos campos. Após preencher os campos, deverá clicar no botão criptografar, e assim a mensagem criptografada aparecerá no campo "mensagem". Logo após, deverá clicar no botão "Enviar mensagem" e pronto, a mensagem será enviada com segurança ao outr usuário.

Para descriptografar uma mensagem o usuario deverá:
Inserir seu nome, a mensagem na qual deseja descriptografar e a chave usadada para criptografar essa mensagem. Depois clicar no botão "descriptografar", então a mensagem descriptografada aparecerá no campo "mensagem". Caso o usuario queira enviar essa mensagem descriptografada para alguem, ele deverá selecionar o destinatario no compo "destinatário" e clicar no botão "enviar mensagem".

## 3. Leyout do projeto

O leyout do projeto foi pensado para que seja legivel e de facil interpretação pelo usuario. Onde encontra-se do lado direito da tela o formulario, a ser preenchido com nome do usuario, mensagem a ser criptografada/descriptografada e a chave de deslocamento desejada.
E no lado esquerdo da tela, a animação com um pequeno foqute remetendo a idéia que a mensagem esteja sendo enviada através do foguete para o outro usuario e com segurança.
![Foguete voando](https://github.com/luana-aredes/SAP004-cipher/blob/master/foguetinhovoando.gif)


## 4. Linguagem Utilizada

Foram utilizadas HTML 5, CSS 3 e JavaScript, sendo este separado em index.js e cipher.js, onde index.js foram colocadas as funções de botão e o cipher as funções para codificação e decodificação.

## 5. Considerações finais

O produto para estar concluído precisa de algumas implementações, que no caso não serão feitas agora. O objetivo é que o usuário consiga enviar mensagens, sejam elas sigilosas ou não, com segurança e privacidade.
