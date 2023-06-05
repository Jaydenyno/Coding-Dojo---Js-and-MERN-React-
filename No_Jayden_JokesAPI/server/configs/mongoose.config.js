//establish a connection db server
const mongoose = require("mongoose")


const dbName = process.env.ATLAS_DATABASE
const username = process.env.ATLAS_USERNAME
const password = process.env.ATLAS_PASSWORD

const uri = `mongodb+srv://${username}:${password}@cluster0.jlsuqq8.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Establish a DoomLynk to DS Port Maintenance ${dbName}`))
.catch((err) => console.log(`Abort the Rebel Alliance is boarding the base station`, err))