const logger = require('./classes/Logger')
const database = require('./classes/Database')

logger.setConfig({appName: 'App -'})

database.connect()
logger.log('Running in port 3000')