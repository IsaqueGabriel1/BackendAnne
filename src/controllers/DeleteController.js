const delet = require('../models/Delete');

class DeleteController {
    indexAction(req, res) {
        delet.deleteUser(req, res);
    }
}

module.exports = new DeleteController;