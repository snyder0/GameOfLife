import express from 'express'
import http from 'http'

const app = express()
const server = http.Server(app)

app.use('/Client/', express.static(`${ __dirname }/Client/`))

app.get('/', (req, res) => {
    res.sendFile(`${ __dirname }/Client/index.html`)
})

server.listen(5000, () => {
    console.log('Listening on port 5000!')
})