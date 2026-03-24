// models/Project.js
const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
  name: String,
  slug: String,
  description: String,
  image: String,
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project

