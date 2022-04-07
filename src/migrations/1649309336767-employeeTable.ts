import {MigrationInterface, QueryRunner} from "typeorm";

export class employeeTable1649309336767 implements MigrationInterface {
    name = 'employeeTable1649309336767'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" ADD "role_id" character varying`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "roles_role_id" integer`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_13f42debabcdc155b21632097cf" FOREIGN KEY ("roles_role_id") REFERENCES "roles"("role_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_13f42debabcdc155b21632097cf"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "roles_role_id"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "role_id"`);
    }

}
