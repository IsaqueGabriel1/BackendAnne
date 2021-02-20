const connection = require('../config/connection');

class Login {
    async getUser(req, res) {
        const {nome, senha} = req.body; 
        if (nome !== "" && senha !== "") {
            await connection.query("SELECT id_user FROM cadastro WHERE nome = ? AND senha = ?", [nome, senha], (error, result) => {
                if (result.length > 0) {
                    res.json([
                        true,
                        result[0]
                    ]);
                } else {
                    res.json(false);
                }
            })
        } else {
            res.json(false);
        }
    }
}

module.exports = new Login;