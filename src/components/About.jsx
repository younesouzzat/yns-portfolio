import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          My name is Younes Ouzzat I'm 29 years old, and I'm a web developer with 3 years of experience in two companies:
          <ol className="ml-10 list-disc">
            <li><strong>SeoCom Marrakech</strong><br /></li>
            <li><strong>YanCom Casablanca</strong><br /></li>
          </ol>
        </p>

        <p className="text-xl mt-5">
          In my experience, I created many web applications especially management applications also simple websites for marketing using technology like Laravel which I love, and WordPress.
          <br />
          Also, I have humble experience in SEO.
        </p>
      </div>
    </div>
  );
};

export default About;
