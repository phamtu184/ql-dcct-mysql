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
   mabh                varchar(15) not null,
   tenbh                varchar(50),
   primary key (mabh)
);

/*==============================================================*/
/* Table: BOMON                                                 */
/*==============================================================*/
create table BOMON
(
   mabm                 varchar(20) not null,
   makhoa               varchar(20) not null,
   tenbm                varchar(50),
   primary key (mabm)
);

/*==============================================================*/
/* Table: DECUONG                                               */
/*==============================================================*/
create table DECUONG
(
   madc                 varchar(20) not null,
   malop                varchar(20) not null,
   magv                 varchar(20) not null,
   mamh                 varchar(20) not null,
   mahk                 varchar(20) not null,
   linkfile             varchar(120),
   ngaytai              varchar(20),
   primary key (madc)
);

/*==============================================================*/
/* Table: GIANGVIEN                                             */
/*==============================================================*/
create table GIANGVIEN
(
   magv                 varchar(20) not null,
   mabm                 varchar(20) not null,
   tengv                varchar(50),
   sdt                  varchar(20),
   email                varchar(50),
   password              varchar(100),
   role                varchar(10),
   passwordConf            varchar(100),
   primary key (magv)
);

/*==============================================================*/
/* Table: HEDAOTAO                                              */
/*==============================================================*/
create table HEDAOTAO
(
   mahdt                varchar(15) not null,
   tenhdt               varchar(50),
   primary key (mahdt)
);

/*==============================================================*/
/* Table: HOCKI                                                 */
/*==============================================================*/
create table HOCKI
(
   mahk                 varchar(20) not null,
   manh                 varchar(20) not null,
   tenhk                varchar(50),
   primary key (mahk)
);

/*==============================================================*/
/* Table: KHOA                                                  */
/*==============================================================*/
create table KHOA
(
   makhoa               varchar(20) not null,
   tenkhoa              varchar(50),
   primary key (makhoa)
);

/*==============================================================*/
/* Table: LOP                                                   */
/*==============================================================*/
create table LOP
(
   malop                varchar(20) not null,
   mahdt                varchar(15) not null,
   manganh              varchar(20) not null,
   tenlop               varchar(50),
   primary key (malop)
);

/*==============================================================*/
/* Table: MONHOC                                                */
/*==============================================================*/
create table MONHOC
(
   mamh                 varchar(20) not null,
   tenmh                varchar(50),
   tclythuyet           int,
   tcthuchanh           int,
   primary key (mamh)
);

/*==============================================================*/
/* Table: NAMHOC                                                */
/*==============================================================*/
create table NAMHOC
(
   manh                 varchar(20) not null,
   namhoc               varchar(50),
   primary key (manh)
);

/*==============================================================*/
/* Table: NGANH                                                 */
/*==============================================================*/
create table NGANH
(
   manganh              varchar(20) not null,
   mabh                 varchar(15) not null,
   tennganh             varchar(50),
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

alter table HOCKI add constraint FK_TRONG foreign key (manh)
      references NAMHOC (manh) on delete restrict on update restrict;

alter table LOP add constraint FK_CHITHUOC foreign key (mahdt)
      references HEDAOTAO (mahdt) on delete restrict on update restrict;

alter table LOP add constraint FK_HOC foreign key (manganh)
      references NGANH (manganh) on delete restrict on update restrict;

alter table NGANH add constraint FK_CHO foreign key (mabh)
      references BACHOC (mabh) on delete restrict on update restrict;
