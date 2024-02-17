-- -- Usuarios (Users): Almacena la información de los usuarios 
-- registrados en la plataforma, como nombre, correo electrónico, 
-- contraseña, rol (estudiante, instructor, administrador), etc.
CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(20) NOT NULL
);

-- Cursos (Courses): Contiene la información sobre los cursos 
-- disponibles, como título, descripción, instructor, duración, etc.
CREATE TABLE Courses (
    course_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    instructor_id INT REFERENCES Users(user_id),
    duration INT, -- Duración en semanas, meses, etc.
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Inscripciones (Enrollments): Registra la relación entre los usuarios y los cursos en los que están inscritos.
CREATE TABLE Enrollments (
    enrollment_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(user_id),
    course_id INT REFERENCES Courses(course_id),
    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Lecciones (Lessons): Almacena información sobre las lecciones dentro de un curso, como título, contenido, duración, etc.
CREATE TABLE Lessons (
    lesson_id SERIAL PRIMARY KEY,
    course_id INT REFERENCES Courses(course_id),
    title VARCHAR(100) NOT NULL,
    content TEXT,
    duration INT, -- Duración en minutos
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Comentarios (Comments): Permite a los usuarios dejar comentarios en las lecciones de un curso.
CREATE TABLE Comments (
    comment_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(user_id),
    lesson_id INT REFERENCES Lessons(lesson_id),
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
