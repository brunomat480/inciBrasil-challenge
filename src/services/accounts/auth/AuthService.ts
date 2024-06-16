import { jwtDecode } from 'jwt-decode';

import { auth } from './auth';

interface Auth {
  email: string;
  password: string;
}

class AuthService {
  async signin({ email, password }: Auth) {
    const response = await auth({ email, password });

    console.log(response);
    const token = response.token;
    const decodeToken = jwtDecode(token);
    const userId = decodeToken.sub;

    // const userDatas = await getUser(userId);

    return {
      user: {
        data: response.user,
        id: userId,
      },
      token,
    };
  }
}

export { AuthService };
