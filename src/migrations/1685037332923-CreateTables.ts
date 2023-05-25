import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1685037332923 implements MigrationInterface {
    name = 'CreateTables1685037332923'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "contactCreateAt" TO "createAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "createAt" TO "contactCreateAt"`);
    }

}
