import { MigrationInterface, QueryRunner } from "typeorm";

export class fixFieldHour1678234458951 implements MigrationInterface {
    name = 'fixFieldHour1678234458951'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "hour" TIME NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "hour" TIMESTAMP NOT NULL`);
    }

}
