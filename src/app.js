const MiddlewareManager = require('./configs/MiddlewareManager')

const addCurrentDateMiddleware = require('./middlewares/AddCurrentDateMiddleware')
const logDataMiddleware = require('./middlewares/LogDataMiddleware')

const middlewareManager = new MiddlewareManager()

const defaultData = {
  name: 'Leonardo',
  age: 10
}

middlewareManager.use(addCurrentDateMiddleware)
middlewareManager.use(logDataMiddleware)

middlewareManager.process(defaultData)