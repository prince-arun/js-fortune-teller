let predictFuture = () => {
  let questionInput = document.getElementById("questionInput");
  let answer = document.getElementById("answer");

  if (questionInput.value.trim() === "") {
    answer.innerHTML = "Please enter a question.";
  } else {
    let answers = [
      "It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes - definitely.",
      "You may rely on it.",
      "As I see it, yes.",
      "Most likely.",
      "Outlook good.",
      "Yes.",
      "Signs point to yes.",
      "Reply hazy, try again.",
      "Ask again later.",
      "Better not tell you now.",
      "Cannot predict now.",
      "Concentrate and ask again.",
      "Don't count on it.",
      "My reply is no.",
      "My sources say no.",
      "Outlook not so good.",
      "Very doubtful.",
      "The stars are aligned in your favor.",
      "A great opportunity will present itself soon.",
      "Your hard work will pay off in the near future.",
      "Expect a pleasant surprise in the coming days.",
      "A new chapter in your life is about to begin.",
      "Your dreams will become a reality.",
      "Success is on its way to you.",
      "Stay positive and everything will fall into place.",
      "Trust your intuition; it will guide you in the right direction.",
      "The answer lies within yourself.",
      "Have faith in your abilities, and success will follow.",
      "Your determination will lead to success.",
      "Embrace change; it will bring you good fortune.",
      "A significant achievement is on the horizon.",
      "Believe in yourself, and others will too.",
      "You have the power to shape your own destiny.",
      "Your future looks bright and promising.",
      "Luck will be on your side.",
      "Unexpected opportunities will come your way.",
      "Take risks and embrace new experiences.",
      "Your creativity will lead you to success.",
      "The universe is conspiring to bring you happiness.",
      "Trust the journey; everything happens for a reason.",
      "Love and happiness await you.",
      "Your relationships will thrive and deepen.",
      "Open your heart to new possibilities.",
      "A new romance is on the horizon.",
      "The bond with your loved ones will strengthen.",
      "Forgive past grievances and embrace peace.",
      "Balance and harmony will be restored in your life.",
      "A period of personal growth and self-discovery lies ahead.",
    ];

    let randomIndex = Math.floor(Math.random() * answers.length);

    answer.innerHTML = "";
    let answerText = answers[randomIndex];
    let currentIndex = 0;
    let intervalId = setInterval(() => {
      if (currentIndex < answerText.length) {
        answer.innerHTML += answerText.charAt(currentIndex);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);
  }
};

let resetForm = () => {
  let questionInput = document.getElementById("questionInput");
  let answer = document.getElementById("answer");
  questionInput.value = "";
  answer.innerHTML = "";
};

let createBalls = () => {
  let numBalls = 50;
  let container = document.body;
  for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = `hsl(${Math.random() * 360}, 50%, 50%)`;
    ball.style.left = `${Math.random() * 100}vw`;
    ball.style.top = `${Math.random() * 100}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random() * 5 + 2}em`;
    ball.style.height = ball.style.width;

    container.appendChild(ball);
  }
};

createBalls();
