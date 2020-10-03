const DataPipeline = require('./DataPipeline')

class MiddlewareManager {
  constructor() {
    this.middlewares = []
  }

  process(data = {}) {
    const dataPipeline = new DataPipeline(this.middlewares, data)

    dataPipeline.dispatch()
  }

  use(middleware) {
    this.middlewares.push(middleware)
  }
}

module.exports = MiddlewareManager