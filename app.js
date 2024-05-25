import express, { urlencoded } from 'express'
import conn from './DB/connect.js'
import web from './router/web.js'

const app = express()
const port = 3000
const db_url = 'mongodb://localhost:27017'

conn(db_url)

app.use(express.urlencoded())

app.set('view engine','ejs')

app.use(express.static('public'))
app.use('/',web)

app.listen(port,()=>{
    console.log(`port run on http://localhost:${port}`)
})