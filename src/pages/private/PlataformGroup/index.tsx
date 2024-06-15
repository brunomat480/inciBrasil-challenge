import { useEffect, useState } from 'react';

import { getPlataforms } from '../../../api/get-plataforms';
import { Card } from '../../../components/Card';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';

const toolList = [
  {
    name: 'E-mail',
    image: '/tool/gmail-logo.svg',
  },
  {
    name: 'Jira',
    image: '/tool/jira-logo.svg',
  },
  {
    name: 'Asana',
    image: '/tool/sana-logo.svg',
  },
  {
    name: 'Google Drive',
    image: '/tool/google-drive-logo.svg',
  },
];

interface Plataform {
  id: number;
  name: string;
  imgUrl: string;
}

export function PlataformGroup() {
  const [plataforms, setPlataforms] = useState<Plataform[]>([]);

  useEffect(() => {
    async function fetch() {
      const plataformsAll = await getPlataforms();

      setPlataforms(plataformsAll);
    }

    fetch();
  }, []);

  return (
    <div className="bg-background h-screen">
      <Navbar />
      <main className="flex">
        <Sidebar />
        <div className="mx-[4.5rem] mt-4">
          <section className="pb-6 border-b-[2px] border-gray-300/40">
            <header>
              <h1 className="font-medium text-blue-primary">
                Nossas Plataformas
              </h1>
              <small className="text-sm text-gray-400">
                Escolha o ícone para entrar
              </small>
            </header>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {plataforms.map((plataform) => (
                <Card
                  key={plataform.id}
                  name={plataform.name}
                  image={plataform.imgUrl}
                />
              ))}
            </div>
          </section>

          <section className="mt-6">
            <header>
              <h1 className="font-medium text-blue-primary ">
                Principais Ferramentas
              </h1>
              <small className="text-sm text-gray-400">
                Escolha o ícone para entrar
              </small>
            </header>

            <div className="mt-4 mb-[4.5rem] flex flex-wrap gap-x-4 gap-y-2">
              {toolList.map((tool) => (
                <Card key={tool.name} name={tool.name} image={tool.image} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
