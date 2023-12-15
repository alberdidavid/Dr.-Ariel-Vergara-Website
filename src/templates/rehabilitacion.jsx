import { Link } from "react-router-dom";
import Footer from "../assets/footer";

const Rehabilitacion = () => {
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
        <h1 className="font-sans text-2xl font-bold">
          REHABILITACION ORAL ADHESIVA
        </h1>

        <p>
          {/* Sentirse a gusto es lo que se logra cuando se tiene una buena
          salud bucal. Despertarse cada mañana, vernos al espejo y
          que del otro lado haya una bella sonrisa.
          <br />
          <br /> */}
          El alivio y la comodidad son beneficios tangibles para aquellos que
          han experimentado problemas dentales. La utilización de tecnología
          avanzada en los procedimientos de rehabilitación oral no solo
          garantiza resultados efectivos, sino que también minimiza las
          molestias asociadas.
          <br />
          <br />
          La rehabilitación oral se define como un conjunto de tratamientos
          diseñados para restaurar y mejorar la salud bucal de manera general.
          Uno de los beneficios más notables de este enfoque es la mejora
          estética. La pérdida de dientes, ya sea por caries, traumatismos o
          enfermedad periodontal, puede afectar significativamente la autoestima
          y la confianza de una persona. La rehabilitación oral, a través de
          técnicas como implantes dentales y prótesis, ofrece soluciones
          personalizadas que no solo restauran la funcionalidad, sino que
          también devuelven la sonrisa y la seguridad en uno mismo.
        </p>
        <img
          src="https://i.postimg.cc/jSqX6bbL/rehab.png"
          alt=""
          className="max-w-full rounded-md"
        />
        <div>
          <p>
            A esto se aboca una rehabilitacion oral. Con la ayuda de multiples
            tratamientos reconstruir tu sonrisa.
          </p>
          <p>Mira lo que tiene par contarte uno de nustros pacientes ...</p>
          <article className=" border-2 border-gray-400 rounded-md p-3 ">
            <p className="text-sm italic m-0">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <p className="text-right m-0 text-sm"> - Juan</p>
          </article>
        </div>
        <button className="px-3 py-2 bg-green1 rounded-md text-xl w-[240px] m-auto my-4 uppercase font-sans font-bold">AGENDAR CITA</button>
      </div>
      <Footer />
    </div>
  );
};

export default Rehabilitacion;
