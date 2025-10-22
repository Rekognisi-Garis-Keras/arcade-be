import { UserController } from "./user.controller.js";
import { UserRepository } from "./user.repository.js";
import { UserService } from "./user.service.js";

const userRepo = new UserRepository();
const userService = new UserService(userRepo);
const userController = new UserController(userService);

export {
  userRepo,
  userService,
  userController,
};