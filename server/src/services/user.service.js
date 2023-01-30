const {user} = require("../../models");

class userService {
    static async createUser({username, password, email}) {
        try {
            const userCreated = await user.create({username, password, email});
            return userCreated
        } catch (err){
            console.log(err);
        }
    }
}

module.exports = { userService }