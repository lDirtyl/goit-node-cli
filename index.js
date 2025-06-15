import {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} from "./contacts.js";
import { program } from "commander";
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contactsList = await listContacts();
      return console.log(contactsList);

    case "get":
      const getContact = await getContactById(id);
      return console.log(getContact);

    case "add":
      const newContact = await addContact({ name, email, phone });
      return console.log(newContact);

    case "remove":
      const deleteContact = await removeContact(id);
      return console.log(deleteContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(options);
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({
//   action: "add",
//   name: "Andrii",
//   phone: "11111111111",
//   email: "andrii@gmail.com",
// });
// invokeAction({
//   action: "remove",
//   id: "Or6vAVJh6_JGSxkVKNQnv",
// });
