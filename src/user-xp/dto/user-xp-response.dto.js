import { UserResponseDto } from "../../user/dto/user-response.dto";

export class UserXpResponse {
  constructor(uXp) {
    this.id = uXp.id;
    this.user_id = uXp.user_id;
    this.xp = uXp.xp;

    if (uXp.user) {
      this.user = new UserResponseDto(this.user);
    }
  }
}