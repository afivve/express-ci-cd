const express = require('express')
const cors = require('cors')
const { PORT } = require('./config')
const { User } = require('./database/models')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/user', async (req, res) => {

    try {

        const user = await User.findAll()

        return res.status(200).json(user)

    } catch (error) {
        console.log(error)
        return res.status(500).json("internal server error")
    }

})

app.listen(PORT, () => {
    console.log(`Server is up and listening at port: ${PORT}`)
})
