const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const router = require("./router");


app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/bounties", router);

app.use((err, req, res, next) => {
    console.log(err);
    return res.send({ errMsg: err.message });
});

app.listen(8000, () => {
    console.log("Server is running on Port 8000!");
});