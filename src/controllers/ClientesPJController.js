const ClientesPJ = require("../models/ClientesPJ")

module.exports = {
    async createClientePJ(req, res) {
        try {
            const { razao_social, nome_fantasia, email, phone, cnpj, atividade, endereco, data_abertura } = req.body
            const clientePJ = await ClientesPJ.findOne({ where: { cnpj } })
            if (clientePJ) {
                res.status(401).json({ message: "Já existe um cadastro com este CNPJ" })
            } else {
                const clientePJ = await ClientesPJ.create({ razao_social, nome_fantasia, email, phone, cnpj, atividade, endereco, data_abertura })
                res.status(200).json({ clientePJ })
            }
        } catch (error) {
            res.status(400).json({ error })
        }
    }
}