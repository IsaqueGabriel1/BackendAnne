const connection = require('../config/connection');

class Register {
    async registerUser(req, res) {
        const {nome, email, senha} = req.body;
        if (nome !== "" && email !== "" && senha !== "") {
            await connection.query("INSERT INTO cadastro(nome, email, senha) VALUES (?,?,?)", [nome, email, senha], (error, result) => {
                if (error) {
                    res.json(false);
                } else {
                    res.json(true);
                }
            });
        } else {
            res.json(false);
        }
    }
}

module.exports = new Register;