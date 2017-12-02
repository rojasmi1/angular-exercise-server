import * as express from 'express';
import { UserController } from '../controllers/user-controller';
import errorHandlers from '../handlers/error-handlers';

class Routes {
  public router: any;

  constructor() {
    const userController = new UserController();
    this.router = express.Router();
    this.router.get('/users/:username/details', errorHandlers.catchErrors(userController.getUser));
  }
}

export default new Routes().router;
