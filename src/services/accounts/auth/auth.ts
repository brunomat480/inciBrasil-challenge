import { api } from '../../../lib/api';

interface Auth {
  email: string;
  password: string;
}

export async function auth({ email, password }: Auth) {
  try {
    const { data } = await api.post('/sessions', {
      email,
      password,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
  return false;
}
