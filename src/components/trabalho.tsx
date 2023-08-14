import Card from "./cardTrabalho";
import logoMooveft from "../../public/logoMoovefy.jpg";
import logoSinergytech from "../../public/logoSinergyTech.jpg";

const Trabalho = () => {
  return (
    <section>
      <h3 className="text-3xl py-1 text-blue-900 dark:text-white ">Trabalho</h3>
      <div className="max-w-2xl m-auto lg:flex gap-10 sm:max-w-5">
        <Card
          imagem={logoSinergytech}
          titulo="SinergyTech"
          ano="(Atual)"
          cargo="Desenvolvedor Front-end Pleno"
          texto="Responsável pelo desenvolvimento e
          manutenção de aplicações web utilizando
          linguagem HTML, CSS, Bootstrap,
          Javascript, JQuery e React.
          "
        />
        <Card
          imagem={logoMooveft}
          titulo="Moovefy"
          ano="(2019 - 2023)"
          cargo="Desenvolvedor Full Stack Pleno"
          texto="Desenvolvedor Full stack de aplicações
          CRM e B2B utilizando C#, .Net Core,
          Javascript e DevExtreme. Fui responsável
          pela publicação de versões e manutenção
          das aplicações e bandos de dados da
          Azure"
        />
      </div>
    </section>
  );
};

export default Trabalho;
