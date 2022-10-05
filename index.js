const readlineSync = require('readline-sync');

let score = 0;
let level = 1;

let userName = readlineSync.question(`May i know your name? `);
while (userName.length === 0) {
  userName = readlineSync.question(`May i know your name? `);
}

console.log(`Hi, ${userName} 🤚 \n`);
console.log(`Let's play a quiz game \n`);
console.log(`------ Level 1 ----- \n`);

function quizPlay(question, answer) {
  let userAnswer = readlineSync.question(`${question} `);
  while (userAnswer.length === 0) {
    userAnswer = readlineSync.question(`${question} `);
  }

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(`${userAnswer} is correct Answer 🎉🎉🎊 \n`)
    score++;
  } else {
    console.log(`${userAnswer} is an incorrect Answer! 💣 💣 💣  \n`);
    console.log(`Correct Answer is ${answer} \n`);

  }
  console.log(`Score: ${score}\n`)
}



// Array of Objects
const quizData = [
  {
    question: `What is the capital of Finland?`,
    answer: "Helsinki"
  },
  {
    question: `What is the capital of Greece ?`,
    answer: "Athens"
  },
  {
    question: `What is the capital of Denmark ?`,
    answer: "Copenhagen"
  },
  {
    question: `Budapest is the capital city of which country ?`,
    answer: "Hungary"
  },
  {
    question: `What is the capital of Isle of Man ?`,
    answer: "Douglas"
  },
  {
    question: `Rome is the capital of which country ?`,
    answer: "Italy"
  },
  {
    question: `What is the capital of Latvia ?`,
    answer: "Riga"
  },
  {
    question: `Oslo is the capital of which country ?`,
    answer: "Norway"
  },



  {
    question: `What is the capital of Portugal ?`,
    answer: "Lisbon"
  },
  {
    question: `What is the capital of Sweden ?`,
    answer: "Stockholm"
  },
  {
    question: `What is the capital of Bhutan ?`,
    answer: "Thimphu"
  },
  {
    question: `Jakarta is the capital city of which country ?`,
    answer: "Indonesia"
  },
  {
    question: `What is the capital of Iraq ?`,
    answer: "Baghdad"
  },
  {
    question: `Beirut is the capital of which country ?`,
    answer: "Lebanon"
  },
  {
    question: `What is the capital of Palestine ?`,
    answer: "Ramallah"
  },
  {
    question: `Singapore is the capital of which country ?`,
    answer: "Singapore"
  },



  {
    question: `What is the capital of Egypt ?`,
    answer: "Cairo"
  },
  {
    question: `Accra is the capital of which country ?`,
    answer: "Ghana"
  },
  {
    question: `Kigali is the capital of Palestine ?`,
    answer: "Rwanda"
  },
  {
    question: `Abuja is the capital of which country ?`,
    answer: "Nigeria"
  },
]

for (let i = 0; i < quizData.length; i++) {
  quizPlay(quizData[i].question, quizData[i].answer);

  if (score === 5 && level !== 2 && i !== quizData.length - 1) {
    level += 1;
    console.log(`----- Level 2 ----- \n`);
  } else if (score === 10 && level !== 3 && i !== quizData.length - 1) {
    level += 1
    console.log(`----- Level 3 ----- \n`)
  }
}

if (score >= 15) {
  console.log(` Result: You scored ${score} points! Are you a geography teacher? 😅`)
} else if (score >= 10 && score < 15) {
  console.log(` Result: You scored ${score} points! It looks like you know geography well. 😁`)
} else if (score >= 5 && score < 10) {
  console.log(` Result: You scored ${score} points! You did good, try again for better score 🙂`)
} else {
  console.log(` Result: You scored ${score} points! You should get back to school 👶`)

}