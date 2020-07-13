import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import Squads from "./Squads";

@Entity()
export default class Projects {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  owner: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  //relacionamentos
  @ManyToOne(type => Squads, projects => Projects, {
    eager: true,
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'squad_id' })
  squad_id: Squads;
}
