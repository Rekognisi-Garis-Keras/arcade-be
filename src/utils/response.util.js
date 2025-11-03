export class ResponseUtil {
  static baseResponse(status, code, message, data = null) {
    return {
      status,
      code,
      message,
      data
    };
  }

  static success(res, statusCode = 200, message = "Success", data = null) {
    return res.status(statusCode).json(
      ResponseUtil.baseResponse("success", statusCode, message, data)
    );
  }

  static error(res, statusCode = 500, message = "Internal Server Error", data = null) {
    return res.status(statusCode).json(
      ResponseUtil.baseResponse("error", statusCode, message, data)
    );
  }

  static validationError(res, message = "Validation Error", details = null) {
    return res.status(400).json(
      ResponseUtil.baseResponse("error", 400, message, details)
    );
  }

  static notFound(res, message = "Resource not found") {
    return res.status(404).json(
      ResponseUtil.baseResponse("error", 404, message)
    );
  }

  static unauthorized(res, message = "Unauthorized") {
    return res.status(401).json(
      ResponseUtil.baseResponse("error", 401, message)
    );
  }

  static forbidden(res, message = "Forbidden") {
    return res.status(403).json(
      ResponseUtil.baseResponse("error", 403, message)
    );
  }
}
