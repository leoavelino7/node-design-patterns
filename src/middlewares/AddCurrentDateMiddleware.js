const pushCurrentDateMiddleware = (data, next) => {
  data.currentDate = new Date().toLocaleDateString('pt-br')
  next()
}

module.exports = pushCurrentDateMiddleware