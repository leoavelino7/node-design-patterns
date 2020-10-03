const logDataMiddleware = (data) => {
  console.log(data);
  data.end()
}

module.exports = logDataMiddleware