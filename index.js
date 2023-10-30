document.addEventListener("DOMContentLoaded", function () {
  const questionButton = document.querySelectorAll(
    ".question-button-container"
  );
  const arrowUp = document.querySelectorAll(".fa-angle-up");
  const answer = document.querySelectorAll(".answer");
  const question = document.querySelectorAll(".question");
  const arrowDown = document.querySelectorAll(".fa-angle-down");
  let isAnAnswerOpen = false;
  console.log(question);

  questionButton.forEach((arrow, index) =>
    arrow.addEventListener("click", function (event) {
      if (isAnAnswerOpen === true) {
          if (question[index].style.fontWeight === "700") {
            question[index].style.fontWeight = "normal";
            answer[index].classList.remove("show");
            arrowDown[index].style.display = "inline-block";
            arrowUp[index].style.display = "none";
            isAnAnswerOpen = false;
          } else {
            questionButton.forEach((_, i) => {
              question[i].style.fontWeight = "normal";
              answer[i].classList.remove("show");
              arrowDown[i].style.display = "inline-block";
              arrowUp[i].style.display = "none";
            });

            question[index].style.fontWeight = "700";
            answer[index].classList.add("show");
            arrowDown[index].style.display = "none";
            arrowUp[index].style.display = "inline-block";

            isAnAnswerOpen = true;
          }
        
      } else {
        question[index].style.fontWeight = "700";
        answer[index].classList.add("show");
        arrowDown[index].style.display = "none";
        arrowUp[index].style.display = "inline-block";

        isAnAnswerOpen = true;
      }
    })
  );
});
