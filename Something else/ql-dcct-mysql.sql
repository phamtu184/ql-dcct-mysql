-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 17, 2019 lúc 08:56 AM
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
-- Cấu trúc bảng cho bảng `bachoc`
--

CREATE TABLE `bachoc` (
  `mabh` varchar(10) COLLATE utf8_vietnamese_ci NOT NULL,
  `tenbh` varchar(20) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `bachoc`
--

INSERT INTO `bachoc` (`mabh`, `tenbh`) VALUES
('bhdh', 'Đại học'),
('bqcd', 'Cao đẳng');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bomon`
--

CREATE TABLE `bomon` (
  `mabm` varchar(10) COLLATE utf8_vietnamese_ci NOT NULL,
  `makhoa` varchar(10) COLLATE utf8_vietnamese_ci NOT NULL,
  `tenbm` varchar(30) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `bomon`
--

INSERT INTO `bomon` (`mabm`, `makhoa`, `tenbm`) VALUES
('bmcntt', 'ktcn', 'Công nghệ thông tin'),
('bmxd', 'ktcn', 'Xây dựng');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `decuong`
--

CREATE TABLE `decuong` (
  `madc` int(10) NOT NULL,
  `malop` varchar(10) COLLATE utf8_vietnamese_ci NOT NULL,
  `magv` varchar(5) COLLATE utf8_vietnamese_ci NOT NULL,
  `mamh` varchar(6) COLLATE utf8_vietnamese_ci NOT NULL,
  `mahk` varchar(7) COLLATE utf8_vietnamese_ci NOT NULL,
  `linkfile` varchar(120) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `ngaytai` varchar(10) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giangvien`
--

CREATE TABLE `giangvien` (
  `magv` varchar(5) COLLATE utf8_vietnamese_ci NOT NULL,
  `mabm` varchar(10) COLLATE utf8_vietnamese_ci NOT NULL,
  `tengv` varchar(50) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `sdt` varchar(10) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `email` varchar(30) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `password` varchar(100) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `role` varchar(15) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `passwordConf` varchar(100) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `giangvien`
--

INSERT INTO `giangvien` (`magv`, `mabm`, `tengv`, `sdt`, `email`, `password`, `role`, `passwordConf`) VALUES
('00666', 'bmcntt', 'Quản trị viên', '0453156897', 'qtv@tvu.edu.vn', '$2a$10$oAnOKu.tRChcW17lR3sQw.q5vpfIMzVv165DpZFlH9CeI/sB50GEK', 'Quản trị viên', '$2a$10$oAnOKu.tRChcW17lR3sQw.q5vpfIMzVv165DpZFlH9CeI/sB50GEK');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hedaotao`
--

CREATE TABLE `hedaotao` (
  `mahdt` varchar(10) COLLATE utf8_vietnamese_ci NOT NULL,
  `tenhdt` varchar(20) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `hedaotao`
--

INSERT INTO `hedaotao` (`mahdt`, `tenhdt`) VALUES
('hdtcq', 'Chính quy');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hocki`
--

CREATE TABLE `hocki` (
  `mahk` varchar(7) COLLATE utf8_vietnamese_ci NOT NULL,
  `namhoc` varchar(4) COLLATE utf8_vietnamese_ci NOT NULL,
  `tenhk` varchar(21) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `hocki`
--

INSERT INTO `hocki` (`mahk`, `namhoc`, `tenhk`) VALUES
('hk12017', '2017', 'Học kì 1 năm học 2017'),
('hk12018', '2018', 'Học kì 1 năm học 2018'),
('hk12019', '2019', 'Học kì 1 năm học 2019'),
('hk22019', '2019', 'Học kì 2 năm học 2019');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khoa`
--

CREATE TABLE `khoa` (
  `makhoa` varchar(10) COLLATE utf8_vietnamese_ci NOT NULL,
  `tenkhoa` varchar(30) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `khoa`
--

INSERT INTO `khoa` (`makhoa`, `tenkhoa`) VALUES
('ktcn', 'Kĩ thuật và công nghệ'),
('yd', 'Y dược');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lop`
--

CREATE TABLE `lop` (
  `malop` varchar(10) COLLATE utf8_vietnamese_ci NOT NULL,
  `mahdt` varchar(10) COLLATE utf8_vietnamese_ci NOT NULL,
  `manganh` varchar(10) COLLATE utf8_vietnamese_ci NOT NULL,
  `tenlop` varchar(30) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `lop`
--

INSERT INTO `lop` (`malop`, `mahdt`, `manganh`, `tenlop`) VALUES
('DA17QTM', 'hdtcq', 'nqtm', 'Đại học quản trị mạng'),
('DA17TT', 'hdtcq', 'ncntt', 'Đại học công nghệ thông tin');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `monhoc`
--

CREATE TABLE `monhoc` (
  `mamh` varchar(6) COLLATE utf8_vietnamese_ci NOT NULL,
  `tenmh` varchar(30) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `tclythuyet` int(11) DEFAULT NULL,
  `tcthuchanh` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `monhoc`
--

INSERT INTO `monhoc` (`mamh`, `tenmh`, `tclythuyet`, `tcthuchanh`) VALUES
('220037', 'Kỹ thuật lập trình', 2, 1),
('410261', 'Thiết kế web cơ bản', 2, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `namhoc`
--

CREATE TABLE `namhoc` (
  `namhoc` varchar(4) COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `namhoc`
--

INSERT INTO `namhoc` (`namhoc`) VALUES
('2017'),
('2018'),
('2019');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nganh`
--

CREATE TABLE `nganh` (
  `manganh` varchar(10) COLLATE utf8_vietnamese_ci NOT NULL,
  `mabh` varchar(10) COLLATE utf8_vietnamese_ci NOT NULL,
  `tennganh` varchar(30) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `nganh`
--

INSERT INTO `nganh` (`manganh`, `mabh`, `tennganh`) VALUES
('ncntt', 'bhdh', 'Công nghệ thông tin'),
('nqtm', 'bhdh', 'Quản trị mạng');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `bachoc`
--
ALTER TABLE `bachoc`
  ADD PRIMARY KEY (`mabh`);

--
-- Chỉ mục cho bảng `bomon`
--
ALTER TABLE `bomon`
  ADD PRIMARY KEY (`mabm`),
  ADD KEY `FK_CO` (`makhoa`);

--
-- Chỉ mục cho bảng `decuong`
--
ALTER TABLE `decuong`
  ADD PRIMARY KEY (`madc`),
  ADD KEY `FK_BANGIAO` (`magv`),
  ADD KEY `FK_CHICO` (`mamh`),
  ADD KEY `FK_CUA` (`malop`),
  ADD KEY `FK_THUOC` (`mahk`);

--
-- Chỉ mục cho bảng `giangvien`
--
ALTER TABLE `giangvien`
  ADD PRIMARY KEY (`magv`),
  ADD KEY `FK_PHANCONG` (`mabm`);

--
-- Chỉ mục cho bảng `hedaotao`
--
ALTER TABLE `hedaotao`
  ADD PRIMARY KEY (`mahdt`);

--
-- Chỉ mục cho bảng `hocki`
--
ALTER TABLE `hocki`
  ADD PRIMARY KEY (`mahk`),
  ADD KEY `FK_TRONG` (`namhoc`);

--
-- Chỉ mục cho bảng `khoa`
--
ALTER TABLE `khoa`
  ADD PRIMARY KEY (`makhoa`);

--
-- Chỉ mục cho bảng `lop`
--
ALTER TABLE `lop`
  ADD PRIMARY KEY (`malop`),
  ADD KEY `FK_CHITHUOC` (`mahdt`),
  ADD KEY `FK_HOC` (`manganh`);

--
-- Chỉ mục cho bảng `monhoc`
--
ALTER TABLE `monhoc`
  ADD PRIMARY KEY (`mamh`);

--
-- Chỉ mục cho bảng `namhoc`
--
ALTER TABLE `namhoc`
  ADD PRIMARY KEY (`namhoc`);

--
-- Chỉ mục cho bảng `nganh`
--
ALTER TABLE `nganh`
  ADD PRIMARY KEY (`manganh`),
  ADD KEY `FK_CHO` (`mabh`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `decuong`
--
ALTER TABLE `decuong`
  MODIFY `madc` int(10) NOT NULL AUTO_INCREMENT;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `bomon`
--
ALTER TABLE `bomon`
  ADD CONSTRAINT `FK_CO` FOREIGN KEY (`makhoa`) REFERENCES `khoa` (`makhoa`);

--
-- Các ràng buộc cho bảng `decuong`
--
ALTER TABLE `decuong`
  ADD CONSTRAINT `FK_BANGIAO` FOREIGN KEY (`magv`) REFERENCES `giangvien` (`magv`),
  ADD CONSTRAINT `FK_CHICO` FOREIGN KEY (`mamh`) REFERENCES `monhoc` (`mamh`),
  ADD CONSTRAINT `FK_CUA` FOREIGN KEY (`malop`) REFERENCES `lop` (`malop`),
  ADD CONSTRAINT `FK_THUOC` FOREIGN KEY (`mahk`) REFERENCES `hocki` (`mahk`);

--
-- Các ràng buộc cho bảng `giangvien`
--
ALTER TABLE `giangvien`
  ADD CONSTRAINT `FK_PHANCONG` FOREIGN KEY (`mabm`) REFERENCES `bomon` (`mabm`);

--
-- Các ràng buộc cho bảng `hocki`
--
ALTER TABLE `hocki`
  ADD CONSTRAINT `FK_TRONG` FOREIGN KEY (`namhoc`) REFERENCES `namhoc` (`namhoc`);

--
-- Các ràng buộc cho bảng `lop`
--
ALTER TABLE `lop`
  ADD CONSTRAINT `FK_CHITHUOC` FOREIGN KEY (`mahdt`) REFERENCES `hedaotao` (`mahdt`),
  ADD CONSTRAINT `FK_HOC` FOREIGN KEY (`manganh`) REFERENCES `nganh` (`manganh`);

--
-- Các ràng buộc cho bảng `nganh`
--
ALTER TABLE `nganh`
  ADD CONSTRAINT `FK_CHO` FOREIGN KEY (`mabh`) REFERENCES `bachoc` (`mabh`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
