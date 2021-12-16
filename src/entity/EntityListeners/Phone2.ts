import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Phone2 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  countryCode: number;

  @Column()
  phoneNumber: number;

  @BeforeInsert()
  initializeCountryCode() {
    console.log("BEFORE INSERT PHONE\n");
    this.countryCode = 1;
  }
}
