const modules = require('../models/Modules');

class ModuleController {
    indexAction(req, res) {
        modules.getModules(req, res)
    }
}

module.exports = new ModuleController;