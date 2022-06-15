'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Selamat Datang di Web Server Sederhana\n')
})

app.listen(PORT, HOST)
console.log(`Server berhasil berjalan di http://${HOST}:${PORT}`)