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
