import { ResponseUtil } from "../utils/response.util.js";
import { JwtUtil } from "../utils/jwt.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return ResponseUtil.unauthorized(res, "No token provided");
    }
    const token = authHeader.split(" ")[1];
    const payload = JwtUtil.verify(token);
    if (!payload || !payload.id) {
      return ResponseUtil.unauthorized(res, "Invalid or expired token");
    }
    req.user = payload;
    next();
  } catch (error) {
    console.error(error);
    return ResponseUtil.error(res, 500, "Failed to authenticate user", error.message);
  }
};
