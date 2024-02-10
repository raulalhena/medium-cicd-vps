# CI/CD pipeline a un VPS

Este proyecto consiste en la creación de un pipeline con Github Actions para desplegar aplicaciones NodeJS, tanto frontend como backend en un servidor VPS.

El proyecto consta de un backend en Express con un sólo end point que devuelve un objeto con un mensaje. El frontend está creado con React + Vite y únicamente muestra el mensaje recibido desde el backend.

Se han creado unos tests sencillos para poder mostrar la ejecución de los mismos en el servidor a la hora de realizar la integración. 

- Backend: Se ha utilizado Jest y se realiza un test unitario de la función que devuelve el mensaje, y otro test de integración, que evalua la funcionalidad del end point existente.
- Frontend: Se ha utilizado Vitest y evalua la comunicación con el servidor y que se muestre el mensaje recibido en pantalla.


