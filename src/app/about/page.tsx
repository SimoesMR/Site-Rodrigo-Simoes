"use client";
import Header from "@/components/header";
import {} from "react-icons/si";

const sobreMim = () => {
  return (
    <>
      <Header />
      <section>
        <div className="bg-black text-white py-2">
          <div className="container m-auto px-10 md:px-20 lg:px-52 flex flex-col items-start lg:flex-row my-12">
            <div className="flex flex-col w-full sticky lg:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                SIC PARVIS MAGNA
              </p>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                “A grandiosidade vem das pequenas coisas”
              </p>
            </div>

            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden h-full mb-28">
                  <div className="border-2-2 border-yellow-555 absolute h-full border"></div>
                  <div className="border-2-2 border-yellow-555 absolute h-full border"></div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-4/12 smd:w-6/12 md:w-0/12"></div>
                    <div className="order-1 w-full md:w-6/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-blue-300">Atualmente</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Front-End Pleno - Sinergytech
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Na SinergyTech, atuo como Desenvolvedor Front-End
                        especializado em React e a combinação essencial de HTML,
                        CSS, JS e TS. Através de interfaces envolventes,
                        trabalho para enriquecer produtos líderes,
                        constantemente impulsionando a excelência e inovação.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1  w-4/12 smd:w-6/12"></div>
                    <div className="order-1  w-full md:w-6/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-blue-300">jul/23</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Next.js: explorando o framework
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Curso ministrado pela{" "}
                        <a href="https://www.alura.com.br/">Alura</a>
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1  w-4/12 smd:w-6/12 "></div>
                    <div className="order-1 w-full md:w-6/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-blue-300">jul/23</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        React: escrevendo com Typescript
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Curso ministrado pela{" "}
                        <a href="https://www.alura.com.br/">Alura</a>
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1  w-4/12 smd:w-6/12 "></div>
                    <div className="order-1  w-full md:w-6/12 px-1 py-4">
                      <p className="mb-3 text-base text-blue-300">abr/23</p>
                      <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                        JavaScript: consumindo e tratando dados de uma API
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Curso ministrado pela{" "}
                        <a href="https://www.alura.com.br/">Alura</a>
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1  w-4/12 smd:w-6/12 "></div>
                    <div className="order-1 w-full md:w-6/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-blue-300">mar/23</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Programador Fullstack Pleno - Moovefy
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Desenvolver aplicações web responsivas e escaláveis para
                        fins internos, B2B, CRM e com APIs Rest integradas,
                        seguindo os princípios SOLID. Minha abordagem envolve a
                        utilização de C# e .NET, juntamente com o framework
                        DevExtreme, para otimização da experiência do usuário.
                        Minhas criações combinam elementos de HTML, CSS e
                        Javascript, aplicando os conceitos SOLID para garantir
                        um design moderno, funcional e de fácil manutenção.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1  w-4/12 smd:w-6/12 "></div>
                    <div className="order-1  w-full md:w-6/12 px-1 py-4">
                      <p className="mb-3 text-base text-blue-300">mai/22</p>
                      <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                        Programador Fullstack Junior - Moovefy
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Desenvolver aplicações web para fins internos, B2B, CRM.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1  w-4/12 smd:w-6/12 "></div>
                    <div className="order-1 w-full md:w-6/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-blue-300">jan/22</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Introdução ao DevOps
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Curso ministrado pelo{" "}
                        <a href="https://desenvolvedor.io/inicio">
                          desenvolvedor.io
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1  w-4/12 smd:w-6/12 "></div>
                    <div className="order-1  w-full md:w-6/12 px-1 py-4">
                      <p className="mb-3 text-base text-blue-300">jan/22</p>
                      <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                        Dominando o ASP.NET MVC Core
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Curso ministrado pelo{" "}
                        <a href="https://desenvolvedor.io/inicio">
                          desenvolvedor.io
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1  w-4/12 smd:w-6/12 "></div>
                    <div className="order-1 w-full md:w-6/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-blue-300">set/20</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Introdução ao Entity Framework Core
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Curso ministrado pelo{" "}
                        <a href="https://desenvolvedor.io/inicio">
                          desenvolvedor.io
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1  w-4/12 smd:w-6/12 "></div>
                    <div className="order-1  w-full md:w-6/12 px-1 py-4">
                      <p className="mb-3 text-base text-blue-300">
                        out/19 até mai/20
                      </p>
                      <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                        Estagiário na Moovefy
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Densevolver aplicações Web
                      </p>
                    </div>
                  </div>
                </div>
                {/* <img
                  className="mx-auto -mt-36 md:-mt-36"
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default sobreMim;
