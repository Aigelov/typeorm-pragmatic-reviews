import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Phone4 } from "./Phone4";

@Entity()
export class User4 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @OneToMany(() => Phone4, (phone) => phone.user, {
    cascade: true, // При вызове метода save дополнительно сохраняет данные по phones
  })
  phones: Phone4[];
}
