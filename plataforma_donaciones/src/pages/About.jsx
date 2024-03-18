import React from "react";

const About = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Sobre Nosotros</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nisi
        vel urna vehicula eleifend. Vivamus ac mauris vitae magna pharetra
        fringilla.
      </p>

      <div>
        <h1>ubicacion</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.960705432335!2d-77.032167887706!3d-12.046224664941947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b447e77c71%3A0x5f6421e9ecda9af7!2sJir%C3%B3n%20de%20la%20Uni%C3%B3n%20s%2Fn%2C%20Lima%2015001!5e0!3m2!1ses!2spe!4v1710611047459!5m2!1ses!2spe"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
