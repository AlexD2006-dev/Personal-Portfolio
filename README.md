# Alex's Portfolio Website
A responsive portfolio website showcasing my work in software engineering and 3D printing.
Built with a Node.js/Express backend connected to a MongoDB database.

## Pages
1. HOME - general info page
2. ABOUT - personal background
3. PROJECTS - showcase my 3D printing and web technologies work

### Features
- Mobile and tablet breakpoints
- Navigating between all pages
- Link to external portfolio work
- Express backend with dynamic routing
- MongoDB database with full CRUD functionality
- EJS templating to render database entries

#### Technologies Used
1. HTML
2. CSS
3. JavaScript
4. Node.js
5. Express
6. MongoDB
7. Mongoose
8. EJS
9. Google Fonts

##### How to Run Locally
1. Make sure you have Node.js and MongoDB installed and running
2. In the terminal run: `npm install`
3. Start the server: `node app.js`
4. Open your browser and go to: `http://localhost:3000`

###### Routes
- `/` - Welcome page
- `/home` - Main portfolio page
- `/about` - About page
- `/projects` - Projects page (loaded from MongoDB)
- `/project/:projectName` - Dynamic route for individual projects
      more specifically:
      - `/project/3d-printing` - 3D Printing — InsightOut project page
      - `/project/web-development` - Web Development project page
- `/projects/new` - Add a new project
- `/project/:slug/edit` - Edit a project
- `/project/:slug/delete` - Delete a project

## View Live Site
https://alexd2006-dev.github.io/Personal-Portfolio/

## GitHub Repo
https://github.com/AlexD2006-dev/Personal-Portfolio
