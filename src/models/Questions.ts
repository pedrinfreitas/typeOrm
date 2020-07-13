import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import Forms from "./Forms";

@Entity()
export default class Questions {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ name: 'entry_type' })
  entry_type: string;

  @Column()
  type: string;

  @Column()
  weight: number;

  @Column()
  amount: number;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  //relacionamentos
  // @ManyToMany(type => Forms, question => Questions, {
  //   onDelete: 'CASCADE',
  //   onUpdate: 'CASCADE'
  // })
  @ManyToMany(type => Forms, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinTable({ name: 'questions_forms' })
  questions: Forms;
}
