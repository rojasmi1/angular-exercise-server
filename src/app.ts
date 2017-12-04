import * as bodyParser from 'body-parser';
import * as express from 'express';
import errorHandler from './handlers/error-handlers';
import routes from './routes/index';

class App {
  public express: any;

  constructor() {
    this.express = express();
    this.mountMiddlewares();
    this.mountRoutes();
    this.mountErrorHandlers();
  }

  private mountRoutes(): void {
    this.express.use(routes);
  }

  private mountMiddlewares(): void {
    // Takes the raw requests and turns them into usable properties on req.body
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));

    // Allow CORS
    this.express.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });
  }

  private mountErrorHandlers(): void {
    // If none of the routes is hit this middleware will resolve to a 404 error
    this.express.use(errorHandler.notFound);

    // Respond with the error stacktrace only in development mode
    if (this.express.get('env') === 'development') {
      this.express.use(errorHandler.developmentErrors);
    }
    this.express.use(errorHandler.productionErrors);
  }
}

export default new App().express;
