import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User2 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;
}
