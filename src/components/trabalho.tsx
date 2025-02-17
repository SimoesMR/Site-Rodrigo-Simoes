import Card from "./cardTrabalho";
import logoMooveft from "../../public/logoMoovefy.jpg";
import logoSinergytech from "../../public/logoSinergyTech.jpg";

const Trabalho = () => {
  return (
    <section>
      <h3 className="text-3xl py-1 text-blue-900">
        Experience
      </h3>
      <div className="max-w-2xl m-auto lg:flex gap-10 sm:max-w-5">
        <Card
          imagem={logoSinergytech}
          titulo="SinergyTech"
          ano="(Atual)"
          cargo="Full Stack Developer"
          texto="Responsible for the development and maintenance of web applications using 
          HTML, CSS, Bootstrap, JavaScript, jQuery, and React. Additionally, 
          I work as a full-stack developer, building and maintaining backend services with C# (.NET) 
          and developing RESTful APIs to ensure efficient communication between frontend and backend systems.
          "
        />
        <Card
          imagem={logoMooveft}
          titulo="Moovefy"
          ano="(2019 - 2023)"
          cargo="Full Stack Developer"
          texto="Full-stack developer of CRM and B2B applications using C#, 
          .NET Core, JavaScript, and DevExtreme. 
          I was responsible for version releases and the maintenance of applications and databases in Azure."
        />
      </div>
    </section>
  );
};

export default Trabalho;
