import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import CourseDetail from "./components/Course/CourseDetail";
import CourseList from "./components/Course/CourseList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Courses from "./pages/Courses";
import LessonDetail from "./components/Lesson/LessonDetail";
import NotFoundPage from "./components/Layout/NotFoundPage";

function App() {
  const courses = [
    { id: 1, title: 'Curso de Matemáticas', image: 'https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'Este curso cubre temas como álgebra, geometría y cálculo.' },
    { id: 2, title: 'Curso de Ciencias', image: 'https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'Este curso explora diversas disciplinas científicas, como física, química y biología.' },
    { id: 3, title: 'Curso de Historia', image: 'https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'Este curso ofrece un recorrido por diferentes períodos y eventos históricos.' },
    { id: 4, title: 'Curso de Programación', image: 'https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'Este curso enseña los fundamentos de la programación y el desarrollo de software.' },
    { id: 5, title: 'Curso de Literatura', image: 'https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'Este curso explora obras literarias destacadas y teorías literarias.' },
    { id: 6, title: 'Curso de Arte', image: 'https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'Este curso abarca diferentes formas de arte, desde la pintura hasta la escultura.' },
    { id: 7, title: 'Curso de Música', image: 'https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'Este curso cubre aspectos teóricos y prácticos de la música, incluyendo composición e interpretación.' },
    { id: 8, title: 'Curso de Idiomas', image: 'https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'Este curso enseña diferentes idiomas, como inglés, español, francés, entre otros.' },
    { id: 9, title: 'Curso de Economía', image: 'https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'Este curso introduce conceptos económicos fundamentales y su aplicación en el mundo real.' },
    { id: 10, title: 'Curso de Filosofía', image: 'https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'Este curso explora temas filosóficos como la ética, la metafísica y la lógica.' }
  ];
  
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen  bg-blue-500">

        <Navbar />
        

        <Routes>
          <Route exact path="/" element={<Home importantCourses={courses} />} />
          <Route exact path="/courses" element={<Courses courses={courses} />} />
          {/* <Route exact path="/course/:id" element={<CourseDetail />} /> */}
          <Route exact path="/courses/course/:id" element={<CourseDetail />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/lessondetail/:id" element={<LessonDetail />} />
          <Route path="*"  element={<NotFoundPage/>} />
          {/* Agrega más rutas aquí si es necesario */}
          {/* <Route element={<NotFound/>} /> */}
        </Routes>
    
        <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
