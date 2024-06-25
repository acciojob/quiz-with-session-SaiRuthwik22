//your JS code here.

// Do not change code below this line
// This code will just display the questions to the screen
let questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];
const userAnswers = sessionStorage.getItem("userAnswers")?JSON.parse(sessionStorage.getItem("userAnswers")):new Array(5).fill(null);

// Display the quiz questions and choices
function renderQuestions() {
  let questiondisp = document.getElementById("questions");
  for (let i = 0; i < questions.length; i++) {
    let question = questions[i];
    let questionElement = document.createElement("div");
    let questionText = document.createTextNode(question.question);
    questionElement.appendChild(questionText);
    
    for (let j = 0; j < question.choices.length; j++) {
      let choice = question.choices[j];
      let choiceElement = document.createElement("input");
      choiceElement.setAttribute("type", "radio");
      choiceElement.setAttribute("name", `question-${i}`);
      choiceElement.setAttribute("value", choice);

		if (userAnswers && userAnswers[i]) {
			if (userAnswers[i] === choice) {
		        choiceElement.setAttribute("checked", true)
      }
		}
		      choiceElement.onclick = function() {
				  console.log(choice)
				  userAnswers[i]=choice
				  console.log(userAnswers)
				  sessionStorage.setItem("userAnswers",JSON.stringify(userAnswers))
      };
      
      let choiceText = document.createTextNode(choice);
      questionElement.appendChild(choiceElement);
      questionElement.appendChild(choiceText);
    }
    
    questiondisp.appendChild(questionElement);
  }
}

renderQuestions();
function clearing() {
	let count = 0
	let score = document.getElementById("score")
	for (let i = 0; i < questions.length; i++) {
		if(userAnswers[i]===questions[i].answer){
			count+=1
		}
		score.textContent = `Your score is ${count} out of 5.`
	}
	localStorage.setItem("score",JSON.count)
	
}
