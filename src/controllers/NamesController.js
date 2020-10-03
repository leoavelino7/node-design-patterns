module.exports.index = async function(app, req, res) {
  const namesModel = new app.src.models.NamesModel()
  const names = await namesModel.getAll();

  res.render('NamesViews/index', {names})
}