const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.use(cors({ origin: '*' }))

app.get('/', (_, res) => res.json({ message: 'Hello world!' }))
app.all('*', (_, res) => res.status(404).json({ message: 'Resource not found' }))

const PORT = Number(process.env.PORT || 3000)

app.listen(PORT, '0.0.0.0', () => console.log(`The app is running on port ${PORT}`))
