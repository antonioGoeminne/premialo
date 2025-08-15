class GeneralError extends Error {
  constructor (message) {
    super()
    this.message = message
  }

  getCode () {
    if (this instanceof BadRequest) {
      return 400
    }
    if (this instanceof Unauthorized) {
      return 401
    }
    if (this instanceof Forbidden) {
      return 403
    }
    if (this instanceof NotFound) {
      return 404
    }
    if (this instanceof Conflict) {
      return 409
    }
    if (this instanceof InternalServerError) {
      return 500
    }
    return 501
  }
}

class BadRequest extends GeneralError {}
class Unauthorized extends GeneralError {}
class Forbidden extends GeneralError {}
class NotFound extends GeneralError {}
class Conflict extends GeneralError {}
class InternalServerError extends GeneralError {}

module.exports = {
  GeneralError,
  BadRequest,
  NotFound,
  Unauthorized,
  Conflict,
  Forbidden,
  InternalServerError
}
