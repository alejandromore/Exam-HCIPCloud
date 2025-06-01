// pos is position of where the user is up to in the quiz (which question they're up to)
var pos = 0, quiz, quiz_status, question, selectedAnswer, options, correct = 0;
var letters = ["A", "B", "C", "D", "E"];

// this get function is short for the getElementById function	
function get(x){
  return document.getElementById(x);
}

// this function renders a question for display on the page
function renderQuestion(){
	const question = questions[pos];

	quiz = get("quiz");
	if(pos >= questions.length){
		renderResults();
		// resets the variable to allow users to restart the quiz
		pos = 0;
		correct = 0;
		// stops rest of renderQuestion function running when quiz is completed
		return false;
	}

	get("quiz_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;

	if (question.type === "multiple-choice" || question.type === "true-false") {
		optionsHtml = question.options.map((option, i) => `
			<div class="options">
				<input type="radio" id="q${pos}_o${i}" name="question${pos}" value="${i}">
				<label for="q${pos}_o${i}">${letters[i]}. ${option}</label>
			</div>
		`).join('');
	} else if (question.type === "multiple-multiple-choice") {
		optionsHtml = question.options.map((option, i) => `
			<div class="options">
				<input type="checkbox" id="q${pos}_o${i}" name="question${pos}" value="${i}">
				<label for="q${pos}_o${i}">${letters[i]}.${option}</label>
			</div>
		`).join('');
	} else if (question.type === "imput-text"){
		optionsHtml = `<input type="text" id="q${pos}_o" name="question${pos}" size="20" />`;
	} else if (question.type === "match-choices"){
		optionsHtml = "<table>";
		optionsHtml += question.options.map(createOptions).join('');
		optionsHtml += "</table>";
	}

	quiz.innerHTML = `
		<div class="question">
			${pos + 1}. ${question.question}<br><br>
			${optionsHtml}
		</div>
	`;

	quiz.innerHTML += "<br>"
	quiz.innerHTML += "<button onclick='checkAnswer()' id='checkAnswer'>Check Answer</button>";
	quiz.innerHTML += "<button onclick='nextQuestion()'>Next</button>";

	get("checkAnswer").disabled = false;
}

function createOptions(currentValue, index){
	const question = questions[pos];
	textHTML = "<tr>";
	textHTML += "<td><label for='q"+pos+"_o"+index+"'>"+letters[index]+". "+currentValue+"</label></td>";
	textHTML += "<td>"+createOptionsB(question.optionsB,index)+"</td>";
	textHTML += "</tr>";
	return textHTML;
}

function createOptionsB (optionsB,i){
	optionsBHTML = "<select name='question"+pos+"' id='q"+pos+"_o"+i+"'>";
	optionsBHTML += optionsB.map((option, i) => `
		<option value="${i}">${option}</option>
	`).join('');
	optionsBHTML += "</select>";
	return optionsBHTML;
}

// show result
function renderResults(){
	quiz = get("quiz");
	quiz.innerHTML = "<h2>You answered "+correct+" of "+questions.length+" questions correctly. You reach "+(correct/questions.length).toFixed(2)*100+"% </h2><br>";
	quiz.innerHTML += "<button onclick='renderQuestion()'>Play again</button>"
    get("quiz_status").innerHTML = "Quiz completed";
}

function renderJustification(){
	question = questions[pos];
	justification = get("justification");

	justificationHtml = "Justification<br>";
	justificationHtml += question.justification.map((option, i) => `
		${option}<br>
	`).join('');
	if (question.justification.length > 0 && question.justification[0] != ""){
		justification.innerHTML += justificationHtml;			
	}
}

function checkAnswer(){
    const question = questions[pos];
    let selectedOptions = [];

    if (question.type === "multiple-choice" || question.type === "true-false") {
        const selectedOption = document.querySelector(`input[name="question${pos}"]:checked`);
        if (selectedOption) {
            selectedOptions.push(parseInt(selectedOption.value));
        }
    } else if (question.type === "multiple-multiple-choice") {
        const selectedOptionNodes = document.querySelectorAll(`input[name="question${pos}"]:checked`);
        selectedOptions = Array.from(selectedOptionNodes).map(node => parseInt(node.value));
    } else if (question.type === "imput-text") {
		selectedOptions.push(get("q"+pos+"_o").value);
	} else if (question.type === "match-choices"){
		options = question.options;
		for(var i=0; i < options.length; i++){
			selectedOptions.push(parseInt(get("q"+pos+"_o"+i).value));
		};
	};

	options = question.options;
	for(var i=0; i < options.length; i++){
		get("q"+pos+"_o"+i).disabled = true;
	};

    //if (selectedOptions.length > 0) {
        let isCorrect = false;
        if (question.type === "multiple-multiple-choice" || question.type === "match-choices") {
            isCorrect = JSON.stringify(selectedOptions.sort()) === JSON.stringify(question.answer.sort());
        } else if (question.type === "imput-text") {
			isCorrect = selectedOptions[0].toUpperCase() === question.answer.toUpperCase();
		} else {
            isCorrect = selectedOptions[0] === question.answer;
        }

		result = get("result");
		if(isCorrect){
			//each time there is a correct answer this value increases
			correct++;
			result.innerHTML = "<b>CORRECT</b><br>";
		}else{
			result.innerHTML = "INCORRECT<br>";  
			
		};
		result.innerHTML += "Respuesta ";
		if (question.type === "imput-text") {
			result.innerHTML += question.answer+"<br>";
		}else if (question.answer.length > 1){
			result.innerHTML += question.answer.map((answerIndex, i) => letters[answerIndex]).join('');
		}else{
			result.innerHTML += letters[question.answer]+"<br>";
		};
		// show justification
		renderJustification();
	//}
	
	get("checkAnswer").disabled = true;
}

function nextQuestion(){
  // changes position of which questions user is up to
  pos++;
  // then the renderQuestion function is called again to go to next question
  renderQuestion();
  
  justification = get("justification");
  justification.innerHTML = "";
  
  result = get("result");
  result.innerHTML = "";
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function renderQuiz(){
	shuffleArray(questions);
	renderQuestion();
}


// Add event listener to call renderQuestion on page load event
window.addEventListener("load", renderQuiz);