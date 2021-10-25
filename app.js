const express = require("express");

const app = express();

app.use("/public", express.static(__dirname + '/public'));
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/main.html");
});


app.listen(3000, () => {
    console.log("Server listening in port 3000...");
});