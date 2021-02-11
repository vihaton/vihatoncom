# Personal website

`vihaton.com` is my personal website built with React, TypeScript, Material-UI and powered with Docker & K8s

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

# blog.vihaton.com

The personal blog attached to the website. Self-hosted Ghost, put up with Helm, run on K8s.

## Motivation

If one has something to say it would be nice to do on your own terms, hence one needs a blog, preferably self-hosted (which means K8s hosted).

## Dev notes

After installing helm you need the bitnami repo

`helm repo add bitnami https://charts.bitnami.com/bitnami`

and you can do the first release right away 

`helm install ghost-release bitnami/ghost` 

Some security related further configurations might be needed. For that you need to upgrade the default installation with 

```bash
helm upgrade -f src/blog/helm/blog.yaml \
    ghost-release bitnami/ghost \
    --set ghostPassword=$GHOST_PASSWORD,mariadb.auth.rootPassword=$MARIADB_ROOT_PASSWORD,mariadb.auth.password=$MARIADB_PASSWORD,ghostHost=$APP_HOST
```

in order for the above spell to work you need to echo the secrets to your shell first.