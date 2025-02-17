"use client";
import Header from "@/components/header";
import {} from "react-icons/si";

const sobreMim = () => {
  return (
    <>
      <Header />
      <section>
        <div className="bg-black text-white py-2 pt-32">
          <div className="container m-auto px-10 md:px-20 lg:px-52 flex flex-col items-start lg:flex-row my-12">
            <div className="flex flex-col w-full sticky lg:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                SIC PARVIS MAGNA
              </p>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                “Greatness comes from the little things.”
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
                      <p className="mb-3 text-base text-blue-300">At the moment</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Full Stack Developer - Sinergytech
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        At SinergyTech, I work as a Front-End Developer specializing in React and the essential 
                        combination of HTML, CSS, JS, and TS. Additionally, 
                        I work with C# and RESTful APIs. Through engaging interfaces, 
                        I strive to enhance leading products, constantly driving excellence and innovation.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full left-timeline">
                    <div className="order-1  w-4/12 smd:w-6/12 "></div>
                    <div className="order-1  w-full md:w-6/12 px-1 py-4">
                      <p className="mb-3 text-base text-blue-300">mar/23</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">
                      Full Stack Developer - Moovefy
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Develop responsive and scalable web applications for internal use, 
                        B2B, and CRM, with integrated REST APIs, following SOLID principles. 
                        My approach involves using C# and .NET, along with the DevExtreme framework,
                        to optimize the user experience. My creations combine elements of HTML, CSS, and JavaScript, 
                        applying SOLID concepts to ensure a modern, functional, and easily maintainable design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default sobreMim;
