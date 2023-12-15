import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="font-sans bg-[#e9e9e9]">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-12 border-t-2 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <img
                src="https://i.postimg.cc/0rgtT9gg/avergara.png"
                alt=""
                className="max-w-[250px]"
              />

              <p className="mt-4 max-w-xs -">
                Volve a sonreir.
                <br />
                Encontra el equilibiro que buscas
              </p>
              <div className="flex flex-row gap-3">
                <Link>
                  <img
                    src="https://i.postimg.cc/pyNxW1CH/instagram-3.png"
                    alt=""
                    className="w-[32px]"
                  />
                </Link>
                <Link>
                  <img
                    src="https://i.postimg.cc/7PjTJHQx/facebook-2.png"
                    alt=""
                    className="w-[32px]"
                  />
                </Link>
                <Link>
                  <img
                    src="https://i.postimg.cc/c1vnJgh9/youtube-1.png"
                    alt=""
                    className="w-[32px]"
                  />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p className="font-bold text-gray-900">Tratamientos</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      to="/rehabilitacion"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Rehabilitacion Oral
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/estetica"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Estetica Dental
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/implantes"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Implantes
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-gray-900">Sobre mi</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      to="/nosotros"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Quien soy
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/nosotros"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Mi trayectoria
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-gray-900">Contacto</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      to="/contacto"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Saca tu turno
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/contacto"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Envianos un correo
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/contacto"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Habla con Ariel
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-xs">
            &copy; 2022. Company Name. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
