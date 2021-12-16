import { createConnection } from "typeorm";
import { Audit, Book } from "./entity";

createConnection()
  .then(async (connection) => {
    const audit = new Audit();
    audit.createdBy = "User1";
    audit.updatedBy = "User2";
    audit.createdOn = new Date();
    audit.updatedOn = new Date();

    const book1 = new Book();
    book1.name = "Book: Bad Code Second Edition";
    book1.title = "Bad Code";
    book1.author = "Chandler Bing";
    book1.price = 45;
    book1.audit = audit;

    const bookRepository = connection.getRepository(Book);
    await bookRepository.save(book1);
  })
  .catch((error) => console.log(error));
