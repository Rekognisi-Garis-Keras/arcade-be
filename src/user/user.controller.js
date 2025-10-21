import { userRegisterSchema } from "./dto/user-request.dto.js";
import { UserResponseDto } from "./dto/user-response.dto.js";
import { ResponseUtil } from "../utils/response.util.js";

export class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  register = async (req, res) => {
    try {
      const { error, value } = userRegisterSchema.validate(req.body);
      if (error) {
        return ResponseUtil.validationError(res, error.details[0].message, error.details);
      }
      const user = await this.userService.register(value);
      return ResponseUtil.success(res, 201, "User registered successfully", user);
    } catch (error) {
      console.error(error);
      return ResponseUtil.error(res, 500, "Failed to register user", error.message);
    }
  }

  login = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return ResponseUtil.validationError(res, "Email and password are required");
      }
      const result = await this.userService.login(email, password);
      if (!result) {
        return ResponseUtil.unauthorized(res, "Invalid email or password");
      }
      return ResponseUtil.success(res, 200, "Login successful", result);
    } catch (error) {
      console.error(error);
      return ResponseUtil.error(res, 500, "Failed to login", error.message);
    }
  }

  me = async (req, res) => {
    try {
      if (!req.user || !req.user.id) {
        return ResponseUtil.unauthorized(res, "Unauthorized");
      }
      const user = await this.userService.getUserById(req.user.id);
      if (!user) {
        return ResponseUtil.unauthorized(res, "Invalid or expired token");
      }
      return ResponseUtil.success(res, 200, "User retrieved successfully", user);
    } catch (error) {
      console.error(error);
      return ResponseUtil.error(res, 500, "Failed to get user", error.message);
    }
  }
}