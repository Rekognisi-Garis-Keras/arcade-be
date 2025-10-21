export class TopicResponseDTO {
  constructor(topic) {
    this.id = topic.id;
    this.subject_id = topic.subject_id;
    this.title = topic.title;
    this.slug = topic.slug;
    this.desc = topic.desc;
    this.model_url = topic.model_url;
    this.marker_img_url = topic.marker_img_url;
    this.audio_url = topic.audio_url;
    this.created_at = topic.created_at;
  }
}