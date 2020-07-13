import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import Questions from "./Questions";

@Entity()
export default class Forms {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;
  
  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  // @ManyToMany(type => Questions, form => Forms, {
  //   onDelete: 'CASCADE',
  //   onUpdate: 'CASCADE'
  // })

}
