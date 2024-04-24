-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 15, 2024 at 07:43 PM
-- Server version: 8.2.0
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ftth_network`
--

-- --------------------------------------------------------

--
-- Table structure for table `dirop`
--

DROP TABLE IF EXISTS `dirop`;
CREATE TABLE IF NOT EXISTS `dirop` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(20) DEFAULT NULL,
  `adress` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `dirop`
--

INSERT INTO `dirop` (`id`, `nom`, `adress`) VALUES
(1, 'Alger_Center', 'Complexe Aissat Idir Place 01 Mail Alger'),
(2, 'Alger_Ouest', 'Route Brahim Hadjress Beni Messous');

-- --------------------------------------------------------

--
-- Table structure for table `fat`
--

DROP TABLE IF EXISTS `fat`;
CREATE TABLE IF NOT EXISTS `fat` (
  `id` varchar(12) NOT NULL,
  `Latitudes` decimal(9,6) DEFAULT NULL,
  `Longitudes` decimal(9,6) DEFAULT NULL,
  `online_ports` int DEFAULT NULL,
  `free_ports` int DEFAULT NULL,
  `split_ratio` varchar(8) DEFAULT NULL,
  `id_fdt` varchar(20) DEFAULT NULL,
  `type` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_fdt` (`id_fdt`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `fat`
--

INSERT INTO `fat` (`id`, `Latitudes`, `Longitudes`, `online_ports`, `free_ports`, `split_ratio`, `id_fdt`, `type`) VALUES
('SO1600100000', 36.730913, 2.937016, 8, 0, '1:8', 'SO1600100', 'indoor'),
('SO1600100001', 36.730829, 2.936872, 16, 0, '1:16', 'SO1600100', 'indoor'),
('SO1600100002', 36.730689, 2.936793, 8, 0, '1:8', 'SO1600100', 'indoor'),
('SO1600100003', 36.730701, 2.937309, 8, 0, '1:8', 'SO1600100', 'indoor'),
('SO1600100004', 36.730518, 2.937179, 8, 0, '1:8', 'SO1600100', 'indoor'),
('SO1600100005', 36.730422, 2.937098, 8, 0, '1:8', 'SO1600100', 'indoor'),
('SO1600100006', 36.730622, 2.937257, 8, 0, '1:8', 'SO1600100', 'indoor'),
('SO1600100007', 36.730587, 2.936740, 8, 0, '1:8', 'SO1600100', 'indoor'),
('SO1600101000', 36.731307, 2.937758, 8, 0, '1:8', 'SO1600101', 'indoor'),
('SO1600101001', 36.731198, 2.937684, 8, 0, '1:8', 'SO1600101', 'indoor'),
('SO1600101002', 36.731109, 2.937608, 8, 0, '1:8', 'SO1600101', 'indoor'),
('SO1600101003', 36.730994, 2.937541, 8, 0, '1:8', 'SO1600101', 'indoor'),
('SO1600101004', 36.731468, 2.937439, 8, 0, '1:8', 'SO1600101', 'indoor'),
('SO1600101005', 36.731348, 2.937389, 8, 0, '1:8', 'SO1600101', 'indoor'),
('SO1600101006', 36.731282, 2.937250, 16, 0, '1:16', 'SO1600101', 'indoor'),
('SO1600101007', 36.731177, 2.937178, 8, 0, '1:8', 'SO1600101', 'indoor'),
('SO1600102000', 36.731042, 2.936582, 8, 0, '1:8', 'SO1600102', 'indoor'),
('SO1600102001', 36.730932, 2.936493, 8, 0, '1:8', 'SO1600102', 'indoor'),
('SO1600102002', 36.730848, 2.936400, 8, 0, '1:8', 'SO1600102', 'indoor'),
('SO1600102003', 36.730297, 2.936676, 8, 0, '1:8', 'SO1600102', 'indoor'),
('SO1600102004', 36.730194, 2.936832, 8, 0, '1:8', 'SO1600102', 'indoor'),
('SO1600102005', 36.730160, 2.936941, 8, 0, '1:8', 'SO1600102', 'indoor'),
('SO1600102006', 36.730092, 2.937066, 16, 0, '1:16', 'SO1600102', 'indoor'),
('SO1600102007', 36.730771, 2.936376, 8, 0, '1:8', 'SO1600102', 'indoor');

-- --------------------------------------------------------

--
-- Table structure for table `fdt`
--

DROP TABLE IF EXISTS `fdt`;
CREATE TABLE IF NOT EXISTS `fdt` (
  `id` varchar(9) NOT NULL,
  `Latitudes` decimal(9,6) DEFAULT NULL,
  `Longitudes` decimal(9,6) DEFAULT NULL,
  `online_ports` int DEFAULT NULL,
  `free_ports` int DEFAULT NULL,
  `split_ratio` varchar(8) DEFAULT NULL,
  `id_olt` varchar(20) DEFAULT NULL,
  `type` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_olt` (`id_olt`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `fdt`
--

INSERT INTO `fdt` (`id`, `Latitudes`, `Longitudes`, `online_ports`, `free_ports`, `split_ratio`, `id_olt`, `type`) VALUES
('SO1600100', 36.730804, 2.936920, 8, 0, '1:8', 'O16001', 'indoor'),
('SO1600101', 36.731328, 2.937314, 8, 0, '1:8', 'O16001', 'indoor'),
('SO1600102', 36.730600, 2.936313, 8, 0, '1:8', 'O16001', 'outdoor');

-- --------------------------------------------------------

--
-- Table structure for table `olt`
--

DROP TABLE IF EXISTS `olt`;
CREATE TABLE IF NOT EXISTS `olt` (
  `id` varchar(5) NOT NULL,
  `Latitudes` decimal(9,6) DEFAULT NULL,
  `Longitudes` decimal(9,6) DEFAULT NULL,
  `online_ports` int DEFAULT NULL,
  `free_ports` int DEFAULT NULL,
  `id_site` varchar(20) DEFAULT NULL,
  `type` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_site` (`id_site`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `olt`
--

INSERT INTO `olt` (`id`, `Latitudes`, `Longitudes`, `online_ports`, `free_ports`, `id_site`, `type`) VALUES
('O1600', 36.730902, 2.936956, 2, 254, 'S16001', 'indoor');

-- --------------------------------------------------------

--
-- Table structure for table `site`
--

DROP TABLE IF EXISTS `site`;
CREATE TABLE IF NOT EXISTS `site` (
  `id` varchar(6) NOT NULL,
  `nom` varchar(100) DEFAULT NULL,
  `id_do` int DEFAULT NULL,
  `Latitudes` decimal(9,6) DEFAULT NULL,
  `Longitudes` decimal(9,6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_do` (`id_do`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `site`
--

INSERT INTO `site` (`id`, `nom`, `id_do`, `Latitudes`, `Longitudes`) VALUES
('1', 'Center Ville Oulad Fayet', 2, 36.735602, 2.950854),
('2', 'Semroni Oulad Fayet', 2, 36.730648, 2.938005),
('3', 'Cités Vertes Oulad Fayet', 2, 36.713204, 2.952467);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usernames` varchar(30) DEFAULT NULL,
  `passwords` varchar(32) DEFAULT NULL,
  `clearence` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `usernames`, `passwords`, `clearence`) VALUES
(1, 'nomprénomRes', '96164f6fecc327070c2d071ceba0e7f8', 0),
(2, 'nomprénomAgent', '72ad3f63c1fa519261eb6988a6a28aae', 1);
(3, 'younesBa', '12345', 2);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
