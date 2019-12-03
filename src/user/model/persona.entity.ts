import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('IASISTENCIAS')
export class Persona {

    @PrimaryColumn()
    IDPER: number;

    @Column("varchar2")
    NOMPER: String;

    @Column("varchar2")
    APEPER: String; 

    @Column("char")
    DNIPER: number;

/*  @Column("char")
    ESTPER: String;

    @Column("char")
    TIPPER: String; */

    @Column("varchar2")
    DIRPER: String; 

    @Column("varchar2")
    USUPER: String;

    @Column("varchar2")
    CONTRPER: String;

    @Column("varchar2")
    GRAAUL: String;

    @Column("varchar2")
    SECAUL: String;

    @Column("varchar2")
    ASISTENCIAS: String;

    @Column("varchar2")
    FALTAS: String;

    @Column("varchar2")
    CB: String;

    @Column("varchar2")
    MV: String;

  
}