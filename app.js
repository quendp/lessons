const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const app = express();
const userRoutes = require("./src/routes/user.routes")

app.use(bodyParser.json());
app.use("/api/user", userRoutes)

app.listen(3000, async () => {
    console.log("Server is running on port 3000");
    await sequelize.authenticate();
});