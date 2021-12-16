import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Phone3 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  countryCode: number;

  @Column()
  phoneNumber: number;
}
