import { getAllContacts } from '../scripts/getAllContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await getAllContacts();
    return contacts.length;
  } catch (err) {
    console.error('Error', err);
    return 0;
  }
};

console.log(await countContacts());
