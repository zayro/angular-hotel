# Guia Examen Fronted Almundo

El exámen está compuesto por dos aplicaciones, un backend escrito en NodeJS el cual expondráuna API REST para la interacción con la aplicación frontend

##### Este punto consiste en armar un API REST en Node.js. El mismo será utilizado en el ejercicio 2.

* La funcionalidad de listado y filtrado de hoteles debe estar soportada por la API consumida en la aplicación cliente.

    * se crear 2 ambientes locales de desarrolo basados en el archivo statico data.json y 1 ambiente de produccion basado en base de datos postgresql.

* A la hora de diseñar la estructura de la aplicación, tener en cuenta factores como escalabilidad, reutilización y separación de responsabilidades.
    
    * se diseñaron componentes reutilizables y el api orientado a servicios.
 
* Uso de configuraciones para ajustar como se ejecuta la aplicación en entornos productivos y de desarrollo.

    * se configuraron los valores por defecto en los diferentes entornos de desarrollo


## Tabla De Contenido

- [Estructura de carpetas](#Estructura-de-carpetas)
- [Instalacion](#instalacion)
- [Entorno local de desarrollo](Entorno-local-de-desarrollo)
- [Entorno remoto de produccion](Entorno-remoto-de-produccion)
- [Desarrollo local](Desarrollo-local)
- [Scripts-habilitados](Scripts-habilitados)


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

se debe tener instalador el software de GIT y NODEJS.

ejecutar el siguiente comando

``` shell
git clone https://github.com/zayro/angular-hotel.git
```
ingresar al directorio angular-hotel y ejecutar el siguiente script

``` shell
npm install
```
instala los componenetes necesarios poder ejecutar los scripts de compilacion y ejecucion.

## Entorno local de desarrollo

Este entorno es en cual desarrollador puede lanzar el aplicativo y realizar modificaciones en tiempo real en el cual la consola le ira mostrando los posibles de igual manera ir configurando los posibles test.

En el directorio raiz del proyecto ejecular los siguientes comandos para arrancar el proyecto

#### `npm run develop`

el cual se encargara de compilar el proyecto y subir el servicio web con la siguiente url [http://localhost:3000](http://localhost:3000) 

## Entorno remoto de produccion

El entorno de produccion se encarga conectarse directamente con el api creada que se conecta directamente.

En el directorio raiz del proyecto ejecular los siguientes comandos para arrancar el proyecto.

#### `npm run production`

el cual se encargara de compilar el proyecto y subir el servicio web con la siguiente url [http://localhost:3000](http://localhost:3000) 

## Desarrollo local

Se debe ejecutar `npm run db`  el prototipo del api basado en archivo data.json en el modo de desarrollo.
Abrir navegador y agregar la siguiente url [http://localhost:3000](http://localhost:3000) se puede observar que se encuentra corriendo el api local usando el componente [json-server](https://github.com/typicode/json-server)

se ejecuta `ng serve`  el comando para navegar en la siguiente url `http://localhost:4200/`. permite ver en vivo los cambias que se van desarrollando.

con estos 2 scripts se compilan y manejan los entornos de desarrollo.

### Scripts habilitados

#### `npm test`

Este comando permite observar los componentes en su funcionamiento.

#### `npm lint`

Este comando permite revisar posibles errores de codigo.

#### `npm run serverlocal`

Abrir navegador y agregar la siguiente url [http://localhost:3000](http://localhost:3000) se puede observar que se encuentra corriendo el api local. basado en [express](http://expressjs.com/es/4x/api.html)

## Despliegue entorno production heroku

el aplicativo se testeo con heroku subiendo el proyecto con un deploy en heroku manejando estandares de calidad en el desarrollo.

URL FRONTEND
[https://angular-hotel.herokuapp.com/](https://angular-hotel.herokuapp.com/)
URL BACKEND
[https://angular-hotel-api.herokuapp.com/admin/getAll/hoteles](https://angular-hotel-api.herokuapp.com/admin/getAll/hoteles)
