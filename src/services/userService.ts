
import UserModel from '../models/userModel';

class UserService {
  async createUser(username: string, email: string): Promise<UserModel> {

    const user = await UserModel.create({ username, email });
    return user;
  }
}

export default UserService;
