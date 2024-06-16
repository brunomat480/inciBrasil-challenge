import { User } from '../../@types/accounts/User';
import { api } from '../../lib/api';

export async function getUser(
  id: string | undefined,
  token: string | undefined,
) {
  try {
    const { data } = await api.get<User>(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
  return null;
}
