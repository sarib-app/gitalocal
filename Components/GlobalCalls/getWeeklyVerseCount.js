import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';


import { db } from '../../config/firebase';


export const getWeeklyVerseCount = async (uid) => {
  try {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const differenceToMonday = (dayOfWeek + 6) % 7;
    const startOfWeekDate = new Date(now);
    startOfWeekDate.setDate(now.getDate() - differenceToMonday);
    startOfWeekDate.setHours(0, 0, 0, 0);

    const versesCollection = collection(db, 'read_verses');
    const q = query(
      versesCollection,
      where('uid', '==', uid),
      where('date_read', '>=', startOfWeekDate),
      where('date_read', '<=', now)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return { success: false, message: 'No data found for this week.', count: 0 };
    }

    const count = querySnapshot.size;

    return { success: true, message: `Total verses read this week: ${count}`, count };
  } catch (error) {
    console.error('Error fetching weekly verse count: ', error);
    return { success: false, message: 'Error fetching weekly verse count.' };
  }
};
