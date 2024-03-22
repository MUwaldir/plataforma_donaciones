import React, { useState } from "react";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
        fetch(URL_API+"/createproject",{
            method: "POST",
            headers:{ "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => console.log(data))

    } catch (error) {
        console.log(error);
    }
    // Aquí puedes enviar los datos al servidor
    console.log(formData);
  };

  const handleQuitar = (index, group) => {
    switch (group) {
      case "contacto":
        const nuevosContactos = [...formData.contacto];
        nuevosContactos.splice(index, 1);
        setFormData({ ...formData, contacto: nuevosContactos });
        break;
      case "testimonio":
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
          <input
            id="miembros"
            type="number"
            name="miembros"
            value={formData.miembros}
            onChange={handleChange}
            className="form-input w-full p-2 border border-gray-300 rounded"
          />
        </div>
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
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="direccion">
              Dirección:
            </label>
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
                <div className="flex items-center mb-2">
                  <span className="mr-2 font-bold">{index + 1}.</span>
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
                      X
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
        <button type="submit">Crear Proyecto</button>
      </form>
    </div>
  );
};

export default FormCreateProject;
