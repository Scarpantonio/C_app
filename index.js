/** 
 * HOY =>
 * Ver el video para hacer la primera publicacion a heroku y ver como va evolucionando. 
 * Agregar authentication middleware. asi como las paginas que puede ver un usuario cuando hiso login. y la manera en la que cambia la navegacion cuando el usuario se ha registrado. 
 * Agregar ejs y modelo para reportar crimen. y seguir experimentando con lo aprendido. despues se puede desarrollar la interfas. 
 * 
 * SIMPLE APP DEPLOYMENT NO FRONT/END =>
 * Poner que los crimenes se reproduzcan en el homepage. hacer algo reapido luego podemos planificarla a mas profundidad
 * 
 * COMPLETE APP =>
 * Crear: los reportes del home page son los reportes relaciondos con area donde esa persona vive. y que segun el area pueda buscar. si coloca 'Km13' le aparezcan los reportes relacionados con esa area. 
*/

const express = require('express')
const app =  new express()
app.set('view engine','ejs')
const ejs = require('ejs')
const mongoose = require('mongoose')
const User = require('./models/User')
const bodyParser = require('body-parser')

app.set('view engine','ejs')
app.use(express.static('public'))

mongoose.connect('mongodb://localhost:27017/heroku_test', {useNewUrlParser: true});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// heroku port
let port = process.env.PORT;
if(port == null && port == ""){
    port = 4000;
}

app.listen(port, ()=>{
    console.log('App listening 4000...')    
})

// app.listen(2000,()=>{
//     console.log('listening to port 2000')
// })

app.get('/posts/new',(req,res) => {
    res.render('create')
})

// No habiamos creador el router. por eso no lo podia encontrar el explorador. 
app.get('/crime_report',(req,res) => {
    res.render('crime_report')
})

// Usuario Registrado con exito. 
app.get('/sucess',(req,res) => {
    res.render('sucess')
})

app.post('/user/store',async (req,res) => {
    await User.create(req.body) 
    // res.render('SucessCreate')
    res.redirect('/sucess')
    console.log(req.body)
})

app.get('/',(req,res)=>{
    res.render('index')
})





