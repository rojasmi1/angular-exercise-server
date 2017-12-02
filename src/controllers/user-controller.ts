import { DBConnector } from '../db/db-connector';
import { User } from '../models/user';

const dbConnector = new DBConnector();
const pool = dbConnector.getPool();

export class UserController {

  public async getUser(req, res, next) {
    const usernameParam = req.params.username;
    const query = {
      name: 'fetch-user-by-username',
      text: 'SELECT * FROM public.user WHERE username = $1',
      values: [usernameParam],
    };

    const results = await pool.query(query);
    if (results && results.rows[0]) {
      const {
        username,
        first_name,
        last_name,
        email_address,
        age,
        id,
      } = results.rows[0];
      const user = new User(username, first_name, last_name, email_address, age);
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found', status: 404 });
    }
  }

}
