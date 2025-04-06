const screen = document.getElementById("screen");
const clean = document.getElementById("clean");
const back = document.getElementById("back");
const fold = document.getElementById("fold");
const substance = document.getElementById("substance");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const point = document.getElementById("point");
const equals = document.getElementById("equals");
const skok1 = document.getElementById("skok1");
const skok2 = document.getElementById("skok2");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");

clean.onclick = function () {
  screen.value = "";
};
back.onclick = function () {
  screen.value = screen.value.slice(0, -1);
};
fold.onclick = function () {
  screen.value += "+";
};
substance.onclick = function () {
  screen.value += "-";
};
multiply.onclick = function () {
  screen.value += "*";
};
divide.onclick = function () {
  screen.value += "/";
};
point.onclick = function () {
  screen.value += ".";
};
equals.onclick = function () {
  const expression = screen.value;

  if (/^[0-9+\-*/() .]+$/.test(expression)) {
    try {
      const result = eval(expression);
      screen.value = result.toFixed(2);
    } catch (error) {
      screen.value = "Ошибка вычисления";
    }
  } else {
    screen.value = "Недопустимые символы в выражении!";
  }
};
skok1.onclick = function () {
  screen.value += "(";
};
skok2.onclick = function () {
  screen.value += ")";
};
one.onclick = function () {
  screen.value += "1";
};
two.onclick = function () {
  screen.value += "2";
};
three.onclick = function () {
  screen.value += "3";
};
four.onclick = function () {
  screen.value += "4";
};
five.onclick = function () {
  screen.value += "5";
};
six.onclick = function () {
  screen.value += "6";
};
seven.onclick = function () {
  screen.value += "7";
};
eight.onclick = function () {
  screen.value += "8";
};
nine.onclick = function () {
  screen.value += "9";
};
zero.onclick = function () {
  screen.value += "0";
};

function updateCalculatorStyles() {
  const calculator = document.querySelector(".calculator");
  const root = document.documentElement;
  const width = window.innerWidth;
  const height = window.innerHeight;

  if (width >= height) {
    calculator.style.width = "60vw";
    root.style.setProperty("--vh", "10vh");
  } else {
    calculator.style.width = "80vw";
    root.style.setProperty("--vh", "7vh");
  }
}
window.addEventListener("load", updateCalculatorStyles);
window.addEventListener("resize", updateCalculatorStyles);
