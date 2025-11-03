import { userRegisterSchema } from "./dto/user-request.dto.js";
import { ResponseUtil } from "../utils/response.util.js";
import { handleUpload } from "../config/cloudinary.js";

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

  loginByGoogle = async (req, res) => {
    try {
      const user = req.user;
      if (!user) {
        return ResponseUtil.unauthorized(res, "Google authentication failed.");
      }
      const result = await this.userService.loginWithGoogle(user);
      
      // redirect to frontend (bring token)
      const FRONTEND_URL = process.env.FRONTEND_URL || "localhost:3000";
      res.redirect(`${FRONTEND_URL}/login/google/callback?token=${result.token}`);
    } catch (error) {
      console.error(error);
      return ResponseUtil.error(res, 500, "Failed to login by google", error.message);
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

  updateProfile = async (req, res) => {
    try {
      const { name, bio } = req.body;
      if (typeof name === "undefined" && typeof bio === "undefined") {
        return ResponseUtil.validationError(res, "At least one field (name or bio) is required to update");
      }
      const updatedUser = await this.userService.updateProfile(req.user.id, { name, bio });
      return ResponseUtil.success(res, 200, "Profile updated successfully", updatedUser);
    } catch (error) {
      console.error(error);
      return ResponseUtil.error(res, 500, "Failed to update profile", error.message);
    }
  }

  updateAvatar = async (req, res) => {
    try {
      // upload file to cloudinary
      if (!req.file) {
        return ResponseUtil.validationError(res, "Avatar file is required");
      }

      const b64 = Buffer.from(req.file.buffer).toString("base64");
      let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
      const cldRes = await handleUpload(dataURI, "avatar");

      const fileUrl = cldRes.secure_url;
      const updatedUser = await this.userService.updateAvatar(req.user.id, fileUrl);
      return ResponseUtil.success(res, 200, "Avatar updated successfully", updatedUser);
    } catch (error) {
      console.error(error);
      return ResponseUtil.error(res, 500, "Failed to update avatar", error.message);
    }
  }
}