const mongoose = require("mongoose");

mongoose.connect("mongodb://27017/jokes_db", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(() => {
	console.log('Conexión a base de datos exitosa.');
})
.catch((error) => {
	console.log(`Hubo un error al conectar con la base de datos: ${error}`);
});