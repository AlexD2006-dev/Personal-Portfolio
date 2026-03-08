const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000

app.use('/css', express.static(path.join(__dirname, 'css')))
app.use('/js', express.static(path.join(__dirname, 'js')))


app.get('/', (request, response) => {
  response.sendFile('index.html', { root: 'public' })
})

app.get('/home', (request, response) => {
  response.sendFile('home.html', { root: 'public' })
})

app.get('/about', (request, response) => {
  response.sendFile('about.html', { root: 'public' })
})

app.get('/projects', (request, response) => {
  response.sendFile('projects.html', { root: 'public' })
})

app.get('/project/:projectName', (request, response) => {
  const projectName = request.params.projectName
  const prettyName = projectName.replace(/-/g, ' ')
  response.send(`<h1>${prettyName}</h1><p>Details about ${prettyName} will go here.</p><a href="/projects">← Back to Projects</a>`)
})

app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`Started server on port ${PORT}`)
})