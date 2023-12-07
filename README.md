# Blog Challenge

Video demostrativo del funcionamiento de la app: https://www.loom.com/share/7f05f5916aa845a6aa49eb7bd1d837c6 

## Estrutura del repositorio

- `./blog-back`: Contiene el backend del proyecto, desarrollado en NestJS y con una base de datos en MySQL.
- `./blog-front`: Contiene el frontend del proyecto, creado en React con Tailwind CSS.

### Requisitos
Docker
Node v18.17

### Levantamiento
1.- Para dar inicio a la base de datos, se emplea el archivo docker-compose.yml, que facilita la creación de un contenedor de MySQL mediante el siguiente comando (por defecto, se iniciará en el puerto 3307):
```
docker-compose up -d
```
2.- En el directorio /blog-back, se procede a iniciar el backend ejecutando los siguientes comandos (por defecto, se activará en el puerto 8000):
```
npm install
npm start
```

3.- Similarmente, para iniciar el frontend, se ejecutan los siguientes comandos en el directorio /blog-front (por defecto, se desplegará en el puerto 3000):
```
npm install
npm start
```
