-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 24, 2019 lúc 10:33 AM
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
  `madc` varchar(30) COLLATE utf8_vietnamese_ci NOT NULL,
  `malop` varchar(10) COLLATE utf8_vietnamese_ci NOT NULL,
  `magv` varchar(5) COLLATE utf8_vietnamese_ci NOT NULL,
  `mamh` varchar(6) COLLATE utf8_vietnamese_ci NOT NULL,
  `mahk` varchar(7) COLLATE utf8_vietnamese_ci NOT NULL,
  `linkfile` varchar(150) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `ngaytai` varchar(10) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `publicId` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `decuong`
--

INSERT INTO `decuong` (`madc`, `malop`, `magv`, `mamh`, `mahk`, `linkfile`, `ngaytai`, `publicId`) VALUES
('DA15TT220069hk12017', 'DA15TT', '00258', '220069', 'hk12017', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574585434/PL2_Java_CA16TT_HK1_xzndoa.pdf', '2019-11-24', 'PL2_Java_CA16TT_HK1_xzndoa.pdf'),
('DA15TT220073hk12017', 'DA15TT', '00242', '220073', 'hk12017', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574586085/Hk2.DCCT_ThietKeHTM_DA15QTM_oe75pa.pdf', '2019-11-24', 'Hk2.DCCT_ThietKeHTM_DA15QTM_oe75pa.pdf'),
('DA15TT220092hk12017', 'DA15TT', '03562', '220092', 'hk12017', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574585295/DA15TT_muslb2.pdf', '2019-11-24', 'DA15TT_muslb2.pdf'),
('DA15TT220099hk22017', 'DA15TT', '00258', '220099', 'hk22017', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574585562/lap_trinh_huong_doi_tuong_p6c0sx.docx', '2019-11-24', 'lap_trinh_huong_doi_tuong_p6c0sx.docx'),
('DA15TT220220hk12017', 'DA15TT', '00248', '220220', 'hk12017', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574585675/PL2-DCMH_CNPM_CA16TT_kscvex.pdf', '2019-11-24', 'PL2-DCMH_CNPM_CA16TT_kscvex.pdf'),
('DA16TT220037hk12017', 'DA16TT', '03562', '220037', 'hk12017', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574585179/ky_thuat_lap_trinh_mt7f3m.docx', '2019-11-24', 'ky_thuat_lap_trinh_mt7f3m.docx'),
('DA16TT220054hk22017', 'DA16TT', '00248', '220054', 'hk22017', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574585731/Hk2.DCCT_ThietKeHTM_DA15QTM_mzo31i.pdf', '2019-11-24', 'Hk2.DCCT_ThietKeHTM_DA15QTM_mzo31i.pdf'),
('DA16TT220055hk12018', 'DA16TT', '03562', '220055', 'hk12018', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574585098/DA16TT-CNPM_CDIO_k2pkab.doc', '2019-11-24', 'DA16TT-CNPM_CDIO_k2pkab.doc'),
('DA16TT220069hk12018', 'DA16TT', '00258', '220069', 'hk12018', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574585419/PL2_Java_CN5_CDIO_HK1_tpicig.pdf', '2019-11-24', 'PL2_Java_CN5_CDIO_HK1_tpicig.pdf'),
('DA16TT220092hk12017', 'DA16TT', '00248', '220092', 'hk12017', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574585887/phu_luc_2_CA17TT_rr1wwp.pdf', '2019-11-24', 'phu_luc_2_CA17TT_rr1wwp.pdf'),
('DA16TT220136hk12017', 'DA16TT', '14204', '220136', 'hk12017', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574584892/Hk1.4.DCCT_QTMWindows_DA16TT_z75nr0.pdf', '2019-11-24', 'Hk1.4.DCCT_QTMWindows_DA16TT_z75nr0.pdf'),
('DA16TT220136hk22017', 'DA16TT', '00242', '220136', 'hk22017', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574586058/TRR_DA18TTB_jjnhir.pdf', '2019-11-24', 'TRR_DA18TTB_jjnhir.pdf'),
('DA17QTM220136hk22017', 'DA17QTM', '14204', '220136', 'hk22017', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574584930/Hk2.DCCT_MangMaytinh_DA17QTM_hf3myg.pdf', '2019-11-24', 'Hk2.DCCT_MangMaytinh_DA17QTM_hf3myg.pdf'),
('DA17QTM220220hk22018', 'DA17QTM', '00248', '220220', 'hk22018', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574585793/TRR_DA18TTA_phba6v.pdf', '2019-11-24', 'TRR_DA18TTA_phba6v.pdf'),
('DA17TT220037hk12018', 'DA17TT', '00258', '220037', 'hk12018', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574585362/ky_thuat_lap_trinh_ywr2fn.docx', '2019-11-24', 'ky_thuat_lap_trinh_ywr2fn.docx'),
('DA17TT220054hk22019', 'DA17TT', '00258', '220054', 'hk22019', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574585594/thiet_ke_lap_trinh_web_dh1bkb.docx', '2019-11-24', 'thiet_ke_lap_trinh_web_dh1bkb.docx'),
('DA17TT220055hk12019', 'DA17TT', '03562', '220055', 'hk12019', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574585069/cong_nghe_phan_mem_cgsws8.docx', '2019-11-24', 'cong_nghe_phan_mem_cgsws8.docx'),
('DA17TT220073hk12018', 'DA17TT', '00242', '220073', 'hk12018', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574586014/Hk1.2.DCCT_DoHoaUngDung_DA17TT_ogph8x.pdf', '2019-11-24', 'Hk1.2.DCCT_DoHoaUngDung_DA17TT_ogph8x.pdf'),
('DA17TT220092hk22017', 'DA17TT', '03562', '220092', 'hk22017', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574585278/CA17TT_iv05ud.pdf', '2019-11-24', 'CA17TT_iv05ud.pdf'),
('DA17TT220099hk22018', 'DA17TT', '00258', '220099', 'hk22018', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574585456/lap_trinh_huong_doi_tuong_gmj6ua.docx', '2019-11-24', 'lap_trinh_huong_doi_tuong_gmj6ua.docx'),
('DA17TT220136hk12019', 'DA17TT', '14204', '220136', 'hk12019', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574584961/Hk2.DCCT_QTM_CA17TT_uajcyp.pdf', '2019-11-24', 'Hk2.DCCT_QTM_CA17TT_uajcyp.pdf'),
('DA18TT220037hk12019', 'DA18TT', '00258', '220037', 'hk12019', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574585380/DA18TTA_NM_CNTT_ewgpxb.doc', '2019-11-24', 'DA18TTA_NM_CNTT_ewgpxb.doc'),
('DA18TT220055hk22019', 'DA18TT', '00248', '220055', 'hk22019', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574585693/cong_nghe_phan_mem_l0xtlx.docx', '2019-11-24', 'cong_nghe_phan_mem_l0xtlx.docx'),
('DA18TT220092hk22018', 'DA18TT', '03562', '220092', 'hk22018', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574585318/DA18TTA_NM_CNTT_sq3oaa.doc', '2019-11-24', 'DA18TTA_NM_CNTT_sq3oaa.doc'),
('DA18TT220099hk22019', 'DA18TT', '00258', '220099', 'hk22019', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574585496/lap_trinh_huong_doi_tuong_i9tgrd.docx', '2019-11-24', 'lap_trinh_huong_doi_tuong_i9tgrd.docx'),
('DA18TT220136hk22019', 'DA18TT', '14204', '220136', 'hk22019', 'http://res.cloudinary.com/ntwayd/raw/upload/v1574585003/Hk1.4.DCCT_QTMWindows_DA16TT_hg50fy.pdf', '2019-11-24', 'Hk1.4.DCCT_QTMWindows_DA16TT_hg50fy.pdf');

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
('00242', 'bmcntt', 'Dương Ngọc Vân Khanh', '0988332008', 'vankhanh@tvu.edu.vn', '$2a$10$IFqK2Yoa43T3D3QXgbM7feeF2nQBnXvzf46BXRh62rLfLlmSJkeVm', 'Giảng viên', '$2a$10$IFqK2Yoa43T3D3QXgbM7feeF2nQBnXvzf46BXRh62rLfLlmSJkeVm'),
('00245', 'bmcntt', 'Nguyễn Bảo Ân', '0908961632', 'annb@tvu.edu.vn', '$2a$10$IFqK2Yoa43T3D3QXgbM7feeF2nQBnXvzf46BXRh62rLfLlmSJkeVm', 'Giảng viên', '$2a$10$IFqK2Yoa43T3D3QXgbM7feeF2nQBnXvzf46BXRh62rLfLlmSJkeVm'),
('00248', 'bmcntt', 'Phạm Minh Đương', '0868567268', 'duongminh@tvu.edu.vn', '$2a$10$IFqK2Yoa43T3D3QXgbM7feeF2nQBnXvzf46BXRh62rLfLlmSJkeVm', 'Giảng viên', '$2a$10$IFqK2Yoa43T3D3QXgbM7feeF2nQBnXvzf46BXRh62rLfLlmSJkeVm'),
('00250', 'bmcntt', 'Võ Thành	C', '0909119657', 'vothanhc@tvu.edu.vn', '$2a$10$IFqK2Yoa43T3D3QXgbM7feeF2nQBnXvzf46BXRh62rLfLlmSJkeVm', 'Giảng viên', '$2a$10$IFqK2Yoa43T3D3QXgbM7feeF2nQBnXvzf46BXRh62rLfLlmSJkeVm'),
('00253', 'bmcntt', 'Đoàn Phước Miền', '0978962954', 'phuocmien@tvu.edu.vn', '$2a$10$IFqK2Yoa43T3D3QXgbM7feeF2nQBnXvzf46BXRh62rLfLlmSJkeVm', 'Giảng viên', '$2a$10$IFqK2Yoa43T3D3QXgbM7feeF2nQBnXvzf46BXRh62rLfLlmSJkeVm'),
('00258', 'bmcntt', 'Nhan Minh Phúc', '0918603819', 'nhanminhphuc@tvu.edu.vn', '$2a$10$IFqK2Yoa43T3D3QXgbM7feeF2nQBnXvzf46BXRh62rLfLlmSJkeVm', 'Giảng viên', '$2a$10$IFqK2Yoa43T3D3QXgbM7feeF2nQBnXvzf46BXRh62rLfLlmSJkeVm'),
('00666', 'bmcntt', 'Quản trị viên', '0453156897', 'qtv@tvu.edu.vn', '$2a$10$oAnOKu.tRChcW17lR3sQw.q5vpfIMzVv165DpZFlH9CeI/sB50GEK', 'Quản trị viên', '$2a$10$oAnOKu.tRChcW17lR3sQw.q5vpfIMzVv165DpZFlH9CeI/sB50GEK'),
('03562', 'bmcntt', 'Nguyễn Khắc Quốc', '0918085180', 'nkquoc@tvu.edu.vn', '$2a$10$IFqK2Yoa43T3D3QXgbM7feeF2nQBnXvzf46BXRh62rLfLlmSJkeVm', 'Giảng viên', '$2a$10$IFqK2Yoa43T3D3QXgbM7feeF2nQBnXvzf46BXRh62rLfLlmSJkeVm'),
('14204', 'bmcntt', 'Nguyễn Bá Nhiệm', '0983303609', 'nhiemnb@tvu.edu.vn', '$2a$10$IFqK2Yoa43T3D3QXgbM7feeF2nQBnXvzf46BXRh62rLfLlmSJkeVm', 'Giảng viên', '$2a$10$IFqK2Yoa43T3D3QXgbM7feeF2nQBnXvzf46BXRh62rLfLlmSJkeVm');

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
('hk22017', '2017', 'Học kì 2 năm học 2017'),
('hk22018', '2018', 'Học kì 2 năm học 2018'),
('hk22019', '2019', 'Học kì 2 năm học 2019'),
('hk32017', '2017', 'Học kì 3 năm học 2017'),
('hk32018', '2018', 'Học kì 3 năm học 2018'),
('hk32019', '2019', 'Học kì 3 năm học 2019');

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
('ktcn', 'Kĩ thuật và công nghệ');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lop`
--

CREATE TABLE `lop` (
  `malop` varchar(10) COLLATE utf8_vietnamese_ci NOT NULL,
  `mahdt` varchar(10) COLLATE utf8_vietnamese_ci NOT NULL,
  `manganh` varchar(10) COLLATE utf8_vietnamese_ci NOT NULL,
  `tenlop` varchar(40) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `lop`
--

INSERT INTO `lop` (`malop`, `mahdt`, `manganh`, `tenlop`) VALUES
('DA15TT', 'hdtcq', 'ncntt', 'Đại học công nghệ thông tin 2015'),
('DA16TT', 'hdtcq', 'ncntt', 'Đại học công nghệ thông tin 2016'),
('DA17QTM', 'hdtcq', 'nqtm', 'Đại học quản trị mạng 2017'),
('DA17TT', 'hdtcq', 'ncntt', 'Đại học công nghệ thông tin 2017'),
('DA18TT', 'hdtcq', 'ncntt', 'Đại học công nghệ thông tin 2018');

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
('220054', 'Lập trình web', 2, 1),
('220055', 'Công nghệ phần mềm', 2, 1),
('220069', 'Lập trình Java', 2, 1),
('220073', 'Đồ họa ứng dụng', 2, 1),
('220092', 'Nhập môn công nghệ thông tin', 2, 1),
('220099', 'Lập trình hướng đối tượng', 2, 1),
('220136', 'Quản trị mạng windows', 2, 1),
('220220', 'Tin học ứng dụng cơ bản', 2, 1),
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
