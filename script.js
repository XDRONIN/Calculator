let numberButton = document.querySelectorAll(".num");
numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    clickSound.play();
    if (eqresult == true) {
      clear();
    }
    idvalue += button.id;
    display(idvalue);
  });
});
let eqresult;
let result;
let idvalue = "";
let num = [];
let OP;
let numindex = 0;
let operatorButton = document.querySelectorAll(".op");
operatorButton.forEach((operator) => {
  operator.addEventListener("click", () => {
    clickSound.play();
    if (numindex == 0 && idvalue != "") {
      num[0] = idvalue;

      numindex += 1;

      setOperator(operator);
    } else if (numindex == 1 && idvalue != "") {
      num[1] = idvalue;

      findresult(num[0], num[1], OP);

      num[0] = result;

      setOperator(operator);
    }

    idvalue = "";
    eqresult = false;
  });
});
function findresult(num0, num1, op) {
  num0 = Number(num0);
  num1 = Number(num1);
  switch (op) {
    case "+":
      result = num0 + num1;

      break;
    case "-":
      result = num0 - num1;

      break;
    case "*":
      result = num0 * num1;

      break;
    case "/":
      if (num1 != 0) {
        result = num0 / num1;
      } else {
        console.log("NUH-UH");
      }
      break;
  }
  result = Math.round(result * 100) / 100;
  display(result);
}
function setOperator(operator) {
  let operatorid = operator.id;
  switch (operatorid) {
    case "+":
      OP = "+";

      break;
    case "-":
      OP = "-";

      break;
    case "x":
      OP = "*";

      break;
    case "/":
      OP = "/";

      break;

    default:
      break;
  }
}
const equalButton = document.getElementById("equals");
equalButton.addEventListener("click", () => {
  clickSound.play();
  if (num[0] != null && idvalue != null) {
    num[1] = idvalue;
    findresult(num[0], num[1], OP);

    numindex = 0;
    idvalue = result;
    num[0] = null;
    eqresult = true;
  }
});
const clrButton = document.getElementById("clear");
clrButton.addEventListener("click", clear);
const screenP = document.getElementById("display");
function display(result) {
  screenP.innerText = result;
}
function clear() {
  clickSound.play();
  result = null;
  idvalue = "";
  num = [null];
  OP = "";
  numindex = 0;
  display(result);
  eqresult = false;
}
let clickSound = new Audio();
clickSound.src = "click.mp3";
