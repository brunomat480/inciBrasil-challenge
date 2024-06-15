import { zodResolver } from '@hookform/resolvers/zod';
import { Helmet } from 'react-helmet-async';
import { FormProvider, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';

import logoSvg from '../../assets/logo.svg';
import secondaryLogoSvg from '../../assets/logo-secondary.svg';
import spinnerSvg from '../../assets/spinner.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

const schemaSignInForm = z.object({
  email: z.string().min(1, 'Informe o e-mail').email('E-mail inválido'),
  password: z.string().min(1, 'Informe a senha'),
});

type SignInForm = z.infer<typeof schemaSignInForm>;

export function SignIn() {
  const navigate = useNavigate();

  const methods = useForm<SignInForm>({
    defaultValues: {
      email: '',
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

  async function handleSignIn({ email, password }: SignInForm) {
    await new Promise((resolver) => setTimeout(resolver, 2000));

    console.log({ email, password });

    navigate('/plataforms');
  }

  const emailInput = watch('email');
  const passwordInput = watch('password');
  const isSubmitDesabled = emailInput && passwordInput;

  return (
    <div className="mx-auto container">
      <Helmet title="Entrar" />

      <div className="py-6 flex justify-center border-b-2">
        <img src={logoSvg} alt="" />
      </div>
      {isSubmitting ? (
        <div className="flex items-center justify-center mt-36">
          <div className="bg-white py-8 w-[11.5625rem] flex flex-col gap-6 rounded-[10px]">
            <img src={spinnerSvg} alt="" className="animate-spin mx-auto" />
            <span className="font-medium text-center">Fazendo login...</span>
          </div>
        </div>
      ) : (
        <div className="w-[26.5rem] bg-white py-8 px-10 rounded-2xl mx-auto mt-[7.7125rem]">
          <div className="flex items-center w-full justify-between border-b-gray-300 border-b-[0.5px] pb-6">
            <div className="justify-between flex flex-col">
              <span className="font-semibold text-lg w-full">Fazer login</span>
              <span className="text-gray-400 text-sm">Use sua Conta INCI</span>
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
                  <label htmlFor="email">E-mail ou telefone</label>
                  <Input
                    nameField="email"
                    type="email"
                    placeholder="email@gmail.com"
                    id="email"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="">Senha</label>
                  <Input
                    nameField="password"
                    type="password"
                    placeholder="*********"
                    id="password"
                  />
                </div>
              </div>
              <a
                href=""
                className="text-xs font-medium text-gray-700 mt-2 hover:underline"
              >
                Esqueci a senha
              </a>

              <p className="font-medium text-sm mt-12">
                Não está no seu computador? Use o modo visitante para fazer o
                login com privacidade. <br />
                <a
                  href=""
                  className="underline text-blue-500 hover:text-blue-primary"
                >
                  Saiba mais
                </a>
              </p>

              <div className="mt-2">
                <Button
                  disabled={!isSubmitDesabled || isSubmitting}
                  className="bg-blue-primary text-white text-sm"
                >
                  Entrar
                </Button>
              </div>
              <Link
                to="/"
                className="flex justify-center text-blue-primary font-semibold text-sm mt-[0.6475rem]"
              >
                Criar conta
              </Link>
            </form>
          </FormProvider>
        </div>
      )}

      <div className="flex flex-col justify-center items-center pt-[5.74625rem]"></div>
    </div>
  );
}
