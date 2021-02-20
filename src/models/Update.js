const { text } = require('body-parser');
const connection = require('../config/connection');

class Update {
    updateUser(req, res) {
        const {email, senha} = req.body;
        if (email !== "" && senha !== "") {
            connection.query("SELECT id_user FROM cadastro WHERE email = ?", [email], (error, result) => {
                if (result.length > 0) {
                    const id = result[0].id_user;
                    connection.query("UPDATE cadastro SET senha = ? WHERE id_user = ?", [senha, id], (error, result) => {
                        if (result.changedRows > 0) {
                            res.json(true);
                        } else {
                            res.json(false);
                        }
                    })
                } else {
                    res.json(false);
                }
            })
        } else {
            res.json(false);
        }
    }
}

module.exports = new Update;