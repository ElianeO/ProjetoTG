const Empresas = require('../models/empresas')

module.exports = {
    async createEmpresa(req, res) {
        try {
            const { cnpj, razao_social, nome_fantasia, email, endereco, phone, atividade} = req.body
            const empresa = await Empresas.findOne({ where: { cnpj} })
            if (empresa) {
                res.status(401).json({ message: "Já existe um usuario com este cnpj" })
            } else {
                const empresa= await PessoasJuridicas.create({ cnpj, razao_social, nome_fantasia, email, endereco, phone, atividade})
                res.status(200).json({ empresa})
            }
        } catch (error) {
            res.status(400).json({ error })
        }
    }
}