const express = require('express')
const app = express()


app.get('/menu', (req,res)=>{
    const newMenu = req.query.newMenu;
    res.send(`Today Menu is - Lemonade Large, Medium, Small, ${newMenu}`)
})

app.post('/new_order', (req,res)=>{
    const size = req.query.size;
    res.send(`New Order taken for ${size} Lemonade, Thank you`)
})

app.listen(3000, ()=>{
    console.log(`Node JS Running in localhost:3000`)
})