require('dotenv').config()
const express = require('express')
const path = require('path')
const connectDB = require('./db')
const Project = require('./models/Project')

const app = express()
const PORT = process.env.PORT || 3000

// Set EJS as the templating engine
app.set('view engine', 'ejs')

// Parse form data from POST requests
app.use(express.urlencoded({ extended: true }))

// Connect to MongoDB
connectDB()

// Serve static CSS and JS files
app.use('/css', express.static(path.join(__dirname, 'css')))
app.use('/js', express.static(path.join(__dirname, 'js')))

// Static pages
app.get('/', (request, response) => {
  response.sendFile('index.html', { root: 'public' })
})

app.get('/home', (request, response) => {
  response.sendFile('home.html', { root: 'public' })
})

app.get('/about', (request, response) => {
  response.sendFile('about.html', { root: 'public' })
})

// List all projects from the database
app.get('/projects', async (request, response) => {
  const projects = await Project.find()
  response.render('projects', { projects })
})

// Show form to create a new project
app.get('/projects/new', (request, response) => {
  response.render('new-project')
})

// Save a new project to the database
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

// Show edit form for a project
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

// Update a project in the database
app.post('/project/:slug/edit', async (request, response) => {
  try {
    await Project.findOneAndUpdate(
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

// Delete a project from the database
app.post('/project/:slug/delete', async (request, response) => {
  try {
    await Project.findOneAndDelete({ slug: request.params.slug })
    response.redirect('/projects')
  } catch (error) {
    console.error(error)
    response.send('Error: The project could not be deleted.')
  }
})

// Show individual project detail page (dynamic route)
app.get('/project/:projectName', async (request, response) => {
  try {
    const slug = request.params.projectName
    const project = await Project.findOne({ slug })
    response.render('project', { project })
  } catch (err) {
    console.error(err)
    response.status(500).send('Server error')
  }
})

// Serve remaining static files from /public
app.use(express.static('public'))

// 404 handler — must be last
app.use((req, res) => {
  res.status(404).sendFile('404.html', { root: 'public' })
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
