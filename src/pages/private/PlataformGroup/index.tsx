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
    image: '/tool/google-drive-logo.svg',
  },
  {
    name: 'Asana',
    image: '/tool/jira-logo.svg',
  },
  {
    name: 'Google Drive',
    image: '/tool/sana-logo.svg',
  },
];

export function PlataformGroup() {
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
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} />
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
