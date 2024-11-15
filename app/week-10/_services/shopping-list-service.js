import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  const items = [];
  const itemsRef = query(collection(db, `users/${userId}/items`));
  const snapshot = await getDocs(itemsRef);

  snapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

  return items;
};

export const addItem = async (userId, item) => {
  const docRef = await addDoc(collection(db, `users/${userId}/items`), item);
  return docRef.id;
};