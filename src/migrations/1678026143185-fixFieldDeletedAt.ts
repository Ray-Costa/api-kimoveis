import { MigrationInterface, QueryRunner } from "typeorm";

export class fixFieldDeletedAt1678026143185 implements MigrationInterface {
    name = 'fixFieldDeletedAt1678026143185'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
    }

}
