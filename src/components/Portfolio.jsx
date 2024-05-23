import React from "react";
import arraid from "../assets/portfolio/arraid.png";
import cartonazilal from "../assets/portfolio/carton.png";
import mremballage from "../assets/portfolio/mr.png";
import rgpub from "../assets/portfolio/rgp.png";
import gestionautoecole from "../assets/portfolio/gestionautoecole.png";
import codeecole from "../assets/portfolio/codeecole.png";
import oyamacar from "../assets/portfolio/oyamacar.png";
import bigstore from "../assets/portfolio/bigstore.png";
import ellamarket from "../assets/portfolio/ellamarket.png";
import shop from "../assets/portfolio/shop.png";

const Portfolio = () => {
  const portfolios = [
    {
        id: 1,
        src: arraid,
        title:"Groupe Arraid (Laravel + Jquery)",
        href:'https://www.groupearraid.com/'
    },
    {
        id: 2,
        src: bigstore,
        title:"Ecommerce (Laravel + Vue)",
        href:'https://ecommerce-web-app-a0346.web.app/'
    },
    {
        id: 3,
        src: ellamarket,
        title:"Ellamarket (Laravel + Vue)",
        href:'https://ellamarket-web-app.web.app/'
    },
    {
        id: 4,
        src: cartonazilal,
        title:"Carton Azilal (Laravel + Jquery)",
        href:'https://cartonazilal.com/'
    },
    {
        id: 5,
        src: mremballage,
        title:"Mr Emballage (Laravel + Jquery)",
        href:'http://mr.yancom-creation.com/'
    },
    {
        id: 6,
        src: rgpub,
        title:"Rgpub (Laravel + Jquery)",
        href:'http://rgp.yancom-creation.com/'
    },
    {
        id: 7,
        src: gestionautoecole,
        title:"Gestion Auto Ecole (Laravel + Jquery)",
        href:'https://gestionautoecole.com'
    },
    {
        id: 8,
        src: codeecole,
        title:"Code Ecole (Laravel + Jquery)",
        href:'http://ecolecode.yancom-creation.com/'
    },
    {
        id: 9,
        src: oyamacar,
        title:"Oyama Car (Laravel + Jquery)",
        href:'https://www.oyamacars.com/'
    },
    {
        id: 10,
        src: shop,
        title:"Shop Management (Laravel + Jquery)",
        href:'http://shop.yancom-creation.com/dashboard'
    },
];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={href}
                target="_blank"
                rel="noreferrer"
                className="w-100 px-1 py-3 m-4 duration-200 hover:scale-105">
                  {title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
