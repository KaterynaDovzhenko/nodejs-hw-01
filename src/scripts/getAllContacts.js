import { readContacts } from '../utils/readContacts';

export const getAllContacts = async () => {
  try {
    const allContacts = readContacts();
    return allContacts;
  } catch (err) {
    console.error('Помилка при зчитуванні контактів:', err);
  }
};

console.log(await getAllContacts());
