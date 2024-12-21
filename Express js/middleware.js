const express=  require('express');
const app = express();

//define middleware
const myFirstMiddleware = (req, res, next)=>{
    console.log('This it first middleware and will run on every request');
    next();
}
const port=3000

app.use(myFirstMiddleware)

//route
app.get('/',(req, res)=>{
res.send('Home Page')
})

app.get('/about',(req, res)=>{
    res.send('About Page')
    })

app.listen(port, ()=>{
    console.log(`port is running at ${port}`)

})