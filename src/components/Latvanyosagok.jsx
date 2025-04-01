import {BrowserRouter as Router, Routes , Route, Link} from 'react-router-dom';
import Fooldalaz from './Fooldal';
import "./Latvanyossagok.css"

export default function Latvany() {
    return (
        <div id="latvanyossag">
            <main>
                <h1>Prága Látványosságai</h1>
                <ul>
                    <li><strong>Károly híd</strong> - A híres történelmi híd a Moldva folyón, amelyet 1357-ben kezdtek építeni.</li>
                    <li><strong>Prágai vár</strong> - A világ egyik legnagyobb várkomplexuma, amely a cseh elnök rezidenciája is.</li>
                    <li><strong>Óvárosi tér</strong> - A híres csillagászati órával (Orloj) és lenyűgöző történelmi épületekkel.</li>
                    <li><strong>Szent Vitus-székesegyház</strong> - Gyönyörű gótikus katedrális a Prágai vár területén, ahol cseh királyok sírjai találhatók.</li>
                    <li><strong>Zsidó negyed</strong> - Történelmi zsidó temető és múzeumok, köztük a híres Régi-új Zsinagóga.</li>
                    <li><strong>Petrín kilátó</strong> - Egy Eiffel-toronyra emlékeztető kilátó, ahonnan gyönyörű panoráma nyílik a városra.</li>
                    <li><strong>Vencel tér</strong> - Prága egyik legfontosabb köztere, történelmi események helyszíne és bevásárlóövezet.</li>
                    <li><strong>Nemzeti Múzeum</strong> - Prága egyik legfontosabb kulturális intézménye a Vencel téren.</li>
                    <li><strong>John Lennon-fal</strong> - Egy színes graffiti-fal, amely a szabadság és a béke szimbóluma.</li>
                    <li><strong>Táncoló ház</strong> - Egy modern építészeti csoda, amely Frank Gehry tervei alapján készült.</li>
                    <li><strong>Vyšehrad</strong> - Egy történelmi erőd és temető, ahol számos híres cseh személyiség nyugszik.</li>
                    <li><strong>Nemzeti Színház</strong> - A cseh kultúra egyik legfontosabb épülete, ahol opera- és balettelőadásokat tartanak.</li>
                </ul>
            </main>
        </div>
    );
}