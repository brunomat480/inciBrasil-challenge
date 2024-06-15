import soeducadorLogoSvg from '../assets/soeducador-logo.svg';
import { Button } from './Button';

interface CardProps {
  name?: string;
  image?: string;
}

export function Card({
  name = 'soeducador',
  image = soeducadorLogoSvg,
}: CardProps) {
  return (
    <div className="border-[1px] border-gray-200 bg-white rounded-xl text-center py-[1.34375rem] px-5 w-64">
      <div className="flex flex-col gap-2">
        <img src={image} alt="" className="mx-auto" />
        <span className="text-sm text-gray-400">{name}</span>
      </div>

      <div className="mt-6">
        <Button
          type="button"
          className="border-[1.5px] border-gray-200 text-gray-500"
        >
          Entrar
        </Button>
      </div>
    </div>
  );
}