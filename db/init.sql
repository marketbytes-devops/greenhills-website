-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: greenhillsdb
-- ------------------------------------------------------
-- Server version	8.0.40

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
-- Table structure for table `about_aboutbanner`
--

DROP TABLE IF EXISTS `about_aboutbanner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about_aboutbanner` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `description` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about_aboutbanner`
--

LOCK TABLES `about_aboutbanner` WRITE;
/*!40000 ALTER TABLE `about_aboutbanner` DISABLE KEYS */;
INSERT INTO `about_aboutbanner` VALUES (1,'about/Mask_Group_85.webp','<h1><strong style=\"color: rgb(255, 255, 255);\">About Us</strong></h1>','<p><span style=\"color: rgb(122, 122, 126);\">Nestled in the high-altitudes of the Western Ghats, Valparai is the perfect gateway to the surrounding shola forests of Anamalais. Of all the plantations in India, Anamallais is perhaps the youngest, having been surveyed and planted only after the 1864. RJ Lowry and his famous Carnatic coffee company were the first to appear in the eastern slopes of the region. The British conservators and consequently the Indian counterparts were judicious enough to live the exquisite tropical forest un</span></p><p><br></p><p><span style=\"color: rgb(122, 122, 126);\">How to reach Green Hill HotelYou can start from Coimbatore or Chalakudy in Kerala. Enroute to Valparai you have plenty to see and experience. Drive 40 kms from Coimbatore towards south, on the Palani route, to reach Pollachi and take a turn towards west. Valparai is 60 kms of pleasant drive from Pollachi, passing Aliyar Reservoir where the climb begins. There are 40 hairpins to be negotiated and the road is smooth all through. Whilst starting from Chalakudy in Kerala, head west along beside the</span></p>');
/*!40000 ALTER TABLE `about_aboutbanner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `about_aboutsectionfive`
--

DROP TABLE IF EXISTS `about_aboutsectionfive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about_aboutsectionfive` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `description` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about_aboutsectionfive`
--

LOCK TABLES `about_aboutsectionfive` WRITE;
/*!40000 ALTER TABLE `about_aboutsectionfive` DISABLE KEYS */;
INSERT INTO `about_aboutsectionfive` VALUES (1,'about/Group_147.webp','<h1><span style=\"color: rgb(240, 240, 240);\">Test</span></h1>','<p><span style=\"color: rgb(240, 240, 240);\">Test</span></p>');
/*!40000 ALTER TABLE `about_aboutsectionfive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `about_aboutsectionfour`
--

DROP TABLE IF EXISTS `about_aboutsectionfour`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about_aboutsectionfour` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about_aboutsectionfour`
--

LOCK TABLES `about_aboutsectionfour` WRITE;
/*!40000 ALTER TABLE `about_aboutsectionfour` DISABLE KEYS */;
INSERT INTO `about_aboutsectionfour` VALUES (1,'about/Group_1482x.webp','<h1><strong style=\"color: rgb(240, 240, 240);\">Test</strong></h1>');
/*!40000 ALTER TABLE `about_aboutsectionfour` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `about_aboutsectionthree`
--

DROP TABLE IF EXISTS `about_aboutsectionthree`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about_aboutsectionthree` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `order` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about_aboutsectionthree`
--

LOCK TABLES `about_aboutsectionthree` WRITE;
/*!40000 ALTER TABLE `about_aboutsectionthree` DISABLE KEYS */;
INSERT INTO `about_aboutsectionthree` VALUES (1,'about/Group_402x.webp','<p><strong>Test</strong></p>',0),(2,'about/Group_402x_HFNE4d7.webp','<p><strong>Test</strong></p>',0),(3,'about/Group_402x_qnxpviE.webp','<h6><span style=\"color: rgb(255, 255, 255);\">Test</span></h6>',0),(4,'about/Group_402x_IHVklb0.webp','<p><span style=\"color: rgb(255, 255, 255);\">Test Test</span></p>',0);
/*!40000 ALTER TABLE `about_aboutsectionthree` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `about_aboutsectionthreetitle`
--

DROP TABLE IF EXISTS `about_aboutsectionthreetitle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about_aboutsectionthreetitle` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  `description` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about_aboutsectionthreetitle`
--

LOCK TABLES `about_aboutsectionthreetitle` WRITE;
/*!40000 ALTER TABLE `about_aboutsectionthreetitle` DISABLE KEYS */;
INSERT INTO `about_aboutsectionthreetitle` VALUES (1,'<h1>Test</h1><h1><strong>Test Test</strong></h1>','<p>Test</p>');
/*!40000 ALTER TABLE `about_aboutsectionthreetitle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `about_aboutsectiontwo`
--

DROP TABLE IF EXISTS `about_aboutsectiontwo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about_aboutsectiontwo` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `description` longtext,
  `order` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about_aboutsectiontwo`
--

LOCK TABLES `about_aboutsectiontwo` WRITE;
/*!40000 ALTER TABLE `about_aboutsectiontwo` DISABLE KEYS */;
INSERT INTO `about_aboutsectiontwo` VALUES (1,'about/Mask_Group_462x.webp','<h2><span style=\"color: rgb(255, 255, 255);\">Test</span></h2>','<p><span style=\"color: rgb(255, 255, 255);\">Test</span></p>',0),(2,'about/Mask_Group_47.webp','<h2><span style=\"color: rgb(0, 0, 0);\">Test Two</span></h2>','<p><span style=\"color: rgb(0, 0, 0);\">Test two</span></p>',1);
/*!40000 ALTER TABLE `about_aboutsectiontwo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `additional_settings_additionalsettings`
--

DROP TABLE IF EXISTS `additional_settings_additionalsettings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `additional_settings_additionalsettings` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` longtext,
  `location` varchar(255) DEFAULT NULL,
  `phone_one` varchar(255) DEFAULT NULL,
  `phone_two` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `additional_settings_additionalsettings`
--

LOCK TABLES `additional_settings_additionalsettings` WRITE;
/*!40000 ALTER TABLE `additional_settings_additionalsettings` DISABLE KEYS */;
INSERT INTO `additional_settings_additionalsettings` VALUES (1,'Webinar event for mental training and personal development for young people','State Bank Road, Valparai, Tamil Nadu 642127','094434 09489','094434 85876','Greenhills@gmail.com');
/*!40000 ALTER TABLE `additional_settings_additionalsettings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=285 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add content type',4,'add_contenttype'),(14,'Can change content type',4,'change_contenttype'),(15,'Can delete content type',4,'delete_contenttype'),(16,'Can view content type',4,'view_contenttype'),(17,'Can add session',5,'add_session'),(18,'Can change session',5,'change_session'),(19,'Can delete session',5,'delete_session'),(20,'Can view session',5,'view_session'),(21,'Can add user',6,'add_customuser'),(22,'Can change user',6,'change_customuser'),(23,'Can delete user',6,'delete_customuser'),(24,'Can view user',6,'view_customuser'),(25,'Can add home banner',7,'add_homebanner'),(26,'Can change home banner',7,'change_homebanner'),(27,'Can delete home banner',7,'delete_homebanner'),(28,'Can view home banner',7,'view_homebanner'),(29,'Can add home about image',8,'add_homeaboutimage'),(30,'Can change home about image',8,'change_homeaboutimage'),(31,'Can delete home about image',8,'delete_homeaboutimage'),(32,'Can view home about image',8,'view_homeaboutimage'),(33,'Can add home about title',9,'add_homeabouttitle'),(34,'Can change home about title',9,'change_homeabouttitle'),(35,'Can delete home about title',9,'delete_homeabouttitle'),(36,'Can view home about title',9,'view_homeabouttitle'),(37,'Can add home rating',10,'add_homerating'),(38,'Can change home rating',10,'change_homerating'),(39,'Can delete home rating',10,'delete_homerating'),(40,'Can view home rating',10,'view_homerating'),(41,'Can add home services',11,'add_homeservices'),(42,'Can change home services',11,'change_homeservices'),(43,'Can delete home services',11,'delete_homeservices'),(44,'Can view home services',11,'view_homeservices'),(45,'Can add home stats',12,'add_homestats'),(46,'Can change home stats',12,'change_homestats'),(47,'Can delete home stats',12,'delete_homestats'),(48,'Can view home stats',12,'view_homestats'),(49,'Can add home explore',13,'add_homeexplore'),(50,'Can change home explore',13,'change_homeexplore'),(51,'Can delete home explore',13,'delete_homeexplore'),(52,'Can view home explore',13,'view_homeexplore'),(53,'Can add home rooms',14,'add_homerooms'),(54,'Can change home rooms',14,'change_homerooms'),(55,'Can delete home rooms',14,'delete_homerooms'),(56,'Can view home rooms',14,'view_homerooms'),(57,'Can add home rooms title',15,'add_homeroomstitle'),(58,'Can change home rooms title',15,'change_homeroomstitle'),(59,'Can delete home rooms title',15,'delete_homeroomstitle'),(60,'Can view home rooms title',15,'view_homeroomstitle'),(61,'Can add home eat section',16,'add_homeeatsection'),(62,'Can change home eat section',16,'change_homeeatsection'),(63,'Can delete home eat section',16,'delete_homeeatsection'),(64,'Can view home eat section',16,'view_homeeatsection'),(65,'Can add home eat section content',17,'add_homeeatsectioncontent'),(66,'Can change home eat section content',17,'change_homeeatsectioncontent'),(67,'Can delete home eat section content',17,'delete_homeeatsectioncontent'),(68,'Can view home eat section content',17,'view_homeeatsectioncontent'),(69,'Can add home gather section',18,'add_homegathersection'),(70,'Can change home gather section',18,'change_homegathersection'),(71,'Can delete home gather section',18,'delete_homegathersection'),(72,'Can view home gather section',18,'view_homegathersection'),(73,'Can add home gather section content',19,'add_homegathersectioncontent'),(74,'Can change home gather section content',19,'change_homegathersectioncontent'),(75,'Can delete home gather section content',19,'delete_homegathersectioncontent'),(76,'Can view home gather section content',19,'view_homegathersectioncontent'),(77,'Can add home team section',20,'add_hometeamsection'),(78,'Can change home team section',20,'change_hometeamsection'),(79,'Can delete home team section',20,'delete_hometeamsection'),(80,'Can view home team section',20,'view_hometeamsection'),(81,'Can add home team section title',21,'add_hometeamsectiontitle'),(82,'Can change home team section title',21,'change_hometeamsectiontitle'),(83,'Can delete home team section title',21,'delete_hometeamsectiontitle'),(84,'Can view home team section title',21,'view_hometeamsectiontitle'),(85,'Can add home team title section',21,'add_hometeamtitlesection'),(86,'Can change home team title section',21,'change_hometeamtitlesection'),(87,'Can delete home team title section',21,'delete_hometeamtitlesection'),(88,'Can view home team title section',21,'view_hometeamtitlesection'),(89,'Can add home blog section',22,'add_homeblogsection'),(90,'Can change home blog section',22,'change_homeblogsection'),(91,'Can delete home blog section',22,'delete_homeblogsection'),(92,'Can view home blog section',22,'view_homeblogsection'),(93,'Can add home blog title section',23,'add_homeblogtitlesection'),(94,'Can change home blog title section',23,'change_homeblogtitlesection'),(95,'Can delete home blog title section',23,'delete_homeblogtitlesection'),(96,'Can view home blog title section',23,'view_homeblogtitlesection'),(97,'Can add about banner',24,'add_aboutbanner'),(98,'Can change about banner',24,'change_aboutbanner'),(99,'Can delete about banner',24,'delete_aboutbanner'),(100,'Can view about banner',24,'view_aboutbanner'),(101,'Can add about section five',25,'add_aboutsectionfive'),(102,'Can change about section five',25,'change_aboutsectionfive'),(103,'Can delete about section five',25,'delete_aboutsectionfive'),(104,'Can view about section five',25,'view_aboutsectionfive'),(105,'Can add about section four',26,'add_aboutsectionfour'),(106,'Can change about section four',26,'change_aboutsectionfour'),(107,'Can delete about section four',26,'delete_aboutsectionfour'),(108,'Can view about section four',26,'view_aboutsectionfour'),(109,'Can add about section three',27,'add_aboutsectionthree'),(110,'Can change about section three',27,'change_aboutsectionthree'),(111,'Can delete about section three',27,'delete_aboutsectionthree'),(112,'Can view about section three',27,'view_aboutsectionthree'),(113,'Can add about section three title',28,'add_aboutsectionthreetitle'),(114,'Can change about section three title',28,'change_aboutsectionthreetitle'),(115,'Can delete about section three title',28,'delete_aboutsectionthreetitle'),(116,'Can view about section three title',28,'view_aboutsectionthreetitle'),(117,'Can add about section two',29,'add_aboutsectiontwo'),(118,'Can change about section two',29,'change_aboutsectiontwo'),(119,'Can delete about section two',29,'delete_aboutsectiontwo'),(120,'Can view about section two',29,'view_aboutsectiontwo'),(121,'Can add gallery banner',30,'add_gallerybanner'),(122,'Can change gallery banner',30,'change_gallerybanner'),(123,'Can delete gallery banner',30,'delete_gallerybanner'),(124,'Can view gallery banner',30,'view_gallerybanner'),(125,'Can add gallery images',31,'add_galleryimages'),(126,'Can change gallery images',31,'change_galleryimages'),(127,'Can delete gallery images',31,'delete_galleryimages'),(128,'Can view gallery images',31,'view_galleryimages'),(129,'Can add explore banner',32,'add_explorebanner'),(130,'Can change explore banner',32,'change_explorebanner'),(131,'Can delete explore banner',32,'delete_explorebanner'),(132,'Can view explore banner',32,'view_explorebanner'),(133,'Can add explore section three',33,'add_exploresectionthree'),(134,'Can change explore section three',33,'change_exploresectionthree'),(135,'Can delete explore section three',33,'delete_exploresectionthree'),(136,'Can view explore section three',33,'view_exploresectionthree'),(137,'Can add explore section three title',34,'add_exploresectionthreetitle'),(138,'Can change explore section three title',34,'change_exploresectionthreetitle'),(139,'Can delete explore section three title',34,'delete_exploresectionthreetitle'),(140,'Can view explore section three title',34,'view_exploresectionthreetitle'),(141,'Can add explore section two',35,'add_exploresectiontwo'),(142,'Can change explore section two',35,'change_exploresectiontwo'),(143,'Can delete explore section two',35,'delete_exploresectiontwo'),(144,'Can view explore section two',35,'view_exploresectiontwo'),(145,'Can add blog banner',36,'add_blogbanner'),(146,'Can change blog banner',36,'change_blogbanner'),(147,'Can delete blog banner',36,'delete_blogbanner'),(148,'Can view blog banner',36,'view_blogbanner'),(149,'Can add blog posts',37,'add_blogposts'),(150,'Can change blog posts',37,'change_blogposts'),(151,'Can delete blog posts',37,'delete_blogposts'),(152,'Can view blog posts',37,'view_blogposts'),(153,'Can add stay page create',38,'add_staypagecreate'),(154,'Can change stay page create',38,'change_staypagecreate'),(155,'Can delete stay page create',38,'delete_staypagecreate'),(156,'Can view stay page create',38,'view_staypagecreate'),(157,'Can add stay amenities listings',39,'add_stayamenitieslistings'),(158,'Can change stay amenities listings',39,'change_stayamenitieslistings'),(159,'Can delete stay amenities listings',39,'delete_stayamenitieslistings'),(160,'Can view stay amenities listings',39,'view_stayamenitieslistings'),(161,'Can add stay banner',40,'add_staybanner'),(162,'Can change stay banner',40,'change_staybanner'),(163,'Can delete stay banner',40,'delete_staybanner'),(164,'Can view stay banner',40,'view_staybanner'),(165,'Can add stay amenities title',41,'add_stayamenitiestitle'),(166,'Can change stay amenities title',41,'change_stayamenitiestitle'),(167,'Can delete stay amenities title',41,'delete_stayamenitiestitle'),(168,'Can view stay amenities title',41,'view_stayamenitiestitle'),(169,'Can add stay highlights',42,'add_stayhighlights'),(170,'Can change stay highlights',42,'change_stayhighlights'),(171,'Can delete stay highlights',42,'delete_stayhighlights'),(172,'Can view stay highlights',42,'view_stayhighlights'),(173,'Can add stay rooms listings',43,'add_stayroomslistings'),(174,'Can change stay rooms listings',43,'change_stayroomslistings'),(175,'Can delete stay rooms listings',43,'delete_stayroomslistings'),(176,'Can view stay rooms listings',43,'view_stayroomslistings'),(177,'Can add stay rooms title',44,'add_stayroomstitle'),(178,'Can change stay rooms title',44,'change_stayroomstitle'),(179,'Can delete stay rooms title',44,'delete_stayroomstitle'),(180,'Can view stay rooms title',44,'view_stayroomstitle'),(181,'Can add stay gallery',45,'add_staygallery'),(182,'Can change stay gallery',45,'change_staygallery'),(183,'Can delete stay gallery',45,'delete_staygallery'),(184,'Can view stay gallery',45,'view_staygallery'),(185,'Can add stay explore',46,'add_stayexplore'),(186,'Can change stay explore',46,'change_stayexplore'),(187,'Can delete stay explore',46,'delete_stayexplore'),(188,'Can view stay explore',46,'view_stayexplore'),(189,'Can add eat page create',47,'add_eatpagecreate'),(190,'Can change eat page create',47,'change_eatpagecreate'),(191,'Can delete eat page create',47,'delete_eatpagecreate'),(192,'Can view eat page create',47,'view_eatpagecreate'),(193,'Can add eat banner',48,'add_eatbanner'),(194,'Can change eat banner',48,'change_eatbanner'),(195,'Can delete eat banner',48,'delete_eatbanner'),(196,'Can view eat banner',48,'view_eatbanner'),(197,'Can add gather banner',49,'add_gatherbanner'),(198,'Can change gather banner',49,'change_gatherbanner'),(199,'Can delete gather banner',49,'delete_gatherbanner'),(200,'Can view gather banner',49,'view_gatherbanner'),(201,'Can add gather page create',50,'add_gatherpagecreate'),(202,'Can change gather page create',50,'change_gatherpagecreate'),(203,'Can delete gather page create',50,'delete_gatherpagecreate'),(204,'Can view gather page create',50,'view_gatherpagecreate'),(205,'Can add gather amenities title',51,'add_gatheramenitiestitle'),(206,'Can change gather amenities title',51,'change_gatheramenitiestitle'),(207,'Can delete gather amenities title',51,'delete_gatheramenitiestitle'),(208,'Can view gather amenities title',51,'view_gatheramenitiestitle'),(209,'Can add gather services',52,'add_gatherservices'),(210,'Can change gather services',52,'change_gatherservices'),(211,'Can delete gather services',52,'delete_gatherservices'),(212,'Can view gather services',52,'view_gatherservices'),(213,'Can add gather explore',53,'add_gatherexplore'),(214,'Can change gather explore',53,'change_gatherexplore'),(215,'Can delete gather explore',53,'delete_gatherexplore'),(216,'Can view gather explore',53,'view_gatherexplore'),(217,'Can add gather amenities listings',54,'add_gatheramenitieslistings'),(218,'Can change gather amenities listings',54,'change_gatheramenitieslistings'),(219,'Can delete gather amenities listings',54,'delete_gatheramenitieslistings'),(220,'Can view gather amenities listings',54,'view_gatheramenitieslistings'),(221,'Can add gather highlights',55,'add_gatherhighlights'),(222,'Can change gather highlights',55,'change_gatherhighlights'),(223,'Can delete gather highlights',55,'delete_gatherhighlights'),(224,'Can view gather highlights',55,'view_gatherhighlights'),(225,'Can add gather highlights title',56,'add_gatherhighlightstitle'),(226,'Can change gather highlights title',56,'change_gatherhighlightstitle'),(227,'Can delete gather highlights title',56,'delete_gatherhighlightstitle'),(228,'Can view gather highlights title',56,'view_gatherhighlightstitle'),(229,'Can add eat menu tab create',57,'add_eatmenutabcreate'),(230,'Can change eat menu tab create',57,'change_eatmenutabcreate'),(231,'Can delete eat menu tab create',57,'delete_eatmenutabcreate'),(232,'Can view eat menu tab create',57,'view_eatmenutabcreate'),(233,'Can add eat menu title',58,'add_eatmenutitle'),(234,'Can change eat menu title',58,'change_eatmenutitle'),(235,'Can delete eat menu title',58,'delete_eatmenutitle'),(236,'Can view eat menu title',58,'view_eatmenutitle'),(237,'Can add eat time',59,'add_eattime'),(238,'Can change eat time',59,'change_eattime'),(239,'Can delete eat time',59,'delete_eattime'),(240,'Can view eat time',59,'view_eattime'),(241,'Can add eat amenities listings',60,'add_eatamenitieslistings'),(242,'Can change eat amenities listings',60,'change_eatamenitieslistings'),(243,'Can delete eat amenities listings',60,'delete_eatamenitieslistings'),(244,'Can view eat amenities listings',60,'view_eatamenitieslistings'),(245,'Can add eat explore',61,'add_eatexplore'),(246,'Can change eat explore',61,'change_eatexplore'),(247,'Can delete eat explore',61,'delete_eatexplore'),(248,'Can view eat explore',61,'view_eatexplore'),(249,'Can add eat menu tab items',62,'add_eatmenutabitems'),(250,'Can change eat menu tab items',62,'change_eatmenutabitems'),(251,'Can delete eat menu tab items',62,'delete_eatmenutabitems'),(252,'Can view eat menu tab items',62,'view_eatmenutabitems'),(253,'Can add eat menu listings',63,'add_eatmenulistings'),(254,'Can change eat menu listings',63,'change_eatmenulistings'),(255,'Can delete eat menu listings',63,'delete_eatmenulistings'),(256,'Can view eat menu listings',63,'view_eatmenulistings'),(257,'Can add eat amenities title',64,'add_eatamenitiestitle'),(258,'Can change eat amenities title',64,'change_eatamenitiestitle'),(259,'Can delete eat amenities title',64,'delete_eatamenitiestitle'),(260,'Can view eat amenities title',64,'view_eatamenitiestitle'),(261,'Can add Social Media Links',65,'add_socialmedialinks'),(262,'Can change Social Media Links',65,'change_socialmedialinks'),(263,'Can delete Social Media Links',65,'delete_socialmedialinks'),(264,'Can view Social Media Links',65,'view_socialmedialinks'),(265,'Can add additional settings',66,'add_additionalsettings'),(266,'Can change additional settings',66,'change_additionalsettings'),(267,'Can delete additional settings',66,'delete_additionalsettings'),(268,'Can view additional settings',66,'view_additionalsettings'),(269,'Can add booking',67,'add_booking'),(270,'Can change booking',67,'change_booking'),(271,'Can delete booking',67,'delete_booking'),(272,'Can view booking',67,'view_booking'),(273,'Can add contact',68,'add_contact'),(274,'Can change contact',68,'change_contact'),(275,'Can delete contact',68,'delete_contact'),(276,'Can view contact',68,'view_contact'),(277,'Can add privacy',69,'add_privacy'),(278,'Can change privacy',69,'change_privacy'),(279,'Can delete privacy',69,'delete_privacy'),(280,'Can view privacy',69,'view_privacy'),(281,'Can add terms',70,'add_terms'),(282,'Can change terms',70,'change_terms'),(283,'Can delete terms',70,'delete_terms'),(284,'Can view terms',70,'view_terms');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `authapp_customuser`
--

DROP TABLE IF EXISTS `authapp_customuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authapp_customuser` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authapp_customuser`
--

LOCK TABLES `authapp_customuser` WRITE;
/*!40000 ALTER TABLE `authapp_customuser` DISABLE KEYS */;
INSERT INTO `authapp_customuser` VALUES (1,'pbkdf2_sha256$1000000$lghRwMYR0oPr9JUKeuVqBI$cZYr0gtHYPOyyuxp98tN5zC2UDd6aHdCEwV4JaM30Vg=',NULL,1,'','',1,1,'2025-06-10 20:48:08.361514','','Superadmin','marketbytesdevops@gmail.com','profile_images/Mask_Group_41.webp');
/*!40000 ALTER TABLE `authapp_customuser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `authapp_customuser_groups`
--

DROP TABLE IF EXISTS `authapp_customuser_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authapp_customuser_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `customuser_id` bigint NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `authapp_customuser_groups_customuser_id_group_id_03af0264_uniq` (`customuser_id`,`group_id`),
  KEY `authapp_customuser_groups_group_id_4143a1f8_fk_auth_group_id` (`group_id`),
  CONSTRAINT `authapp_customuser_g_customuser_id_d338aa9f_fk_authapp_c` FOREIGN KEY (`customuser_id`) REFERENCES `authapp_customuser` (`id`),
  CONSTRAINT `authapp_customuser_groups_group_id_4143a1f8_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authapp_customuser_groups`
--

LOCK TABLES `authapp_customuser_groups` WRITE;
/*!40000 ALTER TABLE `authapp_customuser_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `authapp_customuser_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `authapp_customuser_user_permissions`
--

DROP TABLE IF EXISTS `authapp_customuser_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authapp_customuser_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `customuser_id` bigint NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `authapp_customuser_user__customuser_id_permission_abd7dbc4_uniq` (`customuser_id`,`permission_id`),
  KEY `authapp_customuser_u_permission_id_a4c601ab_fk_auth_perm` (`permission_id`),
  CONSTRAINT `authapp_customuser_u_customuser_id_5e7638ee_fk_authapp_c` FOREIGN KEY (`customuser_id`) REFERENCES `authapp_customuser` (`id`),
  CONSTRAINT `authapp_customuser_u_permission_id_a4c601ab_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authapp_customuser_user_permissions`
--

LOCK TABLES `authapp_customuser_user_permissions` WRITE;
/*!40000 ALTER TABLE `authapp_customuser_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `authapp_customuser_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_blogbanner`
--

DROP TABLE IF EXISTS `blog_blogbanner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_blogbanner` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_blogbanner`
--

LOCK TABLES `blog_blogbanner` WRITE;
/*!40000 ALTER TABLE `blog_blogbanner` DISABLE KEYS */;
INSERT INTO `blog_blogbanner` VALUES (1,'blog/Mask_Group_27.webp','<h1><strong style=\"color: rgb(255, 255, 255);\">Blog</strong></h1>');
/*!40000 ALTER TABLE `blog_blogbanner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_blogposts`
--

DROP TABLE IF EXISTS `blog_blogposts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_blogposts` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `content` longtext,
  `link` varchar(255) DEFAULT NULL,
  `title_detailed_page` varchar(500) DEFAULT NULL,
  `description` longtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `link` (`link`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_blogposts`
--

LOCK TABLES `blog_blogposts` WRITE;
/*!40000 ALTER TABLE `blog_blogposts` DISABLE KEYS */;
INSERT INTO `blog_blogposts` VALUES (1,'blog/Mask_Group_74.webp','<p><strong style=\"color: rgb(240, 240, 240);\">Test</strong></p>','<p><span style=\"color: rgb(0, 0, 0);\">Test</span></p>','test','<h1><strong style=\"color: rgb(240, 240, 240);\">Test﻿</strong></h1>','<p><span style=\"color: rgb(240, 240, 240);\">Test</span></p>'),(2,'blog/Mask_Group_75.webp','<p><strong style=\"color: rgb(240, 240, 240);\">Test</strong></p>','<p><span style=\"color: rgb(0, 0, 0);\">Test</span></p>','test-test','<h1><strong style=\"color: rgb(240, 240, 240);\">Test﻿</strong></h1>','<p><span style=\"color: rgb(240, 240, 240);\">Test</span></p>'),(3,'blog/Mask_Group_782x.webp','<p><strong style=\"color: rgb(240, 240, 240);\">Test</strong></p>','<p><span style=\"color: rgb(0, 0, 0);\">Test</span></p>','test-test-test','<h1><strong style=\"color: rgb(240, 240, 240);\">Test﻿</strong></h1>','<p><span style=\"color: rgb(240, 240, 240);\">Test</span></p>');
/*!40000 ALTER TABLE `blog_blogposts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_authapp_customuser_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_authapp_customuser_id` FOREIGN KEY (`user_id`) REFERENCES `authapp_customuser` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (24,'about','aboutbanner'),(25,'about','aboutsectionfive'),(26,'about','aboutsectionfour'),(27,'about','aboutsectionthree'),(28,'about','aboutsectionthreetitle'),(29,'about','aboutsectiontwo'),(66,'additional_settings','additionalsettings'),(1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(6,'authapp','customuser'),(36,'blog','blogbanner'),(37,'blog','blogposts'),(4,'contenttypes','contenttype'),(60,'eat','eatamenitieslistings'),(64,'eat','eatamenitiestitle'),(48,'eat','eatbanner'),(61,'eat','eatexplore'),(63,'eat','eatmenulistings'),(57,'eat','eatmenutabcreate'),(62,'eat','eatmenutabitems'),(58,'eat','eatmenutitle'),(47,'eat','eatpagecreate'),(59,'eat','eattime'),(67,'enquiry','booking'),(68,'enquiry','contact'),(32,'explore','explorebanner'),(33,'explore','exploresectionthree'),(34,'explore','exploresectionthreetitle'),(35,'explore','exploresectiontwo'),(30,'gallery','gallerybanner'),(31,'gallery','galleryimages'),(54,'gather','gatheramenitieslistings'),(51,'gather','gatheramenitiestitle'),(49,'gather','gatherbanner'),(53,'gather','gatherexplore'),(55,'gather','gatherhighlights'),(56,'gather','gatherhighlightstitle'),(50,'gather','gatherpagecreate'),(52,'gather','gatherservices'),(8,'home','homeaboutimage'),(9,'home','homeabouttitle'),(7,'home','homebanner'),(22,'home','homeblogsection'),(23,'home','homeblogtitlesection'),(16,'home','homeeatsection'),(17,'home','homeeatsectioncontent'),(13,'home','homeexplore'),(18,'home','homegathersection'),(19,'home','homegathersectioncontent'),(10,'home','homerating'),(14,'home','homerooms'),(15,'home','homeroomstitle'),(11,'home','homeservices'),(12,'home','homestats'),(20,'home','hometeamsection'),(21,'home','hometeamtitlesection'),(5,'sessions','session'),(65,'social_media','socialmedialinks'),(39,'stay','stayamenitieslistings'),(41,'stay','stayamenitiestitle'),(40,'stay','staybanner'),(46,'stay','stayexplore'),(45,'stay','staygallery'),(42,'stay','stayhighlights'),(38,'stay','staypagecreate'),(43,'stay','stayroomslistings'),(44,'stay','stayroomstitle'),(69,'terms_and_privacy','privacy'),(70,'terms_and_privacy','terms');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2025-06-10 20:47:03.187563'),(2,'contenttypes','0002_remove_content_type_name','2025-06-10 20:47:03.385433'),(3,'auth','0001_initial','2025-06-10 20:47:03.700660'),(4,'auth','0002_alter_permission_name_max_length','2025-06-10 20:47:03.762635'),(5,'auth','0003_alter_user_email_max_length','2025-06-10 20:47:03.767772'),(6,'auth','0004_alter_user_username_opts','2025-06-10 20:47:03.773069'),(7,'auth','0005_alter_user_last_login_null','2025-06-10 20:47:03.777642'),(8,'auth','0006_require_contenttypes_0002','2025-06-10 20:47:03.779844'),(9,'auth','0007_alter_validators_add_error_messages','2025-06-10 20:47:03.785478'),(10,'auth','0008_alter_user_username_max_length','2025-06-10 20:47:03.790600'),(11,'auth','0009_alter_user_last_name_max_length','2025-06-10 20:47:03.795101'),(12,'auth','0010_alter_group_name_max_length','2025-06-10 20:47:03.809906'),(13,'auth','0011_update_proxy_permissions','2025-06-10 20:47:03.815637'),(14,'auth','0012_alter_user_first_name_max_length','2025-06-10 20:47:03.821713'),(15,'authapp','0001_initial','2025-06-10 20:47:04.143511'),(16,'admin','0001_initial','2025-06-10 20:47:04.280646'),(17,'admin','0002_logentry_remove_auto_add','2025-06-10 20:47:04.287933'),(18,'admin','0003_logentry_add_action_flag_choices','2025-06-10 20:47:04.295471'),(19,'authapp','0002_customuser_image','2025-06-10 20:47:04.332583'),(20,'home','0001_initial','2025-06-10 20:47:04.348031'),(21,'home','0002_alter_homebanner_image','2025-06-10 20:47:04.353363'),(22,'home','0003_homeaboutimage_homeabouttitle_homerating_and_more','2025-06-10 20:47:04.436262'),(23,'sessions','0001_initial','2025-06-10 20:47:04.479261'),(24,'home','0004_homeexplore_homerooms','2025-06-11 12:39:04.534048'),(25,'home','0005_homeroomstitle','2025-06-11 13:21:39.449480'),(26,'home','0006_alter_homeaboutimage_order_alter_homebanner_order_and_more','2025-06-11 14:14:14.806946'),(27,'home','0007_alter_homeaboutimage_options_and_more','2025-06-11 15:06:01.361602'),(28,'home','0008_homeeatsection_homeeatsectioncontent','2025-06-11 16:58:37.864332'),(29,'home','0009_homegathersection_homegathersectioncontent','2025-06-11 17:05:30.213071'),(30,'home','0010_hometeamsection_hometeamsectiontitle_and_more','2025-06-15 14:29:20.158769'),(31,'home','0011_rename_hometeamsectiontitle_hometeamtitlesection','2025-06-15 14:39:54.188934'),(32,'home','0012_alter_homeaboutimage_image_and_more','2025-06-16 12:27:46.826581'),(33,'home','0013_alter_hometeamsection_options_hometeamsection_order','2025-06-16 13:20:38.497900'),(34,'home','0014_homeblogsection_homeblogtitlesection','2025-06-16 14:25:36.969572'),(35,'home','0015_homeblogsection_date','2025-06-16 14:34:23.237099'),(36,'about','0001_initial','2025-06-16 19:08:53.975568'),(37,'about','0002_aboutsectionfive_aboutsectionfour_aboutsectionthree_and_more','2025-06-17 12:49:53.918682'),(38,'gallery','0001_initial','2025-06-17 15:06:57.676559'),(39,'explore','0001_initial','2025-06-18 06:25:18.461936'),(40,'blog','0001_initial','2025-06-18 07:05:55.602892'),(41,'blog','0002_blogposts','2025-06-18 07:36:02.308332'),(42,'blog','0003_blogposts_link','2025-06-18 08:06:01.377518'),(43,'blog','0004_blogposts_title_detailed_page','2025-06-18 08:32:27.407052'),(44,'blog','0005_blogposts_description','2025-06-18 11:17:42.980091'),(45,'stay','0001_initial','2025-06-18 13:59:57.205015'),(46,'blog','0006_alter_blogposts_link','2025-06-18 14:03:15.591964'),(47,'stay','0002_alter_staypagecreate_link','2025-06-18 14:03:15.648483'),(48,'stay','0003_stayamenitieslistings_stayamenitiestitle_staybanner_and_more','2025-06-18 15:13:18.773675'),(49,'stay','0004_stayroomslistings_stayroomstitle_stayexplore_and_more','2025-06-19 07:14:05.831700'),(50,'stay','0005_staygallery_link_staygallery_title','2025-06-19 08:06:59.703423'),(51,'stay','0006_remove_staygallery_link_remove_staygallery_title','2025-06-19 08:11:32.017354'),(52,'stay','0007_stayhighlights_discounted_price_and_more','2025-06-19 08:55:51.962179'),(53,'stay','0008_stayhighlights_rating','2025-06-19 08:59:13.185572'),(54,'stay','0009_alter_stayamenitieslistings_options_and_more','2025-06-19 10:15:57.064458'),(55,'eat','0001_initial','2025-06-19 12:43:49.524911'),(56,'stay','0010_alter_stayexplore_link_and_more','2025-06-19 12:43:49.856117'),(57,'eat','0002_rename_eat_page_create_eatbanner_eat_page_create','2025-06-19 13:12:08.078500'),(58,'gather','0001_initial','2025-06-19 13:18:34.306237'),(59,'gather','0002_gatheramenitieslistings_gatheramenitiestitle_and_more','2025-06-19 15:35:30.765294'),(60,'gather','0003_gatherhighlightstitle','2025-06-19 15:43:32.042800'),(61,'eat','0003_eatamenitieslistings_eatamenitiestitle_eatexplore_and_more','2025-06-20 07:24:32.259129'),(62,'home','0016_homeroomstitle_link','2025-06-20 17:41:31.495418'),(63,'home','0017_remove_homeroomstitle_link_homeabouttitle_link','2025-06-20 17:45:27.755809'),(64,'home','0018_homerooms_link_homeroomstitle_link','2025-06-20 20:04:15.635944'),(65,'home','0019_alter_homerooms_link_alter_homeroomstitle_link','2025-06-20 20:10:21.858952'),(66,'social_media','0001_initial','2025-06-21 06:41:42.205115'),(67,'social_media','0002_alter_socialmedialinks_whatsapp','2025-06-21 06:54:47.947032'),(68,'social_media','0003_alter_socialmedialinks_options_and_more','2025-06-21 07:06:33.879851'),(69,'authapp','0003_remove_customuser_address_and_more','2025-06-21 07:36:00.841201'),(70,'additional_settings','0001_initial','2025-06-21 08:01:11.067652'),(71,'enquiry','0001_initial','2025-06-21 10:38:02.480243'),(72,'enquiry','0002_booking_email_booking_referer_url_and_more','2025-06-21 11:00:42.806446'),(73,'enquiry','0003_remove_booking_email','2025-06-21 12:56:05.579875'),(74,'terms_and_privacy','0001_initial','2025-06-21 14:09:46.058912');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eat_eatamenitieslistings`
--

DROP TABLE IF EXISTS `eat_eatamenitieslistings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eat_eatamenitieslistings` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` longtext,
  `order` int unsigned NOT NULL,
  `eat_page_create_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `eat_eatamenitieslist_eat_page_create_id_a973ee69_fk_eat_eatpa` (`eat_page_create_id`),
  CONSTRAINT `eat_eatamenitieslist_eat_page_create_id_a973ee69_fk_eat_eatpa` FOREIGN KEY (`eat_page_create_id`) REFERENCES `eat_eatpagecreate` (`id`),
  CONSTRAINT `eat_eatamenitieslistings_chk_1` CHECK ((`order` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eat_eatamenitieslistings`
--

LOCK TABLES `eat_eatamenitieslistings` WRITE;
/*!40000 ALTER TABLE `eat_eatamenitieslistings` DISABLE KEYS */;
INSERT INTO `eat_eatamenitieslistings` VALUES (1,'eat/Group_402x.webp','<p>Test </p>',1,1),(2,'eat/Group_402x_SAXiS5R.webp','<p>Test Test</p>',1,1),(3,'eat/Group_402x_XdBMdIt.webp','<p>Test</p>',1,2),(4,'eat/Group_402x_lJOKo1x.webp','<p>Test</p>',1,2);
/*!40000 ALTER TABLE `eat_eatamenitieslistings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eat_eatamenitiestitle`
--

DROP TABLE IF EXISTS `eat_eatamenitiestitle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eat_eatamenitiestitle` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` longtext,
  `description` longtext,
  `eat_page_create_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `eat_eatamenitiestitl_eat_page_create_id_97fe0506_fk_eat_eatpa` (`eat_page_create_id`),
  CONSTRAINT `eat_eatamenitiestitl_eat_page_create_id_97fe0506_fk_eat_eatpa` FOREIGN KEY (`eat_page_create_id`) REFERENCES `eat_eatpagecreate` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eat_eatamenitiestitle`
--

LOCK TABLES `eat_eatamenitiestitle` WRITE;
/*!40000 ALTER TABLE `eat_eatamenitiestitle` DISABLE KEYS */;
INSERT INTO `eat_eatamenitiestitle` VALUES (1,'<p>Test</p>','<p>Test</p>',1),(2,'<p>Test</p>','<p>Test</p>',2);
/*!40000 ALTER TABLE `eat_eatamenitiestitle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eat_eatbanner`
--

DROP TABLE IF EXISTS `eat_eatbanner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eat_eatbanner` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `description` longtext,
  `eat_page_create_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `eat_eatbanner_eat_page_create_id_c2ae3621_fk_eat_eatpa` (`eat_page_create_id`),
  CONSTRAINT `eat_eatbanner_eat_page_create_id_c2ae3621_fk_eat_eatpa` FOREIGN KEY (`eat_page_create_id`) REFERENCES `eat_eatpagecreate` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eat_eatbanner`
--

LOCK TABLES `eat_eatbanner` WRITE;
/*!40000 ALTER TABLE `eat_eatbanner` DISABLE KEYS */;
INSERT INTO `eat_eatbanner` VALUES (1,'eat/Group_146.webp','<h1><strong style=\"color: rgb(240, 240, 240);\">Menu</strong></h1>','<p><span style=\"color: rgb(122, 122, 126);\">Test</span></p>',1),(2,'eat/Mask_Group_86.webp','<h1><strong style=\"color: rgb(255, 255, 255);\">Bar</strong></h1>','<p><span style=\"color: rgb(122, 122, 126);\">Test</span></p>',2);
/*!40000 ALTER TABLE `eat_eatbanner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eat_eatexplore`
--

DROP TABLE IF EXISTS `eat_eatexplore`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eat_eatexplore` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` longtext,
  `description` longtext,
  `eat_page_create_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `eat_eatexplore_eat_page_create_id_c910d3be_fk_eat_eatpa` (`eat_page_create_id`),
  CONSTRAINT `eat_eatexplore_eat_page_create_id_c910d3be_fk_eat_eatpa` FOREIGN KEY (`eat_page_create_id`) REFERENCES `eat_eatpagecreate` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eat_eatexplore`
--

LOCK TABLES `eat_eatexplore` WRITE;
/*!40000 ALTER TABLE `eat_eatexplore` DISABLE KEYS */;
INSERT INTO `eat_eatexplore` VALUES (1,'eat/Mask_Group_65.webp','<p>Explore Test</p>','<p>Test</p>',1),(2,'eat/Mask_Group_87.webp','<p>Test</p>','<p>Test</p>',2);
/*!40000 ALTER TABLE `eat_eatexplore` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eat_eatmenulistings`
--

DROP TABLE IF EXISTS `eat_eatmenulistings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eat_eatmenulistings` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` longtext,
  `description` longtext,
  `rating` double DEFAULT NULL,
  `eat_page_create_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `eat_eatmenulistings_eat_page_create_id_f6eba3cf_fk_eat_eatpa` (`eat_page_create_id`),
  CONSTRAINT `eat_eatmenulistings_eat_page_create_id_f6eba3cf_fk_eat_eatpa` FOREIGN KEY (`eat_page_create_id`) REFERENCES `eat_eatpagecreate` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eat_eatmenulistings`
--

LOCK TABLES `eat_eatmenulistings` WRITE;
/*!40000 ALTER TABLE `eat_eatmenulistings` DISABLE KEYS */;
INSERT INTO `eat_eatmenulistings` VALUES (1,'eat/Mask_Group_712x.webp','<p>Test</p>','<p>Test</p>',4,1),(2,'eat/Mask_Group_72.webp','<p>Test</p>','<p>Test</p>',2,1),(3,'eat/Mask_Group_692x_MPLAyYO.webp','<p>Test</p>','<p>Test </p>',3,1),(4,'eat/Mask_Group_66_g9PJfrV.webp','<p>Test</p>','<p>Test</p>',1,2),(5,'eat/Mask_Group_732x_eMKOpiq.webp','<p>Test</p>','<p>Test </p>',2,2),(6,'eat/Mask_Group_712x_cooU1mW.webp','<p>Test</p>','<p>Test</p>',3,2);
/*!40000 ALTER TABLE `eat_eatmenulistings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eat_eatmenutabcreate`
--

DROP TABLE IF EXISTS `eat_eatmenutabcreate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eat_eatmenutabcreate` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `tab_name` varchar(500) DEFAULT NULL,
  `order` int unsigned NOT NULL,
  `eat_page_create_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `eat_eatmenutabcreate_eat_page_create_id_0e9ce6de_fk_eat_eatpa` (`eat_page_create_id`),
  CONSTRAINT `eat_eatmenutabcreate_eat_page_create_id_0e9ce6de_fk_eat_eatpa` FOREIGN KEY (`eat_page_create_id`) REFERENCES `eat_eatpagecreate` (`id`),
  CONSTRAINT `eat_eatmenutabcreate_chk_1` CHECK ((`order` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eat_eatmenutabcreate`
--

LOCK TABLES `eat_eatmenutabcreate` WRITE;
/*!40000 ALTER TABLE `eat_eatmenutabcreate` DISABLE KEYS */;
INSERT INTO `eat_eatmenutabcreate` VALUES (1,'Breakfast',1,1),(2,'Lunch',2,1),(3,'Dinner',3,1),(4,'Breakfast 10 AM',1,2),(5,'Dinner 9 PM',2,2),(6,'No Tab',0,1),(7,'No Tab',1,2);
/*!40000 ALTER TABLE `eat_eatmenutabcreate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eat_eatmenutabitems`
--

DROP TABLE IF EXISTS `eat_eatmenutabitems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eat_eatmenutabitems` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` longtext,
  `description` longtext,
  `rating` double DEFAULT NULL,
  `eat_page_create_id` bigint NOT NULL,
  `tab_name_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `eat_eatmenutabitems_eat_page_create_id_928d5f92_fk_eat_eatpa` (`eat_page_create_id`),
  KEY `eat_eatmenutabitems_tab_name_id_41ca677d_fk_eat_eatme` (`tab_name_id`),
  CONSTRAINT `eat_eatmenutabitems_eat_page_create_id_928d5f92_fk_eat_eatpa` FOREIGN KEY (`eat_page_create_id`) REFERENCES `eat_eatpagecreate` (`id`),
  CONSTRAINT `eat_eatmenutabitems_tab_name_id_41ca677d_fk_eat_eatme` FOREIGN KEY (`tab_name_id`) REFERENCES `eat_eatmenutabcreate` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eat_eatmenutabitems`
--

LOCK TABLES `eat_eatmenutabitems` WRITE;
/*!40000 ALTER TABLE `eat_eatmenutabitems` DISABLE KEYS */;
INSERT INTO `eat_eatmenutabitems` VALUES (1,'eat/Mask_Group_732x.webp','<p>Test</p>','<p>Test</p>',4,1,1),(2,'eat/Mask_Group_672x.webp','<p>Test </p>','<p>Test</p>',5,1,1),(3,'eat/Mask_Group_732x_T5nK5DZ.webp','<p>Test</p>','<p>Test</p>',3,1,1),(4,'eat/Mask_Group_66.webp','<p>Test</p>','<p>Test</p>',5,1,2),(5,'eat/Mask_Group_692x.webp','<p>Test</p>','<p>Test</p>',5,1,2),(6,'eat/Mask_Group_732x_n5uI4I9.webp','<p>Test </p>','<p>Test</p>',1,1,3),(7,'eat/Mask_Group_692x_FCDDUvB.webp','<p>Test</p>','<p>Test</p>',4,1,3),(8,'eat/Mask_Group_70.webp','<p>Test</p>','<p>Test</p>',5,1,3),(9,'eat/Mask_Group_69.webp','<p>Test </p>','<p>Test</p>',5,2,4),(10,'eat/Mask_Group_712x_o4RLiMA.webp','<p>Test</p>','<p>Test</p>',5,2,4);
/*!40000 ALTER TABLE `eat_eatmenutabitems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eat_eatmenutitle`
--

DROP TABLE IF EXISTS `eat_eatmenutitle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eat_eatmenutitle` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` longtext,
  `eat_page_create_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `eat_eatmenutitle_eat_page_create_id_3cf0914d_fk_eat_eatpa` (`eat_page_create_id`),
  CONSTRAINT `eat_eatmenutitle_eat_page_create_id_3cf0914d_fk_eat_eatpa` FOREIGN KEY (`eat_page_create_id`) REFERENCES `eat_eatpagecreate` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eat_eatmenutitle`
--

LOCK TABLES `eat_eatmenutitle` WRITE;
/*!40000 ALTER TABLE `eat_eatmenutitle` DISABLE KEYS */;
INSERT INTO `eat_eatmenutitle` VALUES (1,'<p>Title Test</p>',1);
/*!40000 ALTER TABLE `eat_eatmenutitle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eat_eatpagecreate`
--

DROP TABLE IF EXISTS `eat_eatpagecreate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eat_eatpagecreate` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `link` (`link`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eat_eatpagecreate`
--

LOCK TABLES `eat_eatpagecreate` WRITE;
/*!40000 ALTER TABLE `eat_eatpagecreate` DISABLE KEYS */;
INSERT INTO `eat_eatpagecreate` VALUES (1,'Menu','menu'),(2,'Bar','bar');
/*!40000 ALTER TABLE `eat_eatpagecreate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eat_eattime`
--

DROP TABLE IF EXISTS `eat_eattime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eat_eattime` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `opening_time` longtext,
  `closing_time` longtext,
  `eat_page_create_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `eat_eattime_eat_page_create_id_b738e620_fk_eat_eatpagecreate_id` (`eat_page_create_id`),
  CONSTRAINT `eat_eattime_eat_page_create_id_b738e620_fk_eat_eatpagecreate_id` FOREIGN KEY (`eat_page_create_id`) REFERENCES `eat_eatpagecreate` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eat_eattime`
--

LOCK TABLES `eat_eattime` WRITE;
/*!40000 ALTER TABLE `eat_eattime` DISABLE KEYS */;
INSERT INTO `eat_eattime` VALUES (1,'<p><strong>11am Opening</strong></p>','<p><strong>11am Closing</strong></p>',1),(2,'<p><strong>10am Opening</strong></p>','<p><strong>11am Closing</strong></p>',2),(3,'<p>No Time</p>','<p>No Time</p>',1),(4,'<p>No Time</p>','<p>No Time</p>',2);
/*!40000 ALTER TABLE `eat_eattime` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enquiry_booking`
--

DROP TABLE IF EXISTS `enquiry_booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enquiry_booking` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `room_type` varchar(100) NOT NULL,
  `checkin` date NOT NULL,
  `checkout` date NOT NULL,
  `adults` int unsigned NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `referer_url` varchar(500) DEFAULT NULL,
  `submitted_url` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `enquiry_booking_chk_1` CHECK ((`adults` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enquiry_booking`
--

LOCK TABLES `enquiry_booking` WRITE;
/*!40000 ALTER TABLE `enquiry_booking` DISABLE KEYS */;
INSERT INTO `enquiry_booking` VALUES (1,'Test 4','1234567890','delux-double-bedroom','2025-06-20','2025-06-21',2,'2025-06-21 11:52:07.873285','http://localhost:5176/about','http://localhost:5176/'),(2,'Test 5','1234567890','standard-double-room','2025-06-23','2025-06-24',3,'2025-06-21 11:52:57.672096','http://localhost:5176/about','http://localhost:5176/'),(3,'Test 5','1234567890','delux-double-bedroom','2025-06-20','2025-06-21',2,'2025-06-21 12:54:10.251652','http://localhost:5176/','http://localhost:5176/'),(4,'Test Last','1234567890','super-deluxe-room','2025-06-21','2025-06-22',2,'2025-06-21 13:38:52.215640','http://localhost:5176/','http://localhost:5176/');
/*!40000 ALTER TABLE `enquiry_booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enquiry_contact`
--

DROP TABLE IF EXISTS `enquiry_contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enquiry_contact` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(254) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `message` longtext NOT NULL,
  `recaptcha_response` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `referer_url` varchar(500) DEFAULT NULL,
  `submitted_url` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enquiry_contact`
--

LOCK TABLES `enquiry_contact` WRITE;
/*!40000 ALTER TABLE `enquiry_contact` DISABLE KEYS */;
INSERT INTO `enquiry_contact` VALUES (1,'Test 1','ajayrenjith08@gmail.com','1234567890','Test','','2025-06-21 11:12:29.827060','http://localhost:5176/about','http://localhost:5176/'),(2,'Test 1','ajayrenjith08@gmail.com','1234567890','Test','','2025-06-21 11:12:35.717848','http://localhost:5176/about','http://localhost:5176/'),(3,'Test 1','ajayrenjith08@gmail.com','1234567890','Test','','2025-06-21 11:15:33.221687','http://localhost:5176/about','http://localhost:5176/'),(4,'Test 2','ajayrenjith08@gmail.com','1234567890','Test 2','','2025-06-21 11:35:44.937618','http://localhost:5176/about','http://localhost:5176/'),(5,'Test 3','ajayrenjith08@gmail.com','1234567890','Test 3','','2025-06-21 11:37:49.837303','http://localhost:5176/about','http://localhost:5176/'),(6,'Test 3','ajayrenjith08@gmail.com','1234567890','Test 3','','2025-06-21 11:38:47.789800','http://localhost:5176/about','http://localhost:5176/');
/*!40000 ALTER TABLE `enquiry_contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `explore_explorebanner`
--

DROP TABLE IF EXISTS `explore_explorebanner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `explore_explorebanner` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `description` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `explore_explorebanner`
--

LOCK TABLES `explore_explorebanner` WRITE;
/*!40000 ALTER TABLE `explore_explorebanner` DISABLE KEYS */;
INSERT INTO `explore_explorebanner` VALUES (1,'explore/Mask_Group_10.webp','<h1><strong style=\"color: rgb(255, 255, 255);\">Test</strong></h1><h1><span style=\"color: rgb(255, 255, 255);\">Test</span></h1>','<p><span style=\"color: rgb(122, 122, 126);\">Test</span></p>');
/*!40000 ALTER TABLE `explore_explorebanner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `explore_exploresectionthree`
--

DROP TABLE IF EXISTS `explore_exploresectionthree`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `explore_exploresectionthree` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `order` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `explore_exploresectionthree`
--

LOCK TABLES `explore_exploresectionthree` WRITE;
/*!40000 ALTER TABLE `explore_exploresectionthree` DISABLE KEYS */;
INSERT INTO `explore_exploresectionthree` VALUES (1,'explore/Mask_Group_27.webp',0),(2,'explore/Mask_Group_262x.webp',0),(3,'explore/Mask_Group_17.webp',0);
/*!40000 ALTER TABLE `explore_exploresectionthree` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `explore_exploresectionthreetitle`
--

DROP TABLE IF EXISTS `explore_exploresectionthreetitle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `explore_exploresectionthreetitle` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  `description` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `explore_exploresectionthreetitle`
--

LOCK TABLES `explore_exploresectionthreetitle` WRITE;
/*!40000 ALTER TABLE `explore_exploresectionthreetitle` DISABLE KEYS */;
INSERT INTO `explore_exploresectionthreetitle` VALUES (1,'<h1><strong>Test</strong></h1><h1>Test Test</h1>','<p><span style=\"color: rgb(122, 122, 126);\">Test</span></p>');
/*!40000 ALTER TABLE `explore_exploresectionthreetitle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `explore_exploresectiontwo`
--

DROP TABLE IF EXISTS `explore_exploresectiontwo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `explore_exploresectiontwo` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `description` longtext,
  `order` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `explore_exploresectiontwo`
--

LOCK TABLES `explore_exploresectiontwo` WRITE;
/*!40000 ALTER TABLE `explore_exploresectiontwo` DISABLE KEYS */;
INSERT INTO `explore_exploresectiontwo` VALUES (1,'explore/Mask_Group_8.webp','<h2><strong>Test</strong></h2>','<p>Test</p>',0),(2,'explore/Mask_Group_23.webp','<h2><strong>Test</strong></h2>','<p>Test</p>',0);
/*!40000 ALTER TABLE `explore_exploresectiontwo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gallery_gallerybanner`
--

DROP TABLE IF EXISTS `gallery_gallerybanner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gallery_gallerybanner` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gallery_gallerybanner`
--

LOCK TABLES `gallery_gallerybanner` WRITE;
/*!40000 ALTER TABLE `gallery_gallerybanner` DISABLE KEYS */;
INSERT INTO `gallery_gallerybanner` VALUES (1,'gallery/Mask_Group_852x.webp','<h1><strong style=\"color: rgb(255, 255, 255);\">Gallery</strong><span style=\"color: rgb(255, 255, 255);\"> </span></h1><h1><span style=\"color: rgb(255, 255, 255);\">lorem ipsum dolor sit amet</span></h1>');
/*!40000 ALTER TABLE `gallery_gallerybanner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gallery_galleryimages`
--

DROP TABLE IF EXISTS `gallery_galleryimages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gallery_galleryimages` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `order` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gallery_galleryimages`
--

LOCK TABLES `gallery_galleryimages` WRITE;
/*!40000 ALTER TABLE `gallery_galleryimages` DISABLE KEYS */;
INSERT INTO `gallery_galleryimages` VALUES (1,'gallery/Mask_Group_47.webp',0),(2,'gallery/Mask_Group_50.webp',0),(3,'gallery/Mask_Group_52.webp',0),(4,'gallery/Group_1482x.webp',0),(5,'gallery/Mask_Group_852x_Q7AscO1.webp',0);
/*!40000 ALTER TABLE `gallery_galleryimages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gather_gatheramenitieslistings`
--

DROP TABLE IF EXISTS `gather_gatheramenitieslistings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gather_gatheramenitieslistings` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` longtext,
  `order` int unsigned NOT NULL,
  `gather_page_create_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `gather_gatherameniti_gather_page_create_i_cc828fc6_fk_gather_ga` (`gather_page_create_id`),
  CONSTRAINT `gather_gatherameniti_gather_page_create_i_cc828fc6_fk_gather_ga` FOREIGN KEY (`gather_page_create_id`) REFERENCES `gather_gatherpagecreate` (`id`),
  CONSTRAINT `gather_gatheramenitieslistings_chk_1` CHECK ((`order` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gather_gatheramenitieslistings`
--

LOCK TABLES `gather_gatheramenitieslistings` WRITE;
/*!40000 ALTER TABLE `gather_gatheramenitieslistings` DISABLE KEYS */;
INSERT INTO `gather_gatheramenitieslistings` VALUES (1,'gather/Group_402x.webp','<p>Test</p>',1,1),(2,'gather/Group_402x_Ejp6nIh.webp','<p>Test</p>',2,1),(3,'gather/Group_402x_fGrrty0.webp','<p>Test</p>',3,1);
/*!40000 ALTER TABLE `gather_gatheramenitieslistings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gather_gatheramenitiestitle`
--

DROP TABLE IF EXISTS `gather_gatheramenitiestitle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gather_gatheramenitiestitle` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` longtext,
  `description` longtext,
  `gather_page_create_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `gather_gatherameniti_gather_page_create_i_b9ad0570_fk_gather_ga` (`gather_page_create_id`),
  CONSTRAINT `gather_gatherameniti_gather_page_create_i_b9ad0570_fk_gather_ga` FOREIGN KEY (`gather_page_create_id`) REFERENCES `gather_gatherpagecreate` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gather_gatheramenitiestitle`
--

LOCK TABLES `gather_gatheramenitiestitle` WRITE;
/*!40000 ALTER TABLE `gather_gatheramenitiestitle` DISABLE KEYS */;
INSERT INTO `gather_gatheramenitiestitle` VALUES (1,'<h2>Tested</h2>','<p>Test</p>',1);
/*!40000 ALTER TABLE `gather_gatheramenitiestitle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gather_gatherbanner`
--

DROP TABLE IF EXISTS `gather_gatherbanner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gather_gatherbanner` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `description` longtext,
  `gather_page_create_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `gather_gatherbanner_gather_page_create_i_c0565682_fk_gather_ga` (`gather_page_create_id`),
  CONSTRAINT `gather_gatherbanner_gather_page_create_i_c0565682_fk_gather_ga` FOREIGN KEY (`gather_page_create_id`) REFERENCES `gather_gatherpagecreate` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gather_gatherbanner`
--

LOCK TABLES `gather_gatherbanner` WRITE;
/*!40000 ALTER TABLE `gather_gatherbanner` DISABLE KEYS */;
INSERT INTO `gather_gatherbanner` VALUES (1,'gather/Mask_Group_82.webp','<h1><strong style=\"color: rgb(255, 255, 255);\">Ooty</strong></h1>','<p><span style=\"color: rgb(122, 122, 126);\">Test</span></p>',1),(2,'gather/Mask_Group_88.webp','<h1><strong style=\"color: rgb(255, 255, 255);\">Business Gatherings</strong></h1>','<p><span style=\"color: rgb(122, 122, 126);\">Test</span></p>',2);
/*!40000 ALTER TABLE `gather_gatherbanner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gather_gatherexplore`
--

DROP TABLE IF EXISTS `gather_gatherexplore`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gather_gatherexplore` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` longtext,
  `link` varchar(255) DEFAULT NULL,
  `gather_page_create_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `gather_gatherexplore_gather_page_create_i_e0d8d55f_fk_gather_ga` (`gather_page_create_id`),
  CONSTRAINT `gather_gatherexplore_gather_page_create_i_e0d8d55f_fk_gather_ga` FOREIGN KEY (`gather_page_create_id`) REFERENCES `gather_gatherpagecreate` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gather_gatherexplore`
--

LOCK TABLES `gather_gatherexplore` WRITE;
/*!40000 ALTER TABLE `gather_gatherexplore` DISABLE KEYS */;
INSERT INTO `gather_gatherexplore` VALUES (1,'gather/Mask_Group_75.webp','<p>Explore Test</p>','explore',1);
/*!40000 ALTER TABLE `gather_gatherexplore` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gather_gatherhighlights`
--

DROP TABLE IF EXISTS `gather_gatherhighlights`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gather_gatherhighlights` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` longtext,
  `description` longtext,
  `order` int unsigned NOT NULL,
  `gather_page_create_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `gather_gatherhighlig_gather_page_create_i_75a99f58_fk_gather_ga` (`gather_page_create_id`),
  CONSTRAINT `gather_gatherhighlig_gather_page_create_i_75a99f58_fk_gather_ga` FOREIGN KEY (`gather_page_create_id`) REFERENCES `gather_gatherpagecreate` (`id`),
  CONSTRAINT `gather_gatherhighlights_chk_1` CHECK ((`order` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gather_gatherhighlights`
--

LOCK TABLES `gather_gatherhighlights` WRITE;
/*!40000 ALTER TABLE `gather_gatherhighlights` DISABLE KEYS */;
INSERT INTO `gather_gatherhighlights` VALUES (1,'gather/Mask_Group_25.webp','<p>Title</p>','<p>Description </p>',1,1),(2,'gather/Mask_Group_31.webp','<p>Test Title</p>','<p>Test Description </p>',2,1);
/*!40000 ALTER TABLE `gather_gatherhighlights` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gather_gatherhighlightstitle`
--

DROP TABLE IF EXISTS `gather_gatherhighlightstitle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gather_gatherhighlightstitle` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` longtext,
  `description` longtext,
  `gather_page_create_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `gather_gatherhighlig_gather_page_create_i_dfb296b9_fk_gather_ga` (`gather_page_create_id`),
  CONSTRAINT `gather_gatherhighlig_gather_page_create_i_dfb296b9_fk_gather_ga` FOREIGN KEY (`gather_page_create_id`) REFERENCES `gather_gatherpagecreate` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gather_gatherhighlightstitle`
--

LOCK TABLES `gather_gatherhighlightstitle` WRITE;
/*!40000 ALTER TABLE `gather_gatherhighlightstitle` DISABLE KEYS */;
INSERT INTO `gather_gatherhighlightstitle` VALUES (1,'<p>Test Highlights</p>','<p>Test</p>',1);
/*!40000 ALTER TABLE `gather_gatherhighlightstitle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gather_gatherpagecreate`
--

DROP TABLE IF EXISTS `gather_gatherpagecreate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gather_gatherpagecreate` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `link` (`link`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gather_gatherpagecreate`
--

LOCK TABLES `gather_gatherpagecreate` WRITE;
/*!40000 ALTER TABLE `gather_gatherpagecreate` DISABLE KEYS */;
INSERT INTO `gather_gatherpagecreate` VALUES (1,'Ooty Valparai Munnar India','ooty-valparai-munnar-india'),(2,'Business Gatherings','business-gatherings');
/*!40000 ALTER TABLE `gather_gatherpagecreate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gather_gatherservices`
--

DROP TABLE IF EXISTS `gather_gatherservices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gather_gatherservices` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` longtext,
  `description` longtext,
  `order` int unsigned NOT NULL,
  `gather_page_create_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `gather_gatherservice_gather_page_create_i_9243ec79_fk_gather_ga` (`gather_page_create_id`),
  CONSTRAINT `gather_gatherservice_gather_page_create_i_9243ec79_fk_gather_ga` FOREIGN KEY (`gather_page_create_id`) REFERENCES `gather_gatherpagecreate` (`id`),
  CONSTRAINT `gather_gatherservices_chk_1` CHECK ((`order` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gather_gatherservices`
--

LOCK TABLES `gather_gatherservices` WRITE;
/*!40000 ALTER TABLE `gather_gatherservices` DISABLE KEYS */;
INSERT INTO `gather_gatherservices` VALUES (1,'gather/Mask_Group_26.webp','<p>Test</p>','<p>Test</p>',1,1),(2,'gather/Mask_Group_52x.webp','<p>Test</p>','<p>Test</p>',2,1),(3,'gather/Mask_Group_8.webp','<p>Test</p>','<p>Tested</p>',3,1),(4,'gather/Mask_Group_25_1W7Mqdm.webp','<p>Tested</p>','<p>Test Test</p>',1,2);
/*!40000 ALTER TABLE `gather_gatherservices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_homeaboutimage`
--

DROP TABLE IF EXISTS `home_homeaboutimage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_homeaboutimage` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_homeaboutimage`
--

LOCK TABLES `home_homeaboutimage` WRITE;
/*!40000 ALTER TABLE `home_homeaboutimage` DISABLE KEYS */;
INSERT INTO `home_homeaboutimage` VALUES (1,'home/Mask_Group_17_LqVLZgm.webp'),(2,'home/Mask_Group_23_TBPZ5qp.webp'),(3,'home/Mask_Group_12_hSaGP1B.webp'),(4,'home/Mask_Group_242x.webp');
/*!40000 ALTER TABLE `home_homeaboutimage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_homeabouttitle`
--

DROP TABLE IF EXISTS `home_homeabouttitle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_homeabouttitle` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  `description` longtext,
  `link` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_homeabouttitle`
--

LOCK TABLES `home_homeabouttitle` WRITE;
/*!40000 ALTER TABLE `home_homeabouttitle` DISABLE KEYS */;
INSERT INTO `home_homeabouttitle` VALUES (1,'<h2><strong>Test Title</strong></h2>','<p>Test Description </p>',NULL);
/*!40000 ALTER TABLE `home_homeabouttitle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_homebanner`
--

DROP TABLE IF EXISTS `home_homebanner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_homebanner` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `description` longtext,
  `order` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_homebanner`
--

LOCK TABLES `home_homebanner` WRITE;
/*!40000 ALTER TABLE `home_homebanner` DISABLE KEYS */;
INSERT INTO `home_homebanner` VALUES (1,'home/Group_1472x.webp','<h1><strong>Valparai</strong></h1>','<p>Indulge in the mystic charm of the mountains. Trek through the unspoilt and unseen forest trails of Annamalai. Infuse the wonders and spell of the virgin shola forest. Breathe in nature in its pristine form.</p>',0),(2,'home/Mask_Group_8_2x5JnzK.webp','<h1><strong>Test Slider</strong></h1>','<p>Test Slider Description</p>',1),(3,'home/Mask_Group_752x.webp','<h1><strong style=\"color: rgb(255, 255, 255);\">Rooms</strong></h1>','<p>Test Leorem Lipsm</p>',2);
/*!40000 ALTER TABLE `home_homebanner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_homeblogsection`
--

DROP TABLE IF EXISTS `home_homeblogsection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_homeblogsection` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `order` int NOT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `link` (`link`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_homeblogsection`
--

LOCK TABLES `home_homeblogsection` WRITE;
/*!40000 ALTER TABLE `home_homeblogsection` DISABLE KEYS */;
INSERT INTO `home_homeblogsection` VALUES (1,'home/Mask_Group_50.webp','<p><span style=\"color: rgb(122, 122, 126);\">Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry.</span></p>','test',1,'2025-06-16');
/*!40000 ALTER TABLE `home_homeblogsection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_homeblogtitlesection`
--

DROP TABLE IF EXISTS `home_homeblogtitlesection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_homeblogtitlesection` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  `description` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_homeblogtitlesection`
--

LOCK TABLES `home_homeblogtitlesection` WRITE;
/*!40000 ALTER TABLE `home_homeblogtitlesection` DISABLE KEYS */;
INSERT INTO `home_homeblogtitlesection` VALUES (1,'<h2>Lorem Ipsum&nbsp;is simply </h2><h2><strong>dummy text</strong></h2>','<p>Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>');
/*!40000 ALTER TABLE `home_homeblogtitlesection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_homeeatsection`
--

DROP TABLE IF EXISTS `home_homeeatsection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_homeeatsection` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `description` longtext,
  `link` varchar(255) DEFAULT NULL,
  `order` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `link` (`link`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_homeeatsection`
--

LOCK TABLES `home_homeeatsection` WRITE;
/*!40000 ALTER TABLE `home_homeeatsection` DISABLE KEYS */;
INSERT INTO `home_homeeatsection` VALUES (1,'home/Mask_Group_8_wt4bFpp.webp','<h5><strong style=\"color: rgb(0, 0, 0);\">Menu</strong></h5>','<p>Test </p>','menu',0),(2,'home/Mask_Group_17_MsGCYx7.webp','<h5><strong>Bar</strong></h5>','<p>Test </p>','bar',0);
/*!40000 ALTER TABLE `home_homeeatsection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_homeeatsectioncontent`
--

DROP TABLE IF EXISTS `home_homeeatsectioncontent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_homeeatsectioncontent` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  `description` longtext,
  `link` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `link` (`link`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_homeeatsectioncontent`
--

LOCK TABLES `home_homeeatsectioncontent` WRITE;
/*!40000 ALTER TABLE `home_homeeatsectioncontent` DISABLE KEYS */;
INSERT INTO `home_homeeatsectioncontent` VALUES (1,'<h2><strong>Lorem Ipsum has</strong></h2>','<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>','menu');
/*!40000 ALTER TABLE `home_homeeatsectioncontent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_homeexplore`
--

DROP TABLE IF EXISTS `home_homeexplore`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_homeexplore` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `description` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_homeexplore`
--

LOCK TABLES `home_homeexplore` WRITE;
/*!40000 ALTER TABLE `home_homeexplore` DISABLE KEYS */;
INSERT INTO `home_homeexplore` VALUES (1,'home/Mask_Group_31.webp','<h2><span style=\"color: rgb(240, 240, 240);\">Test</span></h2><h2><strong style=\"color: rgb(240, 240, 240);\">Test</strong></h2>','<p><span style=\"color: rgb(240, 240, 240);\">Test</span></p>');
/*!40000 ALTER TABLE `home_homeexplore` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_homegathersection`
--

DROP TABLE IF EXISTS `home_homegathersection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_homegathersection` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `description` longtext,
  `link` varchar(255) DEFAULT NULL,
  `order` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `link` (`link`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_homegathersection`
--

LOCK TABLES `home_homegathersection` WRITE;
/*!40000 ALTER TABLE `home_homegathersection` DISABLE KEYS */;
INSERT INTO `home_homegathersection` VALUES (1,'home/Mask_Group_52x_QEcPbjo.webp','<p><span style=\"color: rgb(240, 240, 240);\">Ooty</span></p>','<p><span style=\"color: rgb(240, 240, 240);\">Test</span></p>','',0),(2,'home/Mask_Group_23_aXEwpVF.webp','<h5><span style=\"color: rgb(240, 240, 240);\">Valparai</span></h5>','<p><span style=\"color: rgb(240, 240, 240);\">Test</span></p>',NULL,0);
/*!40000 ALTER TABLE `home_homegathersection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_homegathersectioncontent`
--

DROP TABLE IF EXISTS `home_homegathersectioncontent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_homegathersectioncontent` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  `description` longtext,
  `link` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `link` (`link`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_homegathersectioncontent`
--

LOCK TABLES `home_homegathersectioncontent` WRITE;
/*!40000 ALTER TABLE `home_homegathersectioncontent` DISABLE KEYS */;
INSERT INTO `home_homegathersectioncontent` VALUES (1,'<h2><strong style=\"color: rgb(240, 240, 240);\">Lorem Ipsum has been</strong></h2>','<p><span style=\"color: rgb(240, 240, 240);\">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></p>','gather');
/*!40000 ALTER TABLE `home_homegathersectioncontent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_homerating`
--

DROP TABLE IF EXISTS `home_homerating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_homerating` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` longtext,
  `starRating` int DEFAULT NULL,
  `label` varchar(500) DEFAULT NULL,
  `score` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_homerating`
--

LOCK TABLES `home_homerating` WRITE;
/*!40000 ALTER TABLE `home_homerating` DISABLE KEYS */;
INSERT INTO `home_homerating` VALUES (1,'<p>Test</p>',5,'<p>Test</p>','<p>5.0</p>');
/*!40000 ALTER TABLE `home_homerating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_homerooms`
--

DROP TABLE IF EXISTS `home_homerooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_homerooms` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `index` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `description` longtext,
  `order` int NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_homerooms`
--

LOCK TABLES `home_homerooms` WRITE;
/*!40000 ALTER TABLE `home_homerooms` DISABLE KEYS */;
INSERT INTO `home_homerooms` VALUES (1,'home/Mask_Group_52x.webp','<h2><strong>01</strong></h2>','<h2><strong>Test</strong></h2>','<p>Test</p>',0,NULL),(2,'home/Mask_Group_112x_uO8PSEw.webp','<h2><strong>02</strong></h2>','<h2><strong>Testing</strong></h2>','<p>Test Test</p>',1,NULL),(3,'home/Mask_Group_8_yQ6GcK6.webp','<h2>03</h2>','<p>Test</p>','<h2><strong>Testing</strong></h2>',2,NULL);
/*!40000 ALTER TABLE `home_homerooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_homeroomstitle`
--

DROP TABLE IF EXISTS `home_homeroomstitle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_homeroomstitle` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  `description` longtext,
  `link` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_homeroomstitle`
--

LOCK TABLES `home_homeroomstitle` WRITE;
/*!40000 ALTER TABLE `home_homeroomstitle` DISABLE KEYS */;
INSERT INTO `home_homeroomstitle` VALUES (1,'<p>Test</p>','<h2><strong>Test</strong></h2>','stay/delux-double-bedroom');
/*!40000 ALTER TABLE `home_homeroomstitle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_homeservices`
--

DROP TABLE IF EXISTS `home_homeservices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_homeservices` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `order` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_homeservices`
--

LOCK TABLES `home_homeservices` WRITE;
/*!40000 ALTER TABLE `home_homeservices` DISABLE KEYS */;
INSERT INTO `home_homeservices` VALUES (1,'home/Group_402x.webp','<p><strong>Test Service</strong></p>',0),(2,'home/Group_402x_TmQBy4S.webp','<p><strong>Test Service</strong></p>',1),(3,'home/Group_402x_UZi8QZK.webp','<p><strong>Test Service</strong></p>',2),(4,'home/Group_402x_KQClMkI.webp','<p><strong>Test Service</strong></p>',3),(5,'home/Group_402x_UbfXaqt.webp','<p><strong>Test Service</strong></p>',4),(6,'home/Group_402x_8JRCCmi.webp','<p><strong>Test Service</strong></p>',5);
/*!40000 ALTER TABLE `home_homeservices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_homestats`
--

DROP TABLE IF EXISTS `home_homestats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_homestats` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `value` varchar(100) DEFAULT NULL,
  `label` varchar(500) DEFAULT NULL,
  `order` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_homestats`
--

LOCK TABLES `home_homestats` WRITE;
/*!40000 ALTER TABLE `home_homestats` DISABLE KEYS */;
INSERT INTO `home_homestats` VALUES (1,'<p>100M</p>','<p>Test</p>',0),(2,'<p>200M</p>','<p>Testing</p>',1),(3,'<p>30M</p>','<p>Test Test</p>',2);
/*!40000 ALTER TABLE `home_homestats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_hometeamsection`
--

DROP TABLE IF EXISTS `home_hometeamsection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_hometeamsection` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `name` varchar(500) DEFAULT NULL,
  `role` varchar(500) DEFAULT NULL,
  `testimonial` longtext,
  `order` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_hometeamsection`
--

LOCK TABLES `home_hometeamsection` WRITE;
/*!40000 ALTER TABLE `home_hometeamsection` DISABLE KEYS */;
INSERT INTO `home_hometeamsection` VALUES (1,'home/Professional_India_Why_Study_In_India.webp','<p><strong>Alsern Aldren</strong></p>','<p><span style=\"color: rgb(122, 122, 126);\">Digital Marketer</span></p>','<p><span style=\"color: rgb(122, 122, 126);\">Estatez made my life easy. It helped me with search for my first ever investment. Thanks to the team for providing relevant tool like EMI.</span></p>',1),(2,'home/Mask_Group_69.webp','<p><strong>Alsern Aldren</strong></p>','<p><span style=\"color: rgb(122, 122, 126);\">Web Developer</span></p>','<p><span style=\"color: rgb(122, 122, 126);\">Estatez made my life easy. It helped me with search for my first ever investment. Thanks to the team for providing relevant tool like EMI.</span></p>',2),(3,'home/Mask_Group_70.webp','<p><strong>Alsern Aldren</strong></p>','<p><span style=\"color: rgb(122, 122, 126);\">Developer</span></p>','<p><span style=\"color: rgb(122, 122, 126);\">Estatez made my life easy. It helped me with search for my first ever investment. Thanks to the team for providing relevant tool like EMI.</span></p>',3);
/*!40000 ALTER TABLE `home_hometeamsection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_hometeamtitlesection`
--

DROP TABLE IF EXISTS `home_hometeamtitlesection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_hometeamtitlesection` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_hometeamtitlesection`
--

LOCK TABLES `home_hometeamtitlesection` WRITE;
/*!40000 ALTER TABLE `home_hometeamtitlesection` DISABLE KEYS */;
INSERT INTO `home_hometeamtitlesection` VALUES (1,'<h2>Lorem Ipsum Is<strong>&nbsp;</strong><strong style=\"color: rgb(122, 122, 126);\">Typesetting Industry.</strong></h2>');
/*!40000 ALTER TABLE `home_hometeamtitlesection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social_media_socialmedialinks`
--

DROP TABLE IF EXISTS `social_media_socialmedialinks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `social_media_socialmedialinks` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `facebook` varchar(255) DEFAULT NULL,
  `whatsapp` varchar(255) DEFAULT NULL,
  `youtube` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social_media_socialmedialinks`
--

LOCK TABLES `social_media_socialmedialinks` WRITE;
/*!40000 ALTER TABLE `social_media_socialmedialinks` DISABLE KEYS */;
INSERT INTO `social_media_socialmedialinks` VALUES (1,'https://www.facebook.com/','9633175759','https://www.youtube.com/oops','https://www.instagram.com/','https://www.twitter.com/');
/*!40000 ALTER TABLE `social_media_socialmedialinks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stay_stayamenitieslistings`
--

DROP TABLE IF EXISTS `stay_stayamenitieslistings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stay_stayamenitieslistings` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` longtext NOT NULL,
  `stay_page_create_id` bigint NOT NULL,
  `order` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `stay_stayamenitiesli_stay_page_create_id_76711113_fk_stay_stay` (`stay_page_create_id`),
  CONSTRAINT `stay_stayamenitiesli_stay_page_create_id_76711113_fk_stay_stay` FOREIGN KEY (`stay_page_create_id`) REFERENCES `stay_staypagecreate` (`id`),
  CONSTRAINT `stay_stayamenitieslistings_chk_1` CHECK ((`order` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stay_stayamenitieslistings`
--

LOCK TABLES `stay_stayamenitieslistings` WRITE;
/*!40000 ALTER TABLE `stay_stayamenitieslistings` DISABLE KEYS */;
INSERT INTO `stay_stayamenitieslistings` VALUES (1,'stay/Group_402x.webp','<p><strong>Test</strong></p>',1,0),(2,'stay/Group_402x_8DEjFO3.webp','<p><strong>Test Test</strong></p>',1,0);
/*!40000 ALTER TABLE `stay_stayamenitieslistings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stay_stayamenitiestitle`
--

DROP TABLE IF EXISTS `stay_stayamenitiestitle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stay_stayamenitiestitle` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` longtext NOT NULL,
  `description` longtext,
  `stay_page_create_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `stay_stayamenitiesti_stay_page_create_id_da220a02_fk_stay_stay` (`stay_page_create_id`),
  CONSTRAINT `stay_stayamenitiesti_stay_page_create_id_da220a02_fk_stay_stay` FOREIGN KEY (`stay_page_create_id`) REFERENCES `stay_staypagecreate` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stay_stayamenitiestitle`
--

LOCK TABLES `stay_stayamenitiestitle` WRITE;
/*!40000 ALTER TABLE `stay_stayamenitiestitle` DISABLE KEYS */;
INSERT INTO `stay_stayamenitiestitle` VALUES (1,'<h1><strong style=\"color: rgb(0, 0, 0);\">Test</strong></h1>','<p><span style=\"color: rgb(0, 0, 0);\">Test</span></p>',1);
/*!40000 ALTER TABLE `stay_stayamenitiestitle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stay_staybanner`
--

DROP TABLE IF EXISTS `stay_staybanner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stay_staybanner` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `description` longtext,
  `stay_page_create_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `stay_staybanner_stay_page_create_id_2ae89ac1_fk_stay_stay` (`stay_page_create_id`),
  CONSTRAINT `stay_staybanner_stay_page_create_id_2ae89ac1_fk_stay_stay` FOREIGN KEY (`stay_page_create_id`) REFERENCES `stay_staypagecreate` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stay_staybanner`
--

LOCK TABLES `stay_staybanner` WRITE;
/*!40000 ALTER TABLE `stay_staybanner` DISABLE KEYS */;
INSERT INTO `stay_staybanner` VALUES (1,'stay/Mask_Group_832x.webp','<h1><strong style=\"color: rgb(240, 240, 240);\">Delux Double Bedroom</strong></h1>','<p><span style=\"color: rgb(240, 240, 240);\">Test</span></p>',1),(2,'stay/Mask_Group_332x_4gvfENk.webp','<h1><strong style=\"color: rgb(255, 255, 255);\">Super Deluxe Room</strong></h1>','<p><span style=\"color: rgb(255, 255, 255);\">Test</span></p>',2),(3,'stay/Group_144.webp','<h1><strong style=\"color: rgb(255, 255, 255);\">Standard Double Bedroom</strong></h1>','<p><span style=\"color: rgb(255, 255, 255);\">Test</span></p>',3);
/*!40000 ALTER TABLE `stay_staybanner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stay_stayexplore`
--

DROP TABLE IF EXISTS `stay_stayexplore`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stay_stayexplore` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` longtext,
  `link` varchar(255) DEFAULT NULL,
  `stay_page_create_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `stay_stayexplore_stay_page_create_id_63205248_fk_stay_stay` (`stay_page_create_id`),
  CONSTRAINT `stay_stayexplore_stay_page_create_id_63205248_fk_stay_stay` FOREIGN KEY (`stay_page_create_id`) REFERENCES `stay_staypagecreate` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stay_stayexplore`
--

LOCK TABLES `stay_stayexplore` WRITE;
/*!40000 ALTER TABLE `stay_stayexplore` DISABLE KEYS */;
INSERT INTO `stay_stayexplore` VALUES (1,'stay/Mask_Group_332x.webp','<h1><strong style=\"color: rgb(255, 255, 255);\">Test</strong></h1>','test',1);
/*!40000 ALTER TABLE `stay_stayexplore` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stay_staygallery`
--

DROP TABLE IF EXISTS `stay_staygallery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stay_staygallery` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `stay_page_create_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `stay_staygallery_stay_page_create_id_81c03470_fk_stay_stay` (`stay_page_create_id`),
  CONSTRAINT `stay_staygallery_stay_page_create_id_81c03470_fk_stay_stay` FOREIGN KEY (`stay_page_create_id`) REFERENCES `stay_staypagecreate` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stay_staygallery`
--

LOCK TABLES `stay_staygallery` WRITE;
/*!40000 ALTER TABLE `stay_staygallery` DISABLE KEYS */;
INSERT INTO `stay_staygallery` VALUES (1,'stay/Mask_Group_35.webp',1),(2,'stay/Mask_Group_37.webp',1),(3,'stay/Mask_Group_422x.webp',1),(4,'stay/Mask_Group_382x.webp',1);
/*!40000 ALTER TABLE `stay_staygallery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stay_stayhighlights`
--

DROP TABLE IF EXISTS `stay_stayhighlights`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stay_stayhighlights` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` longtext,
  `description` longtext,
  `order` int unsigned NOT NULL,
  `stay_page_create_id` bigint NOT NULL,
  `discounted_price` varchar(50) DEFAULT NULL,
  `original_price` varchar(50) DEFAULT NULL,
  `rating` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `stay_stayhighlights_stay_page_create_id_8fa8415a_fk_stay_stay` (`stay_page_create_id`),
  CONSTRAINT `stay_stayhighlights_stay_page_create_id_8fa8415a_fk_stay_stay` FOREIGN KEY (`stay_page_create_id`) REFERENCES `stay_staypagecreate` (`id`),
  CONSTRAINT `stay_stayhighlights_chk_1` CHECK ((`order` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stay_stayhighlights`
--

LOCK TABLES `stay_stayhighlights` WRITE;
/*!40000 ALTER TABLE `stay_stayhighlights` DISABLE KEYS */;
INSERT INTO `stay_stayhighlights` VALUES (1,'stay/Mask_Group_52x.webp','<h1><strong>Test</strong></h1>','<p>Test</p>',1,1,'1000','2000','4');
/*!40000 ALTER TABLE `stay_stayhighlights` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stay_staypagecreate`
--

DROP TABLE IF EXISTS `stay_staypagecreate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stay_staypagecreate` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `link` (`link`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stay_staypagecreate`
--

LOCK TABLES `stay_staypagecreate` WRITE;
/*!40000 ALTER TABLE `stay_staypagecreate` DISABLE KEYS */;
INSERT INTO `stay_staypagecreate` VALUES (1,'Deluxe Double Bedroom','delux-double-bedroom'),(2,'Super Deluxe Room','super-deluxe-room'),(3,'Standard Double Room','standard-double-room');
/*!40000 ALTER TABLE `stay_staypagecreate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stay_stayroomslistings`
--

DROP TABLE IF EXISTS `stay_stayroomslistings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stay_stayroomslistings` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `description` longtext,
  `link` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `link` (`link`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stay_stayroomslistings`
--

LOCK TABLES `stay_stayroomslistings` WRITE;
/*!40000 ALTER TABLE `stay_stayroomslistings` DISABLE KEYS */;
INSERT INTO `stay_stayroomslistings` VALUES (1,'stay/Mask_Group_332x_XzHcRZW.webp','<p><strong style=\"color: rgb(240, 240, 240);\">Delux Double Bedroom</strong></p>','<p><strong style=\"color: rgb(255, 255, 255);\">Delux Double Bedroom</strong></p>','delux-double-bedroom'),(2,'stay/Mask_Group_41.webp','<p><strong style=\"color: rgb(240, 240, 240);\">Super Deluxe Room</strong></p>','<p><strong style=\"color: rgb(240, 240, 240);\">Super Deluxe Room</strong></p>','super-delux-bedroom'),(3,'stay/Mask_Group_37_8ke1wy2.webp','<p><strong style=\"color: rgb(240, 240, 240);\">Standard Double Bedroom</strong></p>','<p><strong style=\"color: rgb(240, 240, 240);\">Standard Double Bedroom</strong></p>','standard-double-bedroom');
/*!40000 ALTER TABLE `stay_stayroomslistings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stay_stayroomstitle`
--

DROP TABLE IF EXISTS `stay_stayroomstitle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stay_stayroomstitle` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  `description` longtext,
  `link` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `link` (`link`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stay_stayroomstitle`
--

LOCK TABLES `stay_stayroomstitle` WRITE;
/*!40000 ALTER TABLE `stay_stayroomstitle` DISABLE KEYS */;
INSERT INTO `stay_stayroomstitle` VALUES (1,'<h2><strong style=\"color: rgb(240, 240, 240);\">Test</strong></h2>','<p><span style=\"color: rgb(240, 240, 240);\">Test</span></p>','test');
/*!40000 ALTER TABLE `stay_stayroomstitle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `terms_and_privacy_privacy`
--

DROP TABLE IF EXISTS `terms_and_privacy_privacy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `terms_and_privacy_privacy` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `terms_and_privacy_privacy`
--

LOCK TABLES `terms_and_privacy_privacy` WRITE;
/*!40000 ALTER TABLE `terms_and_privacy_privacy` DISABLE KEYS */;
INSERT INTO `terms_and_privacy_privacy` VALUES (1,'<p><strong>Why do we use it?</strong></p><p><br></p><p class=\"ql-align-justify\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p class=\"ql-align-justify\"><br></p><p><strong>Why do we use it?</strong></p><p><br></p><p class=\"ql-align-justify\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>');
/*!40000 ALTER TABLE `terms_and_privacy_privacy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `terms_and_privacy_terms`
--

DROP TABLE IF EXISTS `terms_and_privacy_terms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `terms_and_privacy_terms` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `terms_and_privacy_terms`
--

LOCK TABLES `terms_and_privacy_terms` WRITE;
/*!40000 ALTER TABLE `terms_and_privacy_terms` DISABLE KEYS */;
INSERT INTO `terms_and_privacy_terms` VALUES (1,'<p><strong>Why do we use it?</strong></p><p><br></p><p class=\"ql-align-justify\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p class=\"ql-align-justify\"><br></p><p><strong>Why do we use it?</strong></p><p><br></p><p class=\"ql-align-justify\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>');
/*!40000 ALTER TABLE `terms_and_privacy_terms` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-22 22:34:25
