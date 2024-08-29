import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnsCreatedUpdatesUserEntity1724854476939 implements MigrationInterface {
    name = 'AddColumnsCreatedUpdatesUserEntity1724854476939'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "refresh_tokens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "refreshToken" text NOT NULL, "deviceId" text NOT NULL, CONSTRAINT "PK_7d8bee0204106019488c4c50ffa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "created" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "image" text`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "UQ_f0444b8b5c111257c300932ae06" UNIQUE ("phone")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "UQ_f0444b8b5c111257c300932ae06"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "created"`);
        await queryRunner.query(`DROP TABLE "refresh_tokens"`);
    }

}
