const express = require('express')
const consign = require('consign')

const app = express()

app.set('view engine', 'ejs')
app.set('views', './src/views')

consign()
  .include('./src/routes')
  .then('./src/models')
  .then('./src/controllers')
  .into(app)

app.listen(3000, () => console.log('App running in port: 3000'))