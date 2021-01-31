# Personal website

`vihaton.com` is my personal website built with React, TypeScript, Material-UI and powered with Docker.

## TODO

### Client
- first working exmaple
- dockerfile for prod
- reconfigure nginx

### Server 
- init

## Dev notes

### Build local development image

1. with docker build  

```
docker build -t vihatoncom:dev . 
```

2. with docker-compose  
```
docker-compose up -d --build

```

### Run the local image

```
docker run \
    -it \
    --rm \
    -v ${PWD}:/src/client/node_modules \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    vihatoncom:dev
```
