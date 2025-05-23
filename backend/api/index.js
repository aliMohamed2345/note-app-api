const express = require("express");
const app = express();
app.get("/", (req, res) => {
    try {
        res.status(200).send({ success: true, message: `hello world` });
    } catch (error) {
        res.status(400).send({ success: true, message: `internal server error` });
    }
})
app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;