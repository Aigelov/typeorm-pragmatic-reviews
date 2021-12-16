import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  JoinTable,
  OneToMany,
  ManyToMany,
} from "typeorm";
import { Profile } from "./Profile";
import { Phone } from "./Phone";
import { Community } from "./Community";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @OneToOne(() => Profile, (profile) => profile.user, {
    cascade: true,
  })
  @JoinColumn()
  profile: Profile;

  @OneToMany(() => Phone, (phone) => phone.user, {
    cascade: true, // При вызове метода save дополнительно сохраняет данные по phones
    eager: true, // При вызове метода find делает LEFT JOIN с entity Phone
  })
  phones: Phone[];

  @OneToMany(() => Phone, (phone) => phone.user, {
    cascade: true,
    lazy: true,
  })
  phones2: Promise<Phone[]>;

  @ManyToMany(() => Community, (community) => community.user, {
    cascade: true,
  })
  @JoinTable()
  communities: Community[];

  addPhone(phone: Phone) {
    if (!this.phones) {
      this.phones = new Array<Phone>();
    }

    this.phones.push(phone);
  }

  addCommunity(community: Community) {
    if (!this.communities) {
      this.communities = new Array<Community>();
    }

    this.communities.push(community);
  }
}
