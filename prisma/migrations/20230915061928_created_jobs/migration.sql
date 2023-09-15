/*
  Warnings:

  - You are about to drop the `test` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `test`;

-- CreateTable
CREATE TABLE `jobs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `job_title` VARCHAR(45) NULL,
    `date_published` DATETIME(3) NULL,
    `job_type` VARCHAR(45) NULL,
    `company_name` VARCHAR(45) NULL,
    `contingency` VARCHAR(45) NULL,
    `location_full` VARCHAR(45) NULL,
    `url` VARCHAR(200) NULL,
    `perks` VARCHAR(200) NULL,
    `seniority` VARCHAR(45) NULL,
    `seniority_slug` VARCHAR(45) NULL,
    `functional_area` VARCHAR(45) NULL,
    `functional_area_slug` VARCHAR(45) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
