# eXo Platform documentation

This project is the documentation of the eXo Platform product.

## How to build

The documentation project can be built using the docker image *dldl/sphinx-server*:

    git clone git@github.com:exoplatform/exo-documentation.git
    cd exo-documentation/docs
    docker run -t -v "$(pwd)":/web dldl/sphinx-server make html

The HTML version of the documentation is then available in *docs/_build/html*.