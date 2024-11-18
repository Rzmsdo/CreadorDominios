/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let dominiosGenerados = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let e = 0; e < adj.length; e++) {
      for (let u = 0; u < noun.length; u++) {
        dominiosGenerados.push(pronoun[i] + adj[e] + noun[u] + ".com");
      }
    }
  }

  console.log(dominiosGenerados);
  let preHtml = "";
  let presentacion = "";
  for (let i = 0; i < dominiosGenerados.length; i++) {
    preHtml += "<li>" + dominiosGenerados[i] + "</li>";
  }
  presentacion = "<lu>" + preHtml + "</lu>";
  document.getElementById("dominios").innerHTML = presentacion;
};
