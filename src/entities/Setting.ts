import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn} from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity("settings") // aqui dentro colocamos o nome da table que esta entity referencia
export class Setting {

    @PrimaryColumn()
    id: string;

    @Column()
    username: string;
    
    @Column()
    chat: boolean;
    
    @UpdateDateColumn()
    updated_at: Date;
    
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