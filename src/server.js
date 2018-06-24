'use strict';
import Hapi from 'hapi';
import './database';
import routes from './routes';

const server = Hapi.server({
  host: 'localhost',
  port: 8000
});

// Add the route
server.route(routes);

// Start the server
async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
}

start();
