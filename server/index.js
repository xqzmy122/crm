const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())

app.get('/', (req, res) => {

})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})