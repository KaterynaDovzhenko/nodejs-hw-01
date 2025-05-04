import { getAllContacts } from './getAllContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await getAllContacts();
    if (contacts.length > 0) {
      contacts.pop();
      await writeContacts(contacts);
      console.log('Останній контакт було видалено.');
    } else {
      console.log('No contacts were found.');
    }
  } catch (err) {
    console.error('Error in removing the last contact', err);
  }
};

removeLastContact();
