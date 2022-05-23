function Question(text, choices, answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.CheckAnswer = function (answer){
    return this.answer === answer;
}
 
var q1 = new Question("What is the largest dog breed in the world?",["Kangal", "Caucasian Shepherd Dog","Danua","Napoliten Mastiff"], "Caucasian Shepherd Dog");
var q2 = new Question("What is the largest domestic cat breed in the world?",["British Shorthair", "Bengalt Cat","Norvegian Forest Cat","Maine Coon"],"Maine Coon");
var q3 = new Question("Which dog breed is the best shepherd?",["Germany Shepherd", "Kangal","Caucasian Shepherd","Bernese Mountain Dog"], "Kangal");



console.log(q1.CheckAnswer("Kangal"));
console.log(q1.CheckAnswer("Caucasian Shepherd Dog"));