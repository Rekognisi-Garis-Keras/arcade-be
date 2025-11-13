import { TopicResponseDTO } from "../../topic/dto/topic-response.dto.js";

export class TFinishedResponseDTO {
  constructor(tFinished) {
    this.id = tFinished.id;
    this.user_id = tFinished.user_id;
    this.topic_id = tFinished.topic_id;
    this.finished = tFinished.finished;
    this.finished_at = tFinished.finished_at;

    if (tFinished.topic) {
      this.topic = new TopicResponseDTO(tFinished.topic);
    }
  }
}