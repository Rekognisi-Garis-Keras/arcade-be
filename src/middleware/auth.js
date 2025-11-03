import { JwtUtil } from "../utils/jwt.util.js";
import { InternalServerError, UnauthorizedError } from "../utils/error.util.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"] || req.headers["Authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return next(new UnauthorizedError("No token provided"));
    }
    const token = authHeader.substring(7).trim();
    let payload;
    try {
      payload = JwtUtil.verify(token);
    } catch (jwtError) {
      if (jwtError.name === "JsonWebTokenError" || jwtError.name === "TokenExpiredError") {
        return next(new UnauthorizedError("Invalid or expired token"));
      }
      return next(new InternalServerError("Failed to authenticate user"));
    }
    if (!payload || typeof payload !== "object" || !payload.id) {
      return next(new UnauthorizedError("Invalid or expired token"));
    }
    req.user = payload;
    next();
  } catch (error) {
    next(new InternalServerError("Failed to authenticate user"));
  }
};
