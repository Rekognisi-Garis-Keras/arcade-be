export class QuizAnswerResponseDTO {
  constructor(quiz, answer) {
    this.id = quiz.id;
    this.user_answer = answer;
    this.question = quiz.question;
    this.options = quiz.options;
    this.correct_answer = quiz.correct_answer;
  }
}