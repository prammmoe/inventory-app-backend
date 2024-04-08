-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 08 Apr 2024 pada 21.56
-- Versi server: 8.0.36-0ubuntu0.22.04.1
-- Versi PHP: 8.1.2-1ubuntu2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inventorydb`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `category`
--

CREATE TABLE `category` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Produk Kecantikan'),
(2, 'Produk Rumah Tangga'),
(3, 'Makanan Beku'),
(4, 'Pembersih Porselen');

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `id_category` int NOT NULL,
  `quantity` int NOT NULL,
  `date_added` timestamp NULL DEFAULT NULL,
  `date_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `image`, `id_category`, `quantity`, `date_added`, `date_update`) VALUES
(1, 'Pembersih Wajah - Cerah Seketika', 'Pembersih wajah lembut yang efektif membersihkan kotoran, minyak, dan makeup. Membuat wajah tampak lebih cerah dan berseri.', 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//1146/garnier_garnier-micellar-cleansing-pembersih-wajah---pink--125-ml-_full02.jpg', 1, 100, '2024-03-29 21:30:52', '2024-04-08 14:38:39'),
(2, 'Toner Penyeimbang Kulit', 'Toner yang menyegarkan dan menyeimbangkan pH kulit. Mempersiapkan kulit untuk produk selanjutnya agar lebih mudah menyerap.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJqCgZKhNqp8_nJeY-XTzfrrZToi_3RbDXHfBUXcODQ&s', 1, 80, '2024-03-29 21:30:52', '2024-04-08 14:39:19'),
(3, 'Pelembab Wajah Bergizi', 'Pelembab wajah ringan yang mudah menyerap. Mengandung bahan-bahan alami yang menutrisi dan menjaga kelembutan kulit.', 'https://down-id.img.susercontent.com/file/sg-11134201-22100-l5yvjdy11riv95', 1, 50, '2024-03-29 21:30:52', '2024-04-08 14:40:04'),
(4, 'Serum Anti-Aging Intensif', 'Serum wajah yang diformulasikan untuk mengurangi garis halus dan keriput. Mengandung bahan-bahan yang efektif meningkatkan produksi kolagen dan elastin.', 'https://o-cdn-cas.sirclocdn.com/parenting/images/YOU_Golden_Age_Refining_Serum.width-800.format-webp.webp', 1, 30, '2024-03-29 21:30:52', '2024-04-08 14:53:42'),
(5, 'Sunscreen Wajah SPF 30', 'Sunscreen dengan SPF 30 yang melindungi kulit dari sinar UV matahari yang berbahaya.  Mencegah penuaan dini dan kanker kulit.', 'https://www.gogobli.com/produk/hanasui/845217_hanasui_collagen_water_30spf.jpg', 1, 70, '2024-03-29 21:30:52', '2024-04-08 14:54:15'),
(6, 'Sabun Mandi Lavender Menenangkan', 'Sabun mandi yang menyegarkan dengan aroma lavender yang menenangkan. Membersihkan dan melembutkan kulit.', 'https://cdn.idntimes.com/content-images/community/2022/11/w-lavender-scented-gel-bw-1000ml-10285-5f33a6106b7b2abdfec00ff311918826-f8a9fbdd7adf4343aac222f43804627f.jpg', 2, 120, '2024-03-29 21:30:52', '2024-04-08 14:54:33'),
(7, 'Lotion Tubuh Melembabkan Intensif', 'Lotion yang kaya akan vitamin E dan shea butter. Melembabkan dan menghaluskan kulit secara intensif.', 'https://images.tokopedia.net/img/JFrBQq/2022/4/19/b0ad2a8e-dc0c-4047-bde0-66ee0cc3ea47.jpg', 2, 90, '2024-03-29 21:30:52', '2024-04-08 14:54:50'),
(8, 'Scrub Badan dengan Butiran Halus', 'Scrub badan dengan butiran scrub yang halus untuk mengangkat sel kulit mati. Membuat kulit lebih halus dan cerah.', 'https://img.myshopline.com/image/store/2000774805/1648608707106/2c3bd5c840e469e44760ccedce2ce3c9.jpg?w=800&h=800', 2, 60, '2024-03-29 21:30:52', '2024-04-08 14:55:08'),
(9, 'Minyak Esensial Lavender untuk Relaksasi', 'Minyak esensial lavender dengan aroma yang menenangkan. Digunakan untuk aromaterapi dan membantu tidur lebih nyenyak.', 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now07561/y/30.jpg', 3, 40, '2024-03-29 21:30:52', '2024-04-08 14:55:27'),
(10, 'Lipstik Matte Warna Merah Bold', 'Lipstik matte dengan warna merah yang bold dan tahan lama. Memberi warna dan mempercantik bibir sepanjang hari.', 'https://asset-a.grid.id/crop/0x0:0x0/700x0/photo/2019/04/18/4057284943.jpg', 3, 110, '2024-03-29 21:30:52', '2024-04-08 14:55:45');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(55) NOT NULL,
  `password` varchar(55) NOT NULL,
  `email` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`) VALUES
(1, 'admin', 'admin12345', 'admin@gmail.com'),
(2, 'user', 'user12345', 'user@gmail.com'),
(3, 'user2', 'user12345user2', 'user2@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `category`
--
ALTER TABLE `category`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
