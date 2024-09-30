const Product = require('../../models/product')
const odoo = require('../../odoo')

async function get(req, res) {
    const xmlrpc = require('xmlrpc');

    const url = 'http://jose-gil.odoo.com';
    const common = xmlrpc.createClient(`${url}/xmlrpc/2/common`);

    common.methodCall('authenticate', ['jose-gil', 'hibachi.01backend@icloud.com', 'joseluisgil', {}], (err, uid) => {
        if (err) {
            return res.status(404).json({ message: 'Error en la conexion' })
        } else {
            const client = xmlrpc.createClient(`${url}/xmlrpc/2/object`);
            const itemId = parseInt(req.params.id);
            client.methodCall('execute_kw', ['jose-gil', uid, 'joseluisgil', 'stock.quant', 'read', [[itemId]], { fields: ['id', 'product_id', 'quantity', 'location_id'] }], (err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(404).json({ message: 'Error al obtener los productos' })
                } else {
                    return res.status(200).json(result);
                }
            })
        }
    });
}

module.exports = get