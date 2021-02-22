# Personal website

`vihaton.com` is my personal website built with React, TypeScript, Material-UI and powered with Docker & K8s

## Dev notes

### Cert manager through helm for your K8s cluster

You want your cluster to serve pages only over ssl/tls (https), so you should get your certs straight. Follow this:

https://cert-manager.io/docs/installation/kubernetes/

### Build local development image

In the `client` directory

```bash
docker build -t vihatoncom:dev .
```

### Run the local image

This should allow running the development image AND seeing code changes immediatly while you develop.

```bash
docker run \
    -it \
    --rm \
    -v ${PWD}:/src/node_modules \
    -v /app/node_modules \
    -p 3000:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    vihatoncom:dev
```

### Build the production version

```bash
docker build -f Dockerfile.prod -t eu.gcr.io/vihaton/vihatoncom:X.Y.Z .
```

Push the image to GCR

```bash
gcloud docker -- push eu.gcr.io/vihaton/vihatoncom:X.Y.Z
```

### K8s

For every step, ensure that you're using the right cluster config and working in the right namespace!

#### Setup the cert manager

The cert managers serves your whole cluster.

```bash
kubectl apply -f k8s/cert-manager.yaml
```

#### Setup an ingress controller

You need something to handle the routing of the requests aimed at your webpage. In K8s a good approach is to create an ingress controller, that handles all incoming traffic aimed at the webpages in your cluster. This way you can configure your DNS to direct everything to one ip-address and handle the routing within the cluster with the ingress controller and within your applications.

By running

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.44.0/deploy/static/provider/cloud/deploy.yaml
```

you create a new namespace and all services & deployments needed for your routing.

**This approach needs one more fine tuning though.** The above configuration creates a deployment on _one_ of the nodes in your cluster. In the case that your cluster has more than one node, this means that the others remain without routing. You need to change the _deployment_ to be a _daemonset_. This ensures that the routing is available on all the nodes on your cluster.

#### Setup the vihatoncom webpage

Apply kubernetes configurations for the first time

```bash
kubectl apply [--namespace vihatoncom] -f src/client/k8s/base/
```

The above creates namespace, static ip, and deployment for the webpage living in `src/client/`.

The last thing is to apply the production ingress:

```bash
kubectl apply -f src/client/k8s/overlays/production/ingress.yaml
```

The ingress tells 1) which addresses should be routed to which service, and 2) which addresses should be certified with the tls provided by the cert manager.

# blog.vihaton.com

The personal blog attached to the website. Self-hosted Ghost, put up with Helm, run on K8s.

## Motivation

If one has something to say it would be nice to do on your own terms, hence one needs a blog, preferably self-hosted (which means K8s hosted). But creating your own content managment system (CMS) from scratch would be re-inventing the wheel.

## Dev notes

### Helm

After installing helm you need the bitnami repo

`helm repo add bitnami https://charts.bitnami.com/bitnami`

and you can do the first release right away with couple additional parameters

`helm install ghost-release -f src/blog/helm/blog.yaml bitnami/ghost`

To upgrade the default installation you can use

```bash
helm upgrade -f src/blog/helm/blog.yaml \
    ghost-release bitnami/ghost \
    --set ghostPassword=$GHOST_PASSWORD,mariadb.auth.rootPassword=$MARIADB_ROOT_PASSWORD,mariadb.auth.password=$MARIADB_PASSWORD,ghostHost=$APP_HOST
```

in order for the above spell to work you need to echo the secrets to your shell first.

> NOTE: if you, for any reason, need to _remove_ your ghost-release with `helm uninstall`, and you have already made changes or published content to the blog, then you can make a re-release by
>
> 1. setting the MariaDB passwords to be the same as the old ones (you need to save the pswds somewhere before the `helm uninstall` to be able to access your data again) and
> 2. tell ghost that there already exists a persistent volume claim with the `persistence.existingClaim` parameter in `helm/blog.yaml`.

### K8s

#### Setup routing

By using the ingress controller and cert manager already set up for the webpage we can simply create an ingress that specifies how the incoming requests aimed to blog should be handled.

```bash
kubectl apply -f src/blog/k8s/blog-ingress.yaml
```
