const express = require('express')
const ProblemSet = require('./ProblemSet.json')
const app = express()
const cors = require('cors')
app.use(cors({
    origin:"http://localhost:3000"
}))
app.get('/api/problemset/',(req,res)=>{
    res.json(ProblemSet)
})

app.listen(5000,()=>{
    console.log("started...")
})