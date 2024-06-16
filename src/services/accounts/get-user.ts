import { User } from '../../@types/accounts/User';
import { api } from '../../lib/api';

export async function getUser(id: string | undefined) {
  try {
    const { data } = await api.get<User>(`/users/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
  return [];
}
