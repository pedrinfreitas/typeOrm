import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import Squads from "./Squads";

@Entity()
export default class Rts {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  //relacionamentos
  @OneToMany(type => Squads, rt => Rts)
  squads: Squads[]

  // @UpdateDateColumn({ name: 'updated_at' })
  // updated_at: Date;
}
