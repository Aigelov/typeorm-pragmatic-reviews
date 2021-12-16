import { createConnection } from "typeorm";
import { User } from "./entity";

createConnection()
  .then(async (connection) => {
    const userRepository = connection.getRepository(User);

    const users = await userRepository.find({
      order: {
        id: "DESC",
      },
    });

    console.log("\nUSERS\n", users);

    const user = users[0];
    const phones = await user.phones2;

    console.log("\nPHONES\n", JSON.stringify(phones, null, 2));
  })
  .catch((error) => console.log(error));
