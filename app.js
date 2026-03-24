const express = require('express')
const path = require('path')
const connectDB = require('./db')

const app = express()
const Project = require('./models/Project')
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
const PORT = 3000

// Connect to MongoDB
connectDB()

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

app.get('/projects', async (request, response) => {
  const projects = await Project.find()
  response.render('projects', { projects })
})

app.get('/projects/new', (request, response) => {
  response.render('new-project')
})

app.post('/projects', async (request, response) => {
  try {
    const project = new Project({
      name: request.body.name,
      slug: request.body.slug,
      description: request.body.description,
      image: request.body.image
    })
    await project.save()
    response.redirect('/projects')
  } catch (error) {
    console.error(error)
    response.send('Error: The project could not be created.')
  }
})

// Show edit form
app.get('/project/:slug/edit', async (request, response) => {
  try {
    const project = await Project.findOne({ slug: request.params.slug })
    if (!project) throw new Error('Project not found')
    response.render('edit-project', { project })
  } catch (error) {
    console.error(error)
    response.status(404).send('Project not found')
  }
})

// Handle edit form submission
app.post('/project/:slug/edit', async (request, response) => {
  try {
    const project = await Project.findOneAndUpdate(
      { slug: request.params.slug },
      {
        name: request.body.name,
        slug: request.body.slug,
        description: request.body.description,
        image: request.body.image
      },
      { new: true }
    )
    response.redirect('/projects')
  } catch (error) {
    console.error(error)
    response.send('Error: The project could not be updated.')
  }
})

// Delete a project
app.get('/project/:slug/delete', async (request, response) => {
  try {
    await Project.findOneAndDelete({ slug: request.params.slug })
    response.redirect('/projects')
  } catch (error) {
    console.error(error)
    response.send('Error: The project could not be deleted.')
  }
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
