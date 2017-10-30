.PHONY: dbuild wbuild install run ssr test lint prune bash

NODE_ENV ?= local
IMAGE_NAME = vuejs-test
DOCKER_RUN = docker run -it --rm -e NODE_ENV=$(NODE_ENV)

ifeq ($(NODE_ENV),local)
	DOCKER_RUN += -p 8080:8080 -v $$(pwd)/app:/usr/src/app
endif

DOCKER_RUN += $(IMAGE_NAME):dev-latest

dbuild:
	# Builds the docker image and tags it as "dev-latest"
	@echo "Building image $(IMAGE_NAME)"
	docker image build -t $(IMAGE_NAME):dev-latest -f ./Dockerfile .

wbuild:
	# Creates the webpack build
	@echo "Creating Webpack build"
	$(DOCKER_RUN) npm run build

install:
	# Installs all packages or a single one (e.g. make PACKAGE="jasmine --save-dev" install)
	@echo "Running NPM install"
	$(DOCKER_RUN) npm install $(PACKAGE)

run:
	# Runs the webpack-dev-server on localhost:8080
	@echo "Running image $(IMAGE_NAME)"
	$(DOCKER_RUN)

test:
	# Runs the specs
	@echo "Running tests"
	$(DOCKER_RUN) npm test

lint:
	# Runs ESLint to check the project linting
	@echo "Running ESLint"
	$(DOCKER_RUN) npm run eslint

prune:
	# Prunes orphan NPM packages
	@echo "Running NPM prune"
	$(DOCKER_RUN) npm prune

bash:
	# Getting inside container
	$(DOCKER_RUN) /bin/bash
