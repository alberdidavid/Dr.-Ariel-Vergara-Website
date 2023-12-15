import { Link } from "react-router-dom";
import Footer from "../assets/footer";

const Implantes = () => {
  return (
    <div className="bg-gray1">
      <div className="p-4 flex flex-col gap-4 bg-green1">
        <Link to="/">
          {" "}
          <img
            src="https://i.postimg.cc/kgrvRmpr/back-1.png"
            alt=""
            className="max-w-[50px]"
          />{" "}
        </Link>
      </div>
      <div className="flex flex-col px-4 py-7 gap-3 font-sans lg:w-[700px] lg:mx-auto lg:my-4">
        <h1 className="font-sans text-2xl font-bold">IMPLANTES Y PROTESIS</h1>

        <p className="m-0">
          La pérdida dental no solo afecta tu sonrisa, sino también tu confianza
          y comodidad en la vida diaria. ¿Te imaginas recuperar la libertad de
          comer lo que amas y mostrar una sonrisa radiante sin preocupaciones?
          Los implantes dentales no solo restauran tus dientes, sino que
          transforman por completo tu experiencia cotidiana, brindándote
          beneficios que van más allá de lo físico.
          <br />
          <br />
          <img
          src="https://i.postimg.cc/nrrLDpFv/Whats-App-Image-2023-12-14-at-16-19-55.jpg"
          alt=""
          className="max-w-full rounded-md my-1"
        />
          <br />
          Los implantes dentales te devuelven la capacidad de disfrutar
          plenamente de tus alimentos favoritos. Olvídate de las limitaciones en
          tu dieta y saborea cada bocado con confianza. La masticación eficiente
          que ofrecen los implantes no solo beneficia tu salud digestiva, sino
          que también restaura el placer de comer sin restricciones.
          </p>
       
        <p>
          Libérate de las limitaciones y experimenta una nueva vida con una
          sonrisa completa y radiante. Contáctanos hoy para dar el primer paso
          hacia una transformación positiva. Tu sonrisa y tu felicidad lo valen.
        </p>

        <article className=" border-2 border-gray-400 rounded-md p-3">
            <p className="text-sm italic m-0">
              "Yo me senti mas segura, me reia mejor. Porque al tener la protesis fija vos podes conversar de otra manera.
              Aparte de lo beneficioso de poder masticar bien, y ni hablar de la posibilidad de conversar y reirme como me gusta a mi."
            </p>
            <p className="text-right m-0 text-sm"> - Susana</p>
          </article>

          <button className="px-3 py-2 bg-green1 rounded-md text-xl w-[240px] my-4 m-auto uppercase font-sans font-bold">
          AGENDAR CITA
        </button>
        
      </div>
      <Footer />
    </div>
  );
};

export default Implantes;
