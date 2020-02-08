const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const logger = require("morgan");
let app = express();
const PORT = process.env.PORT || 3008;
require('./routes/api_routes')(app);
require('./routes/html_routes')(app);

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// Host Static Files so css and js files can be retrieved
app.use(express.static(path.join(__dirname, '/public'))); // Set the port of our application, process.env.PORT lets the port be set by Heroku

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });
// app.get("/exercise", (req, res) => {
//     res.sendFile(path.join(__dirname + "/public/exercise.html"));
// });



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});