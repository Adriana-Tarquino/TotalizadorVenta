const cantidad_1 = document.querySelector("#cantidad");
const precio_1 = document.querySelector("#precio");
const div = document.querySelector("#resul");
const form = document.querySelector("#ventas-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cantidad_2 = cantidad_1.value;
  const precio_2 = precio_1.value;
  div.innerHTML = "<p>" + cantidad_2 +"&nbsp"+ precio_2 + "</p>";

});