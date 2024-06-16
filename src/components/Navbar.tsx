import { Link } from 'react-router-dom';

import logoSvg from '../assets/logo.svg';
import { Button } from './Button';

export function Navbar() {
  return (
    <nav className="bg-transparent flex items-center justify-between py-7 px-16 absolute left-0 right-0">
      <div className="flex items-center gap-6">
        <img src={logoSvg} alt="Logo da InciBrasil" />

        <ul className="flex items-center gap-4 text-gray-600 text-sm">
          <li>
            <a href="#">Nossos serviços</a>
          </li>

          <li>
            <a href="#">Quem somos?</a>
          </li>

          <li>
            <a href="#">Nosso time</a>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-2">
        <div>
          <Button className="bg-primary-inci-600 text-inci-neutral-200 hover:bg-primary-inci-500">
            Trabalhe conosco
          </Button>
        </div>
        <div>
          <Link to="/sign-in">
            <Button
              type="button"
              className="bg-inci-secondary-400 text-inci-neutral-900 hover:bg hover:bg-inci-secondary-300"
            >
              Entrar
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
