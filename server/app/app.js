'use strict'


module.exports = (app) => {
    const models = require('./model/index');
    const routes = require('./route/index');
    routes(app);
}