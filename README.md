## Vue.js 2 boilerplate with Karma, Webpack and Chrome headless

![Travis CI Build](https://travis-ci.org/fracasula/vuejs-karma-webpack.svg?branch=master)


## Usage

* `make dbuild` (build the Docker image on top of `node:slim`)
* `make install` (runs an `npm install` while mounting the container volume to get all installed files on the host)
* `make wbuild` (creates the webpack build)
* `make lint` (uses `eslint` for code validation)
* `make test` (runs the tests using Karma, Jasmine and Chrome headless)

For other useful commands check the [Makefile](Makefile).
