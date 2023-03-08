import { MigrationInterface, QueryRunner } from "typeorm";

export class fixFieldnumber1678197837916 implements MigrationInterface {
    name = 'fixFieldnumber1678197837916'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "number" character varying(7)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "number" character varying(6)`);
    }

}
