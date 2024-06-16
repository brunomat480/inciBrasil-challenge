import { Tool } from '../../@types/tools/Tools';
import { api } from '../../lib/api';

export async function getTools(id: string, token: string) {
  try {
    const { data } = await api.get<Tool[]>(`/users/${id}/tools`, {
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
