import { Talent } from '../interfaces/features';

export const TALENTS: Talent[] = [
  {
    name: 'Aptekarz',
    max: 'Bonus z Inteligencji',
    tests: 'Rzemiosło (Aptekarstwo)',
    description:
      'Możesz odwracać kości nieudanych testów Rzemiosła (Aptekarstwo).',
  },
  {
    name: 'Arcydzieło',
    max: 'Brak',
    description:
      'Tworząc dzieło przy użyciu Sztuki lub Rzemiosła, MG może przyznać premie. Wartość dzieła: min. 10× cena zwykłego.',
  },
  {
    name: 'Artylerzysta',
    max: 'Bonus ze Zręczności',
    description:
      'Dodajesz PS równe liczbie wykupień do wydłużonych testów przeładowania broni prochowej.',
  },
  {
    name: 'Atak Wyprzedzający',
    max: 'Bonus z Inicjatywy',
    description:
      'Po udanym teście Inicjatywy (+0), możesz wykonać darmowy atak na szarżującego przeciwnika. Limit: 1 na przeciwnika, max tyle ile wykupień.',
  },
  {
    name: 'Atrakcyjny',
    max: 'Bonus z Ogłady',
    tests: 'Charyzma (wobec osób, którym się podobasz)',
    description:
      'Przy udanym teście Charyzmy możesz wybrać PS: normalnie lub wartość z kostki jedności.',
  },
  {
    name: 'Bardzo Silny',
    max: '1',
    description: 'Stałe +5 do Początkowej Siły (nie liczy się do Rozwinięć).',
  },
  {
    name: 'Bardzo Szybki',
    max: '1',
    description: 'Zwiększa Szybkość o +1.',
  },
  {
    name: 'Berserkerska Szarża',
    max: 'Bonus z Siły',
    tests: 'Broń Biała (w rundzie Szarży)',
    description:
      'Podczas Szarży zadajesz +1 obrażenie we wszystkich atakach wręcz za każde wykupienie tego talentu.',
  },
  {
    name: 'Biczownik',
    max: 'Bonus z Wytrzymałości',
    tests: 'Opieranie się Niszczycielskim Potęgom',
    description:
      'Codziennie spędzasz 30 min na biczowaniu, otrzymując obrażenia równe liczbie wykupień. Jeśli masz Szał Bojowy, możesz wpaść w niego bez testu. Jeśli przerwiesz rytuał lub zagoją się rany, tracisz możliwość wydawania Punktów Bohatera i Determinacji, dopóki nie wznowisz biczowania.',
  },
  {
    name: 'Bitewna Furia',
    max: 'Bonus z Siły Woli',
    tests: 'Broń Biała (w Szału Bojowym)',
    description:
      'Udany test Opanowania pozwala zakończyć Szał Bojowy na końcu rundy.',
  },
  {
    name: 'Bitewny Refleks',
    max: 'Bonus z Inicjatywy',
    description:
      'Za każde wykupienie otrzymujesz +10 do Inicjatywy przy jej ustalaniu.',
  },
  {
    name: 'Błękitna Krew',
    max: '1',
    tests: 'Testy zależne od Statusu',
    description:
      'Zawsze jesteś traktowany jak osoba z wyższych sfer (jeśli jesteś odpowiednio ubrany), chyba że rozmówca też ma ten Talent - wtedy porównuje się Status.',
  },
  {
    name: 'Błogosławieństwo (Boska Tradycja)',
    max: '1',
    description:
      'Możesz korzystać z błogosławieństw jednej wybranej boskiej tradycji (patrz Rozdz. 7).',
  },
  {
    name: 'Błyskawiczny Strzał',
    max: 'Bonus ze Zwinności',
    tests: 'Broń Zasięgowa (przy użyciu talentu)',
    description:
      'Pozwala oddać strzał z naładowanej broni przed wszystkimi innymi. Koszt: Akcja + Ruch z następnej tury. Kolejność rozstrzyga liczba wykupień (lub strzał równoczesny przy remisie).',
  },
  {
    name: 'Błyskotliwość',
    max: '1',
    description:
      'Stałe +5 do Początkowej Inteligencji (nie wlicza się do Rozwinięć).',
  },
  {
    name: 'Celny Strzał',
    max: 'Bonus z Umiejętności Strzeleckich',
    description:
      'Zadajesz +1 obrażenie przy użyciu broni strzeleckiej za każde wykupienie.',
  },
  {
    name: 'Charyzmatyczny',
    max: '1',
    description:
      'Stałe +5 do Początkowej Ogłady (nie wlicza się do Rozwinięć).',
  },
  {
    name: 'Chirurgia',
    max: 'Premia z Inteligencji',
    tests: 'Leczenie poza walką (operacja)',
    description:
      'Możesz przeprowadzać operacje wymagane przy niektórych Trafieniach Krytycznych. Operacja to wydłużony test Leczenia (+0), powoduje obrażenia i Krwawienie. Po operacji pacjent wykonuje test Odporności (+20) na infekcję.',
  },
  {
    name: 'Chodu!',
    max: 'Bonus ze Zwinności',
    tests: 'Atletyka (podczas Ucieczki)',
    description:
      'Podczas Ucieczki twoja Szybkość liczona jest jakby była o 1 wyższa.',
  },
  {
    name: 'Cień',
    max: 'Bonus ze Zwinności',
    tests: 'Wszystkie związane ze śledzeniem',
    description:
      'Podczas śledzenia wykonujesz tylko test Percepcji lub Skradania (wyższy wynik), bez testu łączonego (patrz str. 128).',
  },
  {
    name: 'Cios Mierzony',
    max: 'Bonus z Inicjatywy',
    description:
      'Możesz przesunąć Miejsce Trafienia o ±10 za każde wykupienie talentu.',
  },
  {
    name: 'Cios Poniżej Pasa',
    max: 'Bonus z Walki Wręcz',
    tests: 'Broń Biała (Bijatyka)',
    description:
      'Zadajesz +1 obrażenie za każde wykupienie, gdy używasz Bijatyki. W boksie uznawany za faul.',
  },
  {
    name: 'Czarownica!',
    max: 'Bonus z Siły Woli',
    description:
      'Zyskujesz Język (Magiczny) jako umiejętność klasową lub tańszą w rozwinięciu (−5 PD). Możesz wydać PB, by raz na wykupienie rzucić i poznać czar z dowolnej Tradycji Magii Tajemnej.',
  },
  {
    name: 'Człowiek Guma',
    max: 'Bonus ze Zwinności',
    tests: 'Kuglarstwo lub Zwinność (gdy liczy się gibkość)',
    description:
      'Możesz wyginać ciało nienaturalnie – przeciskasz się przez małe otwory itp., za zgodą MG i po udanym teście Zwinności.',
  },
  {
    name: 'Czujny',
    max: '1',
    description:
      'Stałe +5 do Początkowej Inicjatywy (nie wlicza się do Rozwinięć).',
  },
  {
    name: 'Czysta Dusza',
    max: 'Bonus z Siły Woli',
    description:
      'Możesz przyjąć dodatkowe punkty Zepsucia (do liczby wykupień) przed wykonaniem testu poddania się Zepsuciu.',
  },
  {
    name: 'Czytanie z Ruchu Warg',
    max: 'Bonus z Inicjatywy',
    tests: 'Percepcja (gdy obserwujesz usta rozmówcy)',
    description:
      'Możesz odczytywać wypowiedzi z ruchu warg po udanym teście Percepcji.',
  },
  {
    name: 'Czytanie/Pisanie',
    max: '1',
    description:
      'Potrafisz czytać i pisać we wszystkich językach, którymi się posługujesz.',
  },
  {
    name: 'Defraudant',
    max: 'Bonus z Inteligencji',
    tests: 'Inteligencja (Defraudacja)',
    description:
      'Możesz wykonać przeciwstawny test Inteligencji, by ukraść pieniądze od pracodawcy. Wysokość łupu i konsekwencje ustala MG.',
  },
  {
    name: 'Dobrze Przygotowany',
    max: 'Bonus z Inicjatywy',
    description:
      'Tyle razy na sesję, ile masz wykupień, możesz wyjąć drobny, typowy przedmiot z ekwipunku, o wadze 0. Musisz za niego zapłacić.',
  },
  {
    name: 'Doświadczony Wędrowiec (Wybrany Teren)',
    max: 'Bonus ze Zwinności',
    tests: 'Atletyka (podróż w terenie)',
    description:
      'Ignorujesz negatywne modyfikatory wynikające z trudności wybranego terenu (np. Lasy, Pustynie, Moczary).',
  },
  {
    name: 'Dwie Bronie',
    max: 'Bonus ze Zwinności',
    tests: 'Broń Biała lub Zasięgowa (podczas ataku dwiema broniami)',
    description:
      'Możesz zaatakować dwiema broniami w jednej Akcji. Jeśli pierwszy atak trafi, wykonujesz drugi. Do końca tury masz -10 do testów obrony.',
  },
  {
    name: 'Etykieta (Grupa Społeczna)',
    max: 'Bonus z Ogłady',
    tests: 'Charyzma lub Plotkowanie (Grupa Społeczna)',
    description:
      'Możesz wtopić się w wybraną grupę społeczną, jeśli jesteś odpowiednio ubrany i się tak zachowujesz. Bez tego talentu jesteś łatwo rozpoznawalny jako obcy.',
  },
  {
    name: 'Finta',
    max: 'Bonus z Walki Wręcz',
    tests: 'Broń Biała (Szermiercza)',
    description:
      'Możesz wykonać Przeciwstawny test, by zmylić przeciwnika. Przy kolejnym ataku na niego dodajesz PS z Finty do testu ataku.',
  },
  {
    name: 'Gadanina',
    max: 'Bonus z Ogłady',
    tests: 'Charyzma vs Inteligencja',
    description:
      'Przy udanym teście rozmówca otrzymuje Stan Oszołomienie. Talent działa raz na osobę na scenę.',
  },
  {
    name: 'Geniusz Arytmetyczny',
    max: 'Bonus z Inteligencji',
    tests: 'Wycena, Hazard',
    description:
      'Masz doskonały zmysł matematyczny. Możesz używać kalkulatora na sesji.',
  },
  {
    name: 'Gładkie Słówka',
    max: 'Bonus z Ogłady',
    tests: 'Charyzma (podczas kłamania)',
    description:
      'Rozmówcy nie mogą wykonywać testów Intuicji, by rozpoznać twoje kłamstwo.',
  },
  {
    name: 'Groźny',
    max: 'Bonus z Siły',
    tests: 'Zastraszanie',
    description: 'Dodajesz +PS równy liczbie wykupień do testów Zastraszania.',
  },
  {
    name: 'Hulaka',
    max: 'Bonus z Wytrzymałości',
    tests: 'Charyzma, Plotkowanie (na przyjęciach), Mocna Głowa',
    description:
      'Możesz odwrócić kości nieudanego testu Mocnej Głowy, jeśli nowy wynik będzie sukcesem.',
  },
  {
    name: 'Inspirujący',
    max: 'Bonus z Ogłady',
    tests: 'Dowodzenie (podczas wojny)',
    description:
      'Zwiększasz wpływ Dowodzenia w bitwach – liczba osób zależy od wykupień (patrz str. 120).',
  },
  {
    name: 'Intrygant',
    max: 'Bonus z Inteligencji',
    tests: 'Inteligencja (dotycząca intryg)',
    description:
      'Raz na sesję możesz zadać MG pytanie o sieć powiązań lub politykę. MG wykonuje ukryty test i przekazuje ci informacje zależne od PS.',
  },
  {
    name: 'Inwokacja (Boska Tradycja)',
    max: '1',
    tests: 'Brak',
    description:
      'Zyskujesz dostęp do jednego Cudu swojej boskiej tradycji. Kolejne cuda kosztują 100 PD × liczba znanych cudów. Nie możesz mieć Magii Prostej ani Tajemnej. Usunięcie talentu grozi gniewem boga (decyduje MG).',
  },
  {
    name: 'Krasomówstwo',
    max: 'Bonus z Ogłady',
    tests: 'Brak',
    description:
      'Przy testach Charyzmy podczas przemawiania do tłumu zyskujesz dodatkowe PS równe liczbie wykupień talentu.',
  },
  {
    name: 'Krzepki',
    max: 'Bonus z Wytrzymałości',
    tests: 'Brak',
    description:
      'Zmniejszasz otrzymywane obrażenia o 1 za każde wykupienie (min. 1 obrażenie).',
  },
  {
    name: 'Łapówkarz',
    max: 'Bonus z Ogłady',
    tests: 'Łapówkarstwo',
    description:
      'Obniża koszt łapówki o 10% za każde wykupienie (min. 10% podstawowej stawki).',
  },
  {
    name: 'Mag Bitewny',
    max: '1',
    tests: 'Brak',
    description:
      'Raz na turę możesz rzucić czar o poziomie 5 lub niższym jako Akcję Darmową. Nie możesz wtedy rzucić innego czaru w tej samej turze.',
  },
  {
    name: 'Magia Chaosu (Tradycja)',
    max: 'Liczba dostępnych czarów w danej tradycji',
    tests: 'Brak',
    description:
      'Zyskujesz 1 czar z wybranej tradycji Chaosu i 1 Punkt Zepsucia. Koszt: 100 PD za każdy czar. Możesz znać tylko jedną tradycję Chaosu.',
  },
  {
    name: 'Magia Prosta',
    max: '1',
    tests: 'Brak',
    description:
      'Zyskujesz dostęp do Magii Prostej. Liczba czarów: BSW. Koszt rośnie: BSWx1 = 50 PD, BSWx2 = 100 PD, itd.',
  },
  {
    name: 'Magia Tajemna',
    max: '1',
    tests: 'Brak',
    description:
      'Zyskujesz dostęp do jednej tradycji Magii Tajemnej. Koszt czarów: BIntx1 = 100 PD, x2 = 200 PD, x3 = 300 PD itd.',
  },
  {
    name: 'Majętny',
    max: 'Brak',
    tests: 'Brak',
    description: 'Zarabiasz +1 zk więcej za każde wykupienie tego talentu.',
  },
  {
    name: 'Mały',
    max: '1',
    tests: 'Brak',
    description:
      'Twoja postać jest mniejsza od przeciętnej. Szczegóły: str. 320.',
  },
  {
    name: 'Mistrz Charakteryzacji',
    max: 'Bonus z Ogłady',
    tests: 'Występy (Aktorstwo), gdy udajesz kogoś',
    description:
      'Możesz skutecznie udawać inne osoby, nawet bez specjalnych rekwizytów.',
  },
  {
    name: 'Mistrz Rzemiosła (Rzemiosło)',
    max: 'Bonus ze Zręczności',
    tests: 'Wydłużony test wybranego Rzemiosła',
    description:
      'Zmniejszasz wymaganą liczbę PS w testach Rzemiosła o liczbę wykupień tego talentu.',
  },
  {
    name: 'Mistrz Walki',
    max: 'Bonus ze Zwinności',
    tests: 'Brak',
    description:
      'Licząc przewagę liczebną, traktujesz się jako dodatkowy uczestnik walki (+1 za każde wykupienie). Działa tylko, gdy przeciwników jest więcej.',
  },
  {
    name: 'Mocne Plecy',
    max: 'Bonus z Siły',
    tests: 'Wiosłowanie, Pływanie',
    description:
      '+Wykupienia do PS w testach Przeciwstawnych Siły i +Wykupienia do Obciążenia.',
  },
  {
    name: 'Morderczy Atak',
    max: 'Bonus z Inicjatywy',
    tests: 'Brak',
    description:
      'Zwiększasz obrażenia Ran Krytycznych o liczbę wykupień talentu.',
  },
  {
    name: 'Mól Książkowy',
    max: 'Bonus z Inteligencji',
    tests: 'Badania Naukowe',
    description:
      'Możesz odwrócić kości nieudanego testu Badań, jeśli przyniesie to sukces.',
  },
  {
    name: 'Mówca',
    max: 'Bonus z Ogłady',
    tests: 'Brak',
    description:
      'Test Charyzmy pozwala ci przemówić do tłumu – liczba osób zależy od wykupień (np. 1:5 osób, 2:10, ..., 9:wszyscy).',
  },
  {
    name: 'Musztra',
    max: 'Bonus z Walki Wręcz',
    tests: 'Broń Biała (gdy jesteś obok sojusznika z tym talentem)',
    description:
      'Gdy tracisz Przewagę, możesz zachować 1 za każde wykupienie, jeśli stoisz obok innej postaci z Musztrą.',
  },
  {
    name: 'Na Cztery Łapy',
    max: 'Bonus ze Zwinności',
    tests: 'Atletyka (spadanie)',
    description:
      'Udany test Atletyki zmniejsza efekty upadku – wysokość spadku redukowana o 1 m + 1 m za każdy PS.',
  },
  {
    name: 'Naciągacz',
    max: 'Bonus z Ogłady',
    tests: 'Charyzma (Żebractwo)',
    description: 'Testy żebractwa wykonujesz co 30 minut zamiast co godzinę.',
  },
  {
    name: 'Naśladowca',
    max: 'Bonus z Inicjatywy',
    tests: 'Występy (Aktorstwo – akcent)',
    description:
      'Po 1 dniu osłuchania możesz naśladować akcent po udanym teście Inicjatywy (1 test na dzień).',
  },
  {
    name: 'Niegodny Uwagi',
    max: 'Bonus z Ogłady',
    tests: 'Skradanie (w zasięgu wzroku)',
    description:
      'Status wyższy nie daje Przewagi za trafienie ciebie. Możesz niezauważenie podsłuchiwać, jeśli wyglądasz zwyczajnie.',
  },
  {
    name: 'Nienawiść (Grupa)',
    max: 'Bonus z Siły Woli',
    tests: 'Siła Woli (Opór wobec grupy)',
    description:
      'Każde wykupienie wskazuje nową grupę, której nienawidzisz (np. Zielonoskórzy, Czarownice).',
  },
  {
    name: 'Nieubłagany',
    max: 'Bonus z Wytrzymałości',
    tests: 'Brak',
    description:
      'Możesz zignorować 1 ranę od Krwawienia za każde wykupienie tego talentu.',
  },
  {
    name: 'Nieugięty',
    max: 'Bonus ze Zwinności',
    tests: 'Brak',
    description:
      'Możesz zachować Przewagi przy Odwrocie (do liczby wykupień), nawet jeśli masz ich mniej niż przeciwnik.',
  },
  {
    name: 'Nieustraszony (typ wroga)',
    max: 'Bonus z Siły Woli',
    tests: 'Opanowanie (Strach, Groza, Zastraszanie)',
    description:
      'Udany test Opanowania (+20) ignoruje efekty Strachu, Grozy i Zastraszania od wybranej grupy przeciwników.',
  },
  {
    name: 'Niewzruszony',
    max: 'Bonus z Siły Woli',
    tests: 'Opanowanie (Panika)',
    description:
      'Musisz testować Opanowanie tylko po otrzymaniu obrażeń z broni prochowej, nie po samym ostrzale.',
  },
  {
    name: 'Niezwykle Odporny',
    max: '1',
    tests: 'Brak',
    description:
      'Stałe +5 do Początkowej Wytrzymałości (nie wlicza się do Rozwinięć).',
  },
  {
    name: 'Nos do Kłopotów',
    max: 'Bonus z Inicjatywy',
    tests: 'Intuicja',
    description:
      'Możesz wykonać test Intuicji, by rozpoznać potencjalne zagrożenie. Nie działa na ciebie Zaskoczenie, jeśli wróg zaatakuje.',
  },
  {
    name: 'Numizmatyka',
    max: 'Bonus z Inicjatywy',
    tests: 'Wycena (monety)',
    description:
      'Rozpoznajesz wartość monet bez testu. Prosty test Wyceny wykrywa fałszywki (nie jest przeciwstawny).',
  },
  {
    name: 'Obieżyświat',
    max: 'Bonus z Inteligencji',
    tests: 'Wiedza (Lokalna)',
    description:
      'Dodajesz Wiedzę (Lokalną) do profesji. Jeśli już ją masz – możesz dodać kolejną specjalizację. Rozwinięcia kosztują 5 PD mniej.',
  },
  {
    name: 'Oburęczność',
    max: '2',
    tests: 'Brak',
    description:
      'Zmniejsza karę do testów drugą ręką z -20 do -10. Przy drugim wykupieniu – brak kary.',
  },
  {
    name: 'Odporność na Magię',
    max: 'Bonus z Wytrzymałości',
    tests: 'Brak',
    description:
      'Obniżasz PS czarów rzuconych na ciebie o 2 za każde wykupienie. Nie możesz mieć talentów magicznych.',
  },
  {
    name: 'Odporność Psychiczna',
    max: 'Bonus z Siły Woli',
    tests: 'Brak',
    description:
      '+1 do maksymalnej puli Punktów Determinacji za każde wykupienie.',
  },
  {
    name: 'Odporny na (Zagrożenie)',
    max: 'Bonus z Wytrzymałości',
    tests: 'Testy oporu na dane zagrożenie',
    description:
      'Raz na sesję automatycznie zdajesz pierwszy test oporu przeciwko wybranemu zagrożeniu (np. Trucizna, Magia).',
  },
  {
    name: 'Odwrócenie Szans',
    max: 'Bonus z Walki Wręcz',
    tests: 'Broń Biała (obrona)',
    description:
      'Po wygranym przeciwstawnym teście Walki Wręcz możesz zabrać wszystkie Przewagi przeciwnikowi zamiast zadawać obrażenia.',
  },
  {
    name: 'Ogłuszenie',
    max: 'Bonus z Walki Wręcz',
    tests: 'Broń Biała (gdy ogłuszasz)',
    description:
      'Nie ponosisz kary za celowanie w głowę bronią Ogłuszającą. Broń improwizowana liczy się jako Ogłuszająca.',
  },
  {
    name: 'Oko Łowcy',
    max: 'Bonus z Inicjatywy',
    tests: 'Tropienie, polowanie',
    description:
      'Podczas podróży możesz wyżywić siebie i tylu towarzyszy, ile razy masz wykupiony talent – przy czasie i odpowiednim sprzęcie.',
  },
  {
    name: 'Percepcja Magiczna',
    max: 'Bonus z Inicjatywy',
    tests: 'Testy wykrywania magii',
    description: 'Możesz dostrzegać Wiatry Magii (patrz str. 233).',
  },
  {
    name: 'Pierwsza Pomoc',
    max: 'Bonus z Inteligencji',
    tests: 'Leczenie (w walce)',
    description:
      'Przy nieudanym Leczeniu możesz odwrócić kości, jeśli da to sukces (max +1 PS).',
  },
  {
    name: 'Pilot',
    max: 'Bonus z Inicjatywy',
    tests: 'Wiosłowanie, Żeglowanie (na nieznanych wodach)',
    description:
      'Możesz odwrócić kości nieudanego testu żeglugi, by uzyskać sukces (max +1 PS).',
  },
  {
    name: 'Pilot Rzeczny',
    max: 'Bonus z Inicjatywy',
    tests: 'Wiedza (rzeka)',
    description:
      'Testy żeglugi po rzece kończą się automatycznym sukcesem (chyba że trudność -10 lub gorzej). Z Wiedzą (Okolica) nie musisz testować w ogóle.',
  },
  {
    name: 'Poliglota',
    max: 'Bonus z Inteligencji',
    tests: 'Języki (wszystkie)',
    description:
      'Po miesiącu obcowania i udanym teście Inteligencji możesz uznać język za Umiejętność Podstawową.',
  },
  {
    name: 'Pomocny',
    max: 'Bonus z Ogłady',
    tests: 'Testy społeczne wobec wyższych statusowo',
    description:
      'Przy udanym teście możesz użyć cyfry jedności z rzutu jako PS (np. 46 → +6 PS).',
  },
  {
    name: 'Porywająca Gorliwość',
    max: 'Bonus z Ogłady',
    tests: 'Charyzma (przy przemowach o ważnych sprawach)',
    description:
      'Podwajasz Ogładę przy określaniu liczby osób pod wpływem talentu Mówca, gdy mówisz o swoich przekonaniach.',
  },
  {
    name: 'Posłuch u Zwierząt',
    max: 'Bonus z Siły Woli',
    tests: 'Oswajanie',
    description:
      'Zwierzęta (cecha: Zwierzę) łagodnieją w twojej obecności, o ile nie mają powodu do agresji.',
  },
  {
    name: 'Precyzyjne Inkantowanie',
    max: 'Bonus z Inicjatywy',
    tests: 'Język (Magiczny)',
    description:
      'Jeśli rzucisz dublet podczas udanego testu, nie dochodzi do manifestacji.',
  },
  {
    name: 'Prosto Między Oczy',
    max: '1',
    tests: 'Brak',
    description:
      'Zamiast odwracać kości, wybierasz Miejsce Trafienia przy użyciu broni zasięgowej.',
  },
  {
    name: 'Przekonujący',
    max: 'Bonus z Ogłady',
    tests: 'Charyzma (debata, spór)',
    description:
      'Po udanym teście Charyzmy możesz wybrać PS normalnie lub na podstawie cyfry jedności.',
  },
  {
    name: 'Przestępca',
    max: 'Brak',
    tests: 'Brak',
    description:
      'Zarabiasz więcej z Zajęcia Dochód (1: +2k10 mp, 2: +1k10 ss, 3: +2k10 ss, 4: +1 zk). Uważany jesteś za niższy Status, a straż cię obserwuje.',
  },
  {
    name: 'Przyrządzanie Mikstur',
    max: 'Bonus z Inteligencji',
    tests: 'Rzemiosło (Aptekarstwo)',
    description:
      'Raz na sesję możesz wykonać Zajęcie Wytwórstwa bez warsztatu.',
  },
  {
    name: 'Riposta',
    max: 'Bonus ze Zwinności',
    tests: 'Broń Biała (obrona)',
    description:
      'Broń z cechą Szybka pozwala ci kontratakować przy obronie. Liczba użyć = liczba wykupień.',
  },
  {
    name: 'Rozbrojenie',
    max: 'Bonus z Inicjatywy',
    tests: 'Broń Biała',
    description:
      'Przeciwstawny test pozwala wytrącić broń. Efekty zależne od liczby PS. Nie działa, jeśli wróg nie ma broni lub jest większy.',
  },
  {
    name: 'Rozpoznanie Artefaktu',
    max: 'Bonus z Inicjatywy',
    tests: 'Intuicja',
    description:
      'Dotykając przedmiot, wykonujesz test Intuicji – każdy PS ujawnia jedną zasadę magiczną. Tylko 1 test na przedmiot.',
  },
  {
    name: 'Rozproszenie Uwagi',
    max: 'Bonus ze Zwinności',
    tests: 'Atletyka vs Opanowanie',
    description:
      'Jeśli wygrasz test, przeciwnik nie może zdobywać Przewagi do końca następnej Rundy.',
  },
  {
    name: 'Ruchliwe dłonie',
    max: 'Bonus ze Zręczności',
    tests: 'Zwinne Palce, Broń Biała (Bijatyka – dotyk)',
    description:
      'Testy Zwinnych Palców nie są zauważane bez podejrzeń. Bijatyka (dotyk) z premią +10 za każde wykupienie.',
  },
  {
    name: 'Rybak',
    max: 'Bonus z Inicjatywy',
    tests: 'Związane z rybołówstwem',
    description:
      'Przy dostępie do zbiornika możesz wyżywić siebie i tylu towarzyszy, ile masz wykupień – za 1h dziennie.',
  },
  {
    name: 'Sekretna Tożsamość',
    max: 'Bonus z Inteligencji',
    tests: 'Występy (Aktorstwo)',
    description:
      'Masz alternatywną tożsamość z inną profesją i Statusem. Każde wykupienie pozwala na kolejną tożsamość.',
  },
  {
    name: 'Silne Nogi',
    max: 'Bonus z Siły',
    tests: 'Atletyka (skoki)',
    description: '+Wykupienia do PS testów Atletyki związanych ze skakaniem.',
  },
  {
    name: 'Silny Cios',
    max: 'Bonus z Siły',
    tests: 'Broń do Walki Wręcz',
    description: 'Zadajesz +1 obrażenie za każde wykupienie przy walce wręcz.',
  },
  {
    name: 'Skrócenie Dystansu',
    max: 'Bonus ze Zręczności',
    tests: 'Walka wręcz z przeciwnikiem z dłuższą bronią',
    description:
      'Ignorujesz karę za krótszą broń. +10 do trafienia przy walce kontaktowej (opcjonalnie).',
  },
  {
    name: 'Słuch Absolutny',
    max: 'Bonus z Inicjatywy',
    tests: 'Występy (Śpiew), Języki tonalne',
    description:
      'Dodajesz Występy (Śpiewanie) do profesji. Rozwinięcia kosztują o 5 PD mniej.',
  },
  {
    name: 'Snajper',
    max: '4',
    tests: 'Broń Strzelecka (daleki/very daleki zasięg)',
    description:
      'Brak kary za daleki zasięg. Bardzo daleki zasięg: tylko połowiczne modyfikatory.',
  },
  {
    name: 'Sprężynka',
    max: '1',
    tests: 'Atletyka',
    description:
      'Po Powaleniu możesz natychmiast wstać – test Atletyki z modyfikatorem zależnym od siły uderzenia.',
  },
  {
    name: 'Straszny',
    max: 'Bonus z Siły',
    tests: 'Brak',
    description:
      'Możesz wzbudzać Strach 1. Każde wykupienie +1 do poziomu Strachu.',
  },
  {
    name: 'Strzał Przebijający',
    max: 'Bonus z Inicjatywy',
    tests: 'Broń Zasięgowa',
    description: 'Ignorujesz liczbę punktów Pancerza równą liczbie wykupień.',
  },
  {
    name: 'Strzał w Dziesiątkę',
    max: '1',
    tests: 'Broń Strzelecka',
    description: 'Brak kary za rozmiar celu podczas strzelania.',
  },
  {
    name: 'Strzelec Wyborowy',
    max: '1',
    tests: 'Umiejętności Strzeleckie',
    description:
      '+5 do początkowej wartości Umiejętności Strzeleckich (nie liczy się do Rozwinięć).',
  },
  {
    name: 'Szał Bojowy',
    max: '1',
    tests: 'Brak',
    description: 'Możesz wpaść w Szał Bojowy (patrz str. 190).',
  },
  {
    name: 'Szczęście',
    max: 'Bonus z Ogłady',
    tests: 'Hazard, Zwinne Palce (gry karciane)',
    description:
      'Możesz użyć cyfry jedności jako PS. Przy grze w karty dobierasz dodatkowe karty = liczbie wykupień.',
  },
  {
    name: 'Szuler Kościany',
    max: 'Bonus z Inteligencji',
    tests: 'Hazard, Zwinne Palce (gry kościane)',
    description:
      'Możesz użyć cyfry jedności jako PS. Rzucasz dodatkowymi kośćmi = liczbie wykupień i wybierasz najlepsze.',
  },
  {
    name: 'Szybki Refleks',
    max: '1',
    tests: 'Brak',
    description: '+5 do początkowej Zwinności (nie liczy się do Rozwinięć).',
  },
  {
    name: 'Szybkie Czytanie',
    max: 'Bonus z Inteligencji',
    tests: 'Badania Naukowe, Język',
    description:
      'Możesz odwrócić kości testu, jeśli daje to sukces. W walce czytasz 1 + wykupienia + PS stron.',
  },
  {
    name: 'Szybkie Przeładowanie',
    max: 'Bonus ze Zręczności',
    tests: 'Przeładowanie',
    description:
      'Dodajesz +Wykupienia do PS testów przeładowania broni dystansowej.',
  },
  {
    name: 'Szybkobiegacz',
    max: 'Bonus z Siły',
    tests: 'Atletyka (Bieg)',
    description: 'Podczas Biegu twoja Szybkość jest o 1 wyższa.',
  },
  {
    name: 'Szycha',
    max: '1',
    tests: 'Brak',
    description: 'Nie tracisz Statusu z powodu talentu Przestępca.',
  },
  {
    name: 'Świetny Pływak',
    max: 'Bonus z Siły',
    tests: 'Pływanie',
    description:
      'Do czasu wstrzymania oddechu pod wodą dodajesz liczbę wykupień do Bonusu z Wytrzymałości.',
  },
  {
    name: 'Święta Nienawiść',
    max: 'Bonus z Ogłady',
    tests: 'Brak',
    description:
      'Zadajesz +1 obrażenie za każde wykupienie, gdy korzystasz z cudów.',
  },
  {
    name: 'Święte Wizje',
    max: 'Bonus z Inicjatywy',
    tests: 'Intuicja (na świętej ziemi)',
    description:
      'Rozpoznajesz świętą ziemię i możesz wykonać test Intuicji, by uzyskać wizję.',
  },
  {
    name: 'Talent Artystyczny',
    max: 'Bonus ze Zręczności',
    tests: 'Sztuka (Dowolna)',
    description:
      'Dodajesz Sztukę (Dowolną) do profesji. Rozwinięcia kosztują o 5 PD mniej.',
  },
  {
    name: 'Tarczownik',
    max: 'Bonus z Siły',
    tests: 'Brak',
    description:
      'Gdy bronisz się tarczą i przegrasz test, zyskujesz Przewagę równą liczbie wykupień.',
  },
  {
    name: 'Towarzyski',
    max: 'Bonus z Ogłady',
    tests: 'Plotkowanie (z wędrowcami)',
    description:
      'Możesz odwrócić kości nieudanego testu Plotkowania, jeśli przyniesie to sukces.',
  },
  {
    name: 'Tragarz',
    max: 'Bonus z Siły',
    tests: 'Siła (noszenie)',
    description: 'Zwiększasz Obciążenie o 2 × wykupienia.',
  },
  {
    name: 'Traper',
    max: 'Bonus z Inicjatywy',
    tests: 'Percepcja, Zastawianie Pułapek',
    description:
      'Możesz wykonać test Percepcji, by wykryć pułapki, nawet bez deklaracji.',
  },
  {
    name: 'Twardziel',
    max: 'Bonus z Wytrzymałości',
    tests: 'Brak',
    description:
      'Zwiększasz Żywotność o swój Bonus z Wytrzymałości. Zmienia się razem z Bonusem.',
  },
  {
    name: 'Ulicznik',
    max: 'Bonus z Inicjatywy',
    tests: 'Skradanie (Miasto)',
    description:
      'Przy nieudanym Skradaniu (Miasto) możesz odwrócić kości, jeśli da to sukces.',
  },
  {
    name: 'Urodzony w Siodle',
    max: 'Bonus ze Zwinności',
    tests: 'Jeździectwo (Konie – w walce)',
    description: 'Możesz wykonać Akcję wierzchowcem bez testu Jeździectwa.',
  },
  {
    name: 'Urodzony Wojownik',
    max: '1',
    tests: 'Brak',
    description:
      'Stałe +5 do początkowej Walki Wręcz (nie liczy się do Rozwinięć).',
  },
  {
    name: 'Urodzony Żeglarz',
    max: 'Bonus z Wytrzymałości',
    tests: 'Testy oporu wobec choroby morskiej',
    description:
      'Ignorujesz testy choroby morskiej przy spokojnym morzu. Podczas sztormów i działania magii nie ponosisz karnych modyfikatorów.',
  },
  {
    name: 'Waleczne Serce',
    max: 'Bonus z Siły Woli',
    tests: 'Opanowanie przeciwko Stanowi Panika',
    description:
      'Na koniec Tury i Rundy możesz wykonać Test Opanowania, by przełamać Stan Panika.',
  },
  {
    name: 'Walka w Ciasnocie',
    max: 'Bonus ze Zwinności',
    tests: 'Unik w ciasnych przestrzeniach',
    description:
      'Nie ponosisz kar do Broni Białej za ciasne otoczenie. Możesz unikać nawet przy braku miejsca.',
  },
  {
    name: 'Widzenie w Ciemności',
    max: 'Bonus z Inicjatywy',
    tests: 'Percepcja przy słabym świetle',
    description:
      'Widzisz wyraźnie w słabym świetle na +20 m za każde wykupienie talentu. Tyle samo zwiększa zasięg twojego postrzegania światła.',
  },
  {
    name: 'Wieża Pamięci',
    max: 'Bonus z Inteligencji',
    tests: 'Brak',
    description:
      'Możesz bez testu przywołać liczbę faktów równą Inteligencji. Dalsze grupy informacji (co każde 10) wymagają coraz trudniejszego Testu Inteligencji. Każde wykupienie pozwala przechować jedną dodatkową sekwencję.',
  },
  {
    name: 'Wilk Morski',
    max: 'Bonus ze Zwinności',
    tests: 'Żeglowanie (statki morskie)',
    description:
      'Ignorujesz kary pogodowe i kołysanie. Liczysz się za dwóch członków załogi.',
  },
  {
    name: 'Władcza Postura',
    max: 'Bonus z Ogłady',
    tests: 'Dowodzenie',
    description:
      'Postaci o niższym Statusie nie mogą oprzeć się Siłą Woli twojemu Dowodzeniu. Wrogowie są bardziej odporni.',
  },
  {
    name: 'Włóczykij',
    max: 'Bonus ze Zręczności',
    tests: 'Skradanie (wieś)',
    description:
      'Przeciwnicy nie wykonują biernych Testów Percepcji, gdy się skradasz na wsi – chyba że aktywnie cię wypatrują.',
  },
  {
    name: 'Wodniak',
    max: 'Bonus ze Zwinności',
    tests: 'Żeglarstwo (rzeka)',
    description:
      'Ignorujesz negatywne modyfikatory związane z warunkami na rzece. Liczysz się za dwóch członków załogi.',
  },
  {
    name: 'Woltyżerka',
    max: 'Bonus ze Zwinności',
    tests: 'Unik na koniu, Jeździectwo (Konie)',
    description:
      'Nie ponosisz kar do Uniku w siodle. Możesz poruszyć się na początku Rundy. Możesz wykonywać Kuglarstwo w siodle.',
  },
  {
    name: 'Wódz',
    max: 'Bonus z Ogłady',
    tests: 'Dowodzenie (bitwa)',
    description:
      'Sojusznicy, którzy cię widzą, w jednym Teście Siły Woli na Rundę zyskują dodatkowe PS równe liczbie wykupień talentu. Tylko jeden dowódca naraz.',
  },
  {
    name: 'Wróżba Losu',
    max: '1',
    tests: 'Brak',
    description:
      'Jeśli twoja postać umrze w sposób zgodny z przepowiednią, nowa postać otrzymuje połowę jej zdobytych PD.',
  },
  {
    name: 'Wstrzemięźliwy',
    max: 'Bonus z Wytrzymałości',
    tests: 'Odporność na głód',
    description:
      'Jedząc połowę racji, nie cierpisz kar. Testy głodu wykonujesz co 3 dni zamiast co 2.',
  },
  {
    name: 'Wściekły Atak',
    max: 'Bonus ze Zwinności',
    tests: 'Broń Biała (dodatkowe ataki)',
    description:
      'Raz na Rundę, po trafieniu w walce wręcz, możesz zużyć Przewagę lub Ruch (jeśli jeszcze go nie wykorzystałeś), by wykonać dodatkowy atak.',
  },
  {
    name: 'Wtargnięcie z Włamaniem',
    max: 'Bonus z Siły',
    tests: 'Broń Biała (niszczenie przedmiotów)',
    description:
      'Zadajesz +1 obrażeń za każde wykupienie talentu podczas niszczenia (np. drzwi, skrzyń).',
  },
  {
    name: 'Wyborny Wspinacz',
    max: 'Bonus z Siły',
    tests: 'Wspinaczka',
    description:
      'Ignorujesz negatywne modyfikatory do Wspinaczki wynikające z trudnego terenu.',
  },
  {
    name: 'Wyczucie Kierunku',
    max: 'Bonus z Inicjatywy',
    tests: 'Nawigacja',
    description:
      'Zawsze wiesz, gdzie jest północ, o ile masz dostęp do naturalnych wskazówek.',
  },
  {
    name: 'Wyczulony Zmysł',
    max: 'Bonus z Inicjatywy',
    tests: 'Percepcja (z użyciem wybranego zmysłu)',
    description:
      'Wybrany zmysł jest wyostrzony – możesz uzyskać dodatkowe informacje w teście Percepcji opartym na nim.',
  },
  {
    name: 'Wykrywanie Magii',
    max: 'Bonus z Inicjatywy',
    tests: 'Intuicja (czarodzieje)',
    description:
      'Możesz wykonać Przeciętny (+20) Test Intuicji, by wyczuć obecność magii u spotkanego czarodzieja. Zdumiewający (+6) Sukces pozwala określić jego najwyższą Specjalizację Splatania Magii.',
  },
  {
    name: 'Wytrwały',
    max: 'Bonus z Wytrzymałości',
    tests: 'Odporność, by wytrzymać trudności',
    description:
      'Podwajasz czas trwania działania udanych Testów Odporności przy wysiłku, trudnych warunkach i rytuałach.',
  },
  {
    name: 'Wytwórca',
    max: 'Bonus ze Zręczności',
    tests: 'Rzemiosło (Dowolne)',
    description:
      'Dodajesz wybrane Rzemiosło do Umiejętności Profesji. Jeśli już tam jest, rozwijasz je taniej o 5 PD.',
  },
  {
    name: 'Z Bata',
    max: 'Bonus ze Zręczności',
    tests: 'Powożenie lub Jeździectwo podczas Ucieczki lub Biegu',
    description:
      'Zwierzę pod twoją kontrolą zyskuje +1 do Szybkości, jeśli popędzisz je batem lub biczem.',
  },
  {
    name: 'Zabójca',
    max: '1',
    description:
      'Możesz użyć Wytrzymałości wroga zamiast własnej Siły przy określaniu obrażeń. Jeśli wróg jest większy, Trafienia Krytyczne mnożą obrażenia o różnicę w rozmiarze.',
  },
  {
    name: 'Zbicie Broni',
    max: 'Bonus z Walki Wręcz',
    tests: 'Broń Biała, by zbić broń',
    description:
      'Przed testem ataku możesz zadeklarować Zbicie Broni. Jeśli trafisz, przeciwnik traci -1 Przewagę +1 za każdy PS. Nie działa na nieuzbrojonych i większych od ciebie.',
  },
  {
    name: 'Zejście z Linii',
    max: 'Bonus ze Zwinności',
    tests: 'Unik, gdy używasz tego Talentu',
    description:
      'Jeśli wygrasz Test Uniku, możesz odsunąć się o 2 metry i nie jesteś związany walką. Przeciwnik nie może wykonać darmowego ataku.',
  },
  {
    name: 'Zimna krew',
    max: '1',
    description:
      'Zyskujesz +5 do początkowej Siły Woli, niezależnie od Rozwinięć.',
  },
  {
    name: 'Złota Rączka',
    max: 'Bonus ze Zręczności',
    tests: 'Rzemiosło, by naprawić uszkodzone przedmioty',
    description:
      'Traktujesz wszystkie niemagiczne Rzemiosła jako podstawowe, gdy naprawiasz przedmioty.',
  },
  {
    name: 'Zmysł Bitewny',
    max: 'Bonus z Inicjatywy',
    tests: 'Percepcja w trakcie walki',
    description:
      'Możesz wykonać Wymagający (+0) Test Percepcji, by nie zostać zaskoczonym. MG może modyfikować trudność.',
  },
  {
    name: 'Zmysł Magii',
    max: 'Bonus z Inicjatywy',
    tests: 'Splatanie Magii (Dowolny Wiatr Magii)',
    description:
      'Podczas udanego Testu Splatania Magii dublet nie wywołuje Manifestacji.',
  },
  {
    name: 'Znawca (Wiedza)',
    max: 'Bonus z Inteligencji',
    tests: 'Wiedza (wybrana dziedzina)',
    description:
      'Przytaczasz poprawne informacje bez testu, tyle razy ile wykupiłeś talent. Test Wiedzy daje dodatkowe informacje.',
  },
  {
    name: 'Zręczny',
    max: '1',
    description:
      'Zyskujesz +5 do początkowej Zręczności, niezależnie od Rozwinięć.',
  },
  {
    name: 'Żelazna Szczęka',
    max: 'Bonus z Wytrzymałości',
    tests: 'Odporność wykonywana przeciw Oszołomieniu',
    description:
      'Możesz wykonać Wymagający (+0) Test Wytrzymałości, by zignorować Oszołomienie. Każdy PS unika kolejnego Stanu.',
  },
  {
    name: 'Żelazna Wola',
    max: 'Bonus z Siły Woli',
    tests: 'Opanowanie przeciwstawiane Zastraszaniu',
    description:
      'Zastraszanie nie powoduje u ciebie Strachu ani nie ucisza cię w debacie.',
  },
  {
    name: 'Żyłka Handlowa',
    max: 'Bonus z Ogłady',
    tests: 'Targowanie',
    description:
      'Obniżasz lub podwyższasz cenę o dodatkowe 10% podczas testu Targowania.',
  },
];
