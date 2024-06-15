import { api } from '../libs/axios';

interface GetPlataformsResponde {
  id: number;
  name: string;
  imgUrl: string;
}

export async function getPlataforms() {
  const { data } = await api.get<GetPlataformsResponde[]>('/plataforms');

  return data;
}
