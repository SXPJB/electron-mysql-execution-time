# electron-mysql-execution-time

Structure database: 

DROP SCHEMA IF EXISTS `sda` ;
CREATE SCHEMA IF NOT EXISTS `sda` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `sda` ;

DROP TABLE IF EXISTS `sda`.`ventas` ;

CREATE TABLE IF NOT EXISTS `sda`.`ventas` (
  `name` VARCHAR(50) CHARACTER SET 'utf8' COLLATE 'utf8_spanish2_ci' NULL DEFAULT NULL,
  `genero` VARCHAR(50) CHARACTER SET 'utf8' COLLATE 'utf8_spanish2_ci' NULL DEFAULT NULL,
  `pais` VARCHAR(50) CHARACTER SET 'utf8' COLLATE 'utf8_spanish2_ci' NULL DEFAULT NULL,
  `monto` INT NULL DEFAULT NULL,
  `etiqueta` VARCHAR(3) CHARACTER SET 'utf8' COLLATE 'utf8_spanish2_ci' NULL DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish2_ci;

# Execution project
`npm install` for install dependncies
`npm start` for run application for dev
