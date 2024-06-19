const express = require('express');
const app = express();
const port = 8000;

require('../configuración/mongoose.config');
app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyJokeRoutes = require('../rutas/jokes.routes');
AllMyJokeRoutes(app);

app.listen(port, () => console.log(`The server is all fired up on port ${port}`));
