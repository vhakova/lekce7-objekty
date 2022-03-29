let zvirataNaFarme = [
    {jmeno: 'Kravička', foto: 'obrazky/krava.jpg'},
    {jmeno: 'Husa', foto: 'obrazky/husa.jpg'},
    {jmeno: 'Kočka', foto: 'obrazky/kocka.jpg'},
    {jmeno: 'Kůň', foto: 'obrazky/kun.jpg'},
    {jmeno: 'Ovečka', foto: 'obrazky/ovce.jpg'},
    {jmeno: 'Pejsek', foto: 'obrazky/pes.jpg'},
]
let farma = document.querySelector('.farma');
for (let i = 0; i < zvirataNaFarme.length; i = i + 1) {
    //Vytvoření divu
    let zvire = document.createElement('div');
    zvire.className = 'zvire';

    //Vytvoření obrázku zvířátka
    let fotoZvirete = document.createElement('img');
    fotoZvirete.className = 'foto';
    fotoZvirete.src = zvirataNaFarme[i].foto;

    //Vytvoření popisku zvířátka
    let jmenoZvirete = document.createElement('span');
    jmenoZvirete.className = 'jmeno';
    jmenoZvirete.innerHTML = zvirataNaFarme[i].jmeno;

    //Další a další zvířátka
    zvire.appendChild(fotoZvirete);
    zvire.appendChild(jmenoZvirete);

    //Zobrazení zvířátek na stránce
    farma.appendChild(zvire);
}


