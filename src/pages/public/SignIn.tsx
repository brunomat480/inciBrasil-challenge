import { Link } from 'react-router-dom';
import logoSvg from '../../assets/logo-secondary.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function SignIn() {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-[#F8F9FA]'>
      <div className='w-[26.5rem] bg-white py-8 px-10 rounded-2xl'>
        <div className='flex items-center gap-[10.913125rem] border-b-gray-400 border-b-[0.5px] pb-6'>
          <div className='justify-between flex flex-col'>
            <span className='font-semibold text-sm w-full'>
              Fazer login
            </span>
            <span className='text-gray-400 text-sm'>
              Use sua Conta INCI
            </span>
          </div>
          <img src={logoSvg} alt="Logo da InciBrasil" />
        </div>

        <form className='mt-8'>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col'>
              <label htmlFor="email">E-mail ou telefone</label>
              <Input placeholder='email@gmail.com' id='email' />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="">E-mail ou telefone</label>
              <Input placeholder='*********' id='password' />
            </div>
          </div>
          <a href="" className='text-xs font-medium text-gray-500 mt-2'>Esqueci a senha</a>

          <p className='font-medium text-sm mt-12'>
            Não está no seu computador? Use o modo visitante para fazer o login com privacidade. <br />
            <a href="" className='underline text-blue-500'>Saiba mais</a>
          </p>

          <div className='mt-2'>
            <Button disabled>Entrar</Button>
          </div>
          <Link to='/' className='flex justify-center text-blue-primary font-medium text-sm mt-4'>Criar conta</Link>
        </form>
      </div>
    </div>

  )
}