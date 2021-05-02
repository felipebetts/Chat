import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'
import { User } from "./User";


@Entity('messages')
export class Message {

    @PrimaryColumn()
    id: string

    @Column()
    admin_id: string
    
    @Column()
    text: string

    @JoinColumn({ name: 'user_id' })
    @ManyToOne(() => User) // muitas mensagens para um usuario
    user: User
    
    @Column()
    user_id: string

    @CreateDateColumn()
    created_at: Date

    constructor() {
        // o constructor será chamado toda vex que for criada um instancia dessa classe (ex: new Setting)
        // Queremos popular o campo de id dentro do servidor, então vamos criar essa condicao:
        if (!this.id) {
            // se nao houver id ao inserir um dado, o id será gerado aqui pelo uuid v4
            this.id = uuid()
        }
    }
}