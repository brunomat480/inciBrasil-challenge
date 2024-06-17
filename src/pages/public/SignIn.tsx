import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FormProvider, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { z } from 'zod';

import logoSvg from '../../assets/logo.svg';
import secondaryLogoSvg from '../../assets/logo-secondary.svg';
import spinnerSvg from '../../assets/spinner.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { AuthContext } from '../../contexts/auth/AuthContext';
import delay from '../../utils/delay';

const schemaSignInForm = z.object({
  identifier: z.string().refine((value) => {
    return z.string().email().safeParse(value).success || /^\d+$/.test(value);
  }, 'E-mail ou número de telefone inválido'),
  password: z.string().min(1, 'Informe a senha'),
});

type SignInForm = z.infer<typeof schemaSignInForm>;

export function SignIn() {
  const [storageData, setStorageData] = useState(
    localStorage.getItem('authToken'),
  );

  const { signin } = useContext(AuthContext);
  const navigate = useNavigate();

  const methods = useForm<SignInForm>({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: zodResolver(schemaSignInForm),
    mode: 'onChange',
  });

  const {
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = methods;

  async function handleSignIn({ identifier, password }: SignInForm) {
    await delay(2000);

    if (identifier && password) {
      try {
        const isLogged = await signin({ identifier, password });

        if (isLogged) {
          navigate('/platforms', { replace: true });
        }
      } catch {
        toast.error('Usuário ou senha incorretos');
      }
    }
  }

  const emailInput = watch('identifier');
  const passwordInput = watch('password');
  const isSubmitDesabled = emailInput && passwordInput;

  useEffect(() => {
    setStorageData(localStorage.getItem('authToken'));

    if (storageData) {
      navigate('/platforms', { replace: true });
    }
  }, []);

  return (
    <>
      <Helmet title="Entrar" />

      <header className="py-6 flex justify-center border-b-2 border-inci-neutral-600">
        <img src={logoSvg} alt="" />
      </header>

      <div className="mx-auto container">
        {isSubmitting ? (
          <div className="flex items-center justify-center mt-36">
            <div className="bg-inci-neutral-0 py-8 w-[11.5625rem] flex flex-col gap-6 rounded-[10px] border-[1px] border-gray-600/15">
              <img src={spinnerSvg} alt="" className="animate-spin mx-auto" />
              <span className="font-medium text-center text-inci-neutral-1000">
                Fazendo login...
              </span>
            </div>
          </div>
        ) : (
          <>
            <div className="w-[26.5rem] bg-inci-neutral-0 py-8 px-10 rounded-2xl mx-auto mt-[7.7125rem] border-[1px] border-gray-600/15">
              <div className="flex items-center w-full justify-between border-b-gray-300 border-b-[0.5px] pb-6">
                <div className="justify-between flex flex-col">
                  <span className="font-semibold text-lg text-inci-neutral-1100 w-full">
                    Fazer login
                  </span>
                  <span className="text-gray-400 text-sm">
                    Use sua Conta INCI
                  </span>
                </div>
                <img src={secondaryLogoSvg} alt="Logo da InciBrasil" />
              </div>

              <FormProvider {...methods}>
                <form
                  onSubmit={handleSubmit(handleSignIn)}
                  noValidate
                  className="mt-8"
                >
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col">
                      <label
                        htmlFor="email"
                        className="-mb-2.5 ml-4 z-10 text-inci-neutral-900 text-sm font-bold bg-inci-neutral-0 w-32 text-center"
                      >
                        E-mail ou telefone
                      </label>
                      <Input nameField="identifier" type="text" id="email" />
                    </div>

                    <div className="flex flex-col">
                      <label
                        htmlFor="password"
                        className="-mb-2.5 ml-4 z-10 text-inci-neutral-900 text-sm font-bold bg-inci-neutral-0 w-14 text-center"
                      >
                        Senha
                      </label>
                      <Input
                        nameField="password"
                        type="password"
                        id="password"
                      />
                    </div>
                  </div>
                  <a
                    href=""
                    className="text-xs font-medium text-inci-neutral-900 mt-2 hover:underline"
                  >
                    Esqueci a senha
                  </a>

                  <p className="font-medium text-sm mt-12 text-inci-neutral-1000">
                    Não está no seu computador? Use o modo visitante para fazer
                    o login com privacidade. <br />
                    <a
                      href=""
                      className="underline text-inci-blue-400 hover:text-blue-primary"
                    >
                      Saiba mais
                    </a>
                  </p>

                  <div className="mt-2">
                    <Button
                      disabled={!isSubmitDesabled || isSubmitting}
                      className="bg-primary-inci-600 text-inci-neutral-200 hover:brightness-125"
                    >
                      Entrar
                    </Button>
                  </div>
                  <Link
                    to="/"
                    className="flex justify-center items-center hover:underline text-primary-inci-500 font-semibold text-sm mt-[0.6475rem]"
                  >
                    Criar conta
                  </Link>
                </form>
              </FormProvider>
            </div>

            <ul className="flex items-center justify-center gap-4 text-sm font-medium text-inci-neutral-900 mt-6">
              <li>
                <a href="#">Ajuda</a>
              </li>
              <li>
                <a href="#">Privacidade</a>
              </li>
              <li>
                <a href="#">Termos</a>
              </li>
            </ul>
          </>
        )}
      </div>

      <div className="flex flex-col justify-center items-center pt-[5.74625rem]"></div>
    </>
  );
}
