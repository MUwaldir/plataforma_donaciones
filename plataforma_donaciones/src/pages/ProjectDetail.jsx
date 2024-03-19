import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { proyectoDetail } from "../redux/actions/actions";
import DonationForm from "../components/Donate/DonationForm";

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
    <div className="container mx-auto py-8">
      {dataProject && (
        <>
          <h1 className="text-3xl font-bold mb-8">{dataProject.titulo}</h1>
          <div className="bg-gray-100 rounded-md p-4 mb-8">
            <p className="text-lg font-bold mb-2">Descripción:</p>
            <p>{dataProject.descripcion}</p>
          </div>
          <div className="flex flex-wrap justify-center mb-8">
            {dataProject.imagenes.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Imagen ${index + 1}`}
                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 m-1 rounded-md"
              />
            ))}
          </div>
          <div className="max-w-4xl mx-auto p-4 mb-8">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Categoría:</h2>
              <p>{dataProject.categoria.nombre}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Organización:</h2>
              <p>{dataProject.organizacion}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Ubicación:</h2>
              <p>{dataProject.ubicacion.direccion}</p>
              <p>Latitud: {dataProject.ubicacion.latitud}</p>
              <p>Longitud: {dataProject.ubicacion.longitud}</p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto p-4 mb-8">
            <h2 className="text-xl font-bold mb-4">Ubicación en Google Maps:</h2>
            <iframe
              title="Mapa"
              className="w-full h-96"
              frameBorder="0"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.960705432335!2d${dataProject.ubicacion.longitud}!3d${dataProject.ubicacion.latitud}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b447e77c71%3A0x5f6421e9ecda9af7!2sJir%C3%B3n%20de%20la%20Uni%C3%B3n%20s%2Fn%2C%20Lima%2015001!5e0!3m2!1ses!2spe!4v1710611047459!5m2!1ses!2spe`}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Contacto:</h2>
            {dataProject.contactos.map((contacto, index) => (
              <div key={index} className="mb-2">
                <p className="font-bold">{contacto.tipo}:</p>
                <p>{contacto.valor}</p>
              </div>
            ))}
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Representantes:</h2>
            {dataProject.equipo.map((miembro, index) => (
              <div key={index} className="mb-4">
                <p className="font-bold">{miembro.nombre}</p>
                <p>Cargo: {miembro.cargo}</p>
                <p>{miembro.descripcion}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Testimonios:</h2>
            {dataProject.testimonios.map((testimonio, index) => (
              <div key={index} className="mb-4">
                <p>{testimonio.nombre}</p>
                <p>{testimonio.contenido}</p>
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
        </>
      )}
    </div>
  );
};

export default ProjectDetail;
