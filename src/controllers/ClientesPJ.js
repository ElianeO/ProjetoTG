const ClientesPJ = require('../models/ClientesPJ')
module.exports = {
    async createClientePJ(req, res) {
        try {
            const { name, email} = req.body
            const clientePJ = await ClientesPJ.findOne({ where: { email } })
            if (clientePJ) {
                res.status(401).json({ message: "Já existe um usuario com este email" })
            } else {
                const clientePJ = await ClientesPJ.create({ name, email})
                res.status(200).json({ clientePJ})
            }
        } catch (error) {
            res.status(400).json({ error })
        }
    }
    }
