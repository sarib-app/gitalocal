import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

import { db } from '../../config/firebase';


export const getUserStreak = async (uid) => {
  try {
    const versesCollection = collection(db, 'read_verses');
    const q = query(versesCollection, where('uid', '==', uid));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return { success: false, message: 'No verses found for the user.', streak: 0 };
    }

    const readDates = querySnapshot.docs.map(doc => doc.data().date_read.toDate()).sort((a, b) => a - b);

    let currentStreak = 1;
    let longestStreak = 1;

    for (let i = 1; i < readDates.length; i++) {
      const previousDate = new Date(readDates[i - 1]);
      const currentDate = new Date(readDates[i]);

      // Calculate the difference in days between the two dates
      const timeDiff = currentDate - previousDate;
      const dayDiff = timeDiff / (1000 * 3600 * 24);

      if (dayDiff === 1) {
        currentStreak += 1;
      } else if (dayDiff > 1) {
        longestStreak = Math.max(longestStreak, currentStreak);
        currentStreak = 1;
      }
    }

    longestStreak = Math.max(longestStreak, currentStreak);

    return { success: true, message: `Current streak: ${longestStreak} days`, streak: longestStreak };
  } catch (error) {
    console.error('Error fetching user streak: ', error);
    return { success: false, message: 'Error fetching user streak.' };
  }
};
