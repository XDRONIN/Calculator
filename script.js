let numberButton = document.querySelectorAll(".num");
numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    idvalue += button.id;
  });
});
let result;
let idvalue = "";
let num = [];
let OP;
let numindex = 0;
let operatorButton = document.querySelectorAll(".op");
operatorButton.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (numindex == 0 && idvalue != null) {
      num[0] = idvalue;

      numindex += 1;
      setOperator(operator);
    } else if (numindex == 1 && idvalue != null) {
      num[1] = idvalue;

      findresult(num[0], num[1], OP);
      console.log(result);
      num[0] = result;

      setOperator(operator);
    }

    idvalue = "";
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
  }
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
