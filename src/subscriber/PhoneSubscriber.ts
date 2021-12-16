import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from "typeorm";
import { Phone3 } from "../entity/EventSubscriber/Phone3";

@EventSubscriber()
export class PhoneSubscriber implements EntitySubscriberInterface<Phone3> {
  listenTo(): Function | string {
    return Phone3;
  }

  beforeInsert(event: InsertEvent<Phone3>) {
    console.log("BEFORE INSERT PHONE\n");
    event.entity.countryCode = 1;
  }
}
