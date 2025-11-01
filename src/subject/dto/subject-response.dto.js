export class SubjectResponseDto {
  constructor(subject) {
    this.id = subject.id;
    this.name = subject.name;
    this.slug = subject.slug;
    this.desc = subject.desc;
    this.thumbnail = subject.thumbnail_url;
    this.topics = subject.topics;
  }
}
