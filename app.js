var state = {
	questions: [
	{
		text:"Life moves pretty fast.  If you don't stop and look around once in awhile, you could miss it.",
		choices:["Real Genius", "Ferris Beuller's Day Off", "Fast and Furious", "Ghost Busters"],
		correctAnswer: 1,
		image: "images/ferris-bueller.gif"
	},
	{
		text:"If we're going to be damned, let's be damned for what we really are.",
		choices: ["Braveheart", "House of 1000 corpses", "The Walking Dead", "Star Trek; The Next Generation"],
		correctAnswer: 3,
		image: "images/Jean-Luc-Picard.jpg"
	},
	{
		text:"It's easy to confuse 'what is' with 'what ought to be,' especially when 'what is' has worked out in your favor.",
		choices: ["Orange is the New Black", "12 Years A Slave", "The Wolf of Wall Street", "Game of Thrones"],
		correctAnswer: 3,
		image: "images/Tyrion-Lannister.jpg-large"
	},
	{
		text:"Hello.  My name is Inigo Montoya.  You killed my father.  Prepare to die.",
		choices:["The Princess Bride", "The Three Musketeers", "Braveheart", "Hannibal"],
		correctAnswer: 0,
		image: "images/inigo-montoya.gif"
	},
	{
		text:"I'm pretty sure there's a lot more to life than being really, really, ridiculously good looking. And I plan on finding out what that is.",
		choices:["Airplane!", "Billy Madison", "Zoolander", "Monty Python and the Holy Grail"],
		correctAnswer: 2,
		image: "images/zoolander.jpg"
	},
	{
		text:"Exercise gives you endorphins.  Endorphins make you happy.  Happy people just don't shoot their husbands... they just don't.",
		choices:["Legally Blonde", "The Fugitive", "Scary Movie", "Weird Science"],
		correctAnswer: 0,
		image: "images/elle-woods.gif"
	},
	{
		text:"I just think it's better to have ideas.  I mean, you can change an idea.  Changing a belief is trickier.  People die for it.  People kill for it.",
		choices:["The Da Vinci Code", "Dogma", "The Walking Dead", "Criminal Minds"],
		correctAnswer: 1,
		image: "images/rufus.jpg"
	},
	{
		text:"We're on a mission from God.",
		choices:["The Godfather", "The Da Vinci Code", "Roots", "The Blues Brothers"],
		correctAnswer: 3,
		image: "images/bluesBrothers.gif"
	},
	{
		text:"They make it look so easy, connecting with another human being.  It's like no one told them it's the hardest thing in the world.",
		choices:["Hannibal", "Rain Man", "Dexter", "The Terminator"],
		correctAnswer: 2,
		image: "images/Dexter.gif"
	},
	{
		text:"Cramming may get you past 4 years in college, but it will screw your next 40 years",
		choices:["Real Genius", "Weird Science", "3 Idiots", "12 Angry Men"],
		correctAnswer: 2,
		image: "images/3-idiots-exam-o.gif"
	},
	{
		text:"There could be a mathematical explanation for how bad your tie is.",
		choices:["A Beautiful Mind", "Good Will Hunting", "The Green Mile", "The Matrix"],
		correctAnswer: 0,
		image: "images/ABeautifulMind.gif"
	},
	{
		text:"This job would be great if it wasn't for the fucking customers.",
		choices:["Waiting", "Office Space", "Billy Madison", "Clerks"],
		correctAnswer: 3,
		image: "images/Clerks.gif"
	},
	{
		text:"Be excellent to each other.  Party on, dudes!",
		choices:["Wayne's World", "Bill & Ted's Excellent Adventure", "Dude, Where's My Car?", "Jay & Silent Bob Strike Back"],
		correctAnswer: 1,
		image: "images/BillTed.gif"
	},
	{
		text:"I guess it comes down to a simple choice, really.  Get busy living or get busy dying.",
		choices:["The Shawshank Redemption", "Bruce Almighty", "Seven", "The Dark Knight"],
		correctAnswer: 0,
		image: "images/shawshank.gif"
	},
	{
		text:"Frankly, my dear, I don't give a damn.",
		choices:["Casablanca", "Gone With The Wind", "Yankee Doodle Dandy", "The Godfather"],
		correctAnswer: 1,
		image: "images/Frankly.gif"
	},
	{
		text:"Here's looking at you kid.",
		choices:["Gone With The Wind", "A Streetcar Named Desire", "Casablanca", "West Side Story"],
		correctAnswer: 2,
		image: "images/Casablanca.gif"
	},
	{
		text:"What we have here is a failure to communicate.",
		choices:["Good Morning, Vietnam!", "Stripes", "The Treasure of the Sierra Madre", "Cool Hand Luke"],
		correctAnswer: 3,
		image: "images/CoolHand.gif"
	},
	{
		text:"You can't handle the truth!",
		choices:["A Few Good Men", "Jerry Maguire", "The Shining", "One Flew Over The Cuckoo's Nest"],
		correctAnswer: 0,
		image: "images/TheJuith.jpg"
	},
	{
		text:"Stella!!!!!!!!",
		choices:["Gone With The Wind", "A Streetcar Named Desire", "Rebel Without A Cause", "The Godfather"],
		correctAnswer: 1,
		image: "images/stella.gif"
	},
	{
		text:"There's no crying in baseball!",
		choices:["Major League", "The Sandlot", "A League of Their Own", "Rookie Of The Year"],
		correctAnswer: 2,
		image: "images/NoCrying.gif"
	},
	],
	grades: [
	{
		grade:"A++",
		comment:"Holy Crap!  You've either done this quiz before, or you are just simply amazing.  Actually, if you've done this quiz before, you're amazing anyway.  Keep on keepin' on!"
	},
	{
		grade:"B",
		comment:"Look, everyone makes mistakes, and you only made one."
	},
	{
		grade:"C",
		comment:"Hey, this is probably the best place to be.  You've seen some movies, but not so many movies that you've effectively lost all social skills.  But I'm going to level with you.  This is really important stuff to know. It builds character."
	},
	{
		grade:"D",
		comment:"Meh. Most of these are good movies, so you should go watch them... with some friends... with some popcorn... and some General Tso's.  Or you could just retake this quiz over and over until you can pretend like you know all the answers.  But that definitely wouldn't be as fun as watching the movies."
	},
	{
		grade:"F",
		comment:"So you're not a movie person.  I get it. You have a 'life.'  You think you're better than me?  Whatever."
	},
	{
		grade:"F--",
		comment:"Statistically, you had a 25% chance to get each question correct, which means that it's unlikely you got here without actually trying to lose.  If that's not the case, I'm sorry... so... so sorry."
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
	$('.start').click(function(){
		state.route = "quiz";
		$('.start').addClass('hidden');
		$('.quiz').removeClass('hidden');
		$('.submit').removeClass('hidden');
		renderApp(state);
	})
	$('.next').click(function(){
		if (state.questionsUsed.length < 5){
		state.route = "quiz";
			$('.image').addClass('hidden');
			$('.image img').removeAttr('src',"");
			$('label').removeClass('wrong');
			$('label').removeClass('right');
			$('input').prop('checked', false);
			$('.next').addClass('hidden');
			$('.submit').removeClass('hidden');
		renderApp(state);
		} else {
			$('.next').addClass('hidden');
			$('.image').addClass('hidden');
			$('.image img').removeAttr('src',"");
			renderFinalScore(state);
		}
	})
	$('.quiz').submit(function(event){
		event.preventDefault();
		var image = state.questions[state.questionNumber].image;
		var label = $('input:checked').attr('id');
		if (parseInt($('input:checked').val()) !== state.questions[state.questionNumber].correctAnswer){
			$('label[for='+label).addClass('wrong');
			var correctID = 'radio' + (state.questions[state.questionNumber].correctAnswer + 1);
			$('label[for='+correctID).addClass('right');
		} else {
			$('label[for='+label).addClass('right');
			state.questionsCorrect += 1;
		}
		var score = state.questionsCorrect;
		$('.score span').html(score + " ");
		$('.image img').attr('src', image);
		$('.image').removeClass('hidden');
		$('.submit').addClass('hidden');
		$('.next').removeClass('hidden');
	});
	$('.playAgain').click(function(){
		state.route = "begin";
		state.questionsUsed = [];
		renderApp(state);
	})

function renderStartPage(state){
	state.questionsCorrect = 0;
	var score = state.questionsCorrect;
	$('.score span').html(score + " ");
	$('.start').removeClass('hidden');
	$('.quiz').addClass('hidden')
	$('.final').addClass('hidden');
	$('.final h3').addClass('hidden');
}

function renderQuizPage(state){
	state.questionNumber = Math.floor(Math.random() * 20);
	while (state.questionsUsed.indexOf(state.questionNumber)!==-1){
  	state.questionNumber = Math.floor(Math.random() * 20);
  }
	$('.question').html(state.questions[state.questionNumber].text);
  	$('label[for=radio1]').html(state.questions[state.questionNumber].choices[0]);
  	$('label[for=radio2]').html(state.questions[state.questionNumber].choices[1]);
  	$('label[for=radio3]').html(state.questions[state.questionNumber].choices[2]);
  	$('label[for=radio4]').html(state.questions[state.questionNumber].choices[3]);
  	state.questionsUsed.push(state.questionNumber);
};

function renderFinalScore(state){
	$('.quiz').addClass('hidden');
	$('.final').removeClass('hidden');
	$('input').prop('checked', false);
	$('label').removeClass('wrong');
	$('label').removeClass('right');
	$('.percentCorrect').html((state.questionsCorrect / 5 * 100) +"%");
	$('.playAgain').removeClass('hidden');
	if (state.questionsCorrect === 5){
		$('.hundred').removeClass('hidden');
		$('.a').html(state.grades[0].grade);
		$('.hundred').html(state.grades[0].comment);
	} else if (state.questionsCorrect === 4){
		$('.eighty').removeClass('hidden');
		$('.b').html(state.grades[1].grade);
		$('.eighty').html(state.grades[1].comment);
	} else if (state.questionsCorrect === 3){
		$('.sixty').removeClass('hidden');
		$('.c').html(state.grades[2].grade);
		$('.sixty').html(state.grades[2].comment);
	} else if (state.questionsCorrect === 2){
		$('.forty').removeClass('hidden');
		$('.d').html(state.grades[3].grade);
		$('.forty').html(state.grades[3].comment);
	} else if (state.questionsCorrect === 1){
		$('.twenty').removeClass('hidden');
		$('.f').html(state.grades[4].grade);
		$('.twenty').html(state.grades[4].comment);
	} else if (state.questionsCorrect === 0){
		$('.zero').removeClass('hidden');
		$('.ff').html(state.grades[5].grade);
		$('.zero').html(state.grades[5].comment);
	}
}

renderApp(state);
});