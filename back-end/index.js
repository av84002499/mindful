import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import routes from "./routes";
const app  = express();
const port = 3100;

// mongo connection 
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017',{
    useNewUrlParser: true,
    useUnifiedTopology : true
});

// bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

routes(app);

app.get('/',(req,res) =>
res.send('our application is run'));

app.listen(port,() =>
console.log('our application is runing'));