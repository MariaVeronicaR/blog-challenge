# Blog Challenge

Video demostrativo del funcionamiento de la app: https://www.loom.com/share/7f05f5916aa845a6aa49eb7bd1d837c6 

## Estrutura del repositorio

- `./blog-back`: Contiene el backend del proyecto, desarrollado en NestJS y con una base de datos en MySQL.
- `./blog-front`: Contiene el frontend del proyecto, creado en React con Tailwind CSS.

### Requisitos
Docker
Node v18.17

### Levantamiento
1.- Para iniciar la base de datos, se utiliza el archivo docker-compose.yml para crear un contenedor de MySQL con el siguiente comando:
```
docker-compose up -d
```
2.- Para iniciar el backend, se ejecutan los siguientes comandos en el directorio /blog-back:
```
npm install
npm start
```

3.- Para iniciar el frontend, se ejecutan los siguientes comandos en el directorio /blog-front:
```
npm install
npm start
```