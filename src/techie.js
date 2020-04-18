const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

// Defining the paths
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setting up handlerbars and location of views
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// Registering partials
hbs.registerPartials(__dirname+ '../views/partials')

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

// Middleware for routing
app.get('/', (req,res) => {
    res.render('home');
})
app.get('/about', (req,res) => {
    res.render('about');
})
app.get('/contact', (req,res) => {
    res.render('contact');
})
app.get('/reachUs', (req,res) => {
    res.render('reachUs');
})

app.listen(port, () => {
    console.log('Server is listening at port number ' + port);
})