export class QuizResponseDTO {
  constructor(quiz) {
    this.id = quiz.id;
    this.uuid = quiz.uuid;
    this.topic_id = quiz.topic_id;
    this.question = quiz.question;
    this.options = quiz.options;
    this.explain = quiz.explain;
    this.correct_answer = quiz.correct_answer;
    this.created_at = quiz.created_at;

    if (quiz.topic) {
      this.topic = {
        id: quiz.topic.id,
        title: quiz.topic.title,
        slug: quiz.topic.slug,
        subject: quiz.topic.subject
          ? {
              id: quiz.topic.subject.id,
              name: quiz.topic.subject.name,
              slug: quiz.topic.subject.slug,
            }
          : undefined,
      };
    }
  }
}