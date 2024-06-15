import analyticsSvg from '../../../../assets/analytics.svg';
import avatarSvg from '../../../../assets/avatar.svg';
import course from '../../../../assets/course.svg';
import logoSvg from '../../../../assets/logo-tertiary.svg';
import paymentSvg from '../../../../assets/payment.svg';
import studentSvg from '../../../../assets/student.svg';

export function Navbar() {
  return (
    <nav className="bg-blue-primary flex items-center justify-between py-5 px-12">
      <div className="flex items-center gap-12">
        <img src={logoSvg} alt="" />

        <div className="space-y-2">
          <span className="text-white font-medium">
            Suas funções mais utilizadas:
          </span>
          <ul className="flex items-center gap-6 text-white font-semibold">
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
        <div className="w-[18.75rem]">
          <input
            type="text"
            className="h-10 border-[0.1px] border-gray-300 rounded pl-2 outline-none w-full"
          />
        </div>

        <div>
          <img src={avatarSvg} alt="" />
        </div>
      </div>
    </nav>
  );
}
