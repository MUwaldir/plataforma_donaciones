Proyecto:

id: Identificador único del proyecto.
titulo: Título del proyecto.
descripcion: Descripción detallada del proyecto y su propósito.
monto_meta: Monto total que se pretende recaudar para el proyecto.
organizacion: Nombre de la organización responsable del proyecto.
categoria: Categoría principal del proyecto (educación, salud, medio ambiente, etc.).
ubicacion_latitud: Latitud de la ubicación del proyecto.
ubicacion_longitud: Longitud de la ubicación del proyecto.
direccion: Dirección física del proyecto.
miembros: Número de personas o beneficiarios involucrados en el proyecto.
imagenes: Lista de URLs de imágenes que representan el proyecto (de 3 a 5 imágenes).
cuentas_bancarias: Lista de números de cuentas bancarias para donaciones.
monederos_digitales: Lista de números de monederos digitales para donaciones.
Categoría:

id: Identificador único de la categoría.
nombre: Nombre de la categoría (educación, salud, medio ambiente, etc.).
Testimonio:

id: Identificador único del testimonio.
proyecto_id: Referencia al proyecto al que pertenece el testimonio.
nombre: Nombre de la persona que proporciona el testimonio.
contenido: Contenido del testimonio o historia de éxito.
Contacto:

id: Identificador único del contacto.
proyecto_id: Referencia al proyecto al que pertenece el contacto.
tipo: Tipo de contacto (correo electrónico, número de teléfono, enlace a redes sociales, etc.).
valor: Valor del contacto (dirección de correo electrónico, número de teléfono, enlace, etc.).
Equipo:

id: Identificador único del miembro del equipo.
proyecto_id: Referencia al proyecto al que pertenece el miembro del equipo.
nombre: Nombre del miembro del equipo.
cargo: Cargo o función del miembro del equipo en el proyecto.
descripcion: Breve descripción o biografía del miembro del equipo.
Donación:

id: Identificador único de la donación.
proyecto_id: Referencia al proyecto al que se realiza la donación.
monto: Monto donado por el usuario.
fecha: Fecha y hora en que se realizó la donación.
metodo_pago: Método de pago utilizado para la donación (tarjeta de crédito, PayPal, transferencia bancaria, etc.).