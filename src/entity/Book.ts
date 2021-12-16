import { ChildEntity, Column } from "typeorm";
import { Product } from "./Product";
import { Audit } from "./Audit";

@ChildEntity()
export class Book extends Product {
  @Column()
  author: string;

  @Column()
  title: string;

  @Column(() => Audit)
  audit: Audit;
}
