import { readContacts } from '../utils/readContacts';

export const getAllContacts = async () => {
  try {
    const allContacts = await readContacts();
    return allContacts;
  } catch (err) {
    console.error('Помилка при зчитуванні контактів:', err);
  }
};

console.log(await getAllContacts());
