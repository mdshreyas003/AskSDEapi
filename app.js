const express = require('express')
const ProblemSet = require('./ProblemSet.json')
const app = express()
const cors = require('cors')
app.use(cors({
    origin:"*"
}))
app.get('/api/problemset/',(req,res)=>{
    res.json(ProblemSet)
})

app.listen(5000,()=>{
    console.log("started...")
})