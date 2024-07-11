const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const data = [{"ID":1,
    "username":"Jagannath",
    "Batch":"FSD-B59WDT"
},
{"ID":2,
    "username":"Magesh",
    "Batch":"FSD-B59WDT"
},
{"ID":3,
    "username":"Kali",
    "Batch":"FSD-B59WDT"
},
{"ID":4,
    "username":"Priya",
    "Batch":"FSD-B59WDT"
},
{"ID":5,
    "username":"Keerthana",
    "Batch":"FSD-B59WDT"
}]

app.get('/greet', function (req, res) {
  res.send('Welcome To class')
})

app.get('/api/userdata', (req,res)=>{
    res.json(data)
})

app.listen(3000, ()=>{
    console.log(`Node JS Running in localhost:3000`)
})