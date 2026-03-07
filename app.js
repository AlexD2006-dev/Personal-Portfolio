const express = require('express')

const app = express()
const PORT = 3000

app.get('/', (request, response) => {
  response.send("Hey, I'm Alex Draesner | Welcome to my corner of the internet! 🎉")
})

app.get('/about', (request, response) => {
  response.send('This is Alex Draesner\'s About Page!')
})

app.get('/projects', (request, response) => {
  response.send('This is Alex Draesner\'s Projects Page!')
})

app.get('/project/:projectName', (request, response) => {
  const projectName = request.params.projectName
  const prettyName = projectName.replace(/-/g, ' ')
  response.send(`<h1>${prettyName}</h1><p>Details about ${prettyName} will go here.</p><a href="/projects">← Back to Projects</a>`)
})

app.listen(PORT, () => {
    console.log(`Started server on port ${PORT}`)
})