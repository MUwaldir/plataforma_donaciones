import React, { useEffect, useState } from "react";
import Joi from "joi";
const urlpruebaiamgenes = "https://source.unsplash.com/random";
const img = [
  "https://images.pexels.com/photos/17316989/pexels-photo-17316989/free-photo-of-blanco-y-negro-escritorio-mesa-investigacion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/17309790/pexels-photo-17309790/free-photo-of-manos-mujer-libros-apilar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/17082393/pexels-photo-17082393/free-photo-of-edificio-italia-colegio-escuela.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];
const img2 = [
  "https://source.unsplash.com/random",
  "https://source.unsplash.com/random",
  "https://source.unsplash.com/random",
];

const URL_API = "http://localhost:3001/api";
const FormCreateProject = () => {
  const [formData, setFormData] = useState({
    ubicacion: {
      latitud: "",
      longitud: "",
      direccion: "",
    },
    titulo: "",
    descripcion: "",
    monto_meta: "",
    organizacion: "",
    categoria: "",
    miembros: "",
    imagenes: img2,
    cuentas_bancarias: [{ soles: "" }, { dolares: "" }],
    monederos_digitales: [
      { yape: "", nombre: "" },
      { plin: "", nombre: "" },
    ],
    testimonio: [{ nombre: "", contenido: "" }],
    contacto: [{ tipo: "", valor: "" }],
    equipo: [
      {
        nombre: "",
        cargo: "",
        descripcion: "",
        imagen: "https://source.unsplash.com/random",
      },
    ],
  });
  const [errores, setErrores] = useState({});

  const handleValidation = (formData) => {
    const newErrors = {};
    let isValid = true;
    // Validar ubicacion
    if (!formData.ubicacion.latitud.trim()) {
      newErrors.ubicacion = {
        ...newErrors.ubicacion,
        latitud: "La latitud es requerida",
      };
    }
    if (!formData.ubicacion.longitud.trim()) {
      newErrors.ubicacion = {
        ...newErrors.ubicacion,
        longitud: "La longitud es requerida",
      };
    }
    if (!formData.ubicacion.direccion.trim()) {
      newErrors.ubicacion = {
        ...newErrors.ubicacion,
        direccion: "La dirección es requerida",
      };
    }

    // Validar otros campos
    if (!formData.titulo.trim()) {
      newErrors.titulo = "El título es requerido";
    }
    if (!formData.descripcion.trim()) {
      newErrors.descripcion = "La descripción es requerida";
    }
    if (!formData.monto_meta.trim()) {
      newErrors.monto_meta = "La monto meta es requerida";
    }

    if (!formData.organizacion.trim()) {
      newErrors.organizacion = "La organizacion es requerida";
    }
    if (!formData.categoria.trim()) {
      newErrors.categoria = "La categoria es requerida";
    }
    if (!formData.miembros.trim()) {
      newErrors.miembros = "el nuemro de miembros es requerida";
    }
    if (formData.imagenes.length === 0) {
      newErrors.imagenes = "Las imagenes es requerida";
    }

    // Validar otros campos similares

    // Validar cuentas bancarias
    formData.cuentas_bancarias.forEach((cuenta, index) => {
      if (cuenta && typeof cuenta.soles === "string" && !cuenta.soles.trim()) {
        newErrors.cuentas_bancarias = {
          ...newErrors.cuentas_bancarias,
          soles: "El campo soles es requerido",
        };
      }
      if (
        cuenta &&
        typeof cuenta.dolares === "string" &&
        !cuenta.dolares.trim()
      ) {
        newErrors.cuentas_bancarias = {
          ...newErrors.cuentas_bancarias,
          dolares: "El campo dólares es requerido",
        };
      }
    });

   

    formData.monederos_digitales.forEach((monedero, index) => {
      for (const key in monedero) {
        if (!monedero[key].toString().trim()) {
          if (!newErrors[`monederos_digitales_${index}_${key}`]) {
            newErrors[
              `monederos_digitales_${index}_${key}`
            ] = `El campo ${key} es requerido`;
          }
          isValid = false;
        }
      }
    });

    // Validar testimonio, contacto, equipo y otros campos similares de arreglos

    // Finalmente, establecer los errores
    setErrores(newErrors);
    return isValid;
    // Realizar otras acciones si no hay errores
  };
  console.log(errores);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
    
  };

 
  const handleChangeUbicacion = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const ubicacion = { ...formData.ubicacion };
    ubicacion[name] = value;
    setFormData({
      ...formData,
      ubicacion: ubicacion,
    });
  };

  const handleChangeArrays = (index, field, value, group) => {
    // console.log(index, field, value, group);
    const newData = { ...formData };
    newData[group][index][field] = value;
    setFormData(newData);
  };

  const handleAddItem = (field) => {
    const newData = { ...formData };
    if (newData[field].length < 6) {
      newData[field].push({});
      setFormData(newData);
    }
  };

  const handleImageUpload = async (event) => {
    const files = event.target.files;
    const uploadedImages = [];

    // Itera sobre cada archivo para subirlo a Cloudinary
    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "tu_upload_preset_aqui");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/tu_cloud_name/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      uploadedImages.push(data.secure_url);
    }

    // Actualiza el estado con las URLs de las imágenes subidas
    setFormData({
      ...formData,
      imagenes: [...formData.imagenes, ...uploadedImages],
    });
  };
  const handleUploadImagenMiembro = async (index, file) => {
    // const formData = new FormData();
    // formData.append("file", file);
    // formData.append("upload_preset", "tu_upload_preset");

    // try {
    //   const response = await fetch(
    //     "https://api.cloudinary.com/v1_1/tu_cloud_name/image/upload",
    //     {
    //       method: "POST",
    //       body: formData,
    //     }
    //   );

    //   if (!response.ok) {
    //     throw new Error("Error al cargar la imagen");
    //   }

    //   const data = await response.json();
    //   const uploadImagen = {...formData}
    //   uploadImagen.equipo[index].imagen = data.secure_url
    //   setFormData(uploadImagen)
    // } catch (error) {
    //   console.error("Error:", error);
    // }
    // console.log(file);
    // const data = { secure_url: file };

    const uploadImagen = { ...formData };
    uploadImagen.equipo[index].imagen = urlpruebaiamgenes;
    setFormData(uploadImagen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     await handleValidation(formData);
    // Valida todos los campos del formulario antes de enviarlo
    // console.log(validateForm(formData));
    if (!errores) {
      try {
        fetch(URL_API + "/createproject", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Formulario inválido. Por favor, corrija los errores.");
    }
    // Aquí puedes enviar los datos al servidor
    console.log(formData);
  };
  //   useEffect(() => {
  //     handleValidation(formData);
  //   }, [formData]);

  const handleQuitar = (index, group) => {
    switch (group) {
      case "contacto":
        const nuevosContactos = [...formData.contacto];
        nuevosContactos.splice(index, 1);
        setFormData({ ...formData, contacto: nuevosContactos });
        break;
      case "testimonio":
        const nuevosTestimonios = [...formData.testimonio];
        nuevosTestimonios.splice(index, 1);
        setFormData({ ...formData, testimonio: nuevosTestimonios });
        break;
      case "equipo":
        const nuevosEquipos = [...formData.equipo];
        nuevosEquipos.splice(index, 1);
        setFormData({ ...formData, equipo: nuevosEquipos });

        break;

      default:
        break;
    }
  };

  console.log(formData);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="titulo">
            Título:
          </label>
          {errores.titulo && (
            <div className="text-red-500 text-sm">{errores.titulo}</div>
          )}
          <input
            id="titulo"
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="descripcion">
            Descripción:
          </label>
          {errores.descripcion && (
            <div className="text-red-500 text-sm">{errores.descripcion}</div>
          )}
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            className="form-textarea w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="monto_meta">
            Monto Meta:
          </label>
          {errores.monto_meta && (
            <div className="text-red-500 text-sm">{errores.monto_meta}</div>
          )}
          <input
            id="monto_meta"
            type="number"
            name="monto_meta"
            value={formData.monto_meta}
            onChange={handleChange}
            className="form-input w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-bold mb-2"
            htmlFor="organizacion"
          >
            Organización:
          </label>
          {errores.organizacion && (
            <div className="text-red-500 text-sm">{errores.organizacion}</div>
          )}
          <input
            id="organizacion"
            type="text"
            name="organizacion"
            value={formData.organizacion}
            onChange={handleChange}
            className="form-input w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* categoria */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="categoria">
            Categoría:
          </label>
          {errores.categoria && (
            <div className="text-red-500 text-sm">{errores.categoria}</div>
          )}
          <select
            id="categoria"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            className="form-select mt-1 block w-full"
          >
            <option value="">Selecciona una categoría</option>
            <option value="Educación">Educación</option>
            <option value="Ambiental">Ambiental</option>
            <option value="Salud">Salud</option>
            <option value="Tecnología">Tecnología</option>
            <option value="Arte y Cultura">Arte y Cultura</option>
            <option value="Desarrollo Comunitario">
              Desarrollo Comunitario
            </option>
            <option value="Derechos Humanos">Derechos Humanos</option>
            <option value="Animales">Animales</option>
            <option value="Deportes">Deportes</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="miembros">
            Número de Miembros:
          </label>
          {errores.miembros && (
            <div className="text-red-500 text-sm">{errores.miembros}</div>
          )}
          <input
            id="miembros"
            type="number"
            name="miembros"
            value={formData.miembros}
            onChange={handleChange}
            className="form-input w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* ubicacion latritud longitud */}
        <div>
          <h2 className="block text-sm font-bold mb-2">Ubicación</h2>

          <div className="w-full flex">
            <div className="mb-4 w-1/2 mr-1">
              <label className="block text-sm font-bold mb-2" htmlFor="latitud">
                Latitud:
              </label>
              <input
                id="latitud"
                type="number"
                name="latitud"
                value={formData.ubicacion.latitud}
                onChange={handleChangeUbicacion}
                className="form-input w-full p-2 border border-gray-300 rounded"
              />
              {errores.ubicacion && (
                <div className="text-red-500 text-sm">
                  {errores.ubicacion.latitud}
                </div>
              )}
            </div>
            <div className="mb-4 w-1/2">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="longitud"
              >
                Longitud:
              </label>
              <input
                id="longitud"
                type="number"
                name="longitud"
                value={formData.ubicacion.longitud}
                onChange={handleChangeUbicacion}
                className="form-input w-full p-2 border border-gray-300 rounded"
              />
              {errores.ubicacion && (
                <div className="text-red-500 text-sm">
                  {errores.ubicacion.longitud}
                </div>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="direccion">
              Dirección:
            </label>
            {errores.ubicacion && (
              <div className="text-red-500 text-sm">
                {errores.ubicacion.direccion}
              </div>
            )}
            <input
              id="direccion"
              type="text"
              name="direccion"
              value={formData.ubicacion.direccion}
              onChange={handleChangeUbicacion}
              className="form-input w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        {/* IMAGENES */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="imagenes">
            Imágenes:
          </label>
          {errores.imagenes && (
            <div className="text-red-500 text-sm">{errores.imagenes}</div>
          )}

          <input
            id="imagenes"
            type="file"
            name="imagenes"
            onChange={handleImageUpload}
            multiple
            className="form-input mt-1 block w-full"
          />
        </div>
        {/* CUENTAS BANCARIAS Y MONEDEROS */}

        <div className="mb-4">
          <div>
            {/* Inputs para cuentas bancarias */}
            <h3 className="text-lg font-bold mb-2">Cuentas Bancarias BCP</h3>
            {formData.cuentas_bancarias.map((cuenta, index) => (
              <div key={`cuenta_${index}`} className="flex items-center mb-4">
                <div>
                  {errores.cuentas_bancarias && (
                    <div className="text-red-500 text-sm">
                      {errores.cuentas_bancarias[Object.keys(cuenta)]}
                    </div>
                  )}
                  <label htmlFor={`cuenta_${index}`} className="mr-2 font-bold">
                    {Object.keys(cuenta)}:
                  </label>
                  <input
                    id={`cuenta_${index}`}
                    type="text"
                    value={Object.values(cuenta)}
                    onChange={(e) =>
                      handleChangeArrays(
                        index,
                        Object.keys(cuenta),
                        e.target.value,
                        "cuentas_bancarias"
                      )
                    }
                    placeholder="123456789"
                    className="form-input w-full py-2 px-3 border border-gray-300 rounded"
                  />
                </div>
              </div>
            ))}
          </div>

          <div>
            {/* Inputs para monederos digitales */}
            <div>
              {/* Inputs para cuentas bancarias */}
              <h3 className="text-lg font-bold mb-2">Monederos Digitales</h3>
              {formData.monederos_digitales.map((mone, index) => (
                <div key={`mone_${index}`} className="flex items-center mb-4">
                  {Object.entries(mone).map(([key, value], subIndex) => (
                    <div
                      key={`mone_${index}_${subIndex}`}
                      className={subIndex === 0 ? "w-1/3 mr-2" : "w-2/3"}
                    >
                      <React.Fragment>
                        <label
                          htmlFor={`mone_${index}_${subIndex}`}
                          className="mr-2 font-bold "
                        >
                          {key}:
                        </label>
                        <input
                          id={`mone_${index}_${subIndex}`}
                          type={subIndex === 0 ? "number" : "text"}
                          value={value}
                          onChange={(e) =>
                            handleChangeArrays(
                              index,
                              key,
                              e.target.value,
                              "monederos_digitales"
                            )
                          }
                          placeholder={
                            subIndex === 0 ? "12345678" : "Nombre Apellidos"
                          }
                          className="form-input w-full py-2 px-3 border border-gray-300 rounded"
                        />
                        {errores[`monederos_digitales_${index}_${key}`] && (
                          <div className="text-red-500 text-sm">
                            {errores[`monederos_digitales_${index}_${key}`]}
                          </div>
                        )}
                      </React.Fragment>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Resto de los campos de entrada */}

        <div>
          {/* Testimonios */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Testimonios</h3>
            {formData.testimonio.map((testimonio, index) => (
              <div key={`testimonio_${index}`} className="mb-4">
                <div className="">
                  <span className="mr-2 font-bold">{index + 1}.</span>
                  {index > 0 && (
                    <span
                      className="ml-2 bg-red-500 text-white px-2 py-1  rounded cursor-pointer"
                      onClick={() => handleQuitar(index, "testimonio")}
                    >
                      Quitar
                    </span>
                  )}
                </div>
                <div className="flex items-center my-2">
                  <input
                    type="text"
                    value={testimonio.nombre}
                    onChange={(e) =>
                      handleChangeArrays(
                        index,
                        "nombre",
                        e.target.value,
                        "testimonio"
                      )
                    }
                    placeholder="Nombre"
                    className="form-input w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <textarea
                  value={testimonio.contenido}
                  onChange={(e) =>
                    handleChangeArrays(
                      index,
                      "contenido",
                      e.target.value,
                      "testimonio"
                    )
                  }
                  placeholder="Contenido"
                  className="form-textarea w-full p-2 border border-gray-300 rounded"
                />
              </div>
            ))}
            <button
              onClick={() => handleAddItem("testimonio")}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Agregar Testimonio
            </button>
          </div>

          {/* Contactos */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Contactos</h3>
            <p className="text-sm mb-4">
              Ejemplo: [ tipo: youtube, valor: Nombre del canal ]
            </p>
            {formData.contacto.map((contacto, index) => (
              <div key={`contacto_${index}`} className="mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  Contacto {index + 1}:
                  {index > 0 && (
                    <button
                      onClick={() => handleQuitar(index, "contacto")}
                      className="bg-red-500 text-white py-1 px-2 rounded ml-2"
                    >
                      quitar
                    </button>
                  )}
                </p>
                <div className="flex items-center mb-2">
                  <input
                    type="text"
                    value={contacto.tipo}
                    onChange={(e) =>
                      handleChangeArrays(
                        index,
                        "tipo",
                        e.target.value,
                        "contacto"
                      )
                    }
                    placeholder="Tipo"
                    className="form-input w-1/3 mr-2"
                  />
                  <input
                    type="text"
                    value={contacto.valor}
                    onChange={(e) =>
                      handleChangeArrays(
                        index,
                        "valor",
                        e.target.value,
                        "contacto"
                      )
                    }
                    placeholder="Valor"
                    className="form-input w-2/3"
                  />
                </div>
              </div>
            ))}
            {formData.contacto.length < 6 && (
              <button
                onClick={() => handleAddItem("contacto")}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Agregar Contacto
              </button>
            )}
          </div>

          {/* Equipos */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Equipos</h3>
            <p className="text-sm">Máximo 6 miembros</p>
            {formData.equipo.map((equipo, index) => (
              <div
                key={`equipo_${index}`}
                className="mb-4 border border-spacing-sm border-black p-2 shadow-sm rounded-sm"
              >
                <p className="text-sm text-gray-600 mb-2">
                  Miembro {index + 1}:
                  {index > 0 && (
                    <span
                      className="ml-2 bg-red-500 text-white px-2 py-1 rounded cursor-pointer"
                      onClick={() => handleQuitar(index, "equipo")}
                    >
                      Quitar
                    </span>
                  )}
                </p>
                <div className="flex flex-wrap items-center mb-2">
                  <input
                    type="text"
                    value={equipo.nombre}
                    onChange={(e) =>
                      handleChangeArrays(
                        index,
                        "nombre",
                        e.target.value,
                        "equipo"
                      )
                    }
                    placeholder="Nombre"
                    className="form-input w-full md:w-1/2 mr-2 mb-2 px-2 md:mb-2"
                  />
                  <input
                    type="text"
                    value={equipo.cargo}
                    onChange={(e) =>
                      handleChangeArrays(
                        index,
                        "cargo",
                        e.target.value,
                        "equipo"
                      )
                    }
                    placeholder="Cargo"
                    className="form-input w-full md:w-1/2 px-2"
                  />
                </div>
                <input
                  type="text"
                  value={equipo.descripcion}
                  onChange={(e) =>
                    handleChangeArrays(
                      index,
                      "descripcion",
                      e.target.value,
                      "equipo"
                    )
                  }
                  placeholder="Descripción"
                  className="form-input w-full mb-2 px-2"
                />
                <label
                  htmlFor="imagenes"
                  className="block text-sm font-bold mb-2"
                >
                  Imágen:
                </label>
                <figure className="figure w-20">
                  <img
                    src={equipo.imagen}
                    className="figure-img img-fluid rounded"
                    alt=""
                  />
                  <figcaption className="figure-caption text-start">
                    {equipo.imagen && equipo.nombre}
                  </figcaption>
                </figure>

                <input
                  type="file"
                  id="imagenes"
                  name="imagenes"
                  onChange={(event) =>
                    handleUploadImagenMiembro(index, event.target.files)
                  }
                  multiple
                  className="form-input w-full p-2 border border-gray-300 rounded"
                />
              </div>
            ))}
            {formData.equipo.length < 6 && (
              <button
                onClick={() => handleAddItem("equipo")}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Agregar Miembro
              </button>
            )}
          </div>
        </div>
        {/* ... */}
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 p-2 rounded-md text-white"
        >
          Crear Proyecto
        </button>
      </form>
    </div>
  );
};

export default FormCreateProject;
