const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Utilise les middlewares par défaut (logger, static, cors, etc.)
server.use(middlewares);

// Autorise les requêtes POST, PUT, DELETE depuis d'autres domaines
server.use(jsonServer.bodyParser);

// Point d'entrée principal (API REST générée à partir de db.json)
server.use(router);

// Lancement du serveur sur le port défini par Render ou par défaut 4025
const port = process.env.PORT || 4025;
server.listen(port, () => {
  console.log(`🚀 JSON Server est lancé sur le port ${port}`);
});
