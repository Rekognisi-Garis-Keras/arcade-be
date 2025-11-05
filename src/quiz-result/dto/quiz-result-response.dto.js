export class QuizResultResponseDTO {
  constructor(result) {
    this.id = result.id;
    this.uuid = result.uuid;
    this.topic_id = result.topic_id;
    this.user_id = result.user_id;
    this.xp = result.xp;
    this.created_at = result.created_at;

    if (result.topic) {
      this.topic = {
        id: result.topic.id,
        subject_id: result.topic.subject_id,
        title: result.topic.title,
        slug: result.topic.slug,
        desc: result.topic.desc,
        model_url: result.topic.model_url,
        marker_img_url: result.topic.marker_img_url,
        content: result.topic.content,
        created_at: result.topic.created_at
      }
    }
  }
}