const express = require('express')
const cors = require('cors')

module.exports = () => {
  const app = express()
  app.use(express.json())
  app.use(cors())
  app.post('/file', (req, res) => {
    if (req.body != null) {
      res.send({ status: 'ok' })
    }
  })
  app.listen(1000, () => {
    console.log('listen')
  })
}
