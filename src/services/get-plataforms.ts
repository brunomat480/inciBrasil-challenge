import { Plataform } from '../@types/plataforms/Plataform';
import { api } from '../libs/api';

export async function getPlataforms() {
  try {
    const { data } = await api.get<Plataform[]>('/plataforms');
    return data;
  } catch (error) {
    console.log(error);
  }
  return [];
}
