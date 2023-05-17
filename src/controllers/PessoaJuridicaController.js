const PessoasJuridicas = require('../models/pessoasjuridicas')

module.exports = {
    async createPJ(req, res) {
        try {
            const { cnpj, razao_social, nome_fantasia, email, endereco, phone, atividade} = req.body
            const pessoajuridica = await PessoasJuridicas.findOne({ where: { cnpj } })
            if (pessoajuridica) {
                res.status(401).json({ message: "Já existe um usuario com este cnpj" })
            } else {
                const pessoajuridica = await PessoasJuridicas.create({ cnpj, razao_social, nome_fantasia, email, endereco, phone, atividade})
                res.status(200).json({ pessoajuridica})
            }
        } catch (error) {
            res.status(400).json({ error })
        }
    }
}