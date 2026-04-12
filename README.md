# Alex's Portfolio Website
A responsive portfolio website showcasing my work in software engineering and 3D printing.
Built with a Node.js/Express backend connected to a MongoDB database.

## Pages
1. HOME - general info page
2. ABOUT - personal background
3. PROJECTS - showcase my 3D printing and web technologies work

## Features
- Mobile and tablet breakpoints
- Navigating between all pages
- Link to external portfolio work
- Express backend with dynamic routing
- MongoDB database with full CRUD functionality
- EJS templating to render database entries
- Admin authentication to protect project management routes

## Technologies Used
1. HTML
2. CSS
3. JavaScript
4. Node.js
5. Express
6. MongoDB
7. Mongoose
8. EJS
9. Google Fonts

## Environment Variables
Create a `.env` file in the root directory with the following variables:

MONGODB_URI=your_mongodb_atlas_connection_string
ADMIN_USER=your_admin_username
ADMIN_PASSWORD=your_admin_password
PORT=3000

## How to Run Locally
1. Make sure you have Node.js installed
2. Clone the repo: `git clone https://github.com/AlexD2006-dev/Personal-Portfolio.git`
3. In the terminal run: `npm install`
4. Create a `.env` file with the variables above
5. Start the server: `node app.js`
6. Open your browser and go to: `http://localhost:3000`

## Routes
- `/` - Welcome page
- `/home` - Main portfolio page
- `/about` - About page
- `/projects` - Projects page (loaded from MongoDB)
- `/project/:projectName` - Dynamic route for individual projects
  - `/project/3d-printing` - 3D Printing — InsightOut project page
  - `/project/web-development` - Web Development project page
- `/projects/new` - Add a new project (admin only)
- `/project/:slug/edit` - Edit a project (admin only)
- `/project/:slug/delete` - Delete a project (admin only)

## View Live Site
https://personal-portfolio-p7ol.onrender.com

## GitHub Repo
https://github.com/AlexD2006-dev/Personal-Portfolio
