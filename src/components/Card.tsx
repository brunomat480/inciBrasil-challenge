import { Button } from './Button';

interface CardProps {
  name: string;
  image: string;
  url: string;
}

export function Card({ name, image, url }: CardProps) {
  return (
    <div className="border-[2px] border-inci-neutral-700/15 bg-inci-neutral-0 rounded-xl text-center py-[1.34375rem] px-5 w-64">
      <div className="flex flex-col gap-2">
        <img src={image} alt="" className="mx-auto" />
        <span className="text-inci-neutral-700">{name}</span>
      </div>

      <div className="mt-6">
        <a href={url} target="_blank" rel="noreferrer">
          <Button
            type="button"
            className="border-[2px] border-inci-neutral-300 text-inci-neutral-900 hover:bg-inci-neutral-100 hover:text-inci-neutral-900/80"
          >
            Entrar
          </Button>
        </a>
      </div>
    </div>
  );
}
