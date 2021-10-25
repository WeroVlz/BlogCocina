const express = require("express");

const app = express();

app.use("/public", express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/public/files/main.html");
});

app.get("/aboutus", (req, res) => {
    res.redirect("/");
});

app.get("/recipes", (req, res) => {
    res.redirect("/");
});



app.listen(3000, () => {
    console.log("Server listening in port 3000...");
});

