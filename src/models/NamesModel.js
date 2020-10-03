const fs = require("fs")

function namesModel() { }

namesModel.prototype.getAll = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(__dirname + '/../data/names.json', 'utf8', function (err, result) {
      if (err) {
        reject([])
      }else {
        const parseResult = JSON.parse(result)
        resolve(parseResult.names)
      }
    })
  })
}

module.exports = function () {
  return namesModel
}
