const express = require('express')
const apiMocker = require('connect-api-mocker')
const cors = require("cors");

const PORT = 8000
const app = express()

app.use(cors({ origin: true, credentials: true }));

app.use('/api', apiMocker("mock-api"))

app.listen(PORT,() => console.log(`mock-api is running on ${PORT}`))




