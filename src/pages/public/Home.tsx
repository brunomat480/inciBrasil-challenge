import { zodResolver } from '@hookform/resolvers/zod';
import { Helmet } from 'react-helmet-async';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import rangeSvg from '../../assets/range.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Navbar } from '../../components/Navbar';
import delay from '../../utils/delay';

const schemaContactForm = z.object({
  email: z.string().min(1, 'Informe o e-mail').email('E-mail inválido'),
});

type ContactForm = z.infer<typeof schemaContactForm>;

export function Home() {
  const methods = useForm<ContactForm>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(schemaContactForm),
    mode: 'onChange',
  });

  const {
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitting },
  } = methods;

  async function handleSendEmail({ email }: ContactForm) {
    await delay(2000);

    console.log({ email });

    reset({
      email: '',
    });
  }

  const emailInput = watch('email');
  const isSubmitDesabled = !emailInput;

  return (
    <div className="overflow-x-hidden">
      <Helmet title="Home" />
      <Navbar />
      <div className="min-h-screen grid grid-cols-2 pt-[10.28125rem]">
        <div className="ml-16 mr-4 w-[34rem]">
          <h1 className="text-[3.5rem] leading-snug text-primary-inci-500 font-medium">
            Preparando Pessoas <span className="font-bold">para o Futuro</span>
          </h1>

          <div className="mt-4">
            <p className="text-lg text-gray-600 font-medium">
              Soluções educacionais para a formação e desenvolvimento de pessoas
              e instituições.
            </p>

            <div className="mt-4">
              <FormProvider {...methods}>
                <form
                  onSubmit={handleSubmit(handleSendEmail)}
                  className="flex items-start gap-2"
                >
                  <div className="flex flex-1 flex-col">
                    <Input
                      nameField="email"
                      className="w-full placeholder:text-gray-600"
                      placeholder="seuemail@gmail.com"
                    />
                  </div>

                  <div>
                    <Button
                      type="submit"
                      disabled={isSubmitDesabled || isSubmitting}
                      className="bg-primary-inci-600 text-inci-neutral-200 hover:brightness-125 text-sm"
                    >
                      Entrar em contato
                    </Button>
                  </div>
                </form>
              </FormProvider>

              <div className="flex items-center gap-2 mt-6">
                <img src={rangeSvg} alt="" />

                <div className="flex flex-col ">
                  <span className="font-bold text-primary-inci-500">
                    +11,8 mi😯🤯
                  </span>
                  <span className="text-inci-blue-500">de Alcance</span>
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
