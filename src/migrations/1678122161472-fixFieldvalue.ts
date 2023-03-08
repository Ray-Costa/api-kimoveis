import { MigrationInterface, QueryRunner } from "typeorm";

export class fixFieldvalue1678122161472 implements MigrationInterface {
    name = 'fixFieldvalue1678122161472'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "value" numeric(12,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "value" integer NOT NULL`);
    }

}
