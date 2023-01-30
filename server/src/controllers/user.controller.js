const { userService } = require("../services/user.service");

class userController {
    static async createUser(req, res) {
        try {
            const {username, password, email} = req.body;
            const user = await userService.createUser({username, password, email});
            res.json(user);
        } catch(err) {
            console.log(err)
        }
    }
}

module.exports = { userController };