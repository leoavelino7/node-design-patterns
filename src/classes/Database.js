const logger = require('./Logger')

class Database {
  constructor() {
    this.url = 'Not configured'
  }

  setUrl(url) {
    this.url = url
  }

  connect() {
    logger.log('Database running')
  }
}

module.exports = new Database()