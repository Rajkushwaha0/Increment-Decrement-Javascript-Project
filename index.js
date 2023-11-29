let val = document.getElementById("val");
let value = val.innerText;
function add(some) {
  val.innerText = some;
}

function minus() {
  value = parseInt(value) - 1;
  add(value);
}

function plus() {
  value = parseInt(value) + 1;
  add(value);
}
