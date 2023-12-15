import Footer from "../assets/footer";
import { Link } from "react-router-dom";

const Nosotros = () => {
  return (
    <div>
      <div className="p-4 flex flex-col gap-4 bg-green1 ">
        <Link to="/">
          {" "}
          <img
            src="https://i.postimg.cc/kgrvRmpr/back-1.png"
            alt=""
            className="max-w-[50px]"
          />{" "}
        </Link>
      </div>
      <div className="flex flex-col p-6 font-sans lg:w-[700px] lg:mx-auto lg:my-4">
        <img src="https://i.postimg.cc/bv1Xq49T/Whats-App-Image-2023-12-14-at-22-46-50.jpg" alt="" className="rounded-md my-4"/>
        <p className="py-1 px-2 border-2 rounded-full text-sm ">
        Odontólogo Altamente Calificado
        </p>
        <h1 className="font-sans font-bold">¿Quién es Ariel Vergara?</h1>
        <h5 className=" font-sans mt-1">
          Ayudo a las personas a recuperar su sonrisa.
        </h5>
        <p>Te ofrecemos un cambio en tu vida, mejorando tu salud bucal.</p>
        <p>Aportamos bienestar y seguridad a tu vida.</p>
        <p>Para que puedas disfrutar de días llenos de placeres y vivas plenamente.</p>
        <img
          src="https://i.postimg.cc/pTgMCFKX/tray.png"
          alt=""
          className="max-w-full"
        />

        <h1 className="font-bold mt-4 mx-2">Mi Historia</h1>
        <p className="mx-2 mt-2">
          Nací en Buenos Aires, en 1982. Cuando tenía yo alrededor de 10 años,
          mi madre, se realizó un cambio radical en su sonrisa. El día en que mi
          madre completo su transformación dejó una huella imborrable en mí.{" "}
          <br />
          <br />
          Conel tiempo, comprendí que la elección de mi carrera y el amor que le
          profesaba se traducían en la emoción que sentía al presenciar las
          transformaciones positivas en la cara de mis pacientes al concluir sus
          tratamientos. A los 18 años, volví a Buenos Aires para estudiar la
          carrera de Odontología en la UBA.
          <br />
          <br />
          Fui Presidente del Centro deEstudiantes, Consejero de mi facultad y
          Consejero Superior de la Universidad de Bs As. Cuando me recibí, mi
          deseo era entender cada detalle técnico de la odontología y del arte
          de la mecánica dental para brindar a otros la posibilidad de
          experimentar la alegría que mi madre encontró en su cambio. Gracias a
          una beca otorgada por el propio dictante pude formarme con el Dr.
          Aníbal Alonso, " El verdadero maestro de la odontología argentina",
          realizando el Curso Principal de Oclusión y Rehabilitación Oral de
          Alta Complejidad. Mi primer consultorio lo tuve en la localidad de
          Banfield, repartía mi tiempo entre mis primeros pacientes, mi trabajo
          como docente en la Facultad de Odontología UBA, en la Cátedra de
          Técnica de Prótesis y la concurrencia al Servicio de Implantes del
          Hospital Militar Central 601 Cir. My. Cosme Argerich.
          <br />
          <br />
          Desde entonces, hasta la actualidad, nunca he dejado de formarme para
          mejorar mis habilidades en la clínica y en el laboratorio dental. Hace
          11 años que me mudé a Laprida, lugar que siento propio y elijo para
          vivir junto con mi mujer Constanza y mis tres hijos y trabajar de lo
          que amo.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Nosotros;
