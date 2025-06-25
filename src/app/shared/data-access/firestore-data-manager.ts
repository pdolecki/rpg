import { inject, Injectable } from '@angular/core';
import { FIRESTORE } from '../../app.config';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from 'firebase/firestore';

@Injectable({ providedIn: 'root' })
export class FirestoreDataManager {
  private firestore = inject(FIRESTORE);

  async seedCollection<T extends Record<string, any>>(
    collectionName: string,
    data: T[],
    useNameAsId = false
  ): Promise<void> {
    const colRef = collection(this.firestore, collectionName);

    for (const item of data) {
      const docId = useNameAsId
        ? item['name']?.toLowerCase()?.trim()
        : undefined;

      const docRef = docId ? doc(colRef, docId) : doc(colRef);
      await setDoc(docRef, item);
    }

    console.log(`✅ Seeded ${data.length} items to '${collectionName}'`);
  }

  async clearCollection(collectionName: string): Promise<void> {
    const colRef = collection(this.firestore, collectionName);
    const snapshot = await getDocs(colRef);

    const deletions = snapshot.docs.map((docSnap) => deleteDoc(docSnap.ref));
    await Promise.all(deletions);

    console.log(
      `🗑️ Cleared collection '${collectionName}' (${deletions.length} documents deleted)`
    );
  }

  async removeDuplicates(collectionName: string, uniqueField: string = 'name') {
    const colRef = collection(this.firestore, collectionName);
    const snapshot = await getDocs(colRef);

    const seen = new Set<string>();
    const deletions: Promise<void>[] = [];

    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      const key = (data[uniqueField] as string)?.trim().toLowerCase();

      if (!key) return;

      if (seen.has(key)) {
        deletions.push(deleteDoc(docSnap.ref));
      } else {
        seen.add(key);
      }
    });

    await Promise.all(deletions);
    console.log(
      `🔥 Removed ${deletions.length} duplicates from '${collectionName}'`
    );
  }
}
