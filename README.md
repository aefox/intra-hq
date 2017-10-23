# Intra-HQ React App [![Build Status](https://travis-ci.org/aefox/intra-hq.svg?branch=develop)](https://travis-ci.org/aefox/intra-hq) [![Stories in Ready](https://badge.waffle.io/aefox/intra-hq.png?label=ready&title=Ready)](https://waffle.io/aefox/intra-hq?utm_source=badge)


# Getting up and running

## Setting up the javascript environment

### Node/npm version
Make sure you are using recent versions of node and npm. No problems have been found with node>=7.10 or 6.0. and npm>=3.10.

### Yarn
Make sure you are using yarn>=0.23

### json-server
We're using [json-server](https://github.com/typicode/json-server) to mock our API needs. You need to install this globally with `yarn global add json-server`.

## Running the project

From the command line run the following:
- `yarn install` (this will download all dependencies)
- `yarn start` (this will start the webpack development server with hot reload; it will also start the json server)

