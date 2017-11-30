
class UserController {
  const getUser = async (req, res) => {
    // TODO: Query Postgre SQL DB to get the user
    const user = {}
    res.json(user)
  };
}

export default new UserController()
