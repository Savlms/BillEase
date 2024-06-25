import express from 'express';
const app = express()
import dotenv from 'dotenv'
import cors from 'cors'
import cookie from 'cookie-parser'
dotenv.config()
import router from './route/user.route';
const port = process.env.PORT


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookie())
app.get('/', (req, res) => {
    res.send('Hello')
})

app. use("/", router)

app.listen(port, () => {
    console.log(`server started on ${port}`)
})