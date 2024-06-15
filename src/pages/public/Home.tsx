import rangeSvg from '../../assets/range.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Navbar } from '../../components/Navbar';

export function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="min-h-screen grid grid-cols-2 pt-[10.28125rem]">
        <div className="ml-16 mr-4 w-[34rem]">
          <h1 className="text-5xl leading-snug text-blue-primary font-medium">
            Preparando Pessoas{' '}
            <span className="font-semibold">para o Futuro</span>
          </h1>

          <div className="mt-4">
            <p className="text-lg text-gray-600 font-medium">
              Soluções educacionais para a formação e desenvolvimento de pessoas
              e instituições.
            </p>

            <div className="mt-4">
              <form className="flex items-center gap-2">
                {/* <Input
                  className="flex flex-1 placeholder:text-gray-700 placeholder:font-medium"
                  placeholder="seuemail@gmail.com"
                /> */}

                <div>
                  <Button
                    type="submit"
                    className="bg-blue-primary text-white text-sm"
                  >
                    Entrar em contato
                  </Button>
                </div>
              </form>

              <div className="flex items-center gap-2">
                <img src={rangeSvg} alt="" />

                <div className="flex flex-col mt-6">
                  <span className="font-semibold text-blue-primary">
                    +11,8 mi😯🤯
                  </span>
                  <span className="text-blue-secondary font-medium">
                    de Alcance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-image-home bg-no-repeat bg-cover -mt-52 -mr-[2.7rem]"></div>
      </div>
    </div>
  );
}
