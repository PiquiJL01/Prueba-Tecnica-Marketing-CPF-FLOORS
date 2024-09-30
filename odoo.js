var Odoo = require('node-odoo');

const odoo = new Odoo({
    url: 'http://jose-gil.odoo.com', // Replace with your Odoo instance URL
    db: 'jose-gil', // Replace with your Odoo database name
    username: 'hibachi.01backend@icloud.com', // Replace with your Odoo username
    password: 'joseluisgil', // Replace with your Odoo password
});

// const odoo = new Odoo({
//     url: 'http://jose-gil.odoo.com/odoo', // Replace with your Odoo instance URL
//     db: 'my-company', // Replace with your Odoo database name
//     username: 'Mitchell Admin', // Replace with your Odoo username
//     password: 'joseluisgil', // Replace with your Odoo password
// });

module.exports = odoo