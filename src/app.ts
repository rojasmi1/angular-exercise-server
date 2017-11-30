import * as express from 'express'
import * as bodyParser from 'body-parser'
import routes from './routes/index'
import errorHandler from './handlers/errorHandlers'

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
    this.mountErrorHandlers()
    this.mountMiddlewares()
  }

  private mountRoutes (): void {
    this.express.use(routes)
  }

  private mountMiddlewares (): void {
    // Takes the raw requests and turns them into usable properties on req.body
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: true }))
  }

  private mountErrorHandlers (): void {
    // If none of the routes is hit this middleware will resolve to a 404 error
    this.express.use(errorHandler.notFound)

    // Respond with the error stacktrace only in development mode
    if (this.express.get('env') === 'development') {
      this.express.use(errorHandler.developmentErrors)
    }
    this.express.use(errorHandler.productionErrors)
  }
}

export default new App().express