
const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions;
let correctAnswers;
let candidateAnswers;
let candidateAnswersArr = [];
let quiz = [
  [1, "1) Who was the first American woman in space?", "sally ride"],
  [2, "2) True or false: 5 kilometer == 5000 meters?", "true"],
  [3, "3) (5 + 3)/2 * 10 = ?", "40"],
  [4, "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", "trajectory"],
  [5, "5) What is the minimum crew size for the ISS?", "3"]
];
let i = 0;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name?");
  console.log("Welcome, " + candidateName + "!");
}
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer = input.question(question);

  for (let i = 0; i < quiz.length; i++) {
    candidateAnswers = input.question(quiz[i][1]);
    candidateAnswersArr.push(candidateAnswers.toLowerCase());
    console.log("Your Answer:" + candidateAnswers);

  }
}
function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  let grade = 0;
  for (let i = 0; i < candidateAnswersArr.length; i++) {

    if (candidateAnswersArr[i] === quiz[i][2]) {
      console.log(`You answered question ${quiz[i][0]} correct.`)
      grade++
    } else {
      console.log(`You answered question ${quiz[i][0]} incorrect.`)
    }
  }
  console.log("Overall Grade:" + (grade/quiz.length)*100 + "%");
  let gradedQuiz = (grade/quiz.length)*100;
  if (gradedQuiz > 80) {
    console.log("Status: Pass");
  } else {
    console.log("Status: Failed");
  }
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};