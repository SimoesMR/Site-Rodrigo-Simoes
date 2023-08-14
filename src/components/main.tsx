import Image from "next/image";
import Rodrigo3d from "../../public/perfil3d3.png";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import RedesSociais from "./redesSociais";
import Trabalho from "./trabalho";

const Main = () => {
  return (
    <div className="text-center mt-12 py-10 bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
      <h2 className="text-5xl py-2 text-blue-900 font-medium dark:text-blue-400 md:text-6xl">
        Rodrigo Meneghetti Simões
      </h2>
      <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
        Desenvolvedor Full Stack
      </h3>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
        Programador full stack há 4 anos, especializado em C# (.Net), SQL
        Server, HTML, CSS, JS e React. Desenvolvo aplicações Web seguindo boas
        práticas como SOLID e Design Patterns, em equipe ágil.
      </p>
      <div className="text-4xl flex flex-wrap md:flex-row justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <SiHtml5 title="HTML" />
        <SiCss3 title="CSS" />
        <SiJavascript title="JavaScript" />
        <SiCsharp title="C#" />
        <SiMicrosoftsqlserver title="SQL Server" />
        <SiReact title="React" />
        <SiTypescript title="TypeScript" />
      </div>
      <div className="mx-auto bg-gradient-to-b from-blue-900 rounded-full w-72 h-72 relative overflow-hidden mt-3 md:h-96 md:w-96">
        <Image
          src={Rodrigo3d}
          alt="Avatar Rodrigo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <RedesSociais />
      <Trabalho />
    </div>
  );
};

export default Main;
