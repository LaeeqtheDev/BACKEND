const express = require('express')

const app = express();

//application level settings
app.set('view engine', 'ejs')

//routing
//requesting
app.get('/',(req, res) => {
res.send('home page')
})

//posting
app.post('/api/data', ()=>{
    res.json({
        message: 'Data agyo bhae',
        data: req.body
    })
})

app.use((err, req, res, next)=>{
    console.log(err.stack)
    res.status(500).send('loray lg gye bhaio xD')
})