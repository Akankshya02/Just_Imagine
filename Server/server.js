import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())
app.use(cors())

app.get('/',(re, res)=> res.send("API Working Fine"))

app.listen(PORT, ()=> console.log('server running on port '+PORT))