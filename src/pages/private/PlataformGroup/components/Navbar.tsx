import { ChangeEvent } from 'react';

import analyticsSvg from '../../../../assets/analytics.svg';
import avatarSvg from '../../../../assets/avatar.svg';
import course from '../../../../assets/course.svg';
import logoSvg from '../../../../assets/logo-tertiary.svg';
import magnifyingGlassSvg from '../../../../assets/magnifying-glass.svg';
import paymentSvg from '../../../../assets/payment.svg';
import studentSvg from '../../../../assets/student.svg';

interface NavbarProps {
  setSearchPlatform: (value: string) => void;
}

export function Navbar({ setSearchPlatform }: NavbarProps) {
  function handleFilter(event: ChangeEvent<HTMLInputElement>) {
    setSearchPlatform(event.target.value);
  }

  return (
    <nav className="bg-primary-inci-600 flex items-center justify-between py-5 px-12">
      <div className="flex items-center gap-12">
        <img src={logoSvg} alt="" />

        <div className="space-y-1">
          <span className="text-inci-neutral-100">
            Suas funções mais utilizadas:
          </span>
          <ul className="flex items-center gap-6 text-inci-neutral-100 font-semibold text-sm">
            <li>
              <a href="" className="flex items-center gap-[2px]">
                <img src={analyticsSvg} alt="" />
                Analytics
              </a>
            </li>

            <li>
              <a href="" className="flex items-center gap-[2px]">
                <img src={course} alt="" />
                Cursos
              </a>
            </li>

            <li>
              <a href="" className="flex items-center gap-[2px]">
                <img src={studentSvg} alt="" />
                Alunos
              </a>
            </li>

            <li>
              <a href="" className="flex items-center gap-[2px]">
                <img src={paymentSvg} alt="" />
                Pagamentos
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center w-[18.75rem] h-8 bg-inci-neutral-0 rounded border-[0.1px] border-gray-300">
          <div className="px-2">
            <img src={magnifyingGlassSvg} alt="" />
          </div>
          <input
            type="text"
            onChange={handleFilter}
            placeholder="Pesquisar"
            className="rounded outline-none w-full h-8 bg-transparent text-sm placeholder:text-inci-neutral-700"
          />
        </div>

        <div>
          <img src={avatarSvg} alt="" />
        </div>
      </div>
    </nav>
  );
}
