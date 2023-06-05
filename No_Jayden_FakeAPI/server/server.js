// Similar with __init__  app = flask
const express = require("express")
const app = express()
const  port = 8000


app.use(express.json(), express.urlencoded({extended: true}))

const UsersRoutes = require('./routes/users.routes.js')
const CompaniesRoutes = require('./routes/companies.routes.js')
UsersRoutes(app)
CompaniesRoutes(app)

const { faker } = require('@faker-js/faker');
const createUser = () => {
    const fakeUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        _id: faker.string.uuid()
    }
    return fakeUser;
}
const createCompany = () => {
    const fakeCompany = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: [{
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }]
    }
    return fakeCompany;
}
const newFakeUser = createUser()
const newFakeCompany = createCompany()
const combined = {newFakeUser, newFakeCompany}
console.log("New Fake User: ", newFakeUser, "New Fake Company: ", newFakeCompany, "Combined: ", combined)


app.get('/api/users/new', (req, res) => res.json(newFakeUser))
app.get('/api/companies/new', (req, res) => res.json(newFakeCompany))
app.get('/api/user/company', (req, res) => res.json(combined))

app.listen(port, () => console.log(`Listening on port: ${port}`))