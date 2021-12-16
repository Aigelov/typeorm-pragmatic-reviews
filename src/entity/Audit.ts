import { Column } from "typeorm";

export class Audit {
  @Column({ name: "created_by" })
  createdBy: string;

  @Column({ name: "updated_by" })
  updatedBy: string;

  @Column({ name: "created_on" })
  createdOn: Date;

  @Column({ name: "updated_on" })
  updatedOn: Date;
}
