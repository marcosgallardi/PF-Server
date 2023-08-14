# Backend para El Festín Online 🍔🍕🍹

![PF-Server Logo](logo-el-festin-nav.0a5698dd4a1a2f776220.png)

¡Bienvenido al repositorio del backend de **El Festín Online**! Este servidor gestiona la lógica de negocio, la autenticación, los pedidos y más para nuestro restaurante tipo e-commerce.

## Instalación 🚀

1. Clona este repositorio: `git clone https://github.com/marcosgallardi/PF-Server.git`
2. Instala las dependencias: `npm install`
3. Crea un archivo `.env` basado en el `.env.example` y configura las variables de entorno.

## Uso 💡

1. Inicia el servidor: `npm start`
2. El backend estará disponible en: `http://localhost:3000`

## Características ✨

- Gestión de pedidos y menú del restaurante.
- Integración con servicios en la nube para almacenar imágenes (Cloudinary).
- Autenticación y autorización con JSON Web Tokens (jsonwebtoken).
- Integración con base de datos PostgreSQL a través de Sequelize.

## Tecnologías Utilizadas 🛠️

- Node.js
- Express.js
- PostgreSQL
- Cloudinary
- JSON Web Tokens (jsonwebtoken)

## Endpoints API 🌐

La API proporciona varios endpoints para administrar el restaurante. ¡No dudes en probarlos todos! Aquí hay algunos ejemplos:

### Categoría: Menú 🍽️

#### Obtener Lista de Platos

- `GET /api/Dish`: Obtener la lista de Platos.
- Ejemplo: `GET /api/Dish`

#### Obtener Lista de Guarniciones

- `GET /api/side`: Obtener la lista de guarniciones.
- Ejemplo: `GET /api/side`

#### Obtener Lista de Bebidas

- `GET /api/Drink`: Obtener la lista de Bebidas.
- Ejemplo: `GET /api/drink`

### Categoría: Usuarios 👥

#### Obtener Lista de Usuarios

- `GET /api/user`: Obtener la lista de usuarios.
- Ejemplo: `GET /api/user`

#### Actualizar Usuario por ID

- `PUT /api/user/:id`: Actualizar información de un usuario existente.
- Ejemplo: `PUT /api/user/:id`

...

## Contribución 🤝

¡Agradecemos las contribuciones a nuestro proyecto! Si deseas contribuir:

1. Crea un fork de este repositorio.
2. Crea una rama para tu función: `git checkout -b nueva-funcion`
3. Realiza tus cambios y realiza commit: `git commit -m "Agrega nueva función"`
4. Envía un pull request.

## Participantes 👏

Agradecemos a los siguientes participantes por su contribución a este proyecto:

- Gustavo Clemente ([@tatoClemente](https://github.com/tatoclemente)) - [Repositorio](https://github.com/tatoclemente)

- Jonathan Cesar Aguado ([@jonathanaguado22](https://github.com/jonathanaguado22)) - [Repositorio](https://github.com/jonathanaguado22)

- Mario Enrique Lujan ([@lennycba](https://github.com/lennycba)) - [Repositorio](https://github.com/lennycba)

- Matias Santiago Marensi ([@matiasmarensi](https://github.com/Matiasmarensi)) - [Repositorio](https://github.com/Matiasmarensi)

- Marcos Gallardi ([@marcosgallardi](https://github.com/marcosgallardi)) - [Repositorio](https://github.com/marcosgallardi)

## Reportar Problemas 🐞

Si encuentras algún problema o tienes sugerencias, [aquí](https://github.com/marcosgallardi/PF-Server/issues) puedes crear un issue.

## Repositorio del Frontend 🌐

Si estás interesado en explorar el código del frontend de **El Festín Online**, puedes encontrarlo en el siguiente enlace:

- [Repositorio del Frontend](https://github.com/tatoclemente/PF-Front-End-Grupo3)

¡No dudes en visitar y contribuir al frontend también!

## ¡Explora y Disfruta! 🎉

No dudes en explorar todas las rutas disponibles en la API. ¡Que tengas una experiencia deliciosa en El Festín Online! 🍽️🎊

## Reportar Problemas

Si encuentras algún problema o tienes sugerencias, [aquí](https://github.com/marcosgallardi/PF-Server/issues) puedes crear un issue.
