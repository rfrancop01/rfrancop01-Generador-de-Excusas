
import "bootstrap";
import "./style.css";

window.onload = function() {
  let who = ["Mi perro", "Mi vecino", "El gato", "El dinosaurio"];
  let action = ["se comió", "quemó", "rompió", "pisó"];
  let what = ["los deberes", "el teléfono", "el ordenador", "la moto"];
  let when = ["ayer", "antes de dormir", "durante el vuelo", "cuando llovía"];

  let excse1 = Math.floor(Math.random() * who.length);
  let excse2 = Math.floor(Math.random() * action.length);
  let excse3 = Math.floor(Math.random() * what.length);
  let excse4 = Math.floor(Math.random() * when.length);

  document.querySelector(".excuse").innerHTML =
    who[excse1] +
    " " +
    action[excse2] +
    " " +
    what[excse3] +
    " " +
    when[excse4];
};
