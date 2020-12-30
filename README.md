# Image Gallery project

This is the simplest Image Gallery project.
User can upload and delete image from the gallery.

The main idea of this project is to understand how to work with Docker.

## Tech Stack Used

- React.js
- Node.js
- Mongodb
- Docker
- Docker-compose

## How to run project

### Dev mode

- Clone Repository
- Enter project directory
- run docker-compose -f docker-compose-local.yml build
- run docker-compose -f docker-compose-local.yml up
- Open [http://localhost:3008](http://localhost:3008) to view it in the browser.

### Production mode

- Clone Repository
- Enter project directory
- Run docker-compose up
- Open [http://localhost:3008](http://localhost:3008) to view it in the browser.

### Docker Images
- [Server Image](https://hub.docker.com/r/matr369/gallery_server) - for the server part of the application
- [Client Image](https://hub.docker.com/r/matr369/gallery_client) - for the client part of the application
