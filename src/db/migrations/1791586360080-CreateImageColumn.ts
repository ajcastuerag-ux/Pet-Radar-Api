import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateImageColumn1791586360080 implements MigrationInterface {
    name = 'CreateImageColumn1791586360080'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "LOST_PET" ADD "image" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "LOST_PET" DROP COLUMN "image"`);
    }

}
