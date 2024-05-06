import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { Helmet } from 'react-helmet';


function App() {
  const TITLE = 'Ouzzat Younes | Web Developer';

  return (
    <div className="bg-gradient-to-b
    from-black via-black to-gray-800">
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />

        <SocialLinks />
    </div>
  );
}

export default App;
