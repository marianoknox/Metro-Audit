-- phpMyAdmin SQL Dump

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `nodejs`
--

-- --------------------------------------------------------

--
-- Stable structure `stations`
--

CREATE TABLE IF NOT EXISTS `tbStation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `line` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `station` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
)

--
-- Stable structure `survey`
--

CREATE TABLE IF NOT EXISTS `tbSurvey` (
  `surveyNo` int(11) NOT NULL AUTO_INCREMENT,
  `surveyDate` DATETIME NOT NULL,
  `line` varchar(255) NOT NULL,
  `station` varchar(255) NOT NULL,
  `section` varchar(255) NOT NULL,
  `userNo` varchar(255) NOT NULL,
  `userName` varchar(255) NOT NULL,
  PRIMARY KEY (`surveyNo`)
)


--
-- Stable structure `survey details`
--

CREATE TABLE IF NOT EXISTS `tbSurveyDetails` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `questionNo` varchar(255) NOT NULL,
  `line` varchar(255) NOT NULL,
  `grade` varchar(255) NOT NULL,
  `remarks` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
)

--
-- Stable structure `user`
--

CREATE TABLE IF NOT EXISTS `tbUsers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `access` varchar(255) NOT NULL,
  `uname` varchar(255) NOT NULL,
  `upass` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
)


--
-- Dumping data `station`
--

INSERT INTO `tbStation` (`line`, `code`, `station`) VALUES
('Red', 'RSST070', 'Al Wakra'),
('Red', 'RSST060', 'Ras Bu Fontas'),
('Red', 'RSST050', 'Economic Zone'),
('Red', 'RSST040', 'Oqba Ibn Nafie'),
('Red', 'RSST030', 'Al Matar'),
('Red', 'RSST020', 'Umm Ghuwailina'),
('Red', 'RSST010', 'Al Doha Al Jadeda'),
('Red', 'RNST010', 'Al Bidda'),
('Red', 'RNST020', 'Corniche'),
('Red', 'RNST030', 'West Bay'),
('Red', 'RNST040', 'DECC'),
('Red', 'RNST050', 'Al Qassar');



/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
