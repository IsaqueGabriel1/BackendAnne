const register = require('../models/Register');

class RegisterController {
    indexAction(req, res) {
        register.registerUser(req, res);
    }
}

module.exports = new RegisterController;