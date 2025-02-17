import Image from "next/image";
import Rodrigo3d from "../../public/perfil.png";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import RedesSociais from "../components/redesSociais";
import Trabalho from "../components/trabalho";
import Header from "@/components/header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="text-center bg-black py-10 px-10 pt-32 md:px-20 lg:px-52">
        <RedesSociais />
        <h1 className="text-5xl py-2 text-blue-900 font-medium md:text-6xl">
          Rodrigo Meneghetti Simões
        </h1>
        <h2 className="text-2xl py-2 text-white md:text-3xl">
          Full Stack Developer
        </h2>
        <p className="text-md py-5 leading-8 text-white max-w-xl mx-auto md:text-xl">
        Full-stack developer with 4 years of experience, specialized in C# (.NET),
         SQL Server, HTML, CSS, JS, and React. 
         I develop web applications following best practices such as SOLID and Design Patterns, working in an agile team.
        </p>
        <div className="text-4xl flex flex-wrap md:flex-row justify-center gap-16 py-3 text-white">
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
        
        <Trabalho />
      </div>
    </>
  );
};

export default Home;
