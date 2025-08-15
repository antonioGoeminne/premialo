const { GeneralError } = require('../../errors.js')

const transformObjectToString = (obj) => {
  let str = ''
  for (const key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      str += `${obj[key]} `
    }
  }
  return str
}

const handleErrors = (err, req, res, next) => {
  if (err instanceof GeneralError) {
    return res.status(err.getCode()).json({
      errors: typeof err.message === 'object' ? transformObjectToString(err.message) : err.message
    })
  }

  return res.status(501).json({
    errors: typeof err.message === 'object' ? transformObjectToString(err.message) : err.message
  })
}

module.exports = handleErrors
