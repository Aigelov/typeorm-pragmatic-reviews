import { createConnection } from "typeorm";
import { Book, Pen } from "./entity";

createConnection()
  .then(async (connection) => {
    const book1 = new Book();
    book1.name = "Book: Clean Code First Edition";
    book1.title = "Clean Code";
    book1.author = "Bob Martin";
    book1.price = 33;

    const pen1 = new Pen();
    pen1.name = "Green pen";
    pen1.color = "green";
    pen1.price = 2;

    const bookRepository = connection.getRepository(Book);
    await bookRepository.save(book1);

    const penRepository = connection.getRepository(Pen);
    await penRepository.save(pen1);
  })
  .catch((error) => console.log(error));
