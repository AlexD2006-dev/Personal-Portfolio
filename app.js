const express = require('express')

const app = express()
const PORT = 3000

app.get('/', (request, response) => {
  response.send('Hello! Welcome to Alex Draesner\'s Portfolio! 🎉')
})

app.get('/about', (request, response) => {
  response.send('This is Alex Draesner\'s About Page!')
})

app.get('/projects', (request, response) => {
  response.send('This is Alex Draesner\'s Projects Page!')
})

app.listen(PORT, () => {
    console.log(`Started server on port ${PORT}`)
})