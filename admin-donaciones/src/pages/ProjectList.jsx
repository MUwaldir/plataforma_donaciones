import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
const ProjectList = ({ projects }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
    };
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-64">
        {projects && projects.map(project => (
          <div key={project._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Slider {...settings}>
              {project.imagenes.map((image, index) => (
                <img key={index} src={image} alt={project.titulo} className="w-full h-40 object-cover" />
              ))}
            </Slider>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.titulo}</h2>
              <p className="text-gray-600 mb-4">{project.descripcion}</p>
              <div className="flex justify-between items-center">
                <p className="text-gray-500">{project.categoria.nombre}</p>
                <Link to={`/projects/${project._id}`}>
                
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Ver detalles</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProjectList;
  