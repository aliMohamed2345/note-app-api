const express = require("express");
const env = require('dotenv')
const app = express();

env.config()

app.use(express.json())

const PORT = process.env.PORT | 3000


app.get("/", (req, res) => {
    try {
        res.status(200).send({ success: true, message: `hello world` });
    } catch (error) {
        res.status(400).send({ success: true, message: `internal server error` });
    }

})
app.listen(PORT, () => console.log("Server ready on port 3000."));

module.exports = app;