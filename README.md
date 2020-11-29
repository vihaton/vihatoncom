# Personal website

`vihaton.com` is my personal website built with React, TypeScript, Material-UI and powered with Docker.

## TODO

- dockerfile for prod
- reconfigure nginx

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
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    vihatoncom:dev
```
