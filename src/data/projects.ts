import cascinaOmbraImg from "@/assets/cascinaombra/hero-logo.jpg";
import coLogoOrange from "@/assets/cascinaombra/logo-orange.jpg";
import coLogoBlack from "@/assets/cascinaombra/logo-black.jpg";
import coLogoGrey from "@/assets/cascinaombra/logo-grey.jpg";
import coColori from "@/assets/cascinaombra/colori.jpg";
import coTshirt from "@/assets/cascinaombra/tshirt.jpg";
import coEmbroidery from "@/assets/cascinaombra/embroidery.jpg";
import coTote from "@/assets/cascinaombra/tote.jpg";
import samsungSeroCover from "@/assets/samsung-sero-cover.png";
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
import dvHero from "@/assets/dolciaria/hero-bisciola.png";
import dvLogoOld from "@/assets/dolciaria/logo-old.jpg";
import dvLogoNew from "@/assets/dolciaria/logo-new.jpg";
import dvPalette from "@/assets/dolciaria/palette.jpg";
import dvCow from "@/assets/dolciaria/cow.jpg";
import dvHands from "@/assets/dolciaria/hands-flour.jpg";
import dvEggs from "@/assets/dolciaria/eggs-cloth.jpg";
import dvIngredients from "@/assets/dolciaria/ingredients.jpg";
import dvChildren from "@/assets/dolciaria/children.jpg";
import dvPersonality from "@/assets/dolciaria/personality.jpg";
import eudaimonLogo from "@/assets/eudaimon-logo.png";
import s4nHero from "@/assets/speak4nature/hero-forest.jpg";
import s4nWebsite from "@/assets/speak4nature/website-home.jpg";
import s4nPoster from "@/assets/speak4nature/poster-workshop.jpg";
import s4nRollup from "@/assets/speak4nature/rollup-event.jpg";
import s4nCard from "@/assets/speak4nature/business-card.jpg";
import s4nLogo from "@/assets/speak4nature/logo-positive.jpg";
import s4nSymbol from "@/assets/speak4nature/symbol.jpg";
import qdWorkshop from "@/assets/qdexhaust/workshop-postit.jpg";
import qdPerception from "@/assets/qdexhaust/brand-perception.jpg";
import qdHedgehog from "@/assets/qdexhaust/hedgehog-concept.jpg";
import qdRideSound from "@/assets/qdexhaust/ride-the-sound.jpg";
import qdHandmade from "@/assets/qdexhaust/handmade-emotions.jpg";
import moondinoHero from "@/assets/moondino/moondino-hero.jpg";
import moondinoStyle from "@/assets/moondino/moondino-style.jpg";
import moondinoMockup from "@/assets/moondino/moondino-mockup.jpg";
import moondinoRiso from "@/assets/moondino/moondino-riso-cover.jpg";
import moondinoRisoLogo from "@/assets/moondino/moondino-riso-logo.jpg";
import moondinoDiscovery from "@/assets/moondino/moondino-discovery.jpg";
import imeasCover from "@/assets/imeas/imeas-cover.webp";
import imeasDifferentiator from "@/assets/imeas/imeas-differentiator.webp";
import imeasHedgehog from "@/assets/imeas/imeas-hedgehog.webp";
import imeasIdentitySignals from "@/assets/imeas/imeas-identity-signals.webp";
import imeasPersona from "@/assets/imeas/imeas-persona.webp";
import simonettiCover from "@/assets/studio-simonetti/simonetti-cover.webp";
import simonettiLogo from "@/assets/studio-simonetti/simonetti-logo.webp";
import simonettiStationery from "@/assets/studio-simonetti/simonetti-stationery.webp";
import simonettiWeb from "@/assets/studio-simonetti/simonetti-web.webp";
import padernoCover from "@/assets/paderno/paderno-cover.webp";
import padernoProducts from "@/assets/paderno/paderno-products.webp";
import padernoGlassware from "@/assets/paderno/paderno-glassware.webp";
import padernoFlair from "@/assets/paderno/paderno-flair.webp";
import symphonyCover from "@/assets/paderno/Symphony/symphony-cover.webp";
import symphonyPots from "@/assets/paderno/Symphony/symphony-pots.webp";
import symphonyKnife from "@/assets/paderno/Symphony/symphony-knife.webp";
import symphonyPasta from "@/assets/paderno/Symphony/symphony-pasta.webp";
import symphonySieve from "@/assets/paderno/Symphony/symphony-sieve.webp";
import symphonyPlating from "@/assets/paderno/Symphony/symphony-plating.webp";

export type Project = {
  slug: string;
  client: string;
  title: string;
  tag: string;
  sector: "Manifatturiero" | "Food" | "ITC" | "Moda" | "Servizi" | "No-profit" | "Pubblica Amministrazione · Ricerca" | "Servizi · Noleggio Auto" | "Food Equipment · Mixology" | "Food Equipment · Alta Cucina";
  year: string;
  description: string;
  result?: string;
  videoId?: string;
  videoUrl?: string;
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
    gallery: [
      { src: coLogoOrange, aspect: "square", fit: "cover", caption: "Logo · versione primaria" },
      { src: coLogoBlack, aspect: "square", fit: "cover", caption: "Versione monocromatica" },
      { src: coColori, fit: "cover", caption: "Sistema colori e costruzione del simbolo" },
      { src: coLogoGrey, fit: "cover", caption: "Declinazioni del marchio" },
      { src: coTshirt, aspect: "tall", fit: "cover", caption: "Magliette" },
      { src: coEmbroidery, aspect: "wide", fit: "cover", caption: "Ricamo · dettaglio" },
      { src: coTote, aspect: "tall", fit: "cover", caption: "Tote bag" },
    ],
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
    image: samsungSeroCover,
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
    slug: "dolciaria-valtellinese-rebranding",
    client: "Dolciaria Valtellinese",
    title: "Il nostro ingrediente segreto si chiama semplicità",
    tag: "Brand Strategy · Rebranding",
    sector: "Food",
    year: "2022",
    description:
      "Rebranding e nuova piattaforma di comunicazione per Dolciaria Valtellinese, azienda storica della provincia di Sondrio nota per la Bisciola e i prodotti da forno della tradizione. In collaborazione con Valtnet: Studio Miller per la strategia di marca, Valtnet per l'implementazione visual.",
    result: "Nuova identità, tono di voce e sistema visivo pronto per il digitale",
    image: dvHero,
    gallery: [
      { src: dvLogoOld, caption: "Il marchio precedente: forte heritage territoriale", aspect: "wide", fit: "cover" },
      { src: dvLogoNew, caption: "Il nuovo marchio: tradizione che guarda al futuro", aspect: "wide", fit: "cover" },
      { src: dvPalette, caption: "Inspirational palette: rosso, panna, azzurro, terracotta", aspect: "wide", fit: "cover" },
      { src: dvHands, caption: "\"La bontà nasce dai gesti\" — la lavorazione a mano", aspect: "tall", fit: "cover" },
      { src: dvCow, caption: "\"La bontà nasce dalle cose buone\" — filiera locale", aspect: "square", fit: "cover" },
      { src: dvEggs, caption: "Materie prime semplici, ricette autentiche", aspect: "wide", fit: "cover" },
      { src: dvIngredients, caption: "Nessun ingrediente segreto, sarebbe stato di troppo", aspect: "wide", fit: "cover" },
      { src: dvPersonality, caption: "Personalità del brand: tenace, pratica, genuina", aspect: "tall", fit: "cover" },
      { src: dvChildren, caption: "Memoria, infanzia, valori che attraversano il tempo", aspect: "wide", fit: "cover" },
    ],
    detail: {
      challenge:
        "Dolciaria Valtellinese è un'azienda storica della provincia di Sondrio, famosa per la produzione di dolci tipici tra cui la Bisciola. Forte di un riconoscimento solido sul territorio, aveva la necessità di espandersi in nuovi mercati. La proprietà ha quindi deciso di rivedere non solo il visual, ma l'intera impostazione della comunicazione — stile, tono di voce e un sistema visivo capace di rispondere alle crescenti necessità del digitale e dei social.",
      approach:
        "In collaborazione con Valtnet — Studio Miller sulla strategia di brand, Valtnet sull'implementazione visiva — abbiamo applicato il nostro metodo di ascolto e co-costruzione con la proprietà, rendendola parte attiva nella definizione dei tratti distintivi della nuova immagine. Dai workshop sono emersi i pilastri: archetipo dell'angelo custode, valori di semplicità, autenticità e responsabilità, una promessa chiara — \"produrre prodotti di qualità con un approccio tradizionale che mette al centro i valori, oltre al gusto\". Da qui la piattaforma di marca, la verbal identity e il sistema visivo: rosso identitario, panna, azzurro e accenti terracotta; tipografia classica rivisitata; immaginario costruito su gesti, materie prime e memoria.",
      outcome:
        "Una nuova immagine che mantiene intatto l'asset di heritage e lo proietta nel futuro. Il payoff \"Il nostro ingrediente segreto si chiama semplicità\" guida un sistema di comunicazione modulare — dal packaging al digitale — pronto per accompagnare l'azienda nei nuovi mercati senza perdere la riconoscibilità costruita in oltre quarant'anni.",
      quote:
        "Proteggere la tradizione e i suoi valori, accompagnandola nel futuro.",
    },
  },
  {
    slug: "eudaimon-felicita-lavoro",
    client: "Eudaimon",
    title: "La felicità è una cosa seria.",
    tag: "Video Istituzionale · Brand Storytelling",
    sector: "Servizi",
    year: "2023",
    description:
      "Progettazione e produzione del video istituzionale di Eudaimon, primo welfare provider italiano, sul significato della felicità e dello stare bene al lavoro. Un racconto pensato per HR e CEO, distribuito su LinkedIn, YouTube, home page del sito e introduzione agli eventi.",
    result: "Video istituzionale distribuito su LinkedIn, YouTube e canali proprietari",
    videoId: "IU56LS2DTew",
    image: eudaimonLogo,
    detail: {
      challenge:
        "Eudaimon — primo welfare provider italiano — voleva raccontare la propria visione attraverso un video istituzionale capace di parlare a chi guida le aziende: HR, CEO, manager che hanno a cuore l'azienda e le persone che ne fanno parte. Non necessariamente alla ricerca di una soluzione, ma disposti a mettere in discussione lo stato delle cose e a chiedersi: \"la soluzione che ha la mia azienda è davvero la migliore?\". Il video doveva funzionare su tre fronti: distribuzione organica su LinkedIn e YouTube, presidio della home page del sito e apertura degli eventi.",
      approach:
        "Abbiamo costruito il racconto attorno a una catena di significato: quando la cultura organizzativa è positiva e attenta, le persone stanno bene a lavoro, si sentono ascoltate, sono più serene, ingaggiate e hanno cura di ciò che fanno. La cultura è positiva quando l'ambiente è sano, libero e giusto, e stimola relazioni di valore tra le persone a tutti i livelli. È attenta quando ascolta i bisogni e li risolve. Da qui i tre pilastri narrativi del video: lavorare bene insieme, benessere al lavoro, engagement come risultato — al servizio della vision Eudaimon: sviluppare una società libera e giusta dove le persone vivono e lavorano bene insieme.",
      outcome:
        "Un video istituzionale che mette al centro le persone e la cultura prima della soluzione tecnica. Un dispositivo di comunicazione modulare, pensato per la home page del sito, l'apertura degli eventi e la distribuzione su LinkedIn e YouTube — capace di aprire una conversazione con chi, in azienda, ha il potere e la responsabilità di cambiare le cose.",
      quote:
        "Sviluppare una società libera e giusta dove le persone vivono e lavorano bene insieme.",
    },
  },
  {
    slug: "upo-speak4nature",
    client: "UPO — Università del Piemonte Orientale",
    title: "Speak4Nature: dare voce alla natura non umana",
    tag: "Visual Identity · UX · Web Design",
    sector: "Servizi",
    year: "2023",
    description:
      "Visual identity, progettazione UX e visual del sito web, gestione documentale back-end della ricerca e strategia di diffusione social per Speak4Nature, progetto Marie Skłodowska-Curie finanziato dalla Commissione Europea (2023-2027) che indaga le tecniche per affermare la voce della natura non umana nelle istanze sociali e legali.",
    result: "Identità completa, sito web speak4nature.eu e piano di engagement social",
    image: s4nHero,
    gallery: [
      { src: s4nSymbol, caption: "Il simbolo: albero, radici e foglie come trama interdipendente", aspect: "square", fit: "contain" },
      { src: s4nLogo, caption: "Il logotipo: Speak4Nature — Interdisciplinary Approaches on Ecological Justice", aspect: "wide", fit: "contain" },
      { src: s4nWebsite, caption: "Sito web speak4nature.eu — UX, visual e gestione documentale", fit: "cover" },
      { src: s4nPoster, caption: "Coordinata eventi: poster del workshop \"Immaginazione, politica e crisi eco-sociale\"", fit: "cover" },
      { src: s4nRollup, aspect: "tall", fit: "cover", caption: "Roll-up istituzionale" },
      { src: s4nCard, aspect: "wide", fit: "cover", caption: "Biglietti da visita del consorzio" },
      { src: s4nPoster, aspect: "tall", fit: "cover", caption: "Affissione e applicazioni nello spazio universitario" },
    ],
    detail: {
      challenge:
        "Speak4Nature è un progetto di ricerca finanziato dalla Marie Skłodowska-Curie Staff Exchange action della Commissione Europea per gli anni 2023-2027 (grant agreement n. 101086202), guidato dall'Università del Piemonte Orientale con un consorzio internazionale (UAM, FIMA, LMU, FUHEM, UNL, UC3M, Eco Castulum, UFSC). L'obiettivo scientifico: trasferire conoscenza teorica ed empirica sulle tecniche che affermano la voce della natura non umana nelle istanze sociali e legali. La sfida progettuale: costruire un'identità capace di parlare al mondo accademico internazionale e, allo stesso tempo, di ingaggiare la società civile sui temi della giustizia ecologica.",
      approach:
        "Abbiamo lavorato su tre assi integrati. Visual identity: un sistema di marca radicato nei verdi naturali (#558E81, #89BF38, #608540), un simbolo che fonde chioma e radici di un albero in una trama interdipendente, una coordinata declinata su poster, roll-up, biglietti da visita, presentation template e materiali divulgativi. UX e visual del sito web: progettazione dell'architettura informativa di speak4nature.eu — Home, The Project, Consortium, Observatory, Dictionary, Outputs, News, Events — pensata sia per la comunità scientifica sia per il pubblico generalista, con un back-end di gestione documentale dedicato alla ricerca. Strategia di diffusione: piano editoriale e di engagement multilingua su Facebook, X, Instagram, LinkedIn e YouTube per amplificare deliverable, pubblicazioni, seminari e winter school del consorzio.",
      outcome:
        "Una piattaforma identitaria coerente che accompagna il progetto lungo tutti i suoi quattro anni. Il sito speak4nature.eu funziona da hub di ricerca e divulgazione: ospita output scientifici, dizionario, observatory, news ed eventi, ed è presidiato dai canali social del consorzio. La visual identity scala dai materiali accademici (template, biglietti da visita, roll-up) alle campagne di workshop e seminari nelle università partner.",
      quote:
        "Dare voce alla natura non umana nelle istanze sociali e legali.",
    },
  },
  {
    slug: "qd-exhaust-brand-strategy",
    client: "QD Exhaust — Arcas Industrie",
    title: "Ride the sound.",
    tag: "Brand Strategy · Content Strategy",
    sector: "Manifatturiero",
    year: "2018",
    description:
      "Brand strategy e content strategy per QD Exhaust, produttore italiano di sistemi di scarico artigianali per moto di alta gamma. Un percorso di Brand Vision con tutto il team — dagli artigiani di officina ai responsabili commerciali — per costruire un'identità che raccontasse l'emozione prima della tecnica.",
    result: "Piattaforma di marca completa con archetipo, tone of voice, tagline e strategia omnicanale",
    image: qdWorkshop,
    gallery: [
      { src: qdWorkshop, caption: "Workshop con il team: come percepisco QD", aspect: "wide", fit: "cover" },
      { src: qdPerception, caption: "Output del workshop — le parole chiave emerse dal team", aspect: "wide", fit: "cover" },
      { src: qdHedgehog, caption: "Il concetto del riccio: passione, eccellenza, driver economici", aspect: "wide", fit: "contain" },
      { src: qdRideSound, caption: "Brand signal: Ride the sound", aspect: "wide", fit: "cover" },
      { src: qdHandmade, caption: "Brand signal: Handmade emotions", aspect: "wide", fit: "cover" },
    ],
    detail: {
      challenge:
        "QD Exhaust produce sistemi di scarico artigianali per moto di alta gamma — Ducati, MV Agusta, Harley Davidson. Il prodotto è eccellente, riconosciuto a livello internazionale con il 99% del fatturato all'estero. Il problema: comunicava come un produttore tecnico in un mercato che compra emozioni. La sfida era trovare la voce giusta — autentica, non costruita a tavolino.",
      approach:
        "Siamo partiti dalle persone. Workshop con tutto il team — dagli artigiani specializzati di officina ai responsabili commerciali — per far emergere come QD si percepisce dall'interno. Ne è venuto fuori un ritratto sorprendente: un'azienda che si vive come orchestra essenziale, caos ordinato, isola felice in un mondo non bello. Un luogo dove si costruiscono opere d'arte, non componenti. Da lì abbiamo costruito la piattaforma di marca: archetipo del Creatore, tone of voice informale e ispirante, unique value proposition centrata sull'emozione prima che sulla performance.",
      outcome:
        "Una content strategy omnicanale costruita sull'identità emersa dal workshop. Piano editoriale per Instagram, YouTube e sito web con ruoli distinti per ogni canale, KPI definiti e roadmap a 12 mesi. E una tagline che sintetizza tutto: Ride the sound.",
      quote:
        "Soddisfare i desideri del cliente rendendo l'esperienza della moto unica, emozionante e condivisibile.",
    },
  },
  {
    slug: "moondino-brand-identity",
    client: "Moondino",
    title: "Houston, abbiamo un risotto.",
    tag: "Naming · Brand Identity · Brand Strategy",
    sector: "Manifatturiero",
    year: "2020",
    description:
      "Naming, brand identity e brand strategy per Moondino, la startup che ha inventato il robot da risaia. Un sistema meccanico automatico che sostituisce l'uso di fitofarmaci nella monda del riso, gestendo in autonomia 10 ettari di terreno. Due brand distinti per due prodotti: il robot e il riso che produce.",
    result: "Naming, visual identity completa, sistema iconografico e social content strategy per robot e riso",
    image: moondinoHero,
    gallery: [
      { src: moondinoHero, caption: "Il logo Moondino sulla risaia — il robot da risaia", aspect: "wide", fit: "cover" },
      { src: moondinoDiscovery, caption: "Discovery session — envisioning canvas con il team", aspect: "wide", fit: "cover" },
      { src: moondinoStyle, caption: "Sistema visivo e social content — al lavoro nelle terre del riso", aspect: "wide", fit: "cover" },
      { src: moondinoMockup, caption: "Mockup web — landing page robot e mobile", aspect: "wide", fit: "cover" },
      { src: moondinoRisoLogo, caption: "Brand identity Moondino Il riso nuovo — logotype e palette", aspect: "wide", fit: "contain" },
      { src: moondinoRiso, caption: "Moondino Il riso nuovo — il prodotto nato dalla risaia senza chimica", aspect: "wide", fit: "cover" },
    ],
    detail: {
      challenge:
        "Paolo, giovane imprenditore agricolo delle terre del riso, aveva inventato qualcosa di concreto: un robot che mondava meccanicamente il riso, eliminando la chimica dal processo. Sostituisce 3 ore di trattamenti con fitofarmaci con 400 ore di sarchiatura meccanica automatica, gestendo in piena autonomia 10 ettari di terreno. Il prodotto c'era. Mancava tutto il resto: il nome, l'identità, la voce, la storia da raccontare al mercato.",
      approach:
        "Abbiamo avviato una discovery session con il team per definire perché, per chi, quando e come. Ne è emersa una visione chiara: un brand con archetipo del Creatore, voce ispirante e giocosa, con l'analogia di Lego — dimensione ludica ispirata da valori maturi. Un prodotto che parlasse anche alle nuove generazioni. Da lì il naming: Moondino, fusione di mondare e della luna che sorveglia le risaie di notte. Due identità visive separate — una per il robot, una per il riso — coerenti nello spirito, distinte nel mercato.",
      outcome:
        "Naming, visual identity completa per il robot e per il riso Moondino, sistema iconografico, palette, tipografia, mockup web e social content strategy. Una startup agri-tech con una storia da raccontare e finalmente gli strumenti per raccontarla. Il riso Moondino nasce senza chimica, da una buona pratica che diventa prodotto: un riso nuovo, per una nuova generazione.",
      quote: "Un riso nuovo, per una nuova generazione.",
    },
  },
  {
    slug: "imeas-brand-strategy",
    client: "ENEA",
    title: "IMEAS — Connettere territori per un futuro a basse emissioni",
    tag: "Brand Strategy · UX Design · Web Platform",
    sector: "Pubblica Amministrazione · Ricerca",
    year: "2018",
    description:
      "Brand strategy e progettazione UX del portale IMEAS per ENEA, ente capofila del consorzio europeo finanziato dal programma Interreg Alpine Space. IMEAS è una piattaforma di knowledge sharing dedicata alla transizione energetica a basse emissioni di carbonio nella Macro Regione Alpina.",
    image: imeasCover,
    gallery: [
      { src: imeasDifferentiator, caption: "Differentiator: la combinazione unica dei 3 elementi core di IMEAS", aspect: "wide", fit: "contain" },
      { src: imeasHedgehog, caption: "Hedgehog Diagram: passione, eccellenza e driver economici", aspect: "wide", fit: "contain" },
      { src: imeasIdentitySignals, caption: "Identity Signals: personalità, verbal identity, visual e sensory identity", aspect: "wide", fit: "contain" },
      { src: imeasPersona, caption: "Proto-persona: Marco, Managing Director — uno degli stakeholder chiave", aspect: "tall", fit: "cover" },
    ],
    detail: {
      challenge:
        "ENEA guidava un consorzio multidisciplinare e transnazionale con un obiettivo ambizioso: costruire una comunità europea attiva attorno ai temi della transizione energetica low carbon, coinvolgendo profili molto diversi — politici locali, ricercatori, imprenditori, tecnici. Il rischio concreto era produrre l'ennesimo portale istituzionale che nessuno avrebbe usato. La sfida era dare a IMEAS un'identità riconoscibile e un'esperienza utente pensata per persone con bisogni, linguaggi e obiettivi molto diversi tra loro.",
      approach:
        "Siamo partiti da una Brand Vision session con il team di progetto, lavorando sull'identità prima ancora di toccare qualsiasi aspetto visivo o tecnologico. Abbiamo definito archetipo di marca (Il Saggio), valori fondanti, personalità e unique value proposition. In parallelo abbiamo condotto workshop di user research con gli stakeholder reali — da cui sono emersi proto-persona e empathy map che hanno guidato tutta la progettazione UX del portale. Il risultato è un'architettura dell'informazione costruita attorno ai bisogni concreti di chi la usa: networking, documentazione, benchmarking, innovazione.",
      outcome:
        "Brand strategy completa con archetipo, valori, personalità, palette cromatica e tipografia. Proto-persona e empathy map degli utenti chiave. Progettazione UX e wireframe del portale con architettura orientata alla community e alla gestione documentale per ricercatori e policy maker. Una piattaforma europea — finanziata da Interreg Alpine Space con ENEA capofila — che connette istituzioni, ricercatori e imprenditori di tutta la Macro Regione Alpina.",
      quote:
        "Together let's build a sustainable energy pathway.",
    },
  },
  {
    slug: "studio-simonetti-branding",
    client: "Studio Simonetti",
    title: "Studio Simonetti — Soluzioni per la Mobilità",
    tag: "Branding · Visual Identity · Content Strategy · Web Design",
    sector: "Servizi · Noleggio Auto",
    year: "2023",
    description:
      "Progetto di rebranding completo per Studio Simonetti, broker specializzato nel noleggio auto a lungo e medio termine con sede a Vercelli. Dal naming alla visual identity, dalla content strategy al sito web: un'identità costruita attorno al concetto di mobilità come servizio su misura.",
    image: simonettiCover,
    gallery: [
      { src: simonettiLogo, caption: "Logo primario, logo badge e sistema monogramma — navy e gold", aspect: "wide", fit: "contain" },
      { src: simonettiStationery, caption: "Stationery: carta intestata e biglietti da visita", aspect: "wide", fit: "cover" },
      { src: simonettiWeb, caption: "Sito web responsive — architettura orientata al preventivo", aspect: "wide", fit: "cover" },
    ],
    detail: {
      challenge:
        "Studio Simonetti operava in un mercato affollato — il noleggio auto a lungo termine — dove i grandi player nazionali dominano la comunicazione con messaggi standardizzati e orientati al prezzo. La sfida era differenziare uno studio locale con un approccio consulenziale personalizzato, costruendo un'identità che trasmettesse professionalità, affidabilità e vicinanza al cliente senza sembrare una piccola agenzia qualunque.",
      approach:
        "Siamo partiti dall'identità profonda dello studio: un broker indipendente che conosce le esigenze delle aziende e dei professionisti del territorio meglio di qualsiasi call center nazionale. Da lì abbiamo costruito il sistema di marca — naming rafforzato dalla tagline \"Soluzioni per la Mobilità\", logotipo con l'S dinamica che richiama movimento e solidità, palette navy e gold che comunica autorevolezza senza freddezza. Il sistema si completa con un pattern grafico basato sul monogramma, applicato su tutti i touchpoint dalla carta intestata al sito web.",
      outcome:
        "Brand identity system completo: logo primario, logo badge, pattern grafico, palette colori, tipografia, stationery (carta intestata, biglietti da visita). Content strategy per i canali social orientata alla consulenza e alla fiducia. Sito web responsive con architettura chiara sui due servizi chiave — noleggio medio termine e breve termine — e CTA orientata alla richiesta di preventivo.",
      quote:
        "Soluzioni per la Mobilità.",
    },
  },
  {
    slug: "paderno-made-to-shine",
    client: "Paderno Industrie",
    title: "Made to Shine — Quando la professionalità diventa emozione",
    tag: "Campaign Strategy · Content Production · Video",
    sector: "Food Equipment · Mixology",
    year: "2019",
    description:
      "Strategia, concept e produzione della campagna Made to Shine per Paderno Industrie — uno dei brand più iconici nel mondo degli strumenti professionali per la ristorazione. Il progetto ha dato vita a un video di prodotto ambientato nella straordinaria cornice di Villa Necchi a Milano, per raccontare la collezione Bar dedicata al mondo della mixology professionale.",
    image: padernoCover,
    gallery: [
      { src: padernoProducts, caption: "Collezione Bar Paderno — strumenti da bartending professionali", aspect: "wide", fit: "cover" },
      { src: padernoGlassware, caption: "Glassware in scena — Villa Necchi, Milano", aspect: "wide", fit: "cover" },
      { src: padernoFlair, caption: "Flair bartender: la professionalità come spettacolo", aspect: "wide", fit: "cover" },
    ],
    detail: {
      challenge:
        "Paderno doveva presentare la nuova collezione Bar — strumenti per il mondo della mixology — a un pubblico di professionisti e appassionati sempre più esigenti e visivamente sofisticati. Il rischio era cadere nel classico video prodotto freddo e tecnico. La sfida era trasformare degli strumenti da bartending in oggetti di desiderio, capaci di evocare un'atmosfera, uno stile di vita, un'occasione speciale.",
      approach:
        "Abbiamo costruito il concept attorno a un'idea semplice e potente: la professionalità come spettacolo. Made to Shine non racconta le caratteristiche tecniche della collezione Bar — racconta la serata perfetta che questi strumenti rendono possibile. Location scelta con cura: Villa Necchi a Milano, icona di eleganza milanese. Cast: flair bartender che trasformano la preparazione di un cocktail in una performance. Il prodotto brilla — letteralmente — sotto le luci della notte milanese. Il risultato è un video che parla al professionista della ristorazione e all'aspirazionale lifestyle del consumatore finale allo stesso tempo.",
      outcome:
        "Campagna Made to Shine completa: concept creativo, sceneggiatura, direzione artistica, produzione video in location a Villa Necchi Milano. Il video — con il claim 'Ladies & Gentleman, con la collezione Bar di Paderno la festa può iniziare' — ha supportato il lancio della linea mixology di Paderno sui canali digitali e nelle fiere di settore. Una campagna che ha elevato la percezione del brand nel segmento premium del foodservice professionale.",
      quote:
        "Ladies & Gentleman, con la collezione Bar di Paderno la festa può iniziare.",
    },
  },
  {
    slug: "paderno-symphony-of-cooking",
    client: "Paderno Industrie",
    title: "Symphony of Cooking — Quando la cucina diventa musica",
    tag: "Campaign Strategy · Content Production · Video",
    sector: "Food Equipment · Alta Cucina",
    year: "2019",
    description:
      "Strategia, concept e produzione della campagna Symphony of Cooking per Paderno Industrie. Un video di alta qualità cinematografica con protagonista lo Chef Alfredo Russo — stella Michelin — nella sua cucina professionale. Il progetto racconta il rapporto viscerale tra un grande chef e i suoi strumenti, trasformando utensili professionali in estensioni naturali del gesto creativo.",
    image: symphonyCover,
    videoUrl: "https://youtu.be/u3H16afj5fI?si=ZGZyz9nt1erkIOxn",
    gallery: [
      { src: symphonyPots, caption: "Le pentole in scena — il calore come materia prima", aspect: "wide", fit: "cover" },
      { src: symphonyKnife, caption: "Il coltello che taglia con precisione millimetrica", aspect: "wide", fit: "cover" },
      { src: symphonyPasta, caption: "La pasta: gesto, materia, tempo", aspect: "wide", fit: "cover" },
      { src: symphonySieve, caption: "Il colino che filtra il vapore — sequenza bianco e nero", aspect: "wide", fit: "cover" },
      { src: symphonyPlating, caption: "Chef Alfredo Russo — la composizione finale", aspect: "wide", fit: "cover" },
    ],
    detail: {
      challenge:
        "Paderno doveva comunicare la qualità professionale della sua linea di strumenti per l'alta cucina a un pubblico esigente — chef professionisti, buyer del foodservice, appassionati gourmet. Il rischio era produrre l'ennesima dimostrazione tecnica. La vera sfida era raccontare perché uno chef stellato sceglie determinati strumenti, e farlo con il rigore visivo che quel mondo richiede.",
      approach:
        "Abbiamo costruito il concept attorno a una metafora precisa: la cucina come composizione musicale. Ogni gesto è una nota, ogni strumento è uno strumento dell'orchestra. Chef Alfredo Russo — stella Michelin — diventa il direttore di questa sinfonia silenziosa. La regia è volutamente cinematografica: bianco e nero per le sequenze più astratte, colore caldo per i momenti di creazione. I prodotti Paderno entrano in scena non come oggetti da catalogo ma come protagonisti silenti — il coltello che taglia con precisione millimetrica, il colino che filtra il vapore, la padella che risponde al tatto. Il video non spiega il prodotto: lo fa desiderare.",
      outcome:
        "Campagna Symphony of Cooking completa: concept creativo, sceneggiatura, direzione artistica, produzione video con Chef Alfredo Russo stella Michelin. Il video ha supportato la comunicazione della linea professionale Paderno sui canali digitali, nelle fiere di settore e nelle attività di trade marketing verso i professionisti della ristorazione. Un caso che dimostra come la content strategy applicata al prodotto professionale possa raggiungere la qualità narrativa della comunicazione luxury.",
      quote:
        "Ogni grande piatto inizia da uno strumento che non tradisce.",
    },
  },
];

export const sectors = ["Tutti", "Manifatturiero", "Food", "ITC", "Moda", "Servizi", "No-profit", "Pubblica Amministrazione · Ricerca", "Servizi · Noleggio Auto", "Food Equipment · Mixology", "Food Equipment · Alta Cucina"] as const;
