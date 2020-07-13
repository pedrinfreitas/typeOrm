import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationQuestionForms1594446331253 implements MigrationInterface {
    name = 'RelationQuestionForms1594446331253'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `squads` DROP FOREIGN KEY `FK_fb61719b489e4cefecc67643e38`");
        await queryRunner.query("CREATE TABLE `forms` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `type` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `projects` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `owner` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `squad_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `questions` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `entry_type` varchar(255) NOT NULL, `type` varchar(255) NOT NULL, `weight` int NOT NULL, `amount` int NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `questions_forms` (`questionsId` int NOT NULL, `formsId` int NOT NULL, INDEX `IDX_41810a1a9810ed25d484726f4d` (`questionsId`), INDEX `IDX_596c71253d3b43fe2d371bb9f5` (`formsId`), PRIMARY KEY (`questionsId`, `formsId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `squads` ADD CONSTRAINT `FK_fb61719b489e4cefecc67643e38` FOREIGN KEY (`rt_id`) REFERENCES `rts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `projects` ADD CONSTRAINT `FK_359af2de54ee9e12d1ec37f9e2d` FOREIGN KEY (`squad_id`) REFERENCES `squads`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `questions_forms` ADD CONSTRAINT `FK_41810a1a9810ed25d484726f4d9` FOREIGN KEY (`questionsId`) REFERENCES `questions`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `questions_forms` ADD CONSTRAINT `FK_596c71253d3b43fe2d371bb9f5d` FOREIGN KEY (`formsId`) REFERENCES `forms`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `questions_forms` DROP FOREIGN KEY `FK_596c71253d3b43fe2d371bb9f5d`");
        await queryRunner.query("ALTER TABLE `questions_forms` DROP FOREIGN KEY `FK_41810a1a9810ed25d484726f4d9`");
        await queryRunner.query("ALTER TABLE `projects` DROP FOREIGN KEY `FK_359af2de54ee9e12d1ec37f9e2d`");
        await queryRunner.query("ALTER TABLE `squads` DROP FOREIGN KEY `FK_fb61719b489e4cefecc67643e38`");
        await queryRunner.query("DROP INDEX `IDX_596c71253d3b43fe2d371bb9f5` ON `questions_forms`");
        await queryRunner.query("DROP INDEX `IDX_41810a1a9810ed25d484726f4d` ON `questions_forms`");
        await queryRunner.query("DROP TABLE `questions_forms`");
        await queryRunner.query("DROP TABLE `questions`");
        await queryRunner.query("DROP TABLE `projects`");
        await queryRunner.query("DROP TABLE `forms`");
        await queryRunner.query("ALTER TABLE `squads` ADD CONSTRAINT `FK_fb61719b489e4cefecc67643e38` FOREIGN KEY (`rt_id`) REFERENCES `rts`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

}
