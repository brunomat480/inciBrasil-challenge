import { api } from '../libs/axios';

interface GetToolsResponde {
  id: number;
  name: string;
  imageUrl: string;
  url: string;
}

export async function getTools() {
  const { data } = await api.get<GetToolsResponde[]>('/tools');

  return data;
}
