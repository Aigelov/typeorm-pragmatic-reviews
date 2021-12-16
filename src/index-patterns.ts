import { createConnection } from "typeorm";
import { User2 } from "./entity";
import { User3 } from "./entity";

createConnection()
  .then(async (connection) => {
    /**
     * Data Mapper
     */
    const user2 = new User2();
    user2.firstname = "John";
    user2.lastname = "Doe";

    const user2Repository = connection.getRepository(User2);
    await user2Repository.save(user2);

    const users2 = await user2Repository.find();
    console.log("\nDATA MAPPER", users2);

    /**
     * Active Record
     */
    const user3 = new User3();
    user3.firstname = "John";
    user3.lastname = "Doe";

    await user3.save();

    const user3One = await User3.findOne({
      firstname: "John",
      lastname: "Doe",
    });
    console.log("\nACTIVE RECORD", user3One);
  })
  .catch((err) => console.error(err));
