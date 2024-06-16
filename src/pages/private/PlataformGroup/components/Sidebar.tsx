import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import arrowSvg from '../../../../assets/arrow.svg';
import configSvg from '../../../../assets/config.svg';
import faqSvg from '../../../../assets/faq.svg';
import homeSvg from '../../../../assets/home.svg';
import logoutSvg from '../../../../assets/logout.svg';
import premiumSvg from '../../../../assets/premium.svg';
import resourcesSvg from '../../../../assets/resources.svg';
import analyticsSvg from '../../../../assets/variants/analytics.svg';
import coursesSvg from '../../../../assets/variants/courses.svg';
import paymentSvg from '../../../../assets/variants/payment.svg';
import studentsSvg from '../../../../assets/variants/students.svg';
import whatsPushSvg from '../../../../assets/whats-push.svg';
import { AuthContext } from '../../../../contexts/auth/AuthContext';

export function Sidebar() {
  const [expandMenu, setExpandMenu] = useState(false);

  const { signout } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleExpandMenu() {
    setExpandMenu((state) => !state);
  }

  function handleLogout() {
    signout();
    navigate('/sign-in', { replace: true });
  }

  return (
    <aside
      data-expand-menu={expandMenu}
      className="bg-white py-6 w-20 px-[0.875rem] relative data-[expand-menu=true]:w-[13.5rem] transition-all duration-500"
    >
      <button
        type="button"
        onClick={handleExpandMenu}
        className="border-inci-blue-200 border-[1px] size-6 flex items-center justify-center rounded-full absolute -right-3"
      >
        <img
          data-expand-menu={expandMenu}
          src={arrowSvg}
          alt=""
          className="data-[expand-menu=true]:-rotate-180 transition-transform duration-500 ease-in-out"
        />
      </button>

      <div className="border-b-2 border-gray-200/75 overflow-x-hidden">
        <ul className="text-sm font-medium mb-8 text-inci-neutral-900 flex flex-col justify-center gap-4">
          <li className="py-2 px-3 rounded hover:bg-inci-neutral-100 cursor-pointer flex">
            <a href="#" className="flex items-center gap-2">
              <img src={homeSvg} alt="" />
              <span
                data-expand-menu={!expandMenu}
                className="data-[expand-menu=true]:opacity-0 opacity-100 transition-opacity duration-300 whitespace-nowrap"
              >
                Início
              </span>
            </a>
          </li>

          <li className="py-2.5 px-3.5 rounded hover:bg-inci-neutral-100 cursor-pointer flex data-[expand-menu=true]:justify-center">
            <a href="#" className="flex items-center gap-2">
              <img src={studentsSvg} alt="" />
              <span
                data-expand-menu={!expandMenu}
                className="data-[expand-menu=true]:opacity-0 opacity-100 transition-opacity duration-300 whitespace-nowrap"
              >
                Alunos
              </span>
            </a>
          </li>

          <li className="py-2.5 px-3 rounded hover:bg-inci-neutral-100 cursor-pointer flex data-[expand-menu=true]:justify-center">
            <a href="#" className="flex items-center gap-2">
              <img src={paymentSvg} alt="" />
              <span
                data-expand-menu={!expandMenu}
                className="data-[expand-menu=true]:opacity-0 opacity-100 transition-opacity duration-300 whitespace-nowrap"
              >
                Pagamentos
              </span>
            </a>
          </li>

          <li className="py-2.5 px-3 rounded hover:bg-inci-neutral-100 cursor-pointer flex data-[expand-menu=true]:justify-center">
            <a href="#" className="flex items-center gap-2">
              <img src={coursesSvg} alt="" />
              <span
                data-expand-menu={!expandMenu}
                className="data-[expand-menu=true]:opacity-0 opacity-100 transition-opacity duration-300 whitespace-nowrap"
              >
                Cursos
              </span>
            </a>
          </li>

          <li className="py-2.5 px-3 rounded hover:bg-inci-neutral-100 cursor-pointer flex data-[expand-menu=true]:justify-center">
            <a href="#" className="flex items-center gap-2">
              <img src={faqSvg} alt="" />
              <span
                data-expand-menu={!expandMenu}
                className="data-[expand-menu=true]:opacity-0 opacity-100 transition-opacity duration-300 whitespace-nowrap"
              >
                Central de Ajuda
              </span>
            </a>
          </li>

          <li className="py-2.5 px-3 rounded hover:bg-inci-neutral-100 cursor-pointer flex data-[expand-menu=true]:justify-center">
            <a href="#" className="flex items-center gap-2">
              <img src={premiumSvg} alt="" />
              <span
                data-expand-menu={!expandMenu}
                className="data-[expand-menu=true]:opacity-0 opacity-100 transition-opacity duration-300 whitespace-nowrap"
              >
                Certificado impresso
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-6 border-b-2 border-inci-neutral-100 overflow-x-hidden">
        <span className="text-sm font-medium text-primary-inci-900">
          {expandMenu
            ? 'Ferramentas'
            : 'Ferramentas'.substring(0, 2).concat('...')}
        </span>

        <ul className="text-sm font-medium mb-8 text-inci-neutral-900 flex flex-col justify-center gap-4 mt-4 ">
          <li className="py-2.5 px-3.5 rounded hover:bg-inci-neutral-100 cursor-pointer flex data-[expand-menu=true]:justify-center">
            <a href="#" className="flex items-center gap-2">
              <img src={resourcesSvg} alt="" />
              <span
                data-expand-menu={!expandMenu}
                className="data-[expand-menu=true]:opacity-0 opacity-100 transition-opacity duration-300 whitespace-nowrap"
              >
                Recursos
              </span>
            </a>
          </li>

          <li className="py-2.5 px-3.5 rounded hover:bg-inci-neutral-100 cursor-pointer flex data-[expand-menu=true]:justify-center">
            <a href="#" className="flex items-center gap-2">
              <img src={analyticsSvg} alt="" />
              <span
                data-expand-menu={!expandMenu}
                className="data-[expand-menu=true]:opacity-0 opacity-100 transition-opacity duration-300 whitespace-nowrap"
              >
                Analytics
              </span>
            </a>
          </li>

          <li className="py-2.5 px-3.5 rounded hover:bg-inci-neutral-100 cursor-pointer flex data-[expand-menu=true]:justify-center">
            <a href="#" className="flex items-center gap-2">
              <img src={whatsPushSvg} alt="" />
              <span
                data-expand-menu={!expandMenu}
                className="data-[expand-menu=true]:opacity-0 opacity-100 transition-opacity duration-300 whitespace-nowrap"
              >
                Whats Push
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="overflow-x-hidden">
        <div className="space-y-4 mt-6">
          <a
            href=""
            className="flex items-center gap-2 py-2.5 px-3.5 mx-[0.125rem] rounded hover:bg-inci-neutral-100 cursor-pointer"
          >
            <img src={configSvg} alt="" />
            <span
              data-expand-menu={!expandMenu}
              className="data-[expand-menu=true]:opacity-0 opacity-100 transition-opacity duration-300 whitespace-nowrap text-primary-inci-800 font-semibold text-sm"
            >
              Configuração
            </span>
          </a>

          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 py-2.5 px-3.5 mx-[0.125rem] rounded hover:bg-inci-neutral-100 cursor-pointer w-full"
          >
            <img src={logoutSvg} alt="" />
            <span
              data-expand-menu={!expandMenu}
              className="data-[expand-menu=true]:opacity-0 opacity-100 transition-opacity duration-300 whitespace-nowrap text-red-500 font-semibold text-sm"
            >
              Sair
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}
