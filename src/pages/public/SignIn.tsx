import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';

import logoSvg from '../../assets/logo.svg';
import secondaryLogoSvg from '../../assets/logo-secondary.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

const schemaSignInForm = z.object({
  email: z.string().min(1, 'Informe o e-mail').email('E-mail inválido'),
  password: z.string().min(1, 'Informe a senha'),
});

type SignInForm = z.infer<typeof schemaSignInForm>;

export function SignIn() {
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
    reset,
    formState: { isSubmitting },
  } = methods;

  function handleSignIn({ email, password }: SignInForm) {
    console.log({ email, password });

    reset({
      email: '',
      password: '',
    });
  }

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
                  <label htmlFor="">senha</label>
                  <Input
                    nameField="password"
                    type="password"
                    placeholder="*********"
                    id="password"
                  />
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
                <Button className="bg-blue-primary text-white text-sm">
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
      </div>
    </div>
  );
}
