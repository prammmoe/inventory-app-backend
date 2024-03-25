CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(55) NOT NULL
);

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Produk Kecantikan'),
(2, 'Produk Rumah Tangga'),
(3, 'Makanan Beku'),
(4, 'Pembersih Porselen');

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(55) NOT NULL,
  `description` varchar(55) NOT NULL,
  `image` varchar(55) NOT NULL,
  `id_category` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `date_added` timestamp NULL DEFAULT NULL,
  `date_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO `products` (`id`, `name`, `description`, `image`, `id_category`, `quantity`, `date_added`, `date_update`)
VALUES
  (1, 'Pembersih Wajah - Cerah Seketika', 'Pembersih wajah lembut yang efektif membersihkan kotoran, minyak, dan makeup. Membuat wajah tampak lebih cerah dan berseri.', 'pembersih_wajah.jpg', 1, 100, NOW(), NOW()),
  (2, 'Toner Penyeimbang Kulit', 'Toner yang menyegarkan dan menyeimbangkan pH kulit. Mempersiapkan kulit untuk produk selanjutnya agar lebih mudah menyerap.', 'toner.jpg', 1, 80, NOW(), NOW()),
  (3, 'Pelembab Wajah Bergizi', 'Pelembab wajah ringan yang mudah menyerap. Mengandung bahan-bahan alami yang menutrisi dan menjaga kelembutan kulit.', 'pelembab_wajah.jpg', 1, 50, NOW(), NOW()),
  (4, 'Serum Anti-Aging Intensif', 'Serum wajah yang diformulasikan untuk mengurangi garis halus dan keriput. Mengandung bahan-bahan yang efektif meningkatkan produksi kolagen dan elastin.', 'serum_antiaging.jpg', 1, 30, NOW(), NOW()),
  (5, 'Sunscreen Wajah SPF 30', 'Sunscreen dengan SPF 30 yang melindungi kulit dari sinar UV matahari yang berbahaya.  Mencegah penuaan dini dan kanker kulit.', 'sunscreen_wajah.jpg', 1, 70, NOW(), NOW()),
  (6, 'Sabun Mandi Lavender Menenangkan', 'Sabun mandi yang menyegarkan dengan aroma lavender yang menenangkan. Membersihkan dan melembutkan kulit.', 'sabun_mandi.jpg', 2, 120, NOW(), NOW()),
  (7, 'Lotion Tubuh Melembabkan Intensif', 'Lotion yang kaya akan vitamin E dan shea butter. Melembabkan dan menghaluskan kulit secara intensif.', 'lotion_tubuh.jpg', 2, 90, NOW(), NOW()),
  (8, 'Scrub Badan dengan Butiran Halus', 'Scrub badan dengan butiran scrub yang halus untuk mengangkat sel kulit mati. Membuat kulit lebih halus dan cerah.', 'scrub_badan.jpg', 2, 60, NOW(), NOW()),
  (9, 'Minyak Esensial Lavender untuk Relaksasi', 'Minyak esensial lavender dengan aroma yang menenangkan. Digunakan untuk aromaterapi dan membantu tidur lebih nyenyak.', 'minyak_esensial.jpg', 3, 40, NOW(), NOW()),
  (10, 'Lipstik Matte Warna Merah Bold', 'Lipstik matte dengan warna merah yang bold dan tahan lama. Memberi warna dan mempercantik bibir sepanjang hari.', 'lipstik_matte.jpg', 3, 110, NOW(), NOW());


CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(55) NOT NULL,
  `password` varchar(55) NOT NULL,
  `email` varchar(55) NOT NULL
);


INSERT INTO `users` (`id`, `username`, `password`, `email`) VALUES
(1, 'admin', 'admin12345', 'admin@gmail.com'),
(2, 'user', 'user12345', 'user@gmail.com'),
(3, 'user2', 'user12345user2', 'user2@gmail.com');

ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;