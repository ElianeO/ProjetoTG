const Clientes = require('../models/clientes')

module.exports = {
    async createClientes(req, res) {
        try {
            const { nome, cpf, endereco, phone, email} = req.body
            const cliente = await Clientes.findOne({ where: { cpf} })
            if (cliente) {
                res.status(401).json({ message: "Já existe um cliente com este cpf" })
            } else {
                const cliente = Clientes.create({ nome, cpf, endereco, phone, email})
                res.status(200).json({cliente})
            }
        } catch (error) {
            res.status(400).json({ error })
        }
    }
}