/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     10/24/2019 3:50:42 PM                        */
/*==============================================================*/


drop table if exists BACHOC;

drop table if exists BOMON;

drop table if exists DECUONG;

drop table if exists GIANGVIEN;

drop table if exists HEDAOTAO;

drop table if exists HOCKI;

drop table if exists KHOA;

drop table if exists LOP;

drop table if exists MONHOC;

drop table if exists NAMHOC;

drop table if exists NGANH;

/*==============================================================*/
/* Table: BACHOC                                                */
/*==============================================================*/
create table BACHOC
(
   mabh                varchar(10) not null,
   tenbh                varchar(20),
   primary key (mabh)
);

/*==============================================================*/
/* Table: BOMON                                                 */
/*==============================================================*/
create table BOMON
(
   mabm                 varchar(10) not null,
   makhoa               varchar(10) not null,
   tenbm                varchar(30),
   primary key (mabm)
);

/*==============================================================*/
/* Table: DECUONG                                               */
/*==============================================================*/
create table DECUONG
(
   madc                 int(10) not null AUTO_INCREMENT,
   malop                varchar(10) not null,
   magv                 varchar(5) not null,
   mamh                 varchar(6) not null,
   mahk                 varchar(7) not null,
   linkfile             varchar(120),
   ngaytai              varchar(10),
   primary key (madc)
);

/*==============================================================*/
/* Table: GIANGVIEN                                             */
/*==============================================================*/
create table GIANGVIEN
(
   magv                 varchar(5) not null,
   mabm                 varchar(10) not null,
   tengv                varchar(50),
   sdt                  varchar(10),
   email                varchar(30),
   password              varchar(100),
   role                varchar(15),
   passwordConf            varchar(100),
   primary key (magv)
);

/*==============================================================*/
/* Table: HEDAOTAO                                              */
/*==============================================================*/
create table HEDAOTAO
(
   mahdt                varchar(10) not null,
   tenhdt               varchar(20),
   primary key (mahdt)
);

/*==============================================================*/
/* Table: HOCKI                                                 */
/*==============================================================*/
create table HOCKI
(
   mahk                 varchar(7) not null,
   namhoc                 varchar(4) not null,
   tenhk                varchar(21),
   primary key (mahk)
);

/*==============================================================*/
/* Table: KHOA                                                  */
/*==============================================================*/
create table KHOA
(
   makhoa               varchar(10) not null,
   tenkhoa              varchar(30),
   primary key (makhoa)
);

/*==============================================================*/
/* Table: LOP                                                   */
/*==============================================================*/
create table LOP
(
   malop                varchar(10) not null,
   mahdt                varchar(10) not null,
   manganh              varchar(10) not null,
   tenlop               varchar(30),
   primary key (malop)
);

/*==============================================================*/
/* Table: MONHOC                                                */
/*==============================================================*/
create table MONHOC
(
   mamh                 varchar(6) not null,
   tenmh                varchar(30),
   tclythuyet           int,
   tcthuchanh           int,
   primary key (mamh)
);

/*==============================================================*/
/* Table: NAMHOC                                                */
/*==============================================================*/
create table NAMHOC
(
   namhoc		varchar(4) not null,
   primary key (namhoc)
);

/*==============================================================*/
/* Table: NGANH                                                 */
/*==============================================================*/
create table NGANH
(
   manganh              varchar(10) not null,
   mabh                 varchar(10) not null,
   tennganh             varchar(30),
   primary key (manganh)
);

alter table BOMON add constraint FK_CO foreign key (makhoa)
      references KHOA (makhoa) on delete restrict on update restrict;

alter table DECUONG add constraint FK_BANGIAO foreign key (magv)
      references GIANGVIEN (magv) on delete restrict on update restrict;

alter table DECUONG add constraint FK_CHICO foreign key (mamh)
      references MONHOC (mamh) on delete restrict on update restrict;

alter table DECUONG add constraint FK_CUA foreign key (malop)
      references LOP (malop) on delete restrict on update restrict;

alter table DECUONG add constraint FK_THUOC foreign key (mahk)
      references HOCKI (mahk) on delete restrict on update restrict;

alter table GIANGVIEN add constraint FK_PHANCONG foreign key (mabm)
      references BOMON (mabm) on delete restrict on update restrict;

alter table HOCKI add constraint FK_TRONG foreign key (namhoc)
      references NAMHOC (namhoc) on delete restrict on update restrict;

alter table LOP add constraint FK_CHITHUOC foreign key (mahdt)
      references HEDAOTAO (mahdt) on delete restrict on update restrict;

alter table LOP add constraint FK_HOC foreign key (manganh)
      references NGANH (manganh) on delete restrict on update restrict;

alter table NGANH add constraint FK_CHO foreign key (mabh)
      references BACHOC (mabh) on delete restrict on update restrict;
