import "reflect-metadata";
import { createConnection } from "typeorm";
import { Community, Phone, Profile, User } from "./entity";

createConnection()
  .then(async (connection) => {
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;

    /**
     * PROFILE
     */
    const profile = new Profile();
    profile.gender = "Male";
    profile.photo = "my-photo.png";
    profile.user = user;
    user.profile = profile;

    /**
     * PHONE
     */
    const phone1 = new Phone();
    phone1.number = 7705783;
    user.addPhone(phone1);
    const phone2 = new Phone();
    phone2.number = 7705784;
    user.addPhone(phone2);

    /**
     * COMMUNITY
     */
    const github = new Community();
    github.name = "Github";
    user.addCommunity(github);

    const userRepository = connection.getRepository(User);
    await userRepository.save(user);

    console.log("Saved a new user with id");
    console.log(user);
  })
  .catch((error) => console.log(error));
