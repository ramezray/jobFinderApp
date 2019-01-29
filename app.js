const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

const db = require("./config/database")

db.authenticate().then(() => console.log("connected"))
    .catch(err => console.log("Here is the Error: " + err));

const app = express();

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")))

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => res.render("index", {defaultLayout: "landing"}));

app.use("/jobs", require("./routes/jobs"))

app.listen(PORT, console.log(`server started at localhost:${PORT}`));