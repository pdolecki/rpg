import { Quality } from "../interfaces/features";

export const QUALITIES: Quality[] = [
  {
    name: '(Broń) Celna',
    description:
      'Strzelając z tej broni, łatwo trafić w cel. W takiej sytuacji otrzymujesz +10 do Testu trafienia.',
  },
  {
    name: '(Broń) Dekoncentrująca',
    description:
      'Zmusza wroga do cofania się. Działa podobnie jak bicz. Zamiast zadawać Obrażenia, udany atak tą bronią może zmusić przeciwnika do cofnięcia się o 1 metr na każdy PS, o który wygrywasz Test Przeciwstawny.',
  },
  {
    name: '(Broń) Druzgocąca',
    description:
      'Po udanym trafieniu dodaj do wszelkich Obrażeń zadanych tą bronią wynik na kostce jedności w rzucie na atak. Broń Tępa nigdy nie może być także Druzgoczącą.',
  },
  {
    name: '(Broń) Łamacz Mieczy',
    description:
      'Trafienie Krytyczne broniąc się przed atakiem broni siecznej, możesz ją unieruchomić zamiast korzystać z efektów Trafienia Krytycznego. Skutkuje to Przeciwstawnym Testem Siły, dodając swój PS z poprzedniego Testu Walki Wręcz. Jeśli Test się uda, twój przeciwnik upuszcza ostrze, które zostaje mu wyrwane z dłoni. Jeśli uzyskasz Zdumiewający Sukces, dodatkowo łamiesz ostrze jego broni (O ile nie ma ona Zalety Niełamliwa). Jeśli Test się nie uda, przeciwnik uwalnia ostrze i walczy normalnie.',
  },
  {
    name: '(Broń) Nadziewająca',
    description:
      'Może zabić jednym czystym ciosem. Zadaje ona Trafienie Krytyczne przy dubletach oraz wartościach /10. Jeżeli to broń dystansowa, oznacza że amunicja utkwiła głęboko w ciele. Usunięcie takich strzał/bełtów wymaga Wymagającego Testu Leczenia. Wyjęcie pocisków z broni prochowej wymaga zabiegu chirurgicznego. Postać nie może wyleczyć jednej z Ran za każdy pocisk w pozostający w ciele.',
  },
  {
    name: '(Broń) Niełamliwa',
    description:
      'Broń jest szczególnie wytrzymała. W większości okoliczności ta broń nie złamie się, nie ulegnie korozji ani nie stępi się.',
  },
  {
    name: '(Broń) Ogłuszająca',
    description:
      'Jeśli trafisz w głowę bronią Ogłuszającą, wykonaj Test Przeciwstawny Siły przeciw Odporności trafionego. Jeśli wygrasz Test, cel dostaje Stan Oszołomienie.',
  },
  {
    name: '(Broń) Parująca',
    description:
      'Jeśli posługujesz się taką bronią, dostajesz premię +1 PS do każdego Testu Broni Białej, gdy parujesz atak.',
  },
  {
    name: '(Broń) Pistolety',
    description: 'Można używać tej broni do atakowania w walce w zwarciu.',
  },
  {
    name: '(Broń) Plącząca',
    description:
      'Test Broni Białej przeciwko atakowi broni Plączącej obciążone są karą -1 PS.',
  },
  {
    name: '(Broń) Precyzyjna',
    description:
      'Zyskujesz premię +1 PS do każdego udanego Testu podczas ataku tą bronią.',
  },
  {
    name: '(Broń) Prochowa',
    description:
      'Jeżeli jesteś celem broni prochowej, musisz wykonać udany (+20) Test Opanowania, inaczej otrzymujesz Stan Panika, nawet jeśli strzał spudłuje.',
  },
  {
    name: '(Broń) Przebijająca',
    description:
      'Aby ustalić Obrażenia zadane tą bronią możesz wykorzystać PS, albo wynik rzutu kostką jedności. Broń Tępa nigdy nie może być także Przebijająca.',
  },
  {
    name: '(Broń) Przekłuwająca',
    description:
      'Punkty Pancerza z warstw niemetalowych są ignorowane. W przypadku wszystkich pozostałych pancerzy pomijany jest ich pierwszy PP.',
  },
  {
    name: '(Broń) Rąbiąca',
    description:
      'Jeśli trafisz przeciwnika, uszkadzasz trafiony fragment pancerza lub tarczy za 1 punkt. Jednocześnie normalnie ranisz cel.',
  },
  {
    name: '(Broń) Szybka',
    description:
      'Parowanie ciosu przeciwko tej broni w sasadzie nie wchodzi w grę. Posługujący się tą bronią może zdecydować się na atak poza normalną sekwencją Inicjatywy, atakując w wybranej przez siebie kolejności. Co więcej, wszystkie Testy obrony Bronią Białą przeciwko Szybkiej broni mają -10 (jeżeli przeciwnik nie ma Szybkiej broni). Szybka Broń nigdy nie może być także Powolna.',
  },
  {
    name: '(Broń) Tarcza (wartość)',
    description:
      'Jeżeli używasz do sparowania ataku, odpowiada to posiadaniu PP wysokości (wartość) na wszystkich Miejscach Trafień na twoim ciele. Jeśli twoja broń ma Zaletę Tarcza o wartości 2 lub wyższej, możesz także wykonać Test Przeciwstawny przeciwko nadlatującym pociskom w twoim polu widzenia.',
  },
  {
    name: '(Broń) Unieruchamiająca',
    description:
      'Każdy przeciwnik trafiony bronią dostaje Stan Pochwycony z Siłą o wartości równej twojej Sile. Unieruchamiając przeciwnika, nie możesz używać tej broni by próbować trafić go w inny sposób. Możesz zakończyć Unieruchomienie w dowolnym momencie.',
  },
  {
    name: '(Broń) Wielostrzał (wartość)',
    description:
      'Broń może oddać tyle strzałów, ile wynosi (wartość) i automatycznie przeładowuje się po każdym z nich. Gdy zostaną one wykorzystane, musisz całkowicie przeładować broń, stosując zwykłe zasady.',
  },
  {
    name: '(Broń) Odłamkowa (wartość)',
    description:
      'Wszystkie postacie w promieniu (wartość) metrów, odnoszą obrażenia równe PS + Obrażenia danej broni Odłamkowej i otrzymują wszelkie Stany przez nią wywołane.',
  },
  {
    name: '(Broń) Ciężka',
    description:
      'Możesz korzystać z Zalet broni Druzgocząca i Przebijająca tylko w Turze, w której wykonujesz Szarżę.',
  },
  {
    name: '(Broń) Niebezpieczna',
    description:
      'Dowolny nieudany Test, w którym wypadła 9 na kości dziesiątek lub jedności, uznawany jest za Rzut Pechowy.',
  },
  {
    name: '(Broń) Nieprecyzyjna',
    description:
      'Wykonując atak taką bronią, otrzymujesz karę -1 PS. Broń Nieprecyzyjna nigdy nie może być także Precyzyjną.',
  },
  {
    name: '(Broń) Powolna',
    description:
      'Zawsze atakujeszz ostani w Rundzie, niezależnie od Inicjatywy. Co więcej, przeciwnicy zyskują premię +1 PS do każdego Testu obrony przed takim atakiem.',
  },
  {
    name: '(Broń) Przeładowanie (wartość)',
    description:
      'Przeładowanie wymaga wykonania Wydłużonego Testu Broni Zasięgowej w odpowiedniej Kategorii broni i uzyskania tylu PS ile wynosi (wartość). Jeśli coś zakłóci przeładowanie, trzeba je podjąć od początku.',
  },
  {
    name: '(Broń) Tępa',
    description:
      'W przypadku ataku taką bronią wszystkie PP są podwajane. Co więcej, nie obowiązuje w jej przypadku zasada zadawania minimum 1 Rany po udanym trafieniu.',
  },
  {
    name: '(Pancerz) Giętki',
    description:
      'Można nosić taki pancerz pod wartwą innego pancerza (nieposiadającego tej Zalety). Uzyskujesz korzyści obydwu pancerzy.',
  },
  {
    name: '(Pancerz) Nieprzebijalny',
    description:
      'Większość ataków nie jest w stanie przebić tego pancerza. Wszystkie Rany Krytyczne są ignorowane.',
  },
  {
    name: '(Pancerz) Częściowy',
    description:
      'Przeciwnik który uzyska parzysty wynik rzutu na trafienie, albo wyrzuci Trafienie Krytyczne, ignoruje PP częściowego pancerza.',
  },
  {
    name: '(Pancerz) Wrażliwe Punkty',
    description:
      'Pancerz ma niewielkie miejsca, w które może wślizgnąć się ostrze, jeśli rpzeciwnika ma wystarczające umiejętności lub dość szczęścia. Jeśli wróg posługuje się bronią Nadziewającą i uzyska Trafienie Krytyczne, wszystkie PP tego pancerza są ignorowane.',
  },
];
