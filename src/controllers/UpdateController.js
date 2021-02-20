const update = require('../models/Update');

class UpdateController {
    indexAction(req, res) {
        update.updateUser(req, res);
    }
}

module.exports = new UpdateController;