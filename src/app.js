/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateexcuse();
  });
};
//Datos de las excusas
let generateexcuse = () => {
  let quien = [
    "Mi perro ",
    "Mi abuela ",
    "Un pato furioso ",
    "Un adolescente salido "
  ];

  let como = ["babeó ", "mordió ", "pisó ", "se tumbó sobre "];

  let que = ["mis deberes.", "mi portatil.", "mis lapices.", "mi lienzo."];

  //Obtenemos una valor random de cada una

  let randQuien = quien[Math.floor(Math.random() * quien.length)];
  let randComo = como[Math.floor(Math.random() * como.length)];
  let randQue = que[Math.floor(Math.random() * que.length)];

  //Creamos la frase

  let frase = randQuien + randComo + randQue;
  return frase;
};
