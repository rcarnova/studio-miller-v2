import cascinaOmbraImg from "@/assets/cascina-ombra.png";
import fibrillaSimbolo from "@/assets/fibrilla/simbolo.jpg";
import fibrillaHero from "@/assets/fibrilla/hero-campaign.jpg";
import fibrillaSignificato from "@/assets/fibrilla/significato.jpg";
import fibrillaCoordinata from "@/assets/fibrilla/coordinata.jpg";
import fibrillaTshirt from "@/assets/fibrilla/tshirt.jpg";
import fibrillaTote from "@/assets/fibrilla/tote.jpg";
import fibrillaMobile from "@/assets/fibrilla/mobile.jpg";
import fibrillaColori from "@/assets/fibrilla/colori.jpg";
import vcLogo from "@/assets/villacingoli/logo.jpg";
import vcSimbolo from "@/assets/villacingoli/simbolo.jpg";
import vcPalette from "@/assets/villacingoli/palette.jpg";
import vcCoordinata from "@/assets/villacingoli/coordinata.jpg";
import vcTshirt from "@/assets/villacingoli/tshirt.jpg";
import vcTote from "@/assets/villacingoli/tote.jpg";
import vcManifestoBus from "@/assets/villacingoli/manifesto-bus.jpg";
import vcBillboard from "@/assets/villacingoli/billboard.jpg";
import vcParkPoster from "@/assets/villacingoli/park-poster.jpg";
import pisaniHero from "@/assets/pisani/hero.jpg";
import pisaniPalette from "@/assets/pisani/palette.jpg";
import pisaniCashmere from "@/assets/pisani/cashmere.jpg";
import pisaniHangtag from "@/assets/pisani/hangtag.jpg";
import pisaniLandscape from "@/assets/pisani/landscape.jpg";
import pisaniModelField from "@/assets/pisani/model-field.jpg";
import pisaniPortrait from "@/assets/pisani/portrait.jpg";
import pisaniWebDevices from "@/assets/pisani/web-devices.jpg";
import pisaniMobile from "@/assets/pisani/mobile-landing.jpg";
import pisaniKnit from "@/assets/pisani/knit-detail.jpg";
import pisaniWordmark from "@/assets/pisani/wordmark.jpg";

export type Project = {
  slug: string;
  client: string;
  title: string;
  tag: string;
  sector: "Manifatturiero" | "Food" | "ITC" | "Moda" | "Servizi" | "No-profit";
  year: string;
  description: string;
  result?: string;
  videoId?: string;
  image?: string;
  gallery?: { src: string; caption?: string; aspect?: "wide" | "tall" | "square"; fit?: "cover" | "contain" }[];
  detail?: {
    challenge: string;
    approach: string;
    outcome: string;
    quote?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "sambonet-tailor-made",
    client: "Sambonet — Gruppo Arcturus",
    title: "Dai ritmo alla tua tavola",
    tag: "Content Strategy · Brand Storytelling",
    sector: "Manifatturiero",
    year: "2019",
    description:
      "Strategia di contenuto e video storytelling per il lancio del programma Tailor Made: posate completamente personalizzabili per modello, finitura, colore e incisione. Affiancato il brand nella progettazione strategica e nella produzione di una campagna video emozionale distribuita su YouTube, Facebook e Instagram.",
    result: "Progetto premiato agli Interactive Key Awards",
    videoId: "HZFvk_JRbFI",
    detail: {
      challenge:
        "All'inizio del 2019 Sambonet lancia il programma Tailor Made: posate completamente personalizzabili per modello, finitura, colore e incisione. La sfida era rivolgersi, per la prima volta, direttamente ai consumatori finali — un cambio di paradigma per un brand B2B.",
      approach:
        "La content strategy è stata costruita attorno al concetto di unicità: cosa significa per ognuno di noi fare una scelta che ci rappresenta. Cinque storie raccontate: bambini in bicicletta, un matrimonio, una donna che ritrova i luoghi di un amore passato, un giovane in sartoria, una coppia sotto le stelle. Lo spot principale (95 secondi) è firmato da Matteo Bellizzi, regista presente alla Mostra del Cinema di Venezia 2003. La colonna sonora utilizza i suoni reali del processo produttivo Sambonet, in collaborazione con il sound artist Gigi Biolcati.",
      outcome:
        "Video principale 95\" + 4 pillole per campagna digitale pianificata da Richclicks su YouTube, Facebook, Instagram. Il programma Tailor Made ha vinto l'Iconic Awards 2019 nella categoria Innovative Interior · Best of the Best.",
      quote:
        "Abbiamo scelto di affidarci a Studio Miller per la progettazione strategica e la realizzazione dei contenuti. Il risultato ha parlato da solo.",
    },
  },
  {
    slug: "randstad-employer-branding",
    client: "Randstad",
    title: "Le persone raccontano l'azienda",
    tag: "Employer Branding · Video",
    sector: "Servizi",
    year: "2021",
    description:
      "Video di Employer Branding per Randstad Italia: un racconto della vita interna all'azienda affidato direttamente alla voce di chi la vive ogni giorno. Workshop per definire i valori, coinvolgimento della community interna, interviste e produzione video.",
    result: "Un racconto autentico dell'identità Randstad Italia",
    videoId: "pWJ270rIuDQ",
    detail: {
      challenge:
        "Randstad è una multinazionale olandese fondata nel 1960, tra le più importanti agenzie di ricerca, selezione e formazione di risorse umane al mondo, con filiali in 40 stati tra Europa, Asia e Nord America. Mara della comunicazione interna, Paola dell'HR e Fulvia del marketing cercavano un modo per raccontare la vita all'interno di Randstad attraverso un video con i propri dipendenti. Tre le sfide: cosa dire, come dirlo, come farlo.",
      approach:
        "Abbiamo lavorato in tre fasi. Individuazione dei valori: attraverso workshop dedicati abbiamo identificato i valori su cui si fonda la realtà Randstad e quelli che l'azienda vuole trasmettere. Coinvolgimento della community: abbiamo chiesto direttamente alle persone di Randstad di raccontare la propria esperienza in azienda. Racconto: la scelta è stata quella di realizzare vere interviste, montate poi nel video finale — perché a raccontare Randstad dovevano essere proprio coloro che la vivono.",
      outcome:
        "Un video di Employer Branding che racconta la realtà Randstad attraverso la voce di chi vive quotidianamente le sfide dell'azienda. I volti e le interviste scelte rappresentano la vera essenza dell'Employer Branding di Randstad Italia: raccontare il lavoro, raccontare la community.",
    },
  },
  {
    slug: "caritas-cascina-ombra",
    client: "Caritas di Bra",
    title: "Cascina Ombra: un nome, una casa, una comunità",
    tag: "Naming · Brand Identity",
    sector: "No-profit",
    year: "2018",
    description:
      "Naming, logo e visual identity per il progetto di orto sociale promosso dalla Caritas di Bra all'interno della \"Cittadella della Carità\". Un percorso di workshop, envisioning e storytelling per dare voce a una casa che accoglie, protegge e fa ombra.",
    result: "Identità visiva applicata a flyer, magliette e materiali della struttura",
    image: cascinaOmbraImg,
    detail: {
      challenge:
        "La Caritas di Bra promuove lo sviluppo integrale della persona e l'attivazione della comunità per costruire una società più giusta e inclusiva. Nel 2018, grazie al comodato gratuito della Famiglia Olivero di Sommariva Bosco, nasce un orto sociale dove persone fragili, cittadini e cooperative coltivano insieme la terra — e con la terra, le relazioni. La sfida: trovare un nome capace di veicolare questo messaggio e rendere riconoscibile il progetto.",
      approach:
        "Il percorso si è articolato in tre fasi. Envisioning: due momenti di lavoro — \"come vogliamo mostrarci al mondo\" e \"io dico, io faccio, io sono\" — per costruire una visione condivisa. Storytelling: raccolta di storie di fondamenta (gli inizi del progetto) e storie di successo (i traguardi raggiunti) per dare voce a chi vive la realtà dall'interno. Keywords e proposte di naming: dai workshop sono emerse parole chiave e tre proposte — Cascina Ombra, Cascina Luna, Mattone Giallo — discusse poi con tutto il team.",
      outcome:
        "La scelta è caduta su Cascina Ombra: un nome che richiama il territorio braidese e tiene insieme l'ambivalenza tra protezione, presenza costante e buio. Da lì è nato il logo — due mani che diventano tetto attorno a una piccola casa — e l'intera visual identity, declinata su flyer per l'inaugurazione, borse e magliette per la promozione della struttura.",
      quote:
        "Non viene coltivata solo la terra, ma anche relazioni tra persone che si riappropriano del futuro.",
    },
  },
  {
    slug: "samsung-galaxy-zflip-sero",
    client: "Samsung × Civica Scuola di Cinema Luchino Visconti",
    title: "Cambio di prospettiva",
    tag: "Video · Brand Collaboration",
    sector: "ITC",
    year: "2020",
    description:
      "Video per Galaxy Z Flip e The Sero realizzato in collaborazione con la Civica Scuola di Cinema Luchino Visconti. Un gruppo di ex studenti, oggi giovani professionisti dell'audio/video, ha firmato — sotto la supervisione di Studio Miller — un racconto sul cambio di prospettiva e sulla flessibilità della tecnologia contemporanea.",
    result: "Video pubblicato sul canale YouTube ufficiale di Samsung Italia",
    videoId: "Q-OXn5qsjhM",
    detail: {
      challenge:
        "Samsung Italia, in collaborazione con la Civica Scuola di Cinema Luchino Visconti, voleva raccontare due prodotti — Galaxy Z Flip e The Sero — attraverso il linguaggio del cambio di prospettiva. La sfida: dare voce a una nuova generazione di autori e mostrare come la tecnologia risponda a esigenze e abitudini in continua evoluzione.",
      approach:
        "La Civica Scuola di Cinema Luchino Visconti ha ingaggiato alcuni ex studenti, oggi giovani professionisti del mondo audio/video. Sotto la supervisione di Studio Miller, il team ha sviluppato un racconto visivo dedicato alla flessibilità: un inno al cambiamento, alle nuove prospettive e alla capacità di adattamento che caratterizza il mondo odierno.",
      outcome:
        "Un video distribuito sul canale YouTube ufficiale di Samsung Italia, in cui Galaxy Z Flip e The Sero diventano strumenti narrativi per parlare di prospettiva e contemporaneità — e una piattaforma reale di crescita per giovani autori al loro primo progetto industry.",
    },
  },
  {
    slug: "caritas-fibrilla",
    client: "Caritas — Cooperativa Sociale Fibrilla",
    title: "Fibrilla: radici sottili, energia che mette le ali",
    tag: "Naming · Brand Identity",
    sector: "No-profit",
    year: "2020",
    description:
      "Naming e visual identity per la cooperativa sociale Fibrilla, uno dei progetti di valorizzazione del lavoro artigianale promossi da Caritas sul territorio di Vercelli. Un'identità che racconta radici, connessione e slancio verso un futuro brillante.",
    result: "Identità di marca completa per la nuova cooperativa sociale",
    image: fibrillaHero,
    gallery: [
      { src: fibrillaSimbolo, caption: "Il simbolo: persone connesse, foglie, energia", aspect: "square", fit: "contain" },
      { src: fibrillaSignificato, caption: "Il significato nel dettaglio: esagono, persone, energia, foglie", aspect: "wide", fit: "contain" },
      { src: fibrillaColori, caption: "La palette: blu profondo, verde lime, nero, arancio", aspect: "wide", fit: "contain" },
      { src: fibrillaCoordinata, caption: "Coordinata: pattern, carta intestata, biglietti da visita", aspect: "wide", fit: "contain" },
      { src: fibrillaTote, caption: "Tote bag — il marchio nello spazio pubblico", aspect: "tall", fit: "cover" },
      { src: fibrillaTshirt, caption: "T-shirt: il logo come segno di appartenenza", aspect: "wide", fit: "cover" },
      { src: fibrillaMobile, caption: "Mobile: \"Qui nasce il cambiamento, insieme\"", aspect: "tall", fit: "cover" },
    ],
    detail: {
      challenge:
        "Caritas ci ha ingaggiati per creare l'identità di uno dei progetti di valorizzazione del lavoro artigianale sul territorio di Vercelli: una cooperativa sociale che avesse bisogno di un nome e di un volto capaci di raccontarne la natura — fatta di lavoro paziente, connessioni sottili e desiderio di futuro.",
      approach:
        "Il naming nasce da due immagini sovrapposte. Da un lato le radici fini — quelle che, invisibili, assorbono i nutrienti e tengono in vita la pianta. Dall'altro i muscoli fibrillari delle ali degli insetti, capaci di una contrazione e distensione rapidissima che scatena l'energia del volo. Fibrilla tiene insieme le due cose: la struttura sottile e connessa delle radici e la spinta vitale che permette di alzarsi in volo.",
      outcome:
        "Fibrilla porta con sé la luce, il concetto di un futuro brillante e l'eccitazione di chi vuole fare. Da questo doppio significato — radice e ala — nasce il logo e tutta la visual identity della cooperativa, applicata ai materiali di comunicazione del progetto.",
    },
  },
  {
    slug: "villa-cingoli-rebranding",
    client: "Villa Cingoli — Comune di Vercelli",
    title: "Famiglia si diventa.",
    tag: "Rebranding · Visual Identity",
    sector: "No-profit",
    year: "2019",
    description:
      "Rebranding e visual identity per Villa Cingoli, il Centro per le Famiglie del Comune di Vercelli. Un'identità costruita attorno alla promessa di accompagnare le famiglie con professionalità, cura e condivisione — radicata nei simboli della città e nelle persone che la abitano.",
    result: "Identità completa: logo, palette, coordinata, web, stampa e affissione",
    image: vcBillboard,
    gallery: [
      { src: vcLogo, caption: "Il logo nelle versioni positiva e negativa", aspect: "wide", fit: "cover" },
      { src: vcSimbolo, caption: "Il simbolo: rosone della Basilica di Sant'Andrea, persone, ruota di guida", aspect: "square", fit: "cover" },
      { src: vcPalette, caption: "La palette: arancio identitario e accenti vitali", aspect: "wide", fit: "cover" },
      { src: vcCoordinata, caption: "Coordinata: carta intestata, biglietti da visita, materiali", aspect: "wide", fit: "cover" },
      { src: vcTshirt, caption: "T-shirt brandizzata", aspect: "tall", fit: "cover" },
      { src: vcManifestoBus, caption: "Manifesto AdoleSCIENZA — affissione urbana", aspect: "wide", fit: "cover" },
      { src: vcParkPoster, caption: "Affissione \"Famiglia si diventa.\" nel parco", aspect: "tall", fit: "cover" },
    ],
    detail: {
      challenge:
        "Villa Cingoli è il Centro per le Famiglie del Comune di Vercelli: un luogo che accoglie chi ha bisogno di supporto sui temi e le difficoltà del proprio nucleo familiare. La sfida era definire un'identità visiva in linea con il pubblico a cui il centro si rivolge, capace di esprimere l'essenza della sua missione e delle persone che ne fanno parte.",
      approach:
        "Il percorso si è articolato in due fasi laboratoriali. Workshop di definizione dei valori: per mettere a fuoco la promessa del centro — aiutare le persone con professionalità, cura e condivisione. Workshop sulle personas: per dare un volto reale al pubblico di riferimento e calibrare tono, linguaggio e segni visivi sulle sue esigenze. Da qui è nato il sistema identitario: un simbolo che fonde il rosone della Basilica di Sant'Andrea — emblema di Vercelli — con le figure di persone in cerchio e la ruota di guida, sintesi di radicamento, comunità e direzione.",
      outcome:
        "Una nuova identità completa: logo, palette, tipografia, coordinata, sito web, materiali di stampa e una campagna di affissione articolata su poster, manifesti e billboard urbani. \"Famiglia si diventa.\" è diventato il payoff che porta Villa Cingoli nello spazio pubblico della città.",
      quote:
        "Aiutare le persone con professionalità, cura e condivisione.",
    },
  },
  {
    slug: "pisani-italian-dream",
    client: "Maglificio Pisani",
    title: "italianDream: il vero lusso è realizzare se stessi",
    tag: "Brand Building · Visual Identity",
    sector: "Moda",
    year: "2022",
    description:
      "Brand building e lancio di italianDream, la prima collezione donna a marchio Maglificio Pisani. Dalla piattaforma di marca al sistema visivo, fino alla landing di lancio dedicata alle boutique multibrand svizzere.",
    result: "Identità completa e landing di lancio per la prima collezione a marchio",
    image: pisaniHero,
    gallery: [
      { src: pisaniPalette, caption: "Logo, marchio e palette: rosa identitario, bordeaux, verde acqua", aspect: "wide", fit: "cover" },
      { src: pisaniLandscape, caption: "L'immaginario: paesaggio italiano, nebbia, luce rosata", aspect: "square", fit: "cover" },
      { src: pisaniCashmere, caption: "Cashmere: la materia come promessa di qualità", aspect: "wide", fit: "cover" },
      { src: pisaniHangtag, caption: "Hangtag e brochure prodotto — la coordinata di marca", aspect: "wide", fit: "cover" },
      { src: pisaniPortrait, caption: "La donna italianDream: presenza, calma, eleganza", aspect: "tall", fit: "cover" },
      { src: pisaniWebDevices, caption: "Web responsive: dal desktop al mobile", aspect: "wide", fit: "cover" },
      { src: pisaniMobile, caption: "Landing di lancio per le boutique", aspect: "tall", fit: "cover" },
    ],
    detail: {
      challenge:
        "Maglificio Pisani — laboratorio di maglieria attivo dal 1973 — decide di avviare una nuova linea donna a proprio marchio, individuando nelle boutique multibrand il primo target con cui costruire un brand riconoscibile. La sfida: misurarsi con il mercato del fashion, fatto di regole proprie e popolato da marchi noti e produttori made in Italy già strutturati sul diretto. Per rendere la sfida sostenibile, il primo passo è il mercato delle boutique svizzere — titolari e clienti in costante ricerca di un'idea di stile che li rispecchi.",
      approach:
        "Studio Miller ha affiancato il team marketing e commerciale nella costruzione del brand e nella strategia di lancio. Il punto di partenza: tradurre la competenza acquisita negli anni, l'implementazione tecnologica e la passione delle persone in una promessa chiara — \"il vero lusso è realizzare se stessi\". Da qui la piattaforma di marca, il naming della prima collezione (italianDream), il sistema visivo — palette ispirata ai colori dell'Italia in una luce rosata, tipografia che alterna il rigore di Domine al carattere editoriale di Syne — e una landing di lancio dedicata alle boutique, costruita per generare lead qualificati.",
      outcome:
        "italianDream nasce come prima collezione e prima espressione pubblica del brand Maglificio Pisani. Identità completa (logo, marchio, palette, tipografia, coordinata, hangtag), immaginario fotografico costruito attorno ai paesaggi italiani e alla materia cashmere, e una landing dedicata alle boutique come primo punto di contatto commerciale. Le basi per un piano di crescita di medio-lungo termine: posizionarsi con efficacia in un mercato dove ogni dettaglio è racconto.",
      quote:
        "Ogni prodotto viene seguito con cura: lavori eccellenti, perfetti nei dettagli e di proprietà futura.",
    },
  },
  {
    slug: "casa-vinaria-narrativa",
    client: "Casa Vinaria del Monferrato",
    title: "Le parole del vino",
    tag: "Corporate Storytelling · Editorial",
    sector: "Food",
    year: "2023",
    description:
      "Costruzione della narrativa di brand per una cantina storica del Monferrato. Definizione del tono di voce, scrittura del manifesto, sviluppo della linea editoriale per packaging, sito e canali social.",
    result: "Restyling completo della comunicazione di brand",
  },
  {
    slug: "nodal-cloud-positioning",
    client: "Nodal Cloud Services",
    title: "L'infrastruttura che parla umano",
    tag: "Brand Strategy · Naming",
    sector: "ITC",
    year: "2024",
    description:
      "Naming, positioning e piattaforma di marca per una scale-up del cloud B2B. Tradurre un'offerta tecnica in promessa comprensibile per CIO e direzioni acquisti, senza perdere autorevolezza tecnologica.",
    result: "Round Series A chiuso a 4 mesi dal rebranding",
  },
  {
    slug: "atelier-mossi-collezione",
    client: "Atelier Mossi",
    title: "Sartoria, in tre atti",
    tag: "Content & Video",
    sector: "Moda",
    year: "2023",
    description:
      "Direzione creativa e produzione video per la presentazione della collezione FW23 di un atelier di sartoria torinese. Trilogia di cortometraggi che racconta il rapporto tra mano, tessuto e tempo.",
    result: "Selezionato a Milano Fashion Film Festival 2024",
  },
  {
    slug: "pastificio-ferri-piano-editoriale",
    client: "Pastificio Ferri 1908",
    title: "Cento anni, una storia all'anno",
    tag: "Content Strategy",
    sector: "Food",
    year: "2024",
    description:
      "Piano editoriale annuale per il centenario di un pastificio artigianale. Dodici racconti, dodici prodotti, dodici testimonianze: un calendario che ha trasformato l'archivio aziendale in contenuto.",
    result: "+62% engagement medio sui canali proprietari",
  },
];

export const sectors = ["Tutti", "Manifatturiero", "Food", "ITC", "Moda", "Servizi", "No-profit"] as const;
