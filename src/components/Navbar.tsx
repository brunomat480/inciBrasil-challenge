import logoSvg from '../assets/logo.svg';
import { Button } from './Button';


export function Navbar() {
  return (
    <nav className='bg-transparent flex items-center justify-between py-7 px-[7.4375rem] absolute left-0 right-0'>
      <div className='flex items-center gap-6'>
        <img src={logoSvg} alt="Logo da InciBrasil" />

        <ul className='flex items-center gap-4 text-gray-500'>
          <li>
            <a href="#">
              Nossos serviços
            </a>
          </li>

          <li>
            <a href="#">
              Quem somos?
            </a>
          </li>

          <li>
            <a href="#">
              Nosso time
            </a>
          </li>
        </ul>
      </div>

      <div className='flex items-center gap-2'>
        <Button>Trabalhe conosco</Button>
        <Button variant='secundary'>Entrar</Button>
      </div>
    </nav>
  );
}