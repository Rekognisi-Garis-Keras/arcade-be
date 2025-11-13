export class SubjectResponseDto {
  constructor(subject) {
    this.id = subject.id;
    this.name = subject.name;
    this.slug = subject.slug;
    this.desc = subject.desc;
    this.thumbnail = subject.thumbnail_url;
    
    if (subject.topics) {
      this.topics = subject.topics.map(topic => ({
        id: topic.id,
        title: topic.title,
        desc: topic.desc,
      }));
    }
  }
}
