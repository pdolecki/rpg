import { Injectable, inject } from '@angular/core';
import { FIRESTORE } from '../../app.config';
import { collection, limit, orderBy, query } from 'firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { Profession, Quality, State, Talent } from '../interfaces/features';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private firestore = inject(FIRESTORE);

  professions$ = this.getFeatureCollection<Profession[]>('professions');
  qualities$ = this.getFeatureCollection<Quality[]>('qualities');
  states$ = this.getFeatureCollection<State[]>('states');
  talents$ = this.getFeatureCollection<Talent[]>('talents');

  private getFeatureCollection<T>(collectionName: string): Observable<T[]> {
    const featureCollection = query(
      collection(this.firestore, collectionName),
      orderBy('name', 'asc'),
      limit(100)
    );

    return collectionData(featureCollection, { idField: 'id' }) as Observable<
      T[]
    >;
  }
}
