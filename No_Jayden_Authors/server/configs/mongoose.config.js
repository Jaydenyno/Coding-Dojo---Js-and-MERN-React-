const mongoose = require('mongoose')

const dbName = process.env.ATLAS_DATABASE
const username = process.env.ATLAS_USERNAME
const password = process.env.ATLAS_PASSWORD

const uri = `mongodb+srv://${username}:${password}@cluster0.jlsuqq8.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Establish a connection to database: ${dbName}`))
.catch((err) => console.log(`Connection error! ==> `, err))