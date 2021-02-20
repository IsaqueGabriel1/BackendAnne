const connection = require('../config/connection');

class Modules {
    getModules(req, res) {
        const {id} = req.params;
        if (id !== "") {
            connection.query("SELECT * FROM cadastro AS c INNER JOIN modulo AS m ON c.id_user = m.fk_user WHERE c.id_user = ?", [id], (error, result) => {
                if (result.length > 0) {
                    res.json(result[0]);
                } else {
                    res.json(false);
                }
            })
        } else {
            res.json(false);
        }
    }
}

module.exports = new Modules;