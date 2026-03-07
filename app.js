const express = require('express')

const app = express()
const PORT = 3000

app.get('/', (request, response) => {
  response.send('Hello! Welcome to Alex Draesner\'s Portfolio! 🎉')
})

app.listen(PORT, () => {
    console.log(`Started server on port ${PORT}`)
})