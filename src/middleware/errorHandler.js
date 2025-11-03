import { 
  ForbiddenError, 
  NotFoundError, 
  UnauthorizedError, 
  ValidationError 
} from "../utils/error.util.js";
import { ResponseUtil } from "../utils/response.util.js";

export function errorHandler(err, req, res, next) {
  console.error(`[${err.name}]`, err.message);

  if (err instanceof ValidationError) {
    return ResponseUtil.validationError(res, err.message, err.details);
  }
  
  if (err instanceof UnauthorizedError) {
    return ResponseUtil.unauthorized(res, err.message);
  }

  if (err instanceof ForbiddenError) {
    return ResponseUtil.forbidden(res, err.message);
  }

  if (err instanceof NotFoundError) {
    return ResponseUtil.notFound(res, err.message);
  }

  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  return ResponseUtil.error(res, status, message);
}