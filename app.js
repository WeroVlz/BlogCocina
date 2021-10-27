const express = require("express");

const app = express();

app.use(express.static("public"));
app.use("/files",express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/public/files/main.html");
});

app.post('/', (req,res) => {
    const rName = req.body.rName;
    const qnpName = req.body.qnpName;
    const ingName = req.body.ingName;
    const preName = req.body.preName;
    const imgFile = req.body.imgFile;


    const data = {
        recipeName: rName,
        specifics: qnpName,
        ingredients: ingName,
        preparation: preName,
        image_url: imgFile
    }

    
    res.render(__dirname + "/public/files/card.html", {recipeName:data.recipeName, qnpInfo: data.specifics, ingredients: data.ingredients, preparation: data.preparation});


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

