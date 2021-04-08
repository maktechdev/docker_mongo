require("dotenv").config()
var express = require("express")
var path = require("path")
var fs = require("fs")
var app = express()
var MongoClient = require('mongodb').MongoClient()

app.use(bodyParser.urlencoded({
    extended=True
}))

app.use(bodyParser.json())
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get('/profile-picture', function (req, res) {
    var img = fs.readFileSync('./images/profile-picture.png')
    res.writeHead(200, { 'Content-Type': 'image/png' })
    res.end(img, 'binary')
})

app.listen(3000, function () {
    console.log("App is listening on port 3000")
})
