const { response } = require('express')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello I am am excited learning node and express with nodemon. automatic restart')
})

const users = [
    { id: 0, name: 'Jubair', email: 'jubair@gmail.com', phone: '01792313623' },
    { id: 1, name: 'shabnur', email: 'jubair@gmail.com', phone: '01792313623' },
    { id: 2, name: 'shrabonti', email: 'jubair@gmail.com', phone: '01792313623' },
    { id: 3, name: 'shuchorita', email: 'jubair@gmail.com', phone: '01792313623' },
    { id: 4, name: 'Sonia', email: 'jubair@gmail.com', phone: '01792313623' },

]

app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(users);
    }
})

//app.METHOD
app.post('/users', (req, res) => {
        const newUser = req.body;
        newUser.id = users.length;
        users.push(newUser);
        console.log('hitting the post', req.body)
            //res.send(JSON.stringify(newUser))
        res.json(newUser)
    })
    //dinamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mangoes', 'oranges', 'banana', 'apple']);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send("yammy yammy tok marka fazli Am");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})