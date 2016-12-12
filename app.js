var state = {
	questions: [
	{
		text:"Life moves pretty fast.  If you don't stop and look around once in awhile, you could miss it.",
		choices:["Real Genius", "Ferris Beuller's Day Off", "Fast and Furious", "Ghost Busters"],
		correctAnswer: 1
	},
	{
		text:"If we're going to be damned, let's be damned for what we really are",
		choices: ["Braveheart", "House of 1000 corpses", "The Walking Dead", "Star Trek; The Next Generation"],
		correctAnswer: 3
	},
	{
		text:"It's easy to confuse 'what is' with 'what ought to be,' especially when 'what is' has worked out in your favor.",
		choices: ["Orange is the New Black", "12 Years A Slave", "The Wolf of Wall Street", "Game of Thrones"],
		correctAnswer: 3
	},
	{
		text:"Hello.  My name is Inigo Montoya.  You killed my father.  Prepare to die.",
		choices:["The Princess Bride", "The Three Musketeers", "Braveheart", "Hannibal"],
		correctAnswer: 0
	},
	{
		text:"I'm pretty sure there's a lot more to life than being really, really, ridiculously good looking. And I plan on finding out what that is.",
		choices:["Airplane!", "Billy Madison", "Zoolander", "Monty Python and the Holy Grail"],
		correctAnswer: 2
	},
	{
		text:"Exercise gives you endorphins.  Endorphins make you happy.  Happy people just don't shoot their husbands... they just don't.",
		choices:["Legally Blonde", "The Fugitive", "Scary Movie", "Weird Science"],
		correctAnswer: 0
	},
	{
		text:"I just think it's better to have ideas.  I mean, you can change an idea.  Changing a belief is trickier.  People die for it.  People kill for it.",
		choices:["The Da Vinci Code", "Dogma", "The Walking Dead", "Criminal Minds"],
		correctAnswer: 1
	},
	{
		text:"We're on a mission from God.",
		choices:["The Godfather", "The Da Vinci Code", "Roots", "The Blues Brothers"],
		correctAnswer: 3
	},
	{
		text:"They make it look so easy, connecting with another human being.  It's like no one told them it's the hardest thing in the world.",
		choices:["Hannibal", "Rain Man", "Dexter", "The Terminator"],
		correctAnswer: 2
	},
	{
		text:"Cramming may get you past 4 years in college, but it will screw your next 40 years",
		choices:["Real Genius", "Weird Science", "3 Idiots", "12 Angry Men"],
		correctAnswer: 2
	}
	],
	route:"begin",
    questionNumber: 0,
    questionsUsed: [],
    questionsCorrect: 0
}

$(document).ready(function(){
function renderApp(state){
	if (state.route === "begin"){
		renderStartPage(state);
	} else if (state.route === "quiz"){
		renderQuizPage(state);
	}
}

function renderStartPage(state){
	$('.start').click(function(){
		state.route = "quiz";
		$('.start').addClass('hidden');
		$('.quiz').removeClass('hidden');
		renderApp(state);
	})
}

function renderQuizPage(state){
  $('.quiz').submit(function(event){
  	console.log("clicked");
  	event.preventDefault();
  	if (
  		$('input:checked') === state.questions.correctAnswer){
  		console.log("we made it here");
  		$('input:checked label').addClass('right');
  	} else {
  		$('input:checked label').addClass('wrong');
  		$()
  	}





  		state.questionNumber = Math.floor(Math.random() * 10);
  while (state.questionsUsed.indexOf(state.questionNumber)!==-1){
  	state.questionNumber = Math.floor(Math.random() * 10);
  }
  $('.question').html(state.questions[state.questionNumber].text);
  $('label[for=radio1]').html(state.questions[state.questionNumber].choices[0]);
  $('label[for=radio2]').html(state.questions[state.questionNumber].choices[1]);
  $('label[for=radio3]').html(state.questions[state.questionNumber].choices[2]);
  $('label[for=radio4]').html(state.questions[state.questionNumber].choices[3]);
  state.questionsUsed.push(state.questionNumber);
  })
  state.questionNumber = Math.floor(Math.random() * 10);
  while (state.questionsUsed.indexOf(state.questionNumber)!==-1){
  	state.questionNumber = Math.floor(Math.random() * 10);
  }
  $('.question').html(state.questions[state.questionNumber].text);
  $('label[for=radio1]').html(state.questions[state.questionNumber].choices[0]);
  $('label[for=radio2]').html(state.questions[state.questionNumber].choices[1]);
  $('label[for=radio3]').html(state.questions[state.questionNumber].choices[2]);
  $('label[for=radio4]').html(state.questions[state.questionNumber].choices[3]);
  state.questionsUsed.push(state.questionNumber);
}
renderApp(state);
});