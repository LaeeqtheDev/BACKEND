const express=require('express')
const app = express()

const port = 3000;
//root route
app.get('/',(req, res)=>{
    res.send('Welcome to home page')
})
//get all prods
app.get('/products',(req, res)=>{
    const products=[
        {
            id: 1,
            label: 'Product 1'
        },
        {
            id: 2,
            label: 'Product 2'
        },
        {
            id: 3,
            label: 'Product 3'
        }
    ]
    res.json(products)
})

//get single prod
app.get('/products/:id', (req, res)=>{
    const prodId = parseInt(req.params.id)
    const products=[
        {
            id: 1,
            label: 'Product 1'
        },
        {
            id: 2,
            label: 'Product 2'
        },
        {
            id: 3,
            label: 'Product 3'
        }
    ]
    const getSingleProd= products.find(product => product.id=== prodId)
    if(getSingleProd){
        res.json(getSingleProd)
    } else{
        res.status(404).send("Ma chuda nae nae milra bhrwa")
    }
})

app.listen(port, ()=>{
    console.log(`Server is running at port: ${port}`)
});