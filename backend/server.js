import express from 'express'
import env from 'dotenv'

env.config()


const app = express();

app.use(express.json())
app.get('/', (req, res) => {
    try {
        res.status(200).json({ success: true, message: `hello world` })
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`now the server is working in the port ${PORT}`))