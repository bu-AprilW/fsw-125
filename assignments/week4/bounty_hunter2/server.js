const express = require('express');
const app = express();


app.use(express.json());
app.use("/bounties", require("./routes/bountyRouter.js"))


const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log('Server is running on PORT 8000')
})