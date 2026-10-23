# Comando para listar contenedores
docker container ls # agrega -a para listar todos

#
docker container run --name UnContenedorCool hello-world
docker container run -p 666:80 docker/getting-started
docker container run -d -p 666:80 docker/getting-started

#Borrar el contenedor
docker container stop <id o nombre>
docker container rm <id o nombre>

#Borrar el contenedor de jalon 
docker container rm -f <id o nombre>

#Borrar todos los contenedores que tengo
docker container prune

#
docker image ls

#bajar una imagen 
docker pull <nombre de la imagen>

#
docker container run --name Ubuntu -d ubuntu sleep 3600
docker container exec -it Ubuntu bash

docker container run -e MYSQL_ROOT_PASSWORD=Secret123 -dp 3307:3306 mysql