import React, { useState } from 'react';

const Imagenes = ({ imagenes, onUpdateImagenes }) => {
  const [dataImagenes, setDataImagenes] = useState(imagenes);

  const handleImageUpload = async (e) => {
    const files = e.target.files;
    console.log(files)
  
    const uploadedImages = [];
    const uploaders = Array.from(files).map((file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'your_cloudinary_upload_preset'); // Replace 'your_cloudinary_upload_preset' with your actual Cloudinary upload preset
      return fetch('https://api.cloudinary.com/v1_1/your_cloudinary_cloud_name/image/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          uploadedImages.push(data.secure_url);
        });
    });

    await Promise.all(uploaders);
    const newImages = [...dataImagenes, ...uploadedImages].slice(0, 6);
    setDataImagenes({ ...dataImagenes, imagenes: newImages });
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...dataImagenes];
    updatedImages.splice(index, 1);
    setDataImagenes(updatedImages);
  };

  const handleSaveChanges = () => {
    onUpdateImagenes(dataImagenes);
  };

  return (
    <div>
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2">Imágenes:</label>
      <div className="flex flex-wrap gap-4">
        {dataImagenes.map((image, index) => (
          <div key={index} className="relative">
            <img src={image} alt={`Image ${index + 1}`} className="w-32 h-32 object-cover rounded" />
            <button
              onClick={() => handleRemoveImage(index)}
              className="absolute top-0 right-0 mt-1 mr-1 bg-red-500 text-white rounded-full w-6 h-6 flex justify-center items-center focus:outline-none"
            >
              <span className="text-xs">X</span>
            </button>
          </div>
        ))}
      </div>
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleImageUpload}
        multiple
        className="mt-2 border rounded px-3 py-2"
      />
    </div>
    <button
      onClick={handleSaveChanges}
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
    >
      Guardar Imagenes
    </button>
  </div>
  );
};

export default Imagenes;
