

// toda a regra de negócio deve ficar dentro dos services

import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

interface IUsersCreate {
    email: string
}

export class UsersService {
    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository)
    }

    async create({ email }: IUsersCreate ) {
        // primeiro verificar se usuario ja existe
        const userExists = await this.usersRepository.findOne({
            email
        })
        
        // se existir retornar user
        if (userExists) {
            return userExists
        }
        
        // se nao existir salvar no db
        const user = this.usersRepository.create({
            email
        })

        await this.usersRepository.save(user)

        return user
    }
}
