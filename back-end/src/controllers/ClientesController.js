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
    },
    async updateCliente(req, res) {
        try {
            const { id } = req.params
            const { nome, cpf, endereco, phone, email } = req.body
            const cliente = await Clientes.findOne({ where: { id } })
            if (!cliente) {
                res.status(401).json({ message: "Nenhum cliente encontrado" })
            } else {
                const cliente = await Clientes.update({ nome, cpf, endereco, phone, email }, { where: { id } })
                res.status(200).json({ id })
            }
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async listClientes(req, res) {
        try {
            const cliente = await Clientes.findAll()
            if (!cliente) {
                res.status(401).json({ message: 'Não existem clientes cadastradas' })
            }
            res.status(200).json({ cliente })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async listOne(req, res) {
        const { id } = req.params
        const cliente = await Clientes.findOne({ where: { id } })
        if (!cliente) {
            res.status(401).json({ message: 'Cliente não encontrado' })
        } else {
            await Clientes.findOne({ where: { id } })
            res.status(200).json({ cliente })
        }
    },
    async deleteCliente(req, res) {
        const { id } = req.params
        const cliente = await Clientes.findOne({ where: { id } })
        if (!cliente) {
            res.status(401).json({ message: 'Cliente não encontrado' })
        } else {
            await Clientes.destroy({ where: { id } })
            res.status(200).json({ ok: true })
        }
    }
}