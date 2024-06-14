import { Outlet } from 'react-router-dom';

import analyticsSvg from '../../../assets/analytics.svg';
import course from '../../../assets/course.svg';
import logoSvg from '../../../assets/logo.svg';
import studentSvg from '../../../assets/student.svg';

export function PlataformLayout() {
  return (
    <div>
      <nav className="bg-blue-primary">
        <img src={logoSvg} alt="" />

        <div>
          <span className="text-white font-medium">
            Suas funções mais utilizadas:
          </span>
          <ul className="flex items-center gap-6 text-white font-medium">
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
          </ul>
        </div>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
