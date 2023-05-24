import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1684941753595 implements MigrationInterface {
    name = 'CreateTables1684941753595'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contacts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "contactName" character varying NOT NULL, "contactEmail" character varying NOT NULL, "contactCellphone" character varying NOT NULL, "contactCreateAt" date NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "UQ_5539f06b0fccdc1d9cbc88c4978" UNIQUE ("contactEmail"), CONSTRAINT "UQ_9e1f28d3fd2d14836c849537f69" UNIQUE ("contactCellphone"), CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying(120) NOT NULL, "cellphone" character varying NOT NULL, "profileImage" character varying NOT NULL, "createAt" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_15f2ebe082a6e43a960f9f88411" UNIQUE ("cellphone"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
    }

}
