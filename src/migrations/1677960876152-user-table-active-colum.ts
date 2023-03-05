import { MigrationInterface, QueryRunner } from "typeorm";

export class userTableActiveColum1677960876152 implements MigrationInterface {
    name = 'userTableActiveColum1677960876152'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "active" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "active"`);
    }

}
