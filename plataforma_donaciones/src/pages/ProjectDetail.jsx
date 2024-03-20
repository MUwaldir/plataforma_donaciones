import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { proyectoDetail } from "../redux/actions/actions";
import DonationForm from "../components/Donate/DonationForm";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const ProjectDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const dataProject = useSelector((state) => state.proyectoDetail);

  useEffect(() => {
    if (id) {
      dispatch(proyectoDetail(id));
    }
  }, [id]);

  return (
    <div className="lg:mx-auto ">
      {dataProject && (
        <div className="bg-white rounded-md p-8">
          <h1 className="text-3xl font-bold mb-8">{dataProject.titulo}</h1>
          <div className="mb-4 md:ml-28">
            <dt className="text-lg font-bold mb-2">Organización:</dt>
            <dd>{dataProject.organizacion}</dd>
          </div>
          <div className="mb-8 md:ml-28">
            <h2 className="text-lg font-bold mb-2">Descripción:</h2>
            <p>{dataProject.descripcion}</p>
          </div>
          <div className="flex flex-wrap justify-center mb-8">
            {dataProject.imagenes.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Imagen ${index + 1}`}
                className="w-full sm:w-1/2 md:w-1/3  xl:w-1/4 m-1 rounded-md"
              />
            ))}
          </div>
          {/* testimonios */}
          <div className="mb-8 md:mx-28">
            <h2 className="text-lg font-bold mb-4">Testimonios:</h2>

            <div className="grid grid-col-1 md:grid-cols-2 content-center">
              {dataProject.testimonios.map((testimonio, index) => (
                //   <div>
                //   <h2 className="text-lg font-bold mb-4">Testimonios:</h2>
                //   {dataProject.testimonios.map((testimonio, index) => (
                //     <div key={index} className="mb-4">
                //       <p>{testimonio.nombre}</p>
                //       <p>{testimonio.contenido}</p>
                //     </div>
                //   ))}
                // </div>

                <div
                  key={index}
                  className="max-w-sm w-full lg:max-w-full lg:flex mx-auto lg:justify-center"
                >
                  <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                      <div className="text-gray-900 font-bold text-xl mb-2">
                        {testimonio.nombre}
                      </div>
                      <p className="text-gray-700 text-base">
                        {testimonio.contenido}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* represenatntes */}
          <div className="mb-8 md:mx-28">
            <h2 className="text-lg font-bold mb-4">Representantes:</h2>

            <div className="grid grid-col-1 md:grid-cols-2 content-center">
              {dataProject.equipo.map((miembro, index) => (
                // <div key={index} className="mb-4 bg-green-400 rounded-full md:w-1/2 h-52 text-center flex flex-col justify-center">
                //   <p className="font-bold mb-10 text-4xl">{miembro.nombre}</p>
                //   <p>Cargo:<span className="text-2xl px-3">{miembro.cargo.toUpperCase()} </span> </p>
                //   <p>{miembro.descripcion}</p>
                // </div>

                <div
                  key={index}
                  className="max-w-sm w-full lg:max-w-full lg:flex mx-auto lg:justify-center"
                >
                  <div
                    className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    style={{
                      backgroundImage:
                        "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmF4Fm6qhBj-MXAHArnRytUCOwc38jWP-kQ&usqp=CAU')",
                    }}
                    title="Woman holding a mug"
                  ></div>
                  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                      <p className="text-sm text-gray-600 flex items-center">
                        {miembro.cargo.toUpperCase()}
                      </p>
                      <div className="text-gray-900 font-bold text-xl mb-2">
                        {miembro.nombre}
                      </div>
                      <p className="text-gray-700 text-base">
                        {miembro.descripcion}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-4xl mx-auto mb-8 ">
            <dl className="">
              <div className="mb-4">
                <dt className="text-lg font-bold mb-2">Ubicación:</dt>
                <dd>{dataProject.ubicacion.direccion}</dd>
                <dd>Latitud: {dataProject.ubicacion.latitud}</dd>
                <dd>Longitud: {dataProject.ubicacion.longitud}</dd>
              </div>
            </dl>
          </div>
          {/* mapa de ubicacion */}
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-lg font-bold mb-4">
              Ubicación en Google Maps:
            </h2>
            <iframe
              title="Mapa"
              className="w-full h-96"
              frameBorder="0"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.960705432335!2d${dataProject.ubicacion.longitud}!3d${dataProject.ubicacion.latitud}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b447e77c71%3A0x5f6421e9ecda9af7!2sJir%C3%B3n%20de%20la%20Uni%C3%B3n%20s%2Fn%2C%20Lima%2015001!5e0!3m2!1ses!2spe!4v1710611047459!5m2!1ses!2spe`}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          {/* contacto */}
          <div className="mb-8 md:ml-28">
            <h2 className="text-lg font-bold mb-4">Contacto:</h2>

            {dataProject.contactos.map((contacto, index) => (
              <div key={index} className="flex mb-2">
                {contacto.tipo === "correo" && (
                  <AiOutlineMail className="text-xl mr-2 mt-1" />
                )}
                {contacto.tipo === "facebook" && (
                  <FaFacebook className="text-xl mr-2 mt-1" />
                )}
                {contacto.tipo === "youtube" && (
                  <FaYoutube className="text-xl mr-2 mt-1" />
                )}
                <div>
                  <p className="font-bold">{contacto.tipo}:</p>
                  <p>{contacto.valor}</p>
                </div>
              </div>
            ))}
          </div>

          <DonationForm
            nombre={dataProject.titulo}
            description={dataProject.descripcion}
            id={id}
            cuentaData={dataProject.cuentas_bancarias}
            monederoData={dataProject.monederos_digitales}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
