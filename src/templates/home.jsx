import Comentary from "../assets/comentary";
import Footer from "../assets/footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex flex-row items-center py-4 px-12 gap-16">
        <img
          className="max-w-[360px]"
          src="https://i.postimg.cc/0rgtT9gg/avergara.png"
          alt=""
        />
        <div className="flex gap-8">
          <Link to="/about" className="font-sans font-bold
                                hover:translate-y-2 rounded-md p-2 duration-500">
            Quien Soy?
          </Link>
          <Link to="/blog" className="font-sans font-bold
                                hover:translate-y-2 rounded-md p-2 duration-500">
            Blog
          </Link>
          <Link to="/contact" className="font-sans font-bold
                                hover:translate-y-2 rounded-md p-2 duration-500">
            Contactanos
          </Link>
        </div>
      </div>
      <div className=" h-[80vh] flex flex-row items-center justify-between px-32 gap-16">
        <div className="flex flex-col gap-4 ml-12">
          <h1 className="font-sans font-bold text-5xl">Volver a Sonreir</h1>
          <p className="font-sans text-lg">
            Tratamientos de calidad esperan por vos
          </p>
          <button className="w-64 bg-green1 px-4 py-3 rounded-lg font-sans font-bold 
                            duration-500 hover:opacity-60 ">Agenda tu cita</button>
        </div>
        <img src="https://i.ibb.co/zVT1kqz/Ariel-Transparente.png" alt="Ariel-Transparente" border="0"
        className="h-[103%]"/>
      </div>
      <div className="h-screen bg-green1 shadow-md clip">

      </div>
      <div className="flex flex-row justify-center p-16 bg-white">
        <h2 className="font-sans font-bold text-xl text-gray-900 mx-10">
          Comentarios
        </h2>
        <div className="flex flex-col items-center gap-8 font-sans w-1/2">
          <Comentary />
          <Comentary />
          <Comentary />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
