import Server from 'lume/core/server.ts';
import cacheBusting from 'lume/middlewares/cache_busting.ts';
import expires from 'lume/middlewares/expires.ts';

const server = new Server({
  port: 8000,
  root: `${Deno.cwd()}/_site`,
});

server.use(cacheBusting());

server.use(expires());

server.start();

console.log('Listening on http://localhost:8000');
