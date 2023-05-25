const Empresas = require('../models/empresas')
const Empresa = require('../models/empresas')

module.exports = {
    async createEmpresa(req, res) {
        try {
            const { cnpj, razao_social, nome_fantasia, email, endereco, phone, natureza_juridica, atividade } = req.body
            const empresa = await Empresa.findOne({ where: { cnpj } })
            if (empresa) {
                res.status(401).json({ message: "Já existe uma empresa com este cnpj" })
            } else {
                const empresa = await Empresa.create({ cnpj, razao_social, nome_fantasia, email, endereco, phone, natureza_juridica, atividade })
                res.status(200).json({ empresa })
            }
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async updateEmpresa(req, res) {
        try {
            const { id } = req.params
            const { cnpj, razao_social, nome_fantasia, email, endereco, phone, porte, atividade } = req.body
            const empresa = await Empresa.findOne({ where: { id } })
            if (!empresa) {
                res.status(401).json({ message: "Nenhuma empresa encontrada" })
            } else {
                const empresa = await Empresa.update({ cnpj, razao_social, nome_fantasia, email, endereco, phone, porte, atividade }, { where: { id } })
                res.status(200).json({ id })
            }
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async listEmpresas(req, res) {
        try {
            const empresas = await Empresas.findAll()
            if (!empresas) {
                res.status(401).json({ message: 'Não existem empresas cadastradas' })
            }
            res.status(200).json({ empresas })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async listOne(req, res) {
        const { id } = req.params
        const empresa = await Empresa.findOne({ where: { id } })
        if (!empresa) {
            res.status(401).json({ message: 'Empresa não encontrada' })
        } else {
            await Empresa.findOne({ where: { id } })
            res.status(200).json({ empresa })
        }
    },
    async deleteEmpresa(req, res) {
        const { id } = req.params
        const empresa = await Empresa.findOne({ where: { id } })
        if (!empresa) {
            res.status(401).json({ message: 'Empresa não encontrada' })
        } else {
            await Empresa.destroy({ where: { id } })
            res.status(200).json({ ok: true })
        }
    }
}