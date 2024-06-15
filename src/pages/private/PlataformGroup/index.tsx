import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';

export function PlataformGroup() {
  return (
    <div className="bg-background h-screen">
      <Navbar />
      <Sidebar />
    </div>
  );
}
