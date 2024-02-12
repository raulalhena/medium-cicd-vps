# CI/CD pipeline a un VPS

Este proyecto consiste en la creación de un pipeline con Github Actions para desplegar aplicaciones NodeJS, tanto frontend como backend en un servidor VPS.

El proyecto consta de un backend en Express con un sólo end point que devuelve un objeto con un mensaje. El frontend está creado con React + Vite y únicamente muestra el mensaje recibido desde el backend. Los dos desarrollados en Typescript.

Se han creado unos tests sencillos para poder mostrar la ejecución de los mismos en el servidor a la hora de realizar la integración. 

- Backend: Se ha utilizado Jest y se realiza un test unitario de la función que devuelve el mensaje, y otro test de integración, que evalua la funcionalidad del end point existente.
- Frontend: Se ha utilizado Vitest y evalua la recepción de los datos desde el servidor y que se muestre el mensaje recibido en pantalla en el componente correspondiente.

## Tecnologías utilizadas:

- Express
- React + Vite
- Jest
- Vitest
- Github Actions
- Servidor Privado Virtual - VPS (Virtual Private Server)
- pm2 - [Guía de instalación de pm2](https://pm2.io/docs/runtime/guide/installation/)

Es necesario tener acceso a un VPS con permisos de administración, un servidor web ejecutandose en el servidor, y pm2. También es necesaria una cuenta en Github para poder ejecutar las Github Actions.

## Ejecución del proyecto

Para poder seguir los pasos de la configuración del entorno, accede al artículo: [Medium CI/CD en VPS](https://raul-alhena.medium.com/ci-cd-pipeline-github-actions-en-vps-5b81e63bfed1)

1. Clonar repositorio.

2. Instalación de dependencias, tanto en el cliente como el en servidor:

 ```bash
  npm install
```

3. Comprobamos que todo funciona correctamente:

- Cliente:

Ejecución del proyecto:

```bash
  npm run dev
```

Ejecución de los tests:

```bash
  npm test
````

- Servidor:

Ejecución del proyecto:

```bash
  npm start
```

Ejecución de los tests:

```bash
  npm test
```

## Configuración de los sistemas y creación de los workflows:

Para seguir con todo el proceso y conseguir ejecutar con éxito la pipeline y así automatizar todo el proceso de puesta en entornos de pre producción o producción de tus aplicaciones sigue los pasos detallos en el artículo de Medium:

[Medium CI/CD en VPS](https://raul-alhena.medium.com/ci-cd-pipeline-github-actions-en-vps-5b81e63bfed1)

### Contacto

raul.alhena@gmail.com 