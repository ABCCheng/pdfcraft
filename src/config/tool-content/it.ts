/**
 * Italian tool content for SEO
 * Contains detailed descriptions, how-to steps, use cases, and FAQs for all 67 tools
 * Requirements: 4.2-4.5 - Tool page content (description, how-to, use cases, FAQ)
 */

import { ToolContent } from '@/types/tool';

/**
 * Italian tool content map
 * Each tool has: title, metaDescription, keywords, description, howToUse (3+ steps), useCases (3+ scenarios), faq (3+ questions)
 */
export const toolContentIt: Record<string, ToolContent> = {
  // ==================== POPULAR TOOLS ====================
  'pdf-multi-tool': {
    title: 'Strumento multifunzione PDF',
    metaDescription: 'Editor PDF tutto in uno: unisci, dividi, organizza, elimina, ruota ed estrai pagine in un unico potente strumento.',
    keywords: ['strumento multifunzione pdf', 'editore pdf', 'unisci pdf', 'pdf diviso', 'organizzare il pdf', 'tutto in un unico pdf'],
    description: `<p>PDF Multi Tool è la soluzione completa per tutte le attività di gestione delle pagine PDF. Questo potente strumento all-in-one combina più operazioni PDF in un'unica interfaccia intuitiva, facendoti risparmiare tempo e fatica.</p>
      <p>Se devi unire più documenti, dividere un PDF di grandi dimensioni in file più piccoli, riorganizzare le pagine, eliminare contenuti indesiderati, ruotare pagine o estrarre sezioni specifiche, questo strumento gestisce tutto senza passare da un'applicazione diversa all'altra.</p>
      <p>Tutta l'elaborazione avviene direttamente nel tuo browser, garantendo che i tuoi documenti rimangano privati e sicuri. Nessun file viene caricato su nessun server.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF nell\'area di caricamento oppure fai clic per sfogliare e selezionare i file dal tuo dispositivo.' },
      { step: 2, title: 'Scegli la tua operazione', description: 'Seleziona tra le operazioni disponibili: unisci, dividi, organizza, elimina pagine, ruota, aggiungi pagine vuote o estrai pagine.' },
      { step: 3, title: 'Configura opzioni', description: 'Regola le impostazioni specifiche per l\'operazione scelta, come intervalli di pagine, angoli di rotazione o ordine di unione.' },
      { step: 4, title: 'Elabora e scarica', description: 'Fai clic sul pulsante di elaborazione e scarica il PDF modificato una volta completata l\'operazione.' },
    ],
    useCases: [
      { title: 'Preparazione del documento', description: 'Prepara i documenti per l\'invio rimuovendo le pagine non necessarie, riordinando i contenuti e combinando più file.', icon: 'file-check' },
      { title: 'Rapporto Assemblea', description: 'Combina più sezioni del report, aggiungi copertine e organizza i capitoli in un unico documento professionale.', icon: 'book-open' },
      { title: 'Gestione dell\'archivio', description: 'Dividi file di archivio di grandi dimensioni in sezioni gestibili, estrai pagine pertinenti e riorganizza documenti storici.', icon: 'archive' },
    ],
    faq: [
      { question: 'Quanti PDF posso elaborare contemporaneamente?', answer: 'Puoi caricare ed elaborare fino a 10 file PDF contemporaneamente, con una dimensione massima combinata di 500 MB.' },
      { question: 'I miei segnalibri verranno conservati?', answer: 'Sì, quando si uniscono i PDF, lo strumento conserva i segnalibri esistenti e, facoltativamente, può combinarli in una struttura di segnalibri unificata.' },
      { question: 'C\'è un limite di pagine?', answer: 'Non esiste un limite di pagine rigido. Lo strumento può gestire documenti con centinaia di pagine, anche se l\'elaborazione di file molto grandi potrebbe richiedere più tempo.' },
    ],
  },

  'merge-pdf': {
    title: 'Unisci PDF',
    metaDescription: 'Combina più file PDF in un unico documento. Fusione PDF online gratuita con riordino tramite trascinamento.',
    keywords: ['unisci pdf', 'combina pdf', 'unisciti al pdf', 'fusione pdf', 'concatenare pdf'],
    description: `<p>Merge PDF ti consente di combinare più documenti PDF in un unico file in modo rapido e semplice. Che tu stia consolidando report, combinando documenti scansionati o assemblando una presentazione, questo strumento semplifica il processo.</p>
      <p>Carica semplicemente i tuoi file, disponili nell'ordine desiderato utilizzando il trascinamento e uniscili in un unico documento coerente. Lo strumento preserva la qualità dei file originali e può facoltativamente mantenere i segnalibri di ciascun documento di origine.</p>
      <p>Tutta l'unione avviene localmente nel tuo browser, garantendo la completa privacy dei tuoi documenti sensibili.</p>`,
    howToUse: [
      { step: 1, title: 'Carica file PDF', description: 'Trascina e rilascia più file PDF nell\'area di caricamento oppure fai clic per selezionare i file dal tuo dispositivo.' },
      { step: 2, title: 'Disporre l\'ordine', description: 'Trascina e rilascia le miniature dei file per disporle nell\'ordine desiderato.' },
      { step: 3, title: 'Unisci e scarica', description: 'Fai clic sul pulsante Unisci per unire tutti i file, quindi scarica il PDF unito.' },
    ],
    useCases: [
      { title: 'Combina rapporti', description: 'Unisci i report mensili o trimestrali in un unico documento annuale per una distribuzione e un\'archiviazione più semplici.', icon: 'file-text' },
      { title: 'Assemblare portafogli', description: 'Combina più documenti di progetto, certificati o esempi di lavoro in un portfolio professionale.', icon: 'briefcase' },
      { title: 'Consolidare le fatture', description: 'Unisci più fatture o ricevute in un unico documento per scopi contabili e di tenuta dei registri.', icon: 'receipt' },
    ],
    faq: [
      { question: 'Quanti PDF posso unire?', answer: 'Puoi unire fino a 100 file PDF contemporaneamente, con una dimensione totale combinata fino a 500 MB.' },
      { question: 'Il PDF unito manterrà la qualità originale?', answer: 'Sì, il processo di fusione preserva la qualità originale di tutti i documenti senza alcuna compressione o perdita di qualità.' },
      { question: 'Posso unire PDF protetti da password?', answer: 'I PDF protetti da password devono prima essere decrittografati. Utilizza il nostro strumento Decrittografa PDF per rimuovere la password prima dell\'unione.' },
    ],
  },

  'rotate-custom': {
    title: 'Ruota per gradi personalizzati',
    metaDescription: 'Ruota le pagine PDF di qualsiasi angolazione. Rotazione personalizzata precisa per raddrizzare i documenti scansionati.',
    keywords: ['ruotare l\'angolo personalizzato del pdf', 'raddrizzare il pdf', 'raddrizza pdf', 'rotazione personalizzata pdf'],
    description: `<p>Ruota per gradi personalizzati ti offre un controllo preciso sull'orientamento della pagina PDF. A differenza degli strumenti di rotazione standard che supportano solo incrementi di 90 gradi, questo strumento consente di ruotare le pagine di qualsiasi angolo specifico.</p>
      <p>Perfetto per raddrizzare i documenti scansionati che sono stati inseriti leggermente di traverso o per regolare diagrammi e grafici nell'orientamento corretto. Puoi correggere singole pagine o applicare la stessa rotazione all'intero documento.</p>
      <p>Tutta l'elaborazione avviene localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati e ottenendo al tempo stesso un allineamento perfetto.</p>`,
    howToUse: [
      { step: 1, title: 'Carica PDF', description: 'Carica il file PDF contenente le pagine che devi ruotare.' },
      { step: 2, title: 'Imposta l\'angolo di rotazione', description: 'Inserisci l\'esatto grado di rotazione per ciascuna pagina o imposta un angolo batch per tutte le pagine.' },
      { step: 3, title: 'Anteprima e regolazione', description: 'Utilizza l\'anteprima in tempo reale per assicurarti che le pagine siano perfettamente allineate.' },
      { step: 4, title: 'Applica e scarica', description: 'Fai clic su Ruota per applicare le modifiche e scaricare il PDF raddrizzato.' },
    ],
    useCases: [
      { title: 'Documenti scansionati', description: 'Raddrizzare le pagine scansionate alimentate nello scanner inclinandole.', icon: 'scan' },
      { title: 'Disegni Tecnici', description: 'Regola con precisione l\'orientamento di schemi e planimetrie tecniche.', icon: 'ruler' },
      { title: 'Layout creativi', description: 'Crea layout unici ruotando le pagine secondo angolazioni artistiche specifiche.', icon: 'pen-tool' },
    ],
    faq: [
      { question: 'Posso ruotare in base ai decimali, ad esempio 45,5 gradi?', answer: 'Attualmente lo strumento supporta i gradi interi, ma stiamo lavorando per abilitare la precisione decimale.' },
      { question: 'Ciò influisce sul contenuto della pagina?', answer: 'Il contenuto viene ruotato visivamente. La dimensione della pagina viene regolata automaticamente per adattarsi al contenuto ruotato.' },
      { question: 'Posso ruotare solo una pagina?', answer: 'Sì, puoi impostare un angolo di rotazione personalizzato per ogni singola pagina lasciando le altre invariate.' },
    ],
  },

  'grid-combine': {
    title: 'Griglia Combina PDF',
    metaDescription: 'Combina più file PDF su singole pagine con un layout a griglia flessibile. Disponi 2, 4, 6, 9 o più PDF per pagina con bordi e spaziatura.',
    keywords: ['combinazione di griglia', 'unisci la griglia pdf', 'collage in formato pdf', 'più PDF in una pagina', 'pdf in su', 'combina la griglia dei pdf'],
    description: `<p>Lo strumento Combina griglia offre un modo unico per unire più file PDF separati su singole pagine. A differenza dello strumento standard "Unisci PDF" che aggiunge semplicemente le pagine, o dello strumento "N-Up" che riorganizza le pagine di un singolo documento, Grid Combine accetta più file di input e li dispone uno accanto all'altro in un layout a griglia personalizzabile.</p>
      <p>Puoi scegliere tra varie configurazioni di griglia come 2x1, 2x2, 3x3, ecc. Questo è perfetto per confrontare più documenti, creare dispense da diverse fonti o stampare versioni compatte di diversi file.</p>
      <p>Personalizza l'output con il controllo su dimensioni della pagina, orientamento, margini, spaziatura e bordi. Tutta l'elaborazione avviene localmente nel tuo browser per la massima privacy.</p>`,
    howToUse: [
      { step: 1, title: 'Carica file PDF', description: 'Carica due o più file PDF che desideri unire. Puoi riorganizzarli nell\'ordine desiderato.' },
      { step: 2, title: 'Scegli il layout della griglia', description: 'Seleziona il layout della griglia desiderato (ad esempio, 2x2 per 4 file per pagina, 3x3 per 9 file per pagina).' },
      { step: 3, title: 'Personalizza l\'aspetto', description: 'Regola impostazioni come dimensioni della pagina (A4, Lettera), orientamento, spaziatura tra gli elementi e bordi.' },
      { step: 4, title: 'Combina e scarica', description: 'Fai clic su "Combina PDF" per generare il tuo nuovo documento di layout della griglia e scaricare il risultato.' },
    ],
    useCases: [
      { title: 'Confronto visivo', description: 'Posiziona diverse versioni di un disegno o di un documento una accanto all\'altra su un\'unica pagina per un facile confronto.', icon: 'layout-grid' },
      { title: 'Stampa di dispense', description: 'Combina più documenti brevi o diapositive su un unico foglio di carta per risparmiare sui costi di stampa.', icon: 'printer' },
      { title: 'Creazione del portafoglio', description: 'Mostra più file di progetto in una panoramica della griglia pulita e organizzata.', icon: 'image' },
    ],
    faq: [
      { question: 'In cosa differisce da N-Up?', answer: 'N-Up prende le pagine da UN PDF e le inserisce su un foglio. Griglia Combina prende PIÙ file PDF DIVERSI e li mette su un foglio.' },
      { question: 'Quanti file posso combinare?', answer: 'Puoi combinare fino a 100 file a seconda della memoria del tuo browser, ma layout come 4x4 possono ospitare fino a 16 file per pagina.' },
      { question: 'Posso aggiungere bordi?', answer: 'Sì, puoi aggiungere bordi attorno a ciascun file PDF e personalizzare il colore del bordo.' },
    ],
  },

  'split-pdf': {
    title: 'PDF diviso',
    metaDescription: 'Dividi i file PDF in più documenti. Estrai pagine specifiche o dividi per intervalli di pagine.',
    keywords: ['pdf diviso', 'dividere pdf', 'pdf separato', 'estrarre pagine', 'divisore pdf'],
    description: `<p>Split PDF consente di dividere un singolo documento PDF in più file più piccoli. Questo è perfetto per estrarre capitoli specifici, separare documenti combinati o creare singoli file da un PDF multipagina.</p>
      <p>Puoi dividere per intervalli di pagine specifici, estrarre singole pagine o dividere il documento a intervalli regolari. Lo strumento fornisce un'anteprima visiva delle tue pagine, semplificando la selezione esattamente di ciò di cui hai bisogno.</p>
      <p>Tutta l'elaborazione viene eseguita localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati e sicuri.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per sfogliare e selezionare il file che desideri dividere.' },
      { step: 2, title: 'Seleziona Metodo di divisione', description: 'Scegli come dividere: per intervalli di pagine, estrai pagine specifiche o dividi a intervalli regolari.' },
      { step: 3, title: 'Definire intervalli di pagine', description: 'Inserisci i numeri di pagina o gli intervalli che desideri estrarre (ad esempio, 1-5, 8, 10-15).' },
      { step: 4, title: 'Dividi e scarica', description: 'Fai clic su Dividi per creare i tuoi nuovi file PDF e scaricarli singolarmente o come archivio ZIP.' },
    ],
    useCases: [
      { title: 'Estrai capitoli', description: 'Suddividi un libro o un manuale in singoli capitoli per facilitarne la lettura o la distribuzione.', icon: 'book' },
      { title: 'Scansioni combinate separate', description: 'Dividere un documento scansionato in batch in singoli file per ciascun documento originale.', icon: 'copy' },
      { title: 'Crea dispense', description: 'Estrai diapositive o pagine specifiche da una presentazione per creare dispense mirate.', icon: 'presentation' },
    ],
    faq: [
      { question: 'Posso dividere un PDF in singole pagine?', answer: 'Sì, puoi dividere un PDF in singoli file di una sola pagina selezionando l\'opzione "Dividi ogni pagina".' },
      { question: 'Cosa succede ai segnalibri durante la divisione?', answer: 'I segnalibri che rientrano nell\'intervallo di pagine estratto vengono conservati nei file PDF risultanti.' },
      { question: 'Posso dividere PDF protetti da password?', answer: 'Devi prima decrittografare il PDF utilizzando il nostro strumento Decrittografa PDF prima di dividerlo.' },
    ],
  },

  'compress-pdf': {
    title: 'Comprimi PDF',
    metaDescription: 'Riduci le dimensioni del file PDF mantenendo la qualità. Compressore PDF online gratuito per file più piccoli.',
    keywords: ['comprimerepdf', 'ridurre le dimensioni del pdf', 'compressore pdf', 'rimpicciolire pdf', 'ottimizzare il pdf'],
    description: `<p>Compress PDF riduce le dimensioni dei file dei tuoi documenti PDF mantenendo una qualità accettabile. Questo è essenziale per gli allegati email, i caricamenti sul Web o per risparmiare spazio di archiviazione.</p>
      <p>Lo strumento offre più livelli di compressione per bilanciare la riduzione delle dimensioni del file e il mantenimento della qualità. Puoi scegliere una compressione aggressiva per la massima riduzione delle dimensioni o una compressione leggera per mantenere una qualità superiore.</p>
      <p>Tutta la compressione avviene nel tuo browser, garantendo che i tuoi documenti non lascino mai il tuo dispositivo.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionare il documento che desideri comprimere.' },
      { step: 2, title: 'Scegli Livello di compressione', description: 'Seleziona il livello di compressione preferito: Basso (qualità migliore), Medio (bilanciato) o Alto (dimensione più piccola).' },
      { step: 3, title: 'Comprimi e scarica', description: 'Fai clic su Comprimi per ridurre le dimensioni del file, quindi scarica il PDF ottimizzato.' },
    ],
    useCases: [
      { title: 'Allegati e-mail', description: 'Riduci le dimensioni del PDF per rispettare i limiti degli allegati e-mail e garantire una consegna più rapida.', icon: 'mail' },
      { title: 'Pubblicazione sul Web', description: 'Ottimizza i PDF per il download dal Web per migliorare i tempi di caricamento delle pagine e l\'esperienza utente.', icon: 'globe' },
      { title: 'Ottimizzazione dell\'archiviazione', description: 'Comprimi i documenti archiviati per risparmiare spazio su disco mantenendo l\'accessibilità.', icon: 'hard-drive' },
    ],
    faq: [
      { question: 'Di quanto posso ridurre la dimensione del file?', answer: 'I risultati della compressione variano in base al contenuto del PDF. I PDF ricchi di immagini possono spesso essere ridotti del 50-80%, mentre i PDF di solo testo possono subire riduzioni minori.' },
      { question: 'La compressione influirà sulla qualità del testo?', answer: 'Il testo rimane nitido e leggibile a tutti i livelli di compressione. Solo le immagini e la grafica vengono interessate dalla compressione.' },
      { question: 'Posso comprimere più PDF contemporaneamente?', answer: 'Sì, puoi caricare e comprimere fino a 10 file PDF contemporaneamente.' },
    ],
  },

  'edit-pdf': {
    title: 'Modifica PDF',
    metaDescription: 'Modifica file PDF online. Aggiungi testo, immagini, annotazioni, evidenziazioni e forme ai tuoi documenti.',
    keywords: ['modifica pdf', 'editore pdf', 'annotare pdf', 'aggiungere testo al pdf', 'marcatura pdf'],
    description: `<p>Edit PDF fornisce un set completo di strumenti per modificare e annotare i tuoi documenti PDF. Aggiungi testo, immagini, forme, evidenziazioni, commenti e altro senza bisogno di costosi software desktop.</p>
      <p>L'interfaccia intuitiva dell'editor semplifica il markup dei documenti per la revisione, l'aggiunta di note per la collaborazione, la redazione di informazioni sensibili o il miglioramento dei documenti con contenuti aggiuntivi.</p>
      <p>Tutte le modifiche avvengono localmente nel tuo browser, garantendo la completa privacy dei tuoi documenti sensibili.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionare il documento che desideri modificare.' },
      { step: 2, title: 'Seleziona Strumento di modifica', description: 'Scegli dalla barra degli strumenti: testo, evidenziazione, forme, immagini, commenti o strumenti di redazione.' },
      { step: 3, title: 'Apporta le tue modifiche', description: 'Fai clic sul documento per aggiungere annotazioni, trascina per posizionare gli elementi e utilizza il pannello delle proprietà per personalizzare.' },
      { step: 4, title: 'Salva e scarica', description: 'Fare clic su Salva per applicare le modifiche e scaricare il PDF modificato.' },
    ],
    useCases: [
      { title: 'Revisione dei documenti', description: 'Aggiungi commenti, evidenziazioni e markup ai documenti per processi di revisione collaborativa.', icon: 'message-square' },
      { title: 'Completamento del modulo', description: 'Compila campi di testo, aggiungi firme e completa moduli PDF senza stampare.', icon: 'edit-3' },
      { title: 'Redazione dei contenuti', description: 'Rimuovi permanentemente le informazioni sensibili dai documenti prima della condivisione.', icon: 'eye-off' },
    ],
    faq: [
      { question: 'Posso modificare il testo originale nel PDF?', answer: 'Questo strumento si concentra sull\'aggiunta di annotazioni e nuovi contenuti. Per modificare il testo esistente, potrebbe essere necessario utilizzare il documento di origine originale.' },
      { question: 'Le mie modifiche sono permanenti?', answer: 'Le annotazioni possono essere appiattite per renderle permanenti o mantenute come livelli modificabili a seconda delle tue preferenze.' },
      { question: 'Posso annullare le mie modifiche?', answer: 'Sì, l\'editor supporta la funzionalità di annullamento/ripetizione. Puoi anche ripristinare il documento originale in qualsiasi momento prima di salvarlo.' },
    ],
  },

  'jpg-to-pdf': {
    title: 'JPG in PDF',
    metaDescription: 'Converti immagini JPG in PDF. Combina più file JPG in un unico documento PDF.',
    keywords: ['da jpg a pdf', 'jpeg in pdf', 'convertire jpg', 'immagine in pdf', 'foto in pdf'],
    description: `<p>JPG in PDF converte le tue immagini JPEG in documenti PDF in modo rapido e semplice. Che tu abbia una singola foto o più immagini, questo strumento crea file PDF dall'aspetto professionale.</p>
      <p>Puoi combinare più file JPG in un unico PDF, disporli in qualsiasi ordine e personalizzare le dimensioni e l'orientamento della pagina. La conversione preserva la qualità dell'immagine creando file PDF compatti e condivisibili.</p>
      <p>Tutte le conversioni avvengono nel tuo browser, garantendo che le tue foto rimangano private.</p>`,
    howToUse: [
      { step: 1, title: 'Carica immagini JPG', description: 'Trascina e rilascia i tuoi file JPG o fai clic per selezionare le immagini dal tuo dispositivo.' },
      { step: 2, title: 'Organizza e configura', description: 'Riordina le immagini trascinandole e seleziona le dimensioni della pagina e le opzioni di orientamento.' },
      { step: 3, title: 'Converti e scarica', description: 'Fai clic su Converti per creare il tuo PDF e scaricare il risultato.' },
    ],
    useCases: [
      { title: 'Album fotografici', description: 'Crea album fotografici PDF dalle foto delle vacanze o delle foto degli eventi per condividerli facilmente.', icon: 'image' },
      { title: 'Scansione di documenti', description: 'Converti le foto dei documenti scattate con la fotocamera del telefono in file PDF adeguati.', icon: 'camera' },
      { title: 'Creazione del portafoglio', description: 'Compila lavori fotografici o campioni di progettazione in un portfolio PDF professionale.', icon: 'folder' },
    ],
    faq: [
      { question: 'Quante immagini posso convertire?', answer: 'Puoi convertire fino a 100 immagini JPG in un singolo documento PDF.' },
      { question: 'La qualità dell\'immagine verrà preservata?', answer: 'Sì, le immagini vengono incorporate nella loro qualità originale. Facoltativamente puoi comprimerli per ridurre le dimensioni del file.' },
      { question: 'Posso impostare dimensioni di pagina diverse per immagini diverse?', answer: 'Lo strumento applica una dimensione di pagina uniforme a tutte le pagine. Ogni immagine viene ridimensionata per adattarsi alle dimensioni della pagina selezionata mantenendo le proporzioni.' },
    ],
  },

  'sign-pdf': {
    title: 'Firma PDF',
    metaDescription: 'Aggiungi firme elettroniche ai documenti PDF. Disegna, digita o carica la tua firma.',
    keywords: ['firmare pdf', 'firma elettronica', 'firma elettronica', 'firma pdf', 'firma digitale'],
    description: `<p>Sign PDF ti consente di aggiungere firme elettroniche ai tuoi documenti PDF in modo rapido e sicuro. Crea la tua firma disegnando, digitando o caricando un'immagine, quindi posizionala ovunque sul tuo documento.</p>
      <p>Puoi aggiungere più firme a un singolo documento, ridimensionarle e posizionarle con precisione e salvare la firma per un uso futuro. Lo strumento è perfetto per contratti, accordi, moduli e qualsiasi documento che richieda la tua firma.</p>
      <p>Tutte le firme avvengono localmente nel tuo browser, garantendo che i tuoi documenti e la tua firma rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionare il documento che devi firmare.' },
      { step: 2, title: 'Crea la tua firma', description: 'Disegna la tua firma con il mouse o tocca, digita il tuo nome per generare una firma o carica un\'immagine della firma.' },
      { step: 3, title: 'Posiziona e regola', description: 'Fai clic sul documento per inserire la tua firma, quindi trascina nella posizione e ridimensiona secondo necessità.' },
      { step: 4, title: 'Salva e scarica', description: 'Fai clic su Salva per applicare la tua firma e scaricare il PDF firmato.' },
    ],
    useCases: [
      { title: 'Firma del contratto', description: 'Firma contratti e accordi elettronicamente senza stampa e scansione.', icon: 'file-signature' },
      { title: 'Completamento del modulo', description: 'Aggiungi la tua firma ai moduli di domanda, ai moduli di consenso e ai documenti ufficiali.', icon: 'clipboard' },
      { title: 'Flussi di lavoro di approvazione', description: 'Approvare i documenti come parte dei processi di revisione e approvazione.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'La firma elettronica è giuridicamente vincolante?', answer: 'Le firme elettroniche sono legalmente riconosciute nella maggior parte dei paesi. Tuttavia, alcuni documenti potrebbero richiedere tipi specifici di firme digitali. Controlla le normative locali.' },
      { question: 'Posso salvare la mia firma per un utilizzo futuro?', answer: 'Sì, puoi salvare la tua firma nella memoria locale del tuo browser per accedervi rapidamente quando firmi documenti futuri.' },
      { question: 'Posso aggiungere più firme a un documento?', answer: 'Sì, puoi aggiungere tutte le firme necessarie, posizionandole ciascuna in modo indipendente su qualsiasi pagina.' },
    ],
  },

  'crop-pdf': {
    title: 'Ritaglia PDF',
    metaDescription: 'Ritaglia le pagine PDF per rimuovere margini e aree indesiderate. Ritaglia i documenti PDF con precisione.',
    keywords: ['ritagliare pdf', 'ritagliare pdf', 'tagliare i margini del pdf', 'ridimensionare le pagine pdf', 'ritaglio pdf'],
    description: `<p>Crop PDF ti consente di tagliare i margini e rimuovere aree indesiderate dalle pagine PDF. Ciò è utile per rimuovere gli spazi bianchi in eccesso, concentrarsi su aree di contenuto specifiche o standardizzare le dimensioni della pagina.</p>
      <p>Puoi ritagliare tutte le pagine in modo uniforme o regolare ciascuna pagina individualmente. L'interfaccia visiva mostra esattamente ciò che verrà conservato, facilitando il raggiungimento di risultati precisi.</p>
      <p>Tutto il ritaglio avviene localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionare il documento che desideri ritagliare.' },
      { step: 2, title: 'Definire l\'area di ritaglio', description: 'Trascina le maniglie di ritaglio per definire l\'area che desideri mantenere o inserisci misurazioni precise.' },
      { step: 3, title: 'Applica alle pagine', description: 'Scegli di applicare il ritaglio a tutte le pagine o seleziona pagine specifiche da ritagliare.' },
      { step: 4, title: 'Ritaglia e scarica', description: 'Fai clic su Ritaglia per applicare le modifiche e scaricare il PDF ritagliato.' },
    ],
    useCases: [
      { title: 'Rimuovi margini', description: 'Ritaglia i margini eccessivi da documenti scansionati o PDF con bordi grandi.', icon: 'maximize-2' },
      { title: 'Concentrarsi sui contenuti', description: 'Ritaglia per evidenziare aree di contenuto specifiche, rimuovendo intestazioni, piè di pagina o barre laterali.', icon: 'target' },
      { title: 'Standardizzare le pagine', description: 'Rendi tutte le pagine della stessa dimensione ritagliando in dimensioni uniformi.', icon: 'square' },
    ],
    faq: [
      { question: 'Il ritaglio rimuove permanentemente i contenuti?', answer: 'Sì, il ritaglio rimuove il contenuto all\'esterno dell\'area di ritaglio. Assicurati di conservare un backup del file originale.' },
      { question: 'Posso ritagliare pagine diverse in modo diverso?', answer: 'Sì, puoi applicare diverse impostazioni di ritaglio a singole pagine o gruppi di pagine.' },
      { question: 'Il ritaglio influirà sulla qualità del testo?', answer: 'No, il ritaglio rimuove solo le aree esterne al confine del ritaglio. Il contenuto rimanente mantiene la sua qualità originale.' },
    ],
  },

  'extract-pages': {
    title: 'Estrai pagine',
    metaDescription: 'Estrai pagine specifiche da file PDF. Seleziona e salva le singole pagine come nuovi documenti.',
    keywords: ['estrarre pagine pdf', 'salvare pagine pdf', 'copiare pagine pdf', 'estrattore di pagine pdf'],
    description: `<p>Estrai pagine consente di selezionare e salvare pagine specifiche da un documento PDF come nuovi file. Questo è perfetto per estrarre sezioni pertinenti, creare estratti o separare documenti combinati.</p>
      <p>Puoi estrarre singole pagine, intervalli di pagine o più pagine non consecutive. L'anteprima visiva della pagina semplifica l'identificazione e la selezione esatta delle pagine necessarie.</p>
      <p>Tutta l'estrazione avviene localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionare il documento da cui desideri estrarre le pagine.' },
      { step: 2, title: 'Seleziona Pagine', description: 'Fai clic sulle miniature delle pagine per selezionarle oppure inserisci i numeri e gli intervalli di pagina nel campo di immissione.' },
      { step: 3, title: 'Estrai e scarica', description: 'Fai clic su Estrai per creare un nuovo PDF con le pagine selezionate e scaricarlo.' },
    ],
    useCases: [
      { title: 'Crea estratti', description: 'Estrai pagine rilevanti da report o libri per creare documenti di riferimento mirati.', icon: 'file-minus' },
      { title: 'Condividi contenuti specifici', description: 'Estrai pagine specifiche da condividere senza inviare l\'intero documento.', icon: 'share-2' },
      { title: 'Archivia pagine importanti', description: 'Estrai e salva le pagine chiave dai documenti per l\'archiviazione a lungo termine.', icon: 'archive' },
    ],
    faq: [
      { question: 'Posso estrarre pagine non consecutive?', answer: 'Sì, puoi selezionare qualsiasi combinazione di pagine, consecutive o sparse nel documento.' },
      { question: 'I segnalibri verranno conservati?', answer: 'I segnalibri che puntano alle pagine estratte vengono conservati nel nuovo documento.' },
      { question: 'Posso estrarre pagine da più PDF?', answer: 'Questo strumento funziona con un PDF alla volta. Per combinare pagine di più PDF, utilizza lo strumento Unisci PDF.' },
    ],
  },

  'organize-pdf': {
    title: 'Organizza PDF',
    metaDescription: 'Riordina, duplica ed elimina le pagine PDF. Trascina e rilascia per riorganizzare i tuoi documenti.',
    keywords: ['organizzare il pdf', 'riordinare le pagine pdf', 'riordinare il pdf', 'organizzatore di pagine pdf'],
    description: `<p>Organize PDF fornisce un'intuitiva interfaccia drag-and-drop per riorganizzare le pagine nei documenti PDF. Riordina le pagine, duplica sezioni importanti o rimuovi facilmente le pagine indesiderate.</p>
      <p>Le miniature visive delle pagine semplificano l'identificazione dei contenuti e la disposizione delle pagine esattamente come ti servono. Perfetto per ristrutturare documenti, creare ordini di pagine personalizzati o ripulire file scansionati.</p>
      <p>Tutta l'organizzazione avviene localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionare il documento che desideri organizzare.' },
      { step: 2, title: 'Riorganizzare le pagine', description: 'Trascina le miniature delle pagine per riordinarle. Fai clic sui pulsanti duplica o elimina su ciascuna pagina secondo necessità.' },
      { step: 3, title: 'Salva e scarica', description: 'Fare clic su Salva per applicare le modifiche e scaricare il PDF riorganizzato.' },
    ],
    useCases: [
      { title: 'Correggi l\'ordine delle pagine', description: 'Correggere l\'ordine delle pagine scansionate o combinate in modo errato.', icon: 'arrow-up-down' },
      { title: 'Crea ordine personalizzato', description: 'Disporre le pagine in una sequenza specifica per presentazioni o report.', icon: 'list' },
      { title: 'Rimuovi le pagine indesiderate', description: 'Elimina pagine vuote, duplicati o contenuti irrilevanti dai documenti.', icon: 'trash-2' },
    ],
    faq: [
      { question: 'Posso duplicare le pagine?', answer: 'Sì, puoi duplicare qualsiasi pagina e posizionare la copia in qualsiasi punto del documento.' },
      { question: 'C\'è una funzione di annullamento?', answer: 'Sì, puoi annullare e ripetere le modifiche. Puoi anche ripristinare l\'ordine originale in qualsiasi momento.' },
      { question: 'Posso organizzare più PDF insieme?', answer: 'Questo strumento funziona con un PDF alla volta. Per combinare e organizzare più PDF, uniscili prima utilizzando lo strumento Unisci PDF.' },
    ],
  },

  'delete-pages': {
    title: 'Elimina pagine',
    metaDescription: 'Rimuovi le pagine indesiderate dai file PDF. Seleziona ed elimina facilmente pagine specifiche.',
    keywords: ['eliminare pagine pdf', 'rimuovere le pagine pdf', 'rimozione pagine pdf', 'eliminare pagine da pdf'],
    description: `<p>Delete Pages ti consente di rimuovere le pagine indesiderate dai tuoi documenti PDF in modo rapido e semplice. Che tu abbia bisogno di rimuovere pagine vuote, contenuti obsoleti o informazioni sensibili, questo strumento lo rende semplice.</p>
      <p>Le miniature visive delle pagine ti aiutano a identificare esattamente quali pagine rimuovere. Puoi eliminare singole pagine o più pagine contemporaneamente.</p>
      <p>Tutta l'elaborazione avviene localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionare il documento da cui desideri eliminare le pagine.' },
      { step: 2, title: 'Seleziona Pagine da eliminare', description: 'Fare clic sulle miniature delle pagine per contrassegnarle per l\'eliminazione oppure inserire i numeri di pagina nel campo di immissione.' },
      { step: 3, title: 'Elimina e scarica', description: 'Fare clic su Elimina per rimuovere le pagine selezionate e scaricare il PDF aggiornato.' },
    ],
    useCases: [
      { title: 'Rimuovi pagine vuote', description: 'Pulisci i documenti rimuovendo le pagine vuote incluse accidentalmente.', icon: 'file-x' },
      { title: 'Rimuovi contenuti sensibili', description: 'Elimina le pagine contenenti informazioni riservate prima di condividere i documenti.', icon: 'shield' },
      { title: 'Semplificare i documenti', description: 'Rimuovi le pagine obsolete o irrilevanti per creare documenti più mirati.', icon: 'filter' },
    ],
    faq: [
      { question: 'Posso recuperare le pagine cancellate?', answer: 'L\'eliminazione è permanente nel file di output. Conserva una copia di backup del documento originale se potresti aver bisogno delle pagine in seguito.' },
      { question: 'Posso eliminare più pagine contemporaneamente?', answer: 'Sì, puoi selezionare ed eliminare più pagine contemporaneamente.' },
      { question: 'L\'eliminazione delle pagine influirà sui segnalibri?', answer: 'I segnalibri che puntano alle pagine eliminate verranno rimossi. I segnalibri per le pagine rimanenti vengono conservati.' },
    ],
  },


  // ==================== EDIT & ANNOTATE ====================
  'bookmark': {
    title: 'Modifica segnalibri',
    metaDescription: 'Aggiungi, modifica e gestisci i segnalibri PDF. Crea una struttura di navigazione per i tuoi documenti.',
    keywords: ['segnalibri pdf', 'modificare i segnalibri', 'aggiungere segnalibri', 'navigazione in formato pdf', 'sommario'],
    description: `<p>Modifica segnalibri ti consente di creare, modificare e organizzare i segnalibri nei tuoi documenti PDF. I segnalibri forniscono una navigazione rapida a sezioni specifiche, rendendo più facile l'utilizzo dei documenti lunghi.</p>
      <p>Puoi aggiungere nuovi segnalibri, modificare quelli esistenti, riorganizzare la gerarchia dei segnalibri o importare segnalibri da fonti esterne. Questo strumento è essenziale per creare documenti professionali e navigabili.</p>
      <p>Tutte le modifiche avvengono localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionare il documento che desideri modificare.' },
      { step: 2, title: 'Gestisci segnalibri', description: 'Aggiungi nuovi segnalibri, modifica quelli esistenti o trascina per riorganizzare la gerarchia.' },
      { step: 3, title: 'Salva e scarica', description: 'Fare clic su Salva per applicare le modifiche e scaricare il PDF con i segnalibri aggiornati.' },
    ],
    useCases: [
      { title: 'Crea navigazione', description: 'Aggiungi segnalibri a documenti lunghi per aiutare i lettori a navigare rapidamente verso sezioni specifiche.', icon: 'navigation' },
      { title: 'Organizza i capitoli', description: 'Crea una struttura gerarchica dei segnalibri che rispecchi l\'organizzazione dei capitoli del tuo documento.', icon: 'book-open' },
      { title: 'Migliora l\'accessibilità', description: 'Aggiungi segnalibri per rendere i documenti più accessibili e facili da usare.', icon: 'accessibility' },
    ],
    faq: [
      { question: 'Posso creare segnalibri nidificati?', answer: 'Sì, puoi creare una struttura gerarchica con segnalibri padre e figlio.' },
      { question: 'Posso importare segnalibri da un file?', answer: 'Sì, puoi importare strutture di segnalibri da JSON o file di testo.' },
      { question: 'I segnalibri funzioneranno in tutti i lettori PDF?', answer: 'Sì, i segnalibri sono una funzionalità PDF standard supportata da tutti i principali lettori PDF.' },
    ],
  },

  'table-of-contents': {
    title: 'Sommario',
    metaDescription: 'Genera un sommario per il tuo PDF. Crea una navigazione cliccabile dai segnalibri.',
    keywords: ['indice dei contenuti in formato pdf', 'generatore di toc', 'indice pdf', 'navigazione del documento'],
    description: `<p>Table of Contents genera una pagina di sommario navigabile per i tuoi documenti PDF. Il sommario può essere creato da segnalibri esistenti o voci personalizzate, fornendo ai lettori una panoramica e una navigazione rapida.</p>
      <p>Personalizza l'aspetto con stili, caratteri e layout diversi. Il sommario generato include collegamenti cliccabili che portano direttamente alle pagine di riferimento.</p>
      <p>Tutta l'elaborazione avviene localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionare il documento.' },
      { step: 2, title: 'Configura il sommario', description: 'Scegli di generare dai segnalibri o creare voci personalizzate. Seleziona le opzioni di stile e posizionamento.' },
      { step: 3, title: 'Genera e scarica', description: 'Fare clic su Genera per creare il sommario e scaricare il PDF aggiornato.' },
    ],
    useCases: [
      { title: 'Documenti accademici', description: 'Aggiungi un sommario professionale a tesi, dissertazioni e documenti di ricerca.', icon: 'graduation-cap' },
      { title: 'Rapporti aziendali', description: 'Crea report navigabili con elenchi di sezioni chiari per le parti interessate.', icon: 'bar-chart' },
      { title: 'Manuali utente', description: 'Genera sommari completi per la documentazione tecnica e le guide per l\'utente.', icon: 'book' },
    ],
    faq: [
      { question: 'Posso personalizzare l\'aspetto del sommario?', answer: 'Sì, puoi scegliere tra diversi stili, caratteri e layout per il tuo sommario.' },
      { question: 'Dove viene inserito il sommario?', answer: 'Per impostazione predefinita, il sommario viene inserito all\'inizio del documento, ma puoi scegliere una posizione diversa.' },
      { question: 'È possibile fare clic sulle voci del sommario?', answer: 'Sì, ogni voce è un collegamento cliccabile che indirizza alla pagina corrispondente.' },
    ],
  },

  'page-numbers': {
    title: 'Numeri di pagina',
    metaDescription: 'Aggiungi numeri di pagina ai documenti PDF. Personalizza posizione, formato e numero di partenza.',
    keywords: ['aggiungere i numeri di pagina', 'numeri di pagina pdf', 'numero di pagine pdf', 'impaginazione del pdf'],
    description: `<p>Page Numbers aggiunge una numerazione delle pagine personalizzabile ai tuoi documenti PDF. Scegli tra vari formati, posizioni e stili per adattarli al design del tuo documento.</p>
      <p>Puoi impostare il numero iniziale, saltare determinate pagine e utilizzare diversi formati di numerazione (1, 2, 3 o i, ii, iii). Perfetto per creare documenti professionali con una corretta impaginazione.</p>
      <p>Tutta l'elaborazione avviene localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionare il documento.' },
      { step: 2, title: 'Configura numerazione', description: 'Scegli posizione, formato, numero iniziale e quali pagine numerare.' },
      { step: 3, title: 'Applica e scarica', description: 'Fai clic su Applica per aggiungere numeri di pagina e scaricare il PDF aggiornato.' },
    ],
    useCases: [
      { title: 'Documenti professionali', description: 'Aggiungi numeri di pagina a report, proposte e documenti aziendali.', icon: 'file-text' },
      { title: 'Documenti accademici', description: 'Numera le pagine in base ai requisiti di formattazione accademica.', icon: 'graduation-cap' },
      { title: 'Documenti legali', description: 'Aggiungi un\'impaginazione corretta ai contratti e alla documentazione legale.', icon: 'scale' },
    ],
    faq: [
      { question: 'Posso saltare la prima pagina?', answer: 'Sì, puoi specificare quali pagine numerare e quali saltare, ad esempio frontespizi o copertine.' },
      { question: 'Quali formati numerici sono disponibili?', answer: 'Puoi utilizzare numeri arabi (1, 2, 3), numeri romani (i, ii, iii o I, II, III) o lettere (a, b, c).' },
      { question: 'Posso aggiungere il formato "Pagina X di Y"?', answer: 'Sì, puoi includere il conteggio totale delle pagine nel formato di numerazione.' },
    ],
  },

  'add-watermark': {
    title: 'Aggiungi filigrana',
    metaDescription: 'Aggiungi filigrane di testo o immagini ai file PDF. Proteggi e marchia i tuoi documenti.',
    keywords: ['aggiungi filigrana', 'filigrana pdf', 'timbro pdf', 'marchio pdf', 'proteggere il pdf'],
    description: `<p>Aggiungi filigrana ti consente di inserire filigrane di testo o immagini sui tuoi documenti PDF. Le filigrane possono indicare lo stato del documento (Bozza, Riservato), aggiungere branding o scoraggiare la copia non autorizzata.</p>
      <p>Personalizza la posizione, le dimensioni, l'opacità, la rotazione e il colore della filigrana. Applica a tutte le pagine o seleziona pagine specifiche. Lo strumento supporta sia filigrane di testo che filigrane di immagini.</p>
      <p>Tutta l'elaborazione avviene localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionare il documento.' },
      { step: 2, title: 'Crea filigrana', description: 'Inserisci il testo o carica un\'immagine per la filigrana. Regola posizione, dimensione, opacità e rotazione.' },
      { step: 3, title: 'Applica e scarica', description: 'Fai clic su Applica per aggiungere la filigrana e scaricare il PDF aggiornato.' },
    ],
    useCases: [
      { title: 'Protezione dei documenti', description: 'Aggiungi filigrane "Confidenziale" o "Bozza" per indicare lo stato del documento.', icon: 'shield' },
      { title: 'Documenti di marca', description: 'Aggiungi loghi o nomi aziendali ai documenti ufficiali.', icon: 'award' },
      { title: 'Avviso sul diritto d\'autore', description: 'Aggiungi informazioni sul copyright per proteggere la proprietà intellettuale.', icon: 'copyright' },
    ],
    faq: [
      { question: 'Posso utilizzare un\'immagine come filigrana?', answer: 'Sì, puoi caricare immagini PNG, JPG o SVG da utilizzare come filigrane.' },
      { question: 'Posso rendere la filigrana semitrasparente?', answer: 'Sì, puoi regolare l\'opacità da completamente trasparente a completamente opaco.' },
      { question: 'Posso applicare filigrane diverse a pagine diverse?', answer: 'Lo strumento applica la stessa filigrana alle pagine selezionate. Per filigrane diverse, elaborare il documento più volte.' },
    ],
  },

  'header-footer': {
    title: 'Intestazione e piè di pagina',
    metaDescription: 'Aggiungi intestazioni e piè di pagina ai documenti PDF. Includi numeri di pagina, date e testo personalizzato.',
    keywords: ['intestazione pdf', 'piè di pagina del pdf', 'aggiungi piè di pagina dell\'intestazione', 'carta intestata pdf'],
    description: `<p>Header & Footer aggiunge intestazioni e piè di pagina personalizzabili ai tuoi documenti PDF. Includi numeri di pagina, date, titoli di documenti o qualsiasi testo personalizzato nelle aree di intestazione o piè di pagina.</p>
      <p>Posiziona il contenuto a sinistra, al centro o a destra dell'intestazione/piè di pagina. Se necessario, utilizza contenuti diversi per le pagine pari e dispari. Perfetto per creare documenti professionali con formattazione coerente.</p>
      <p>Tutta l'elaborazione avviene localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionare il documento.' },
      { step: 2, title: 'Configura intestazione/piè di pagina', description: 'Inserisci il testo per le aree di intestazione e piè di pagina. Aggiungi numeri di pagina, date o testo personalizzato.' },
      { step: 3, title: 'Applica e scarica', description: 'Fai clic su Applica per aggiungere intestazioni/piè di pagina e scaricare il PDF aggiornato.' },
    ],
    useCases: [
      { title: 'Documenti aziendali', description: 'Aggiungi il nome dell\'azienda e i numeri di pagina ai documenti professionali.', icon: 'briefcase' },
      { title: 'Documenti legali', description: 'Includere numeri di caso, date e riferimenti di pagina nei documenti legali.', icon: 'scale' },
      { title: 'Documenti accademici', description: 'Aggiungi intestazioni consecutive con il titolo dell\'articolo e il nome dell\'autore.', icon: 'graduation-cap' },
    ],
    faq: [
      { question: 'Posso avere intestazioni diverse sulle pagine pari e dispari?', answer: 'Sì, puoi configurare contenuti diversi per le pagine pari e dispari.' },
      { question: 'Posso includere la data attuale?', answer: 'Sì, puoi inserire campi data dinamici che mostrano la data corrente.' },
      { question: 'Posso saltare l\'intestazione/piè di pagina in alcune pagine?', answer: 'Sì, puoi specificare quali pagine devono avere intestazioni/piè di pagina e quali devono essere saltate.' },
    ],
  },

  'invert-colors': {
    title: 'Inverti colori',
    metaDescription: 'Inverti i colori del PDF per la lettura in modalità oscura. Converti documenti in colori negativi.',
    keywords: ['invertire i colori del pdf', 'pdf in modalità oscura', 'pdf negativo', 'colori invertiti'],
    description: `<p>Inverti colori inverte i colori nei tuoi documenti PDF, creando un effetto immagine negativo. Ciò è particolarmente utile per creare versioni dei documenti in modalità oscura per facilitare la lettura in condizioni di scarsa illuminazione.</p>
      <p>Lo strumento può invertire tutti i colori o preservare selettivamente alcuni elementi come le immagini. Perfetto per ridurre l'affaticamento degli occhi durante la lettura di documenti di notte.</p>
      <p>Tutta l'elaborazione avviene localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionare il documento.' },
      { step: 2, title: 'Configura opzioni', description: 'Scegli se invertire tutto il contenuto o preservare le immagini.' },
      { step: 3, title: 'Inverti e scarica', description: 'Fare clic su Inverti per elaborare il documento e scaricare il risultato.' },
    ],
    useCases: [
      { title: 'Lettura notturna', description: 'Crea versioni dei documenti in modalità oscura per una lettura confortevole di notte.', icon: 'moon' },
      { title: 'Ridurre l\'affaticamento degli occhi', description: 'Capovolgi i documenti luminosi per ridurre l\'affaticamento degli occhi durante la lettura prolungata.', icon: 'eye' },
      { title: 'Risparmio di stampa', description: 'Inverti i documenti per ridurre il consumo di inchiostro durante la stampa di bozze.', icon: 'printer' },
    ],
    faq: [
      { question: 'Anche le immagini verranno invertite?', answer: 'Per impostazione predefinita, sì. Puoi scegliere di preservare le immagini originali invertendo testo e sfondi.' },
      { question: 'Posso invertire solo pagine specifiche?', answer: 'Sì, puoi selezionare quali pagine invertire.' },
      { question: 'L\'inversione è reversibile?', answer: 'È possibile invertire nuovamente il documento per ripristinare approssimativamente i colori originali.' },
    ],
  },

  'background-color': {
    title: 'Colore di sfondo',
    metaDescription: 'Cambia il colore di sfondo del PDF. Aggiungi sfondi colorati alle pagine dei documenti.',
    keywords: ['colore di sfondo del pdf', 'cambiare lo sfondo del pdf', 'pdf colorato', 'colore della pagina pdf'],
    description: `<p>Colore sfondo ti consente di modificare o aggiungere colori di sfondo alle tue pagine PDF. Ciò può migliorare la leggibilità, aggiungere interesse visivo o soddisfare i tuoi requisiti di branding.</p>
      <p>Scegli un colore qualsiasi per lo sfondo e applicalo a tutte le pagine o alle pagine selezionate. Lo strumento conserva tutto il contenuto esistente aggiungendo il livello di sfondo.</p>
      <p>Tutta l'elaborazione avviene localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionare il documento.' },
      { step: 2, title: 'Scegli il colore', description: 'Seleziona un colore di sfondo utilizzando il selettore colori o inserisci un codice esadecimale.' },
      { step: 3, title: 'Applica e scarica', description: 'Fai clic su Applica per aggiungere lo sfondo e scaricare il PDF aggiornato.' },
    ],
    useCases: [
      { title: 'Migliora la leggibilità', description: 'Aggiungi uno sfondo color crema chiaro o seppia per ridurre l\'affaticamento degli occhi.', icon: 'eye' },
      { title: 'Documenti di marca', description: 'Utilizza i colori del marchio come sfondi per i materiali di marketing.', icon: 'palette' },
      { title: 'Evidenzia sezioni', description: 'Utilizza colori di sfondo diversi per distinguere le sezioni del documento.', icon: 'layers' },
    ],
    faq: [
      { question: 'Lo sfondo coprirà i contenuti esistenti?', answer: 'No, lo sfondo viene aggiunto dietro il contenuto esistente, preservando tutto il testo e le immagini.' },
      { question: 'Posso utilizzare colori diversi per pagine diverse?', answer: 'Dovresti elaborare il documento più volte per colori diversi su pagine diverse.' },
      { question: 'Posso rimuovere uno sfondo esistente?', answer: 'Questo strumento aggiunge sfondi. Per rimuovere gli sfondi, potrebbe essere necessario utilizzare lo strumento Modifica PDF.' },
    ],
  },

  'text-color': {
    title: 'Cambia il colore del testo',
    metaDescription: 'Cambia il colore del testo nei documenti PDF. Modifica il colore di tutto il contenuto testuale.',
    keywords: ['cambiare il colore del testo in pdf', 'colore del testo pdf', 'modificare il colore del testo', 'ricolorare il testo in pdf'],
    description: `<p>Cambia colore testo ti consente di modificare il colore del testo nei tuoi documenti PDF. Ciò è utile per migliorare il contrasto, abbinare il marchio o creare variazioni visive dei documenti.</p>
      <p>Seleziona un nuovo colore e applicalo a tutto il testo nel documento. Lo strumento elabora gli elementi di testo preservando immagini e altri contenuti.</p>
      <p>Tutta l'elaborazione avviene localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionare il documento.' },
      { step: 2, title: 'Scegli il colore', description: 'Seleziona un nuovo colore del testo utilizzando il selettore colori o inserisci un codice esadecimale.' },
      { step: 3, title: 'Applica e scarica', description: 'Fai clic su Applica per modificare il colore del testo e scaricare il PDF aggiornato.' },
    ],
    useCases: [
      { title: 'Migliora il contrasto', description: 'Cambia il colore del testo per migliorare la leggibilità rispetto allo sfondo.', icon: 'contrast' },
      { title: 'Coerenza del marchio', description: 'Aggiorna i colori del testo in modo che corrispondano alle linee guida del marchio.', icon: 'palette' },
      { title: 'Accessibilità', description: 'Regola i colori del testo per soddisfare i requisiti di contrasto dell\'accessibilità.', icon: 'accessibility' },
    ],
    faq: [
      { question: 'Verrà modificato tutto il testo?', answer: 'Sì, lo strumento cambia il colore di tutti gli elementi di testo nel documento.' },
      { question: 'Posso modificare solo un testo specifico?', answer: 'Questo strumento modifica tutto il testo. Per modifiche selettive, utilizzare lo strumento Modifica PDF.' },
      { question: 'Il testo formattato (grassetto, corsivo) verrà preservato?', answer: 'Sì, la formattazione del testo viene preservata; cambia solo il colore.' },
    ],
  },

  'add-stamps': {
    title: 'Aggiungi timbri',
    metaDescription: 'Aggiungi timbri ai documenti PDF. Utilizza timbri preimpostati o personalizzati per l\'approvazione, la revisione e altro ancora.',
    keywords: ['timbri pdf', 'aggiungi timbro', 'timbro di approvazione', 'timbro di gomma pdf'],
    description: `<p>Aggiungi timbri ti consente di inserire immagini di timbri sui tuoi documenti PDF. Utilizza timbri preimpostati come "Approvato", "Rifiutato", "Bozza" oppure carica immagini di timbri personalizzati.</p>
      <p>Posiziona i timbri in qualsiasi punto della pagina, ridimensionali e applicali a pagine singole o multiple. Perfetto per flussi di lavoro di documenti, approvazioni e indicatori di stato.</p>
      <p>Tutta l'elaborazione avviene localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionare il documento.' },
      { step: 2, title: 'Seleziona Timbro', description: 'Scegli un timbro preimpostato o carica un\'immagine di timbro personalizzata.' },
      { step: 3, title: 'Posiziona e applica', description: 'Fare clic per posizionare il timbro, regolare la posizione e le dimensioni, quindi scaricare.' },
    ],
    useCases: [
      { title: 'Approvazione del documento', description: 'Aggiungi timbri "Approvato" o "Rifiutato" ai documenti nei flussi di lavoro di revisione.', icon: 'check-circle' },
      { title: 'Indicazione dello stato', description: 'Contrassegnare i documenti come "Bozza", "Finale" o "Confidenziale".', icon: 'tag' },
      { title: 'Controllo di qualità', description: 'Aggiungi timbri QC per indicare il completamento dell\'ispezione o della revisione.', icon: 'clipboard-check' },
    ],
    faq: [
      { question: 'Quali timbri preimpostati sono disponibili?', answer: 'Le preimpostazioni includono Approvato, Rifiutato, Bozza, Finale, Riservato, Copia e altro.' },
      { question: 'Posso caricare timbri personalizzati?', answer: 'Sì, puoi caricare immagini PNG o JPG da utilizzare come timbri personalizzati.' },
      { question: 'Posso aggiungere più timbri a un documento?', answer: 'Sì, puoi aggiungere più timbri e posizionarli ciascuno in modo indipendente.' },
    ],
  },

  'remove-annotations': {
    title: 'Rimuovi annotazioni',
    metaDescription: 'Rimuovere le annotazioni dai file PDF. Elimina commenti, evidenziazioni e markup.',
    keywords: ['rimuovere le annotazioni dal pdf', 'eliminare i commenti', 'rimuovere le luci', 'pdf pulito'],
    description: `<p>Rimuovi annotazioni rimuove commenti, evidenziazioni, note adesive e altre annotazioni dai tuoi documenti PDF. Questo crea una versione pulita del documento senza markup.</p>
      <p>Puoi rimuovere tutte le annotazioni o rimuovere selettivamente tipi specifici. Perfetto per creare versioni finali di documenti revisionati o rimuovere commenti sensibili.</p>
      <p>Tutta l'elaborazione avviene localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionare il documento.' },
      { step: 2, title: 'Seleziona Tipi di annotazione', description: 'Scegli quali tipi di annotazioni rimuovere: commenti, evidenziazioni, collegamenti, ecc.' },
      { step: 3, title: 'Rimuovi e scarica', description: 'Fare clic su Rimuovi per eliminare le annotazioni e scaricare il PDF pulito.' },
    ],
    useCases: [
      { title: 'Finalizzare i documenti', description: 'Rimuovi i commenti di revisione e il markup prima di pubblicare i documenti finali.', icon: 'file-check' },
      { title: 'Tutela della privacy', description: 'Rimuovi i commenti che potrebbero contenere informazioni sensibili prima di condividerli.', icon: 'shield' },
      { title: 'Distribuzione pulita', description: 'Crea copie pulite di documenti annotati per la distribuzione.', icon: 'copy' },
    ],
    faq: [
      { question: 'Quali tipi di annotazioni possono essere rimosse?', answer: 'È possibile rimuovere commenti, evidenziazioni, sottolineature, barre, note adesive, timbri e collegamenti.' },
      { question: 'Posso conservare alcune annotazioni?', answer: 'Sì, puoi selezionare quali tipi di annotazioni rimuovere e quali conservare.' },
      { question: 'È reversibile?', answer: 'No, la rimozione delle annotazioni è permanente. Conserva una copia di backup dell\'originale, se necessario.' },
    ],
  },

  'form-filler': {
    title: 'Compilatore di moduli',
    metaDescription: 'Compila moduli PDF online. Completa moduli PDF interattivi senza stamparli.',
    keywords: ['compilare il modulo pdf', 'compilatore di moduli pdf', 'modulo pdf completo', 'pdf interattivo'],
    description: `<p>Form Filler ti consente di completare moduli PDF interattivi direttamente nel tuo browser. Compila i campi di testo, seleziona le caselle, seleziona le opzioni e aggiungi firme senza stampare il documento.</p>
      <p>Lo strumento supporta moduli PDF standard e moduli XFA. I dati compilati possono essere salvati e il modulo può essere appiattito per impedire ulteriori modifiche.</p>
      <p>Tutta l'elaborazione avviene localmente nel tuo browser, garantendo che i dati del modulo rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo modulo PDF', description: 'Trascina e rilascia il modulo PDF o fai clic per selezionare il file.' },
      { step: 2, title: 'Compila il modulo', description: 'Fare clic sui campi del modulo per inserire testo, selezionare caselle o selezionare opzioni.' },
      { step: 3, title: 'Salva e scarica', description: 'Fare clic su Salva per conservare le voci e scaricare il modulo compilato.' },
    ],
    useCases: [
      { title: 'Moduli di domanda', description: 'Completare domande di lavoro, domande di permesso e moduli di registrazione.', icon: 'clipboard' },
      { title: 'Moduli fiscali', description: 'Compila elettronicamente documenti fiscali e moduli finanziari.', icon: 'file-text' },
      { title: 'Contratti', description: 'Completa i moduli contrattuali con le tue informazioni prima di firmare.', icon: 'file-signature' },
    ],
    faq: [
      { question: 'Posso salvare i miei progressi?', answer: 'Sì, puoi salvare i moduli parzialmente compilati e continuare in seguito.' },
      { question: 'Cos\'è l\'appiattimento della forma?', answer: 'L\'appiattimento converte i campi del modulo in contenuto statico, impedendo ulteriori modifiche.' },
      { question: 'Sono supportati i moduli XFA?', answer: 'Sì, lo strumento supporta sia i moduli AcroForms standard che quelli XFA.' },
    ],
  },

  'form-creator': {
    title: 'Creatore di moduli',
    metaDescription: 'Crea moduli PDF compilabili. Aggiungi campi di testo, caselle di controllo e menu a discesa ai documenti.',
    keywords: ['creare modulo pdf', 'creatore di moduli pdf', 'pdf compilabile', 'aggiungere campi del modulo'],
    description: `<p>Form Creator trasforma i documenti PDF statici in moduli compilabili interattivi. Aggiungi campi di testo, caselle di controllo, pulsanti di opzione, menu a discesa e altro per creare moduli professionali.</p>
      <p>Trascina gli elementi del modulo sul tuo documento, configura le proprietà dei campi e crea moduli che possono essere compilati elettronicamente. Perfetto per creare applicazioni, sondaggi e moduli di raccolta dati.</p>
      <p>Tutta l'elaborazione avviene localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionare il documento da convertire in un modulo.' },
      { step: 2, title: 'Aggiungi campi modulo', description: 'Seleziona i tipi di campo dalla barra degli strumenti e fai clic per posizionarli nel documento.' },
      { step: 3, title: 'Configura e salva', description: 'Imposta le proprietà del campo, quindi salva e scarica il modulo PDF compilabile.' },
    ],
    useCases: [
      { title: 'Moduli di domanda', description: 'Crea domande di lavoro compilabili, moduli di adesione e registrazioni.', icon: 'user-plus' },
      { title: 'Sondaggi', description: 'Costruisci sondaggi e questionari interattivi per la raccolta dei dati.', icon: 'clipboard-list' },
      { title: 'Moduli d\'ordine', description: 'Crea moduli d\'ordine di prodotti con campi quantità e caselle di controllo.', icon: 'shopping-cart' },
    ],
    faq: [
      { question: 'Quali tipi di campo posso aggiungere?', answer: 'Campi di testo, caselle di controllo, pulsanti di opzione, menu a discesa, selettori di data e campi firma.' },
      { question: 'Posso rendere i campi obbligatori?', answer: 'Sì, puoi contrassegnare i campi come obbligatori e aggiungere regole di convalida.' },
      { question: 'Posso aggiungere calcoli?', answer: 'Calcoli di base come somma e media possono essere aggiunti ai campi numerici.' },
    ],
  },

  'remove-blank-pages': {
    title: 'Rimuovi pagine vuote',
    metaDescription: 'Rileva e rimuovi automaticamente le pagine vuote dai documenti PDF.',
    keywords: ['rimuovere le pagine bianche', 'eliminare le pagine vuote', 'pdf pulito', 'rimozione pagine vuote pdf'],
    description: `<p>Rimuovi pagine vuote rileva e rimuove automaticamente le pagine vuote dai tuoi documenti PDF. Ciò è utile per ripulire i documenti scansionati, rimuovere le pagine separatore o eliminare le pagine vuote incluse accidentalmente.</p>
      <p>Lo strumento utilizza il rilevamento intelligente per identificare le pagine veramente vuote preservando le pagine con contenuto minimo. Puoi regolare la soglia di sensibilità per controllare cosa conta come "vuoto".</p>
      <p>Tutta l'elaborazione avviene localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionare il documento.' },
      { step: 2, title: 'Regola soglia', description: 'Imposta la soglia di rilevamento degli spazi vuoti, se necessario (l\'impostazione predefinita funziona per la maggior parte dei documenti).' },
      { step: 3, title: 'Rimuovi e scarica', description: 'Fare clic su Rimuovi per eliminare le pagine vuote e scaricare il PDF pulito.' },
    ],
    useCases: [
      { title: 'Pulisci i documenti scansionati', description: 'Rimuovi le pagine vuote dai documenti scansionati in batch.', icon: 'scan' },
      { title: 'Rimuovere i separatori', description: 'Elimina le pagine divisorie vuote dai documenti uniti.', icon: 'minus' },
      { title: 'Riduci le dimensioni del file', description: 'Rimuovere le pagine vuote non necessarie per ridurre le dimensioni del documento.', icon: 'minimize-2' },
    ],
    faq: [
      { question: 'Come funziona il rilevamento degli spazi vuoti?', answer: 'Lo strumento analizza il contenuto della pagina e considera vuote le pagine con contenuto minimo o nessun contenuto visibile.' },
      { question: 'Posso vedere in anteprima quali pagine verranno rimosse?', answer: 'Sì, le pagine vuote rilevate vengono evidenziate per la revisione prima della rimozione.' },
      { question: 'Cosa succede se una pagina ha solo un\'intestazione/piè di pagina?', answer: 'Puoi regolare la soglia per determinare se le pagine con contenuto minimo devono essere considerate vuote.' },
    ],
  },
  // ==================== CONVERT TO PDF ====================
  'image-to-pdf': {
    title: 'Immagine in PDF',
    metaDescription: 'Converti qualsiasi immagine in PDF. Supporto per i formati JPG, PNG, WebP, BMP, TIFF, SVG e HEIC.',
    keywords: ['immagine in pdf', 'convertire l\'immagine', 'foto in pdf', 'immagine in pdf'],
    description: `<p>Image to PDF converte immagini di qualsiasi formato in documenti PDF. Il supporto dei formati JPG, PNG, WebP, BMP, TIFF, SVG e HEIC lo rende il convertitore di immagini universale.</p>
      <p>Combina più immagini in un unico PDF, disponili in qualsiasi ordine e personalizza le dimensioni e l'orientamento della pagina. Perfetto per creare album fotografici, archivi di documenti o portfolio.</p>
      <p>Tutte le conversioni avvengono nel tuo browser, garantendo che le tue immagini rimangano private.</p>`,
    howToUse: [
      { step: 1, title: 'Carica immagini', description: 'Trascina e rilascia immagini di qualsiasi formato supportato o fai clic per selezionare i file.' },
      { step: 2, title: 'Organizza e configura', description: 'Riordina le immagini e seleziona le dimensioni della pagina e le opzioni di orientamento.' },
      { step: 3, title: 'Converti e scarica', description: 'Fai clic su Converti per creare il tuo PDF e scaricare il risultato.' },
    ],
    useCases: [
      { title: 'Collezioni di foto', description: 'Combina foto da varie fonti in un unico album PDF.', icon: 'images' },
      { title: 'Documenti in formato misto', description: 'Converti immagini da diversi formati in un PDF unificato.', icon: 'file-stack' },
      { title: 'Creazione dell\'archivio', description: 'Crea archivi PDF da raccolte di immagini per l\'archiviazione a lungo termine.', icon: 'archive' },
    ],
    faq: [
      { question: 'Quali formati di immagine sono supportati?', answer: 'Sono tutti supportati i formati JPG, JPEG, PNG, WebP, BMP, TIFF, TIF, SVG, HEIC e HEIF.' },
      { question: 'Posso mescolare diversi formati di immagine?', answer: 'Sì, puoi combinare immagini di formati diversi in un unico PDF.' },
      { question: 'La qualità dell\'immagine verrà preservata?', answer: 'Sì, le immagini vengono incorporate nella loro qualità originale a meno che tu non scelga di comprimerle.' },
    ],
  },

  'png-to-pdf': {
    title: 'PNG in PDF',
    metaDescription: 'Converti immagini PNG in PDF. Mantieni la trasparenza e combina più file PNG.',
    keywords: ['png in pdf', 'convertire png', 'convertitore png', 'immagine trasparente in pdf'],
    description: `<p>PNG to PDF converte le tue immagini PNG in documenti PDF preservando la trasparenza. Perfetto per grafica, loghi, screenshot e immagini con sfondi trasparenti.</p>
      <p>Combina più file PNG in un unico PDF, disponili in qualsiasi ordine e personalizza le impostazioni della pagina. La conversione mantiene l'alta qualità delle tue immagini originali.</p>
      <p>Tutte le conversioni avvengono nel tuo browser, garantendo che le tue immagini rimangano private.</p>`,
    howToUse: [
      { step: 1, title: 'Carica file PNG', description: 'Trascina e rilascia le tue immagini PNG o fai clic per selezionare i file.' },
      { step: 2, title: 'Organizza e configura', description: 'Riordina le immagini e seleziona le opzioni per le dimensioni della pagina.' },
      { step: 3, title: 'Converti e scarica', description: 'Fai clic su Converti per creare il tuo PDF e scaricarlo.' },
    ],
    useCases: [
      { title: 'Portafoglio grafico', description: 'Compila grafica e design PNG in un portfolio professionale.', icon: 'palette' },
      { title: 'Documentazione sulle schermate', description: 'Converti screenshot in documentazione PDF.', icon: 'monitor' },
      { title: 'Collezioni di loghi', description: 'Crea cataloghi PDF di loghi e risorse del marchio.', icon: 'award' },
    ],
    faq: [
      { question: 'La trasparenza è preservata?', answer: 'La trasparenza PNG viene mantenuta nell\'output PDF.' },
      { question: 'Che dire delle animazioni PNG?', answer: 'I PNG animati vengono convertiti come immagini statiche utilizzando il primo fotogramma.' },
      { question: 'Posso impostare un colore di sfondo?', answer: 'Sì, puoi scegliere un colore di sfondo per le aree trasparenti.' },
    ],
  },

  'webp-to-pdf': {
    title: 'WebP in PDF',
    metaDescription: 'Converti immagini WebP in PDF. Conversione del formato immagine moderno con conservazione della qualità.',
    keywords: ['webp in pdf', 'convertire webp', 'convertitore webp', 'immagine web in pdf'],
    description: `<p>WebP to PDF converte le moderne immagini WebP in documenti PDF. WebP è un formato di immagine Web popolare e questo strumento semplifica la conversione di queste immagini per la stampa o l'archiviazione.</p>
      <p>Combina più file WebP in un unico PDF con impostazioni di pagina personalizzabili. La conversione preserva la qualità dell'immagine creando file PDF compatti.</p>
      <p>Tutte le conversioni avvengono nel tuo browser, garantendo che le tue immagini rimangano private.</p>`,
    howToUse: [
      { step: 1, title: 'Carica file WebP', description: 'Trascina e rilascia le tue immagini WebP o fai clic per selezionare i file.' },
      { step: 2, title: 'Configura opzioni', description: 'Disporre le immagini e selezionare le dimensioni e l\'orientamento della pagina.' },
      { step: 3, title: 'Converti e scarica', description: 'Fai clic su Converti per creare il tuo PDF.' },
    ],
    useCases: [
      { title: 'Archiviazione dei contenuti Web', description: 'Converti immagini web in PDF per l\'archiviazione offline.', icon: 'globe' },
      { title: 'Preparazione della stampa', description: 'Converti immagini WebP in PDF per scopi di stampa.', icon: 'printer' },
      { title: 'Standardizzazione dei formati', description: 'Converti WebP moderno in PDF universalmente compatibile.', icon: 'file-check' },
    ],
    faq: [
      { question: 'Cos\'è il formato WebP?', answer: 'WebP è un formato immagine moderno sviluppato da Google che fornisce una compressione superiore per le immagini web.' },
      { question: 'La qualità viene preservata?', answer: 'Sì, la conversione preserva la qualità dell\'immagine originale.' },
      { question: 'Posso convertire WebP animato?', answer: 'I file WebP animati vengono convertiti come immagini statiche.' },
    ],
  },

  'svg-to-pdf': {
    title: 'da SVG a PDF',
    metaDescription: 'Converti grafica vettoriale SVG in PDF. Preservare scalabilità e qualità.',
    keywords: ['da SVG a PDF', 'convertire SVG', 'vettore in pdf', 'grafica scalabile in pdf'],
    description: `<p>SVG to PDF converte la grafica vettoriale scalabile in documenti PDF preservandone la qualità vettoriale. I file SVG rimangono nitidi a qualsiasi dimensione e questa qualità viene mantenuta nell'output PDF.</p>
      <p>Perfetto per convertire loghi, icone, illustrazioni e disegni tecnici. Il PDF risultante mantiene la scalabilità della grafica vettoriale originale.</p>
      <p>Tutte le conversioni avvengono nel tuo browser, garantendo che i tuoi file rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica file SVG', description: 'Trascina e rilascia i tuoi file SVG o fai clic per selezionarli.' },
      { step: 2, title: 'Configura Impostazioni', description: 'Seleziona le dimensioni della pagina e le opzioni di disposizione.' },
      { step: 3, title: 'Converti e scarica', description: 'Fai clic su Converti per creare il tuo PDF vettoriale.' },
    ],
    useCases: [
      { title: 'Conversione del logo', description: 'Converti loghi SVG in PDF per materiali stampati.', icon: 'award' },
      { title: 'Disegni Tecnici', description: 'Converti esportazioni CAD e illustrazioni tecniche in PDF.', icon: 'ruler' },
      { title: 'Collezioni di icone', description: 'Crea cataloghi PDF di set di icone e grafica.', icon: 'grid' },
    ],
    faq: [
      { question: 'La qualità vettoriale è preservata?', answer: 'Sì, la qualità vettoriale SVG è completamente preservata nell\'output PDF.' },
      { question: 'Posso convertire SVG complessi?', answer: 'Sì, sono supportati SVG complessi con sfumature, filtri ed effetti.' },
      { question: 'E i caratteri incorporati?', answer: 'I caratteri incorporati nei file SVG vengono conservati nel PDF.' },
    ],
  },

  'bmp-to-pdf': {
    title: 'BMP in PDF',
    metaDescription: 'Converti immagini bitmap BMP in PDF. Supporto di formati legacy con conservazione della qualità.',
    keywords: ['bmp in pdf', 'convertire bmp', 'bitmap in pdf', 'convertitore bmp'],
    description: `<p>BMP in PDF converte le immagini bitmap in documenti PDF. BMP è un formato immagine legacy comunemente utilizzato negli ambienti Windows e questo strumento semplifica la conversione di questi file nel moderno formato PDF.</p>
      <p>Combina più file BMP in un unico PDF con impostazioni personalizzabili. La conversione comprime i file BMP generalmente di grandi dimensioni mantenendo la qualità dell'immagine.</p>
      <p>Tutte le conversioni avvengono nel tuo browser, garantendo che le tue immagini rimangano private.</p>`,
    howToUse: [
      { step: 1, title: 'Carica file BMP', description: 'Trascina e rilascia le tue immagini BMP o fai clic per selezionare i file.' },
      { step: 2, title: 'Configura opzioni', description: 'Disporre le immagini e selezionare le impostazioni della pagina.' },
      { step: 3, title: 'Converti e scarica', description: 'Fai clic su Converti per creare il tuo PDF.' },
    ],
    useCases: [
      { title: 'Conversione di file legacy', description: 'Converti vecchi file BMP nel moderno formato PDF.', icon: 'history' },
      { title: 'Schermate di Windows', description: 'Converti schermate bitmap di Windows in PDF.', icon: 'monitor' },
      { title: 'Modernizzazione dell\'archivio', description: 'Aggiorna gli archivi di immagini legacy in formato PDF.', icon: 'archive' },
    ],
    faq: [
      { question: 'La dimensione del file verrà ridotta?', answer: 'Sì, i file BMP vengono generalmente compressi in modo significativo quando convertiti in PDF.' },
      { question: 'La qualità viene preservata?', answer: 'Sì, la qualità dell\'immagine viene mantenuta durante la conversione.' },
      { question: 'Quali profondità di colore BMP sono supportate?', answer: 'Sono supportate tutte le profondità colore BMP standard, inclusi 24 bit e 32 bit.' },
    ],
  },

  'psd-to-pdf': {
    title: 'PSD in PDF',
    metaDescription: 'Converti file Adobe Photoshop (PSD) in formato PDF. Supporta più file e preserva la qualità dell\'immagine.',
    keywords: ['da psd a pdf', 'convertire PSD', 'Photoshop in pdf', 'convertitore psd', 'Adobe PSD in PDF'],
    description: `<p>PSD to PDF converte i file Adobe Photoshop (PSD) in documenti PDF. Questo strumento ti consente di visualizzare e condividere progetti PSD senza che sia necessario installare Photoshop.</p>
      <p>Puoi convertire più file PSD contemporaneamente e combinarli in un unico documento PDF. Lo strumento elabora ciascun file PSD, trasformando i livelli visibili in pagine PDF di alta qualità.</p>
      <p>Tutte le conversioni avvengono localmente nel tuo browser, garantendo che i tuoi progetti rimangano privati e sicuri.</p>`,
    howToUse: [
      { step: 1, title: 'Carica file PSD', description: 'Trascina e rilascia i tuoi file PSD o PSB oppure fai clic per selezionarli dal tuo dispositivo.' },
      { step: 2, title: 'Disporre l\'ordine', description: 'Trascina e rilascia le miniature dei file per disporle nell\'ordine desiderato.' },
      { step: 3, title: 'Converti e scarica', description: 'Fai clic su Converti per eseguire il rendering dei PSD e scaricare il documento PDF.' },
    ],
    useCases: [
      { title: 'Condividi disegni', description: 'Condividi i progetti di Photoshop con clienti o colleghi che non dispongono di Photoshop.', icon: 'share-2' },
      { title: 'Creazione del portafoglio', description: 'Compila il tuo lavoro di progettazione in un portfolio PDF professionale.', icon: 'layout' },
      { title: 'Preparazione della stampa', description: 'Converti disegni in PDF per scopi di stampa.', icon: 'printer' },
    ],
    faq: [
      { question: 'Ho bisogno di Photoshop installato?', answer: 'No, questo strumento funziona interamente nel tuo browser senza richiedere Adobe Photoshop.' },
      { question: 'Gli strati vengono preservati?', answer: 'Lo strumento rende lo stato visibile del PSD (immagine composita). I singoli livelli vengono appiattiti nel PDF.' },
      { question: 'Qual è la dimensione massima del file?', answer: 'Puoi caricare file fino a 100 MB ciascuno. L\'elaborazione di file PSD di grandi dimensioni potrebbe richiedere alcuni minuti.' },
    ],
  },

  'heic-to-pdf': {
    title: 'HEIC in PDF',
    metaDescription: 'Converti le foto HEIC dell\'iPhone in PDF. La conversione del formato immagine Apple è resa semplice.',
    keywords: ['heic in pdf', 'convertire heic', 'foto dell\'iphone in pdf', 'immagine della mela in pdf'],
    description: `<p>HEIC to PDF converte le foto in formato immagine ad alta efficienza di Apple in documenti PDF. HEIC è il formato foto predefinito su iPhone e iPad e questo strumento semplifica la condivisione di queste foto.</p>
      <p>Combina più foto HEIC in un unico PDF, perfetto per creare album fotografici o archivi di documenti dalle foto del tuo iPhone.</p>
      <p>Tutte le conversioni avvengono nel tuo browser, garantendo che le tue foto rimangano private.</p>`,
    howToUse: [
      { step: 1, title: 'Carica file HEIC', description: 'Trascina e rilascia le tue foto HEIC o fai clic per selezionare i file.' },
      { step: 2, title: 'Disporre le foto', description: 'Riordina le foto e seleziona le impostazioni della pagina.' },
      { step: 3, title: 'Converti e scarica', description: 'Fai clic su Converti per creare il tuo PDF.' },
    ],
    useCases: [
      { title: 'Album fotografici per iPhone', description: 'Crea album PDF dalle foto dell\'iPhone per condividerle.', icon: 'smartphone' },
      { title: 'Scansione di documenti', description: 'Converti le scansioni di documenti iPhone in formato PDF.', icon: 'scan' },
      { title: 'Condivisione multipiattaforma', description: 'Converti HEIC in PDF per una compatibilità universale.', icon: 'share-2' },
    ],
    faq: [
      { question: 'Cos\'è il formato HEIC?', answer: 'HEIC (High Efficiency Image Container) è il formato immagine di Apple che fornisce una compressione migliore rispetto a JPEG.' },
      { question: 'Sono supportate le Live Photo?', answer: 'Le Live Photo vengono convertite come immagini statiche utilizzando il fotogramma chiave.' },
      { question: 'I dati EXIF ​​vengono conservati?', answer: 'I metadati delle foto possono essere facoltativamente conservati o rimossi durante la conversione.' },
    ],
  },

  'tiff-to-pdf': {
    title: 'TIFF in PDF',
    metaDescription: 'Converti immagini TIFF in PDF. Supporto per file TIFF multipagina e conversione di alta qualità.',
    keywords: ['tiff in pdf', 'convertire tiff', 'tif in pdf', 'tiff multipagina'],
    description: `<p>TIFF in PDF converte le immagini TIFF, inclusi file TIFF multipagina, in documenti PDF. TIFF è comunemente utilizzato per scansioni di alta qualità e grafica professionale.</p>
      <p>I file TIFF multipagina vengono automaticamente convertiti in PDF multipagina. La conversione preserva l'alta qualità delle tue immagini originali.</p>
      <p>Tutte le conversioni avvengono nel tuo browser, garantendo che i tuoi file rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica file TIFF', description: 'Trascina e rilascia i tuoi file TIFF o fai clic per selezionarli.' },
      { step: 2, title: 'Configura opzioni', description: 'Seleziona le impostazioni della pagina e le opzioni di compressione.' },
      { step: 3, title: 'Converti e scarica', description: 'Fai clic su Converti per creare il tuo PDF.' },
    ],
    useCases: [
      { title: 'Documenti scansionati', description: 'Converti scansioni di alta qualità da TIFF a PDF.', icon: 'scan' },
      { title: 'Grafica professionale', description: 'Converti grafica TIFF professionale per la distribuzione.', icon: 'image' },
      { title: 'Conversione dell\'archivio', description: 'Converti archivi TIFF in un formato PDF più accessibile.', icon: 'archive' },
    ],
    faq: [
      { question: 'Sono supportati i TIFF multipagina?', answer: 'Sì, i file TIFF multipagina vengono convertiti automaticamente in PDF multipagina.' },
      { question: 'La qualità viene preservata?', answer: 'Sì, la qualità TIFF è completamente preservata nell\'output PDF.' },
      { question: 'Quale compressione viene utilizzata?', answer: 'Puoi scegliere tra le opzioni di compressione senza e con perdita.' },
    ],
  },

  'txt-to-pdf': {
    title: 'Testo in PDF',
    metaDescription: 'Converti file di testo semplice in PDF. Personalizza caratteri, margini e layout di pagina.',
    keywords: ['txt in pdf', 'testo in pdf', 'convertire file di testo', 'testo semplice in pdf'],
    description: `<p>Text to PDF converte file di testo semplice in documenti PDF formattati. Personalizza caratteri, dimensioni, margini e layout di pagina per creare documenti dall'aspetto professionale da testo semplice.</p>
      <p>Perfetto per convertire file di codice, registri, note o qualsiasi contenuto di testo semplice in formato PDF condivisibile.</p>
      <p>Tutte le conversioni avvengono nel tuo browser, garantendo che i tuoi file rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica file di testo', description: 'Trascina e rilascia il file .txt o fai clic per selezionarlo.' },
      { step: 2, title: 'Personalizza la formattazione', description: 'Scegli carattere, dimensione, margini e impostazioni della pagina.' },
      { step: 3, title: 'Converti e scarica', description: 'Fai clic su Converti per creare il tuo PDF formattato.' },
    ],
    useCases: [
      { title: 'Documentazione del codice', description: 'Converti file di codice sorgente in PDF per la documentazione.', icon: 'code' },
      { title: 'Archivi di registro', description: 'Converti file di registro in PDF per scopi di archiviazione.', icon: 'file-text' },
      { title: 'Nota Conversione', description: 'Converti note di testo semplice in documenti PDF formattati.', icon: 'sticky-note' },
    ],
    faq: [
      { question: 'Quali caratteri sono disponibili?', answer: 'Sono disponibili più caratteri, inclusi i caratteri a spaziatura fissa per il codice.' },
      { question: 'L\'avvolgimento della linea è automatico?', answer: 'Sì, le righe lunghe vengono automaticamente spostate a capo per adattarsi alla pagina.' },
      { question: 'Posso preservare la formattazione?', answer: 'Gli spazi bianchi e il rientro del testo originale vengono conservati.' },
    ],
  },

  'json-to-pdf': {
    title: 'JSON in PDF',
    metaDescription: 'Converti file JSON in PDF formattato. Evidenziazione della sintassi e output strutturato.',
    keywords: ['json in pdf', 'convertire json', 'visualizzatore json', 'formattatore json'],
    description: `<p>JSON in PDF converte i file di dati JSON in documenti PDF formattati e leggibili. L'output include l'evidenziazione della sintassi e il rientro corretto per una facile lettura.</p>
      <p>Perfetto per documentare risposte API, file di configurazione o qualsiasi dato JSON che deve essere condiviso o archiviato in un formato leggibile.</p>
      <p>Tutte le conversioni avvengono nel tuo browser, garantendo che i tuoi dati rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica file JSON', description: 'Trascina e rilascia il file .json o fai clic per selezionarlo.' },
      { step: 2, title: 'Configura visualizzazione', description: 'Scegli le opzioni di formattazione e l\'evidenziazione della sintassi.' },
      { step: 3, title: 'Converti e scarica', description: 'Fai clic su Converti per creare il tuo PDF formattato.' },
    ],
    useCases: [
      { title: 'Documentazione dell\'API', description: 'Converti le risposte API in PDF per la documentazione.', icon: 'code' },
      { title: 'Archivi di configurazione', description: 'Archivia i file di configurazione in formato PDF leggibile.', icon: 'settings' },
      { title: 'Rapporti sui dati', description: 'Crea report PDF dalle esportazioni di dati JSON.', icon: 'bar-chart' },
    ],
    faq: [
      { question: 'L\'evidenziazione della sintassi è inclusa?', answer: 'Sì, la sintassi JSON è evidenziata con colori per chiavi, valori e tipi.' },
      { question: 'Come vengono gestiti i dati nidificati?', answer: 'Gli oggetti e gli array nidificati sono rientrati correttamente per garantire la leggibilità.' },
      { question: 'Che dire dei file JSON di grandi dimensioni?', answer: 'I file di grandi dimensioni vengono impaginati automaticamente su più pagine.' },
    ],
  },

  'word-to-pdf': {
    title: 'Da Word a PDF',
    metaDescription: 'Converti documenti Word (DOCX) in PDF. Conserva la formattazione e il layout nei tuoi documenti convertiti.',
    keywords: ['parola in pdf', 'da docx a pdf', 'convertire la parola', 'convertitore di parole', 'microsoft word in pdf'],
    description: `<p>Word to PDF converte i documenti Microsoft Word in formato PDF preservando la formattazione, il layout e la struttura del contenuto originali.</p>
      <p>Carica i tuoi file DOCX e ottieni un output PDF di alta qualità adatto per la condivisione, la stampa o l'archiviazione. La conversione mantiene la formattazione del testo, gli stili di paragrafo e la struttura di base del documento.</p>
      <p>Tutte le conversioni avvengono localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati e sicuri.</p>`,
    howToUse: [
      { step: 1, title: 'Carica documento Word', description: 'Trascina e rilascia il tuo file .docx o fai clic per selezionarlo dal tuo dispositivo.' },
      { step: 2, title: 'Attendi l\'elaborazione', description: 'Lo strumento caricherà il documento e lo preparerà per la conversione.' },
      { step: 3, title: 'Scarica PDF', description: 'Fai clic su Scarica per salvare il documento PDF convertito.' },
    ],
    useCases: [
      { title: 'Condivisione dei documenti', description: 'Converti documenti Word in PDF per la condivisione e la visualizzazione universali.', icon: 'share-2' },
      { title: 'Preparazione della stampa', description: 'Crea PDF pronti per la stampa da documenti Word.', icon: 'printer' },
      { title: 'Archivio documenti', description: 'Archivia documenti Word in formato PDF stabile per l\'archiviazione a lungo termine.', icon: 'archive' },
    ],
    faq: [
      { question: 'Il formato .doc è supportato?', answer: 'Attualmente è supportato solo il formato .docx. Converti prima i file .doc in .docx utilizzando Microsoft Word o LibreOffice.' },
      { question: 'Le immagini vengono conservate?', answer: 'Il contenuto del testo e la formattazione di base vengono preservati. I layout complessi con molte immagini potrebbero avere un rendering semplificato.' },
      { question: 'La conversione è sicura?', answer: 'Sì, tutta l\'elaborazione avviene nel tuo browser. I tuoi documenti non lasciano mai il tuo dispositivo.' },
    ],
  },

  'excel-to-pdf': {
    title: 'Excel in PDF',
    metaDescription: 'Converti fogli di calcolo Excel (XLSX) in PDF. Conserva tabelle e dati nei tuoi documenti convertiti.',
    keywords: ['Excel in PDF', 'xlsx in pdf', 'convertire Excel', 'foglio di calcolo in pdf', 'microsoft excel in pdf'],
    description: `<p>Excel to PDF converte i fogli di calcolo Microsoft Excel in formato PDF preservando la struttura della tabella e l'organizzazione dei dati.</p>
      <p>Carica i tuoi file XLSX e ottieni un output PDF pulito con tabelle formattate correttamente. Ogni foglio della cartella di lavoro diventa una sezione separata nel PDF.</p>
      <p>Tutte le conversioni avvengono localmente nel tuo browser, garantendo che i tuoi dati rimangano privati e sicuri.</p>`,
    howToUse: [
      { step: 1, title: 'Carica file Excel', description: 'Trascina e rilascia il tuo file .xlsx o fai clic per selezionarlo dal tuo dispositivo.' },
      { step: 2, title: 'Attendi l\'elaborazione', description: 'Lo strumento caricherà il foglio di calcolo e convertirà tutti i fogli.' },
      { step: 3, title: 'Scarica PDF', description: 'Fai clic su Scarica per salvare il documento PDF convertito.' },
    ],
    useCases: [
      { title: 'Condivisione dei rapporti', description: 'Converti report Excel in PDF per distribuirli alle parti interessate.', icon: 'file-text' },
      { title: 'Archiviazione dei dati', description: 'Archivia i dati dei fogli di calcolo in formato PDF stabile.', icon: 'archive' },
      { title: 'Preparazione della stampa', description: 'Crea PDF pronti per la stampa da fogli di lavoro Excel.', icon: 'printer' },
    ],
    faq: [
      { question: 'Sono supportati più fogli?', answer: 'Sì, tutti i fogli della cartella di lavoro vengono convertiti e inclusi nel PDF.' },
      { question: 'Il formato .xls è supportato?', answer: 'Attualmente è supportato solo il formato .xlsx. Salvare prima i file .xls come .xlsx.' },
      { question: 'Le formule vengono conservate?', answer: 'Il PDF mostra i valori calcolati. Le formule non sono eseguibili in formato PDF.' },
    ],
  },

  'pptx-to-pdf': {
    title: 'PowerPoint in PDF',
    metaDescription: 'Converti presentazioni PowerPoint (PPTX) in PDF. Conserva diapositive e contenuti per condividerli facilmente.',
    keywords: ['powerpoint in pdf', 'pptx in pdf', 'convertire pptx', 'presentazione in pdf', 'diapositive in pdf'],
    description: `<p>PowerPoint to PDF converte le presentazioni di Microsoft PowerPoint in formato PDF, preservando il contenuto e il testo delle diapositive per una facile condivisione e visualizzazione.</p>
      <p>Ogni diapositiva diventa una pagina nel PDF, mantenendo il flusso della presentazione. Perfetto per condividere presentazioni con persone che non hanno PowerPoint installato.</p>
      <p>Tutte le conversioni avvengono localmente nel tuo browser, garantendo che le tue presentazioni rimangano private e sicure.</p>`,
    howToUse: [
      { step: 1, title: 'Carica file PowerPoint', description: 'Trascina e rilascia il file .pptx o fai clic per selezionarlo dal tuo dispositivo.' },
      { step: 2, title: 'Attendi l\'elaborazione', description: 'Lo strumento estrarrà il contenuto della diapositiva e creerà il PDF.' },
      { step: 3, title: 'Scarica PDF', description: 'Fai clic su Scarica per salvare il documento PDF convertito.' },
    ],
    useCases: [
      { title: 'Condivisione della presentazione', description: 'Condividi presentazioni con chiunque senza richiedere PowerPoint.', icon: 'share-2' },
      { title: 'Creazione dispense', description: 'Crea dispense PDF dalle diapositive della tua presentazione.', icon: 'file-text' },
      { title: 'Archivio presentazioni', description: 'Archivia le presentazioni in formato PDF stabile.', icon: 'archive' },
    ],
    faq: [
      { question: 'Le animazioni vengono conservate?', answer: 'Il PDF è un formato statico, quindi le animazioni e le transizioni non vengono conservate. Ogni diapositiva diventa una pagina statica.' },
      { question: 'Il formato .ppt è supportato?', answer: 'Attualmente è supportato solo il formato .pptx. Converti prima i file .ppt in .pptx.' },
      { question: 'Sono incluse le note del relatore?', answer: 'Attualmente, le note del relatore non sono incluse nell\'output PDF.' },
    ],
  },

  'xps-to-pdf': {
    title: 'XPS in PDF',
    metaDescription: 'Converti documenti XPS in formato PDF. Conversione ad alta fedeltà preservando layout e grafica.',
    keywords: ['XPS in PDF', 'convertire XP', 'convertitore xps', 'Microsoft XPS in PDF', 'oxps in pdf'],
    description: `<p>XPS to PDF converte i documenti Microsoft XPS (XML Paper Specifica) in formato PDF preservando il layout, il testo e la grafica vettoriale originali.</p>
      <p>XPS è un formato di documento fisso simile al PDF. Questo strumento fornisce una conversione ad alta fedeltà utilizzando l'analisi XPS nativa, garantendo una riproduzione accurata dei tuoi documenti.</p>
      <p>Tutte le conversioni avvengono localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati e sicuri.</p>`,
    howToUse: [
      { step: 1, title: 'Carica file XPS', description: 'Trascina e rilascia il file .xps o fai clic per selezionarlo dal tuo dispositivo.' },
      { step: 2, title: 'Attendi l\'elaborazione', description: 'Lo strumento analizzerà e convertirà il documento XPS.' },
      { step: 3, title: 'Scarica PDF', description: 'Fai clic su Scarica per salvare il documento PDF convertito.' },
    ],
    useCases: [
      { title: 'Conversione del formato', description: 'Converti documenti XPS in formati PDF più ampiamente supportati.', icon: 'file' },
      { title: 'Condivisione dei documenti', description: 'Condividi documenti XPS con utenti che non dispongono di visualizzatori XPS.', icon: 'share-2' },
      { title: 'Migrazione dell\'archivio', description: 'Migra gli archivi XPS in formato PDF per una migliore compatibilità.', icon: 'archive' },
    ],
    faq: [
      { question: 'Cos\'è il formato XPS?', answer: 'XPS (XML PaperSpecification) è il formato di documento fisso di Microsoft, simile al PDF. È comunemente usato per la stampa Windows.' },
      { question: 'La conversione è senza perdite?', answer: 'Sì, la conversione preserva testo, grafica e layout con alta fedeltà.' },
      { question: 'Sono supportati i file XPS multipagina?', answer: 'Sì, tutte le pagine del documento XPS vengono convertite in PDF.' },
    ],
  },

  'rtf-to-pdf': {
    title: 'Da RTF a PDF',
    metaDescription: 'Converti file RTF (Rich Text Format) in PDF. Conserva la formattazione del testo nei tuoi documenti.',
    keywords: ['da rtf a pdf', 'convertire rtf', 'testo ricco in pdf', 'convertitore rtf'],
    description: `<p>RTF to PDF converte i file Rich Text Format in documenti PDF. RTF è un formato di testo ampiamente supportato che include formattazione di base come caratteri, colori e stili.</p>
      <p>Carica i tuoi file RTF e ottieni un output PDF pulito preservando il contenuto del testo e la formattazione di base. Perfetto per convertire documenti legacy nel moderno formato PDF.</p>
      <p>Tutte le conversioni avvengono localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati e sicuri.</p>`,
    howToUse: [
      { step: 1, title: 'Carica file RTF', description: 'Trascina e rilascia il tuo file .rtf o fai clic per selezionarlo dal tuo dispositivo.' },
      { step: 2, title: 'Attendi l\'elaborazione', description: 'Lo strumento analizzerà e convertirà il contenuto RTF.' },
      { step: 3, title: 'Scarica PDF', description: 'Fai clic su Scarica per salvare il documento PDF convertito.' },
    ],
    useCases: [
      { title: 'Conversione legacy', description: 'Converti vecchi documenti RTF nel moderno formato PDF.', icon: 'history' },
      { title: 'Condivisione dei documenti', description: 'Condividi documenti RTF in formato PDF universalmente visualizzabile.', icon: 'share-2' },
      { title: 'Archiviare documenti', description: 'Archivia file RTF in formato PDF stabile per l\'archiviazione a lungo termine.', icon: 'archive' },
    ],
    faq: [
      { question: 'Quale formattazione viene preservata?', answer: 'La formattazione di testo di base, inclusi caratteri, paragrafi e stili, viene convertita. Le funzionalità RTF complesse possono essere semplificate.' },
      { question: 'Posso convertire più file RTF?', answer: 'Attualmente, viene convertito un file alla volta. Utilizza Unisci PDF per combinare più file convertiti.' },
      { question: 'Sono supportate le immagini incorporate?', answer: 'Il contenuto testuale è l\'obiettivo principale. Gli oggetti incorporati potrebbero non essere sottoposti a rendering.' },
    ],
  },

  'epub-to-pdf': {
    title: 'Da EPUB a PDF',
    metaDescription: 'Converti e-book EPUB in PDF. Conserva la formattazione, le immagini e la struttura dei capitoli.',
    keywords: ['da epub a pdf', 'convertire epub', 'dall\'ebook al pdf', 'convertitore epub'],
    description: `<p>EPUB to PDF converte i file dei libri elettronici in documenti PDF di alta qualità. EPUB è il formato di e-book più popolare, utilizzato dalla maggior parte degli e-reader e delle biblioteche digitali.</p>
      <p>Questo strumento preserva la formattazione del testo, le immagini e la struttura dei capitoli dei tuoi e-book. Perfetto per stampare, archiviare o condividere e-book in un formato universalmente visualizzabile.</p>
      <p>Tutte le conversioni avvengono localmente nel tuo browser utilizzando una tecnologia di rendering avanzata, garantendo che i tuoi libri rimangano privati e che la conversione sia rapida.</p>`,
    howToUse: [
      { step: 1, title: 'Carica file EPUB', description: 'Trascina e rilascia il tuo file .epub o fai clic per selezionarlo dal tuo dispositivo.' },
      { step: 2, title: 'Attendi la conversione', description: 'Lo strumento eseguirà il rendering e convertirà tutte le pagine del tuo e-book.' },
      { step: 3, title: 'Scarica PDF', description: 'Fai clic su Scarica per salvare il documento PDF convertito.' },
    ],
    useCases: [
      { title: 'Stampa e-book', description: 'Converti e-book in PDF per la stampa fisica.', icon: 'printer' },
      { title: 'Libri d\'archivio', description: 'Archivia gli e-book in formato PDF stabile a lungo termine.', icon: 'archive' },
      { title: 'Condividi documenti', description: 'Condividi e-book con chiunque, anche senza un e-reader.', icon: 'share-2' },
    ],
    faq: [
      { question: 'La formattazione è preservata?', answer: 'SÌ! Questo strumento utilizza il rendering EPUB nativo, preservando la formattazione del testo, le immagini e il layout con alta fedeltà.' },
      { question: 'Sono supportati gli EPUB protetti da DRM?', answer: 'No, gli e-book protetti da DRM non possono essere convertiti. Sono supportati solo file EPUB senza DRM.' },
      { question: 'Come viene determinata la dimensione della pagina?', answer: 'Il contenuto EPUB viene visualizzato nel formato pagina A4 standard per una leggibilità ottimale.' },
    ],
  },

  'mobi-to-pdf': {
    title: 'MOBI in PDF',
    metaDescription: 'Converti e-book MOBI in PDF. Supporto per il formato Kindle con rendering di alta qualità.',
    keywords: ['mobi in pdf', 'convertire mobi', 'kindle in pdf', 'azw in pdf', 'convertitore mobile'],
    description: `<p>MOBI to PDF converte i file di e-book di Amazon Kindle in documenti PDF di alta qualità. Il formato MOBI (inclusi AZW e AZW3) è il formato e-book proprietario di Amazon utilizzato sui dispositivi Kindle.</p>
      <p>Questo strumento preserva la formattazione del testo, le immagini e la struttura dei tuoi libri Kindle. Perfetto per stampare, archiviare o leggere su dispositivi che non supportano il formato MOBI.</p>
      <p>Tutte le conversioni avvengono localmente nel tuo browser utilizzando una tecnologia di rendering avanzata, garantendo che i tuoi libri rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica file MOBI', description: 'Trascina e rilascia il file .mobi, .azw o .azw3 oppure fai clic per selezionarlo dal tuo dispositivo.' },
      { step: 2, title: 'Attendi la conversione', description: 'Lo strumento eseguirà il rendering e convertirà tutte le pagine del tuo e-book.' },
      { step: 3, title: 'Scarica PDF', description: 'Fai clic su Scarica per salvare il documento PDF convertito.' },
    ],
    useCases: [
      { title: 'Stampa libri Kindle', description: 'Converti e-book Kindle in PDF per la stampa fisica.', icon: 'printer' },
      { title: 'Libri d\'archivio', description: 'Archivia libri Kindle nel formato PDF universale.', icon: 'archive' },
      { title: 'Lettura tra dispositivi', description: 'Leggi libri Kindle su dispositivi che supportano solo PDF.', icon: 'tablet-smartphone' },
    ],
    faq: [
      { question: 'Quali formati MOBI sono supportati?', answer: 'Questo strumento supporta file .mobi, .azw e .azw3 (versioni non DRM).' },
      { question: 'I libri Kindle protetti da DRM sono supportati?', answer: 'No, gli e-book protetti da DRM non possono essere convertiti. Sono supportati solo i file senza DRM.' },
      { question: 'La mia formattazione verrà preservata?', answer: 'SÌ! Lo strumento utilizza il rendering MOBI nativo per preservare testo, immagini e layout.' },
    ],
  },

  'djvu-to-pdf': {
    title: 'DJVU in PDF',
    metaDescription: 'Converti file di documenti DJVU in PDF. Rendering di alta qualità per documenti e libri scansionati.',
    keywords: ['djvu in pdf', 'convertire djvu', 'convertitore djvu', 'djvu pdf', 'djv in pdf'],
    description: `<p>DJVU to PDF converte i file di documenti DjVu in documenti PDF di alta qualità. DjVu è un formato di file per computer progettato principalmente per archiviare documenti scansionati, in particolare quelli contenenti una combinazione di testo, disegni e fotografie.</p>
      <p>Questo strumento esegue il rendering di ogni pagina del tuo file DJVU al DPI (punti per pollice) prescelto e le combina in un documento PDF ricercabile. Perfetto per convertire libri digitalizzati, manuali tecnici e documenti d'archivio.</p>
      <p>Tutte le conversioni avvengono localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati e sicuri.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il file DJVU', description: 'Trascina e rilascia il tuo file .djvu o .djv oppure fai clic per selezionarlo dal tuo dispositivo.' },
      { step: 2, title: 'Configura opzioni', description: 'Scegli i DPI di output (72, 150 o 300) e la qualità dell\'immagine per il PDF.' },
      { step: 3, title: 'Converti e scarica', description: 'Fai clic su Converti in PDF e scarica il documento convertito.' },
    ],
    useCases: [
      { title: 'Archiviare documenti', description: 'Converti gli archivi DJVU nel formato PDF universale.', icon: 'archive' },
      { title: 'Condividi libri scansionati', description: 'Condividi i libri scansionati in formato PDF per una più ampia compatibilità.', icon: 'share-2' },
      { title: 'Stampa documenti', description: 'Converti DJVU in PDF di alta qualità per la stampa.', icon: 'printer' },
    ],
    faq: [
      { question: 'Cos\'è il formato DJVU?', answer: 'DjVu è un formato di file progettato per archiviare documenti scansionati, in particolare quelli contenenti testo, disegni e immagini. Offre una compressione migliore rispetto al PDF per il contenuto scansionato.' },
      { question: 'Quale DPI dovrei scegliere?', answer: '72 DPI è adatto per la visualizzazione web, 150 DPI per documenti standard e 300 DPI per la stampa di alta qualità.' },
      { question: 'Il testo sarà ricercabile?', answer: 'Il testo verrà reso come immagini. Se hai bisogno di testo ricercabile, considera l\'utilizzo del nostro strumento PDF OCR dopo la conversione.' },
    ],
  },

  'fb2-to-pdf': {
    title: 'Da FB2 a PDF',
    metaDescription: 'Converti e-book FictionBook (FB2) in PDF. Supporta più file con rendering di alta qualità.',
    keywords: ['da fb2 a pdf', 'convertire fb2', 'libro di narrativa in pdf', 'convertitore fb2', 'fb2.zip in pdf'],
    description: `<p>FB2 to PDF converte i file e-book FictionBook (FB2) in documenti PDF di alta qualità. FB2 è un popolare formato di e-book basato su XML ampiamente utilizzato in Russia e nell'Europa orientale.</p>
      <p>Questo strumento supporta sia file .fb2 che .fb2.zip e può elaborare più file contemporaneamente. Conserva la formattazione del testo, le immagini e la struttura dei capitoli dei tuoi e-book.</p>
      <p>Tutte le conversioni avvengono localmente nel tuo browser utilizzando una tecnologia di rendering avanzata, garantendo che i tuoi libri rimangano privati e che la conversione sia rapida.</p>`,
    howToUse: [
      { step: 1, title: 'Carica file FB2', description: 'Trascina e rilascia uno o più file .fb2 o .fb2.zip oppure fai clic per selezionarli dal tuo dispositivo.' },
      { step: 2, title: 'Seleziona Qualità', description: 'Scegli la qualità di output: Bassa (72 DPI), Media (150 DPI) o Alta (300 DPI).' },
      { step: 3, title: 'Converti e scarica', description: 'Fai clic su Converti in PDF e scarica i documenti convertiti.' },
    ],
    useCases: [
      { title: 'Stampa e-book', description: 'Converti e-book FB2 in PDF per la stampa fisica.', icon: 'printer' },
      { title: 'Conversione batch', description: 'Converti più file FB2 in PDF contemporaneamente.', icon: 'layers' },
      { title: 'Formato universale', description: 'Condividi e-book in formato PDF che funziona su qualsiasi dispositivo.', icon: 'share-2' },
    ],
    faq: [
      { question: 'Posso convertire più file FB2 contemporaneamente?', answer: 'SÌ! Questo strumento supporta la conversione batch di un massimo di 20 file FB2 contemporaneamente.' },
      { question: 'Sono supportati i file .fb2.zip?', answer: 'Sì, lo strumento estrae e converte automaticamente i file FB2 dagli archivi .fb2.zip.' },
      { question: 'La formattazione è preservata?', answer: 'SÌ! Lo strumento utilizza il rendering FB2 nativo, preservando la formattazione del testo, le immagini e la struttura dei capitoli con alta fedeltà.' },
    ],
  },

  // ==================== CONVERT FROM PDF ====================

  'pdf-to-jpg': {
    title: 'Da PDF a JPG',
    metaDescription: 'Converti pagine PDF in immagini JPG. Estrazione di alta qualità con risoluzione personalizzabile.',
    keywords: ['da pdf a jpg', 'da pdf a jpeg', 'convertire pdf in immagine', 'estrarre immagini pdf'],
    description: `<p>PDF in JPG converte le pagine di documenti PDF in immagini JPG di alta qualità. Estrai tutte le pagine o seleziona pagine specifiche da convertire, con risoluzione e impostazioni di qualità personalizzabili.</p>
      <p>Perfetto per estrarre immagini da PDF, creare miniature o convertire documenti per l'utilizzo sul Web.</p>
      <p>Tutte le conversioni avvengono nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Seleziona Pagine e Qualità', description: 'Scegli quali pagine convertire e imposta le opzioni di qualità/DPI.' },
      { step: 3, title: 'Converti e scarica', description: 'Fare clic su Converti per estrarre le immagini e scaricarle come ZIP.' },
    ],
    useCases: [
      { title: 'Pubblicazione sul Web', description: 'Converti pagine PDF in immagini per l\'utilizzo sul sito web.', icon: 'globe' },
      { title: 'Mezzi sociali', description: 'Estrai le pagine come immagini per la condivisione sui social media.', icon: 'share-2' },
      { title: 'Presentazioni', description: 'Converti diapositive PDF in immagini per presentazioni.', icon: 'presentation' },
    ],
    faq: [
      { question: 'Quali impostazioni di qualità sono disponibili?', answer: 'È possibile impostare DPI da 72 a 300 e qualità JPEG da 1 a 100.' },
      { question: 'Posso convertire solo pagine specifiche?', answer: 'Sì, puoi selezionare singole pagine o intervalli di pagine da convertire.' },
      { question: 'Come vengono gestite più pagine?', answer: 'Ogni pagina diventa un file JPG separato, scaricato come archivio ZIP.' },
    ],
  },

  'pdf-to-png': {
    title: 'Da PDF a PNG',
    metaDescription: 'Converti pagine PDF in immagini PNG. Qualità senza perdite con supporto della trasparenza.',
    keywords: ['da pdf a png', 'convertire pdf in png', 'estrazione immagini pdf', 'conversione pdf senza perdita di dati'],
    description: `<p>PDF in PNG converte le pagine di documenti PDF in immagini PNG di alta qualità con compressione senza perdita di dati. Il formato PNG preserva perfettamente la qualità dell'immagine e supporta la trasparenza.</p>
      <p>Ideale per estrarre grafici, diagrammi o qualsiasi contenuto in cui la conservazione della qualità è fondamentale.</p>
      <p>Tutte le conversioni avvengono nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Configura opzioni', description: 'Seleziona le pagine e imposta le opzioni di risoluzione (DPI).' },
      { step: 3, title: 'Converti e scarica', description: 'Fai clic su Converti per estrarre le immagini PNG.' },
    ],
    useCases: [
      { title: 'Estrazione grafica', description: 'Estrai diagrammi e grafici con una qualità perfetta.', icon: 'image' },
      { title: 'Risorse di progettazione', description: 'Converti progetti PDF in PNG per software di modifica.', icon: 'palette' },
      { title: 'Documentazione', description: 'Crea immagini di alta qualità per la documentazione tecnica.', icon: 'file-text' },
    ],
    faq: [
      { question: 'Perché scegliere PNG invece di JPG?', answer: 'PNG offre supporto per compressione e trasparenza senza perdite, ideale per grafica e testo.' },
      { question: 'Sono supportati gli sfondi trasparenti?', answer: 'Sì, le pagine PDF con trasparenza vengono conservate nell\'output PNG.' },
      { question: 'Che DPI dovrei usare?', answer: 'Utilizza 150 DPI per la visualizzazione sullo schermo, 300 DPI per la stampa.' },
    ],
  },

  'pdf-to-webp': {
    title: 'Da PDF a WebP',
    metaDescription: 'Converti pagine PDF in immagini WebP. Formato moderno con eccellente compressione.',
    keywords: ['pdf in webp', 'convertire pdf in webp', 'formato immagine moderno', 'immagini ottimizzate per il web'],
    description: `<p>PDF in WebP converte le pagine di documenti PDF in immagini WebP, il moderno formato di immagine di Google che offre un'eccellente compressione con alta qualità.</p>
      Le immagini <p>WebP sono più piccole di JPG o PNG pur mantenendo una qualità comparabile, rendendole ideali per l'uso sul Web.</p>
      <p>Tutte le conversioni avvengono nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Imposta le opzioni di qualità', description: 'Scegli le pagine e configura le impostazioni di qualità/compressione.' },
      { step: 3, title: 'Converti e scarica', description: 'Fare clic su Converti per creare immagini WebP.' },
    ],
    useCases: [
      { title: 'Ottimizzazione Web', description: 'Crea immagini ottimizzate per il Web da contenuti PDF.', icon: 'globe' },
      { title: 'Risparmio di larghezza di banda', description: 'Riduci le dimensioni dei file immagine per un caricamento più rapido.', icon: 'zap' },
      { title: 'Siti web moderni', description: 'Utilizza formati di immagine moderni per progetti web contemporanei.', icon: 'layout' },
    ],
    faq: [
      { question: 'Cos\'è il formato WebP?', answer: 'WebP è un formato immagine moderno di Google che offre una compressione superiore.' },
      { question: 'WebP è ampiamente supportato?', answer: 'Sì, tutti i browser moderni supportano il formato WebP.' },
      { question: 'Quanto sono più piccoli i file WebP?', answer: 'I file WebP sono in genere più piccoli del 25-35% rispetto ai file JPG equivalenti.' },
    ],
  },

  'pdf-to-bmp': {
    title: 'Da PDF a BMP',
    metaDescription: 'Converti pagine PDF in immagini bitmap BMP. Formato non compresso per la massima compatibilità.',
    keywords: ['pdf in bmp', 'convertire pdf in bitmap', 'immagini non compresse', 'formato legacy'],
    description: `<p>PDF in BMP converte le pagine del documento PDF in immagini bitmap BMP. BMP è un formato non compresso che garantisce la massima compatibilità con sistemi e applicazioni legacy.</p>
      <p>Sebbene i file BMP siano più grandi dei formati compressi, offrono una qualità perfetta e compatibilità universale.</p>
      <p>Tutte le conversioni avvengono nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Seleziona Pagine', description: 'Scegli quali pagine convertire e imposta DPI.' },
      { step: 3, title: 'Converti e scarica', description: 'Fare clic su Converti per creare immagini BMP.' },
    ],
    useCases: [
      { title: 'Sistemi legacy', description: 'Crea immagini compatibili con software meno recenti.', icon: 'history' },
      { title: 'Applicazioni Windows', description: 'Genera file BMP per applicazioni specifiche di Windows.', icon: 'monitor' },
      { title: 'Archivi non compressi', description: 'Crea archivi di immagini non compressi da PDF.', icon: 'archive' },
    ],
    faq: [
      { question: 'Perché utilizzare il formato BMP?', answer: 'BMP offre qualità non compressa e massima compatibilità con i sistemi legacy.' },
      { question: 'I file BMP sono più grandi?', answer: 'Sì, i file BMP non sono compressi e sono molto più grandi di JPG o PNG.' },
      { question: 'Quali profondità di colore sono supportate?', answer: 'Sono supportate le profondità colore a 24 e 32 bit.' },
    ],
  },

  'pdf-to-tiff': {
    title: 'Da PDF a TIFF',
    metaDescription: 'Converti immagini PDF in TIFF. Qualità professionale con supporto multipagina.',
    keywords: ['da pdf a tiff', 'convertire pdf in tiff', 'immagini professionali', 'tiff multipagina'],
    description: `<p>PDF to TIFF converte i documenti PDF in immagini TIFF di alta qualità. TIFF è il formato preferito per la stampa e l'archiviazione professionale grazie alla sua compressione senza perdite.</p>
      <p>Crea TIFF a pagina singola o combina tutte le pagine in un file TIFF a più pagine. Perfetto per scopi professionali e di archivio.</p>
      <p>Tutte le conversioni avvengono nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Configura uscita', description: 'Scegli TIFF a pagina singola o multipagina e imposta DPI.' },
      { step: 3, title: 'Converti e scarica', description: 'Fare clic su Converti per creare immagini TIFF.' },
    ],
    useCases: [
      { title: 'Stampa professionale', description: 'Crea file TIFF pronti per la stampa da documenti PDF.', icon: 'printer' },
      { title: 'Archiviazione documenti', description: 'Archivia documenti in formato TIFF di alta qualità.', icon: 'archive' },
      { title: 'Editoria', description: 'Converti PDF in TIFF per la pubblicazione di flussi di lavoro.', icon: 'book' },
    ],
    faq: [
      { question: 'Posso creare TIFF multipagina?', answer: 'Sì, puoi combinare tutte le pagine PDF in un unico TIFF multipagina.' },
      { question: 'Quali opzioni di compressione sono disponibili?', answer: 'Sono disponibili LZW, ZIP e nessuna opzione di compressione.' },
      { question: 'Quali DPI devo utilizzare per la stampa?', answer: 'Utilizza 300 DPI o superiore per la stampa professionale.' },
    ],
  },

  'pdf-to-svg': {
    title: 'Da PDF a SVG',
    metaDescription: 'Converti pagine PDF in grafica vettoriale SVG. Scalabilità perfetta a qualsiasi dimensione con l\'esportazione di singole pagine.',
    keywords: ['da pdf a formato SVG', 'convertire PDF in SVG', 'grafica vettoriale', 'PDF scalabile', 'convertitore SVG'],
    description: `<p>PDF in SVG converte ogni pagina del tuo documento PDF in una grafica vettoriale scalabile (SVG). SVG è un formato vettoriale che mantiene una qualità perfetta a qualsiasi livello di zoom o dimensione di stampa.</p>
      <p>A differenza dei formati raster (JPG, PNG), la grafica SVG non diventa mai pixelata quando viene ridimensionata. Ciò li rende ideali per loghi, diagrammi, disegni tecnici e qualsiasi contenuto che debba essere visualizzato in dimensioni diverse.</p>
      <p>Visualizza in anteprima ciascuna pagina convertita e scaricala singolarmente o come file ZIP. Tutta l'elaborazione avviene localmente nel tuo browser, garantendo la completa privacy dei tuoi documenti.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per sfogliare e selezionare.' },
      { step: 2, title: 'Configura opzioni', description: 'Imposta la qualità della risoluzione e facoltativamente specifica gli intervalli di pagine.' },
      { step: 3, title: 'Anteprima e conversione', description: 'Fare clic su Converti in processo. Visualizza l\'anteprima di ogni pagina facendo clic sulle miniature.' },
      { step: 4, title: 'Scaricamento', description: 'Scarica singoli file SVG o tutte le pagine come archivio ZIP.' },
    ],
    useCases: [
      { title: 'Loghi e grafica', description: 'Estrai loghi e grafica vettoriale da PDF per utilizzarli in software di progettazione.', icon: 'pen-tool' },
      { title: 'Diagrammi tecnici', description: 'Converti disegni tecnici e diagrammi in formato SVG scalabile.', icon: 'ruler' },
      { title: 'Sviluppo Web', description: 'Crea file SVG pronti per il Web da contenuti PDF per siti Web reattivi.', icon: 'globe' },
      { title: 'Stampa in qualsiasi dimensione', description: 'Genera grafica vettoriale stampabile perfettamente in qualsiasi dimensione.', icon: 'printer' },
    ],
    faq: [
      { question: 'Cos\'è il formato SVG?', answer: 'SVG (Scalable Vector Graphics) è un formato di immagine vettoriale che può essere ridimensionato a qualsiasi dimensione senza perdere la qualità. È ampiamente utilizzato per loghi, icone e grafica web.' },
      { question: 'L\'SVG sarà veramente vettoriale?', answer: 'L\'SVG contiene un rendering ad alta risoluzione della pagina PDF. Per i PDF con contenuto vettoriale, ottieni risultati nitidi su qualsiasi scala.' },
      { question: 'Posso visualizzare l\'anteprima prima del download?', answer: 'SÌ! Fai clic su qualsiasi miniatura per visualizzare un\'anteprima a grandezza naturale dell\'SVG. Puoi scaricare singole pagine o tutte in una volta.' },
      { question: 'Quale risoluzione dovrei scegliere?', answer: 'Una risoluzione più elevata (216 o 288 DPI) produce SVG più grandi e dettagliati. Utilizza impostazioni inferiori per un\'elaborazione più rapida e file più piccoli.' },
    ],
  },

  'pdf-to-greyscale': {
    title: 'PDF in scala di grigi',
    metaDescription: 'Converti PDF a colori in scala di grigi. Ridurre le dimensioni del file e prepararsi per la stampa in bianco e nero.',
    keywords: ['pdf in scala di grigi', 'pdf in scala di grigi', 'pdf in bianco e nero', 'rimuovere i colori'],
    description: `<p>PDF in scala di grigi converte i documenti PDF a colori in scala di grigi (bianco e nero). Ciò riduce le dimensioni del file e prepara i documenti per la stampa in bianco e nero.</p>
      <p>La conversione preserva la chiarezza del testo e i dettagli dell'immagine rimuovendo le informazioni sul colore. Perfetto per la stampa di bozze o per creare versioni stampabili.</p>
      <p>Tutte le conversioni avvengono nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF a colori o fai clic per selezionarlo.' },
      { step: 2, title: 'Anteprima della conversione', description: 'Visualizza in anteprima l\'aspetto della versione in scala di grigi.' },
      { step: 3, title: 'Converti e scarica', description: 'Fare clic su Converti per creare il PDF in scala di grigi.' },
    ],
    useCases: [
      { title: 'Risparmio di stampa', description: 'Converti in scala di grigi per risparmiare sui costi di stampa a colori.', icon: 'printer' },
      { title: 'Bozze di documenti', description: 'Crea bozze in bianco e nero per la revisione.', icon: 'file-text' },
      { title: 'Riduzione dimensione file', description: 'Riduci le dimensioni del PDF rimuovendo le informazioni sul colore.', icon: 'minimize-2' },
    ],
    faq: [
      { question: 'Il testo rimarrà leggibile?', answer: 'Sì, la chiarezza del testo viene preservata durante la conversione in scala di grigi.' },
      { question: 'Quanto più piccolo sarà il file?', answer: 'La riduzione delle dimensioni del file varia ma può essere del 20-50% per i documenti con molti colori.' },
      { question: 'Posso convertire solo pagine specifiche?', answer: 'Sì, puoi selezionare quali pagine convertire in scala di grigi.' },
    ],
  },

  'pdf-to-json': {
    title: 'Da PDF a JSON',
    metaDescription: 'Estrai il contenuto PDF in formato JSON. Ottieni dati strutturati da documenti PDF.',
    keywords: ['pdf in json', 'estrarre dati pdf', 'analizzatore pdf', 'dati PDF strutturati'],
    description: `<p>PDF to JSON estrae il contenuto dai documenti PDF nel formato JSON strutturato. Estrai testo, metadati, informazioni sulla pagina e struttura del documento per uso programmatico.</p>
      <p>Perfetto per l'estrazione di dati, l'analisi di documenti o l'integrazione di contenuti PDF in applicazioni e flussi di lavoro.</p>
      <p>Tutta l'estrazione avviene nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Seleziona Dati da estrarre', description: 'Scegli quale contenuto estrarre: testo, metadati, struttura.' },
      { step: 3, title: 'Estrai e scarica', description: 'Fare clic su Estrai per generare JSON e scaricare.' },
    ],
    useCases: [
      { title: 'Estrazione dati', description: 'Estrai dati strutturati da documenti PDF.', icon: 'database' },
      { title: 'Analisi dei documenti', description: 'Analizza la struttura e il contenuto dei PDF in modo programmatico.', icon: 'search' },
      { title: 'Integrazione', description: 'Importa contenuti PDF nelle applicazioni tramite JSON.', icon: 'plug' },
    ],
    faq: [
      { question: 'Quali dati vengono estratti?', answer: 'Contenuto del testo, metadati, dimensioni della pagina, caratteri e struttura del documento.' },
      { question: 'Il formato JSON è documentato?', answer: 'Sì, lo schema JSON è coerente e ben documentato.' },
      { question: 'Posso estrarre da PDF scansionati?', answer: 'I PDF scansionati richiedono prima l\'OCR. Utilizza il nostro strumento PDF OCR prima dell\'estrazione.' },
    ],
  },

  'pdf-to-pptx': {
    title: 'PDF in PowerPoint',
    metaDescription: 'Converti PDF in presentazioni PowerPoint. Ogni pagina diventa una diapositiva di alta qualità.',
    keywords: ['da pdf a pptx', 'pdf in powerpoint', 'convertire diapositive pdf', 'presentazione in formato pdf'],
    description: `<p>PDF to PowerPoint converte i tuoi documenti PDF in presentazioni PowerPoint modificabili (PPTX). Ogni pagina PDF viene trasformata in una diapositiva di alta qualità, preservando perfettamente il layout visivo.</p>
      <p>Questo strumento è ideale per convertire report, dispense o qualsiasi contenuto PDF in formato presentazione. Puoi scegliere la qualità dell'immagine (DPI) per bilanciare le dimensioni del file e la chiarezza visiva.</p>
      <p>Tutte le conversioni avvengono localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati e sicuri.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo dal tuo dispositivo.' },
      { step: 2, title: 'Scegli Impostazioni qualità', description: 'Seleziona la qualità dell\'immagine (DPI) per le diapositive. DPI più alti significano una qualità migliore ma dimensioni del file più grandi.' },
      { step: 3, title: 'Converti e scarica', description: 'Fai clic su Converti per creare la tua presentazione PowerPoint e scaricare il file PPTX.' },
    ],
    useCases: [
      { title: 'Creazione di presentazioni', description: 'Converti report o documenti PDF in diapositive di presentazione per le riunioni.', icon: 'presentation' },
      { title: 'Materiali di formazione', description: 'Trasforma i documenti di formazione PDF in presentazioni PowerPoint interattive.', icon: 'book-open' },
      { title: 'Riproposizione dei contenuti', description: 'Converti il ​​contenuto PDF esistente in un formato diapositiva modificabile per un\'ulteriore personalizzazione.', icon: 'refresh-cw' },
    ],
    faq: [
      { question: 'Le diapositive saranno modificabili?', answer: 'Ogni diapositiva contiene un\'immagine di alta qualità della pagina PDF. Puoi aggiungere testo, forme e annotazioni in alto in PowerPoint.' },
      { question: 'Quale DPI dovrei scegliere?', answer: 'Utilizza 150 DPI per le presentazioni visualizzate sugli schermi. Utilizza 300 DPI per la stampa o quando hai bisogno della massima qualità.' },
      { question: 'Posso convertire PDF multipagina?', answer: 'Sì, ogni pagina del tuo PDF diventa una diapositiva separata nella presentazione PowerPoint.' },
    ],
  },

  'pdf-to-excel': {
    title: 'Da PDF a Excel',
    metaDescription: 'Converti PDF in fogli di calcolo Excel. Estrai tabelle in formato XLSX.',
    keywords: ['pdf per eccellere', 'da pdf a xlsx', 'convertire tabelle pdf', 'estrarre tabelle'],
    description: `<p>PDF to Excel converte i tuoi documenti PDF in fogli di calcolo Microsoft Excel modificabili (XLSX). Lo strumento rileva automaticamente le tabelle nel tuo PDF e le estrae in fogli separati.</p>
      <p>Questo strumento è ideale per analizzare rapporti finanziari, fatture o qualsiasi dato presentato in tabelle. Le tabelle di ogni pagina sono organizzate in fogli per una facile manipolazione dei dati.</p>
      <p>Tutte le conversioni avvengono localmente nel tuo browser, garantendo che i tuoi dati rimangano privati e sicuri.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Processo', description: 'Lo strumento identificherà ed estrarrà automaticamente le tabelle.' },
      { step: 3, title: 'Scarica Excel', description: 'Scarica il tuo file Excel con le tabelle estratte.' },
    ],
    useCases: [
      { title: 'Analisi finanziaria', description: 'Converti estratti conto o fatture in Excel per l\'analisi.', icon: 'trending-up' },
      { title: 'Estrazione dati', description: 'Estrai tabelle di dati da documenti o rapporti di ricerca.', icon: 'database' },
      { title: 'Gestione dell\'inventario', description: 'Converti elenchi di inventario da PDF a fogli di calcolo.', icon: 'clipboard' },
    ],
    faq: [
      { question: 'Come vengono gestite le tabelle?', answer: 'Le tabelle rilevate su ciascuna pagina vengono estratte nei fogli corrispondenti nel file Excel.' },
      { question: 'E se non ci fossero tavoli?', answer: 'Verrà creata una scheda informativa indicante che non è stata trovata alcuna tabella.' },
      { question: 'La formattazione viene mantenuta?', answer: 'I dati vengono conservati, ma la formattazione visiva complessa può essere semplificata per l\'utilizzo con fogli di calcolo.' },
    ],
  },

  // ==================== ORGANIZE & MANAGE ====================
  'ocr-pdf': {
    title: 'PDF OCR',
    metaDescription: 'Rendi ricercabili i PDF scansionati con l\'OCR. Estrai testo da immagini e documenti scansionati.',
    keywords: ['ocr pdf', 'pdf ricercabile', 'riconoscimento del testo', 'scansionare in testo'],
    description: `<p>OCR PDF utilizza il riconoscimento ottico dei caratteri per estrarre testo da documenti e immagini scansionati all'interno dei PDF. Converti PDF basati su immagini in documenti di testo ricercabili e selezionabili.</p>
      <p>Il supporto per più lingue garantisce un riconoscimento accurato del testo indipendentemente dalla lingua del documento. Il layout originale viene preservato aggiungendo un livello di testo ricercabile.</p>
      <p>Tutta l'elaborazione OCR avviene nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica PDF scansionato', description: 'Trascina e rilascia il PDF scansionato o fai clic per selezionarlo.' },
      { step: 2, title: 'Seleziona lingua', description: 'Scegli la lingua del documento per un riconoscimento accurato.' },
      { step: 3, title: 'Elabora e scarica', description: 'Fare clic su Elabora per eseguire l\'OCR e scaricare il PDF ricercabile.' },
    ],
    useCases: [
      { title: 'Digitalizzare gli archivi', description: 'Rendi ricercabili gli archivi dei documenti scansionati.', icon: 'archive' },
      { title: 'Ricerca documenti', description: 'Abilita la ricerca di testo nei documenti scansionati.', icon: 'search' },
      { title: 'Estrazione del testo', description: 'Estrai testo da documenti scansionati per la modifica.', icon: 'type' },
    ],
    faq: [
      { question: 'Quali lingue sono supportate?', answer: 'Sono supportate oltre 100 lingue tra cui inglese, cinese, giapponese, coreano e altre.' },
      { question: 'Verrà preservato il layout originale?', answer: 'Sì, il layout visivo originale viene preservato con l\'aggiunta di un livello di testo ricercabile.' },
      { question: 'Quanto è accurato l\'OCR?', answer: 'La precisione dipende dalla qualità della scansione, ma in genere supera il 95% per i documenti chiari.' },
    ],
  },

  'alternate-merge': {
    title: 'Unione alternativa',
    metaDescription: 'Unisci PDF alternando le pagine. Combina le scansioni fronte e retro in un unico documento.',
    keywords: ['fusione alternativa', 'pdf intercalato', 'combinare le scansioni', 'fusione davanti dietro'],
    description: `<p>Alternate Merge combina due PDF interfogliando le rispettive pagine alternativamente. Questo è perfetto per combinare le pagine fronte e retro scansionate separatamente in un unico documento.</p>
      <p>Carica due PDF e lo strumento li unirà prendendo una pagina da ciascuno alternativamente. Puoi anche invertire l'ordine di un documento per la scansione fronte-retro.</p>
      <p>Tutta l'elaborazione avviene nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica due PDF', description: 'Carica il PDF delle prime pagine e il PDF delle ultime pagine.' },
      { step: 2, title: 'Configura ordine', description: 'Scegli se invertire il secondo documento per le scansioni fronte-retro.' },
      { step: 3, title: 'Unisci e scarica', description: 'Fare clic su Unisci per intercalare le pagine e scaricarle.' },
    ],
    useCases: [
      { title: 'Scansione fronte-retro', description: 'Combina le pagine anteriore e posteriore scansionate separatamente.', icon: 'copy' },
      { title: 'Assemblaggio di documenti', description: 'Interlaccia le pagine di due documenti correlati.', icon: 'layers' },
      { title: 'Scansione di libri', description: 'Combina le scansioni di pagine pari e dispari per creare libri completi.', icon: 'book' },
    ],
    faq: [
      { question: 'Cosa succede se i documenti hanno un numero di pagine diverso?', answer: 'Le pagine extra del documento più lungo vengono aggiunte alla fine.' },
      { question: 'Posso invertire l\'ordine delle pagine?', answer: 'Sì, puoi invertire entrambi i documenti prima di unirli.' },
      { question: 'È diverso dall\'unione normale?', answer: 'Sì, l\'unione regolare aggiunge i documenti; alternare le pagine degli interfogli di unione.' },
    ],
  },

  'add-attachments': {
    title: 'Aggiungi allegati',
    metaDescription: 'Incorpora file nei documenti PDF. Allega qualsiasi tipo di file ai tuoi PDF.',
    keywords: ['allegati pdf', 'incorporare file', 'allegare al pdf', 'portafoglio pdf'],
    description: `<p>Aggiungi allegati incorpora file di qualsiasi tipo nei tuoi documenti PDF. Allega fogli di calcolo, immagini, file sorgente o qualsiasi altro documento per creare pacchetti PDF completi.</p>
      <p>Gli allegati sono incorporati nel PDF e possono essere estratti dai destinatari utilizzando qualsiasi lettore PDF. Perfetto per distribuire insieme file correlati.</p>
      <p>Tutta l'elaborazione avviene nel tuo browser, garantendo che i tuoi file rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Aggiungi allegati', description: 'Seleziona i file da allegare al PDF.' },
      { step: 3, title: 'Salva e scarica', description: 'Fare clic su Salva per incorporare gli allegati e scaricarli.' },
    ],
    useCases: [
      { title: 'Pacchetti di progetti', description: 'Raggruppa i file di progetto con i PDF della documentazione.', icon: 'package' },
      { title: 'Distribuzione dei rapporti', description: 'Allega file di dati di origine ai PDF dei report.', icon: 'paperclip' },
      { title: 'Pacchetti contrattuali', description: 'Includere documenti giustificativi con i contratti.', icon: 'file-text' },
    ],
    faq: [
      { question: 'Quali tipi di file possono essere allegati?', answer: 'Qualsiasi tipo di file può essere allegato a un PDF.' },
      { question: 'C\'è un limite di dimensioni?', answer: 'La dimensione totale del PDF, compresi gli allegati, non deve superare i 500 MB.' },
      { question: 'I destinatari possono estrarre gli allegati?', answer: 'Sì, qualsiasi lettore PDF può estrarre gli allegati incorporati.' },
    ],
  },

  'extract-attachments': {
    title: 'Estrai allegati',
    metaDescription: 'Estrai file incorporati da PDF. Scarica tutti gli allegati dai documenti PDF.',
    keywords: ['estrarre gli allegati', 'allegati pdf', 'scaricare file incorporati', 'estrazione pdf'],
    description: `<p>Extract Allegati recupera tutti i file incorporati dai documenti PDF. Scarica gli allegati singolarmente o come archivio ZIP contenente tutti i file.</p>
      <p>Perfetto per accedere a file sorgente, dati o materiali supplementari incorporati nei pacchetti PDF.</p>
      <p>Tutta l'estrazione avviene nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Visualizza allegati', description: 'Visualizza un elenco di tutti i file incorporati nel PDF.' },
      { step: 3, title: 'Estrai e scarica', description: 'Scarica singoli file o tutti come ZIP.' },
    ],
    useCases: [
      { title: 'Accedi ai file di origine', description: 'Estrai file di dati originali da report PDF.', icon: 'download' },
      { title: 'Recupera allegati', description: 'Recupera file incorporati da pacchetti PDF.', icon: 'folder-open' },
      { title: 'Estrazione batch', description: 'Estrai allegati da più PDF contemporaneamente.', icon: 'layers' },
    ],
    faq: [
      { question: 'Cosa succede se non ci sono allegati?', answer: 'Lo strumento indicherà se non vengono trovati file incorporati.' },
      { question: 'Sono supportati tutti i tipi di allegati?', answer: 'Sì, è possibile estrarre tutti i tipi di file incorporati.' },
      { question: 'Posso estrarre da più PDF?', answer: 'Sì, puoi elaborare più PDF e scaricare tutti gli allegati.' },
    ],
  },

  'extract-images': {
    title: 'Estrai immagini da PDF',
    metaDescription: 'Estrai tutte le immagini incorporate dai file PDF. Scaricalo singolarmente o come archivio ZIP. Filtra automaticamente le piccole immagini.',
    keywords: ['estrarre immagini pdf', 'estrazione immagini pdf', 'ottenere immagini da pdf', 'scarica le immagini in formato pdf', 'pdf alle immagini'],
    description: `<p>Estrai immagini da PDF recupera tutte le immagini incorporate dai tuoi documenti PDF. Scarica immagini di alta qualità singolarmente o come comodo archivio ZIP.</p>
      <p>Lo strumento filtra automaticamente le piccole immagini come icone e decorazioni in base a soglie di dimensione personalizzabili. Elabora più PDF contemporaneamente per un'estrazione batch efficiente.</p>
      <p>Tutta l'estrazione avviene nel tuo browser, garantendo che i tuoi documenti rimangano privati e sicuri.</p>`,
    howToUse: [
      { step: 1, title: 'Carica i tuoi PDF', description: 'Trascina e rilascia uno o più file PDF o fai clic per selezionarli dal tuo dispositivo.' },
      { step: 2, title: 'Imposta le opzioni del filtro', description: 'Regola la larghezza, l\'altezza e la dimensione minima del file per filtrare le piccole immagini indesiderate.' },
      { step: 3, title: 'Estrai immagini', description: 'Fai clic su Estrai per trovare tutte le immagini incorporate nei tuoi PDF.' },
      { step: 4, title: 'Scaricamento', description: 'Scarica singole immagini o tutte le immagini come archivio ZIP.' },
    ],
    useCases: [
      { title: 'Recupero foto', description: 'Estrai foto e immagini incorporate nei documenti PDF per riutilizzarle o archiviarle.', icon: 'image' },
      { title: 'Raccolta di beni', description: 'Raccogli tutta la grafica e le immagini da report, presentazioni o brochure PDF.', icon: 'folder' },
      { title: 'Riproposizione dei contenuti', description: 'Estrai immagini dai PDF da utilizzare in altri documenti, siti Web o presentazioni.', icon: 'refresh-cw' },
    ],
    faq: [
      { question: 'Quali formati di immagine vengono estratti?', answer: 'Le immagini vengono estratte nel loro formato nativo (JPEG, PNG e così via) quando possibile o convertite in PNG per i dati immagine grezzi.' },
      { question: 'Perchè mancano alcune immagini?', answer: 'Le immagini piccole al di sotto della soglia delle dimensioni vengono filtrate. Regola le impostazioni del filtro per estrarre immagini più piccole.' },
      { question: 'Posso estrarre da PDF scansionati?', answer: 'I PDF scansionati in genere contengono la scansione come un\'immagine di grandi dimensioni per pagina. Utilizza invece lo strumento PDF in immagine per la conversione pagina per pagina.' },
    ],
  },

  'edit-attachments': {
    title: 'Modifica allegati',
    metaDescription: 'Gestisci gli allegati PDF. Visualizza, rinomina e rimuovi file incorporati.',
    keywords: ['modificare gli allegati', 'gestire file pdf', 'rimuovere gli allegati', 'rinominare gli allegati'],
    description: `<p>Modifica allegati ti consente di gestire i file incorporati nei documenti PDF. Visualizza tutti gli allegati, rinominali o rimuovi i file indesiderati dal PDF.</p>
      <p>Perfetto per ripulire i pacchetti PDF o aggiornare le informazioni sugli allegati prima della distribuzione.</p>
      <p>Tutte le modifiche avvengono nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Gestisci allegati', description: 'Visualizza, rinomina o elimina i file incorporati.' },
      { step: 3, title: 'Salva e scarica', description: 'Fare clic su Salva per applicare le modifiche e scaricare.' },
    ],
    useCases: [
      { title: 'Pulisci i PDF', description: 'Rimuovi gli allegati non necessari dai pacchetti PDF.', icon: 'trash-2' },
      { title: 'Rinominare i file', description: 'Aggiorna i nomi degli allegati per maggiore chiarezza.', icon: 'edit' },
      { title: 'Rivedi i contenuti', description: 'Controlla i file incorporati prima della distribuzione.', icon: 'eye' },
    ],
    faq: [
      { question: 'Posso aggiungere nuovi allegati qui?', answer: 'Utilizza lo strumento Aggiungi allegati per incorporare nuovi file.' },
      { question: 'La rimozione è definitiva?', answer: 'Sì, gli allegati rimossi non possono essere recuperati dal file di output.' },
      { question: 'Posso visualizzare l\'anteprima degli allegati?', answer: 'Puoi vedere i nomi e le dimensioni dei file; utilizzare Estrai allegati per visualizzare i contenuti.' },
    ],
  },

  'divide-pages': {
    title: 'Dividi le pagine',
    metaDescription: 'Dividi le pagine PDF in più sezioni. Dividere le pagine orizzontalmente o verticalmente.',
    keywords: ['dividere le pagine pdf', 'pagina divisa', 'tagliare la pagina pdf', 'sezioni di pagina'],
    description: `<p>Divide Pages divide le singole pagine PDF in più sezioni. Taglia le pagine orizzontalmente, verticalmente o in una griglia per creare più pagine da una.</p>
      <p>Perfetto per dividere i documenti scansionati con più elementi per pagina o per dividere pagine di grande formato in dimensioni standard.</p>
      <p>Tutta l'elaborazione avviene nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Imposta divisione', description: 'Scegli la divisione orizzontale, verticale o griglia e imposta il numero di sezioni.' },
      { step: 3, title: 'Dividi e scarica', description: 'Fare clic su Dividi per dividere le pagine e scaricarle.' },
    ],
    useCases: [
      { title: 'Scansioni divise', description: 'Dividere le pagine scansionate contenenti più documenti.', icon: 'scissors' },
      { title: 'Ridimensiona le pagine', description: 'Dividi pagine di grandi dimensioni in formati carta standard.', icon: 'maximize-2' },
      { title: 'Crea carte', description: 'Dividere le pagine in sezioni delle dimensioni di un biglietto da stampare.', icon: 'grid' },
    ],
    faq: [
      { question: 'Posso dividere in sezioni disuguali?', answer: 'Attualmente le divisioni sono uguali. Utilizza Ritaglia PDF per sezioni personalizzate.' },
      { question: 'Cosa succede al contenuto lungo le linee di divisione?', answer: 'Il contenuto è suddiviso lungo la linea di divisione; garantire che i contenuti importanti non siano limitati.' },
      { question: 'Posso dividere solo pagine specifiche?', answer: 'Sì, puoi selezionare quali pagine dividere.' },
    ],
  },

  'add-blank-page': {
    title: 'Aggiungi pagina vuota',
    metaDescription: 'Inserisci pagine vuote nei documenti PDF. Aggiungi pagine vuote in qualsiasi posizione.',
    keywords: ['aggiungi una pagina vuota', 'inserire pagina', 'pagina vuota', 'inserimento pagina pdf'],
    description: `<p>Aggiungi pagina vuota inserisce pagine vuote nei tuoi documenti PDF in qualsiasi posizione. Aggiungi pagine prima, dopo o tra pagine esistenti con dimensioni di pagina personalizzabili.</p>
      <p>Perfetto per aggiungere spazio per le note, creare divisori di sezioni o preparare documenti per la stampa.</p>
      <p>Tutta l'elaborazione avviene nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Scegli Posizione', description: 'Seleziona dove inserire le pagine vuote e quante.' },
      { step: 3, title: 'Aggiungi e scarica', description: 'Fare clic su Aggiungi per inserire pagine e scaricarle.' },
    ],
    useCases: [
      { title: 'Nota Spazio', description: 'Aggiungi pagine bianche per gli appunti scritti a mano.', icon: 'edit-3' },
      { title: 'Divisori di sezione', description: 'Inserisci pagine vuote tra le sezioni del documento.', icon: 'minus' },
      { title: 'Preparazione della stampa', description: 'Aggiungi pagine per l\'allineamento della stampa fronte-retro.', icon: 'printer' },
    ],
    faq: [
      { question: 'Posso scegliere la dimensione della pagina?', answer: 'Sì, le pagine vuote possono corrispondere alle pagine esistenti o utilizzare dimensioni personalizzate.' },
      { question: 'Posso aggiungere più pagine vuote?', answer: 'Sì, puoi aggiungere un numero qualsiasi di pagine vuote contemporaneamente.' },
      { question: 'Posso aggiungere pagine colorate?', answer: 'Utilizza lo strumento Colore di sfondo dopo aver aggiunto pagine vuote per aggiungere colore.' },
    ],
  },

  'reverse-pages': {
    title: 'Pagine inverse',
    metaDescription: 'Invertire l\'ordine delle pagine PDF. Capovolgi le pagine del documento dall\'ultima alla prima.',
    keywords: ['pdf inverso', 'capovolgere l\'ordine delle pagine', 'invertire le pagine', 'documento inverso'],
    description: `<p>Reverse Pages inverte l'ordine delle pagine nel documento PDF, mettendo l'ultima pagina per prima e la prima pagina per ultima. Utile per documenti scansionati in ordine inverso o per esigenze di stampa specifiche.</p>
      <p>Lo strumento elabora l'intero documento o gli intervalli di pagine selezionati, mantenendo tutto il contenuto e la formattazione.</p>
      <p>Tutta l'elaborazione avviene nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Seleziona Pagine', description: 'Scegli di invertire tutte le pagine o un intervallo specifico.' },
      { step: 3, title: 'Inverti e scarica', description: 'Fare clic su Inverti per invertire l\'ordine delle pagine e scaricarle.' },
    ],
    useCases: [
      { title: 'Correggi l\'ordine di scansione', description: 'Correggere i documenti scansionati in ordine inverso.', icon: 'refresh-cw' },
      { title: 'Preparazione della stampa', description: 'Pagine invertite per esigenze di stampa specifiche.', icon: 'printer' },
      { title: 'Riordino dei documenti', description: 'Capovolgi rapidamente l\'ordine dei documenti per la revisione.', icon: 'arrow-up-down' },
    ],
    faq: [
      { question: 'I segnalibri sono aggiornati?', answer: 'Sì, i segnalibri vengono aggiornati per puntare alle pagine invertite corrette.' },
      { question: 'Posso invertire solo alcune pagine?', answer: 'Sì, puoi selezionare un intervallo di pagine da invertire.' },
      { question: 'È la stessa cosa che ruotare?', answer: 'No, l\'inversione dell\'ordine delle pagine cambia; la rotazione modifica l\'orientamento della pagina.' },
    ],
  },

  'rotate-pdf': {
    title: 'Ruota PDF',
    metaDescription: 'Ruota le pagine del PDF. Gira le pagine di 90, 180 o 270 gradi.',
    keywords: ['ruotare il pdf', 'girare le pagine del pdf', 'rotazione del pdf', 'fissare l\'orientamento'],
    description: `<p>Ruota PDF gira le pagine del tuo documento di 90, 180 o 270 gradi. Correggi le scansioni orientate in modo errato, ruota le pagine orizzontali o regola l'orientamento della pagina per la visualizzazione.</p>
      <p>Ruota tutte le pagine in modo uniforme o seleziona pagine specifiche da ruotare individualmente. Lo strumento preserva tutti i contenuti e la formattazione.</p>
      <p>Tutta l'elaborazione avviene nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Seleziona Rotazione', description: 'Scegli l\'angolo di rotazione e quali pagine ruotare.' },
      { step: 3, title: 'Ruota e scarica', description: 'Fare clic su Ruota per applicare le modifiche e scaricare.' },
    ],
    useCases: [
      { title: 'Correggi le scansioni', description: 'Orientamento corretto dei documenti scansionati.', icon: 'rotate-cw' },
      { title: 'Pagine orizzontali', description: 'Ruota le pagine orizzontali per una corretta visualizzazione.', icon: 'monitor' },
      { title: 'Orientamento misto', description: 'Standardizza l\'orientamento della pagina nei documenti misti.', icon: 'layout' },
    ],
    faq: [
      { question: 'Posso ruotare pagine diverse in modo diverso?', answer: 'Sì, puoi applicare rotazioni diverse a pagine diverse.' },
      { question: 'La rotazione influisce sulla qualità di stampa?', answer: 'No, la rotazione preserva tutta la qualità dei contenuti.' },
      { question: 'Posso ruotare con angoli personalizzati?', answer: 'La rotazione è limitata a incrementi di 90 gradi (90, 180, 270).' },
    ],
  },

  'n-up-pdf': {
    title: 'PDF N su 1',
    metaDescription: 'Stampa più pagine PDF per foglio. Crea layout 2-up, 4-up o personalizzati.',
    keywords: ['n-up pdf', 'più pagine per foglio', 'Stampa 2 su 1', 'imposizione della pagina'],
    description: `<p>N-Up PDF dispone più pagine su singoli fogli, creando layout 2-up, 4-up, 6-up, 9-up o personalizzati. Perfetto per risparmiare carta durante la stampa o la creazione di dispense.</p>
      <p>Scegli tra layout preimpostati o crea disposizioni personalizzate. Lo strumento ridimensiona e posiziona automaticamente le pagine per risultati ottimali.</p>
      <p>Tutta l'elaborazione avviene nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Scegli Disposizione', description: 'Seleziona la griglia 2-up, 4-up, 6-up, 9-up o personalizzata.' },
      { step: 3, title: 'Crea e scarica', description: 'Fare clic su Crea per generare il PDF n-up e scaricarlo.' },
    ],
    useCases: [
      { title: 'Risparmia carta', description: 'Stampa più pagine per foglio per ridurre il consumo di carta.', icon: 'leaf' },
      { title: 'Crea dispense', description: 'Crea dispense compatte dalle diapositive della presentazione.', icon: 'file-text' },
      { title: 'Revisione dei documenti', description: 'Stampa documenti in dimensioni ridotte per la revisione.', icon: 'eye' },
    ],
    faq: [
      { question: 'Quali layout sono disponibili?', answer: 'Sono disponibili layout a griglia 2-up, 4-up, 6-up, 9-up e personalizzati.' },
      { question: 'Posso aggiungere bordi tra le pagine?', answer: 'Sì, puoi aggiungere bordi e rilegature tra le pagine.' },
      { question: 'L\'ordine delle pagine è preservato?', answer: 'Sì, le pagine sono disposte in ordine di lettura (da sinistra a destra, dall\'alto in basso).' },
    ],
  },

  'combine-single-page': {
    title: 'Combina in una pagina singola',
    metaDescription: 'Unisci le pagine PDF in una pagina continua. Crea documenti scorrevoli di una sola pagina.',
    keywords: ['combinare le pagine', 'pdf a pagina singola', 'pagine di cucitura', 'scorrimento continuo'],
    description: `<p>Combina a pagina singola unisce tutte le pagine PDF in una pagina continua. Crea documenti scorrevoli perfetti per la visualizzazione sul Web o la lettura continua.</p>
      <p>Le pagine sono unite verticalmente con spaziatura personalizzabile. Il risultato è un'unica pagina lunga contenente tutti i contenuti.</p>
      <p>Tutta l'elaborazione avviene nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Imposta la spaziatura', description: 'Scegli lo spazio tra le pagine cucite.' },
      { step: 3, title: 'Combina e scarica', description: 'Fare clic su Combina per creare il PDF a pagina singola.' },
    ],
    useCases: [
      { title: 'Documenti Web', description: 'Crea PDF scorrevoli per l\'incorporamento sul Web.', icon: 'globe' },
      { title: 'Lettura continua', description: 'Converti documenti impaginati in scorrimento continuo.', icon: 'scroll' },
      { title: 'Contenuti di lunga durata', description: 'Combina le pagine per una lettura continua senza interruzioni.', icon: 'file-text' },
    ],
    faq: [
      { question: 'C\'è un limite di pagine?', answer: 'I documenti molto lunghi potrebbero essere limitati dalla memoria del browser.' },
      { question: 'Posso aggiungere separatori tra le pagine?', answer: 'Sì, puoi aggiungere spazi o linee tra le pagine originali.' },
      { question: 'Funzionerà per la stampa?', answer: 'Il risultato è ottimale per la visualizzazione su schermo; utilizzare N su per i layout di stampa.' },
    ],
  },

  'view-metadata': {
    title: 'Visualizza metadati',
    metaDescription: 'Visualizza le proprietà del documento PDF. Visualizza autore, titolo, date e altri metadati.',
    keywords: ['metadati del pdf', 'proprietà del documento', 'informazioni in formato pdf', 'visualizza i dettagli in pdf'],
    description: `<p>View Metadata visualizza tutte le proprietà e i metadati del documento dai file PDF. Visualizza autore, titolo, oggetto, parole chiave, data di creazione, data di modifica e altro.</p>
      <p>Utile per controllare documenti, controllare le informazioni sui file o verificare l'autenticità del documento.</p>
      <p>Tutta la visualizzazione avviene nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Visualizza proprietà', description: 'Visualizza tutti i metadati visualizzati in un formato organizzato.' },
      { step: 3, title: 'Esporta se necessario', description: 'Facoltativamente esportare i metadati come JSON.' },
    ],
    useCases: [
      { title: 'Controllo dei documenti', description: 'Esaminare le proprietà del documento per verificarne la conformità.', icon: 'clipboard-check' },
      { title: 'Verifica l\'autenticità', description: 'Controlla le date di creazione e le informazioni sull\'autore.', icon: 'shield' },
      { title: 'Informazioni sul file', description: 'Ottieni informazioni dettagliate sui file PDF.', icon: 'info' },
    ],
    faq: [
      { question: 'Quali metadati vengono mostrati?', answer: 'Titolo, autore, oggetto, parole chiave, creatore, produttore, date e versione PDF.' },
      { question: 'Posso modificare i metadati qui?', answer: 'Utilizzare lo strumento Modifica metadati per modificare le proprietà del documento.' },
      { question: 'I metadati XMP sono inclusi?', answer: 'Sì, vengono visualizzati sia i metadati standard che quelli XMP.' },
    ],
  },

  'edit-metadata': {
    title: 'Modifica metadati',
    metaDescription: 'Modifica le proprietà del documento PDF. Modifica titolo, autore, oggetto e parole chiave.',
    keywords: ['modificare i metadati del pdf', 'modificare le proprietà del pdf', 'autore del pdf', 'informazioni sul documento'],
    description: `<p>Modifica metadati ti consente di modificare le proprietà del documento nei file PDF. Modifica il titolo, l'autore, l'oggetto, le parole chiave e altri campi di metadati.</p>
      <p>Perfetto per correggere le informazioni del documento, aggiungere la corretta attribuzione o preparare i file per la distribuzione.</p>
      <p>Tutte le modifiche avvengono nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Modifica proprietà', description: 'Modifica titolo, autore, oggetto, parole chiave e altri campi.' },
      { step: 3, title: 'Salva e scarica', description: 'Fare clic su Salva per applicare le modifiche e scaricare.' },
    ],
    useCases: [
      { title: 'Aggiungi attribuzione', description: 'Imposta le informazioni corrette sull\'autore e sul creatore.', icon: 'user' },
      { title: 'Ottimizzazione SEO', description: 'Aggiungi parole chiave e descrizioni per la ricercabilità.', icon: 'search' },
      { title: 'Preparazione del documento', description: 'Preparare i documenti con metadati adeguati prima della condivisione.', icon: 'file-check' },
    ],
    faq: [
      { question: 'Quali campi posso modificare?', answer: 'Campi titolo, autore, oggetto, parole chiave, creatore e produttore.' },
      { question: 'Posso cancellare tutti i metadati?', answer: 'Utilizza lo strumento Rimuovi metadati per rimuovere tutte le proprietà del documento.' },
      { question: 'Le date sono modificabili?', answer: 'Le date di creazione e modifica vengono aggiornate automaticamente.' },
    ],
  },

  'pdf-to-zip': {
    title: 'PDF in ZIP',
    metaDescription: 'Crea pacchetti di più PDF in un archivio ZIP. Comprimi e raggruppa file PDF.',
    keywords: ['pdf da zippare', 'comprimere pdf', 'raggruppare i pdf', 'archiviare i pdf'],
    description: `<p>PDF to ZIP racchiude più file PDF in un unico archivio ZIP. Comprimi e raggruppa i tuoi PDF per condividerli, archiviarli o eseguirne il backup in modo più semplice.</p>
      <p>Lo strumento crea un archivio compresso contenente tutti i tuoi file PDF, riducendo le dimensioni totali e semplificando la gestione dei file.</p>
      <p>Tutta l'elaborazione avviene nel tuo browser, garantendo che i tuoi file rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica PDF', description: 'Trascina e rilascia più file PDF o fai clic per selezionarli.' },
      { step: 2, title: 'Configura archivio', description: 'Facoltativamente, imposta il nome dell\'archivio e il livello di compressione.' },
      { step: 3, title: 'Crea e scarica', description: 'Fare clic su Crea per generare l\'archivio ZIP.' },
    ],
    useCases: [
      { title: 'Condivisione file', description: 'Raggruppa più PDF per una condivisione più semplice.', icon: 'share-2' },
      { title: 'Creazione di backup', description: 'Crea backup compressi di raccolte PDF.', icon: 'archive' },
      { title: 'Allegati e-mail', description: 'Combina i PDF in un unico allegato per e-mail.', icon: 'mail' },
    ],
    faq: [
      { question: 'Quanta compressione viene applicata?', answer: 'La compressione ZIP riduce in genere la dimensione totale del 10-30%.' },
      { question: 'C\'è un limite ai file?', answer: 'Puoi includere fino a 100 PDF in un singolo archivio.' },
      { question: 'Posso impostare una password?', answer: 'La creazione di ZIP protetti da password non è attualmente supportata.' },
    ],
  },

  'compare-pdfs': {
    title: 'Confronta PDF',
    metaDescription: 'Confronta due documenti PDF. Evidenziare le differenze tra le versioni.',
    keywords: ['confrontare i pdf', 'pdf differenziale', 'confronto dei documenti', 'confronto delle versioni'],
    description: `<p>Confronta PDF analizza due documenti PDF ed evidenzia le differenze tra loro. Perfetto per rivedere le revisioni dei documenti, controllare le modifiche del contratto o verificare le modifiche.</p>
      <p>Visualizza i documenti affiancati o in modalità sovrapposizione con le differenze evidenziate. Lo strumento identifica modifiche, aggiunte ed eliminazioni del testo.</p>
      <p>Tutti i confronti avvengono nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica due PDF', description: 'Carica i documenti PDF originali e modificati.' },
      { step: 2, title: 'Confronta documenti', description: 'Visualizza le differenze evidenziate in modalità affiancata o sovrapposta.' },
      { step: 3, title: 'Esporta risultati', description: 'Scarica un rapporto comparativo o un PDF con annotazioni.' },
    ],
    useCases: [
      { title: 'Revisione del contratto', description: 'Confronta le versioni del contratto per identificare le modifiche.', icon: 'file-text' },
      { title: 'Revisione del documento', description: 'Esaminare le modifiche tra le versioni del documento.', icon: 'git-compare' },
      { title: 'Garanzia di qualità', description: 'Verificare che siano state apportate solo le modifiche previste.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'Che tipi di differenze vengono rilevate?', answer: 'Aggiunte di testo, eliminazioni, modifiche e cambiamenti di formattazione.' },
      { question: 'Posso confrontare i documenti scansionati?', answer: 'I documenti scansionati devono essere prima elaborati tramite OCR per il confronto del testo.' },
      { question: 'È disponibile il confronto visivo?', answer: 'Sì, la modalità sovrapposizione mostra le differenze visive tra le pagine.' },
    ],
  },

  'posterize-pdf': {
    title: 'Posterizza PDF',
    metaDescription: 'Dividi pagine PDF di grandi dimensioni in riquadri stampabili. Crea poster da pagine PDF.',
    keywords: ['posterizzare pdf', 'piastrella pdf', 'stampa di grande formato', 'locandina in formato pdf'],
    description: `<p>Posterize PDF divide le pagine PDF di grandi dimensioni in riquadri più piccoli che possono essere stampati su carta standard e assemblati in poster. Perfetto per stampare diagrammi, mappe o opere d'arte di grandi dimensioni.</p>
      <p>Configura la dimensione della griglia e la sovrapposizione per un facile assemblaggio. Lo strumento calcola automaticamente le dimensioni delle tessere per la dimensione di output target.</p>
      <p>Tutta l'elaborazione avviene nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo PDF di grande formato o fai clic per selezionarlo.' },
      { step: 2, title: 'Configura i riquadri', description: 'Imposta la dimensione della griglia, la sovrapposizione e il formato della carta in uscita.' },
      { step: 3, title: 'Crea e scarica', description: 'Fare clic su Crea per generare tessere stampabili.' },
    ],
    useCases: [
      { title: 'Stampa di manifesti', description: 'Stampa poster di grandi dimensioni su carta standard.', icon: 'maximize-2' },
      { title: 'Stampa di mappe', description: 'Stampa mappe di grandi dimensioni in sezioni per l\'assemblaggio.', icon: 'map' },
      { title: 'Riproduzione dell\'opera d\'arte', description: 'Crea stampe di grandi dimensioni da grafica PDF.', icon: 'image' },
    ],
    faq: [
      { question: 'Quale sovrapposizione dovrei usare?', answer: 'Si consiglia una sovrapposizione di 10-20 mm per un facile allineamento durante il montaggio.' },
      { question: 'Posso aggiungere indicatori di ritaglio?', answer: 'Sì, è possibile aggiungere segni di ritaglio per facilitare il taglio e l\'allineamento.' },
      { question: 'Quali formati carta sono supportati?', answer: 'Sono supportati i formati A4, Lettera, A3 e personalizzati.' },
    ],
  },

  // ==================== OPTIMIZE & REPAIR ====================
  'fix-page-size': {
    title: 'Correggi la dimensione della pagina',
    metaDescription: 'Standardizza le dimensioni della pagina PDF. Converti tutte le pagine in dimensioni uniformi.',
    keywords: ['correggere le dimensioni della pagina', 'standardizzare il pdf', 'pagine uniformi', 'ridimensionare le pagine pdf'],
    description: `<p>Fix Page Size standardizza tutte le pagine del tuo PDF in dimensioni uniformi. Converti documenti di dimensioni miste in dimensioni di pagina coerenti per presentazioni o stampe professionali.</p>
      <p>Scegli tra le dimensioni standard (A4, Lettera, ecc.) o imposta dimensioni personalizzate. Il contenuto viene ridimensionato o posizionato per adattarsi alle nuove dimensioni della pagina.</p>
      <p>Tutta l'elaborazione avviene nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Seleziona la dimensione target', description: 'Scegli una dimensione standard o inserisci dimensioni personalizzate.' },
      { step: 3, title: 'Applica e scarica', description: 'Fare clic su Applica per standardizzare le pagine e scaricarle.' },
    ],
    useCases: [
      { title: 'Preparazione della stampa', description: 'Standardizza le pagine per una stampa uniforme.', icon: 'printer' },
      { title: 'Pulizia dei documenti', description: 'Correggi i documenti con dimensioni di pagina incoerenti.', icon: 'file-check' },
      { title: 'Documenti professionali', description: 'Creare documenti uniformi per la distribuzione.', icon: 'briefcase' },
    ],
    faq: [
      { question: 'Come vengono gestiti i contenuti?', answer: 'Il contenuto viene ridimensionato per adattarsi o centrato sulla nuova dimensione della pagina.' },
      { question: 'Posso preservare le proporzioni?', answer: 'Sì, il contenuto può essere ridimensionato proporzionalmente per adattarsi.' },
      { question: 'Quali dimensioni standard sono disponibili?', answer: 'A4, A3, Letter, Legal e altri formati comuni.' },
    ],
  },

  'linearize-pdf': {
    title: 'Linearizza PDF',
    metaDescription: 'Ottimizza PDF per una visualizzazione web veloce. Abilita il caricamento progressivo.',
    keywords: ['linearizzare pdf', 'visualizzazione web veloce', 'ottimizzare il pdf', 'PDF progressivo'],
    description: `<p>Linearize PDF ottimizza i tuoi documenti per una rapida visualizzazione sul Web. I PDF linearizzati possono iniziare a essere visualizzati prima che l'intero file venga scaricato, migliorando l'esperienza dell'utente.</p>
      <p>Conosciuta anche come "Fast Web View", questa ottimizzazione riorganizza la struttura del PDF per il caricamento progressivo nei browser web.</p>
      <p>Tutta l'elaborazione avviene nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Linearizzare', description: 'Fare clic su Linearizza per ottimizzare la visualizzazione Web.' },
      { step: 3, title: 'Scaricamento', description: 'Scarica il tuo PDF ottimizzato.' },
    ],
    useCases: [
      { title: 'Pubblicazione sul Web', description: 'Ottimizza i PDF per i download di siti Web.', icon: 'globe' },
      { title: 'Allegati e-mail', description: 'Crea PDF che si aprono più velocemente per i destinatari.', icon: 'mail' },
      { title: 'Documenti in linea', description: 'Migliora l\'esperienza di visualizzazione dei documenti online.', icon: 'cloud' },
    ],
    faq: [
      { question: 'Cos\'è la linearizzazione?', answer: 'La linearizzazione riorganizza i dati PDF per il caricamento progressivo.' },
      { question: 'Riduce la dimensione del file?', answer: 'La linearizzazione potrebbe aumentare leggermente le dimensioni del file a causa della struttura aggiunta.' },
      { question: 'È compatibile con tutti i visori?', answer: 'Sì, i PDF linearizzati funzionano con tutti i lettori PDF.' },
    ],
  },

  'page-dimensions': {
    title: 'Dimensioni della pagina',
    metaDescription: 'Analizza le dimensioni delle pagine PDF. Visualizza le dimensioni di tutte le pagine del tuo documento.',
    keywords: ['dimensione della pagina pdf', 'dimensioni della pagina', 'misure in pdf', 'dimensione del documento'],
    description: `<p>Page Dimensions analizza e visualizza le dimensioni di ogni pagina nel documento PDF. Visualizza le dimensioni in varie unità (pollici, mm, punti) e identifica le pagine con dimensioni non standard.</p>
      <p>Utile per la preparazione della stampa, l'analisi dei documenti o l'identificazione di dimensioni di pagina incoerenti.</p>
      <p>Tutte le analisi avvengono nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Visualizza dimensioni', description: 'Visualizza le dimensioni della pagina visualizzate per tutte le pagine.' },
      { step: 3, title: 'Rapporto sull\'esportazione', description: 'Facoltativamente, esporta le dimensioni come JSON.' },
    ],
    useCases: [
      { title: 'Pianificazione della stampa', description: 'Controllare le dimensioni della pagina prima della stampa.', icon: 'printer' },
      { title: 'Analisi dei documenti', description: 'Identificare le pagine con dimensioni insolite.', icon: 'search' },
      { title: 'Controllo di qualità', description: 'Verificare che le dimensioni della pagina soddisfino le specifiche.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'Quali unità sono disponibili?', answer: 'Pollici, millimetri, centimetri e punti.' },
      { question: 'Mostra l\'orientamento?', answer: 'Sì, è indicato l\'orientamento verticale o orizzontale.' },
      { question: 'Posso correggere dimensioni incoerenti?', answer: 'Utilizza lo strumento Correggi dimensioni pagina per standardizzare le dimensioni.' },
    ],
  },

  'remove-restrictions': {
    title: 'Rimuovi restrizioni',
    metaDescription: 'Rimuovi le restrizioni sui PDF. Sblocca le autorizzazioni di stampa, copia e modifica.',
    keywords: ['rimuovere le restrizioni sui pdf', 'sbloccare il pdf', 'permessi pdf', 'PDF senza restrizioni'],
    description: `<p>Rimuovi restrizioni sblocca i PDF con limitazioni di autorizzazione che impediscono la stampa, la copia o la modifica. Questo strumento rimuove le restrizioni relative alla password del proprietario preservando il contenuto del documento.</p>
      <p>Nota: questo strumento non può rimuovere le password degli utenti che impediscono l'apertura del documento. Utilizza Decrittografa PDF per i file protetti da password.</p>
      <p>Tutta l'elaborazione avviene nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica PDF limitato', description: 'Trascina e rilascia il tuo PDF limitato o fai clic per selezionarlo.' },
      { step: 2, title: 'Rimuovi restrizioni', description: 'Fare clic su Rimuovi per sbloccare il documento.' },
      { step: 3, title: 'Scaricamento', description: 'Scarica il PDF senza restrizioni.' },
    ],
    useCases: [
      { title: 'Abilita stampa', description: 'Sblocca i PDF che impediscono la stampa.', icon: 'printer' },
      { title: 'Abilita copia', description: 'Consenti la selezione e la copia del testo.', icon: 'copy' },
      { title: 'Abilita modifica', description: 'Rimuovere le restrizioni sulla modifica dei documenti.', icon: 'edit' },
    ],
    faq: [
      { question: 'È legale?', answer: 'La rimozione delle restrizioni dai documenti di cui sei proprietario o su cui hai diritti è generalmente legale.' },
      { question: 'Può rimuovere le password aperte?', answer: 'No, utilizza Decrypt PDF per i documenti protetti da password.' },
      { question: 'I contenuti saranno interessati?', answer: 'No, vengono rimosse solo le restrizioni; il contenuto rimane invariato.' },
    ],
  },

  'repair-pdf': {
    title: 'Ripara PDF',
    metaDescription: 'Correggi i file PDF danneggiati. Recupera e ripara documenti danneggiati.',
    keywords: ['riparare il pdf', 'correggere il pdf', 'recuperare pdf', 'pdf corrotto'],
    description: `<p>Ripara PDF tenta di riparare file PDF corrotti o danneggiati. Lo strumento analizza la struttura del documento e lo ricostruisce per recuperare quanto più contenuto possibile.</p>
      <p>Utile per recuperare file che non si aprono, che mostrano errori o che presentano contenuti mancanti a causa di corruzione.</p>
      <p>Tutte le riparazioni avvengono nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica PDF danneggiato', description: 'Trascina e rilascia il PDF danneggiato o fai clic per selezionarlo.' },
      { step: 2, title: 'Documento di riparazione', description: 'Fare clic su Ripara per tentare il ripristino.' },
      { step: 3, title: 'Scaricamento', description: 'Scarica il PDF riparato in caso di successo.' },
    ],
    useCases: [
      { title: 'Recupera file', description: 'Recupera i PDF che non si aprono correttamente.', icon: 'refresh-cw' },
      { title: 'Correggi errori', description: 'Ripara i file che mostrano messaggi di errore.', icon: 'wrench' },
      { title: 'Ripristina contenuto', description: 'Recupera il contenuto da file parzialmente danneggiati.', icon: 'file-check' },
    ],
    faq: [
      { question: 'Tutti i PDF possono essere riparati?', answer: 'Il successo dipende dal tipo e dall’entità della corruzione.' },
      { question: 'Tutti i contenuti verranno recuperati?', answer: 'Lo strumento recupera il più possibile; i file gravemente danneggiati potrebbero subire perdite.' },
      { question: 'Devo mantenere l\'originale?', answer: 'Sì, conserva sempre il file originale come backup.' },
    ],
  },

  // ==================== SECURE PDF ====================
  'encrypt-pdf': {
    title: 'Crittografa PDF',
    metaDescription: 'Proteggi i file PDF con password. Aggiungi la crittografia e imposta le autorizzazioni.',
    keywords: ['crittografare pdf', 'proteggere con password pdf', 'PDF protetto', 'crittografia pdf'],
    description: `<p>Encrypt PDF aggiunge protezione tramite password e crittografia ai tuoi documenti PDF. Imposta le password utente per impedire l'apertura e le password proprietario per controllare autorizzazioni come stampa e copia.</p>
      <p>Scegli tra diversi livelli di crittografia (AES a 128 bit o 256 bit) per diverse esigenze di sicurezza.</p>
      <p>Tutta la crittografia avviene nel tuo browser, garantendo che le tue password e i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Imposta password', description: 'Immettere la password utente e/o la password proprietario. Configura le autorizzazioni.' },
      { step: 3, title: 'Crittografa e scarica', description: 'Fai clic su Crittografa per proteggere il PDF e scaricarlo.' },
    ],
    useCases: [
      { title: 'Documenti riservati', description: 'Proteggi i documenti aziendali sensibili.', icon: 'lock' },
      { title: 'File personali', description: 'Proteggi i documenti personali come le dichiarazioni dei redditi.', icon: 'shield' },
      { title: 'Distribuzione controllata', description: 'Limita ciò che i destinatari possono fare con i documenti.', icon: 'key' },
    ],
    faq: [
      { question: 'Qual è la differenza tra password utente e password proprietario?', answer: 'La password utente impedisce l\'apertura; la password del proprietario controlla le autorizzazioni.' },
      { question: 'Quale crittografia viene utilizzata?', answer: 'Sono disponibili opzioni di crittografia AES a 128 o 256 bit.' },
      { question: 'Posso impostare le autorizzazioni senza una password utente?', answer: 'Sì, puoi impostare una password proprietario solo per controllare le autorizzazioni.' },
    ],
  },

  'sanitize-pdf': {
    title: 'Disinfetta PDF',
    metaDescription: 'Rimuovi i dati nascosti dai PDF. Pulisci metadati, script e informazioni sensibili.',
    keywords: ['disinfettare pdf', 'pdf pulito', 'rimuovere i dati nascosti', 'pdf privacy'],
    description: `<p>Sanitize PDF rimuove i dati nascosti e le informazioni potenzialmente sensibili dai tuoi documenti. Elimina metadati, script incorporati, allegati, commenti e altri contenuti nascosti.</p>
      <p>Essenziale per preparare documenti da distribuire al pubblico o quando la privacy è un problema.</p>
      <p>Tutta la sanificazione avviene nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Seleziona Cosa rimuovere', description: 'Scegli quali tipi di dati nascosti eliminare.' },
      { step: 3, title: 'Disinfetta e scarica', description: 'Fare clic su Sanifica per pulire il PDF e scaricarlo.' },
    ],
    useCases: [
      { title: 'Rilascio pubblico', description: 'Preparare i documenti per la distribuzione pubblica.', icon: 'globe' },
      { title: 'Tutela della privacy', description: 'Rimuovere le informazioni personali prima di condividerle.', icon: 'shield' },
      { title: 'Conformità alla sicurezza', description: 'Soddisfare i requisiti di sicurezza per la gestione dei documenti.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'Quali dati nascosti vengono rimossi?', answer: 'Metadati, script, allegati, commenti, dati di moduli e livelli nascosti.' },
      { question: 'I contenuti visibili saranno interessati?', answer: 'No, vengono rimossi solo i dati nascosti; rimane il contenuto visibile.' },
      { question: 'È reversibile?', answer: 'No, i dati rimossi non possono essere recuperati. Conserva una copia di backup dell\'originale.' },
    ],
  },

  'find-and-redact': {
    title: 'Trova e redige',
    metaDescription: 'Cerca e oscura il testo in tutte le pagine di un PDF. Oscura in batch informazioni sensibili come numeri di conto, nomi e altro ancora.',
    keywords: ['redigere pdf', 'trovare e redigere', 'redazione batch', 'rimuovere il testo', 'censura pdf', 'nascondere i dati sensibili'],
    description: `<p>Trova e oscura ti consente di cercare testo, numeri o modelli specifici in tutte le pagine del tuo PDF e oscurare tutte le occorrenze corrispondenti contemporaneamente. Perfetto per rimuovere informazioni sensibili come numeri di conto, nomi, indirizzi o qualsiasi dato riservato.</p>
      <p>Visualizza in anteprima tutte le corrispondenze prima di applicare le oscurazioni e scegli selettivamente quali occorrenze oscurare. Supporta la ricerca con distinzione tra maiuscole e minuscole, corrispondenza di parole intere ed espressioni regolari per la corrispondenza di modelli avanzata.</p>
      <p>Tutta l'elaborazione avviene nel tuo browser, garantendo che i tuoi documenti rimangano privati e sicuri.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Cerca testo', description: 'Inserisci il testo, il numero o il modello regex che desideri trovare e oscurare.' },
      { step: 3, title: 'Rivedi e seleziona', description: 'Visualizza l\'anteprima di tutte le corrispondenze e seleziona quali oscurare.' },
      { step: 4, title: 'Applicare la redazione', description: 'Personalizza l\'aspetto della redazione e applicala alle corrispondenze selezionate.' },
    ],
    useCases: [
      { title: 'Conformità alla privacy', description: 'Redigere le informazioni personali per conformarsi al GDPR, all\'HIPAA o ad altre normative.', icon: 'shield' },
      { title: 'Documenti legali', description: 'Rimuovi i dati riservati dai documenti legali prima di condividerli.', icon: 'scale' },
      { title: 'Documenti finanziari', description: 'Oscura numeri di conto, SSN o dati finanziari dagli estratti conto.', icon: 'credit-card' },
    ],
    faq: [
      { question: 'La redazione è permanente?', answer: 'Sì, la redazione rimuove permanentemente il testo sottostante. Il contenuto originale non può essere recuperato. Conserva sempre una copia di backup del file originale.' },
      { question: 'Posso oscurare immagini o testo scansionato?', answer: 'Questo strumento funziona con PDF basati su testo. Per i documenti scansionati, è necessario utilizzare l\'oscuramento manuale basato sull\'area.' },
      { question: 'Posso personalizzare l\'aspetto della redazione?', answer: 'Sì, puoi impostare il colore di oscuramento, aggiungere bordi e, facoltativamente, includere testo sostitutivo come "[REDATTO]".' },
      { question: 'Come funziona la ricerca regex?', answer: 'Abilita "Utilizza espressione regolare" per effettuare ricerche utilizzando modelli regex. Ad esempio, \\d{4}-\\d{4}-\\d{4}-\\d{4} per trovare i numeri di carta di credito.' },
    ],
  },


  'decrypt-pdf': {
    title: 'Decifrare PDF',
    metaDescription: 'Rimuovi la password dai file PDF. Sblocca documenti protetti da password.',
    keywords: ['decifrare pdf', 'rimuovere la password pdf', 'sbloccare il pdf', 'rimozione password pdf'],
    description: `<p>Decrypt PDF rimuove la protezione tramite password dai documenti PDF. Inserisci la password corrente per sbloccare il file e creare una copia non protetta.</p>
      <p>Questo strumento richiede che tu conosca la password corrente. Non può crackare o bypassare password sconosciute.</p>
      <p>Tutta la decrittazione avviene nel tuo browser, garantendo che le tue password e i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica PDF protetto', description: 'Trascina e rilascia il tuo PDF protetto da password.' },
      { step: 2, title: 'Inserisci la password', description: 'Immettere la password del documento corrente.' },
      { step: 3, title: 'Decifra e scarica', description: 'Fare clic su Decrittografa per rimuovere la protezione e scaricare.' },
    ],
    useCases: [
      { title: 'Rimuovi le vecchie password', description: 'Sblocca i documenti quando la password non è più necessaria.', icon: 'unlock' },
      { title: 'Semplifica l\'accesso', description: 'Crea copie non protette per una condivisione più semplice.', icon: 'share-2' },
      { title: 'Archiviare documenti', description: 'Rimuovere le password prima dell\'archiviazione a lungo termine.', icon: 'archive' },
    ],
    faq: [
      { question: 'Può crackare password sconosciute?', answer: 'No, devi conoscere la password attuale per decrittografarla.' },
      { question: 'Il file originale è stato modificato?', answer: 'No, viene creata una nuova copia non protetta.' },
      { question: 'Cosa succede se ho dimenticato la password?', answer: 'Purtroppo non possiamo recuperare le password dimenticate.' },
    ],
  },

  'flatten-pdf': {
    title: 'Appiattisci PDF',
    metaDescription: 'Appiattisci moduli e annotazioni PDF. Rendi i contenuti non modificabili.',
    keywords: ['appiattire pdf', 'appiattire le forme', 'appiattire le annotazioni', 'pdf non modificabile'],
    description: `<p>Flatten PDF converte elementi interattivi come campi modulo e annotazioni in contenuto statico. Il PDF appiattito ha lo stesso aspetto ma non può più essere modificato.</p>
      <p>Perfetto per finalizzare moduli compilati, preservare annotazioni o creare versioni di documenti non modificabili.</p>
      <p>Tutta l'elaborazione avviene nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo PDF con moduli o annotazioni.' },
      { step: 2, title: 'Seleziona cosa appiattire', description: 'Scegli di appiattire moduli, annotazioni o entrambi.' },
      { step: 3, title: 'Appiattisci e scarica', description: 'Fare clic su Appiattisci per creare il PDF statico.' },
    ],
    useCases: [
      { title: 'Finalizzare i moduli', description: 'Blocca i dati del modulo compilato per impedire modifiche.', icon: 'lock' },
      { title: 'Conserva le annotazioni', description: 'Rendi permanenti le annotazioni nel documento.', icon: 'check-circle' },
      { title: 'Archiviare documenti', description: 'Crea versioni non modificabili per l\'archiviazione.', icon: 'archive' },
    ],
    faq: [
      { question: 'L\'appiattimento è reversibile?', answer: 'No, l\'appiattimento è permanente. Conserva una copia di backup dell\'originale.' },
      { question: 'L\'aspetto cambierà?', answer: 'No, il documento ha lo stesso aspetto ma non è più interattivo.' },
      { question: 'Riduce la dimensione del file?', answer: 'A volte, poiché gli elementi interattivi vengono convertiti in contenuti più semplici.' },
    ],
  },

  'remove-metadata': {
    title: 'Rimuovi metadati',
    metaDescription: 'Elimina i metadati dai file PDF. Rimuovi autore, date e proprietà del documento.',
    keywords: ['rimuovere i metadati del pdf', 'eliminare i metadati', 'pdf privacy', 'pdf anonimo'],
    description: `<p>Remove Metadata rimuove tutte le proprietà e i metadati del documento dai file PDF. Rimuovi nomi degli autori, date di creazione, informazioni sul software e altri dati identificativi.</p>
      <p>Essenziale per la privacy durante la condivisione di documenti o quando i metadati potrebbero rivelare informazioni sensibili.</p>
      <p>Tutta l'elaborazione avviene nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Rimuovi metadati', description: 'Fare clic su Rimuovi per rimuovere tutti i metadati.' },
      { step: 3, title: 'Scaricamento', description: 'Scarica il PDF senza metadati.' },
    ],
    useCases: [
      { title: 'Tutela della privacy', description: 'Rimuovere le informazioni personali prima di condividerle.', icon: 'shield' },
      { title: 'Documenti anonimi', description: 'Crea documenti senza attribuzione dell\'autore.', icon: 'user-x' },
      { title: 'Distribuzione pulita', description: 'Distribuisci documenti senza metadati interni.', icon: 'send' },
    ],
    faq: [
      { question: 'Quali metadati vengono rimossi?', answer: 'Informazioni su autore, titolo, oggetto, parole chiave, date, creatore e produttore.' },
      { question: 'I metadati XMP vengono rimossi?', answer: 'Sì, sia i metadati standard che quelli XMP vengono rimossi.' },
      { question: 'I contenuti saranno interessati?', answer: 'No, vengono rimossi solo i metadati; il contenuto del documento rimane invariato.' },
    ],
  },

  'change-permissions': {
    title: 'Modifica autorizzazioni',
    metaDescription: 'Modifica le autorizzazioni PDF. Controlla l\'accesso a stampa, copia e modifica.',
    keywords: ['permessi pdf', 'modificare l\'accesso al pdf', 'limitare il pdf', 'sicurezza pdf'],
    description: `<p>Change Permissions modifica i controlli di accesso sui tuoi documenti PDF. Abilita o disabilita le autorizzazioni di stampa, copia, modifica e annotazione.</p>
      <p>Imposta una password proprietario per applicare queste restrizioni. I destinatari possono visualizzare il documento ma le azioni che possono eseguire sono limitate.</p>
      <p>Tutta l'elaborazione avviene nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Imposta autorizzazioni', description: 'Abilita o disabilita la stampa, la copia, la modifica e le annotazioni.' },
      { step: 3, title: 'Applica e scarica', description: 'Imposta la password del proprietario e scarica il PDF limitato.' },
    ],
    useCases: [
      { title: 'Impedisci la copia', description: 'Disabilita la copia del testo per proteggere il contenuto.', icon: 'copy' },
      { title: 'Controllare la stampa', description: 'Limitare o consentire la stampa dei documenti.', icon: 'printer' },
      { title: 'Limita la modifica', description: 'Impedire modifiche al documento.', icon: 'edit-3' },
    ],
    faq: [
      { question: 'Ho bisogno di una password?', answer: 'Per applicare le autorizzazioni è necessaria una password del proprietario.' },
      { question: 'È possibile rimuovere i permessi?', answer: 'Sì, con la password del proprietario o utilizzando lo strumento Rimuovi restrizioni.' },
      { question: 'Tutti i lettori PDF sono compatibili?', answer: 'La maggior parte dei lettori PDF rispetta le autorizzazioni, ma alcuni potrebbero non applicarle.' },
    ],
  },

  'pdf-to-docx': {
    title: 'Da PDF a Word',
    metaDescription: 'Converti PDF in documenti Word modificabili (DOCX). Conserva la formattazione e il layout.',
    keywords: ['pdf in parola', 'convertire pdf in docx', 'da pdf a doc', 'pdf modificabile'],
    description: `<p>PDF to Word converte i tuoi documenti PDF in file Microsoft Word (DOCX) modificabili. Lo strumento conserva il layout, la formattazione, le immagini e il flusso del testo originali.</p>
      <p>Modifica facilmente il contenuto del tuo PDF in Word senza ridigitare. Perfetto per contratti, report e curriculum.</p>
      <p>Tutte le conversioni avvengono localmente nel tuo browser utilizzando la tecnologia WebAssembly, garantendo che i tuoi documenti non lascino mai il tuo dispositivo.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Convertire', description: 'Attendi il completamento del processo di conversione.' },
      { step: 3, title: 'Scarica Word Doc', description: 'Scarica il tuo file DOCX completamente modificabile.' },
    ],
    useCases: [
      { title: 'Modifica contratti', description: 'Converti contratti PDF in Word per la modifica e la revisione.', icon: 'file-text' },
      { title: 'Riprendi gli aggiornamenti', description: 'Aggiorna i vecchi curriculum PDF convertendoli in Word.', icon: 'user' },
      { title: 'Riproposizione dei contenuti', description: 'Estrai contenuto dai report PDF per altri documenti.', icon: 'copy' },
    ],
    faq: [
      { question: 'La formattazione viene mantenuta?', answer: 'Sì, lo strumento mira a preservare il più fedelmente possibile layout, caratteri e immagini.' },
      { question: 'Posso convertire i PDF scansionati?', answer: 'I PDF scansionati verranno convertiti come immagini in Word a meno che non si utilizzi prima l\'OCR.' },
      { question: 'È compatibile con Word?', answer: 'Sì, l\'output è un file .docx standard compatibile con Microsoft Word e Google Docs.' },
    ],
  },

  'pdf-to-markdown': {
    title: 'PDF su Markdown',
    metaDescription: 'Converti PDF in formato Markdown. Estrai il testo e preserva la formattazione come intestazioni ed elenchi.',
    keywords: ['pdf da ridurre', 'convertire pdf in md', 'estrazione testo pdf', 'convertitore di ribasso', 'pdf in testo'],
    description: `<p>PDF to Markdown converte i tuoi documenti PDF in file Markdown puliti e ben strutturati. Lo strumento estrae in modo intelligente il contenuto del testo e tenta di preservare la formattazione come intestazioni, elenchi e paragrafi.</p>
      <p>Perfetto per convertire documenti PDF in formati modificabili per la documentazione, prendere appunti o sistemi di gestione dei contenuti che supportano Markdown.</p>
      <p>Tutte le conversioni avvengono localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati e sicuri.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Configura opzioni', description: 'Imposta l\'intervallo di pagine, scegli di includere i numeri di pagina e regola le impostazioni di interruzione di riga.' },
      { step: 3, title: 'Converti e scarica', description: 'Fai clic su Converti per generare il file Markdown e scaricarlo.' },
    ],
    useCases: [
      { title: 'Documentazione', description: 'Converti manuali e guide PDF in Markdown per documentazione con controllo della versione.', icon: 'file-text' },
      { title: 'Prendere appunti', description: 'Estrai contenuti da articoli e libri PDF per il tuo sistema di prendere appunti.', icon: 'edit-3' },
      { title: 'Migrazione dei contenuti', description: 'Migrazione dei contenuti PDF su piattaforme CMS che supportano Markdown.', icon: 'copy' },
    ],
    faq: [
      { question: 'La formattazione viene mantenuta?', answer: 'Lo strumento tenta di rilevare le intestazioni in base alla dimensione del carattere e ai punti elenco/elenchi numerati. I layout complessi potrebbero richiedere una regolazione manuale.' },
      { question: 'Posso convertire pagine specifiche?', answer: 'Sì, puoi specificare un intervallo di pagine come "1-3, 5, 7" per convertire solo quelle pagine.' },
      { question: 'Funziona con i PDF scansionati?', answer: 'I PDF scansionati contengono immagini, non testo. Utilizza prima il nostro strumento OCR per estrarre il testo prima di convertirlo in Markdown.' },
    ],
  },

  // ==================== NEW TOOLS ====================
  'deskew-pdf': {
    title: 'Raddrizza PDF',
    metaDescription: 'Raddrizza automaticamente le pagine PDF scansionate o inclinate. Correggi i documenti inclinati con il rilevamento preciso dell\'angolo.',
    keywords: ['raddrizza pdf', 'raddrizzare il pdf', 'corretta la scansione inclinata', 'rotazione automatica del pdf', 'angolo pdf corretto'],
    description: `<p>Deskew PDF rileva e corregge automaticamente le pagine inclinate o oblique nei documenti PDF utilizzando l'analisi avanzata della varianza del profilo di proiezione. Ciò è essenziale per i documenti scansionati che sono stati inseriti nello scanner in un angolo.</p>
      <p>Lo strumento analizza l'allineamento del testo e del contenuto da diverse angolazioni per trovare la rotazione ottimale, quindi applica la correzione. È possibile regolare la soglia di sensibilità (1-30) e le impostazioni DPI (72-300) per risultati ottimali.</p>
      <p>Tutta l'elaborazione avviene localmente nel tuo browser utilizzando la tecnologia WebAssembly, garantendo che i tuoi documenti rimangano privati e sicuri.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il file PDF scansionato o fai clic per selezionarlo.' },
      { step: 2, title: 'Configura Impostazioni', description: 'Se necessario, regolare la sensibilità della soglia e il DPI per un migliore rilevamento.' },
      { step: 3, title: 'Elabora e scarica', description: 'Fare clic su Raddrizza per raddrizzare le pagine e scaricare il PDF corretto.' },
    ],
    useCases: [
      { title: 'Documenti scansionati', description: 'Correggere le pagine scansionate inclinate dagli alimentatori di documenti.', icon: 'scan' },
      { title: 'Scansioni mobili', description: 'Correggere le foto inclinate dei documenti scattate con gli smartphone.', icon: 'smartphone' },
      { title: 'Restauro dell\'archivio', description: 'Raddrizza i vecchi archivi scansionati per una migliore leggibilità.', icon: 'archive' },
    ],
    faq: [
      { question: 'Quanto è accurato il rilevamento dell\'angolo?', answer: 'Lo strumento utilizza l\'analisi della varianza del profilo di proiezione per rilevare angoli di inclinazione fino a ±10 gradi con elevata precisione. Salta automaticamente le pagine con angoli inferiori a 0,3 gradi.' },
      { question: 'La qualità del testo verrà influenzata?', answer: 'Per rotazioni multiple di 90 gradi non si verifica alcuna perdita di qualità. Per gli altri angoli, l\'utensile arrotonda al grado più vicino e mantiene una buona qualità.' },
      { question: 'Posso raddrizzare solo pagine specifiche?', answer: 'Lo strumento analizza tutte le pagine ma corregge solo quelle con distorsione rilevata al di sopra della soglia di sensibilità. Le pagine con un\'inclinazione minima rimangono invariate.' },
      { question: 'Qual è la soglia di sensibilità?', answer: 'I valori da 1 a 10 correggono solo le inclinazioni evidenti, da 11 a 20 rilevano un\'inclinazione moderata e da 21 a 30 rilevano angoli sottili. Il valore predefinito è 10 per il rilevamento bilanciato.' },
      { question: 'Quanto tempo richiede l\'elaborazione?', answer: 'Il tempo di elaborazione dipende dalla dimensione del file e dai DPI. 150 DPI (predefinito) fornisce un buon equilibrio tra velocità e precisione. Un DPI più alto è più preciso ma più lento.' },
    ],
  },

  'pdf-booklet': {
    title: 'Creatore di opuscoli PDF',
    metaDescription: 'Crea layout di opuscoli da PDF per la stampa. Organizza le pagine per la rilegatura con pinzatura a sella con più opzioni di griglia.',
    keywords: ['libretto in formato pdf', 'creatore di opuscoli', 'stampare il libretto', 'cucitura a sella', 'imposizione'],
    description: `<p>PDF Booklet Creator organizza le pagine PDF in layout opuscolo pronti per la produzione stampa e piega. Perfetto per creare brochure, zine, opuscoli e pubblicazioni con pinzatura a sella.</p>
      <p>Scegli tra varie modalità griglia (1x2, 2x2, 2x4, 4x4), formati carta e opzioni di orientamento. Lo strumento gestisce automaticamente l'imposizione della pagina per una corretta sequenza di piegatura.</p>
      <p>Tutta l'elaborazione avviene localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Carica il documento PDF che desideri convertire in un opuscolo.' },
      { step: 2, title: 'Scegli Disposizione', description: 'Seleziona la modalità griglia, il formato carta, l\'orientamento e le opzioni di rotazione.' },
      { step: 3, title: 'Crea e scarica', description: 'Genera il layout del booklet e scaricalo per la stampa.' },
    ],
    useCases: [
      { title: 'Brochure', description: 'Crea brochure pieghevoli da documenti PDF standard.', icon: 'book-open' },
      { title: 'Zine', description: 'Produci zine autopubblicate con la corretta imposizione delle pagine.', icon: 'book' },
      { title: 'Programmi di eventi', description: 'Crea opuscoli di programmi professionali per eventi.', icon: 'calendar' },
    ],
    faq: [
      { question: 'Cos\'è la rilegatura a punto sella?', answer: 'La pinzatura a sella è un metodo di rilegatura in cui i fogli piegati vengono annidati e pinzati attraverso la piega.' },
      { question: 'Quale modalità griglia dovrei usare?', answer: '1x2 è lo standard per gli opuscoli. Utilizzare 2x2 o più per la stampa multipla per risparmiare carta.' },
      { question: 'Posso vedere in anteprima il layout?', answer: 'Sì, lo strumento fornisce un\'anteprima visiva prima di generare l\'opuscolo finale.' },
    ],
  },

  'rasterize-pdf': {
    title: 'Rasterizza PDF',
    metaDescription: 'Converti pagine PDF in immagini di alta qualità. Esporta come PNG, JPEG o WebP con impostazioni DPI personalizzate.',
    keywords: ['rasterizzare pdf', 'pdf in immagine', 'da pdf a png', 'da pdf a jpeg', 'convertire pagine pdf'],
    description: `<p>Rasterize PDF converte le tue pagine PDF in immagini raster di alta qualità. Scegli tra i formati di output PNG, JPEG o WebP con il pieno controllo su DPI e impostazioni di qualità.</p>
      <p>Perfetto per creare miniature, grafica per social media o archiviare contenuti PDF come immagini. Supporta la selezione dell'intervallo di pagine e l'elaborazione batch.</p>
      <p>Tutta l'elaborazione avviene localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Trascina e rilascia il tuo file PDF o fai clic per selezionarlo.' },
      { step: 2, title: 'Configura uscita', description: 'Seleziona DPI, formato di output (PNG/JPEG/WebP), qualità e intervallo di pagine.' },
      { step: 3, title: 'Converti e scarica', description: 'Elabora le pagine e scarica le immagini singolarmente o come archivio ZIP.' },
    ],
    useCases: [
      { title: 'Mezzi sociali', description: 'Converti diapositive PDF in immagini per la pubblicazione sui social media.', icon: 'share-2' },
      { title: 'Miniature', description: 'Genera miniature di anteprima per i documenti PDF.', icon: 'image' },
      { title: 'Pubblicazione sul Web', description: 'Converti contenuti PDF in formati immagine compatibili con il Web.', icon: 'globe' },
    ],
    faq: [
      { question: 'Che DPI dovrei usare?', answer: '72 DPI per schermo, 150 DPI per uso generale, 300 DPI per qualità di stampa.' },
      { question: 'Quale formato è il migliore?', answer: 'PNG per qualità/trasparenza, JPEG per dimensioni ridotte, WebP per uso web moderno.' },
      { question: 'Posso convertire pagine specifiche?', answer: 'Sì, specifica intervalli di pagine come "1-5, 8, 10-15" per convertire solo quelle pagine.' },
    ],
  },

  'markdown-to-pdf': {
    title: 'Contrassegna in PDF',
    metaDescription: 'Converti file Markdown in documenti PDF splendidamente formattati. Supporto per GitHub Flavored Markdown ed evidenziazione della sintassi.',
    keywords: ['ribasso in pdf', 'md in pdf', 'convertire il ribasso', 'gfm in pdf', 'convertitore di ribasso'],
    description: `<p>Markdown to PDF converte i tuoi file Markdown in documenti PDF dallo stile professionale. Supporto per CommonMark e GitHub Flavored Markdown (GFM) inclusi tabelle, elenchi di attività e blocchi di codice.</p>
      <p>Scegli tra più temi (chiaro, scuro, GitHub) e personalizza le dimensioni e i margini della pagina. I blocchi di codice hanno la sintassi evidenziata per una migliore leggibilità.</p>
      <p>Tutte le conversioni avvengono localmente nel tuo browser, garantendo che i tuoi contenuti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica file di markdown', description: 'Carica il tuo file .md o .markdown.' },
      { step: 2, title: 'Scegli Tema', description: 'Seleziona un tema visivo e configura le impostazioni della pagina.' },
      { step: 3, title: 'Converti e scarica', description: 'Genera il PDF con stile e scaricalo.' },
    ],
    useCases: [
      { title: 'Documentazione', description: 'Converti file e documenti README in PDF condivisibili.', icon: 'file-text' },
      { title: 'Esportazione delle note', description: 'Esporta le note Markdown in PDF per la stampa o la condivisione.', icon: 'edit-3' },
      { title: 'Rapporti', description: 'Crea report da Markdown con uno stile professionale.', icon: 'bar-chart' },
    ],
    faq: [
      { question: 'GitHub Flavored Markdown è supportato?', answer: 'Sì, sono supportate tabelle, elenchi di attività, barrato e altre funzionalità GFM.' },
      { question: 'Posso personalizzare lo stile?', answer: 'Scegli tra temi preimpostati o aggiungi CSS personalizzati per il pieno controllo.' },
      { question: 'I blocchi di codice sono evidenziati?', answer: 'Sì, i blocchi di codice includono l\'evidenziazione della sintassi per i linguaggi comuni.' },
    ],
  },

  'email-to-pdf': {
    title: 'Invia tramite e-mail a PDF',
    metaDescription: 'Converti file di posta elettronica (.eml, .msg) in documenti PDF. Conserva la formattazione, le immagini in linea, i collegamenti cliccabili e incorpora gli allegati.',
    keywords: ['e-mail in pdf', 'eml in pdf', 'messaggio in pdf', 'convertire la posta elettronica', 'convertitore di posta elettronica', 'salva l\'e-mail come pdf', 'prospettive in pdf'],
    description: `<p>Email to PDF converte i tuoi file di posta elettronica (formati .eml e .msg) in documenti PDF ben formattati. Lo strumento conserva le informazioni sull'intestazione dell'e-mail, il contenuto del corpo, le immagini in linea con la sostituzione del CID, i collegamenti selezionabili e incorpora gli allegati direttamente nel PDF.</p>
      <p>Personalizza le opzioni di output tra cui le dimensioni della pagina (A4, Lettera, Legale), la formattazione della data con supporto del fuso orario e se includere campi CC/BCC e informazioni sugli allegati.</p>
      <p>Tutte le conversioni avvengono localmente nel tuo browser, garantendo che le tue email rimangano private e sicure.</p>`,
    howToUse: [
      { step: 1, title: 'Carica file di posta elettronica', description: 'Carica il tuo file email .eml o .msg.' },
      { step: 2, title: 'Configura opzioni', description: 'Imposta le dimensioni della pagina, il formato della data, il fuso orario e scegli quali campi includere.' },
      { step: 3, title: 'Converti e scarica', description: 'Converti in PDF con allegati incorporati e scarica il risultato.' },
    ],
    useCases: [
      { title: 'Documenti legali', description: 'Archivia le email importanti in formato PDF con allegati incorporati per la documentazione legale.', icon: 'scale' },
      { title: 'Archivi aziendali', description: 'Converti la corrispondenza commerciale in PDF per la tenuta dei registri a lungo termine.', icon: 'briefcase' },
      { title: 'Conservazione delle prove', description: 'Salva prove e-mail con immagini e allegati in linea in un formato PDF non modificabile.', icon: 'shield' },
    ],
    faq: [
      { question: 'Quali formati di posta elettronica sono supportati?', answer: 'Sono completamente supportati sia i file .eml (RFC 822) che .msg (Microsoft Outlook).' },
      { question: 'Sono inclusi gli allegati?', answer: 'SÌ! Gli allegati vengono incorporati direttamente nel file PDF. Puoi estrarli dal PDF utilizzando un lettore PDF compatibile.' },
      { question: 'Vengono visualizzate le immagini in linea?', answer: 'Sì, le immagini in linea a cui si fa riferimento tramite CID (Content-ID) vengono automaticamente convertite in URI di dati base64 e visualizzate nel PDF.' },
      { question: 'I link sono cliccabili?', answer: 'Sì, tutti i collegamenti HTML (tag <a>) e gli URL nelle email di testo semplice vengono convertiti in collegamenti selezionabili nel PDF.' },
      { question: 'La formattazione dell\'email è preservata?', answer: 'Sì, le email HTML mantengono la formattazione il più fedele possibile, inclusi stili, immagini e collegamenti.' },
    ],
  },

  'cbz-to-pdf': {
    title: 'CBZ in PDF',
    metaDescription: 'Converti archivi di fumetti (CBZ) in PDF. Preserva l\'ordine e la qualità delle immagini per i fumetti digitali.',
    keywords: ['cbz in pdf', 'fumetto in pdf', 'convertire cbz', 'convertitore di fumetti', 'convertitore cbz'],
    description: `<p>CBZ in PDF converte i file di archivio di fumetti in documenti PDF. Lo strumento estrae tutte le immagini dall'archivio CBZ e le compila in un PDF mantenendo il corretto ordine di lettura.</p>
      <p>Scegli tra varie opzioni di dimensioni della pagina, comprese le dimensioni dell'immagine originale o le dimensioni standardizzate dei fumetti. Perfetto per leggere fumetti su dispositivi che supportano PDF ma non CBZ.</p>
      <p>Tutte le conversioni avvengono localmente nel tuo browser, garantendo che i tuoi fumetti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il file CBZ', description: 'Carica il tuo file di archivio di fumetti .cbz.' },
      { step: 2, title: 'Seleziona Opzioni', description: 'Scegli le dimensioni della pagina e le impostazioni della qualità dell\'immagine.' },
      { step: 3, title: 'Converti e scarica', description: 'Converti in PDF e scarica il tuo fumetto.' },
    ],
    useCases: [
      { title: 'Compatibilità con il lettore elettronico', description: 'Converti CBZ in PDF per e-reader che supportano solo PDF.', icon: 'book' },
      { title: 'Archivi di fumetti', description: 'Crea archivi PDF della tua collezione di fumetti digitali.', icon: 'archive' },
      { title: 'Preparazione della stampa', description: 'Converti fumetti digitali in PDF per la stampa.', icon: 'printer' },
    ],
    faq: [
      { question: 'Cos\'è il formato CBZ?', answer: 'CBZ è un archivio ZIP contenente pagine di fumetti come file immagine, rinominato con estensione .cbz.' },
      { question: 'La qualità dell\'immagine è preservata?', answer: 'Sì, le immagini vengono incorporate nel PDF con la loro qualità originale.' },
      { question: 'Sono supportate le cartelle nidificate?', answer: 'Sì, le immagini da tutte le cartelle all\'interno dell\'archivio vengono estratte e ordinate.' },
    ],
  },

  'pdf-to-pdfa': {
    title: 'Da PDF a PDF/A',
    metaDescription: 'Converti PDF in formato di archivio PDF/A. Garantisci la conservazione dei documenti a lungo termine con gli standard ISO.',
    keywords: ['da pdf a pdfa', 'convertitore pdf', 'archivio pdf', 'archivio pdf', 'conservazione a lungo termine'],
    description: `<p>PDF in PDF/A converte i tuoi documenti PDF nel formato PDF/A, lo standard ISO per l'archiviazione di documenti a lungo termine. PDF/A garantisce che i documenti siano visualizzabili e riproducibili per decenni.</p>
      <p>Scegli tra PDF/A-1b (conformità di base), PDF/A-2b (consigliato, supporta la trasparenza) o PDF/A-3b (consente file incorporati). Lo strumento incorpora i caratteri e appiattisce la trasparenza secondo necessità.</p>
      <p>Tutte le conversioni avvengono localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Carica il PDF che desideri convertire in PDF/A.' },
      { step: 2, title: 'Seleziona PDF/Livello A', description: 'Scegli il livello di conformità PDF/A-1b, PDF/A-2b o PDF/A-3b.' },
      { step: 3, title: 'Converti e scarica', description: 'Converti in PDF/A e scarica il documento d\'archivio.' },
    ],
    useCases: [
      { title: 'Archivi legali', description: 'Converti documenti legali in PDF/A per l\'archiviazione a lungo termine ammissibile ai tribunali.', icon: 'scale' },
      { title: 'Documenti governativi', description: 'Rispetta i requisiti di archiviazione governativi utilizzando PDF/A.', icon: 'building' },
      { title: 'Archivi aziendali', description: 'Conserva documenti aziendali importanti per l\'accessibilità futura.', icon: 'archive' },
    ],
    faq: [
      { question: 'Quale livello PDF/A dovrei utilizzare?', answer: 'PDF/A-2b è consigliato per la maggior parte degli usi. Utilizza 1b per la massima compatibilità o 3b se hai bisogno di file incorporati.' },
      { question: 'Cosa rende PDF/A diverso?', answer: 'PDF/A incorpora caratteri, disabilita la crittografia e garantisce che tutti gli elementi siano autonomi per la visualizzazione futura.' },
      { question: 'Posso riconvertire da PDF/A?', answer: 'I file PDF/A sono PDF standard e possono essere aperti normalmente. Le funzionalità di archiviazione aggiungono restrizioni, non limitazioni.' },
    ],
  },

  'font-to-outline': {
    title: 'Carattere da delineare',
    metaDescription: 'Rimuovi le dipendenze dai caratteri dai documenti PDF convertendo le pagine in immagini di alta qualità. Garantisce la compatibilità su tutti i sistemi.',
    keywords: ['carattere da delineare', 'caratteri di contorno', 'rimuovere i caratteri', 'compatibilità dei caratteri', 'appiattire i caratteri PDF', 'rimozione dei caratteri pdf'],
    description: `<p>Font to Outline rimuove tutte le dipendenze dai caratteri dal tuo PDF convertendo ogni pagina in contenuto rasterizzato di alta qualità. Ciò garantisce che il tuo documento abbia esattamente lo stesso aspetto su qualsiasi sistema, anche se i caratteri originali non sono installati.</p>
      <p>Lo strumento esegue il rendering di ogni pagina al DPI scelto (150-600), rimuovendo i caratteri incorporati e preservando l'esatto aspetto visivo. Facoltativamente, puoi aggiungere un livello di testo invisibile per mantenere la ricercabilità.</p>
      <p>Ciò è essenziale per la preparazione della stampa, la compatibilità multipiattaforma ed evitare problemi di licenza dei caratteri durante la condivisione di documenti. Tutta l'elaborazione avviene localmente nel tuo browser.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Carica il PDF contenente i caratteri che desideri rimuovere.' },
      { step: 2, title: 'Configura la qualità', description: 'Scegli DPI (300 consigliati per la stampa, 150 per lo schermo). Abilita il testo ricercabile, se necessario.' },
      { step: 3, title: 'Converti e scarica', description: 'Elabora il file e scarica il PDF indipendente dai caratteri.' },
    ],
    useCases: [
      { title: 'Preparazione della stampa', description: 'Elimina i problemi relativi ai font presso le tipografie commerciali rimuovendo tutte le dipendenze dai font.', icon: 'printer' },
      { title: 'Condivisione multipiattaforma', description: 'Condividi documenti che appaiono identici su qualsiasi dispositivo, indipendentemente dai caratteri installati.', icon: 'share-2' },
      { title: 'Licenza dei caratteri', description: 'Rimuovi i caratteri incorporati per evitare problemi di licenza durante la distribuzione dei documenti.', icon: 'shield' },
    ],
    faq: [
      { question: 'Come funziona?', answer: 'Lo strumento esegue il rendering di ogni pagina ad alta risoluzione (DPI scelto) e ricrea il PDF da queste immagini, rimuovendo tutte le dipendenze dai caratteri e preservando l\'aspetto visivo.' },
      { question: 'Posso ancora selezionare il testo dopo la conversione?', answer: 'Per impostazione predefinita, no. Il testo diventa parte dell\'immagine. Tuttavia, puoi abilitare "Conserva testo ricercabile" per aggiungere un livello di testo invisibile per la funzionalità di ricerca e copia.' },
      { question: 'Che DPI dovrei usare?', answer: 'Per un output di qualità di stampa si consigliano 300 DPI. 150 DPI sono sufficienti per la visualizzazione sullo schermo e producono file più piccoli. 600 DPI è la massima qualità ma crea file di grandi dimensioni.' },
      { question: 'La dimensione del file aumenterà?', answer: 'La dimensione del file dipende dal DPI e dal contenuto. 150 DPI solitamente producono file più piccoli, 300 DPI possono aumentare le dimensioni, 600 DPI aumentano significativamente le dimensioni. La compressione viene applicata automaticamente.' },
      { question: 'È reversibile?', answer: 'No, i dati dei caratteri vengono rimossi in modo permanente. Conserva una copia di backup dell\'originale se hai bisogno di testo modificabile con i caratteri originali.' },
      { question: 'E la grafica vettoriale?', answer: 'La grafica vettoriale (forme, linee) nel PDF originale verrà convertita in raster insieme al testo. La qualità visiva viene preservata al DPI scelto.' },
    ],
  },

  'extract-tables': {
    title: 'Estrai tabelle da PDF',
    metaDescription: 'Rileva ed estrai tabelle da documenti PDF. Esporta nei formati JSON, Markdown o CSV.',
    keywords: ['estrarre tabelle', 'estrazione tabella pdf', 'da pdf a csv', 'pdf per eccellere', 'rilevamento della tabella'],
    description: `<p>Estrai tabelle da PDF rileva i dati tabulari all'interno dei tuoi documenti PDF e li esporta in formati strutturati. Scegli JSON per l'integrazione dei dati, Markdown per la documentazione o CSV per i fogli di calcolo.</p>
      <p>Lo strumento utilizza algoritmi di rilevamento intelligenti per identificare le strutture delle tabelle anche in documenti complessi. Specifica gli intervalli di pagine e regola i parametri di rilevamento per risultati ottimali.</p>
      <p>Tutta l'elaborazione avviene localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Carica il PDF contenente le tabelle che desideri estrarre.' },
      { step: 2, title: 'Configura rilevamento', description: 'Imposta l\'intervallo di pagine e le soglie minime di colonna/riga.' },
      { step: 3, title: 'Esporta e scarica', description: 'Scegli il formato di output (JSON/Markdown/CSV) e scarica.' },
    ],
    useCases: [
      { title: 'Analisi dei dati', description: 'Estrai i dati della tabella per l\'analisi in fogli di calcolo o database.', icon: 'bar-chart' },
      { title: 'Elaborazione dei rapporti', description: 'Estrai tabelle da report PDF per ulteriori elaborazioni.', icon: 'file-text' },
      { title: 'Documentazione', description: 'Converti tabelle PDF in Markdown per la documentazione tecnica.', icon: 'book' },
    ],
    faq: [
      { question: 'Può rilevare tabelle complesse?', answer: 'Lo strumento funziona meglio con semplici tabelle a griglia. Le celle unite complesse potrebbero richiedere una regolazione manuale.' },
      { question: 'Cosa succede se non vengono trovate tabelle?', answer: 'Prova a regolare la soglia minima di colonne/righe o controlla se il PDF contiene strutture di tabella effettive.' },
      { question: 'Posso estrarre da pagine specifiche?', answer: 'Sì, specifica un intervallo di pagine per limitare l\'estrazione a determinate pagine.' },
    ],
  },

  'ocg-manager': {
    title: 'Gestore livelli PDF (OCG)',
    metaDescription: 'Gestisci i livelli PDF (gruppi di contenuti opzionali). Visualizza, attiva/disattiva, aggiungi, elimina e rinomina i livelli nei tuoi documenti PDF.',
    keywords: ['strati pdf', 'gestore dell\'OCG', 'gruppi di contenuti opzionali', 'visibilità del livello pdf', 'gestire i livelli PDF'],
    description: `<p>PDF Layer Manager ti consente di visualizzare e gestire gruppi di contenuti opzionali (OCG) nei tuoi documenti PDF. I livelli OCG vengono utilizzati nei disegni tecnici, nelle mappe e nei documenti complessi per organizzare i contenuti in livelli commutabili.</p>
      <p>Visualizza tutti i livelli nel tuo PDF, attiva la loro visibilità, aggiungi nuovi livelli, elimina quelli indesiderati o rinomina i livelli esistenti. Questo strumento è essenziale per lavorare con PDF a più livelli come piante architettoniche, esportazioni CAD e documenti pronti per la stampa.</p>
      <p>Tutta l'elaborazione avviene localmente nel tuo browser, garantendo che i tuoi documenti rimangano privati e sicuri.</p>`,
    howToUse: [
      { step: 1, title: 'Carica il tuo PDF', description: 'Carica un file PDF che contiene livelli (OCG) o uno a cui desideri aggiungere livelli.' },
      { step: 2, title: 'Visualizza livelli', description: 'Lo strumento elenca automaticamente tutti i livelli presenti nel documento con il relativo stato di visibilità.' },
      { step: 3, title: 'Gestisci livelli', description: 'Attiva/disattiva la visibilità dei livelli, rinomina i livelli, aggiungine di nuovi o elimina i livelli indesiderati.' },
      { step: 4, title: 'Salva e scarica', description: 'Scarica il tuo PDF modificato con le modifiche ai livelli applicate.' },
    ],
    useCases: [
      { title: 'Disegni Tecnici', description: 'Gestisci i livelli nelle esportazioni CAD per mostrare/nascondere dimensioni, annotazioni o viste diverse.', icon: 'ruler' },
      { title: 'Modifica della mappa', description: 'Attiva/disattiva diversi livelli di mappa come topografia, strade ed etichette per stampe di mappe personalizzate.', icon: 'map' },
      { title: 'Preparazione della stampa', description: 'Prepara PDF a più livelli per la stampa attivando i livelli appropriati per le diverse versioni.', icon: 'printer' },
    ],
    faq: [
      { question: 'Cosa sono i livelli PDF (OCG)?', answer: 'I gruppi di contenuti opzionali (OCG) sono livelli in un PDF che possono essere mostrati o nascosti. Sono comunemente utilizzati nei disegni CAD, nelle mappe e nei documenti complessi.' },
      { question: 'Perché il mio PDF non mostra livelli?', answer: 'Non tutti i PDF contengono livelli. I livelli vengono generalmente aggiunti durante la creazione di PDF da software di progettazione o applicazioni CAD.' },
      { question: 'Le modifiche ai livelli influenzeranno il contenuto originale?', answer: 'Le modifiche alla visibilità dei livelli influiscono solo su ciò che viene visualizzato o stampato. Il contenuto effettivo rimane nel documento.' },
    ],
  },

  'pdf-reader': {
    title: 'Lettore PDF',
    metaDescription: 'Lettore PDF online gratuito. Visualizza, naviga, ingrandisci, ruota e stampa documenti PDF direttamente nel tuo browser.',
    keywords: ['lettore pdf', 'visualizzatore pdf', 'visualizza il pdf on-line', 'leggi il pdf', 'visualizzatore del browser PDF'],
    description: `<p>PDF Reader è un visualizzatore PDF completo che ti consente di leggere e navigare nei documenti PDF direttamente nel tuo browser. Non è richiesta l'installazione di software: carica semplicemente il tuo PDF e inizia a leggere.</p>
      <p>Naviga tra le pagine, ingrandisci e riduci, ruota la visualizzazione e utilizza la modalità a schermo intero per una lettura senza distrazioni. Puoi anche stampare documenti o scaricarli per l'accesso offline.</p>
      <p>Tutta la visualizzazione avviene localmente nel tuo browser. I tuoi documenti non verranno mai caricati su nessun server, garantendo la completa privacy.</p>`,
    howToUse: [
      { step: 1, title: 'Apri il tuo PDF', description: 'Fare clic per caricare o trascinare e rilasciare un file PDF per aprirlo nel lettore.' },
      { step: 2, title: 'Navigare tra le pagine', description: 'Utilizza i controlli della pagina per passare alla pagina precedente o successiva oppure per passare a un numero di pagina specifico.' },
      { step: 3, title: 'Regola vista', description: 'Ingrandisci o riduci, ruota la visualizzazione o attiva la modalità a schermo intero per una lettura confortevole.' },
      { step: 4, title: 'Stampa o scarica', description: 'Stampa il documento o scaricalo per l\'accesso offline quando necessario.' },
    ],
    useCases: [
      { title: 'Revisione dei documenti', description: 'Rivedi rapidamente i documenti PDF senza installare alcun software.', icon: 'book-open' },
      { title: 'Lettura mobile', description: 'Leggi documenti PDF su qualsiasi dispositivo dotato di un browser web.', icon: 'smartphone' },
      { title: 'Anteprima rapida', description: 'Visualizza l\'anteprima dei PDF prima di decidere di scaricarli o stamparli.', icon: 'eye' },
    ],
    faq: [
      { question: 'Il mio documento è sicuro?', answer: 'Sì, il tuo documento viene elaborato interamente nel tuo browser e non viene mai caricato su nessun server.' },
      { question: 'Posso annotare o modificare il PDF?', answer: 'Questo strumento è solo per la visualizzazione. Utilizza i nostri strumenti Firma PDF o Annota PDF per la modifica.' },
      { question: 'Funziona sui dispositivi mobili?', answer: 'Sì, il lettore PDF funziona su tutti i dispositivi dotati di un browser Web moderno.' },
    ],
  },

  'digital-sign-pdf': {
    title: 'Firma digitale',
    metaDescription: 'Aggiungi firme digitali X.509 ai documenti PDF. Firma i PDF con certificati PFX, P12 o PEM per la validità legale.',
    keywords: ['firma digitale pdf', 'certificato x509', 'segno pfx pdf', 'p12 firmare pdf', 'segno pem pdf', 'firmare legalmente il pdf'],
    description: `<p>Firma digitale consente di aggiungere firme digitali crittografiche X.509 ai documenti PDF. A differenza delle firme semplici, le firme digitali forniscono validità legale e verifica dell'integrità del documento.</p>
      <p>Carica il file del tuo certificato (formato PFX, P12 o PEM), inserisci la password e firma il tuo PDF. Puoi aggiungere firme visibili con testo, immagini e posizionamento personalizzati oppure firme invisibili solo per l'integrità del documento.</p>
      <p>Tutte le firme avvengono localmente nel tuo browser. Il tuo certificato e i tuoi documenti non verranno mai caricati su nessun server.</p>`,
    howToUse: [
      { step: 1, title: 'Carica PDF', description: 'Carica il documento PDF che vuoi firmare digitalmente.' },
      { step: 2, title: 'Carica certificato', description: 'Carica il file del certificato X.509 (.pfx, .p12 o .pem) e inserisci la password.' },
      { step: 3, title: 'Configura firma', description: 'Facoltativamente, aggiungi motivo, posizione e firma visibile con testo o immagine personalizzati.' },
      { step: 4, title: 'Firma e scarica', description: 'Fare clic su Firma PDF per applicare la firma digitale e scaricare il documento firmato.' },
    ],
    useCases: [
      { title: 'Documenti legali', description: 'Firma contratti, accordi e documenti legali con firme digitali legalmente vincolanti.', icon: 'scale' },
      { title: 'Approvazioni aziendali', description: 'Firma digitalmente fatture, ordini di acquisto e documenti di approvazione per gli audit trail.', icon: 'briefcase' },
      { title: 'Integrità del documento', description: 'Assicurarsi che i documenti non siano stati manomessi dopo la firma.', icon: 'shield-check' },
    ],
    faq: [
      { question: 'Quali formati di certificato sono supportati?', answer: 'Sono supportati i formati di certificato PFX (.pfx), PKCS#12 (.p12) e PEM (.pem).' },
      { question: 'La firma ha valore legale?', answer: 'Sì, le firme digitali X.509 sono legalmente riconosciute nella maggior parte delle giurisdizioni quando si utilizza un certificato valido.' },
      { question: 'Posso aggiungere una firma visibile?', answer: 'Sì, puoi aggiungere una firma visibile con testo, immagine, posizione e stile personalizzati.' },
    ],
  },

  'validate-signature': {
    title: 'Convalida firma',
    metaDescription: 'Verifica le firme digitali nei documenti PDF. Controlla la validità del certificato, le informazioni sul firmatario e l\'integrità del documento.',
    keywords: ['convalidare la firma pdf', 'verificare la firma digitale', 'controlla il certificato pdf', 'verifica della firma'],
    description: `<p>Validate Signature consente di verificare le firme digitali nei documenti PDF. Controlla se le firme sono valide, visualizza le informazioni sul certificato e conferma l'integrità del documento.</p>
      <p>Carica un PDF firmato per visualizzare tutte le firme, il loro stato di validità, le informazioni sul firmatario e se il documento è stato modificato dopo la firma.</p>
      <p>Tutta la convalida avviene localmente nel tuo browser. I tuoi documenti non vengono mai caricati su nessun server.</p>`,
    howToUse: [
      { step: 1, title: 'Carica PDF firmato', description: 'Carica un documento PDF che contiene firme digitali.' },
      { step: 2, title: 'Visualizza risultati', description: 'Visualizza tutte le firme trovate nel documento con il loro stato di validità.' },
      { step: 3, title: 'Controlla i dettagli', description: 'Visualizza le informazioni sul certificato, i dettagli del firmatario e il timestamp della firma.' },
      { step: 4, title: 'Rapporto sull\'esportazione', description: 'Facoltativamente, scarica un report JSON dei risultati della convalida.' },
    ],
    useCases: [
      { title: 'Verifica del documento', description: 'Verificare che i documenti firmati siano autentici e non siano stati manomessi.', icon: 'shield-check' },
      { title: 'Controllo di conformità', description: 'Controllare la validità della firma per scopi di conformità e audit.', icon: 'clipboard-check' },
      { title: 'Revisione del certificato', description: 'Visualizza i dettagli del certificato e le date di scadenza per i documenti firmati.', icon: 'award' },
    ],
    faq: [
      { question: 'Cosa significa "valido"?', answer: 'Una firma valida significa che il documento non è stato modificato dopo la firma e la catena del certificato è intatta.' },
      { question: 'Posso convalidare più PDF?', answer: 'Sì, puoi caricare più PDF e convalidare tutte le firme in batch.' },
      { question: 'Perché una firma potrebbe non essere valida?', answer: 'Le firme potrebbero non essere valide se il documento è stato modificato, il certificato è scaduto o il certificato non è attendibile.' },
    ],
  },
};


