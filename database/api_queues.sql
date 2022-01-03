-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.33 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for api_queue
CREATE DATABASE IF NOT EXISTS `api_queue` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `api_queue`;

-- Dumping structure for table api_queue.loggs
CREATE TABLE IF NOT EXISTS `loggs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `method` varchar(255) NOT NULL,
  `date_created` datetime NOT NULL,
  `error_code` int(11) NOT NULL,
  `status` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Dumping data for table api_queue.loggs: ~3 rows (approximately)
DELETE FROM `loggs`;
/*!40000 ALTER TABLE `loggs` DISABLE KEYS */;
INSERT INTO `loggs` (`id`, `method`, `date_created`, `error_code`, `status`) VALUES
	(2, 'login', '2022-01-02 19:56:51', 200, 'Token generated as: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjQxMTcxNDExLCJleHAiOjE2NDExNzMyMTF9.LfsdHPNMR7QwvaShGcADgv06OhEB---4g2qqO9BUucc'),
	(3, 'change_cabin_configuration', '2022-01-02 19:57:39', 400, 'BAD_REQUEST: Check the value! Token send incorrectly'),
	(4, 'change_cabin_configuration', '2022-01-02 19:57:49', 200, 'OK: Message sent!');
/*!40000 ALTER TABLE `loggs` ENABLE KEYS */;

-- Dumping structure for table api_queue.methods
CREATE TABLE IF NOT EXISTS `methods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `method` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `example` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Dumping data for table api_queue.methods: ~1 rows (approximately)
DELETE FROM `methods`;
/*!40000 ALTER TABLE `methods` DISABLE KEYS */;
INSERT INTO `methods` (`id`, `method`, `type`, `description`, `example`) VALUES
	(1, 'change_cabin_configuration', 'POST', '', '');
/*!40000 ALTER TABLE `methods` ENABLE KEYS */;

-- Dumping structure for table api_queue.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Dumping data for table api_queue.users: ~1 rows (approximately)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `user`, `pass`) VALUES
	(3, 'test', '$2b$12$JwFRtvjHER7/vplRIWPpg.BfKgWUsIv8UdIcNE48T/DoEZFybsGXO'),
	(4, 'test2', '$2b$12$Io1k/Gj8PZ0UGBCIDuLiGe3CjsDKayVA.OvOe2NU.I2Ec/iXAcnMa');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
