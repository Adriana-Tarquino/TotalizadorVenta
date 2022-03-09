import porcentaje_Impuesto from "./calculos";

const cantidad_1 = document.querySelector("#cantidad");
const precio_1 = document.querySelector("#precio");
const div = document.querySelector("#resul");
const estados_1 = document.querySelector("#estados");
const form = document.querySelector("#ventas-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cantidad_2 = cantidad_1.value;
  const precio_2 = precio_1.value;
  const estados_2 = estados_1.value;
  //div.innerHTML = "<p>" + cantidad_2 +"&nbsp"+ precio_2 + "&nbsp" + estados_2 + "&nbsp" + porcentaje_Impuesto(estados_2) +  "</p>";
  div.innerHTML = "<p>" + "Precio neto (" + "$" + cantidad_2 *precio_2 + ") :" + "</p>";


});