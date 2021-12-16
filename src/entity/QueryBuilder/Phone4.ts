import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User4 } from "./User4";

@Entity()
export class Phone4 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phoneNumber: number;

  @ManyToOne(() => User4, (user) => user.phones)
  user: User4;
}
