const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// Variabili globali
let templateIndex = 1;
const templateContainer = document.querySelector("#template-container");
const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-buttons");
let domandeGiuste = 0;
let domandeSbaglaite = 0;
let seconds = 61;

// FUNZIONE PER I TEMPLATE
function showTemplate(templateIndex) {
  // Rimuoviamo il contenuto precedente del container.
  templateContainer.innerHTML = "";

  // Otteniamo il contenuto del template corrente.
  const templateContent = document
    .querySelector(`#template${templateIndex}`)
    .content.cloneNode(true);

  // Aggiungiamo il contenuto del template al container.
  templateContainer.append(templateContent);

  if (templateIndex === 2) {
    timerDiv();
    startQuiz();
  }
  if (templateIndex === 3) {
    circle();
  }
  if (templateIndex === 4) {
    starClick();
    addMouseoverListeners();
  }
  // Selezioniamo i bottoni dopo aver aggiunto il template al container.
  const switchButtons = document.querySelectorAll(".switchButton");
  // Aggiungiamo un event listener per l'evento a tuttii button.
  switchButtons.forEach((el) => {
    el.addEventListener("click", switchTemplate);
  });
}

// FUNZIONE PER PASSARE AL TEMPLATE SUCCESSIVO CHE ANDRA' COLLEGATA ALL EVENTO DEI BOTTONI
function switchTemplate() {
  if (
    templateIndex === 1 &&
    !document.querySelector("#templateCheckbox").checked
  ) {
    alert("clicca");
    return;
  }
  if (templateIndex != 4) {
    templateIndex++;
  }
  //   inserire la funzione per far partire i quiz
  showTemplate(templateIndex);
}

// FUNZIONE TIMER
function timerDiv() {
  const timer = document.querySelector(".timer");
  timer.classList.add("timer");
  const outer = document.createElement("div");
  outer.classList.add("outer");
  const inner = document.createElement("div");
  inner.classList.add("inner");
  const number = document.createElement("p");
  number.classList.add("number");

  const divSvg = document.querySelector(".svg");
  const secondi = (document.createElement("p").innerText = "Secondi");

  const rimanenti = (document.createElement("p").innerText = "Rimanenti");

  const svg = `<svg
    class="svgTimer"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="160px"
    height="160px"
  >
    <defs>
      <linearGradient id="GradientColor">
        <stop offset="0%" stop-color="red" />
        <stop offset="100%" stop-color="#673ab7" />
      </linearGradient>
    </defs>
    <circle class="circleTimer2" cx="80" cy="80" r="70" stroke-linecap="round" />
    <circle class="circleTimer" cx="80" cy="80" r="70" stroke-linecap="round" />
  </svg>`;
  divSvg.innerHTML = svg;

  function timerFunction() {
    // Funzione per aggiornare il timer e l'animazione
    function updateTimer() {
      seconds--;
      let numberEl = document.querySelector(".number");
      const circleTimer = document.querySelector(".circleTimer");

      if (!numberEl || !circleTimer) return;

      numberEl.innerHTML = seconds;
      circleTimer.style.animation = "none";
      void circleTimer.offsetWidth;

      circleTimer.style.animation = null;
      // Se il timer arriva a 0 passa alla prossima domanda, contala come risposta errata e resetta il timer
      if (seconds === 0) {
        clearInterval(interval);
        selectAnswer(false);
        resetTimer(); //

        if (currentQuestionIndex < questions.length) {
          showQuestion(questions[currentQuestionIndex]);
          timerFunction(); // Avvia di nuovo il timer
        } else {
          endQuiz();
        }
      }
    }

    const interval = setInterval(updateTimer, 1000);
  }

  timerFunction();

  timer.append(outer);
  outer.append(inner);
  inner.append(secondi);
  inner.append(number);

  inner.append(rimanenti);
}

// Funzione per ripristinare il timer
function resetTimer() {
  seconds = 60;
  const number = document.querySelector(".number");
  number.innerText = seconds;

  const timerSvg = document.querySelector(".svgTimer");
  const newTimerSvg = timerSvg.cloneNode(true);

  timerSvg.parentNode.replaceChild(newTimerSvg, timerSvg);
}

// Logica delle domande

// Indice della domanda corrente
let currentQuestionIndex = 0;
let score = 0;
// Array di domande mescolato
const randomQuestions = [...questions].sort(() => Math.random() - 0.5);

// FUNZIONE PER AVVIARE IL QUIZ
function startQuiz() {
  showQuestion(randomQuestions[currentQuestionIndex]);
}

// Funzione per mostrare la domanda e le risposte
function showQuestion(question) {
  const questionQuest = document.querySelector(".titleBenchmark");
  const answerButtons = document.getElementById("answer-buttons");
  const questionNumberContainer = document.querySelector("#questionNumber");

  questionQuest.innerText = question.question;

  // Svuota il div answerButtons delle risposte precedenti
  answerButtons.innerHTML = "";

  // Crea un nuovo array con risposte corrette ed errate e lo mescoliamo con sort
  const allAnswers = question.incorrect_answers.concat([
    question.correct_answer,
  ]);
  allAnswers.sort(() => Math.random() - 0.5);

  // cicliamo le domande corrette e sbaglaite e le inseriamo randomicamente nei button
  allAnswers.forEach((el) => {
    const button = document.createElement("button");
    button.classList.add("buttonBenchmark");
    button.innerText = el;

    button.addEventListener("click", () =>
      selectAnswer(el === question.correct_answer)
    );
    answerButtons.append(button);
  });

  // Crea il testo "Question n/10"
  const questionNumber = document.createElement("p");
  const questionNumberText = document.createTextNode(
    `Question ${currentQuestionIndex + 1}/`
  );

  questionNumber.classList.add("avanzamento");
  questionNumber.appendChild(questionNumberText);

  const questionNumberSpan = document.createElement("span");
  const spanText = document.createTextNode(`${questions.length}`);
  questionNumberSpan.style.color = "#d20094"; // Imposta il colore per il testo "/10"
  questionNumberSpan.appendChild(spanText);

  questionNumber.appendChild(questionNumberSpan);

  questionNumberContainer.innerHTML = ""; // Pulisce il contenuto precedente
  questionNumberContainer.appendChild(questionNumber);
}

// Funzione per selezionare una risposta
function selectAnswer(isCorrect) {
  // Resetta il timer
  resetTimer();

  if (isCorrect) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    endQuiz();
    switchTemplate();
  }
}

// Funzione per terminare il quiz
function endQuiz() {
  console.log(`Il tuo punteggio finale è: ${score}/${questions.length}`);
  risposteGiuste = score;
  risposteSbagliate = questions.length - score;
  console.log(risposteGiuste, risposteSbagliate);
}

// FUNZIONI PER IL RATING
function starClick() {
  let star = document.querySelectorAll(".star");
  star.forEach((el, index) => {
    el.addEventListener("click", function () {
      for (let i = 0; i <= index; i++) {
        star[i].classList.add("active");
      }
      for (let i = index + 1; i < star.length; i++) {
        star[i].classList.remove("active");
      }
      star.forEach((starEl) => {
        starEl.removeEventListener("mouseover", starHover);
      });
    });
  });
}

function starHover(event) {
  let star = document.querySelectorAll(".star");
  let index = Array.from(star).indexOf(event.target);
  for (let i = 0; i <= index; i++) {
    star[i].classList.add("active");
  }
  for (let i = index + 1; i < star.length; i++) {
    star[i].classList.remove("active");
  }
}

function addMouseoverListeners() {
  let star = document.querySelectorAll(".star");
  star.forEach((el) => {
    el.addEventListener("mouseover", starHover);
  });
}

// All'avvio della pagina, mostriamo il contenuto del primo template e cosi via
showTemplate(templateIndex);
