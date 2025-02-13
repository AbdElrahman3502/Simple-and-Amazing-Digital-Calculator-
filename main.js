console.log('Hello !');

let hole = document.getElementById("container");
var shadow = '';
for (var i = 0; i < 20; i++) {
  shadow += (shadow? ',': '')+ i*1+'px '+ i*1+'px 0 #d9d9d9'
};
hole.style.boxShadow = shadow;

let display = document.getElementById('display');

function clr() {
  display.value = null;
}

function del() {
  display.value = display.value.slice(0, -1)
}

function additm(Num) {
  display.value += Num;
}

function equal() {
  display.value = eval(display.value);
}