import { getCustomRepository, Repository } from "typeorm"
import { Setting } from "../entities/Setting"
import { SettingsRepository } from "../repositories/SettingsRepository"

// toda a regra de negócio deve ficar dentro dos services

interface ISettingsCreate {
    chat: boolean
    username: string
}

export class SettingsService{ 
    private settingsRespository: Repository<Setting>
    
    constructor() {
        this.settingsRespository = getCustomRepository(SettingsRepository)
    }

    async create({ chat, username}: ISettingsCreate) {

        const userAlreadyExists = await this.settingsRespository.findOne({
            username
        })

        if (userAlreadyExists) {
            throw new Error("User already exists")
        }

        const settings = this.settingsRespository.create({
            chat,
            username,
        })

        await this.settingsRespository.save(settings) // salva de fato a nova linha da tabela

        return settings
    }
}