/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function Dom() {
  //write your code here

  var pronoun = ["the", "our", "any", "kill", "yellow"];
  var adj = ["great", "big", "nice", "tender", "tired"];
  var noun = ["jogger", "racoon", "history", "way", "family"];
  var dom = [".com", ".cl", ".co", ".mx", ".ae"];

  for (var prono of pronoun) {
    for (var adjetivo of adj) {
      for (var non of noun) {
        for (var dominio of dom) {
          console.log(prono + adjetivo + non + dominio);
        }
      }
    }
  }
};
