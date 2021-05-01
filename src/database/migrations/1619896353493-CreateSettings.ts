import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSettings1619896353493 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            // é importante sempre definir uma chave primária para uma tabela

            new Table({
                name: "settings",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "username",
                        type: "varchar"
                    },
                    {
                        name: "chat",
                        type: "boolean",
                        default: true
                    },
                    {
                        // configurando da forma abaixo, a coluna de created_at se atualizará sozinha
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        // configurando da forma abaixo, a coluna de updated_at se atualizará sozinha
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("settings")
    }

}
