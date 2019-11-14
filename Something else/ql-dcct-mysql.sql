-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 14, 2019 lúc 09:04 AM
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
  `mabh` varchar(15) COLLATE utf8_vietnamese_ci NOT NULL,
  `tenbh` varchar(50) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `bachoc`
--

INSERT INTO `bachoc` (`mabh`, `tenbh`) VALUES
('BHCD', 'Cao đẳng'),
('BHDH', 'Đại học');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bomon`
--

CREATE TABLE `bomon` (
  `mabm` varchar(20) COLLATE utf8_vietnamese_ci NOT NULL,
  `makhoa` varchar(20) COLLATE utf8_vietnamese_ci NOT NULL,
  `tenbm` varchar(50) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `bomon`
--

INSERT INTO `bomon` (`mabm`, `makhoa`, `tenbm`) VALUES
('BMCNTT', 'KTCN', 'Công nghệ thông tin');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `decuong`
--

CREATE TABLE `decuong` (
  `madc` varchar(60) COLLATE utf8_vietnamese_ci NOT NULL,
  `malop` varchar(20) COLLATE utf8_vietnamese_ci NOT NULL,
  `magv` varchar(20) COLLATE utf8_vietnamese_ci NOT NULL,
  `mamh` varchar(20) COLLATE utf8_vietnamese_ci NOT NULL,
  `mahk` varchar(20) COLLATE utf8_vietnamese_ci NOT NULL,
  `linkfile` varchar(120) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `ngaytai` varchar(15) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `decuong`
--

INSERT INTO `decuong` (`madc`, `malop`, `magv`, `mamh`, `mahk`, `linkfile`, `ngaytai`) VALUES
('baocao_lgg24d.doc', 'DA17TT', '03562', '220283', 'hk22019', 'http://res.cloudinary.com/ntwayd/raw/upload/v1573650781/baocao_lgg24d.doc', '2019-11-13'),
('baocao_yw9nvc.doc', 'DA17TT', '00245', '220078', 'hk12019', 'http://res.cloudinary.com/ntwayd/raw/upload/v1573473694/baocao_yw9nvc.doc', '2019-11-11'),
('BC_PTTKHTTT_brbqul.docx', 'DA17TT', '00245', '410261', 'hk22019', 'http://res.cloudinary.com/ntwayd/raw/upload/v1573473718/BC_PTTKHTTT_brbqul.docx', '2019-11-11'),
('BC_PTTKHTTT_qer9ce.docx', 'DA17TT', '03562', '220220', 'hk12019', 'http://res.cloudinary.com/ntwayd/raw/upload/v1573650760/BC_PTTKHTTT_qer9ce.docx', '2019-11-13'),
('C__9_QL_KhachSan_hhj8sq.doc', 'DA17QTM', '00248', '220078', 'hk22018', 'http://res.cloudinary.com/ntwayd/raw/upload/v1573650942/C__9_QL_KhachSan_hhj8sq.doc', '2019-11-13'),
('CSDL_cqaj47.docx', 'DA17TT', '00248', '220037', 'hk12019', 'http://res.cloudinary.com/ntwayd/raw/upload/v1573650868/CSDL_cqaj47.docx', '2019-11-13'),
('My_Edit_14-4-19_yb4bir.docx', 'DA17QTM', '00245', '220054', 'hk22019', 'http://res.cloudinary.com/ntwayd/raw/upload/v1573473668/My_Edit_14-4-19_yb4bir.docx', '2019-11-11'),
('Nhom_13_tuan_3_-_Copy_k11lai.docx', 'DA17QTM', '00248', '220220', 'hk22019', 'http://res.cloudinary.com/ntwayd/raw/upload/v1573650888/Nhom_13_tuan_3_-_Copy_k11lai.docx', '2019-11-13'),
('Nhom_13_tuan_6_ubob5x.docx', 'DA17TT', '00248', '220283', 'hk12019', 'http://res.cloudinary.com/ntwayd/raw/upload/v1573650912/Nhom_13_tuan_6_ubob5x.docx', '2019-11-13'),
('V3_Bao_cao_Cao_Mong_Ngan_1_szwnrb.docx', 'DA17TT', 'yV_csgao', '220037', 'hk22018', 'http://res.cloudinary.com/ntwayd/raw/upload/v1573473593/V3_Bao_cao_Cao_Mong_Ngan_1_szwnrb.docx', '2019-11-11');

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
  `role` varchar(20) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `passwordConf` varchar(100) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `giangvien`
--

INSERT INTO `giangvien` (`magv`, `mabm`, `tengv`, `sdt`, `email`, `password`, `role`, `passwordConf`) VALUES
('00245', 'BMCNTT', 'Nguyễn Bảo Ân', '9089616326', 'annb@tvu.edu.vn', '$2a$10$0g9ty8z2FUhpVmoRpbOPKejQgjjMNXITFD9immv31.HTG6CRycG06', 'Giảng viên', '$2a$10$0g9ty8z2FUhpVmoRpbOPKejQgjjMNXITFD9immv31.HTG6CRycG06'),
('00248', 'BMCNTT', 'Phạm Minh Đương', '8685672686', 'duongminh@tvu.edu.vn', '$2a$10$0g9ty8z2FUhpVmoRpbOPKejQgjjMNXITFD9immv31.HTG6CRycG06', 'Lãnh đạo khoa', '$2a$10$0g9ty8z2FUhpVmoRpbOPKejQgjjMNXITFD9immv31.HTG6CRycG06'),
('00250', 'BMCNTT', 'Võ Thành	C', '0909119657', 'vothanhc@tvu.edu.vn', '$2a$10$X3dIBZAInAcs.P65zYXtLeRarhytroPQwBQkh6aLKYf2JyfkDOJsG', 'Giảng viên', '$2a$10$X3dIBZAInAcs.P65zYXtLeRarhytroPQwBQkh6aLKYf2JyfkDOJsG'),
('00253', 'BMCNTT', 'Đoàn Phước Miền', '0978962954', 'phuocmien@tvu.edu.vn', '$2a$10$X3dIBZAInAcs.P65zYXtLeRarhytroPQwBQkh6aLKYf2JyfkDOJsG', 'Giảng viên', '$2a$10$X3dIBZAInAcs.P65zYXtLeRarhytroPQwBQkh6aLKYf2JyfkDOJsG'),
('00257', 'BMCNTT', 'Nguyễn Mộng	Hiền', '0975999579', 'hientvu@tvu.edu.vn', '$2a$10$X3dIBZAInAcs.P65zYXtLeRarhytroPQwBQkh6aLKYf2JyfkDOJsG', 'Giảng viên', '$2a$10$X3dIBZAInAcs.P65zYXtLeRarhytroPQwBQkh6aLKYf2JyfkDOJsG'),
('00258', 'BMCNTT', 'Nhan Minh Phúc', '0918603819', 'nhanminhphuc@tvu.edu.vn', '$2a$10$X3dIBZAInAcs.P65zYXtLeV59rDFDr1AIKi1VU4l5j4Gl.R5XvJ5m', 'Giảng viên', '$2a$10$X3dIBZAInAcs.P65zYXtLeV59rDFDr1AIKi1VU4l5j4Gl.R5XvJ5m'),
('03562', 'BMCNTT', 'Nguyễn Khắc Quốc', '9180851804', 'nkquoc@tvu.edu.vn', '$2a$10$0g9ty8z2FUhpVmoRpbOPKejQgjjMNXITFD9immv31.HTG6CRycG06', 'Lãnh đạo khoa', '$2a$10$0g9ty8z2FUhpVmoRpbOPKejQgjjMNXITFD9immv31.HTG6CRycG06'),
('14204', 'BMCNTT', 'Nguyễn Bá Nhiệm', '4651239874', 'nhiemnb@tvu.edu.vn', '$2a$10$X3dIBZAInAcs.P65zYXtLeRarhytroPQwBQkh6aLKYf2JyfkDOJsG', 'Giảng viên', '$2a$10$X3dIBZAInAcs.P65zYXtLeRarhytroPQwBQkh6aLKYf2JyfkDOJsG'),
('yV_csgao', 'BMCNTT', 'Quản trị viên', '0123456789', 'qtv@tvu.edu.vn', '$2a$10$oAnOKu.tRChcW17lR3sQw.q5vpfIMzVv165DpZFlH9CeI/sB50GEK', 'Quản trị viên', '$2a$10$oAnOKu.tRChcW17lR3sQw.q5vpfIMzVv165DpZFlH9CeI/sB50GEK');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hedaotao`
--

CREATE TABLE `hedaotao` (
  `mahdt` varchar(15) COLLATE utf8_vietnamese_ci NOT NULL,
  `tenhdt` varchar(50) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `hedaotao`
--

INSERT INTO `hedaotao` (`mahdt`, `tenhdt`) VALUES
('HDTCQ', 'Chính quy');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hocki`
--

CREATE TABLE `hocki` (
  `mahk` varchar(20) COLLATE utf8_vietnamese_ci NOT NULL,
  `manh` varchar(20) COLLATE utf8_vietnamese_ci NOT NULL,
  `tenhk` varchar(50) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `hocki`
--

INSERT INTO `hocki` (`mahk`, `manh`, `tenhk`) VALUES
('hk12018', '18', 'Học kì 1 năm 2018'),
('hk12019', '19', 'Học kì 1 năm 2019'),
('hk22018', '18', 'Học kì 2 năm 2018'),
('hk22019', '19', 'Học kì 2 năm 2019');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khoa`
--

CREATE TABLE `khoa` (
  `makhoa` varchar(20) COLLATE utf8_vietnamese_ci NOT NULL,
  `tenkhoa` varchar(50) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `khoa`
--

INSERT INTO `khoa` (`makhoa`, `tenkhoa`) VALUES
('KTCN', 'Kĩ thuật và công nghệ');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lop`
--

CREATE TABLE `lop` (
  `malop` varchar(20) COLLATE utf8_vietnamese_ci NOT NULL,
  `mahdt` varchar(15) COLLATE utf8_vietnamese_ci NOT NULL,
  `manganh` varchar(20) COLLATE utf8_vietnamese_ci NOT NULL,
  `tenlop` varchar(50) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `lop`
--

INSERT INTO `lop` (`malop`, `mahdt`, `manganh`, `tenlop`) VALUES
('DA17QTM', 'HDTCQ', '7480201', 'Đại học Quản trị mạng 2017'),
('DA17TT', 'HDTCQ', '7480201', 'Đại học Công nghệ Thông tin 2017');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `monhoc`
--

CREATE TABLE `monhoc` (
  `mamh` varchar(20) COLLATE utf8_vietnamese_ci NOT NULL,
  `tenmh` varchar(50) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `tclythuyet` int(11) DEFAULT NULL,
  `tcthuchanh` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `monhoc`
--

INSERT INTO `monhoc` (`mamh`, `tenmh`, `tclythuyet`, `tcthuchanh`) VALUES
('220037', 'Kỹ thuật lập trình', 1, 2),
('220054', 'Lập trình web', 1, 2),
('220078', 'Quản trị dự án công nghệ thông tin', 1, 2),
('220220', 'Tin học ứng dụng cơ bản', 1, 2),
('220283', 'Phát triển hệ thống thông tin', 1, 2),
('410261', 'Thiết kế web cơ bản', 1, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `namhoc`
--

CREATE TABLE `namhoc` (
  `manh` varchar(20) COLLATE utf8_vietnamese_ci NOT NULL,
  `namhoc` varchar(50) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `namhoc`
--

INSERT INTO `namhoc` (`manh`, `namhoc`) VALUES
('18', '2018'),
('19', '2019'),
('2017', '2017');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nganh`
--

CREATE TABLE `nganh` (
  `manganh` varchar(20) COLLATE utf8_vietnamese_ci NOT NULL,
  `mabh` varchar(15) COLLATE utf8_vietnamese_ci NOT NULL,
  `tennganh` varchar(50) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `nganh`
--

INSERT INTO `nganh` (`manganh`, `mabh`, `tennganh`) VALUES
('7480201', 'BHDH', 'ĐH Công nghệ thông tin');

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
  ADD KEY `FK_TRONG` (`manh`);

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
  ADD PRIMARY KEY (`manh`);

--
-- Chỉ mục cho bảng `nganh`
--
ALTER TABLE `nganh`
  ADD PRIMARY KEY (`manganh`),
  ADD KEY `FK_CHO` (`mabh`);

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
  ADD CONSTRAINT `FK_TRONG` FOREIGN KEY (`manh`) REFERENCES `namhoc` (`manh`);

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
