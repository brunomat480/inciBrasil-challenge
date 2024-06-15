import analyticsSvg from '../../../../assets/analytics.svg';
import arrowSvg from '../../../../assets/arrow.svg';
import configSvg from '../../../../assets/config.svg';
import faqSvg from '../../../../assets/faq.svg';
import homeSvg from '../../../../assets/home.svg';
import logoutSvg from '../../../../assets/logout.svg';
import premiumSvg from '../../../../assets/premium.svg';
import resourcesSvg from '../../../../assets/resources.svg';
import coursesSvg from '../../../../assets/variants/courses.svg';
import paymentSvg from '../../../../assets/variants/payment.svg';
import studentsSvg from '../../../../assets/variants/students.svg';
import whatsPushSvg from '../../../../assets/whats-push.svg';

export function Sidebar() {
  return (
    <aside className="bg-white w-[13.5rem] py-6 px-[0.875rem] relative">
      <button
        type="button"
        className="border-blue-secondary border-[1px] size-6 flex items-center justify-center rounded-full absolute -right-3"
      >
        <img src={arrowSvg} alt="" />
      </button>

      <div className="border-b-2 border-gray-200/75">
        <ul className="text-xs font-medium mb-8 text-gray-700 flex flex-col justify-center gap-4">
          <li className="py-2 px-2 rounded hover:bg-gray-300/40 cursor-pointer">
            <a href="#" className="flex items-center gap-2">
              <img src={homeSvg} alt="" />
              Início
            </a>
          </li>

          <li className="py-2 px-2 rounded hover:bg-gray-300/40 cursor-pointer">
            <a href="#" className="flex items-center gap-2">
              <img src={studentsSvg} alt="" />
              Alunos
            </a>
          </li>

          <li className="py-2 px-2 rounded hover:bg-gray-300/40 cursor-pointer">
            <a href="#" className="flex items-center gap-2">
              <img src={paymentSvg} alt="" />
              Pagamentos
            </a>
          </li>

          <li className="py-2 px-2 rounded hover:bg-gray-300/40 cursor-pointer">
            <a href="#" className="flex items-center gap-2">
              <img src={coursesSvg} alt="" />
              Cursos
            </a>
          </li>

          <li className="py-2 px-2 rounded hover:bg-gray-300/40 cursor-pointer">
            <a href="#" className="flex items-center gap-2">
              <img src={faqSvg} alt="" />
              Central de Ajuda
            </a>
          </li>

          <li className="py-2 px-2 rounded hover:bg-gray-300/40 cursor-pointer">
            <a href="#" className="flex items-center gap-2">
              <img src={premiumSvg} alt="" />
              Certificado impresso
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-6 border-b-2 border-gray-200/75">
        <span className="text-sm font-medium">Ferramentas</span>

        <ul className="text-xs font-medium mb-8 text-gray-700 flex flex-col justify-center gap-4 mt-4">
          <li className="py-2 px-2 rounded hover:bg-gray-300/40 cursor-pointer">
            <a href="#" className="flex items-center gap-2">
              <img src={resourcesSvg} alt="" />
              Recursos
            </a>
          </li>

          <li className="py-2 px-2 rounded hover:bg-gray-300/40 cursor-pointer">
            <a href="#" className="flex items-center gap-2">
              <img src={analyticsSvg} alt="" />
              Analytics
            </a>
          </li>

          <li className="py-2 px-2 rounded hover:bg-gray-300/40 cursor-pointer">
            <a href="#" className="flex items-center gap-2">
              <img src={whatsPushSvg} alt="" />
              Whats Push
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-52">
        <div className="space-y-4 mt-6">
          <a
            href=""
            className="flex items-center gap-2 py-2 mx-[0.125rem] px-2 rounded hover:bg-gray-300/40 cursor-pointer"
          >
            <img src={configSvg} alt="" />
            Configuração
          </a>

          <button
            type="button"
            className="flex items-center gap-2 py-2 mx-[0.125rem] px-2 rounded hover:bg-gray-300/40 cursor-pointer w-full"
          >
            <img src={logoutSvg} alt="" />
            Sair
          </button>
        </div>
      </div>
    </aside>
  );
}
