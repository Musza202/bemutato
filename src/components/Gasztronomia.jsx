import React from 'react';



const PragaGasztronomia = () => {
  // Prágai ételek adatai
  const pragaiEtelek = [
    {
      id: 1,
      nev: "Trdelník",
      leiras: "Hagyományos cseh sütemény, kültakarója ropogós, belseje puha és fahéjas. Gyakran van fűszeres cukorral vagy dióval megszórva.",
      kep: "https://images.squarespace-cdn.com/content/v1/5e558c8165fc4c78f502938d/1615393965092-1F3RUUQ9X0VS5TERI64S/1024px-Trdelni%CC%81k_C%CC%8Cesky%CC%81_Krumlov_%281%29.jpg"
    },
    {
      id: 2,
      nev: "Svíčková",
      leiras: "A legnépszerűbb cseh étel, marhafilé szaftos tejszínes-sáfrányos mártásban, áfonyalekvárral és tejszínhabbal tálalva.",
      kep: "https://cdn.administrace.tv/2022/08/06/hd/f1f13d31984ad04ed5bd24d501678a2d.jpg"
    },
    {
      id: 3,
      nev: "Guláš",
      leiras: "A cseh gulás a magyar változathoz képest sűrűbb, kevesebb lével készül, és gyakran kenyérgombóccal vagy knedlivel tálalják.",
      kep: "https://www.cooklikeczechs.com/wp-content/uploads/2022/08/czech-beef-goulash-1-500x500.jpg"
    },
    {
      id: 4,
      nev: "Knedlíky",
      leiras: "A knedlík a cseh konyha alapvető körete, ami kelt tésztából készül. Legismertebb változatai a kenyér- és a burgonyaknedlík.",
      kep: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F8B62DF2-977F-4A48-A02A-2047E5913BBC/Derivates/E2D76298-E122-49F7-9E01-79A1E2585F0E.jpg"
    },
    {
      id: 5,
      nev: "Pilsner Urquell",
      leiras: "Prága környékén, Plzeň városában készül a világ legismertebb világos söre, amely a pilsner típusú sörök prototípusa.",
      kep: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGjZGUEXZQ06J-H1PjqgzwbN19VTGioWkwwydInC7RbzovuMd8MfcO7JJ1zz74AejFkj2ZPqxfcnY-1ymOwAY58EVL3WKT5rqIW2qUXt0XnAXBIQJk0HLVBel7cA277C9DBIdlvHAfPEo/s512/pinkasu.jpg"
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
        <h1>Prága gasztronómiája</h1>
        <p>Fedezze fel a cseh főváros ízletes kulináris kincseit</p>
      </header>

      <section className="section">
        <h2>Hagyományos prágai ételek</h2>
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
        <h2>Ajánlott prágai éttermek</h2>
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
        <h2>Érdekességek a prágai gasztronómiáról</h2>
        <ul>
          <li>A cseh konyha erősen befolyásolta a szomszédos országok, különösen Ausztria és Németország konyháját.</li>
          <li>Prágában több mint 2000 sörfajta kapható, köztük a világon egyedülálló ízek.</li>
          <li>A knedlík annyira fontos a cseh konyhában, hogy a "knedlíkosztás" (knedlíková válka) kifejezés a politikai vitákra is utal.</li>
          <li>A Trdelník eredetileg Szlovákiából származik, de Prágában vált turistalátványossággá.</li>
        </ul>
      </section>

      <footer>
        <p>© 2025 Sipos és Sipos Zrt.</p>
        <p>Készült Bene tanár úr megbízásából.</p>
      </footer>
    </div>
  );
};

export default PragaGasztronomia;