import { Platform } from '../../@types/platforms/Platform';
import { api } from '../../lib/api';

export async function getPlatforms(userId: string, token: string) {
  try {
    const { data } = await api.get<Platform[]>(`/users/${userId}/platforms`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
  return [];
}
