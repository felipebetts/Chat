import { Request, Response } from 'express'
import { SettingsService } from '../services/SettingsService'

export class SettingsController {

    async create(req: Request, res: Response) {
        // vamos criar um novo objeto (item) para a tabela settings

        const { chat, username } = req.body

        const settingsService = new SettingsService()

        try {
            const settings = await settingsService.create({ chat, username })

            return res.json(settings)
        } catch(err) {
            return res.status(400).json({
                message: err.message
            })
        }
    }
}