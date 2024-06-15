import { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { Plataform } from '../../../@types/plataforms/Plataform';
import { Tool } from '../../../@types/tools/Tools';
import { Card } from '../../../components/Card';
import { getPlataforms } from '../../../services/get-plataforms';
import { getTools } from '../../../services/get-tools';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';

export function PlataformGroup() {
  const [plataforms, setPlataforms] = useState<Plataform[]>([]);
  const [tools, setTools] = useState<Tool[]>([]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function fetch() {
      const [plataformsAll, toolsAll] = await Promise.all([
        getPlataforms(),
        getTools(),
      ]);

      setPlataforms(plataformsAll);
      setTools(toolsAll);
    }

    fetch();
  }, []);

  const filteredPlataform = useMemo(
    () =>
      plataforms.filter((contact) =>
        contact.name.toLowerCase().startsWith(filter.toLowerCase()),
      ),
    [plataforms, filter],
  );

  return (
    <div className="bg-background h-screen">
      <Helmet title="Plataformas" />

      <Navbar setFilter={setFilter} />
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
              {filteredPlataform.map((plataform) => (
                <Card
                  key={plataform.id}
                  name={plataform.name}
                  image={plataform.imageUrl}
                  url={plataform.url}
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
              {tools.map((tool) => (
                <Card
                  key={tool.name}
                  name={tool.name}
                  image={tool.imageUrl}
                  url={tool.url}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
