let quiz = [
  {
    question: "Câu hỏi 1",
    a: "Đáp án a",
    b: "Đáp án b",
    c: "Đáp án c",
    d: "Đáp án d",
    answer: a,
  },
  {
    question: "Câu hỏi 2",
    a: "Đáp án a2",
    b: "Đáp án b2",
    c: "Đáp án c2",
    d: "Đáp án d2",
    answer: b,
  },
  {
    question: "Câu hỏi 3",
    a: "Đáp án a",
    b: "Đáp án b",
    c: "Đáp án c",
    d: "Đáp án d",
    answer: b,
  },
  {
    question: "Câu hỏi 4",
    a: "Đáp án a",
    b: "Đáp án b",
    c: "Đáp án c",
    d: "Đáp án d",
    answer: b,
  },
  {
    question: "Câu hỏi 5",
    a: "Đáp án a",
    b: "Đáp án b",
    c: "Đáp án c",
    d: "Đáp án d",
    answer: b,
  },
  {
    question: "Câu hỏi 6",
    a: "Đáp án a",
    b: "Đáp án b",
    c: "Đáp án c",
    d: "Đáp án d",
    answer: b,
  },
  {
    question: "Câu hỏi 7",
    a: "Đáp án a",
    b: "Đáp án b",
    c: "Đáp án c",
    d: "Đáp án d",
    answer: b,
  },
  {
    question: "Câu hỏi 8",
    a: "Đáp án a",
    b: "Đáp án b",
    c: "Đáp án c",
    d: "Đáp án d",
    answer: b,
  },
  {
    question: "Câu hỏi 9",
    a: "Đáp án a",
    b: "Đáp án b",
    c: "Đáp án c",
    d: "Đáp án d",
    answer: b,
  },
  {
    question: "Câu hỏi 10",
    a: "Đáp án a",
    b: "Đáp án b",
    c: "Đáp án c",
    d: "Đáp án d",
    answer: b,
  },
];
let questionNumber = 0;
let score= 0;
function addQuestion(input) {
  document.querySelector(".question").innerText = quiz[input].question;
  document.querySelector("#a").innerText = quiz[input].a;
  document.querySelector("#b").innerText = quiz[input].b;
  document.querySelector("#c").innerText = quiz[input].c;
  document.querySelector("#d").innerText = quiz[input].d;
  questionNumber = input;
}
function resetState() {
  document.querySelector("#a").style.backgroundColor = "#2F6DAE";
  document.querySelector("#b").style.backgroundColor = "#2F6DAE";
  document.querySelector("#c").style.backgroundColor = "#2F6DAE";
  document.querySelector("#d").style.backgroundColor = "#2F6DAE";
}
function quit() {
  window.location.href = "index.html";
}
function skip() {
  resetState(); 
  questionNumber++;
  
  if(questionNumber==10){
    window.location.href="result.html";
   
  }else{
    addQuestion(questionNumber);
  }
  
}
function getScore(){
  document.querySelector('.score').innerText=score+"/10";
}

function checkAnswer(input) {
  if (quiz[questionNumber].answer.id == input) {
    document.getElementById(input).style.backgroundColor = "#62C370";
    if(score<11){
      score++;
    }
   
  } else {
    document.getElementById(input).style.backgroundColor = "red";
    document.getElementById(
      quiz[questionNumber].answer.id
    ).style.backgroundColor = "#62C370";
  }
  getScore();
  setTimeout(function skip() {
    resetState(); 
    questionNumber++;
    if(questionNumber==10){
      window.location.href="result.html";
    }else{
      addQuestion(questionNumber);
    }
  },1500);
 
}
function getStart() {
  document.querySelector(".main-container").classList.add("started");
  document.querySelector(".main-container .button").style.display = "none";
  document.querySelector("h1").style.display = "none";
  document.querySelector(".answer").style.display = "flex";
  document.querySelector(".quit").style.display = "block";
  document.querySelector(".skip").style.display = "block";
  document.querySelector(".score").style.display = "block";
  addQuestion(0);
  score=0;
}
