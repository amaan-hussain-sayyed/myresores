-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 26, 2022 at 01:13 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e-com`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `pid` int(11) NOT NULL,
  `description` varchar(244) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL,
  `isDeleted` tinyint(1) NOT NULL,
  `createdBy` int(11) NOT NULL,
  `updatedBy` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `pid`, `description`, `isActive`, `isDeleted`, `createdBy`, `updatedBy`, `createdAt`, `updatedAt`) VALUES
(3, 'man', 0, 'this category prefered by man mostly', 0, 0, 0, 4, '2022-12-16 14:11:48', '2022-12-22 17:16:30'),
(4, 'women', 0, 'this category prefered by women mostly', 0, 0, 0, 4, '2022-12-16 14:13:12', '2022-12-22 15:05:06'),
(5, 'shirt', 3, 'it is for mans', 0, 0, 0, 0, '2022-12-16 14:17:35', '2022-12-19 10:32:24'),
(6, 'kid', 0, 'the kid lo that fun', 0, 0, 0, 5, '2022-12-19 09:57:19', '2022-12-26 11:49:04'),
(7, 'unisex', 0, 'this produnt is for all gender', 0, 0, 3, 3, '2022-12-20 12:31:08', '2022-12-20 12:31:08');

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` int(11) NOT NULL,
  `permission` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `permission`, `createdAt`, `updatedAt`) VALUES
(1, 'add_categorey', '2022-12-22 05:46:30', '2022-12-15 05:46:30'),
(2, 'updated_category', '2022-12-16 04:13:04', '2022-12-16 04:13:04'),
(3, 'view_category\r\n', '2022-12-16 04:28:48', '2022-12-16 04:28:48'),
(4, 'user', '2022-12-21 04:43:40', '2022-12-21 04:43:40');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(300) NOT NULL,
  `password` varchar(300) NOT NULL,
  `name` varchar(300) NOT NULL,
  `info` varchar(300) DEFAULT NULL,
  `mobileNo` int(14) NOT NULL,
  `token` varchar(300) DEFAULT NULL,
  `otp` varchar(6) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `isActive` tinyint(1) NOT NULL,
  `isDeleted` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name`, `info`, `mobileNo`, `token`, `otp`, `createdAt`, `updatedAt`, `isActive`, `isDeleted`) VALUES
(1, 'shayyedamaanhussain', '$2b$10$SBB/wzletewMDLRoZ.NBH.T.TvGPpbWl6xoDfkGQAjk.g8QCRDBpu', 'sayedamaanhussain', NULL, 0, NULL, NULL, '2022-12-15 12:57:44', '2022-12-15 12:57:44', 0, 0),
(2, 'shavazmirzahussain', '$2b$10$aa4pbUE/p.OIy0Mm869X3Osyin18aBx2cCEuqFYTDq7eyUwZwDRSy', 'shavazhussain', NULL, 0, NULL, NULL, '2022-12-15 13:01:46', '2022-12-16 09:45:18', 0, 0),
(3, 'amaanhussain@gmail.com', '$2b$10$dpakpvvsvW3HdiIE1gRcmueT0EFvf0UuHnJOE2/f2Axd7A4mCAH3q', 'sayyedamaanhussain', 'hello world', 0, NULL, NULL, '2022-12-16 11:29:34', '2022-12-22 07:36:01', 0, 0),
(4, 'shavezhussain79a@gmail.com', '$2b$10$IR1nfJX5.Y7vCr4WVQ3cG.u08Y7SyPHYnjU6up/IBq1D7B3.V8J/K', 'shavez mirza', 'hii there ', 0, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjcyMDU1MjkwfQ.4xnEdz2v9g_gXc3HtR_HyVCPuLjJd1viNVlASO0P6Sw', 'XjLfZw', '2022-12-22 07:54:50', '2022-12-26 11:48:10', 0, 0),
(5, 'hussainsayyedamsdnf', '$2b$10$7qopbSLesALEnmmNbrWwe.I3cbVucPpGUp04L4YeVdPEHGoc.BPZ6', 'shavez mirza', 'hii there', 0, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjcxNzI3MjcxfQ.fsqZluV4vgw09R3h7TYXgRk5HEU4R9aWn9URFraJNQE', NULL, '2022-12-22 16:40:24', '2022-12-22 16:41:11', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_permissions`
--

CREATE TABLE `user_permissions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_permissions`
--

INSERT INTO `user_permissions` (`id`, `user_id`, `permission_id`, `createdAt`, `updatedAt`) VALUES
(1, 3, 1, '2022-12-15 05:56:14', '2022-12-15 05:56:14'),
(2, 3, 2, '2022-12-16 04:29:41', '2022-12-16 04:29:41'),
(3, 3, 3, '2022-12-16 04:30:18', '2022-12-16 04:30:18'),
(4, 3, 4, '2022-12-21 04:44:19', '2022-12-21 04:44:19'),
(5, 4, 4, '2022-12-22 04:53:35', '2022-12-22 04:53:35'),
(6, 4, 1, '2022-12-22 06:59:37', '2022-12-22 06:59:37'),
(7, 4, 2, '2022-12-22 07:00:04', '2022-12-22 07:00:04'),
(8, 4, 3, '2022-12-22 07:00:27', '2022-12-22 07:00:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permission` (`permission`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_permissions`
--
ALTER TABLE `user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`,`permission_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user_permissions`
--
ALTER TABLE `user_permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
