const express = require('express');
const path = require('node:path');
const app = express();
const port = 3000; 

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/public')));
app.get('/', (req, res) => {
   let page = 'home'
    let css = "/css/style.css";
    res.render('index', {title: 'PRO-HEALTH', css, page})
})
app.get('/contact', (req, res) => {
    let page = 'contact';
    let css = "/css/contact.css";
    res.render('contact', {title: "Contact Us", css, page});
 });

 app.get('/services', (req, res) => {
   let page = 'services'
    let css = "/css/services.css";
    res.render('services', {title: "Our Services", css, page});
 })

//  app.all('*', (req, res) => {
//     res.render('error', {title: "404 Page"});
//  })



 app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    
})

