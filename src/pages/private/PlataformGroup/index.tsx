import { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { Platform } from '../../../@types/platforms/Platform';
import { Tool } from '../../../@types/tools/Tools';
import { Card } from '../../../components/Card';
import { getPlatforms } from '../../../services/plataforms/get-platforms';
import { getTools } from '../../../services/tools/get-tools';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';

export function PlatformGroup() {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [tools, setTools] = useState<Tool[]>([]);

  const [searchPlatform, setSearchPlatform] = useState('');

  useEffect(() => {
    async function fetch() {
      const [platformsAll, toolsAll] = await Promise.all([
        getPlatforms(),
        getTools(),
      ]);

      setPlatforms(platformsAll);
      setTools(toolsAll);
    }

    fetch();
  }, []);

  const filteredPlatform = useMemo(
    () =>
      platforms.filter((plataform) =>
        plataform.name.toLowerCase().startsWith(searchPlatform.toLowerCase()),
      ),
    [platforms, searchPlatform],
  );

  return (
    <div className="bg-background h-screen">
      <Helmet title="Plataformas" />

      <Navbar setSearchPlatform={setSearchPlatform} />
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
              {filteredPlatform.map((platform) => (
                <Card
                  key={platform.id}
                  name={platform.name}
                  image={platform.imageUrl}
                  url={platform.url}
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
