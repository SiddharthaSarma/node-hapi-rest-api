'use strict';
import Hapi from 'hapi';
import HapiSwagger from 'hapi-swagger';
import Inert from 'inert';
import Vision from 'vision';
import './database';
import routes from './routes';

const server = new Hapi.server({
  host: 'localhost',
  port: 8000
});

const register = server.register([
  Inert,
  Vision,
  {
    plugin: HapiSwagger
  }
]);
// Add the route
server.route(routes);

// Start the server
async function start() {
  try {
    await register;
    await server.start();
  } catch (err) {
    console.log(err);
  }
  console.log('Server running at:', server.info.uri);
}

start();
