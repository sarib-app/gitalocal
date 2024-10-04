import { getFirestore, collection, query, where, getDocs, addDoc, Timestamp } from 'firebase/firestore';

// Initialize Firestore
// const db = getFirestore();

import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';


export const saveVerseAsRead = async (uid, chapterId, verseId) => {
  try {
    // Reference to the collection where we store the read verses
    const versesCollection = collection(db, 'read_verses');

    // Query to check if the verse is already marked as read by this user
    const q = query(
      versesCollection,
      where('uid', '==', uid),
      where('chapter_id', '==', chapterId),
      where('verse_id', '==', verseId)
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Verse already marked as read
      return { success: false, message: 'This verse is already marked as read.' };
    }

    // Add new document with user ID, chapter ID, verse ID, and current timestamp
    await addDoc(versesCollection, {
      uid,
      chapter_id: chapterId,
      verse_id: verseId,
      date_read: Timestamp.now(),
    });

    return { success: true, message: 'Verse marked as read successfully.' };
  } catch (error) {
    console.error('Error marking verse as read: ', error);
    return { success: false, message: 'Error marking verse as read.' };
  }
};
