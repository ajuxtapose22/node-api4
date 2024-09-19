require('dotenv').config()

const express =require('express')
const cors = require('cors')
const bcrypt = require('bcryptjs')

const server = express()
const PORT = process.env.PORT || 9000

server.use(express.json())
server.use(cors())

const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' },
    { id: 3, username: 'user3', password: 'password3' } 
];


//API ENDPOINTS

//GET
server.get('/api/hello', (req, res) => {
    res.json({ message: 'api is working'})
})

//GET 
server.get('/api/users', (req, res) => {
    const safeUsers = users.map(user => {
        return {
            id: user.id,
            username: user.username
        }
    })
    res.json(safeUsers)
})

//POST 
server.post('/api/register', async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' })
    }

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10)

        // Create the new user
        const newUser = { id: users.length + 1, username, password: hashedPassword }
        users.push(newUser)

        // Send response without password
        res.status(201).json({ id: newUser.id, username: newUser.username })
    } catch (err) {
        res.status(500).json({ message: 'Error creating user' })
    }
})



server.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params
    const userId = parseInt(id)
    const userIndex = users.findIndex(user => user.id === userId)

    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' })
    }

    users.splice(userIndex, 1)
    res.status(200).json({ message: `User with ID ${userId} has been deleted` })
})





server.use('*', (req, res) => {
    res.send(`<h1>Hello, there!</h1>`)
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
})

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})