import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMessages1619910231674 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'messages',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'admin_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'user_id',
                        type: 'uuid',
                    },
                    {
                        name: 'text',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ],
                foreignKeys: [
                    // definindo as foreign keys da tabela messages:
                    {
                        name: 'FKUser', // nome da fk
                        referencedTableName: 'users', // nome da tabela de onde vem a fk
                        referencedColumnNames: ['id'], // nome da coluna da tabela que vem o fk
                        columnNames: ['user_id'], // nome da coluna da tabela atual(messages) que receberá a fk
                        onDelete: 'SET NULL', // se o usuário for deletado as mensagens não serão deletadas, apenas o campo de user_id se tornará null
                        onUpdate: 'SET NULL',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('messages')
    }

}
