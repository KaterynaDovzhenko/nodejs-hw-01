import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = await fs.writeFile(PATH_DB, 'utf-8');
    console.log(data);
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};
