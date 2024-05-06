import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            A propos
          </p>
        </div>

        <p className="text-xl mt-5">
          Je m'appelle Younes Ouzzat, j'ai 29 ans, et je suis développeur web avec 3 ans d'expérience dans deux entreprises :
          <ol className="ml-10 py-2 list-disc">
            <li><strong>Sté. YanCom Casablanca : <small>Janvier 2021 - Janvier 2024</small></strong><br /></li>
            <li><strong>Sté. SeoCom Marrakech : <small>Janvier 2019 - Octobre 2019</small></strong><br /></li>
          </ol>
        </p>

        <p className="text-xl">
          J'ai créé de nombreuses applications Web, notamment des applications de gestion (ERP), ainsi que des sites Web simples pour le marketing en utilisant des technologies Laravel ou WordPress.
          <br />
          De plus, j'ai une humble expérience en référencement.
        </p>
      </div>
    </div>
  );
};

export default About;
