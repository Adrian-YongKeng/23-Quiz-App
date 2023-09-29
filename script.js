const correctAnswers = {
  1: "Canberra",
  2: "India",
  3: "Russia",
  4: "Pacific Ocean",
  5: "Peso"
};

function checkAnswer() {
  const result = document.getElementById("result");
  result.innerHTML = "";//clear previous results

  let score = 0;
  for (let i = 1; i <= 5; i++){ //useto find &select element in html
    const selectedAnswer = document.querySelector(`input[name="question${i}"]:checked`);
    const resultEmoji = document.getElementById(`resultEmoji${i}`);
    
    if (selectedAnswer) {
      const userAnswer = selectedAnswer.value
      const questionNumber = i;

      if(userAnswer === correctAnswers[questionNumber]){
      //  selectedAnswer.classList.add("correct");
        resultEmoji.innerHTML = '<span class="correct-answer">Correct 😀</span>';
        score++;
      } else {
        resultEmoji.innerHTML = '<span class="wrong-answer">Wrong 😥</span>';
      }
    } else {
      resultEmoji.innerHTML = '<span class="wrong-answer">Not answered 😥😥😥</span>';
    }
  }
  
  result.innerHTML = `Score: ${score}/5.    ` ;
  if (score === 5){
    result.innerHTML += `Congratulation! Perfect score! 🎉`
  } else if (score >= 3){
    result.innerHTML += `Well done!`
  } else {
    result.innerHTML += `Keep trying! You can do it!`
  }
}

function reset() {
  const result = document.getElementById("result");
  result.innerHTML ="";

  for(let i=1;i<=5; i++){
    const resultEmoji = document.getElementById(`resultEmoji${i}`);
    resultEmoji.innerHTML ="";
  
  const radioButtons= document.querySelectorAll(`input[name="question${i}"]`);
  radioButtons.forEach(button => (button.checked = false));
  }
}

document.getElementById("checkAnswer").addEventListener("click",checkAnswer);
document.getElementById("reset").addEventListener("click",reset)


