import { State } from "../interfaces/features";

export const STATES: State[] = [
  {
    name: 'Krwawienie',
    description:
      'Otrzymujesz 1 Ranę pod koniec każdej rundy. Testy przeciwko Ropiejącym Ranom, Pomniejszym Infekcjom i Zatruciu Krwii są obarczone karą -10. Jeśli Żywotność zmniejszy się do 0, postać przestaje otrzymywać dalsze Rany, ale pada nieprzytomna na ziemię (stan: Utrata Przytomności). Postać ma 10% szans na śmierć z wykrwawienia w każdej rundzie za każdy poziom Krwawienia.  Dopóki wszystkie poziomy Krwawienia nie zostaną usunięte nie możesz odzyskać przytomności.',
    neutralization:
      'Jeżeli przy żucie wypadnie dublet, tracisz 1 poziom Krwawienia. 1 poziom Krwawienia może zostać usunięty dzięki udanemu Testowi Leczenia, a każdy PS pozwala usunąć jeden dodatkowy poziom Krwawienia za każdą wyleczoną Ranę.',
    consequences:
      'Po wyleczeniu wszystkich poziomów postać otrzymuje jeden poziom Zmęczenia.',
  },
  {
    name: 'Ogłuszenie',
    description:
      'Postać nie jest w stanie słyszeć. Testy wykorzystujące słuch -10. Wszyscy atakujący z flaki lub od tyłu zyskują premię +10 do trafienia (nie zwiększa się z Ogłuszeniem).',
    neutralization: ' Mija ono samoistnie - jeden poziom pod koniec rundy.',
    consequences: '',
  },
  {
    name: 'Oszołomienie',
    description:
      'Bohater nie może podejmować żadnych Akcji, może przemieszczać się o połowę wolniej. Może bronić się w Testach Przeciwstawnych, ale nie przy pomocy Języka (Magicznego). We wszystkich Testach -10. Każdy atakujący w walce wręcz zyskuje +1 przewagę przed rzutem.',
    neutralization:
      'Pod koniec każdej Rundy Wymagający (+0) Test Odporności. Udany zmniejsza o 1 poziom, każdy PS zmniejsza o dodatkowy.',
    consequences:
      'Po usunięciu wszystkich poziomów postać otrzymuje jeden poziom Zmęcenia, jeśli dotychczas nie miała żadnego.',
  },
  {
    name: 'Oślepienie',
    description:
      'Testy wykorzystujące wzrok obarczone karą -10. Ponadto wszyscy atakujący Oślepioną postać zyskują premię +10 do trafienia.',
    neutralization: 'Mija samoistnie - jeden poziom na koniec co drugiej Rundy.',
    consequences: '',
  },
  {
    name: 'Panika',
    description: 'W swojej Turze postać musi wykorzystać Ruch i Akcję, aby uciec jak najszybciej i jak najdalej, dopóki nie znajdzie kryjówki poza zasięgiem wzroku wroga, a nawet wtedy może korzystać z Ruchu i Akcji wyłącznie po to, aby ukryć się lepiej. Ponadto -10 do wszystkich Testów nie związanych z ucieczką lub ukrywaniem. ',
    neutralization: 'Jeżeli postać jest Związana Walką z przeciwnikiem, nie może wykonywać żadnych Tystów by się otrząsnąć. Jeżeli nie jest związana walką, to pod koniec każdej Rundy może wykonać Test Opanowania, by usunąć poziom Paniki, a każdy PS usuwa dodatkowy poziom. Trudność Testu zależna jest od okoliczności - czy jest ukryta i czy jest daleko od oprawcy. Dodatkowo spędzenie pełnej Rundy w ukryciu, poza zasięgiem wzroku wroga, usuwa 1 poziom Paniki.',
    consequences: 'Po usunięciu wszystkich poziomów Paniki postać otrzymuje jeden poziom Zmęczenia.',
  },
  {
    name: 'Pochwycenie',
    description: 'W swojej Turze postać nie może wykonać Ruchu, a wszystkie akcje podczas których musi się poruszać, są obarczone karą -10.',
    neutralization: 'W ramach swojej Akcji postać może usunąć 1 poziom Pochwycenia, jeżeli wygra Przeciwstawny Test Siły przeciwko oprawcy, a każdy PS pozwala usunąć 1 dodatkowy poziom.',
    consequences: '',
  },
  {
    name: 'Podpalenie',
    description: 'Pod koniec każdej Rundy postać otrzymuje 1k10 Ran pomniejszonych o BWt oraz PP na najgorzej chronionym miejscu, zawsze jest co najmniej 1 Rana. Każdy dodatkowy poziom podpalenia dodaje +1 do wyniku (3 poziom = 1k10 + 2).',
    neutralization: '1 poziom Podpalenia może zostać usunięty dzięki udanemu Testowi Atletyki, a każdy PS pozwala usunąć 1 dodatkowy poziom. Trudność tego Testu uzależniona jest od warunków.',
    consequences: '',
  },
  {
    name: 'Powalenie',
    description: 'W swojej Turze można wykorzystać Ruch jedynie po to, by wstać na nogi albo odczołgać się (m = połowa Szybkości). Jeżeli HP spadły do 0, postać może się tylko czołgać. Wszystkie Testy związane z poruszaniem się -20, a każdy atakujący postać w ręcz +20 do trafienia.',
    neutralization: 'Stan Powalenia nie ma poziomów, można go usunąć jedynie wstając na nogi.',
    consequences: '',
  },
  {
    name: 'Utrata Przytomności',
    description: 'Nie można zrobić nic w swojej Turze i nie zdajesz sobie sprawy z tego co dzieje się dookoła. Przy atakowaniu nieprzytomnego celu, postać może ustalić wynik rzutu tak, jakby wydała Punkt Bohatera na efekt Nie Zawiodę. Do decyzji MG - każdy atak może zabijać natychmiast, w brutalny sposób.',
    neutralization: 'Nie ma poziomów. Odzyskanie Zależy od sposobu w jaki postać utraciła przytomność. Jeżeli użyjesz Punktu Determinacji, stan ustępuje do końca Rundy (o ile nie zniknęła jego przyczyna).',
    consequences: 'Otrzymujesz Stan Powalenie i Zmęczenie.',
  },
  {
    name: 'Zaskoczenie',
    description: 'W swojej Turze nie możesz wykonać Akcji ani Ruchu. Nie możesz bronić się w Testach Przeciwstawnych. Każdy atakujący Zaskoczoną postać wręcz zyskuje premię +20 do trafienia.',
    neutralization: 'Nie ma poziomów, mija pod koniec Rundy lub po pierwszym ataku wyprowadzonym w stronę postaci.',
    consequences: '',
  },
  {
    name: 'Zatrucie',
    description: 'Zatrucie powoduje otrzymywanie 1 Rany pod koniec każdej Rundy niezależnie od innych modyfikatorów. Ponadto kara -10 do wszystkich Testów. Jeżeli Żywotność spadnie do 0, nie można leczyć Ran, dopóki Zatrucie nie zostanie usunięte. Jeżeli w wyniku Zatrucia otrzymasz Stan Utrata Przytomności, po BWt Rund wykonujesz Test Odporności. Jeżeli się nie powiedzie, postać umiera.',
    neutralization: 'Trudność usunięcia Zatrucia zależy od rodzaju trucizny. Pod koniec każdej Rundy Test Odporności, udany zmniejsza o 1 poziom + 1 poziom za każdy PS. Test Leczenia skutkuje tym samym.',
    consequences: 'Postać otrzymuje 1 poziom Zmęczenia.',
  },
  {
    name: 'Zmęczenie',
    description: 'Wszystkie Testy otrzymują karę -10.',
    neutralization: 'Aby usunąć Zmęcznie potrzebny jest wypoczynek, zaklęcie, lub boska interwencja, ale zmiana warunków powodujących stan również może zadziałać. (np. Zmęczenie od Obciążenia i pozbycie się balastu).',
    consequences: '',
  },
];
