const Product = require('../../models/product')
const odoo = require('../../odoo')

async function create(req, res) {
    const xmlrpc = require('xmlrpc');

    const url = 'http://jose-gil.odoo.com'; // replace with your Odoo server URL
    const common = xmlrpc.createClient(`${url}/xmlrpc/2/common`);

    common.methodCall('authenticate', ['jose-gil', 'hibachi.01backend@icloud.com', 'joseluisgil', {}], (err, uid) => {
        if (err) {
            return res.status(404).json({ message: 'Error en la conexion' })
        } else {
            const client = xmlrpc.createClient(`${url}/xmlrpc/2/object`);
            const { name, description, list_price } = req.body;
            client.methodCall('execute_kw', ['jose-gil', uid, 'joseluisgil', 'stock.quant', 'create', [[{
                name,
                description,
                list_price,
            }]], {}], (err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(404).json({ message: 'Error al crear el producto' })
                } else {
                    return res.status(200).json(result)
                }
            })
        }
    });
}

module.exports = create