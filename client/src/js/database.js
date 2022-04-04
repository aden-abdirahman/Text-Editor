import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const dbJate = await openDB('jate', 1);
  const tx = dbJate.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  await store.put({ id: 1, value: content });
  console.log('data was saved');
  };

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const dbJate = await openDB('jate', 1);
  // creating new transaction with readonly priveleges
  const tx = dbJate.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  // getting all data from store
  const request = store.getAll(1);
  const data = await request;
  console.log('Reading database...');
  return data?.value
};

initdb();
