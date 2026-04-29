import cascinaOmbraImg from "@/assets/cascina-ombra.png";

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
    image: "/src/assets/cascina-ombra.png",
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
