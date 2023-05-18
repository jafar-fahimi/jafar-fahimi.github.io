const quizData = [
   {
      question: "What is the most used programming language in 2019?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d",
   },
   {
      question: "Who is the President of Afghanistan at 2023?",
      a: "Florin Pop",
      b: "Ashraf Ghani",
      c: "Abdullah Abdullah",
      d: "Hebbatullah",
      correct: "d",
   },
   {
      question: "What does  CSS stand for?",
      a: "Hypertext Markup Language",
      b: "Cascading Style Sheet",
      c: "Jason Object Notation",
      d: "Helicopters Terminals Motorboats Lamborginis",
      correct: "b",
   },
   {
      question: "Python is used for?",
      a: "web development (server-side)",
      b: "software development",
      c: "system scripting",
      d: "all above",
      correct: "d",
   },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question-text");
const a_text = document.getElementById("label-a");
const b_text = document.getElementById("label-b");
const c_text = document.getElementById("label-c");
const d_text = document.getElementById("label-d");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadQuiz();

// 1. first load all quiz data on html
// 2. on submit btn; first check if selected-choice is correct; increase rank;
// then check if there is another question? go else show final result page
function loadQuiz() {
   deselectAnswers(); // uncheck all radiobtns
   const currentQuizData = quizData[currentQuiz];
   questionEl.innerText = currentQuizData.question;
   a_text.innerText = currentQuizData.a;
   b_text.innerText = currentQuizData.b;
   c_text.innerText = currentQuizData.c;
   d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
   answerEls.forEach((answerEl) => {
      answerEl.checked = false;
   });
}

submitBtn.addEventListener("click", () => {
   // check to see the answer // get selected choice id
   const answer = getSelected();

   if (answer) {
      // if a choice is selected!
      if (answer === quizData[currentQuiz].correct) {
         score++;
      }
      currentQuiz++;
      if (currentQuiz < quizData.length) {
         loadQuiz();
      } else {
         quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                <button onclick="location.reload()">Reload</button>`;
      }
   }
});

function getSelected() {
   let answer = undefined;
   answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
         answer = answerEl.id;
      }
   });
   return answer;
}
