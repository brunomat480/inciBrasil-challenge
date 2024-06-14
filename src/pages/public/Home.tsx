import { Button } from '../../components/Button';
import { Navbar } from '../../components/Navbar';

export function Home() {
  return (
    <div className='relative'>
      <Navbar />
      <div className='min-h-screen grid grid-cols-2 pt-36'>
        <div>
          <h1 className='text-[3.5rem] text-blue-primary font-medium'>Preparando Pessoas <span className='font-semibold'>para o Futuro</span></h1>

          <div>
            <p>
              Soluções educacionais para a formação e desenvolvimento  de pessoas e instituições.
            </p>

            <div>
              <input type="text" placeholder='seuemail@gmail.com' />
              <Button>Entrar em contato</Button>
            </div>
          </div>
        </div>

        <div className='bg-blue-primary'>

        </div>
      </div>
    </div>
  )
}