let num = "";
let mem = 0;
let result = 0;
let cal = "";
function addInput(input) {
  document.getElementById("display").innerText = num += input;
}
function percentNumber() {
  num = document.getElementById("display").innerText;
  document.getElementById("display").innerText = parseInt(num)/100;
}
function clearAll() {
  num = "";
  mem = 0;
  result = 0;
  cal = "";
  document.getElementById("previous").innerText = "";
  document.getElementById("display").innerText = 0;
  document.getElementById("cal").innerText = cal;
}
function clearInput() {
  num = "";
  document.getElementById("display").innerText = num;
}
function clearNumber() {
  num = document.getElementById("display").innerText;
  document.getElementById("display").innerText = num.slice(0, num.length - 1);
}
function multiInverse() {
  result = document.getElementById("display").innerText;
  document.getElementById("display").innerText = 1 / result;
}
function squareNumber() {
  result = document.getElementById("display").innerText;
  document.getElementById("display").innerText = result * result;
}
function squareRoot() {
  result = document.getElementById("display").innerText;
  document.getElementById("display").innerText = Math.sqrt(result);
}
function addInverse() {
  result = document.getElementById("display").innerText;
  mem = result * -1;
  document.getElementById("display").innerText = mem;
}
function calculateNumber(input) {
  if (mem == 0) {
    mem = parseInt(num);
    num = "";
    document.getElementById("display").innerText = num;
    document.getElementById("previous").innerText = mem;
    cal = input;
    document.getElementById("cal").innerText = cal;
  } else {
    switch (cal) {
      case "+":
        mem += parseInt(num);
        num = "";
        document.getElementById("display").innerText = num;
        document.getElementById("previous").innerText = mem;
        break;
      case "-":
        mem -= parseInt(num);
        num = "";
        document.getElementById("display").innerText = num;
        document.getElementById("previous").innerText = mem;
        break;
      case "*":
        mem *= parseInt(num);
        num = "";
        document.getElementById("display").innerText = num;
        document.getElementById("previous").innerText = mem;
        break;
      case "/":
        mem /= parseInt(num);
        num = "";
        document.getElementById("display").innerText = num;
        document.getElementById("previous").innerText = mem;
        break;
    }
    cal = input;
    document.getElementById("cal").innerText = cal;
  }
}
function equal() {
  switch (cal) {
    case "+":
      mem += parseInt(num);
      num = "" + mem;
      mem = 0;
      document.getElementById("display").innerText = num;
      document.getElementById("previous").innerText = "";
      document.getElementById("cal").innerText = "";
      break;
    case "-":
      mem -= parseInt(num);
      num = "" + mem;
      mem = 0;
      document.getElementById("display").innerText = num;
      document.getElementById("previous").innerText = "";
      document.getElementById("cal").innerText = "";
      break;
    case "*":
      mem *= parseInt(num);
      num = "" + mem;
      mem = 0;
      document.getElementById("display").innerText = num;
      document.getElementById("previous").innerText = "";
      document.getElementById("cal").innerText = "";
      break;
    case "/":
      mem /= parseInt(num);
      num = "" + mem;
      mem = 0;
      document.getElementById("display").innerText = num;
      document.getElementById("previous").innerText = "";
      document.getElementById("cal").innerText = "";
      break;
  }
}
