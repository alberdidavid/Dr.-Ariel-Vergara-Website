import Comentary from "./assets/comentary"

import "./index.css";

function App() {
  return (
    <>
      <div className="w-screen flex flex-row items-center py-8 px-16 gap-16">
        <img className="max-w-[400px]" src="https://i.postimg.cc/0rgtT9gg/avergara.png" alt="" />
        <div className="flex gap-6">
          <a href="" className="font-sans font-bold text-white">Quien Soy?</a>
          <a href="" className="font-sans font-bold text-white">Blog</a>
          <a href="" className="font-sans font-bold text-white">Contactanos</a>
        </div>
      </div>
      <div className="w-screen flex flex-row items-center justify-between py-8 px-32 gap-16">
        <div>
          <h1 className="font-sans font-bold text-5xl">Volver a Sonreir</h1>
          <p className="font-sans text-lg">Recupera la sonrisa, habla con nosotros.</p>
          <button>Saca tu turno</button>
        </div>
        <div className="h-96 w-64 bg-slate-300"></div>
      </div>
      <div className="w-screen flex flex-row justify-center p-16 bg-white">
        <h2 className="font-sans font-bold text-xl text-gray-900 mx-10">Comentarios</h2>
        <div className="flex flex-col items-center gap-8 font-sans w-1/2">
          <Comentary/>
          <Comentary/>
          <Comentary/>
        </div>
      </div>
    </>
  );
}

export default App;
