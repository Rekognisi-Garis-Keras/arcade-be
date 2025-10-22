import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "very-secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";

export const JwtUtil = {
  sign(payload, options = {}) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN, ...options });
  },

  verify(token) {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return null;
    }
  },

  decode(token) {
    return jwt.decode(token);
  }
};
