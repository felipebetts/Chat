import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { SettingsRepository } from '../repositories/SettingsRepository'

export class SettingsController {

    async create(req: Request, res: Response) {
        // vamos criar um novo objeto (item) para a tabela settings

        const { chat, username } = req.body

        const settingsRespository = getCustomRepository(SettingsRepository)

        const settings = settingsRespository.create({
            chat,
            username,
        })

        await settingsRespository.save(settings) // salva de fato a nova linha da tabela

        return res.json(settings)
    }
}