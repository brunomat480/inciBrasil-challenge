import { Tool } from '../@types/tools/Tools';
import { api } from '../libs/api';

export async function getTools() {
  try {
    const { data } = await api.get<Tool[]>('/tools');

    return data;
  } catch (error) {
    console.log(error);
  }

  return [];
}
