import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationRtsSquads1594442716986 implements MigrationInterface {
    name = 'RelationRtsSquads1594442716986'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `squads` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `rt_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `rts` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `created_At`");
        await queryRunner.query("ALTER TABLE `users` ADD `created_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `updated_At`");
        await queryRunner.query("ALTER TABLE `users` ADD `updated_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `squads` ADD CONSTRAINT `FK_fb61719b489e4cefecc67643e38` FOREIGN KEY (`rt_id`) REFERENCES `rts`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `squads` DROP FOREIGN KEY `FK_fb61719b489e4cefecc67643e38`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `updated_At`");
        await queryRunner.query("ALTER TABLE `users` ADD `updated_At` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `created_At`");
        await queryRunner.query("ALTER TABLE `users` ADD `created_At` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("DROP TABLE `rts`");
        await queryRunner.query("DROP TABLE `squads`");
    }

}
