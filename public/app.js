// Handle Registration
document.getElementById('register-form').addEventListener('submit', async function (event) {
    event.preventDefault()
    
    const username = document.getElementById('register-username').value
    const password = document.getElementById('register-password').value

    const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })

    const data = await response.json()
    alert(data.message || `User ${data.username} registered successfully`)
})

// Handle Login
document.getElementById('login-form').addEventListener('submit', async function (event) {
    event.preventDefault()
    
    const username = document.getElementById('login-username').value
    const password = document.getElementById('login-password').value

    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })

    const data = await response.json()
    alert(data.message || `Welcome, ${username}!`)
})

// Fetch and Display Users
document.getElementById('fetch-users').addEventListener('click', async function () {
    const response = await fetch('/api/users')
    const users = await response.json()

   
