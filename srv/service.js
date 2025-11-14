const cds = require('@sap/cds');
const axios = require('axios');
 
const LOG = cds.log('TorreControl');

module.exports = (async function () {
    
    this.on('READ', 'TorreControl', async (req, next) => {
        LOG.info(JSON.stringify(req?.user));
        LOG.info(JSON.stringify(req));
        return next();
    });
})