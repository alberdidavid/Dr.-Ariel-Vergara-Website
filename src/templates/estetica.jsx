import { Link } from "react-router-dom";
import Footer from "../assets/footer";

const Estetica = () => {
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
      <div className="flex flex-col p-4 gap-3 font-sans lg:w-[700px] lg:mx-auto lg:my-4">
        <h1 className="font-sans text-2xl font-bold">ESTETICA DENTAL</h1>

        <p>
          {/* Sentirse a gusto es lo que se logra cuando se tiene una buena
          salud bucal. Despertarse cada mañana, vernos al espejo y
          que del otro lado haya una bella sonrisa.
          <br />
          <br /> */}
          La estética dental no solo embellece la sonrisa, sino que también
          puede tener un impacto positivo en la apariencia facial general.
          Dientes bien alineados y proporcionados pueden realzar la armonía de
          tu rostro.
          <br />
          <br />
          Una sonrisa mejorada contribuye significativamente a tu confianza y
          autoestima. La corrección de imperfecciones dentales o el
          blanqueamiento dental pueden transformar la percepción que uno tiene
          de sí mismo, generando una sensación de seguridad y satisfacción
          personal.
        </p>
        <img
          src="https://i.postimg.cc/y8S5z4LQ/Whats-App-Image-2023-12-14-at-22-32-23.jpg"
          alt=""
          className="max-w-full rounded-md"
        />
        <p className="mt-3">
          Podemos ayudarte a recuperar una sonrisa armonizada aplicando correciones
          a tus dientes con resinas adhesivas de alta calidad. O en efecto, darle brillo 
          quitando las manchas mediante un tratamiento de blanqueamiento dental.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Estetica;
