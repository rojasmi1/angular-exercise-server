import * as express from 'express'
import userController from '../controllers/userController'
import errorHandlers from '../handlers/errorHandlers'

class Routes {
  public router
  public test

  constructor () {
    this.router = express.Router()
    this.router.get('/api/users/:username/details', errorHandlers.catchErrors(userController.getUser))
  }
}

export default new Routes().router
