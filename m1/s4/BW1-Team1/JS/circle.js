let risposteGiuste = 5;
let risposteSbagliate = 5;

let risposteTotale = 10;
function circle() {
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      datasets: [
        {
          label: "# of Tomatoes",
          data: [risposteSbagliate, risposteGiuste],
          backgroundColor: ["#d20094", "#00ffff"],
          borderColor: ["#d20094", "#00ffff"],
        },
      ],
    },
    options: {
      cutout: 125,

      plugins: {
        tooltip: {
          enabled: false,
        },
        legend: {
          onHover: function () {},
        },
      },
    },
  });

  const h6 = document.querySelector(".text-circle h6");
  const h5 = document.querySelector(".text-circle h5");
  const p = document.querySelector(".text-circle p");
  if (risposteSbagliate >= risposteGiuste) {
    h6.innerHTML = "I'm Sorry";
    h5.style.color = "#d20094";
    h5.innerHTML = "You failed the exam...";
    p.innerHTML = "Be prepared for the Captain Mike's interrogation!";
  }
  // mettere dentro endQuiz
  /*********************calcolo risposte giuste ***********************/
  let posizioneCorette = document.getElementById("statistics-correct");
  let percentualeGiuste = (risposteGiuste * 100) / 10;

  posizioneCorette.append(percentualeGiuste + "%");

  /*********************calcolo risposte sbagliate ***********************/
  let posizioneSbagliate = document.getElementById("statistics-wrong");
  let percentualeSbagliate = (risposteSbagliate * 100) / 10;

  posizioneSbagliate.append(percentualeSbagliate + "%");

  /*********************quota risposte giuste ***********************/

  let quotaCorette = document.getElementById("number-question-correct");

  quotaCorette.append(risposteGiuste + "/" + risposteTotale + "questions");

  /*********************quota risposte sbagliate ***********************/

  let quotaSbagliate = document.getElementById("number-question-wrong");

  quotaSbagliate.append(risposteSbagliate + "/" + risposteTotale + "questions");
}
