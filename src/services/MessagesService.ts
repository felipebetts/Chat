import { getCustomRepository, Repository } from 'typeorm';
import { Message } from '../entities/Message';
import { MessagesRepository } from './../repositories/MessagesRepository';

interface IMessageCreate {
    admin_id?: string
    text: string
    user_id: string
}

export class MessagesService {
    private messagesRepository: Repository<Message> // atributos private só são acessíveis de dentro da classe

    constructor() {
        this.messagesRepository = getCustomRepository(MessagesRepository)
    }

    async create({ admin_id, text, user_id }: IMessageCreate) {

        const message = this.messagesRepository.create({
            admin_id,
            text,
            user_id,  
        })

        await this.messagesRepository.save(message)

        return message
    }

    async listByUser(user_id: string) {

        const list = await this.messagesRepository.find({
            where: { user_id },
            // com a configuracao de relations abaixo trazemos todos os dados do user junto também![ CUIDADO! PODE SER (É) MAIS LENTO!]
            relations: ['user'] //mesma string atribuida na column manyToOne na Message Entity
        })

        return list
    }
}