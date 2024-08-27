import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserEntity1724763491387 implements MigrationInterface {
    name = 'AddUserEntity1724763491387'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "age" integer, "phone" text NOT NULL, "isVerified" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_3c3ab3f49a87e6ddb607f3c4945" UNIQUE ("email"), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Users"`);
    }

}
