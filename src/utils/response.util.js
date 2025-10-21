export class ResponseUtil {
  /**
   * Create a standardized success response
   * @param {Object} res - Express response object
   * @param {number} statusCode - HTTP status code
   * @param {string} message - Success message
   * @param {any} data - Response data
   * @returns {Object} JSON response
   */
  static success(res, statusCode = 200, message = "Success", data = null) {
    return res.status(statusCode).json({
      status: "success",
      code: statusCode,
      message: message,
      data: data
    });
  }

  /**
   * Create a standardized error response
   * @param {Object} res - Express response object
   * @param {number} statusCode - HTTP status code
   * @param {string} message - Error message
   * @param {any} data - Additional error data (optional)
   * @returns {Object} JSON response
   */
  static error(res, statusCode = 500, message = "Internal Server Error", data = null) {
    return res.status(statusCode).json({
      status: "error",
      code: statusCode,
      message: message,
      data: data
    });
  }

  /**
   * Create a standardized validation error response
   * @param {Object} res - Express response object
   * @param {string} message - Validation error message
   * @param {any} validationErrors - Validation error details
   * @returns {Object} JSON response
   */
  static validationError(res, message = "Validation Error", validationErrors = null) {
    return res.status(400).json({
      status: "error",
      code: 400,
      message: message,
      data: validationErrors
    });
  }

  /**
   * Create a standardized not found response
   * @param {Object} res - Express response object
   * @param {string} message - Not found message
   * @returns {Object} JSON response
   */
  static notFound(res, message = "Resource not found") {
    return res.status(404).json({
      status: "error",
      code: 404,
      message: message,
      data: null
    });
  }

  /**
   * Create a standardized unauthorized response
   * @param {Object} res - Express response object
   * @param {string} message - Unauthorized message
   * @returns {Object} JSON response
   */
  static unauthorized(res, message = "Unauthorized") {
    return res.status(401).json({
      status: "error",
      code: 401,
      message: message,
      data: null
    });
  }

  /**
   * Create a standardized forbidden response
   * @param {Object} res - Express response object
   * @param {string} message - Forbidden message
   * @returns {Object} JSON response
   */
  static forbidden(res, message = "Forbidden") {
    return res.status(403).json({
      status: "error",
      code: 403,
      message: message,
      data: null
    });
  }
}
