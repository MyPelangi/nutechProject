-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: nutech_msql
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `banners`
--

DROP TABLE IF EXISTS `banners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banners` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `banner_name` varchar(100) NOT NULL,
  `banner_image` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banners`
--

LOCK TABLES `banners` WRITE;
/*!40000 ALTER TABLE `banners` DISABLE KEYS */;
INSERT INTO `banners` VALUES (1,'Banner 1','https://nutech-integrasi.app/dummy.jpg','Lerem Ipsum Dolor sit amet',1,'2026-01-11 07:36:07'),(2,'Banner 2','https://nutech-integrasi.app/dummy.jpg','Lerem Ipsum Dolor sit amet',1,'2026-01-11 07:36:07'),(3,'Banner 3','https://nutech-integrasi.app/dummy.jpg','Lerem Ipsum Dolor sit amet',1,'2026-01-11 07:36:07'),(4,'Banner 4','https://nutech-integrasi.app/dummy.jpg','Lerem Ipsum Dolor sit amet',1,'2026-01-11 07:36:07'),(5,'Banner 5','https://nutech-integrasi.app/dummy.jpg','Lerem Ipsum Dolor sit amet',1,'2026-01-11 07:36:07');
/*!40000 ALTER TABLE `banners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `service_code` varchar(50) DEFAULT NULL,
  `service_name` varchar(100) DEFAULT NULL,
  `service_icon` varchar(255) DEFAULT NULL,
  `service_tariff` int(11) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,'PAJAK','Pajak PBB','https://nutech-integrasi.app/dummy.jpg',40000,1),(2,'PLN','Listrik','https://nutech-integrasi.app/dummy.jpg',10000,1),(3,'PDAM','PDAM Berlangganan','https://nutech-integrasi.app/dummy.jpg',40000,1),(4,'PULSA','Pulsa','https://nutech-integrasi.app/dummy.jpg',40000,1),(5,'PGN','PGN Berlangganan','https://nutech-integrasi.app/dummy.jpg',50000,1),(6,'MUSIK','Musik Berlangganan','https://nutech-integrasi.app/dummy.jpg',50000,1),(7,'TV','TV Berlangganan','https://nutech-integrasi.app/dummy.jpg',50000,1),(8,'PAKET_DATA','Paket data','https://nutech-integrasi.app/dummy.jpg',50000,1),(9,'VOUCHER_GAME','Voucher Game','https://nutech-integrasi.app/dummy.jpg',100000,1),(10,'VOUCHER_MAKANAN','Voucher Makanan','https://nutech-integrasi.app/dummy.jpg',100000,1),(11,'QURBAN','Qurban','https://nutech-integrasi.app/dummy.jpg',200000,1),(12,'ZAKAT','Zakat','https://nutech-integrasi.app/dummy.jpg',300000,1);
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `topup_history`
--

DROP TABLE IF EXISTS `topup_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `topup_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `topup_history`
--

LOCK TABLES `topup_history` WRITE;
/*!40000 ALTER TABLE `topup_history` DISABLE KEYS */;
INSERT INTO `topup_history` VALUES (1,'Pelangid@gmail.com',100000,'2026-01-11 15:13:36');
/*!40000 ALTER TABLE `topup_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `invoice_number` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `service_code` varchar(20) DEFAULT NULL,
  `service_name` varchar(100) DEFAULT NULL,
  `transaction_type` varchar(20) DEFAULT NULL,
  `total_amount` int(11) DEFAULT NULL,
  `created_on` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES (1,'INV-1768119559217','Pelangid@gmail.com','PLN','Listrik','PAYMENT',10000,'2026-01-11 15:19:19'),(2,'INV-1768119625632','Pelangid@gmail.com','PULSA','Pulsa','PAYMENT',40000,'2026-01-11 15:20:25');
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(225) NOT NULL,
  `last_name` varchar(225) NOT NULL,
  `email` varchar(225) NOT NULL,
  `password` varchar(225) NOT NULL,
  `profile_image` varchar(255) DEFAULT NULL,
  `balance` bigint(25) DEFAULT 0,
  `is_active` tinyint(4) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'User Edited','nutech Edited','user@nutech-integrasi.com','abcdef1234','undefined',0,1,'2026-01-11 10:03:12','2026-01-11 10:54:06','user@nutech-integrasi.com'),(2,'User Edited','nutech Edited','Pelangid@gmail.com','$2b$10$UtCXiIjYeuQpgf2.FNSEmehLQJQfYclWQ/l1Vm4nvGLtiMDIbcyOC','https://localhost:4000/uploads\\profile\\profile-1768115656286.jpg',1050000,1,'2026-01-11 13:29:29','2026-01-11 14:14:17','Pelangid@gmail.com'),(4,'Pelangi','Mawarni','Pelangi@gmail.com','$2b$10$RHcs.94aEG57M5/3KPLg1eLISv4R74IyIhZgw3iz5fBUHHQS7mxky',NULL,0,1,'2026-01-11 13:32:02','2026-01-11 13:32:02','Pelangi.Mawarni'),(5,'Pelangi','Mawarni','Pelangiaja@gmail.com','$2b$10$3q4jG7sXZHVDFWCw.GzT3O6dATt.dxo7KMWaO4bsReTJ8KRrFjJH6',NULL,0,1,'2026-01-11 18:02:37','2026-01-11 18:02:37','Pelangi.Mawarni'),(7,'Pelangi','Mawarni','Pelangiaja2@gmail.com','$2b$10$AkFruJ3gHmRLYas9NTK3MuydrmZfofuu2x2TgVpvVxkID3Ur9O.1e',NULL,0,1,'2026-01-11 18:03:31','2026-01-11 18:03:31','Pelangi.Mawarni');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-01-11 22:32:10
