import { MigrationInterface, QueryRunner } from "typeorm";

export class fixFieldadmin1677839266612 implements MigrationInterface {
    name = 'fixFieldadmin1677839266612'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" DROP DEFAULT`);
    }

}
