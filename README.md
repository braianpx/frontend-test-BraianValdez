# TechTest - Frontend

Este proyecto es una plataforma de administración de tareas responsive. Permite a los usuarios crear, editar, eliminar y marcar tareas como completadas, todo a través de una interfaz amigable. Este es el componente de cliente que interactúa con el backend para gestionar las tareas de manera eficiente.

### Tecnologías utilizadas:
- **React**: Para construir una interfaz de usuario dinámica y reactiva.
- **Axios**: Para gestionar las solicitudes HTTP entre el cliente y el backend.
- **Tailwind CSS**: Para estilizar la aplicación de manera rápida y eficiente con un diseño responsivo.
- **HTML & CSS**: Para la estructura básica y los estilos de la aplicación.
- **JavaScript**: Para manejar la lógica y las interacciones dentro de la aplicación.

## Pre-requisitos
Antes de comenzar, asegúrate de tener instalado **Node.js** y **npm** en tu máquina. También es recomendable usar un editor de código como **Visual Studio Code** para facilitar el desarrollo.

### Requisitos adicionales

- **Navegador web**: Google Chrome o cualquier otro navegador moderno.
- **Node.js**: Asegúrate de tener la última versión de [Node.js](https://nodejs.org/).
- **Tener el backend del proyecto - TechTest**: Asegúrate de que el Backend del Proyecto esté en funcionamiento, es necesario tener el backend activo para poder consumir la API y utilizar las distintas funcionalidades de la aplicación. 

## Configuración inicial

1. **Clonar el repositorio**
Para obtener el proyecto, clona el repositorio usando Git:

   ```bash
   git clone https://github.com/braianpx/frontend-test-BraianValdez.git
    ```
2. **Abrir el proyect**
Abre la carpeta TechTask-Front en tu editor de código preferido:

  ```bash
  cd frontend-test-BraianValdez
  ```
3. **Instalar dependencias**
Una vez dentro de la carpeta del proyecto, instala las dependencias ejecutando el siguiente comando:

  ```bash
  npm install
  ```
4. **Configuración de variables de entorno**
Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno:

  ```plaintext
  VITE_BASE_URL=http://localhost:3000  # URL del backend
  ```
##### Nota: Asegúrate de que la URL del backend esté correctamente configurada para poder comunicarte con el servidor.

5. **Construir el proyecto**
Una vez configurado todo, puedes compilar el proyecto para producción con el siguiente comando:

  ```bash
  npm run build
  ```
6. **Iniciar el servidor de desarrollo**
Para iniciar el servidor de desarrollo y comenzar a trabajar en la aplicación frontend, ejecuta:

  ```bash
  npm run dev
  ```
##### Nota: Esto abrirá automáticamente tu navegador en http://localhost:3000.
### Guia de como utlizar la app
- **Crear tareas:** En la esquina inferior derecha encontrarás un botón con el cual podrás crear tareas.
- **Editar y Borrar tareas:** Cada tarea tendrá un botón para borrarla o editarla si es necesario.
- **Cambio de estado de las tareas:** En la parte superior derecha habrá un botón/checkbox para cambiar el estado de la tarea.
- **Filtros de busqueda por texto y estado de la tarea:** Estos filtros son combinables y puedes usarlos para buscar una tarea específica.

### Vistas y Rutas
- **Home:** Aparecerán todas las tareas que estén incompletas.
- **Task:** Aparecerán todas las tareas, independientemente de su estado.
  
### Estructura del Proyecto
- **src/:** Contiene todos los archivos de código fuente de la aplicación.
- **components/:** Componentes reutilizables de la interfaz de usuario.
- **services/:** Servicios que se comunican con el backend.
- **pages/:** Páginas de la aplicación.
- **styles/:** Archivos de estilo, como los de TailwindCSS.
- **hooks/:** Custom hooks que encapsulan la lógica reutilizable.
- **public/:** Contiene los archivos estáticos como index.html y recursos como imágenes.
