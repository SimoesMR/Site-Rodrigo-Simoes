import Image, { StaticImageData } from "next/image";

interface cardTrabalhoProps {
  titulo: string;
  cargo: string;
  texto: string;
  ano: string;
  imagem: StaticImageData;
}

const Card: React.FC<cardTrabalhoProps> = ({
  titulo,
  cargo,
  texto,
  ano,
  imagem,
}) => {
  return (
    <div className="text-center shadow-lg p-2 pt-5 rounded-xl my-10 flex-1">
      <div className="h-auto overflow-hidden">
        <Image
          src={imagem}
          alt="img"
          title="img"
          className="object-cover w-40 h-40 mx-auto"
        />
      </div>
      <div className="w-full p-4 justify-start flex flex-col">
        <h2 className="text-lg font-bold text-blue-900">{titulo}</h2>
        <p>{ano}</p>
        <h3 className="text-lg font-medium pb-2 text-blue-700">{cargo}</h3>
        <p className="my-4 text-justify">{texto}</p>
      </div>
    </div>
  );
};

export default Card;
