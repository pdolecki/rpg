import { Talent } from "../interfaces/features";

export const TALENTS: Talent[] = [
  {
    name: 'Aptekarz',
    max: 'Bonus z Inteligencji',
    tests: 'Rzemiosło (Aptekarstwo)',
    description:
      'Jesteś świetnym aptekarzem i lepiej od innych wyrabiasz pigułki, maści, smarowidła, olejki, kremy i im podobne. Możesz odwrócić kolejność kości nieudanego Testu Rzemiosła (Aptekarstwa), jeśli nowy wynik pozwoli ci odnieść sukces',
  },
  {
    name: 'Arcydzieło',
    max: 'Brak',
    description:
      'Za każdym razem, gdy wykupujesz ten Talent, tworzysz niezwyłe dzieło (Umiejętność Sztuka lub Rzemiosło).. GM określa premie, które ci za to przysługują. (Zwykle wpływają one na Testy Ogłady w kontaktach z osobami podziwiającymi sztukę). Sprzedaż dzieła powinna dać co najmniej dziesięciokrotną wartość ceny zwykłej - czasami nawet więcej.',
  },
  {
    name: 'Artylerzysta',
    max: 'Bonus ze Zręczności',
    description:
      'Dodaj PS równe liczbie wykupień tego Talentu do każdego wydłużonego Testu związanego z przeładowaniem broni prochowej.',
  },
  {
    name: 'Atak Wyprzedzający',
    max: 'Bonus z Inicjatywy',
    description:
      'Kiedy wróg na ciebie Szarżuje, wykonaj udany Wymagający (+0)Test Inicjatywy, by wykonać Darmowy Atak poza normalną kolejnością Rundy. Możesz wykonać tyle Ataków Wyprzedzających w Rundzie, ile razy wykupiłeś ten Talent (tylko raz na każdego szarżującego).',
  },
  {
    name: 'Atrakcyjny',
    max: 'Bonus z Ogłady',
    tests: 'Charyzma, by wpłynąć na tych, którym się podobasz.',
    description:
      'Do udanych Testów Charyzmy wobec osób, którym się podobasz, możesz obliczyć PS normalnie albo uzyskać ich tyle ile wypadło na kostce jedności.',
  },
  {
    name: 'Bardzo Silny',
    max: '1',
    description:
      'Twoja pocztkowa Siła zostaje na stałe podniesiona o +5, co nie liczy się do sumy twoich Rozwinięć.',
  },
  {
    name: 'Bardzo Szybki',
    max: '1',
    description: 'Twoja szybkość zwiększa się o +1.',
  },
  {
    name: 'Berserkerska Szarża',
    max: 'Bonus z Siły',
    tests: 'Broń Biała w Rundzie, w której Szarżowałeś.',
    description:
      'Kiedy Szarżujesz, zadajesz +1 punkt obrażeń we wszystkich atakach Walki Wręcz za każde wykupienie tego Talentu.',
  },
  {
    name: 'Biczownik',
    max: 'Bonus z Wytrzymałości',
    tests: 'Opieranie się Niszczycielskim Potęgom.',
    description:
      'Każdego dnia musisz spędzić pół godziny na modlitwie otrzymując obrażenia na poziomie wykupień tego Talentu. Jeżeli posiadasz Talent Szał Bojowy, to do położenia się na najbliższy spoczynek możesz natychmiast wpaść w Szał Bojowy bez wykonywania Testów. Szał Bojowy zostanie dodany do listy Talentów twojej bieżącej Profesji - jeżeli zaniedbasz Biczowanie przez 1 dzień lub pozwolisz żeby poszarpana skóra została uleczona, nie będziesz mógł wydawać Punktów Bohatera ani Determinacji, póki znów się nie wybiczujesz.',
  },
  {
    name: 'Bitewna Furia',
    max: 'Bonus z Siły Woli',
    tests: 'Broń Biała pod wpływem Szału Bojowego',
    description:
      'Jesteś w stanie lepiej kontrolować swój Szał Bojowy. Udany Test Opanowania pozwala ci otrząsnąć się z niego na końcu rundy.',
  },
  {
    name: 'Bitewny Refleks',
    max: 'Bonus z Inicjatywy',
    description:
      'Reagujesz szybko jak błyskawica, dlatego za każde wykupienie tego Talentu otrzymujesz +10 do Inicjatywy, gdy określana jest kolejność Inicjatywy.',
  },
  {
    name: 'Błękitna Krew',
    max: '1',
    tests: 'Wszystkie Testy, na które wpływa twój Status',
    description:
      'Albo urodziłeś się w rodzinie szlacheckiej, albo zostałeś wywyższony już podczas gry. Jeśli jesteś odpowiednio ubrany, inni zawsze traktują cię jak kogoś ze sfer wyższych niż ich, chyba że ktoś z nich także posiada ten Talent. Wtedy normalnie porównuje się Status.',
  },
  {
    name: 'Błogosławieństwo (Boska Tradycja)',
    max: '1',
    description:
      'Któryś z bogów czuwa nad tobą i odpowiada na twoje proste modlitwy. Możesz wykorzystywać błogosławieństwa swojego pana, co opisano w Rozdziale 7: Religie i wierzenia. Normalnie możesz znać tylko jedną boską tradycję na Talent Błogosławieństwo.',
  },
  {
    name: 'Błyskawiczny Strzał',
    max: 'Bonus ze Zwinności',
    tests: 'Broń Zasięgowa, gdy wykorzystujesz Talent Błyskawiczny Strzał',
    description:
      'Jeśli posiadasz naładowaną broń dystansową, możesz z niej wystrzelić poza Kolejnością Inicjatywy, zanim zareaguje którykolwiek z uczestników walki. Rzut na trafienie wykonaj z uwzględnieniem wszystkich modyfikatorów. Użycie tego Talentu wymaga poświęcenia zarówno Akcji, jak i Ruchu z nadchodzącej Tury i kiedy nadejdzie twoja kolej, będą one traktowane jako wykorzystane. Jeśli ten Talent chcą wykorzystać dwie lub więcej postaci, pierwsza strzela ta, która wykupiła go więcej razy. Jeśli i na tym polu mamy remis, obydwie postacie strzelają równocześnie i wynik ich ataków powinien być rozliczony jednocześnie.',
  },
  {
    name: 'Błyskotliwość',
    max: '1',
    description:
      'Twoja początkowa Inteligencja zostaje zwiększona o +5, co nie liczy się do twojej sumy Rozwinięć.',
  },
  {
    name: 'Celny Strzał',
    max: 'Bonus z Umiejętności Strzeleckich',
    description:
      'Jesteś strzelcem wyborowym i wiesz, gdzie posłać pocisk, by poczynić największe szkody. Używając broni strzeleckich, zadajesz dodatkowe obrażenia, równe liczbie wykupień tego Talentu.',
  },
  {
    name: 'Charyzmatyczny',
    max: '1',
    description:
      'Twoja początkowa Ogłada zwiększa się na stałe o +5 (co nie wlicza się do sumy Rozwinięć postaci).',
  },
  {
    name: 'Chirurgia',
    max: 'Premia z Inteligencji',
    tests: 'Leczenie poza walką, czyli kiedy możesz właściwie zająć się rannym',
    description:
      'Lata nauki trudnego rzemiosła chirurga pozwalają ci dokonywać cudu operacji, zabiegu niezbędnego przy leczeniu najgroźniejszych obrażeń. W opisie wybranych Trafień Krytycznych znajdziecie informację, że wymagają one interwencji chirurga. Właśnie ty jesteś w stanie im zaradzić. Operacja to Wydłużony Wymagający (+0) Test Leczenia. Liczba wymaganych PS jest ustalana przez MG, ale zwykle to 5-10. Podczas procedury zadajesz pacjentowi 1k10 obrażeń i nakładasz na niego Stan Krwawienie za każdym razem, gdy wykonujesz Test. To oznacza, że chory może umrzeć, a szansa na to jest wysoka. Po operacji pacjent musi wykonać Przeciętny (+20) Test Odporności, a jego niepowodzenie oznacza drobną infekcję.',
  },
  {
    name: 'Chodu!',
    max: 'Bonus ze Zwinności',
    tests: 'Atletyka, gdy Uciekasz',
    description:
      'Kiedy na szali znajduje się twoje życie, potrafisz niezwykle sprawnie przebierać nogami. Podczas Ucieczki twoja Szybkość jest traktowana, jakby była o 1 wyższa.',
  },
  {
    name: 'Cień',
    max: 'Bonus ze Zwinności',
    tests: 'Wszystkie związane ze śledzeniem',
    description:
      'Wiesz, jak podążać za innymi, by nie zostać na tym przyłapanym. Możesz wykorzystywać zasady śledzenia ze strony 128 bez konieczności wykonywania Testu Łączonego. Wystarczy, że wykonasz rzut na Percepcję lub Skradanie, zależnie od tego, która wartość jest wyższa.',
  },
  {
    name: 'Cios Mierzony',
    max: 'Bonus z Inicjatywy',
    description:
      'Czy w walce wręcz, czy strzelając, umiesz trafiać tam, gdzie najbardziej zaboli. Możesz zmodyfikować Miejsce Trafienia +/-10 za każde wykupienie tego Talentu. Na przykład, jeśli kupiłeś go dwa razy, a wynik 34 wskazuje na prawe ramię, to możesz zmniejszyć go do 14 i trafić w lewe ramię lub zwiększyć do 54 i ugodzić w korpus.',
  },
  {
    name: 'Cios Poniżej Pasa',
    max: 'Bonus z Walki Wręcz',
    tests: 'Broń Biała (Bijatyka)',
    description:
      'Nauczyłeś się brudnych sztuczek, stosowanych podczas walki bez broni. Zadajesz +1 punkt obrażeń za każde wykupienie tego Talentu, gdy trafisz przeciwnika, używając Umiejętności Broń Biała (Bijatyka). Uwaga: wykorzystanie tego Talentu w pojedynku bokserskim jest uważane za oszustwo.',
  },
  {
    name: 'Czarownica!',
    max: 'Bonus z Siły Woli',
    description:
      'Sama z siebie nauczyłaś się, jak rzucać czary, często robiąc to metodą prób i błędów. Dodaj Język (Magiczny) do listy Umiejętności każdej bieżącej Profesji. Jeśli się już na niej znajduje, każde Rozwinięcie tej Umiejętności kosztuje cię o 5 PD mniej. Co więcej, możesz w dowolnym momencie wydać Punkt Bohatera, by Twoja postać mogła rzucić wybrane przez ciebie zaklęcie z dowolnej Tradycji Magii Tajemnej. Zostaje ono dodane do listy znanych postaci czarów. Możesz tak uczynić tyle razy, ile razy masz wykupiony ten Talent.',
  },
  {
    name: 'Człowiek Guma',
    max: 'Bonus ze Zwinności',
    tests:
      'Kuglarstwo lub Testy Zwinności w sytuacji, gdy przydaje się gibkość',
    description:
      'Jesteś w stanie wyginać swoje ciało i manipulować nim na sposoby, które zdają się przeczyć naturze. Dzięki temu możesz przeciskać się przez niewielkie otwory lub zmuszać kończyny do nieprawdopodobnych rzeczy. Granice tego wyznacza MG i udany Test Zwinności.',
  },
  {
    name: 'Czujny',
    max: '1',
    description:
      'Swoją początkową Inicjatywę zwiększasz na stałe o +5, co nie liczy się do sumy Rozwinięć twojej postaci.',
  },
  {
    name: 'Czysta Dusza',
    max: 'Bonus z Siły Woli',
    description:
      'Twoja dusza jest nieskalana i odporna na zakusy Chaosu. Zanim będziesz musiał wykonać Test poddania się Zepsuciu, możesz przyjąć dodatkowe jego Punkty w liczbie równej liczbie wykupień tego Talentu.',
  },
  {
    name: 'Czytanie z Ruchu Warg',
    max: 'Bonus z Inicjatywy',
    tests: 'Testy Percepcji związane z wykorzystaniem tego Talentu',
    description:
      'Patrząc na usta innych, potrafisz dowiedzieć się, co mówią. Jeśli możesz bez przeszkód obserwować dolną część twarzy istoty, wolno ci wykonać Test Percepcji, by zrozumieć, co mówi.',
  },
  {
    name: 'Czytanie/Pisanie',
    max: '1',
    description:
      'Jesteś jednym z nielicznych piśmiennych Staroświatowców. Potrafisz czytać i pisać (o ile to możliwe) w każdym języku, którym umiesz się posługiwać.',
  },
  {
    name: 'Defraudant',
    max: 'Bonus z Inteligencji',
    tests: 'Inteligencja (Defraudacja)',
    description:
      'Potrafisz podprowadzać pieniądze swoich pryncypałów tak, by tego nie odkryli. Kiedy pozyskujesz dochód podczas zarabiania, możesz wykonać Przeciwstawny Test Inteligencji przeciwko swojemu pracodawcy (jeśli masz takowego). Jeżeli wygrasz, niepostrzeżenie podprowadzasz 2k10 + PS miedzianych pensów, 1k10 + PS srebrnych szylingów lub 1 + PS złotych koron (w zależności od wysokości obrotów, co jest w gestii MG). Jeśli twój pracodawca wygra o +6 PS, zgarniasz pieniądze, ale zostajesz nakryty. Konsekwencje zależą od MG. Inne wyniki oznaczają, że nie udało ci się zrobić defraudacji i nie ukradłeś żadnych pieniędzy.',
  },
  {
    name: 'Dobrze Przygotowany',
    max: 'Bonus z Inicjatywy',
    description:
      'Dobrze przewidujesz, czego będą potrzebować inni i co przyda się tobie. Tyle razy na sesję, ile razy wykupiłeś ten Talent, możesz wyciągnąć z plecaka lub sakwy niezbędny przedmiot, jeśli jego ciężar w punktach obciążenia wynosi 0, mógł zostać niedawno kupiony i jego posiadanie nie jest czymś niezwykłym. Może to być butelka spirytusu, potrzebna do polania rany kompana, lub gwizdek, którego zabrakło występującemu cyrkowcowi. Kiedy użyjesz tego Talentu, odlicz pieniądze za przedmiot, pokazując tym, że wcześniej go kupiłeś.',
  },
  {
    name: 'Doświadczony Wędrowiec (Wybrany Teren)',
    max: 'Bonus ze Zwinności',
    tests: 'Atletyki podczas podróży w terenie',
    description:
      'Masz doświadczenie w wędrówce przez dzicz i potrafisz dobrze wybierać drogę. Nie działają na ciebie negatywne modyfikatory wynikające z wpływu wybranego terenu. Oto lista przykładów: Lasy, Pustynie, Moczary, Teren Kamienisty, Tundra, Wybrzeża.',
  },
  {
    name: 'Dwie Bronie',
    max: 'Bonus ze Zwinności',
    tests: 'Broń Biała lub Zasięgowa, kiedy atakujesz dwoma sztukami oręża',
    description:
      'Kiedy jesteś uzbrojony w dwie bronie, podczas swojej Akcji możesz zaatakować obydwiema naraz. Najpierw wykonaj Test trafienia dla broni, którą trzymasz w wiodącej ręce, a jeśli trafisz, określ normalnie obrażenia. Skoro pierwszy atak się udał i zostały zadane obrażenia, możesz użyć drugiej broni, by uderzyć jeszcze raz. Pierwszy atak zakończony Trafieniem Krytycznym pozwala na wykorzystanie wyniku rzutu w Tabeli Trafień Krytycznych do określenia, czy drugi atak trafił, czy nie. Jeśli atakujesz obydwiema broniami, twoje rzuty na obronę obarczone są modyfikatorem -10 do końca twojej następnej Tury.',
  },
  {
    name: 'Etykieta (Grupa Społeczna)',
    max: 'Bonus z Ogłady',
    tests: 'Charyzma lub Plotkowanie (Grupa Społeczna)',
    description:
      'Dopóki jesteś odpowiednio ubrany i zachowujesz się należycie, potrafisz wtopić się w tłum wybranej grupy społecznej. Oto przykłady kilku z nich: Członkowie Gildii lub Cechu, Kultyści, Przestępcy, Służba, Szlachta, Uczeni, Żołnierze. Jeśli nie posiadasz tego Talentu, ci, którzy go mają, łatwo zauważą, że nie pasujesz do obcego środowiska. Widać to w zachowaniu bohatera. To oczywiście zależy od odgrywania, ale MG może wprowadzić tu odpowiedni modyfikator do Testów Ogłady.',
  },
  {
    name: 'Finta',
    max: 'Bonus z Walki Wręcz',
    tests: 'Broń Biała (Szermiercza) podczas Finty',
    description:
      'Pilnie ćwiczyłeś pozorowane ataki w zwarciu, by zmylić przeciwnika. W ramach swojej Akcji możesz wykonać fintę przeciwko uzbrojonemu przeciwnikowi. O jej powodzeniu rozstrzyga Przeciwstawny Test Broni Białej (Szermierczej) przeciw Broni Białej wroga. Jeśli go wygrasz i przed końcem następnej rundy zaatakujesz tego samego przeciwnika, możesz dodać PS z finty do swojego Testu ataku.',
  },
  {
    name: 'Gadanina',
    max: 'Bonus z Ogłady',
    tests: 'Charyzma, by kogoś zagadać',
    description:
      'W Nordlandzie mówi się, że otwierasz usta, a kiszki przez ciebie przemawiają, w Ostlandzie zaś, że pleciesz bzdury. Gadanina to wylewanie strumienia słów lub niepotrzebne i kwieciste rozwodzenie się nad sprawami trywialnymi lub wręcz pozbawionymi sensu, by wprowadzić rozmówcę w zdumienie i zakłopotanie. Do Gadaniny wykorzystujesz Umiejętność Charyzma w Teście Przeciwstawnym z Inteligencją. Sukces oznacza, że twój rozmówca znajduje się w Stanie Oszołomienie. Każdy poziom Gadaniny sprawia, że cel otrzymuje Stan kolejny raz. Taka osoba bądź istota stoi oniemiała, próbując zrozumieć, o czym mówisz i czego chcesz. Kiedy zagadany osobnik otrząśnie się z oszołomienia i zrozumie, co się działo, może nie być szczęśliwy z tego, jak go zmieszałeś. Ostatecznie zawracałeś mu głowę głupotami. Kiedy przestaniesz nawijać, cel natychmiast otrząśnie się ze Stanu Oszołomienie spowodowanego Gadanią. Tego Talentu możesz używać tylko raz na danej osobie podczas jednej sceny (a nawet jeszcze rzadziej, jeśli MG tak uzna). Może zdarzyć się tak, że ten sam człowiek drugi raz na twoje paplanie nie da się już nabrać.',
  },
  {
    name: 'Geniusz Arytmetyczny',
    max: 'Bonus z Inteligencji',
    tests: 'Wycena, Hazard',
    description:
      'Masz dar do cyferek i z łatwością potrafisz rozwiązywać problemy matematyczne. Na sesji wolno używać ci kalkulatora, by pokazać geniusz swojej postaci (chyba że go nie potrzebujesz i liczysz w pamięci).',
  },
  {
    name: 'Gładkie Słówka',
    max: 'Bonus z Ogłady',
    tests: 'Charyzma podczas kłamania',
    description:
      'Jak Ranald Podstępny, potrafisz tak przeplatać prawdę z kłamstwem, że nie można odróżnić jednego od drugiego. Gdy wykorzystujesz Charyzmę do kłamania, twoi rozmówcy nie mogą wykonywać Przeciwnego Testu Intuicji, by sprawdzić, czy przypadkiem ich nie okłamujesz.',
  },
  {
    name: 'Groźny',
    max: 'Bonus z Siły',
    tests: 'Zastraszanie',
    description:
      'Twoja postura i wygląd budzą obawę. Kiedy wykonujesz Test Zastraszania, uzyskujesz dodatkowe PS równe liczbie wykupień tego Talentu.',
  },
  {
    name: 'Hulaka',
    max: 'Bonus z Wytrzymałości',
    tests: 'Charyzma i Plotkowanie podczas przyjęć, Mocna Głowa',
    description:
      'Wiesz, jak pić i jak dobrze się bawić. Możesz zamienić kostki nieudanego Testu Mocnej Głowy, jeśli nowy wynik będzie sukcesem.',
  },
  {
    name: 'Inspirujący',
    max: 'Bonus z Ogłady',
    tests: 'Dowodzenie podczas wojny',
    description:
      'Twoje słowa i zachęty mogą przechylić szalę zwycięstwa w bitwie. Poniższa tabela pokazuje, ile osób ulegnie wpływowi Dowodzenia (patrz strona 120) podczas wojny.',
  },
  {
    name: 'Intrygant',
    max: 'Bonus z Inteligencji',
    tests: 'Inteligencji dotyczące tego Talentu',
    description:
      'Jesteś mistrzem intryg i za każdym rogiem węszysz spiski. Raz na sesję możesz zadać MG pytanie o sytuację polityczną i zagmatwaną sieć powiązań, a on wykona w tajemnicy Test Inteligencji i przekaże ci pewną ilość informacji, zależną od liczby PS uzyskanych dzięki rzutowi.',
  },
  {
    name: 'Inwokacja (Boska Tradycja)',
    max: '1',
    tests: 'Brak',
    description:
      'Zostałeś pobłogosławiony przez swego boskiego patrona, dzięki czemu zyskujesz zdolność czynienia jednego z jego Cudów. Możesz wykupywać kolejne cuda za 100 PD pomnożone przez liczbę obecnie znanych cudów. Pełne zasady tego, jak się ich uczysz, znajdują się w Rozdziale 7: Religie i wierzenia. W normalnych okolicznościach nie możesz wykupić tego Talentu więcej niż jeden raz. Co więcej, nie możesz też kupić Talentów Magia Prosta i Magia Tajemna, jeśli posiadasz Talent Inwokacja. Po wydaniu 100 PD możesz się pozbyć tego Talentu, ale natychmiast utracisz dostęp do wszystkich zapewnianych przez niego cudów. Narażasz się też na gniew swego boga, a MG obmyśli, jak będzie się on przejawiał.',
  },
  {
    name: 'Krasomówstwo',
    max: 'Bonus z Ogłady',
    tests: 'Brak',
    description:
      'Wiesz, jak porwać tłum. Kiedy wykonujesz Test Charyzmy podczas przemawiania do tłumu, otrzymujesz premię w wysokości tylu PS, ile razy wykupiłeś ten Talent.',
  },
  {
    name: 'Krzepki',
    max: 'Bonus z Wytrzymałości',
    tests: 'Brak',
    description:
      'Jesteś twardy jak skała i rany nie robią na tobie wrażenia. Zmniejszasz otrzymywane obrażenia o 1 za każde wykupienie tego Talentu. Zasada ta działa nawet wtedy, gdy nie mógłbyś pomniejszyć otrzymanych ran. Nie możesz w ten sposób zredukować obrażeń poniżej 1 punktu.',
  },
  {
    name: 'Łapówkarz',
    max: 'Bonus z Ogłady',
    tests: 'Łapówkarstwo',
    description:
      'Wiesz, jak dawać w łapę. MG powinien obniżyć podstawę wyliczenia łapówki o 10% za każde wykupienie tego Talentu. Minimalna wartość łapówki nie może spaść poniżej 10% wyjściowej stawki.',
  },
  {
    name: 'Mag Bitewny',
    max: '1',
    tests: 'Brak',
    description:
      'Zostałeś wyszkolony w rzucaniu czarów podczas bitwy. W swojej Turze możesz rzucić jeden czar o Poziomie Zaklęcia 5 lub niższym w Akcji Darmowej (Test wykonujesz normalnie). Nie używasz zaatem pełnej Akcji i możesz ją wykorzystać w dowolny sposób. Jednak w tej Turze nie możesz już rzucić kolejnego czaru.',
  },
  {
    name: 'Magia Chaosu (Tradycja)',
    max: 'Liczba dostępnych czarów w wybranej tradycji magii Chaosu.',
    tests: 'Brak',
    description:
      'Przez przypadek (lub wręcz przeciwnie) część twojej duszy przypadła jednemu z Mrocznych Bogów i jesteś w stanie korzystać z wszetecznje magii Chaosu. Twój złowrogi patron zapewnia ci dostęp do jednego czaru z wybranej tradycji (najczęściej Nurgla, Slaanesha lub Tzeentcha), a wraz z nim otrzymujesz Punkt Zepsucia, gdy bluźniercza formuła wypala się w twoim umyśle, byś nigdy jej nie zapomniał. Za każdym razem, gdy wykupujesz ten Talent, musisz zapłacić za niego 100 PD, a więc jest inaczej niż w przypadku innych tradycji. W zamian za to otrzymujesz czar z wybranej tradycji i 1 Punkt Zepsucia. Więcej informacji na temat czarów znajduje się w Rozdziale 8: Magia. W normalnych warunkach możesz znać tylko jedną tradycję magii Chaosu.',
  },
  {
    name: 'Magia Prosta',
    max: '1',
    tests: 'Brak',
    description:
      'Zawsze miałeś smykałkę do rzucania czarów i opanowałeś metody ich podstawowej kontroli. Kiedy wykupujesz ten Talent, uczysz się i zapamiętujesz tyle czarów, ile wynosi modyfikator z twojej Siły Woli. Koszty dla liczby czarów: BSWx1 - 50PD, BSWx2, 100PD, BSWx3 150PD etc. Jeśli BSW wynosi 3 i znasz 3 zaklęcia Magii Prostej, to pierwsze wykupywane zaklęcie kosztuje 50PD, kolejne trzy 100PD itd.',
  },
  {
    name: 'Magia Tajemna',
    max: '1',
    tests: 'Brak',
    description:
      'Studiowałeś jedną z ośmiu tradycji magii: Cienia, Metalu, Niebios, Ognia, Śmierci, Światła, Zwierząt lub Życia albo praktykujesz którąś z mniej znanych: Guślarstwa czy Nekromancji. Możesz zapamiętywać czary ze swojej wybranej tradycji, płacąc za nie: BSIntx1 100PD, BSIx2 200PD, BSIx3 300PD etc. Jeśli BInt jest równy 4 to pierwsze 5 zaklęć kosztuje cię 100PD, kolejne 4 już 200PD itd.',
  },
  {
    name: 'Majętny',
    max: 'Brak',
    tests: 'Brak',
    description:
      'Jesteś bajecznie bogaty i rzadko kiedy brakuje ci pieniędzy. Kiedy zarabiasz (włączając w to Zajęcie Dochód), zarabiasz +1 złotą koronę więcej za każdy poziom tego Talentu.',
  },
  {
    name: 'Mały',
    max: '1',
    tests: 'Brak',
    description:
      'Jesteś niższy od większości mieszkańców Starego Świata. Zasady dotyczące rozmiaru znajdują się na stronie 320 w Rozdziale 12: Bestiariusz.',
  },
  {
    name: 'Mistrz Charakteryzacji',
    max: 'Bonus z Ogłady',
    tests: 'Występy (Aktorstwo), gdy udajesz kogoś innego',
    description:
      'Jesteś ekspertem, jeśli chodzi o przejmowanie manieryzmów i upodabnianie się do kogoś. Zmieniając postawę, wykrzywiając twarz i dobierając ubranie, przestajesz przypominać siebie, nawet jeśli nie masz pod ręką zestawu do charakteryzacji.',
  },
  {
    name: 'Mistrz Rzemiosła (Rzemiosło)',
    max: 'Bonus ze Zręczności',
    tests: 'Pasujący Wydłużony Test tego Rzemiosła',
    description:
      'Jesteś wybitnie wykwalifikowany w danym rzemiośle. Możesz zmniejszyć liczbę wymaganych PS podczas Testu Wydłużonego tego Rzemiosła o tyle, ile razy wykupiłeś ten Talent.',
  },
  {
    name: 'Mistrz Walki',
    max: 'Bonus ze Zwinności',
    tests: 'Brak',
    description:
      'Lata nagromadzonego doświadczenia pozwalają ci trzymać przeciwników w szachu. Każde wykupienie tego Talentu sprawia, że gdy określana jest przewaga liczebna w walce, ty liczysz się jak jedna osoba więcej (dwie przy pierwszym wykupieniu, trzy przy drugim itd.). Talent ten działa tylko wtedy, gdy przeciwników jest faktycznie więcej od grupy, w której znajduje się postać. Na stronie 162 znajdują się zasady mówiące o tym, jak stosować przewagę liczebną.',
  },
  {
    name: 'Mocne Plecy',
    max: 'Bonus z Siły',
    tests: 'Wiosłowanie lub Pływanie',
    description:
      'Twój kark jest twardy od ciężkiej harówki. Możesz dodać liczbę wykupień tego Talentu do PS Przeciwstawnych Testów Siły i nieść dodatkowy ekwipunek o wadze równej liczbie wykupień tego Talentu w punktach Obciążenia (patrz strona 293).',
  },
  {
    name: 'Morderczy Atak',
    max: 'Bonus z Inicjatywy',
    tests: 'Brak',
    description:
      'Wiesz dobrze, gdzie uderzyć, by wyrządzić jak najwięcej krzywdy. Kiedy zadasz Ranę Krytyczną, zwiększasz też obrażenia o tyle, ile razy wykupiłeś ten Talent.',
  },
  {
    name: 'Mól Książkowy',
    max: 'Bonus z Inteligencji',
    tests: 'Badania Naukowe',
    description:
      'W bibliotece czujesz się tak naturalnie, jak żeglarz na morzu czy rolnik na polu. Wykorzystując Umiejętność Badania Naukowe, możesz odwrócić kolejność kostek nieudanego Testu, jeśli zapewni ci to sukces.',
  },
  {
    name: 'Mówca',
    max: 'Bonus z Ogłady',
    tests: 'Brak',
    description:
      'Jesteś umiejętnym oratorem i wiesz, jak urabiać tłumy. Poniższa tabela wskazuje, ile osób ulegnie twojemu wpływowi, gdy wykonasz Test Charyzmy podczas przemawiania. Liczba wykupień talentu/liczba przekonanych - 1/zwykłax5, 2/10, 3/ 20, 4/50, 5/100, 6/200, 7/500, 8/1000, 9/wszyscy słyszący',
  },
  {
    name: 'Musztra',
    max: 'Bonus z Walki Wręcz',
    tests:
      'Broń Biała, kiedy jesteś w pobliżu sojuszniczej postaci z tym Talentem',
    description:
      'Zostałeś wyszkolony w walce obok innych żołnierzy. Jeśli przeciwnik sprawi, że stracisz Przewagę, a znajdujesz się obok innej, aktywnej postaci z Talentem Musztra, możesz zachować 1 Przewagę za każde wykupienie tego Talentu.',
  },
  {
    name: 'Na Cztery Łapy',
    max: 'Bonus ze Zwinności',
    tests: 'Atletyka podczas spadania',
    description:
      'Jesteś zwinny jak kot i potrafisz utrzymać równowagę równie dobrze co on. Jeśli spadniesz, to nie ucierpisz tak bardzo jak inni. Kiedy dojdzie do upadku, wykonaj Test Atletyki. Jeśli zakończy się powodzeniem, to obliczając odniesione obrażenia, zmniejsz wysokość, z której spada postać, o 1 metr + 1 metr na każdy PS uzyskany podczas Testu.',
  },
  {
    name: 'Naciągacz',
    max: 'Bonus z Ogłady',
    tests: 'Charyzma (Żebractwo)',
    description:
      'Doskonaliłeś się w żebraniu tak długo, że teraz wzruszysz nawet osobę o sercu z najtwardszego kamienia. Testy Charyzmy podczas żebrania wykonujesz co pół godziny, a nie co godzinę (patrz strona 120).',
  },
  {
    name: 'Naśladowca',
    max: 'Bonus z Inicjatywy',
    tests: 'Występy (Aktorstwo), podczas których ważny jest akcent',
    description:
      'Masz ucho do gwar oraz do dialektów i potrafisz je naśladować. Jeśli osłuchasz się któregoś przez jeden dzień, możesz wykonać Test Inicjatywy (jeden na dzień) i jeśli się powiedzie, będziesz potrafił naśladować ten akcent. Miejscowi będą uważali, że gadasz po ichniemu i jesteś swój.',
  },
  {
    name: 'Niegodny Uwagi',
    max: 'Bonus z Ogłady',
    tests: 'Skradanie, kiedy jesteś na widoku',
    description:
      'Wielcy i możni nie zwracają na ciebie uwagi. Jeśli jesteś zwykłym ubrany i nie zachowujesz się niestosownie, osoby z wyższego poziomu Statusu nie przejmują się tobą, chyba że twoja obecność jest wybitnie niestosowna. Talent ten sprawia, że masz wiele okazji do podsłuchania rozmów, których nie powinieneś być świadkiem. Co więcej, osoby o wyższym poziomie Statusu nie otrzymują Przewagi za uderzenie ciebie lub zadanie obrażeń w walce, ponieważ pomiatanie takim łachudrą jak ty nie przynosi im żadnego honoru.',
  },
  {
    name: 'Nienawiść (Grupa)',
    max: 'Bonus z Siły Woli',
    tests: 'Siła Woli (Opieranie się Grupie)',
    description:
      'Coś w Starym Świecie powoduje twoją nienawiść, jak to opisano na stronie 190. Każde wykupienie tego Talentu to jej nowy obiekt, a przykładowe grupy to: Banici, Czarownice, Ożywieńcy, Potwory, Sigmaryci, Zielonoskórzy, Zwierzoludzie.',
  },
  {
    name: 'Nieubłagany',
    max: 'Bonus z Wytrzymałości',
    tests: 'Brak',
    description:
      'Trzeba nie lada wysiłku, by cię wykończyć. Twojej postaci nie dotyczy utrata żywotności, spowodowana Stanem Krwawienie. Każde wykupienie tego Talentu powoduje, że możesz zignorować jedną ranę spowodowaną przez ten Stan.',
  },
  {
    name: 'Nieugięty',
    max: 'Bonus ze Zwinności',
    tests: 'Brak',
    description:
      'Kiedy skupisz się na celu, nie sposób cię powstrzymać przed dotarciem do niego. Jeśli wykorzystujesz Przewagę podczas Odwrotu, możesz zachować jej tyle, ile razy masz wykupiony ten Talent. Co więcej, możesz wykorzystać Przewagi do Odwrotu, nawet jeśli masz ich mniej niż przeciwnik.',
  },
  {
    name: 'Nieustraszony (typ wroga)',
    max: 'Bonus z Siły Woli',
    tests:
      'Opanowanie przeciwko wrogiemu Zastraszaniu oraz Testom Strachu i Grozy',
    description:
      'Jesteś tak odważny lub szalony, że strach przed pewnymi istotami jest dla ciebie wspomnieniem. Za pomocą jednego Przeciętnego (+20) Testu Opanowania możesz sprawić, że nie dotyczą cię efekty Zastraszania, Strachu i Grozy, powodowane przez określoną grupę wrogów. Oto typowe przykłady takich wrogów: Banici, Czarownice, Strażnicy, Wampiry, Zielonoskórzy, Zwierzoludzie.',
  },
  {
    name: 'Niewzruszony',
    max: 'Bonus z Siły Woli',
    tests: 'Opanowanie przeciwko panice prochowej',
    description:
      'Jesteś twardym wiarusem, który przetrwał niejedną salwę z broni czarnoprochowej. Musisz wykonać Test Opanowania, by oprzeć się Stanowi Panika, dopiero kiedy zostaniesz zraniony przez broń prochową, a nie wtedy, gdy zostaniesz z niej tylko ostrzelany.',
  },
  {
    name: 'Niezwykle Odporny',
    max: '1',
    tests: 'Brak',
    description:
      'Twoja początkowa Wytrzymałość zostaje na stałe podniesiona o +5, co nie liczy się do sumy twoich Rozwinięć.',
  },
  {
    name: 'Nos do Kłopotów',
    max: 'Bonus z Inicjatywy',
    tests: 'Każdy, by wypatrzeć potencjalne problemy',
    description:
      'Wiesz, jak wpaść w kłopoty i – jeszcze lepiej – jak się z nich wyłgać. Możesz wykonać Test Intuicji, by zorientować się, kto potencjalnie może sprawiać problemy. Test ten przysługuje ci, nawet gdyby nie wolno ci było go wykonać (z powodu działania innych Talentów, czarów itp.). Test ów będzie zapewne Przeciwstawny, jeśli napastnicy się kryją. MG może go wykonać w ukryciu za ciebie, byś nie wiedział, czy zakończy się on porażką, czy sukcesem. Jeśli zauważony przez ciebie wichrzyciel rozpocznie walkę, nie działa na ciebie Stan Zaskoczenie.',
  },
  {
    name: 'Numizmatyka',
    max: 'Bonus z Inicjatywy',
    tests: 'Wycena podczas ustalania wartości monet',
    description:
      'Doskonale znasz się na różnych walutach Starego Świata i potrafisz oceniać ich wartość. Na podstawie swojego doświadczenia, bez konieczności wykonywania Testu, umiesz powiedzieć, ile warta jest moneta. Prosty Test Wyceny pozwoli ci wykryć podrabianą. Nie jest on przeciwstawiany PS uzyskanym wcześniej przez fałszerza.',
  },
  {
    name: 'Obieżyświat',
    max: 'Bonus z Inteligencji',
    tests: 'Dowolnej Wiedzy związanej z okolicą',
    description:
      'Jesteś jednym z tych ciekawskich, którzy nie potrafią usiedzieć na miejscu i wędrują po świecie wszerz i wzdłuż, ucząc się wielu przydatnych informacji. Dodaj Umiejętność Wiedza (Lokalna) do swojej każdej bieżącej Profesji, a jeśli już jest na liście dostępnych, możesz wykupić na tym poziomie jedną dodatkową Wiedzę (Lokalną). Za Rozwinięcie każdej z takich Umiejętności płacisz zawsze 5 PD mniej. Przykładowe Specjalizacje to Altdorf, Vorbergland czy Ubersreik.',
  },
  {
    name: 'Oburęczność',
    max: '2',
    tests: 'Brak',
    description:
      'Twoja słabsza ręka jest sprawniejsza niż u innych ludzi. Być może zostałeś tego nauczony, być może to wrodzona cecha, ale efekt jest ten sam: modyfikator do Testów wykonywanych „drugą” ręką zostaje zmniejszony z -20 do -10. Jeśli wykupisz ten Talent drugi raz, modyfikatora nie stosuje się do twojej postaci.',
  },
  {
    name: 'Odporność na Magię',
    max: 'Bonus z Wytrzymałości',
    tests: 'Brak',
    description:
      'Jesteś uodporniony na zaklęcia. Poziom Sukcesów czarów rzucanych na ciebie jest obniżony o 2 za każde wykupienie tego Talentu. Poziom Sukcesów jest obniżany tylko od najwyższej Odporności na Magię w obszarze oddziaływania czaru. Co więcej, nie możesz wykupić Talentów: Magia Tajemna, Błogosławieństwo, Inwokacja, Magia Prosta i Czarownica.',
  },
  {
    name: 'Odporność Psychiczna',
    max: 'Bonus z Siły Woli',
    tests: 'Brak',
    description:
      'Jesteś uosobieniem determinacji i niezłomności. Dodaj tyle Punktów Determinacji do ich maksymalnej puli, ile razy wykupiłeś ten Talent.',
  },
  {
    name: 'Odporny na (Zagrożenie)',
    max: 'Bonus z Wytrzymałości',
    tests: 'Wszystkie, gdy opierasz się powiązanemu zagrożeniu',
    description:
      'Twoja wielka wytrwałość pozwala ci poradzić sobie z niebezpieczeństwem. Automatycznie zdajesz pierwszy Test opierania się przeciwko konkretnemu typowi zagrożenia na danej sesji. Znane są Odporności na Choroby, Magię, Mutacje czy Trucizny. Jeśli w Teście ważne są Poziomy Sukcesu, to za ich liczbę przyjmujesz Bonus z Wytrzymałości.',
  },
  {
    name: 'Odwrócenie Szans',
    max: 'Bonus z Walki Wręcz',
    tests: 'Broń Biała w obronie',
    description:
      'Tak przywykłeś do rozpaczliwej walki o życie, że potrafisz obrócić na swoją korzyść nawet największe kłopoty. Jeśli wygrasz Przeciwstawny Test Walki Wręcz, to zamiast zdobywać +1 Przewagę, możesz zabrać przeciwnikowi jego wszystkie zebrane Przewagi. Jeśli się na to zdecydujesz, nie zadajesz wrogowi obrażeń, nawet jeśli to twoja Tura w Rundzie.',
  },
  {
    name: 'Ogłuszenie',
    max: 'Bonus z Walki Wręcz',
    tests: 'Broń Biała, gdy Ogłuszasz przeciwnika',
    description:
      'Wiesz, gdzie uderzyć, by wróg padł jak długi. Nie tyczy się ciebie negatywny modyfikator za atak mierzony w głowę, gdy używasz broni do Walki Wręcz z zaletą Ogłuszająca (patrz strona 298). Co więcej, w twoich rękach wszystkie bronie improwizowane są traktowane jako Ogłuszające.',
  },
  {
    name: 'Oko Łowcy',
    max: 'Bonus z Inicjatywy',
    tests: 'Dowolny wiążący się z Tropieniem lub polowaniem na zwierzynę',
    description:
      'Jesteś dobrym myśliwym i znasz najlepsze sposoby szukania zwierzyny. Kiedy podróżujesz po bogatych w nią ziemiach, jesteś automatycznie w stanie wyżywić siebie i tylu towarzyszy, ile razy wykupiłeś ten Talent, jeśli tylko masz czas, by zapolować, oraz odpowiednie wyposażenie. Więcej pożywienia możesz zapewnić, wykorzystując zasady znajdujące się na stronie 129.',
  },
  {
    name: 'Percepcja Magiczna',
    max: 'Bonus z Inicjatywy',
    tests: 'Każdy Test dotyczący wykrywania Wiatrów Magii',
    description:
      'Potrafisz dostrzegać zmienne Wiatry Magii, które dmą od Bram Chaosu na biegunach świata. Dzięki temu Talentowi posiadasz zdolność postrzegania magii (patrz strona 233).',
  },
  {
    name: 'Pierwsza Pomoc',
    max: 'Bonus z Inteligencji',
    tests: 'Leczenie podczas Rundy walki',
    description:
      'Potrafisz szybko opatrywać rany. Kiedy nie uda ci się Test Leczenia podczas używania Bandaży, możesz odwrócić kolejność kostek, jeśli to przyniesie ci sukces. Jeśli tak zrobisz, nie możesz uzyskać więcej niż +1 PS, ponieważ skupiasz się na szybkim, a nie dokładnym założeniu opatrunku.',
  },
  {
    name: 'Pilot',
    max: 'Bonus z Inicjatywy',
    tests:
      'Wiosłowanie lub Żeglowanie podczas wytyczania kursu przez nieznane wody',
    description:
      'Potrafisz kierować okrętem po zdradliwych akwenach. Kiedy nie powiedzie ci się Test na niepewnych wodach, możesz odwrócić kolejność kości, jeżeli nowy wynik pozwoli ci odnieść sukces. Maksymalnie możesz w ten sposób osiągnąć +1 PS, ponieważ w ostatniej chwili wypatrzyłeś niebezpieczeństwo.',
  },
  {
    name: 'Pilot Rzeczny',
    max: 'Bonus z Inicjatywy',
    tests: 'Każdy Test Wiedzy dotyczący rzeki',
    description:
      'Znasz wszystkie tajniki żeglowania po rzekach. Nie musisz wykonywać Testu, by przeprowadzić jednostkę przez niebezpieczne wody, chyba że jego trudność wynosi -10 lub więcej. Łatwiejsze Testy automatycznie kończą się sukcesem. Co więcej, jeśli posiadasz Wiedzę (Okolica), w ogóle nie musisz przeprowadzać Testów, tak dobrze znasz te tereny i lokalny nurt.',
  },
  {
    name: 'Poliglota',
    max: 'Bonus z Inteligencji',
    tests: 'Języki (Wszystkie)',
    description:
      'Masz naturalną łatwość uczenia się języków. Wystarczy ci miesiąc obcowania z którymś i udany Test Inteligencji (można go powtórzyć raz na miesiąc), byś mógł traktować jego znajomość jako Umiejętność Podstawową. Uwaga: ten Talent działa tylko na języki, którymi często porozumiewają się istoty, a więc nie na Język (magiczny).',
  },
  {
    name: 'Pomocny',
    max: 'Bonus z Ogłady',
    tests: 'Testy społeczne, by wpłynąć na stojących wyżej w hierarchii',
    description:
      'Wiesz, co i kiedy powiedzieć oraz jak najlepiej wypaść w oczach szlachetniej od ciebie urodzonych. Kiedy z powodzeniem użyjesz Umiejętności, by wpłynąć na tych, którzy mają wyższy od ciebie Status, możesz wybrać, czy wykorzystać normalnie obliczaną liczbę PS, czy zamiast niej użyć cyfry jedności kości, którymi rzucałeś. W ten sposób rzut 46 może dać +6 PS.',
  },
  {
    name: 'Porywająca Gorliwość',
    max: 'Bonus z Ogłady',
    tests: 'Charyzmy, kiedy mówisz o ważnej dla ciebie sprawie',
    description:
      'Kiedy mówisz o czymś, co cię pasjonuje, o swoich przekonaniach czy religii, twoje słowa przepełnia gorliwość, a nawet fanatyzm. Możesz podwoić swoją Ogładę, gdy określasz liczbę osób, na które wpływa twój Talent Mówca (patrz strona 138), gdy poruszasz ważny dla ciebie temat.',
  },
  {
    name: 'Posłuch u Zwierząt',
    max: 'Bonus z Siły Woli',
    tests: 'Oswajanie',
    description:
      'Dzikie zwierzęta dobrze się czują w twojej obecności i często są posłuszne twoim poleceniom. Wszystkie istoty o Cesze Zwierzę, których nie wytresowano, by były agresywne, uspokajają się w twojej obecności, chyba że mają powód, by zachować czujność. Ból, napaść czy naturalna wysoka agresja lub opieka nad młodymi mogą sprawić, że zwierzę nie podda się działaniu tego Talentu.',
  },
  {
    name: 'Precyzyjne Inkantowanie',
    max: 'Bonus z Inicjatywy',
    tests: 'Język (Magiczny) podczas rzucania czaru',
    description:
      'Instynktownie pojmujesz język magiczny i bez omyłki jesteś w stanie wypowiadać skomplikowane formuły. Jeśli rzucisz dublet podczas udanego Testu Języka (Magicznego), nie dochodzi do manifestacji.',
  },
  {
    name: 'Prosto Między Oczy',
    max: '1',
    tests: 'Brak',
    description:
      'Zawsze trafiasz wroga między oczy… albo tam, gdzie chcesz. Zamiast odwracać kolejność kości, by określić Miejsce Trafienia z Broni Zasięgowej, wybierasz, gdzie chciałeś trafić wroga.',
  },
  {
    name: 'Przekonujący',
    max: 'Bonus z Ogłady',
    tests:
      'Charyzma, gdy prowadzisz debatę lub się z kimś spierasz na argumenty',
    description:
      'Przywykłeś do debatowania i obrony swojego zdania. Jeśli uda ci się Test Charyzmy, możesz normalnie obliczyć PS lub określić ich liczbę, odczytując wynik z kości jedności. Udany Test z wynikiem 24 może dać ci więc 4 PS.',
  },
  {
    name: 'Przestępca',
    max: 'Brak',
    tests: 'Brak',
    description:
      'Jesteś bandytą, który zarabia na swojej działalności i niekiedy się z tym nie kryje. Jeśli w trakcie gry będziesz zarabiał lub oddasz się Zajęciu Dochód, odwołaj się do: Poziom Profesji/Dodatkowe pieniądze na liczbę wykupień - 1 = +2k10 miedziaków, 2 = +1k10 srebrnych, 3 = +2k10 srebrnych, 4 = +1 złota. Ponieważ nie kryjesz się ze swoją przestępczą naturą, inni automatycznie uważają cię za osobę niższego Statusu, chyba że sami posiadają ten Talent. Wtedy wasz Status jest ustalany normalnie. Od ciebie zależy, jak można poznać, że jesteś kryminalistą: czy to więzienne tatuaże, czy obcesowy sposób bycia. Lokalne władze i straże są wobec ciebie podejrzliwe i zawsze patrzą ci na ręce, a im więcej razy wykupisz ten Talent, tym za większego zbira uchodzisz. Bezpośrednie skutki zależą od MG. Kryminaliści bez Talentu Przestępca zarabiają znacznie mniejsze pieniądze, ale zachowują dawny Status. Za zgodą MG możesz wydać tyle PD, ile cię kosztował, by pozbyć się tego Talentu.',
  },
  {
    name: 'Przyrządzanie Mikstur',
    max: 'Bonus z Inteligencji',
    tests: 'Rzemiosło (Aptekarstwo)',
    description:
      'Wiesz, jak przyrządzać napary, wywary i susze. Możesz podjąć się jednego darmowego Zajęcia Wytwórstwa, by użyć Rzemiosła (Aptekarstwa) bez dostępu do Warsztatu. Pozostałe Zajęcia Wytwórstwa należy przeprowadzić normalnie.',
  },
  {
    name: 'Riposta',
    max: 'Bonus ze Zwinności',
    tests: 'Broń Biała (obrona)',
    description:
      'Wyznajesz zasadę, że najlepszą obroną jest atak, dlatego w walce błyskawicznie kontratakujesz, gdy tylko przeciwnik wyprowadzi cios. Jeśli twoja broń posiada zaletę Szybka, możesz zadać obrażenia, gdy jesteś atakowany, jakbyś wykonywał swoją Akcję. Ripostę możesz wykonać tyle razy w Rundzie, ile razy wykupisz ten Talent.',
  },
  {
    name: 'Rozbrojenie',
    max: 'Bonus z Inicjatywy',
    tests: 'Broń Biała (sytuacje związane z tym Talentem)',
    description:
      'Celnym uderzeniem lub sprawnym ruchem nadgarstka jesteś w stanie wytrącić broń przeciwnikowi z dłoni. W ramach swojej Akcji wykonaj Przeciwstawny Test Broni Białej przeciwko wrogiemu Testowi Broni Białej. Jeśli ci się powiedzie, wybijasz broń z ręki przeciwnika, która odlata o 1k5 metrów w losowym kierunku. MG może zadecydować o tym, co dzieje się jeszcze. Jeśli wygrasz o 2 PS, ty decydujesz, jak daleko odleci broń, zamiast określać to losowo. Jeśli wygrasz o 4 PS, możesz też zadecydować, w którą stronę pofrunie. Jeżeli wygrasz Test o 6 PS lub więcej, łapiesz oręż przeciwnika, o ile masz wolną rękę. Ten Talent na nic się nie przyda, jeśli wróg nie używa broni lub jest większy od ciebie.',
  },
  {
    name: 'Rozpoznanie Artefaktu',
    max: 'Bonus z Inicjatywy',
    tests: 'Test Intuicji (wykrywanie magicznych artefaktów)',
    description:
      'Jesteś w stanie wykryć, czy w danym przedmiocie zaklęta jest magia. Możesz wykonać Test Intuicji, gdy go dotykasz. Jeśli Test się powiedzie, każdy PS pozwala ci poznać jedną zasadę, która ma zastosowanie wobec przedmiotu (jeśli tak w ogóle jest). W zwykłych przypadkach możesz wykonać tylko jeden Test wobec danego artefaktu.',
  },
  {
    name: 'Rozproszenie Uwagi',
    max: 'Bonus ze Zwinności',
    tests: 'Atletyka (Przeciwstawny przeciw Opanowaniu przeciwnika)',
    description:
      'Jesteś wytrenowany tak, by twoje ruchy rozpraszały uwagę przeciwnika i ułatwiały jego zaskoczenie. Możesz wykorzystać swój Ruch, aby użyć Rozpraszania Uwagi. Jest to Test Przeciwstawny Atletyki przeciw Opanowaniu przeciwnika. Jeśli wygrasz, twój przeciwnik nie może zbierać Przewagi aż do końca następnej Rundy.',
  },
  {
    name: 'Ruchliwe dłonie',
    max: 'Bonus ze Zręczności',
    tests: 'Zwinne Palce, Broń Biała (Bijatyka) (dotknięcie przeciwnika)',
    description:
      'Manipulujesz dłońmi z zaskakującą zręcznością. Gapiom i przypadkowym obserwatorom nie przysługuje bierny Test Percepcji, gdy wykorzystujesz Umiejętność Zwinne Palce, chyba że żywią oni wobec ciebie podejrzenia i obserwują twoje ruchy. Testy Broni Białej (Bijatyki) wykonywane, by dotknąć przeciwnika, wykonujesz z premią +10 x liczba wykupień tego Talentu.',
  },
  {
    name: 'Rybak',
    max: 'Bonus z Inicjatywy',
    tests: 'Dowolne związane z rybołówstwem',
    description:
      'Jesteś obrotnym rybakiem i wiesz, jak zapełnić sieci. Jeżeli masz dostęp do odpowiednio dużego zbiornika wodnego, jesteś w stanie wyżywić siebie oraz tyle osób, ile razy wykupiłeś ten Talent, jeśli poświęcisz godzinę dziennie na wędkowanie. Liczbę złowionych ryb możesz zwiększyć, stosując zasady zbieractwa.',
  },
  {
    name: 'Sekretna Tożsamość',
    max: 'Bonus z Inteligencji',
    tests: 'Występy (Aktorstwo) (uwiarygodnianie sekretnej tożsamości)',
    description:
      'Posiadasz alter ego, które jest bogatszym lub biedniejszym człowiekiem od ciebie. Wybierz Profesję, na którą przystanie MG. Dopóki jesteś odpowiednio ubrany, dopóty możesz korzystać z oferowanego przez nią Statusu, zamiast swojego. To oznacza, że korzystasz z jej modyfikatorów do Testów Ogłady, a nawet możesz zignorować skutki działania Talentu Przestępca. Utrzymywanie sekretnej tożsamości wymaga udanych Testów Umiejętności Występy (Aktorstwo), gdy spotykasz kogoś, kto może cię przejrzeć. Każde wykupienie tego Talentu pozwala ci na stworzenie dodatkowej sekretnej tożsamości.',
  },
  {
    name: 'Silne Nogi',
    max: 'Bonus z Siły',
    tests: 'Testy Atletyki wiążące się ze skakaniem',
    description:
      'Masz silne nogi, dzięki którym jesteś w stanie wykonywać nieprawdopodobnie dalekie skoki. Dodaj liczbę wykupień tego Talentu do PS Testów Atletyki wiążących się ze skakaniem (patrz strona 166).',
  },
  {
    name: 'Silny Cios',
    max: 'Bonus z Siły',
    tests: 'Broń do Walki Wręcz',
    description:
      'Wiesz, jak komuś przywalić! Posługując się bronią do Walki Wręcz, zadajesz obrażenia powiększone o tyle, ile razy masz wykupiony ten Talent.',
  },
  {
    name: 'Skrócenie Dystansu',
    max: 'Bonus ze Zręczności',
    tests: 'Wchodzenia w zasięg broni przeciwnika i w walce kontaktowej',
    description:
      'Wiesz, jak przyciągnąć do siebie przeciwnika, i nie dotyczą cię modyfikatory za walkę z wrogiem, który ma broń dłuższą niż Twoja. Jeśli używasz opcjonalnych zasad walki kontaktowej (patrz strona 297), otrzymujesz premię +10 do trafienia przeciwnika.',
  },
  {
    name: 'Słuch Absolutny',
    max: 'Bonus z Inicjatywy',
    tests:
      'Występy (Śpiewanie), Języki (tonalne, takie jak Eltharin, Ki-tajski czy Magiczny)',
    description:
      'Jesteś w stanie dokładnie powtórzyć i zidentyfikować notację nutową. Co więcej, dodaj Umiejętność Występy (Śpiewanie) do listy Umiejętności swojej każdej bieżącej Profesji, a jeśli znajduje się ona na liście, koszt każdego Rozwinięcia spada o 5 PD.',
  },
  {
    name: 'Snajper',
    max: '4',
    tests: 'Broń Strzelecka (zasięg daleki lub bardzo daleki)',
    description:
      'Kiedy strzelasz, odległość nie ma dla ciebie znaczenia. Eliminujesz cele z taką samą łatwością, jakby były niedaleko. Strzelanie na daleki zasięg nie wiąże się dla ciebie z żadnymi negatywnymi modyfikatorami, a na bardzo daleki oznacza tylko połowiczne modyfikatory.',
  },
  {
    name: 'Sprężynka',
    max: '1',
    tests: 'Test Atletyki',
    description:
      'Ciebie nie da się obalić na ziemię. Możesz wykonać Wymagający (+0) Test Atletyki, by natychmiast wstać po tym, jak nałożony zostanie na ciebie Stan Powalony. Ten Test Atletyki jest modyfikowany przez siłę uderzenia, które posłało cię na ziemię. Za każde 10 punktów Siły wroga ponad twoją Wytrzymałość otrzymujesz modyfikator -10 do Testu Atletyki. Jeśli Siła przeciwnika była niższa od twojej Wytrzymałości, otrzymujesz +10 za każde 10 punktów różnicy.',
  },
  {
    name: 'Straszny',
    max: 'Bonus z Siły',
    tests: 'Brak',
    description:
      'Każdy przy zdrowych zmysłach pomyśli dwa razy, zanim do ciebie podejdzie. Możesz zadecydować, że w danej sytuacji wzbudzasz Strach na poziomie 1 (patrz strona 190). Każde wykupienie tego Talentu podwyższa siłę Strachu o +1.',
  },
  {
    name: 'Strzał Przebijający',
    max: 'Bonus z Inicjatywy',
    tests: 'Test Broni Zasięgowej',
    description:
      'Wiesz, jak odszukać słaby punkt w pancerzu obranego celu. Kiedy trafisz, wykonując Test Broni Zasięgowej, możesz zignorować tyle Punktów Pancerza wroga, ile razy wykupiłeś ten Talent.',
  },
  {
    name: 'Strzał w Dziesiątkę',
    max: '1',
    tests: 'Broń Strzelecka',
    description:
      'Strzelasz celnie w cel niezależnie od jego wielkości. Dzięki temu nie mają na ciebie wpływu negatywne modyfikatory strzelania, wynikające z rozmiaru celu.',
  },
  {
    name: 'Strzelec Wyborowy',
    max: '1',
    tests: 'Umiejętności Strzeleckie',
    description:
      'Otrzymujesz stałą premię +5 do początkowych Umiejętności Strzeleckich, która nie liczy się do sumy Rozwinięć.',
  },
  {
    name: 'Szał Bojowy',
    max: '1',
    tests: 'Brak',
    description: 'Możesz wpaść w Szał Bojowy, co opisano na stronie 190.',
  },
  {
    name: 'Szczęście',
    max: 'Bonus z Ogłady',
    tests: 'Test Hazardu i Zwinnych Palców w grach karcianych',
    description:
      'Przywykłeś do tego, że w grze w karty zwykle wygrywasz, choć twoje metody mogą być odrobinę nieuczciwe. Jeśli powiedzie ci się Test Hazardu lub Zwinnych Palców, możesz wybrać, czy skorzystać z normalnie uzyskanych PS, czy ich liczbę wyznaczyć, korzystając z cyfry jedności rzutu. W ten sposób wynik udanego Testu oznaczałby uzyskanie +8 PS. Jeśli na sesji rzeczywiście używacie kart, możesz otrzymać w rozdaniu dodatkową liczbę kart, równą liczbie wykupień tego Talentu, wybrać najlepsze i odłożyć tyle, byś miał na ręku odpowiednią liczbę.',
  },
  {
    name: 'Szuler Kościany',
    max: 'Bonus z Inteligencji',
    tests: 'Hazard lub Zwinne Palce podczas gier kościanych',
    description:
      'Jesteś mistrzem gry w kości, a zarzuty oszustwa są nieuzasadnione. Kiedy z powodzeniem używasz Umiejętności Hazard czy Zwinne Palce podczas gry w kości, możesz albo zachować obliczoną normalnie liczbę PS, albo określić ich liczbę przez wynik na kości jedności. W ten sposób wynik rzutu 06 może oznaczać +6 PS. Jeśli podczas sesji będziecie naprawdę grali w kości, rzucasz tyloma więcej, ile razy wykupiłeś ten Talent, i wybierasz najlepsze rezultaty.',
  },
  {
    name: 'Szybki Refleks',
    max: '1',
    tests: 'Brak',
    description:
      'Zyskujesz premię +5 do początkowej wartości Zwinności. Nie liczy się ona do sumy Rozwinięć.',
  },
  {
    name: 'Szybkie Czytanie',
    max: 'Bonus z Inteligencji',
    tests:
      'Badania Naukowe i Język, gdy ważne jest szybkie przyswajanie treści',
    description:
      'Czytasz księgi z zadziwiającą szybkością. Możesz odwrócić kolejność kości nieudanego Testu Badań Naukowych, jeśli to przyniesie ci sukces. Jeżeli szybkie przeczytanie tekstu odgrywa rolę podczas walki, to w ciągu Rundy możesz przeanalizować tyle stron, ile PS uzyskasz dzięki udanemu Testowi Języków plus tyle, ile razy wykupiłeś ten Talent (minimum jedną, jeśli Test się nie powiódł).',
  },
  {
    name: 'Szybkie Przeładowanie',
    max: 'Bonus ze Zręczności',
    tests: 'Testy przeładowania broni dystansowej',
    description:
      'Potrafisz z łatwością przeładowywać bronie strzeleckie. Dodaj PS równe liczbie wykupień tego Talentu do Testów przeładowania broni dystansowej.',
  },
  {
    name: 'Szybkobiegacz',
    max: 'Bonus z Siły',
    tests: 'Atletyka podczas Biegu',
    description:
      'Żwawo przebierasz nogami. Podczas Biegu twoja Szybkość jest traktowana, jakby była o 1 wyższa.',
  },
  {
    name: 'Szycha',
    max: '1',
    tests: 'Brak',
    description:
      'Pomimo powiązań z półświatkiem otacza cię aura szacunku. Twojej postaci nie dotyczy utrata Statusu spowodowana przez Talent Przestępca.',
  },
  {
    name: 'Świetny Pływak',
    max: 'Bonus z Siły',
    tests: 'Pływanie',
    description:
      'Bardzo dobrze pływasz i potrafisz na długo wstrzymać oddech pod wodą. Kiedy obliczasz, jak długo jesteś w stanie wytrzymać pod powierzchnią wody, do Bonusu z Wytrzymałości dodaj liczbę wykupień tego Talentu.',
  },
  {
    name: 'Święta Nienawiść',
    max: 'Bonus z Ogłady',
    tests: 'Brak',
    description:
      'Twoje modlitwy ociekają nienawiścią wobec bluźnierców. Swoimi cudami zadajesz +1 punkt obrażeń za każde wykupienie tego Talentu.',
  },
  {
    name: 'Święte Wizje',
    max: 'Bonus z Inicjatywy',
    tests: 'Testy Intuicji, kiedy znajdujesz się na świętej ziemi',
    description:
      'Wyraźnie widzisz boskie dzieła wokół siebie. Zawsze wiesz, kiedy wkraczasz na świętą ziemię, i możesz wykonać Test Intuicji, by zstąpiła na ciebie wizja (często niejasna i postrzegana przez paradygmat twojej wiary lub osobistych wartości) opisująca okolicę i to, co najważniejszego się w niej wydarzyło w przeszłości.',
  },
  {
    name: 'Talent Artystyczny',
    max: 'Bonus ze Zręczności',
    tests: 'Sztuka (Dowolna)',
    description:
      'Posiadasz wrodzoną smykałkę do którejś z dziedzin sztuki. Szkice czy wprawki jesteś w stanie zrobić praktycznie od ręki, pod warunkiem, że posiadasz odpowiednie przybory. Swój talent możesz spożytkować na wiele sposobów: narysować afisz z wizerunkiem ściganego, prowadzić dokładne dzienniki graficzne lub wykorzystać go w inny, zaaprobowany przez MG, sposób. Co więcej, dodajesz Umiejętność Sztuka (Dowolna) do swojej każdej bieżącej Profesji, a jeśli znajduje się ona na liście, koszt każdego Rozwinięcia spada o 5 PD.',
  },
  {
    name: 'Tarczownik',
    max: 'Bonus z Siły',
    tests: 'Brak',
    description:
      'Potrafisz tak posługiwać się tarczą, by wrogowie znaleźli się tam, gdzie chcesz, i umiesz wykorzystywać wynikającą z tego przewagę. Jeśli używasz tarczy do obrony i przegrasz Test Przeciwstawny, to mimo wszystko zyskujesz tyle punktów Przewagi, ile razy masz wykupiony ten Talent.',
  },
  {
    name: 'Towarzyski',
    max: 'Bonus z Ogłady',
    tests: 'Plotkowanie z wędrowcami',
    description:
      'Po prostu lubisz sobie pogadać z ludźmi, a oni z tobą. Możesz odwrócić kolejność kostek nieudanego Testu Plotkowania, jeśli nowy wynik będzie oznaczał udany Test.',
  },
  {
    name: 'Tragarz',
    max: 'Bonus z Siły',
    tests: 'Siły podczas podnoszenia',
    description:
      'Twoje krępe ciało świetnie nadaje się do tego, by dźwigać ciężary. Liczba punktów obciążenia, które możesz nosić, zwiększa się o liczbę wykupień tego Talentu x2.',
  },
  {
    name: 'Traper',
    max: 'Bonus z Inicjatywy',
    tests: 'Percepcja, by zauważyć pułapki, Zastawianie Pułapek',
    description:
      'Wiesz, jak używać wnyków, i możesz wykonać Test Percepcji, by je zauważyć, bez konieczności deklarowania poszukiwań. MG będzie pewnie wolał wykonać go samemu, na wypadek gdyby rzut okazał się nieudany.',
  },
  {
    name: 'Twardziel',
    max: 'Bonus z Wytrzymałości',
    tests: 'Brak',
    description:
      'Na stałe zwiększasz swoją Żywotność o Bonus z Wytrzymałości. Jeśli ten się zwiększy, wraz z nim wzrośnie również twoja Żywotność wynikająca z tego Talentu.',
  },
  {
    name: 'Ulicznik',
    max: 'Bonus z Inicjatywy',
    tests: 'Skradanie (Miasto)',
    description:
      'Wśród cieni zaułków czujesz się jak w domu. Kiedy wykorzystujesz Umiejętność Skradanie (Miasto) i jeśli Test ci się nie powiedzie, możesz zamienić kolejność kości, jeśli nowy wynik zapewniłby ci sukces.',
  },
  {
    name: 'Urodzony w Siodle',
    max: 'Bonus ze Zwinności',
    tests: 'Jeździectwo (Konie) w walce',
    description:
      'W siodle czujesz się jak w domu i nie straszne ci najtrudniejsze warunki. Wiesz, jak najlepiej wykorzystać wierzchowca w walce. Jeśli posiadasz Umiejętność Jeździectwo, możesz pokierować koniem tak, by podjął Akcję, a nie tylko wykonywał Ruch. Nie musisz w tym celu wykonywać do tego Testu Jeździectwa.',
  },
  {
    name: 'Urodzony Wojownik',
    max: '1',
    tests: 'Brak',
    description:
      'Twoja początkowa Walka Wręcz zostaje na stałe podniesiona o +5, co nie liczy się do sumy twoich Rozwinięć.',
  },
  {
    name: 'Urodzony Żeglarz',
    max: 'Bonus z Wytrzymałości',
    tests: 'Wszystkie wykonywane, by oprzeć się chorobie morskiej',
    description:
      'Przywykłeś do kołysania fal morskich i mało prawdopodobne, byś zachorował na chorobę morską, nawet podczas najsilniejszych sztormów. W spokojnych warunkach nie musisz przeprowadzać Testu, by sprawdzić, czy na morzu chwycą cię mdłości. Gdy rozpęta się sztorm lub gdy chorobę morską powoduje magia, nie dotyczą cię modyfikatory negatywnie wpływające na opieranie się tej przypadłości.',
  },
  {
    name: 'Waleczne Serce',
    max: 'Bonus z Siły Woli',
    tests: 'Opanowanie, by przełamać Stan Panika',
    description:
      'Nieważne, jak fatalne jest twoje położenie, ty się po prostu nie podajesz. Na koniec swojej Tury i na koniec całej Rundy możesz wykonać Test Opanowania, by otrząsnąć się ze Stanu Panika.',
  },
  {
    name: 'Walka w Ciasnocie',
    max: 'Bonus ze Zwinności',
    tests: 'Unik w ciasnej przestrzeni',
    description:
      'Nauczyłeś się, jak najlepiej wykorzystywać w walce zamknięte przestrzenie. Nie dotyczą cię modyfikatory do Testów Broni Białej wynikające z walki w ciasnych tunelach, okopach, jam gladiatorskich i im podobnych. Co więcej, możesz wykonywać Unik nawet wtedy, gdy nie mógłbyś tego zrobić z braku miejsca.',
  },
  {
    name: 'Widzenie w Ciemności',
    max: 'Bonus z Inicjatywy',
    tests: 'Percepcja przy słabym świetle',
    description:
      'Bardzo dobrze widzisz w naturalnych ciemnościach. Jeśli masz źródło choćby słabego blasku (światło gwiazd, księżyca czy bioluminescencję), widzisz wyraźnie na 20 metrów na każde wykupienie tego Talentu. Dla ciebie oświetlenie okolicy sięga dalej o 20 metrów na każde wykupienie tego Talentu.',
  },
  {
    name: 'Wieża Pamięci',
    max: 'Bonus z Inteligencji',
    tests: 'Brak',
    description:
      'Ta technika pamięciowa pozwala ci bezbłędnie przypomnieć sobie fakty i wydarzenia, ponieważ kolekcjonujesz je w wyimaginowanej wieży. Przywoływanie sekwencji tylu wspomnień, ile wynosi twoja Inteligencja, nie wymaga żadnego Testu, ale zapamiętywanie każdych dodatkowych 10 informacji wymaga Testu Inteligencji o zwiększającym się stopniu trudności. Za każdym razem, gdy wykupujesz ten Talent, możesz zapamiętać dodatkową sekwencję faktów bez potrzeby usuwania z pamięci poprzednich.',
  },
  {
    name: 'Wilk Morski',
    max: 'Bonus ze Zwinności',
    tests: 'Żeglowanie (każdy statek morski)',
    description:
      'Jesteś doświadczonym żeglarzem i przywykłeś do życia na morzu. Nie dotyczą cię negatywne modyfikatory do Testów spowodowane przez kiepską pogodę, kołysanie statku itp. Co więcej, liczysz się za dwóch członków załogi, gdy trzeba obsadzić jednostkę wychodzącą w morze.',
  },
  {
    name: 'Władcza Postura',
    max: 'Bonus z Ogłady',
    tests: 'Dowodzenie',
    description:
      'Twoja fizjonomia powoduje u innych cichy podziw i zachwyt. Aura władczości sprawia, że ci o niższym Statusie nie mogą przeciwstawić się swoją Siłą Woli, gdy inicjujesz Test Dowodzenia. Wrogowie będą bardziej oporni na działanie twej aury, ale pospolity gmin rzadko ośmieli się sprzeciwić.',
  },
  {
    name: 'Włóczykij',
    max: 'Bonus ze Zręczności',
    tests: 'Skradania na wsi',
    description:
      'W dziczy czujesz się jak u siebie i kiedy wykorzystujesz Umiejętność Skradanie, inni nie mogą wykonywać biernych Testów Percepcji, by cię zauważyć. Mogą im one przysługiwać, jeśli przeciwnicy stoją na straży lub wypatrują ukrytych napastników.',
  },
  {
    name: 'Wodniak',
    max: 'Bonus ze Zwinności',
    tests: 'Żeglarstwo na jednostkach pływających po rzece',
    description:
      'Jesteś doświadczonym żeglarzem śródlądowym i jak mało kto znasz się na jednostkach rzecznych. Kiedy jesteś na pokładzie jednej z nich, nie stosują się do ciebie negatywne modyfikatory wynikające z falowania wód, kołysania pokładu, niepewnego podłoża itp. Co więcej, liczysz się za dwóch członków załogi, gdy trzeba zapewnić minimalną liczbę członków załogi, by wypłynąć na rzekę.',
  },
  {
    name: 'Woltyżerka',
    max: 'Bonus ze Zwinności',
    tests: 'Unik na koniu, Jeździectwo (Konie)',
    description:
      'Jesteś w stanie wykonywać nieprawdopodobne rzeczy na końskim grzbiecie. W siodle możesz podejmować Testy Umiejętności Kuglarstwo i nie masz ujemnych modyfikatorów do Uniku. Co więcej, kiedy jesteś na koniu, możesz wykonać Ruch na początku Rundy, a nie w swojej Turze.',
  },
  {
    name: 'Wódz',
    max: 'Bonus z Ogłady',
    tests: 'Dowodzenie podczas wojny',
    description:
      'Twój niewzruszony wzrok i inspirujące słowa popychają żołnierzy do jeszcze zacieklejszej walki. Podkomendni, którzy cię widzą, w jednym Teście Siły Woli na Rundę zyskują dodatkowe PS równe temu, ile razy masz wykupiony ten Talent. Dany wojownik może korzystać z premii tylko jednego dowódcy naraz.',
  },
  {
    name: 'Wróżba Losu',
    max: '1',
    tests: 'Brak',
    description:
      'Gdy miałeś 10 lat kapłan Morra, zwany Czarnowidzem, zabrał cię do siebie, by na osobności przepowiedzieć ci twą zgubę. Dokonało się to podczas obrzędu w oparach kadzidła, nazywanego Wróżbą Losu. Jeśli twoja postać zginie w okolicznościach, które przypominają te z przepowiedni, kolejna postać którą stworzysz otrzymuje połowę jej punktów doświadczenia, które pierwsza zdobyła podczas gry.',
  },
  {
    name: 'Wstrzemięźliwy',
    max: 'Bonus z Wytrzymałości',
    tests: 'Odporności, by wytrzymać głód',
    description:
      'Przywykłeś do tego, że jesz niewiele, i potrafisz przetrwać chude czasy. Jedząc połowę tego, co potrzebujesz, nie odczuwasz negatywnych skutków głodowania, chociaż jesteś nieco rozdrażniony. Testy głodu wykonyjesz co 3 dni, a nie co 2.',
  },
  {
    name: 'Wściekły Atak',
    max: 'Bonus ze Zwinności',
    tests: 'Broń Biała podczas wykonywania dodatkowych ataków',
    description:
      'Lawinowo zadajesz ciosy, zasypując wroga furią Ulryka. Raz na Rundę, jeśli trafisz przeciwnika w Walce Wręcz, możesz zużyć Przewagę albo spożytkować Ruch (zakładając, że w tej Rundzie możesz się jeszcze ruszyć), by wykonać od razu dodatkowy atak.',
  },
  {
    name: 'Wtargnięcie z Włamaniem',
    max: 'Bonus z Siły',
    tests: 'Broń Biała, gdy próbujesz zniszczyć lub przesunąć przedmioty',
    description:
      'Jesteś ekspertem od wykopywania drzwi z zawiasów i niszczenia sprzętów. Zadajesz +1 punkt obrażeń za każdy wykupiony Talent Wtargnięcie z Włamaniem, kiedy próbujesz wybić okna, wyważyć drzwi, podważyć wieko skrzyni itp.',
  },
  {
    name: 'Wyborny Wspinacz',
    max: 'Bonus z Siły',
    tests: 'Wspinaczka',
    description:
      'Jesteś świetny we wdrapywaniu się i chodzeniu po górach. Możesz próbować wspinać się na z pozoru niezdobyte zbocza czy szczyty. Nie straszne ci zamkowe blanki, szelfy lodowe, gipsowane ściany i im podobne. Nie tyczą się ciebie negatywne modyfikatory Wspinaczki wynikające z trudności.',
  },
  {
    name: 'Wyczucie Kierunku',
    max: 'Bonus z Inicjatywy',
    tests: 'Nawigacja',
    description:
      'Instynktownie wyczuwasz kierunki świata. Zawsze wiesz, gdzie jest północ, jeśli tylko możesz zerknąć na gwiazdy, drzewa czy jakąkolwiek inną wskazówkę.',
  },
  {
    name: 'Wyczulony Zmysł',
    max: 'Bonus z Inicjatywy',
    tests: 'Percepcja (z wykorzystaniem tego zmysłu)',
    description:
      'Jeden z twoich pięciu zmysłów jest tak wyczulony, że wyczuwasz to, co umyka innym. Możesz wykonać Test Percepcji, by dowiedzieć się czegoś więcej niż inni, opierając się na tym szczególnym zmyśle.',
  },
  {
    name: 'Wykrywanie Magii',
    max: 'Bonus z Inicjatywy',
    tests: 'Intuicja, by wykrywać czarodziejów',
    description:
      'Potrafisz wyczuć obecność Wiatrów Magii w innych. Możesz wykonać Przeciętny (+20) Test Intuicji, gdy spotykasz się z osobą władającą czarami. Jeśli się on powiedzie, wyczuwasz jej zdolności. Jeśli osiągniesz Zdumiewający (+6) Sukces możesz także określić najwyższą Specjalizację Splatania Magii tej osoby.',
  },
  {
    name: 'Wytrwały',
    max: 'Bonus z Wytrzymałości',
    tests: 'Odporność, by wytrzymać trudności',
    description:
      'Bez względu na okoliczności i powagę sytuacji ty przenigdy się nie poddajesz. Podwajasz czas opierania się przeciwnościom, zapewniany przez udany Test Odporności. Wytrzymujesz długą jazdę, wystawienie na warunki atmosferyczne, rytuały i tym podobne trudności.',
  },
  {
    name: 'Wytwórca',
    max: 'Bonus ze Zręczności',
    tests: 'Rzemiosło (Dowolne)',
    description:
      'Jesteś prawdziwie uzdolniony. Dodaj rzemiosło powiązane z tym Talentem do listy Umiejętności aktualnej Profesji. Jeśli już wcześniej było na niej wymienione, za każde jego Rozwinięcie płacisz 5 PD mniej.',
  },
  {
    name: 'Z Bata',
    max: 'Bonus ze Zręczności',
    tests: 'Powożenie lub Jeździectwo podczas Ucieczki lub Biegu',
    description:
      'Wiesz, jak zmusić zwierzę do większego wysiłku. Kiedy Ucieka ono lub Biegnie, jego szybkość zwiększa się o +1, gdy popędzasz je batem lub biczem.',
  },
  {
    name: 'Zabójca',
    max: '1',
    description:
      'Kiedy określasz wysokość obrażeń, możesz wykorzystać Bonus z Wytrzymałości wroga zamiast swojego Bonusu z Siły, o ile jest wyższy. Jeśli twój wróg jest od ciebie większy i zadasz Trafienie Krytyczne, obrażenia zostaną pomnożone o tyle kategorii wielkości, ile was dzieli. Mnożnik jest obliczany po uwzględnieniu innych modyfikatorów. Więcej informacji na temat rozmiaru znajduje się na stronie 340.',
  },
  {
    name: 'Zbicie Broni',
    max: 'Bonus z Walki Wręcz',
    tests: 'Broń Biała, by zbić broń',
    description:
      'Zostałeś wyszkolony w zadawaniu krótkich i gwałtownych uderzeń w oręż przeciwnika, dzięki czemu możesz sam zaatakować lub powstrzymać nadchodzący cios. Możesz zadeklarować Zbicie Broni przed rzutem w ramach swojej Akcji. Jeśli Test Broni Białej się powiedzie, twój przeciwnik traci -1 Przewagę oraz kolejną -1 za każdy twój PS. Nie możesz korzystać z tego Talentu, jeśli wrogowie nie używają broni lub są więksi niż ty.',
  },
  {
    name: 'Zejście z Linii',
    max: 'Bonus ze Zwinności',
    tests: 'Unik, gdy używasz tego Talentu',
    description:
      'Wiesz, jak znaleźć się tam, gdzie oręż wroga nie sięga. Jeśli korzystasz z Umiejętności Unik, by zejść z linii ciosu i wygrasz Test Przeciwstawny, możesz poruszyć się na odległość do 2 metrów i nie jesteś związany walką. Przeciwnicy nie mogą wykonać przeciw tobie darmowych ataków.',
  },
  {
    name: 'Zimna krew',
    max: '1',
    description:
      'Zyskujesz premię +5 do początkowej wartości Siły Woli, co nie wlicza się do sumy Rozwinięć.',
  },
  {
    name: 'Złota Rączka',
    max: 'Bonus ze Zręczności',
    tests: 'Rzemiosło, by naprawić uszkodzone przedmioty',
    description:
      'Jesteś w stanie naprawić dosłownie wszystko, a kiedy coś naprawiasz, traktujesz wszystkie niemagiczne Umiejętności Rzemiosła jako podstawowe.',
  },
  {
    name: 'Zmysł Bitewny',
    max: 'Bonus z Inicjatywy',
    tests: 'Percepcja w trakcie walki',
    description:
      'Szybki rzut oka na pole bitwy pozwala ci błyskawicznie ocenić sytuację i podjąć decyzję, co robić. Możesz wykonać Wymagający (+0) Test Percepcji, by nie być zaskoczonym. Trudność tego Testu może być modyfikowana przez warunki na polu walki.',
  },
  {
    name: 'Zmysł Magii',
    max: 'Bonus z Inicjatywy',
    tests: 'Splatanie Magii (Dowolny Wiatr Magii)',
    description:
      'Twoje doświadczenie, wrodzony talent i wyszkolenie pozwalają ci bezpiecznie manipulować Wiatrami Magii. Jeśli rzucisz dublet podczas udanego Testu Splatania Magii, nie działa na ciebie zasada manifestacji.',
  },
  {
    name: 'Znawca (Wiedza)',
    max: 'Bonus z Inteligencji',
    tests: 'Wiedza (wybrana dziedzina)',
    description:
      'Jesteś prawdziwym ekspertem w wybranej dziedzinie wiedzy. Automatycznie potrafisz przytoczyć tyle poprawnych informacji na dany temat, ile razy wykupiłeś ten Talent, i nie musisz wykonywać Testu Wiedzy. Udany da ci dodatkowe wiadomości, określane przez MG według normalnych zasad.',
  },
  {
    name: 'Zręczny',
    max: '1',
    description:
      'Zyskujesz premię +5 do początkowej wartości Zręczności. Nie liczy się ona do sumy Rozwinięć.',
  },
  {
    name: 'Żelazna Szczęka',
    max: 'Bonus z Wytrzymałości',
    tests: 'Odporność wykonywana przeciw Oszołomieniu',
    description:
      'Jesteś twardy i potrafisz wytrzymać najsilniejsze ciosy. Jeśli jakiś efekt nakłada na postać co najmniej jeden Stan Oszołomienie, gracz może wykonać Wymagający (+0) Test Wytrzymałości, by go zignorować. Każdy PS pozwala ci uniknąć dodatkowego Stanu.',
  },
  {
    name: 'Żelazna Wola',
    max: 'Bonus z Siły Woli',
    tests: 'Opanowanie przeciwstawiane Zastraszaniu',
    description:
      'Masz w sobie niezłomną wolę i sam z siebie nigdy się nie cofniesz. Wykorzystanie przeciwko tobie Zastraszania nie powoduje u ciebie Strachu i nie uciszy cię w wygłaszaniu poglądów przeciwko agresorom.',
  },
  {
    name: 'Żyłka Handlowa',
    max: 'Bonus z Ogłady',
    tests: 'Targowanie',
    description:
      'Jesteś sprawnym przekupniem i znasz sposoby na dobicie targu. Kiedy używasz Umiejętności Targowanie, obniżasz lub podwyższasz cenę o dodatkowe 10%.',
  },
];
