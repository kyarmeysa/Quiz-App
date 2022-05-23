function Question(text, choices, answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.CheckAnswer = function (answer){
    return this.answer === answer;
}
 

function Quiz(questions){
    this.questions = questions;
    this.score =0;
    this.QuestionIndex =0;
}

Quiz.prototype.GetQuestion = function (){
    return this.questions[this.QuestionIndex]

}
Quiz.prototype.IsFinish = function(){
    return this.questions.length === this.QuestionIndex;
}
Quiz.prototype.Guess = function(answer){
    var question = this.GetQuestion();
    if(question.CheckAnswer(answer)){
        this.score++;
    }
    this.QuestionIndex++;


}



var q1 = new Question("What is the largest dog breed in the world?",["Kangal", "Caucasian Shepherd Dog","Danua","Napoliten Mastiff"], "Caucasian Shepherd Dog");
var q2 = new Question("What is the largest domestic cat breed in the world?",["British Shorthair", "Bengalt Cat","Norvegian Forest Cat","Maine Coon"],"Maine Coon");
var q3 = new Question("Which dog breed is the best shepherd?",["Germany Shepherd", "Kangal","Caucasian Shepherd","Bernese Mountain Dog"], "Kangal");

var questions = [q1,q2,q3];

var quiz = new Quiz(questions);

LoadQuestion();


function LoadQuestion(){
    if(quiz.IsFinish()){
        ShowScore();
    }else{
        var question = quiz.GetQuestion()
        var choices = question.choices;

        document.querySelector('#question').textContent = question.text;
        for ( var i=0;i< choices.length; i++){
            var element =document.querySelector('#choice'+i);
            element.innerHTML = choices[i];
            Guess('btn'+i , choices[i])
        }
        ShowProgress();
    }
}

function Guess(id ,guess){
    var btn = document.getElementById(id);
    btn.onclick = function (){
        quiz.Guess(guess)
        LoadQuestion();
    }

}

function ShowScore(){
    var html =`<h2>Score</h2> <h4>${quiz.score}</h4>`
    document.querySelector('.card-body').innerHTML = html;

}
function ShowProgress(){
    var TotalQuestion = quiz.questions.length;
    var QuestionNumber =quiz.QuestionIndex+1;
    document.querySelector('#progress').innerHTML = ' Question ' + QuestionNumber + ' of ' + TotalQuestion;
}
