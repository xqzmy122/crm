const express = require('express')
const cors = require('cors')
const clientRouter = require("./routes/client.route")
const appointmentRouter = require("./routes/appointment.route")

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(cors())
app.use("/db", clientRouter)
app.use("/db", appointmentRouter)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})