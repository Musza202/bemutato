import React from 'react';
import './gasztro.css';


const PragaGasztronomia = () => {
  // Prágai ételek adatai
  const pragaiEtelek = [
    {
      id: 1,
      nev: "Trdelník",
      leiras: "Hagyományos cseh sütemény, kültakarója ropogós, belseje puha és fahéjas. Gyakran van fűszeres cukorral vagy dióval megszórva.",
      kep: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Trdelnik_%28trdlo%29.jpg/800px-Trdelnik_%28trdlo%29.jpg"
    },
    {
      id: 2,
      nev: "Svíčková",
      leiras: "A legnépszerűbb cseh étel, marhafilé szaftos tejszínes-sáfrányos mártásban, áfonyalekvárral és tejszínhabbal tálalva.",
      kep: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Svickova_na_smetane.jpg/800px-Svickova_na_smetane.jpg"
    },
    {
      id: 3,
      nev: "Guláš",
      leiras: "A cseh gulás a magyar változathoz képest sűrűbb, kevesebb lével készül, és gyakran kenyérgombóccal vagy knedlivel tálalják.",
      kep: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Gulash_soup.jpg/800px-Gulash_soup.jpg"
    },
    {
      id: 4,
      nev: "Knedlíky",
      leiras: "A knedlík a cseh konyha alapvető körete, ami kelt tésztából készül. Legismertebb változatai a kenyér- és a burgonyaknedlík.",
      kep: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Bramborov%C3%A9_knedl%C3%ADky.jpg/800px-Bramborov%C3%A9_knedl%C3%ADky.jpg"
    },
    {
      id: 5,
      nev: "Pilsner Urquell",
      leiras: "Prága környékén, Plzeň városában készül a világ legismertebb világos söre, amely a pilsner típusú sörök prototípusa.",
      kep: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Pilsner_urquell.jpg/800px-Pilsner_urquell.jpg"
    }
  ];

  // Prágai éttermek
  const pragaiEtteremek = [
    {
      id: 1,
      nev: "U Fleků",
      leiras: "Prága legrégebbi sörfőzdéje és étterme, 1499 óta működik. Különlegességük a saját készítésű sötét sör.",
      cim: "Křemencova 11, 110 00 Praha 1"
    },
    {
      id: 2,
      nev: "Lokál",
      leiras: "Modern hangulatú étterem, ahol kiváló minőségű cseh ételeket kínálnak friss helyi alapanyagokból.",
      cim: "Dlouhá 33, 110 00 Praha 1"
    },
    {
      id: 3,
      nev: "La Degustation Bohême Bourgeoise",
      leiras: "Michelin-csillagos étterem, ahol a cseh konyha kifinomult változatát kóstolhatja meg a vendégek.",
      cim: "Haštalská 18, 110 00 Praha 1"
    }
  ];

  return (
    <div className="praga-gasztronomia">
      <header className="hero">
        <h1>Prága Gasztronómiája</h1>
        <p>Fedezze fel a cseh főváros ízletes kulináris kincseit</p>
      </header>

      <section className="section">
        <h2>Hagyományos Prágai Ételek</h2>
        <div className="etelek-grid">
          {pragaiEtelek.map((etel) => (
            <div key={etel.id} className="etel-kartya">
              <img src={etel.kep} alt={etel.nev} />
              <h3>{etel.nev}</h3>
              <p>{etel.leiras}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section etteremek">
        <h2>Ajánlott Prágai Éttermek</h2>
        <div className="etteremek-lista">
          {pragaiEtteremek.map((etterem) => (
            <div key={etterem.id} className="etterem-kartya">
              <h3>{etterem.nev}</h3>
              <p>{etterem.leiras}</p>
              <p className="cim">{etterem.cim}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section fun-facts">
        <h2>Érdekességek a Prágai Gasztronómiáról</h2>
        <ul>
          <li>A cseh konyha erősen befolyásolta a szomszédos országok, különösen Ausztria és Németország konyháját.</li>
          <li>Prágában több mint 2000 sörfajta kapható, köztük a világon egyedülálló ízek.</li>
          <li>A knedlík annyira fontos a cseh konyhában, hogy a "knedlíkosztás" (knedlíková válka) kifejezés a politikai vitákra is utal.</li>
          <li>A Trdelník eredetileg Szlovákiából származik, de Prágában vált turistalátványossággá.</li>
        </ul>
      </section>

      <footer>
        <p>© 2023 Prága Gasztronómiai Útikalauz</p>
        <p>Készült React-ben, a cseh konyha szerelmeseinek</p>
      </footer>
    </div>
  );
};

export default PragaGasztronomia;