const express = require('express')

const app = new express()

app.get('/api/info',(req,res)=> {
    res.json({
        name: "levi",
        age: "18"
    })
})

app.listen("3000")