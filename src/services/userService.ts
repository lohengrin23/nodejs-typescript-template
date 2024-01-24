// src/services/userService.ts
import UserModel from '../models/userModel';

class UserService {
  async createUser(username: string, email: string): Promise<UserModel> {
    // Add business logic, validation, etc.
    const user = await UserModel.create({ username, email });
    return user;
  }
}

export default UserService;
