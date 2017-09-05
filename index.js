
const classes = {
	correctMSG: ["Alright!", "Correct!", "That's it!"],
	incorrectMSG: ["Too Bad", "That's not it", "Not like this"]
};

Array.prototype.randomMSG =  function(){
	return this[Math.floor(Math.random() * this.length)];
};

let quizAppQuestions = [
	
	//question 1:
	{
		question: "What was Persona 5's initial release date?",
		answers:[
			"Winter 2014",
			"September 2016",
			"2015",
			"Valentines day 2017"
		],
		correctAnswerString: "Winter 2014",
		correctAnswer: 0,
		userAnswer: null
	},
	//question 2:
	{
		question: "What is the name of the protagonist's persona?",
		answers:[
			"Arsene",
			"Captain Kid",
			"Mara",
			"Pancake Man"
		],
		correctAnswerString: "Arsene",
		correctAnswer: 0,
		userAnswer: null
	},
	//question 3:
	{
		question: "What is the protagonist's nickname",
		answers:[
			"Joker",
			"Da Vinci",
			"King",
			"Mona"
		],
		correctAnswerString: "Joker",
		correctAnswer: 0,
		userAnswer: null
	},
	//question 4:
	{
		question: "How many years has it been since the last main series persona game?",
		answers:[
			"8 years",
			"10 years",
			"6 months",
			"4 years"
		],
		correctAnswerString: "8 years",
		correctAnswer: 0,
		userAnswer: null
	},
	//question 5:
	{
		question: "What is the phrase found in one of persona 5's loading screen?",
		answers:[
			"Take your time",
			"Don't look at me like that",
			"Game Loading...",
			"None of the above"
		],
		correctAnswerString: "Take your time",
		correctAnswer: 0,
		userAnswer: null
	},
	//question 6:
  {
    question: "What is Persona 5's general color scheme?",
    answers: [
      "Red and Black",
      "Yellow and more Yellow",
      "Black and Blue",
      "Purple and Green"
    ],
    correctAnswerString: "Red and Black",
    correctAnswer: 0,
    userAnswer: null
  },
  //question 7:
  {
    question: "What is the canon name for the group of thieves that the Protagonist leads",
    answers: [
      "The Phantom Thieves",
      "Diamond Dogs",
      "The A-team",
      "The Rebellion"
    ],
    correctAnswerString: "The Phantom Thieves",
    correctAnswer: 0,
    userAnswer: null
  },
  //question 8:
  {
    question: "The character Morgana can turn into a cat and-",
    answers: [
      "a Car",
      "a Human",
      "Anything he wants",
      "a Giant Fighting Robot"
    ],
    correctAnswerString: "a Car",
    correctAnswer: 0,
    userAnswer: null
  },
  //question 9:
  {
    question: "Through what means do the protagonists and other party members summon their personas?",
    answers: [
      "ripping off their masks",
      "shooting themselves in the head",
      "destroying a card",
      "raising their hand"
    ],
    correctAnswerString: "ripping off their masks",
    correctAnswer: 0,
    userAnswer: null
  },
  //question 10:
  {
    question: "What can the protagonist do when morgana tells him to sleep",
    answers: [
      "SLEEP",
      "play video games",
      "whatch a movie",
      "study"
    ],
    correctAnswerString: "SLEEP",
    correctAnswer: 0,
    userAnswer: null
  },



];

const getCorrectAnswerIndex = (answers, correctAnswer) => {
	if(!correctAnswer){
		return null;
	}

	return answers.indexOf(correctAnswer);
};

const getQuizAppQuestions = questions => {
	return questions.map(question =>{
		const shuffledAnswers = _.shuffle(question.answers);

		return{
			question: question.question,
			answers: shuffledAnswers,
			correctAnswerString: question.correctAnswerString,
			correctAnswer: getCorrectAnswerIndex(
				shuffledAnswers,
				question.correctAnswerString
				) !== null ? getCorrectAnswerIndex(shuffledAnswers, question.correctAnswerString) : question.correctAnswer,
				userAnswer: null
		};
	});
};

function getNumberOfCorrectAnswers(){
	let numberOfCorrectAnswers = 0;

	quizAppData.forEach(function(e){
		if(e.userAnswer === e.correctAnswer){
			numberOfCorrectAnswers++;
		}
	});
	return numberOfCorrectAnswers;
}

let quizAppData = getQuizAppQuestions(_.shuffle(quizAppQuestions));
let currentQuestion = 0;
let numOfQuestions = 10;

let deleteUserAnswers = () =>{
	quizAppData.forEach(function(e){
		e.userAnswer = null;
	})
};

let questionDisplay = () =>{
	$("#question").text(quizAppData[currentQuestion].question);
	$("#answers").empty();

	let numberOfAnswers = quizAppData[currentQuestion].answers.length;
	for(let i = 0; i < numberOfAnswers; i++){
		let answersHTML = `<label class='answers'><input type='radio' class='option' name='option' value='${i}'> ${quizAppData[currentQuestion].answers[i]} </label><br>`;
		$("#answers").append(answersHTML);
	}

	if(currentQuestion === 0){
		$("#back-button").prop("disabled", true);
	}
	else{
		$("back-button").prop("disabled", false);
	}

	const numberOfCorrectAnswers = getNumberOfCorrectAnswers();

	$(".status").text("Question: " + (currentQuestion + 1) + "/" + numOfQuestions);
	$(".score").text("Score: " + numberOfCorrectAnswers + "/" + numOfQuestions);
	console.log("numberOfCorrectAnswers: " + numberOfCorrectAnswers);
};

let resultDisplay = () => {
	$(".result.msg").empty();

	for(let i = 0; i < numOfQuestions; i++){
		let userAnswer = quizAppData[i].userAnswer;
		let correctAnswer = quizAppData[i].correctAnswer;

		if(userAnswer !== correctAnswer){
			let resultHTML =  `<div class="ansIncorrect">
									<h4>${quizAppData[i].question}</h4>
									<div class="ansStute"></div>
									<div>
										<p class='answers'>
											<strong>Your Answer: </strong>
											${quizAppData[i].answers[quizAppData[i].userAnswer]}
										</p>
										<p class='answers'>
											<strong>Correct Answer: </strong>${quizAppData[i].correctAnswerString}
										</p>
									</div>
								</div>`;
			$(".result-msg").append(resultHTML);
		}
		else{
			let resultHTML = `<div class="ansCorrect">
									<h4>${quizAppData[i].question}</h4>
									<div class="ansStute"></div>
									<div>
										<p class="answers">
											<strong>Correct Answer: </strong>
											${quizAppData[i].answers[quizAppData[i].userAnswer]}
										</p>
									</div>
								</div>`;
			$(".result-msg").append(resultHTML);
		}
	}
	$("#accordion").accordion({
		collapsible: true,
		heightStyle: "content"
	});
};

let getAnswers = () => {
	let userAnswer = Number($("input[class='option']:checked").val());
	let correctAnswer = quizAppData[currentQuestion].correctAnswer;

	return{
		userAnswer,
		correctAnswer
	};
};

let handleAnswersValidation = () => {
	const{
		correctAnswer,
		userAnswer
	} = getAnswers();

	if(isNaN(userAnswer)) {

	}
	else{
		$("option").prop("disabled", !this.checked);

		if(userAnswer !== correctAnswer){
			$("input[class='option']:checked").parent().css("border", "2px solid #BF0A30").addClass("item-incorrect");
			$("input.option").filter(function(){
				return Number($(this).val()) === correctAnswer;
			}).parent().css("border", "2px solid green").addClass("item-correct");
		}
		else{
			$("input.option").filter(function(){
				return Number($(this).val()) === correctAnswer;
			}).parent().css("border", "2px solid green").addClass("item-correct");
		}
		quizAppData[currentQuestion].userAnswer = userAnswer;
	}
};

let handleClickNext = () => {
	const{
		correctAnswer,
		userAnswer
	} = getAnswers();
	const numberOfCorrectAnswers = getNumberOfCorrectAnswers();
	if (isNaN(userAnswer)){
		$("#next-button").popover({
			html: true,
			title: "Error:",
			animation: true,
			placement: "right",
			content: "Please select an answer."
		});
	}
	else{
		$("next-button").popover("destroy");
		if(currentQuestion + 1 === numOfQuestions){
			if(numberOfCorrectAnswers === 10){
				$('.txt-results').text('you aced the quiz').parent().addClass('passContainer');
			}
			else if(numberOfCorrectAnswers >= 6 && numberOfCorrectAnswers < 10){
				$('.txt-results').text(`${classes.correctMSG.randomMSG()}, you pass!!!`).parent().addClass('passContainer');
			}
			else if(numberOfCorrectAnswers >= 1 && numberOfCorrectAnswers < 6){
				$('.txt-results').text(`${classes.incorrectMSG.randomMSG()}, you failed! Please try again.`).parent().addClass('failContainer');
			}

			$(".final-score").text(
				"Your final score is: " + numberOfCorrectAnswers + "/" + numOfQuestions
			);
			resultDisplay();

			$(".quiz-section").hide();
			$(".start-section").hide();
			$(".result-section").show();
		}
		else{
			currentQuestion++;
		}
		questionDisplay();
	}
};

let handleClickBack = () => {
	if (currentQuestion !== 0){
		currentQuestion--;
		questionDisplay();
	}
	else{
		handleClickTryAgain();
	}
}

let handleClickTryAgain = () => {
	$(".start-section").show();
	$(".quiz-section").hide();
	$(".result-section").hide();
	currentQuestion = 0;
	numberOfCorrectAnswers = 0;

	deleteUserAnswers();
	quizAppData = getQuizAppQuestions(_.shuffle(quizAppQuestions));
};

let handleClickStart = () => {
	$(".result-section").hide();
	$(".quiz-section").show();
	$(".start-section").hide();	

	questionDisplay();
};

let createEventListiners = () => {
	setTimeout($("#startBtn").on('click', function() {
		handleClickStart()}, 5000));

	$(".nav-button").on('click', '#back-button', () => {
		handleClickBack()();
	});

	$(".result-section").on('click', "#try-again", () => {
		handleClickTryAgain();
	});

	$(".radio").on('click', () => {
		handleAnswersValidation();
	});

	$(".nav-button").on('click', '#next-button', () => {
		handleClickNext();
	});

};

const renderQuiz = () => {
	$(".quiz-section").hide();
	$(".result-section").hide();

	createEventListiners();

};


$(renderQuiz);