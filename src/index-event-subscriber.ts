import "reflect-metadata";
import { createConnection } from "typeorm";
import { Phone3 } from "./entity/EventSubscriber/Phone3";

createConnection()
  .then(async (connection) => {
    const phone3 = new Phone3();
    phone3.phoneNumber = 2345678;

    const phone2Repository = connection.getRepository(Phone3);
    await phone2Repository.save(phone3);
  })
  .catch((error) => console.log(error));
