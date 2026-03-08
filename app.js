const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000

app.use('/css', express.static(path.join(__dirname, 'css')))
app.use('/js', express.static(path.join(__dirname, 'js')))

app.get('/', (request, response) => {
  response.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Alex Draesner's Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Playwrite+NZ+Basic:wght@100..400&display=swap" rel="stylesheet">
        <link href="/css/style.css" rel="stylesheet" />
      </head>
      <body style="display:flex; flex-direction:column; justify-content:center; align-items:center; min-height:100vh; margin:0;">
        <h1>Welcome to Alex Draesner's Portfolio</h1>
        <p style="text-align:center; font-size: 20px;">A collection of my work and projects.</p>
        <div style="text-align:center; margin-top: 40px;">
          <a href="/home" style="color:#ffffff; border: 2px solid #ffffff; padding: 15px 30px; text-decoration: none; font-size: 20px;">Enter Portfolio →</a>
        </div>
      </body>
    </html>
  `)
})


app.get('/home', (request, response) => {
  response.sendFile('index.html', { root: 'public' })
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