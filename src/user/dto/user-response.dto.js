export class UserResponseDto {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.avatar = user.avatar;
    this.bio = user.bio;
    this.role = user.role;
  }
}
