const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000

app.engine('handlebars', exphbs({defaultLayout:'main'}))
app.set('view engine','handlebars')

app.get('/',(req,res) => {
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/portfolio',(req,res)=>{
    res.render('portfolio')
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})


app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})