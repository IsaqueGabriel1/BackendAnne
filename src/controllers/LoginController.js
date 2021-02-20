const login = require('../models/Login');

class LoginController {
    indexAction(req, res) {
        login.getUser(req, res);
    }
}

module.exports = new LoginController;