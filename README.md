# Guia Examen Fronted Almundo

El exámen está compuesto por dos aplicaciones, un backend escrito en NodeJS el cual expondráuna API REST para la interacción con la aplicación frontend

##### Este punto consiste en armar un API REST en Node.js. El mismo será utilizado en el ejercicio 2.

* La funcionalidad de listado y filtrado de hoteles debe estar soportada por la API consumida en la aplicación cliente.
    * se crear 2 ambientes locales de desarrolo basados en el archivo statico data.json y 1 ambiente de produccion basado en base de datos postgresql 

* A la hora de diseñar la estructura de la aplicación, tener en cuenta factores como escalabilidad, reutilización y separación de responsabilidades.
    * 
 
* Uso de configuraciones para ajustar como se ejecuta la aplicación en entornos productivosy de desarrollo.


## Tabla De Contenido

- [Estructura de carpetas](#Estructura-de-carpetas)
- [Scripts habilitados ](#Scripts-habilitados )
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  



## Estructura de carpetas

Estructura creada por [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0. y personalizada para la realizacion de la prueba:

```
app-hoteles/
  documents/
  server/
    data/
    routes/
  src/
    app/
        class/
        components/
        pipe/
    assets/
    config/
    environments/
    services/
```

## Instalacion

#### `npm install`


instala los componenetes necesarios poder ejecutar los scripts

## Entorno local de desarrollo

Este entorno es en cual desarrollador puede lanzar el aplicativo y realizar modificaciones en tiempo real en el cual la consola le ira mostrando los posibles de igual manera ir configurando los posibles test.

### Scripts habilitados 

En el directorio raiz del proyecto ejecular los siguientes comandos para arrancar el proyecto


#### `npm run db`

Ejecuta el prototipo del api basado en archivo data.json en el modo de desarrollo.
Abrir navegador y agregar la siguiente url [http://localhost:3000](http://localhost:3000) se puede observar que se encuentra corriendo el api local usando el componente [json-server](https://github.com/typicode/json-server)

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm run serverlocal`

Abrir navegador y agregar la siguiente url [http://localhost:3000](http://localhost:3000) se puede observar que se encuentra corriendo el api local. basado en [express](http://expressjs.com/es/4x/api.html)

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

## Entorno remoto  de produccion

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.


