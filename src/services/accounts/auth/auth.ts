import { api } from '../../../lib/api';

interface Auth {
  identifier: string;
  password: string;
}

export async function auth({ identifier, password }: Auth) {
  try {
    const { data } = await api.post('/sessions', {
      identifier,
      password,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
  return false;
}
