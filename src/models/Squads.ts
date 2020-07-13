import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import Rts from "./Rts";
import Projects from "./Projects";

@Entity()
export default class Squads {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  //relacionamentos
  @ManyToOne(type => Rts, squads => Squads,  { 
    eager: true,
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'rt_id' })
  rt_id: Rts;

  @OneToMany(type => Projects, squad => Squads)
  projects: Projects[]

}
