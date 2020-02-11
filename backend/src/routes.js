const { Router } = require('express');
const routes = Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'testendo rota base' });
});

module.exports = routes;