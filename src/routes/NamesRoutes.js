module.exports = function(app) {
  app.get('/', (req, res) => {
    app.src.controllers.NamesController.index(app, req, res)
  })
}