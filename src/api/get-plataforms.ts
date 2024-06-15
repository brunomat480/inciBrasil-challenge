import { api } from '../libs/axios';

interface GetPlataformsResponde {
  id: number;
  name: string;
  imageUrl: string;
  url: string;
}

export async function getPlataforms() {
  const { data } = await api.get<GetPlataformsResponde[]>('/plataforms');

  return data;
}
