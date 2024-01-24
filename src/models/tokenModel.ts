
import { DataTypes, Model } from 'sequelize';
import sequelize from '../../src/sequelize';

class TokenModel extends Model {
  public id!: number;
  public clientId!: string;
  public idProducto!: string;
  public idServicio!: string;
  public screenSize?: string;
  public userIp?: string;
  public userAgent?: string;

}

TokenModel.init(
  {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
    clientId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idProducto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idServicio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    screenSize: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      userIp: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      userAgent: {
        type: DataTypes.STRING,
        allowNull: true,
      },
  },
  {
    sequelize,
    tableName: 'tokens',
  }
);

export default TokenModel;
