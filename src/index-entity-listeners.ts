import "reflect-metadata";
import { createConnection } from "typeorm";
import { Phone2 } from "./entity/EntityListeners/Phone2";

createConnection()
  .then(async (connection) => {
    const phone2 = new Phone2();
    phone2.phoneNumber = 2345678;

    const phone2Repository = connection.getRepository(Phone2);
    await phone2Repository.save(phone2);
  })
  .catch((error) => console.log(error));
