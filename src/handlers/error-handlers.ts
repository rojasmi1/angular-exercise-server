class ErrorHandler {
  /**
   *  Wraps the functions to catch errors and pass them to the express middleware
   *  @param {object} req - HTTPRequest object
   *  @param {object} res - HTTPResponse object
   *  @param {fuction} next - Function that passes things through the middleware
   */
  public catchErrors = (fn) => {
    return (req, res, next) => {
      return fn(req, res, next).catch(next);
    };
  }

  /**
   *  Marks the not found routes as 404 and pass them along to the next handler
   *  @param {object} req - HTTPRequest object
   *  @param {object} res - HTTPResponse object
   *  @param {fuction} next - Function that passes things through the middleware
   */
  public notFound = (req, res, next) => {
    const err = new Error('Not Found');
    res.status = 404;
    next(err);
  }

  /**
   * Shows informative errors that include the stack trace
   *  @param {object} err - Contains errors if any
   *  @param {object} req - HTTPRequest object
   *  @param {object} res - HTTPResponse object
   *  @param {fuction} next - Function that passes things through the middleware
   */
  public developmentErrors = (err, req, res, next) => {
    err.stack = err.stack || '';
    const errorDetails = {
      message: err.message,
      stackHighlighted: err.stack.replace(/[a-z_-\d]+.js:\d+:\d+/gi, '<mark>$&</mark>'),
      status: res.status,
    };
    res.format({
      'application/json': () => res.json(errorDetails),
    });
  }

  /**
   * Shows production errors
   *  @param {object} err - Contains errors if any
   *  @param {object} req - HTTPRequest object
   *  @param {object} res - HTTPResponse object
   *  @param {fuction} next - Function that passes things through the middleware
   */
  public productionErrors = (err, req, res) => {
    res.render('error', {
      error: {},
      message: err.message,
    });
  }
}

export default new ErrorHandler();
