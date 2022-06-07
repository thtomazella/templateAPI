import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1634059539800 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
          new Table({
            name: "users",
            columns: [{
              name: "id",
              type: "uuid",
              isPrimary: true
            },{
              name: "nome",
              type: "varchar"
            }, {
              name: "email",
              type: "varchar"
            },{
              name: "contato",
              type: "varchar"
            },{
              name: "endereco",
              type: "varchar"
            }],
          })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users")
  }
}
