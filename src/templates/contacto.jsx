import { Link } from "react-router-dom";
import Footer from "../assets/footer";

const Contacto = () => {
  return (
    <div>
      <div className="p-4 flex flex-col gap-4 bg-green1 lg:py-8">
        <Link to="/">
          {" "}
          <img
            src="https://i.postimg.cc/kgrvRmpr/back-1.png"
            alt=""
            className="max-w-[50px]"
          />{" "}
        </Link>
      </div>
      <div className="p-4 font-sans gap-2 lg:mx-24 lg:my-16 lg:flex lg:flex-col lg:gap-12">
        <h1 className="font-bold">Contactanos</h1>
        <p>Llamándonos a nuestro teléfono</p>
        <div className="flex flex-row items-center ">
          <img
            src="https://i.postimg.cc/qqsDKb00/phone-call-1.png"
            className="w-[42px]"
            alt=""
          />
          <h1 className="m-0 pl-4">2284 - 416656</h1>
        </div>
        <p className="mt-4">Escribiéndonos a nuestro mail</p>
        <p className="font-bold lg:text-2xl">consultorioarielvergara@gmail.com</p>
        <p>Y te llamaremos para que puedas hablar con nosotros</p>
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
