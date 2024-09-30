// Configurando las variables del ambiente del archivo .env
const { config } = require('dotenv')
config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const productRoutes = require('./routes/product.route')

app.use(bodyParser.json())

// Modulos
app.use('/api/products', productRoutes)


// Inicializacion del Servidor
app.listen(process.env.port, () => {
    console.log(`Servidor iniciado en el puerto ${process.env.port}`);
});

module.exports = app