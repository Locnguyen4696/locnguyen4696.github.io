let num = "";
let mem = 0;
let result = 0;
let cal = "";

function displayNumber(input){
  let output=input.toString();
  if(output.length>12){
    if (output.indexOf('e')!==-1){
      output=output.substr(0,8)+output.substr(output.indexOf('e'));
    }else{
      output=output.substr(0,12);
    }
  } else {
    if (output.indexOf('e')!==-1){
      output=output.substr(0,output.indexOf('e')-1)+output.substr(output.indexOf('e'));
    }else{
      output=output.substr(0,12);
    }
  }
  return output;
}
function addInput(input) {
  if(num.length<=12){
    document.getElementById("display").innerText = num += input;
    mem = parseFloat(num);
  }
}
function addFloat(){
  document.getElementById("display").innerText = num+=".";
}
function percentNumber() {
  mem = mem / 100;
  document.getElementById("display").innerText = displayNumber(mem);
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
  mem=parseFloat(num)
}
function multiInverse() {
  mem = 1 / mem;
  document.getElementById("display").innerText = displayNumber(mem);
}
function squareNumber() {
  mem *= mem;
  document.getElementById("display").innerText = displayNumber(mem);
}
function squareRoot() {
  mem = Math.sqrt(mem);
  document.getElementById("display").innerText = displayNumber(mem);
}
function addInverse() {
  mem *= -1;
  document.getElementById("display").innerText = displayNumber(mem);
}
function calculateNumber(input) {
  if (result == 0) {
    result = mem;
    mem = 0;
    num = "";
    cal = input;
    document.getElementById("display").innerText = num;
    document.getElementById("previous").innerText = displayNumber(result);
    document.getElementById("cal").innerText = cal;
  } else {
    switch (cal) {
      case "+":
        result += mem;
        mem = 0;
        num = "";
        cal = input;
        document.getElementById("display").innerText = num;
        document.getElementById("previous").innerText = displayNumber(result);
        document.getElementById("cal").innerText = cal;
        break;
      case "-":
        result -= mem;
        mem = 0;
        num = "";
        cal = input;
        document.getElementById("display").innerText = num;
        document.getElementById("previous").innerText = displayNumber(result);
        document.getElementById("cal").innerText = cal;
        break;
      case "x":
        result *= mem;
        mem = 0;
        num = "";
        cal = input;
        document.getElementById("display").innerText = num;
        document.getElementById("previous").innerText = displayNumber(result);
        document.getElementById("cal").innerText = cal;
        break;
      case "&#247;":
        result /= mem;
        mem = 0;
        num = "";
        cal = input;
        document.getElementById("display").innerText = num;
        document.getElementById("previous").innerText = displayNumber(result);
        document.getElementById("cal").innerText = cal;
        break;
    }
  }
}
function equal() {
  switch (cal) {
    case "+":
      result += mem;
      num = "";
      document.getElementById("display").innerText = displayNumber(result);
      document.getElementById("previous").innerText = "";
      document.getElementById("cal").innerText = "";
      mem = result;
      result = 0;
      break;
    case "-":
      result -= mem;
      num = "";
      document.getElementById("display").innerText = displayNumber(result);
      document.getElementById("previous").innerText = "";
      document.getElementById("cal").innerText = "";
      mem = result;
      result = 0;
      break;
    case "x":
      result *= mem;
      num = "";
      document.getElementById("display").innerText = displayNumber(result);
      document.getElementById("previous").innerText = "";
      document.getElementById("cal").innerText = "";
      mem = result;
      result = 0;
      break;
    case "&#247;":
      result /= mem;
      num = "";
      document.getElementById("display").innerText = displayNumber(result);
      document.getElementById("previous").innerText = "";
      document.getElementById("cal").innerText = "";
      mem = result;
      result = 0;
      break;
  }
}

  $('.darkMode').click(function(){
    $('.darkMode').toggleClass('clicked')
    $('.switch').toggleClass("clicked")
    darkMode=true;
  });
