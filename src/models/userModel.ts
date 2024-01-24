
import { DataTypes, Model } from 'sequelize';
import sequelize from '../../src/sequelize';

class UserModel extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
}

UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'users',
  }
);

export default UserModel;
