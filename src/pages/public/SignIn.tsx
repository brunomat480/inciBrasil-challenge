import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';

import logoSvg from '../../assets/logo.svg';
import secondaryLogoSvg from '../../assets/logo-secondary.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

const schemaSignInForm = z.object({
  email: z.string(),
  password: z.string(),
});

type SignInForm = z.infer<typeof schemaSignInForm>;

export function SignIn() {
  const { handleSubmit } = useForm<SignInForm>({
    resolver: zodResolver(schemaSignInForm),
  });

  return (
    <div className=" pb-14 bg-background">
      <div className="py-6 flex justify-center border-b-2">
        <img src={logoSvg} alt="" />
      </div>

      <div className="flex flex-col justify-center items-center pt-[5.74625rem]">
        <div className="w-[26.5rem] bg-white py-8 px-10 rounded-2xl">
          <div className="flex items-center w-full justify-between border-b-gray-300 border-b-[0.5px] pb-6">
            <div className="justify-between flex flex-col">
              <span className="font-semibold text-lg w-full">Fazer login</span>
              <span className="text-gray-400 text-sm">Use sua Conta INCI</span>
            </div>
            <img src={secondaryLogoSvg} alt="Logo da InciBrasil" />
          </div>

          <form noValidate className="mt-8">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col">
                <label htmlFor="email">E-mail ou telefone</label>
                <Input type="email" placeholder="email@gmail.com" id="email" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="">senha</label>
                <Input type="password" placeholder="*********" id="password" />
              </div>
            </div>
            <a href="" className="text-xs font-medium text-gray-700 mt-2">
              Esqueci a senha
            </a>

            <p className="font-medium text-sm mt-12">
              Não está no seu computador? Use o modo visitante para fazer o
              login com privacidade. <br />
              <a href="" className="underline text-blue-500">
                Saiba mais
              </a>
            </p>

            <div className="mt-2">
              <Button disabled>Entrar</Button>
            </div>
            <Link
              to="/"
              className="flex justify-center text-blue-primary font-semibold text-sm mt-[0.6475rem]"
            >
              Criar conta
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
