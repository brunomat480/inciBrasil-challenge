import { Platform } from '../../@types/platforms/Platform';
import { api } from '../../lib/api';

export async function getPlatforms() {
  try {
    const { data } = await api.get<Platform[]>('/platforms');
    return data;
  } catch (error) {
    console.log(error);
  }
  return [];
}
