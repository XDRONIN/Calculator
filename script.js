let numberButton = document.querySelectorAll(".num");
numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    idvalue += button.id;
    console.log(idvalue);
  });
});
let idvalue = "";
let num = [];
let operator;
let numindex = 0;
let operatorButton = document.querySelectorAll(".op");
operatorButton.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (numindex == 0 && idvalue != 0) {
      num[0] = idvalue;
      console.log(num[0]);
      numindex += 1;
    } else if (numindex == 1 && idvalue != 0) {
      num[1] = idvalue;
      console.log(num[1]);
    }
    idvalue = "";
  });
});
