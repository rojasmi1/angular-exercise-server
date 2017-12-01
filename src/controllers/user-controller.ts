
export class UserController {
  public async getUser(req, res) {
    // TODO: Query Postgre SQL DB to get the user
    const user = {};
    res.json(user);
  }
}
