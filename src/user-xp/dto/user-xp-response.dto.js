import { UserResponseDto } from "../../user/dto/user-response.dto.js";

export class UserXpResponse {
  constructor(uXp, rank = null) {
    this.user_id = uXp.user_id;
    this.xp = uXp.xp;
    
    if (rank !== null) {
      this.rank = rank;
    }

    if (uXp.user) {
      this.user = new UserResponseDto(uXp.user);
    }
  }
}