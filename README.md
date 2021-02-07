# Personal website

`vihaton.com` is my personal website built with React, TypeScript, Material-UI and powered with Docker.

## Dev notes

### Build local development image

```bash
docker build -t vihatoncom:dev .
```

### Run the local image

```bash
docker run \
    -it \
    --rm \
    -v ${PWD}:/src/client/node_modules \
    -v /app/node_modules \
    -p 3000:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    vihatoncom:dev
```

### Build the production version

```bash
docker build -f Dockerfile.prod -t eu.gcr.io/vihaton/vihatoncom:X.Y.Z .
```

Push the image
```bash
gcloud docker -- push eu.gcr.io/vihaton/vihatoncom:X.Y.Z
```

Apply kubernetes configurations for the first time
```bash
kubectl apply [--namespace vihatoncom] -f k8s/base/
```

reserve an ip
```bash
gcloud compute addresses create vihatoncom-ip --global
```
replace `create` for `describe` to view the addresses

