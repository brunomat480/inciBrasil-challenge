import { jwtDecode } from 'jwt-decode';

import { getUser } from '../get-user';
import { auth } from './auth';

interface Auth {
  identifier: string;
  password: string;
}

class AuthService {
  async validateToken(token: string) {
    const decodeToken = jwtDecode(token);
    const userId = decodeToken.sub;

    const userDatas = await getUser(userId, token);

    return {
      user: {
        id: userDatas?.id,
        name: userDatas?.name,
        email: userDatas?.email,
        token,
      },
    };
  }

  async signin({ identifier, password }: Auth) {
    const response = await auth({ identifier, password });

    const token = response.token;
    const decodeToken = jwtDecode(token);
    const userId = decodeToken.sub;

    const userDatas = await getUser(userId, token);

    return {
      user: {
        id: userDatas?.id,
        name: userDatas?.name,
        email: userDatas?.email,
        token: token,
      },
    };
  }
}

export { AuthService };
