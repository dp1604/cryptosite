-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 27, 2021 at 05:28 PM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tor_research`
--

-- --------------------------------------------------------

--
-- Table structure for table `RequestLogs`
--

CREATE TABLE `RequestLogs` (
  `log_id` int(64) NOT NULL,
  `REQUEST_TIME_FLOAT` varchar(256) NOT NULL,
  `HTTP_USER_AGENT` varchar(256) NOT NULL,
  `REMOTE_ADDR` varchar(512) NOT NULL,
  `continent_code` varchar(16) NOT NULL,
  `country_code` varchar(16) NOT NULL,
  `region_code` varchar(16) NOT NULL,
  `region_name` varchar(128) NOT NULL,
  `city` varchar(128) NOT NULL,
  `zip` varchar(16) NOT NULL,
  `site_id` int(8) NOT NULL,
  `page_id` int(16) NOT NULL,
  `user` varchar(128) NOT NULL,
  `password` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `RequestLogs`
--
ALTER TABLE `RequestLogs`
  ADD PRIMARY KEY (`log_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `RequestLogs`
--
ALTER TABLE `RequestLogs`
  MODIFY `log_id` int(64) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
