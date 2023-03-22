-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 22, 2023 at 03:27 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discription` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `discription`, `image`, `created_at`, `updated_at`) VALUES
(1, 'អាហារបែបខ្មែរ', 'អាហារបែបខ្មែរ', 'http://127.0.0.1:8000/images/1677394561.jpeg', '2023-02-24 10:27:53', '2023-02-25 23:56:03'),
(3, 'គ្រឿងក្លែម', 'គ្រឿងខ្លែម សម្រាបផឹក', 'http://127.0.0.1:8000/images/1677260030.jpeg', '2023-02-24 10:33:53', '2023-02-25 23:37:53'),
(4, 'ភេជ្ជះសម្រាប់ផឹក', 'របស់សម្រាប់ផឹក', 'http://127.0.0.1:8000/images/1677390722.jpeg', '2023-02-24 10:36:14', '2023-02-25 22:52:04'),
(5, 'បង្អែម', 'បង្អែម', 'http://127.0.0.1:8000/images/1677260293.jpeg', '2023-02-24 10:38:15', '2023-02-24 10:38:15'),
(6, 'គ្រឿងសមុទ្យ', 'គ្រឿងសមុទ្យ', 'http://127.0.0.1:8000/images/1677260372.jpeg', '2023-02-24 10:39:35', '2023-02-24 10:39:35'),
(7, 'អាហារបែបថៃ', 'អាហារបែបថៃ', 'http://127.0.0.1:8000/images/1677260483.jpeg', '2023-02-24 10:41:25', '2023-02-24 10:41:25'),
(8, 'អាហារស្រុកស្រែ', 'អាហារស្រុកស្រែ', 'http://127.0.0.1:8000/images/1677260678.jpg', '2023-02-24 10:44:39', '2023-02-24 10:44:39'),
(9, 'អាហារបែបជប៉ុន', 'អាហារបែបជប៉ុន', 'http://127.0.0.1:8000/images/1677390601.jpg', '2023-02-25 22:50:03', '2023-02-25 22:50:03');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_02_22_111044_create_categories_table', 1),
(6, '2023_02_22_111141_create_products_table', 1),
(7, '2023_02_22_111211_create_seats_table', 1),
(8, '2023_02_22_111240_create_orders_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `phone_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `seat_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product` json DEFAULT NULL,
  `total` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `phone_number`, `seat_number`, `product`, `total`, `status`, `created_at`, `updated_at`) VALUES
(1, '0969349026', '2', '[{\"id\": 6, \"qty\": 1, \"name\": \"ខ្យងស្ងោរ\", \"image\": \"http://127.0.0.1:8000/images/1677300716.jpeg\", \"price\": \"7\", \"category\": {\"id\": 8, \"name\": \"អាហារស្រុកស្រែ\", \"image\": \"http://127.0.0.1:8000/images/1677260678.jpg\", \"created_at\": \"2023-02-24T17:44:39.000000Z\", \"updated_at\": \"2023-02-24T17:44:39.000000Z\", \"discription\": \"អាហារស្រុកស្រែ\"}, \"created_at\": \"2023-02-25T04:51:57.000000Z\", \"updated_at\": \"2023-02-25T04:51:57.000000Z\", \"category_id\": 8, \"discription\": \"ខ្យងស្ងោរ\"}, {\"id\": 4, \"qty\": 1, \"name\": \"សម្លប្រហើរ\", \"image\": \"http://127.0.0.1:8000/images/1677300462.jpeg\", \"price\": \"4\", \"category\": {\"id\": 8, \"name\": \"អាហារស្រុកស្រែ\", \"image\": \"http://127.0.0.1:8000/images/1677260678.jpg\", \"created_at\": \"2023-02-24T17:44:39.000000Z\", \"updated_at\": \"2023-02-24T17:44:39.000000Z\", \"discription\": \"អាហារស្រុកស្រែ\"}, \"created_at\": \"2023-02-25T04:47:44.000000Z\", \"updated_at\": \"2023-02-25T04:47:44.000000Z\", \"category_id\": 8, \"discription\": \"សម្លប្រហើរ\"}]', '11', 'confirm', '2023-02-24 21:53:41', '2023-02-24 21:54:33'),
(2, '096934926', '1', '[{\"id\": 1, \"qty\": 1, \"name\": \"ប្រហុកខ្ទិះ\", \"image\": \"http://127.0.0.1:8000/images/1677300162.jpg\", \"price\": \"2\", \"category\": {\"id\": 8, \"name\": \"អាហារស្រុកស្រែ\", \"image\": \"http://127.0.0.1:8000/images/1677260678.jpg\", \"created_at\": \"2023-02-24T17:44:39.000000Z\", \"updated_at\": \"2023-02-24T17:44:39.000000Z\", \"discription\": \"អាហារស្រុកស្រែ\"}, \"created_at\": \"2023-02-25T04:42:44.000000Z\", \"updated_at\": \"2023-02-25T04:42:44.000000Z\", \"category_id\": 8, \"discription\": \"ប្រហុកខ្ទិះ\"}]', '2', 'confirm', '2023-02-25 22:53:00', '2023-02-25 22:53:40');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(8, 'App\\Models\\User', 4, 'API token ofSochea Chy', '50a91670845f33bac0cb455ece77f34b5236b0cf80dc452d1860d1514c73e49c', '[\"*\"]', '2023-03-19 07:08:45', NULL, '2023-03-12 08:02:41', '2023-03-19 07:08:45');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discription` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `discription`, `image`, `price`, `category_id`, `created_at`, `updated_at`) VALUES
(1, 'ប្រហុកខ្ទិះ', 'ប្រហុកខ្ទិះ', 'http://127.0.0.1:8000/images/1677300162.jpg', '2', 8, '2023-02-24 21:42:44', '2023-02-24 21:42:44'),
(2, 'ទឹកគ្រឿង', 'ទឹកគ្រឿង', 'http://127.0.0.1:8000/images/1677300272.jpg', '3', 8, '2023-02-24 21:44:35', '2023-02-24 21:46:31'),
(3, 'សម្លកកូរ', 'សម្លកកូរ', 'http://127.0.0.1:8000/images/1677300348.jpeg', '2', 8, '2023-02-24 21:45:49', '2023-02-24 21:45:49'),
(4, 'សម្លប្រហើរ', 'សម្លប្រហើរ', 'http://127.0.0.1:8000/images/1677300462.jpeg', '4', 8, '2023-02-24 21:47:44', '2023-02-24 21:47:44'),
(5, 'ខ្យងអាំង', 'ខ្យងអាំង', 'http://127.0.0.1:8000/images/1677300623.jpg', '5', 8, '2023-02-24 21:50:24', '2023-02-24 21:50:24'),
(6, 'ខ្យងស្ងោរ', 'ខ្យងស្ងោរ', 'http://127.0.0.1:8000/images/1677300716.jpeg', '7', 8, '2023-02-24 21:51:57', '2023-02-24 21:51:57'),
(7, 'បុកល្ហុងបែបថៃ', 'បុកល្ហុងបែបថៃ', 'http://127.0.0.1:8000/images/1677394253.jpg', '5', 7, '2023-02-24 22:32:31', '2023-02-25 23:50:55'),
(8, 'ត្រីដៀបចៀនបែបថៃ', 'ត្រីដៀបចៀនបែបថៃ', 'http://127.0.0.1:8000/images/1677394425.jpg', '3', 7, '2023-02-24 22:34:33', '2023-02-25 23:53:49'),
(9, 'គ្រឿងសមុទ្រក្រឡុក', 'គ្រឿងសមុទ្រក្រឡុកបែបថៃ', 'http://127.0.0.1:8000/images/1677303399.jpg', '10', 6, '2023-02-24 22:36:40', '2023-02-24 22:36:40'),
(10, 'ងាវ', 'ងាវ', 'http://127.0.0.1:8000/images/1677303535.jpg', '12', 6, '2023-02-24 22:38:56', '2023-02-25 22:45:56'),
(11, 'បបរ​មាន់', 'បបរ​មាន់', 'http://127.0.0.1:8000/images/1677391492.jpeg', '3', 1, '2023-02-25 23:04:55', '2023-02-25 23:04:55'),
(12, 'បបរ​បង្គា', 'បបរ​បង្គា', 'http://127.0.0.1:8000/images/1677391606.jpeg', '3', 1, '2023-02-25 23:07:05', '2023-02-25 23:07:05'),
(13, 'បបរ​ពង​ទា​ខ្មៅ', 'បបរ​ពង​ទា​ខ្មៅ', 'http://127.0.0.1:8000/images/1677391752.jpeg', '3', 1, '2023-02-25 23:09:15', '2023-02-25 23:09:15'),
(14, 'បបរ​ខ​កង្កែប', 'បបរ​ខ​កង្កែប', 'http://127.0.0.1:8000/images/1677391847.JPEG', '4', 1, '2023-02-25 23:10:51', '2023-02-25 23:10:51'),
(15, 'មុខ​ម្ហូប​បន្ថែម', 'មុខ​ម្ហូប​បន្ថែម', 'http://127.0.0.1:8000/images/1677391958.JPEG', '5', 1, '2023-02-25 23:12:40', '2023-02-25 23:12:40'),
(16, 'ស្រាបៀរ Anchor', 'ស្រាបៀរ Anchor', 'http://127.0.0.1:8000/images/1677392389.jpg', '5', 4, '2023-02-25 23:18:40', '2023-02-25 23:19:52'),
(17, 'ស្រាបៀរ ABC', 'ស្រាបៀរ ABC', 'http://127.0.0.1:8000/images/1677392568.png', '10', 4, '2023-02-25 23:22:50', '2023-02-25 23:22:50'),
(18, 'បង្អែមគ្រាប់គុជ (បង្អែមកូនត្រី)', 'បង្អែមគ្រាប់គុជ (បង្អែមកូនត្រី)', 'http://127.0.0.1:8000/images/1677392838.jpg', '1', 5, '2023-02-25 23:27:21', '2023-02-25 23:27:21'),
(19, 'នំផ្លែអាយ', 'នំផ្លែអាយ', 'http://127.0.0.1:8000/images/1677393281.jpg', '1', 5, '2023-02-25 23:34:45', '2023-02-25 23:34:45'),
(20, 'ឆៃពៅ​ក្រឡុក​ពងទា​ប្រៃ', 'ឆៃពៅ​ក្រឡុក​ពងទា​ប្រៃ', 'http://127.0.0.1:8000/images/1677393430.jpeg', '4', 3, '2023-02-25 23:37:13', '2023-02-25 23:37:13'),
(21, 'អណ្ដាត​ទា​បំពង', 'អណ្ដាត​ទា​បំពង', 'http://127.0.0.1:8000/images/1677393831.jpg', '3', 3, '2023-02-25 23:43:53', '2023-02-25 23:43:53'),
(22, 'ស៊ូសុី', 'ស៊ូសុី', 'http://127.0.0.1:8000/images/1677394012.jpeg', '10', 9, '2023-02-25 23:46:55', '2023-02-25 23:46:55'),
(23, 'ត្រីសាលម៉ុន', 'ត្រីសាលម៉ុន', 'http://127.0.0.1:8000/images/1677394069.jpg', '14', 9, '2023-02-25 23:47:51', '2023-02-25 23:47:51');

-- --------------------------------------------------------

--
-- Table structure for table `seats`
--

CREATE TABLE `seats` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discription` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `seat_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `seats`
--

INSERT INTO `seats` (`id`, `name`, `discription`, `seat_number`, `created_at`, `updated_at`) VALUES
(1, 'Seat 1', 'Seat 1', '1', '2023-02-24 21:35:05', '2023-02-24 21:35:05'),
(2, 'seat 2', 'seat 2', '2', '2023-02-24 21:35:18', '2023-02-24 21:35:18'),
(3, 'seat 3', 'seat 3', '3', '2023-02-24 21:35:34', '2023-02-24 21:35:34'),
(4, 'seat 4', 'seat 4', '4', '2023-02-24 21:35:55', '2023-02-24 21:35:55');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `image`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@gmail.com', NULL, '$2y$10$t5DPeOAFFGL2UZm9gshkFeBxQhMoSDDr4nRppGMWbX/6lBm8iJ9AG', 'https://t3.ftcdn.net/jpg/00/07/32/48/360_F_7324855_mx4CEBWTr81XLOrlQccCROtP2uNR7xbk.jpg', NULL, '2023-02-24 10:23:23', '2023-02-24 10:23:23'),
(2, 'Vanna', 'vanna@gmail.com', NULL, '$2y$10$P9ZdzsDzC4WQKgWAsoYbCuhFNvsBBaOpvPAQPRB2okJ0w2DqYa0O6', 'http://127.0.0.1:8000/images/1677390031.JPG', NULL, '2023-02-25 22:40:34', '2023-02-25 22:40:34'),
(3, 'Suon Ravy', 'ravy@gmail.com', NULL, '$2y$10$icq7NCiuUea7gm6KqBYLjujn4aU5IrHQKlFiQbomKvGHkZPYbOabK', 'http://127.0.0.1:8000/images/1677394745.jpg', NULL, '2023-02-25 23:59:09', '2023-02-25 23:59:09'),
(4, 'Sochea Chy', 'sochea.chy@gmail.com', NULL, '$2y$10$20HSR3XJIR1T3FA15SSYd.zSyaIrK.eTACu1RpCcQsv3YutGzAuX6', 'http://127.0.0.1:8000/images/1678633211.jpg', NULL, '2023-03-12 08:00:12', '2023-03-12 08:00:12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seats`
--
ALTER TABLE `seats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `seats`
--
ALTER TABLE `seats`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
