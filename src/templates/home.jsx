import Header from "../assets/header";
import Cards from "../assets/cards";
import Comentary from "../assets/comentary";
import Footer from "../assets/footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  return (
    <div className="bg-gray1">
      <Header />
      <div className="lg:flex lg:flex-col lg:items-center lg:p-8">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}
          navigation
          className="lg:w-[720px]"
        >
          <SwiperSlide>
            <div className="relative h-[85vh] justify-end bg-gray2 ">
              <img
                src="https://i.postimg.cc/FKQb62dQ/matthieu-jungfer-0t-AYWIGt-YTo-unsplash.jpg"
                alt=""
                className="h-full w-full object-cover brightness-50"
              />
              <div className="absolute bottom-4 left-4 font-sans uppercase text-white w-2/3">
              VOLVÉ A SONREÍR.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[85vh] justify-end">
              <img
                src="https://i.postimg.cc/52zqnxt3/brooke-cagle-g1-Kr4-Ozfoac-unsplash-1.jpg"
                alt=""
                className="h-full w-full object-cover brightness-50"
              />
              <div className="absolute bottom-4 left-4 font-sans uppercase text-white w-2/3">
              DESLUMBRA A LOS DEMÁS CON TU NUEVA SONRISA
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="relative h-[85vh] justify-end bg-gray2">
              <img
                src="https://i.postimg.cc/d0mRc4rZ/roman-shilin-6whf-YYGUWE-unsplash.jpg
"               className="h-full w-full object-cover brightness-50"
                alt=""
              />
              <div className="absolute bottom-4 left-4 font-sans uppercase text-white w-2/3">
                RECUPERA EL BIENESTAR Y LA COMODIDAD
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      
      <section className="flex flex-col lg:items-center bg-gray1 p-3 lg:w-[720px] lg:p-0">
        <h1 className="text-3xl font-sans font-extrabold mb-[1em] mx-4 mt-12 text-left w-full font lg:mx-0">
          ¿Cómo Trabajo?
        </h1>
        <Cards></Cards>
      </section>
      <section className="flex flex-col items-center gap-4 bg-gray1 py-4 px-3 lg:w-[720px]">
        <Comentary />
        <button className="px-3 py-2 bg-green1 rounded-md text-xl w-[240px] m-4 uppercase font-sans font-bold">
          AGENDAR CITA
        </button>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
