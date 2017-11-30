class ErrorHandler {
  /**
  * Wraps the functions to catch errors and pass them to the express middleware
  object} req - HTTPRequest object
  object} res - HTTPResponse object
  fuction} next - Function that passes things through the middleware
  */
  public catchErrors = (fn) => function (req, res, next) {
    return fn(req, res, next).catch(next)
  };

  /**
* Marks the not found routes as 404 and pass them along to the next handler
  object} req - HTTPRequest object
  object} res - HTTPResponse object
  fuction} next - Function that passes things through the middleware
*/
  public notFound = (req, res, next) => {
    const err = new Error('Not Found')
    res.status = 404
    next(err)
  };

  /**
* Shows informative errors that include the stack trace
  object} err - Contains errors if any
  object} req - HTTPRequest object
  object} res - HTTPResponse object
  fuction} next - Function that passes things through the middleware
*/
  public developmentErrors = (err, req, res, next) => {
    err.stack = err.stack || ''
    const errorDetails = {
      message: err.message,
      status: res.status,
      stackHighlighted: err.stack.replace(/[a-z_-\d]+.js:\d+:\d+/gi, '<mark>$&</mark>')
    }
    res.format({
      'application/json': () => res.json(errorDetails)
    })
  };

  /**
* Shows production errors
  object} err - Contains errors if any
  object} req - HTTPRequest object
  object} res - HTTPResponse object
  fuction} next - Function that passes things through the middleware
*/
  public productionErrors = (err, req, res) => {
    res.render('error', {
      message: err.message,
      error: {}
    })
  };
}

export default new ErrorHandler()
