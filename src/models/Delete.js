const connection = require('../config/connection');

class Delete {
    deleteUser(req, res) {
        const {id} = req.params;
        if (id !== "") {
            connection.query("DELETE cadastro, modulo FROM cadastro INNER JOIN modulo ON cadastro.id_user = modulo.fk_user WHERE cadastro.id_user = ?", [id], (error, result) => {
                if (error) {
                    res.json(id);
                } else {
                    res.json(id)
                }
            });
        } else {
            res.json(id)
        }
    }
}

module.exports = new Delete;