import * as express from 'express';
import { UserController } from '../controllers/userController';
import errorHandlers from '../handlers/errorHandlers';

class Routes {
  public router: any;

  constructor() {
    const userController = new UserController();
    this.router = express.Router();
    this.router.get('/api/users/:username/details', errorHandlers.catchErrors(userController.getUser));
  }
}

export default new Routes().router;
