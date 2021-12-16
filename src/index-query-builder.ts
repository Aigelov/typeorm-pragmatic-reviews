import "reflect-metadata";
import { createConnection } from "typeorm";
import { User4 } from "./entity/QueryBuilder/User4";
import { Phone4 } from "./entity/QueryBuilder/Phone4";

createConnection()
  .then(async (connection) => {
    // await connection
    //   .createQueryBuilder()
    //   .insert()
    //   .into(User4)
    //   .values([
    //     {
    //       firstName: "Rachel",
    //       lastName: "Green",
    //       age: 27,
    //     },
    //   ])
    //   .execute();

    const user = await connection
      .createQueryBuilder()
      .select("user")
      .from(User4, "user")
      .where("user.id = :id", { id: 1 })
      .getOne();

    const phoneId = await connection
      .createQueryBuilder()
      .insert()
      .into(Phone4)
      .values([
        {
          phoneNumber: 445566,
        },
      ])
      .returning("id")
      .execute();

    if (phoneId.raw[0].id) {
      await connection
        .createQueryBuilder()
        .relation(User4, "phones")
        .of(user)
        .add({
          id: phoneId.raw[0].id,
        });
    }

    const users = await connection
      .createQueryBuilder()
      .select("user")
      .from(User4, "user")
      .leftJoinAndSelect("user.phones", "phones")
      .getMany();

    console.log("\nUSERS\n");
    console.log(users);
  })
  .catch((error) => console.log(error));
