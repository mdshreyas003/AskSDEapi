const express = require('express')
const ProblemSet = require('./ProblemSet.json')
const app = express()
const cors = require('cors')
const coins =  require('./coins.json')
const size = coins.length
app.use(cors({
    origin:"*"
}))
app.get('/api/problemset/',(req,res)=>{
    res.json(ProblemSet)
})

app.get('/api/getCoins/',(req,res)=>{
    const per_page = req.query?.per_page
    const page_no = req.query?.page_no
    const data = new Array()
    console.log(typeof(coins))
    for(let i=per_page*(page_no-1);i<per_page*(page_no);i = (i+1)%size)
    {
        data.push(coins[i])
    }
    res.json(data)
})

app.listen(5000,()=>{
    console.log("started...")
})