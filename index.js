const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5100;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/user').then(db =>{
    
    console.log('Database Connected');

}).catch(error => console.log(error));

const userRoutes = require("./src/routes/userRoutes");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/user", userRoutes);

app.listen(port, () => console.log(`server up and runing on port ${port}`));
