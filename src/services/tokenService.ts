
import tokenModel from '../models/tokenModel';
import jwt from 'jsonwebtoken';

class TokenService {

  private secretKey = 'your_secret_key';
  async createToken(clientId: string, idProducto: string, idServicio:string, userIp?: string, userAgent?: string, userScreen?: string): Promise<tokenModel> {

    const token = await tokenModel.create({ clientId, idProducto, idServicio});
    return token;
  }

   async generateToken(data: any): Promise<any> {
    const payload = {
        clientId: data.clientId,
        idProducto: data.idProducto,
        idServicio: data.idServicio,
    };
    const { clientId, idProducto, idServicio } = data
    const token = jwt.sign(payload, this.secretKey, { expiresIn: '1h' });

    const record = await tokenModel.create( {clientId, idProducto, idServicio });
    console.log('record', record);
    

    return token;
  }

   async getTokenData(token: string): Promise<any>{

    const data: any = await jwt.verify(token, this.secretKey);

    return data;
  }
}

export default TokenService;
