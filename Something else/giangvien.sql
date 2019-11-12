-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 12, 2019 lúc 02:57 PM
-- Phiên bản máy phục vụ: 10.1.38-MariaDB
-- Phiên bản PHP: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `ql-dcct-mysql`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giangvien`
--

CREATE TABLE `giangvien` (
  `magv` varchar(20) COLLATE utf8_vietnamese_ci NOT NULL,
  `mabm` varchar(20) COLLATE utf8_vietnamese_ci NOT NULL,
  `tengv` varchar(50) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `sdt` varchar(20) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `password` varchar(100) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `role` varchar(10) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `passwordConf` varchar(100) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `giangvien`
--

INSERT INTO `giangvien` (`magv`, `mabm`, `tengv`, `sdt`, `email`, `password`, `role`, `passwordConf`) VALUES
('00245', 'BMCNTT', 'Nguyễn Bảo Ân', '9089616326', 'annb@tvu.edu.vn', '$2a$10$0g9ty8z2FUhpVmoRpbOPKejQgjjMNXITFD9immv31.HTG6CRycG06', 'user', '$2a$10$0g9ty8z2FUhpVmoRpbOPKejQgjjMNXITFD9immv31.HTG6CRycG06'),
('00248', 'BMCNTT', 'Phạm Minh Đương', '8685672686', 'duongminh@tvu.edu.vn', '$2a$10$0g9ty8z2FUhpVmoRpbOPKejQgjjMNXITFD9immv31.HTG6CRycG06', 'user', '$2a$10$0g9ty8z2FUhpVmoRpbOPKejQgjjMNXITFD9immv31.HTG6CRycG06'),
('03562', 'BMCNTT', 'Nguyễn Khắc Quốc', '9180851804', 'nkquoc@tvu.edu.vn', '$2a$10$0g9ty8z2FUhpVmoRpbOPKejQgjjMNXITFD9immv31.HTG6CRycG06', 'admin', '$2a$10$0g9ty8z2FUhpVmoRpbOPKejQgjjMNXITFD9immv31.HTG6CRycG06'),
('yV_csgao', 'BMCNTT', 'Quản trị viên', '0123456789', 'qtv@tvu.edu.vn', '$2a$10$oAnOKu.tRChcW17lR3sQw.q5vpfIMzVv165DpZFlH9CeI/sB50GEK', 'qtv', '$2a$10$oAnOKu.tRChcW17lR3sQw.q5vpfIMzVv165DpZFlH9CeI/sB50GEK');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `giangvien`
--
ALTER TABLE `giangvien`
  ADD PRIMARY KEY (`magv`),
  ADD KEY `FK_PHANCONG` (`mabm`);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `giangvien`
--
ALTER TABLE `giangvien`
  ADD CONSTRAINT `FK_PHANCONG` FOREIGN KEY (`mabm`) REFERENCES `bomon` (`mabm`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
