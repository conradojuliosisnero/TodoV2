# Todo App V2

## Descripción

Todo App V2 es una aplicación de gestión de tareas que permite a los usuarios registrar y autenticar sus cuentas para crear, editar y eliminar tareas personales. Esta versión incluye un sistema de autenticación basado en JWT (JSON Web Tokens) para asegurar las rutas y proteger la información del usuario.

## Características

- Registro de usuarios
- Inicio de sesión de usuarios
- Autenticación de usuarios utilizando JWT
- Creación, edición y eliminación de tareas
- Rutas protegidas accesibles solo para usuarios autenticados

## Tecnologías Utilizadas
 - React
 - JavaScript
 - TailwindCss
 - FramerMotion
  - MongoDB

### Backend
 - MongoDB


### Frontend
 - React
 - JavaScript
 - TailwindCss
 - FramerMotion

## Instalación

### Prerrequisitos

- Node.js y npm (Node Package Manager) instalados

### Pasos para la instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/todo-app-v2.git
    ```

2. Navega al directorio del proyecto:
    ```sh
    cd todo-app-v2
    ```

3. Instala las dependencias del backend:
    ```sh
    npm install
    ```

4. Inicia el servidor:
    ```sh
    node server.js
    ```

5. Abre `index.html` en tu navegador para acceder a la interfaz de usuario.

## Uso

### Registro de Usuario

1. Abre la aplicación en tu navegador.
2. En la sección de "Register", ingresa un nombre de usuario y una contraseña.
3. Haz clic en "Register".

### Inicio de Sesión

1. En la sección de "Login", ingresa tu nombre de usuario y contraseña.
2. Haz clic en "Login". Si las credenciales son correctas, recibirás un token que se almacenará en el `localStorage`.

### Acceso a Rutas Protegidas

1. Después de iniciar sesión, puedes acceder a rutas protegidas como la gestión de tareas.
2. Haz clic en "Access Protected Route" para ver un mensaje de una ruta protegida.

## Futuras Mejoras

- Implementar una base de datos real para almacenar usuarios y tareas
- Añadir funcionalidad para marcar tareas como completadas

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request con tus mejoras.


