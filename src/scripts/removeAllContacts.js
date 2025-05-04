import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, '[]', 'utf-8');
  } catch (err) {
    console.error('Error in removing all contacts', err);
  }
};

removeAllContacts();
