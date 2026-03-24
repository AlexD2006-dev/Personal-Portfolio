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
  const slug = request.params.projectName
    if (slug === '3d-printing') {
     return response.sendFile('projects/3d-printing.html', { root: 'public' })
    }
    if (slug === 'web-development') {
     return response.sendFile('projects/web-development.html', { root: 'public' })
    }
   response.status(404).send('<h1>Project not found</h1><p><a href="/projects">Back to projects</a></p>')
})

app.use(express.static('public'))

app.use((req, res) => {
  res.status(404).sendFile('404.html', { root: 'public' })
})

app.listen(PORT, () => {
  console.log(`Started server on port ${PORT}`)
})