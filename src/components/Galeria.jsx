import React from 'react';


const PragaGaleria = () => {
  // Prágai nevezetességek
  const nevezetessegek = [
    {
      id: 1,
      nev: "Károly híd",
      kep: "https://cdn.britannica.com/63/242563-050-C1FD925B/Prague-Charles-Bridge-Karluv-Most-Czech-Republic.jpg",
      leiras: "A 14. században épült híd a Vltava folyón, Prága egyik legismertebb látványossága. 30 szent szobor díszíti.",
      kategoria: "történelmi"
    },
    {
      id: 2,
      nev: "Prágai Vár",
      kep: "https://cdn-imgix.headout.com/media/images/9db064b010e3780023ce12f2b143847c-AdobeStock_141426708.jpeg",
      leiras: "A világ legnagyobb ősi vára, a cseh állam szimbóluma. Több mint 70 000 m² területen fekszik.",
      kategoria: "történelmi"
    },
    {
      id: 3,
      nev: "Óvárosi tér",
      kep: "https://cdn.praguecitytourism.city/2024/03/13101933/01-stm-radnice-0288ret-m.jpg",
      leiras: "Prága történelmi központja, ahol megtalálható az Óvárosi toronyóra, a város egyik fő látványossága.",
      kategoria: "történelmi"
    },
    {
      id: 4,
      nev: "Szent Vitus-székesegyház",
      kep: "https://lh3.googleusercontent.com/p/AF1QipM3Ec6XFJI33iGulyoFvTe6VML-uavunNQyl_IB=s680-w680-h510",
      leiras: "Gótikus stílusú székesegyház a Prágai Vár területén, Csehország legnagyobb temploma.",
      kategoria: "egyház"
    },
    {
      id: 5,
      nev: "Lőportorony",
      kep: "https://lh3.googleusercontent.com/gps-cs-s/AB5caB-Jmi648x5OZ0qzD9RP3nqg04okpF4gZEdsqiDNscwclk-NO37j-I3f-PFweHBbD-Zh2wgx9TPxwu_2nrV5hDCVrt9JMsEsT0nc4fZNM31fPoJ8WYg2NvRrxiEgKQYXrpIYBHCRWw=s680-w680-h510",
      leiras: "A 15. századi városkapu, amely egykor a puskaport tárolta. Kiváló kilátás nyílik a tetejéről.",
      kategoria: "történelmi"
    },
    {
      id: 6,
      nev: "Václav tér",
      kep: "https://travelking.cdn.it7.sk/deadpool/locations/400/546-nO7Q-location.jpg",
      leiras: "Prága fő tere, amely inkább egy hosszú sugárút. A Nemzeti Múzeum uralja a tér felső részét.",
      kategoria: "kulturális"
    },
    {
      id: 7,
      nev: "John Lennon-fal",
      kep: "https://iranypraga.hu/wp-content/uploads/2017/01/Lennon-fal-Pr%C3%A1ga.jpg",
      leiras: "Színes graffitikkel borított fal, amely John Lennon emlékére készült és a békéért szól.",
      kategoria: "kulturális"
    },
    {
      id: 8,
      nev: "Petřín kilátótorony",
      kep: "https://cms.visitczechia.com/cms/getmedia/211f447a-4ebf-46d4-b7d2-42113a76c9fb/shutterstock_760088161_Petrin.jpg?width=1600&height=627&ext=.jpg",
      leiras: "Az Eiffel-toronyhoz hasonló torony a Petřín-dombon, amely gyönyörű panorámát nyújt a városra.",
      kategoria: "kilátó"
    }
  ];

  // Kategóriák
  const kategoriaLista = ["összes", ...new Set(nevezetessegek.map(item => item.kategoria))];

  // Állapot a kiválasztott kategóriához
  const [kivalasztottKategoria, setKivalasztottKategoria] = React.useState("összes");

  // Szűrt nevezetességek
  const szurtNevezetessegek = kivalasztottKategoria === "összes" 
    ? nevezetessegek 
    : nevezetessegek.filter(item => item.kategoria === kivalasztottKategoria);

  return (
    <div className="praga-galeria">
      <header className="hero">
        <h1>Prága Városi Galéria</h1>
        <p>Fedezze fel a száz torony városának csodáit</p>
      </header>

      <section className="section">
        <h2>Prágai Nevezetességek</h2>
        
        {/* Kategória szűrő */}
        <div className="kategoria-szuro">
          {kategoriaLista.map(kategoria => (
            <button
              key={kategoria}
              className={`kategoria-gomb ${kivalasztottKategoria === kategoria ? 'aktiv' : ''}`}
              onClick={() => setKivalasztottKategoria(kategoria)}
            >
              {kategoria}
            </button>
          ))}
        </div>

        {/* Galéria */}
        <div className="galeria-grid">
          {szurtNevezetessegek.map((nevezetesseg) => (
            <div key={nevezetesseg.id} className="galeria-kartya">
              <div className="kep-tarolo">
                <img src={nevezetesseg.kep} alt={nevezetesseg.nev} />
                <span className="kategoria-cimke">{nevezetesseg.kategoria}</span>
              </div>
              <div className="kartya-tartalom">
                <h3>{nevezetesseg.nev}</h3>
                <p>{nevezetesseg.leiras}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section pragai-tippek">
        <h2>Prágai Tippek</h2>
        <div className="tippek-grid">
          <div className="tipp-kartya">
            <h3>Legjobb idő a látogatásra</h3>
            <p>Április-május és szeptember-október, amikor kevesebb a turista és kellemes az időjárás.</p>
          </div>
          <div className="tipp-kartya">
            <h3>Közlekedés</h3>
            <p>Prágában kiváló a tömegközlekedés. Vegyen 3 napos jegyet a korlátlan utazáshoz.</p>
          </div>
          <div className="tipp-kartya">
            <h3>Helyi specialitás</h3>
            <p>Próbálja ki a híres cseh söröket (Pilsner Urquell, Budvar) és a trdelník süteményt.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2025 Sipos és Sipos ZRT.</p>
        <p>Készült Bene tanár úr megbízásából.</p>
      </footer>
    </div>
  );
};

export default PragaGaleria;