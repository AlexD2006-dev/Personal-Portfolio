// Controller for static pages

// Home page
exports.getIndex = (req, res) => {
  res.sendFile('index.html', { root: 'public' })
}

exports.getHome = (req, res) => {
  res.sendFile('home.html', { root: 'public' })
}

exports.getAbout = (req, res) => {
  res.sendFile('about.html', { root: 'public' })
}
