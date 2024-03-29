const express = require('express')
const cors = require('cors')

module.exports = () => {
  const app = express()
  app.use(express.json())
  app.use(cors())
  app.get('*', (req, res) => {
    res.send(req.url)
  })
  app.listen(8080, () => {
    console.log('listen')
  })
}
