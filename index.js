const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 4000;
// const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello From My first ever node server')
});

const users = [
    { id: 0, name: 'Shabana', email: 'shabana@gmail.com', phone: '01788888888' },
    { id: 1, name: 'Shabnur', email: 'Shabnur@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Sonia', email: 'Sonia@gmail.com', phone: '01788888888' },
    { id: 5, name: 'Susmita', email: 'Susmita@gmail.com', phone: '01788888888' }
]

app.get('/users', (req, res) => {
    // use query parameter
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
})

// app.Method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
    // console.log(req.params.id);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'banaba', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yammi yammi tok fazli');
})

app.listen(port, () => {
    console.log('listening to port', port);
});