// Product data
const products = [
    // ── Coudes / Kolena / Bögen / Elbows ─────────────────────────────────────
    {
        id: 1,
        name: { cz: "Lisovací koleno 90°", en: "90° Press-fit bend", de: "Pressfitting-Bogen 90°", fr: "Coude 90° à sertir" },
        description: {
            cz: "Lisovací koleno 90°, V-profil. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Těsnění: EPDM O-kroužek (LBP nebo klasický), pracovní teplota -10 °C až +110 °C. Montáž bez pájení nebo závitování.",
            en: "90° press-fit elbow, V-profile. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. Seal: EPDM O-ring (LBP or traditional), working temperature -10°C to +110°C. Installation without soldering or threading.",
            de: "90°-Pressfitting-Bogen, V-Profil. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Dichtung: EPDM-O-Ring (LBP oder klassisch), Betriebstemperatur -10 °C bis +110 °C. Montage ohne Löten oder Gewindeschneiden.",
            fr: "Coude 90° à sertir, V-profil. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Joint : O-ring EPDM (LBP ou classique), température de service -10°C à +110°C. Montage sans soudure ni filetage."
        },
        category: "coudes", diameter: "16mm", price: 4.50, image: "images/bend-90.png"
    },
    {
        id: 2,
        name: { cz: "Lisovací koleno 90°", en: "90° Press-fit bend", de: "Pressfitting-Bogen 90°", fr: "Coude 90° à sertir" },
        description: {
            cz: "Lisovací koleno 90°, V-profil. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Těsnění: EPDM O-kroužek (LBP nebo klasický), pracovní teplota -10 °C až +110 °C. Montáž bez pájení nebo závitování.",
            en: "90° press-fit elbow, V-profile. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. Seal: EPDM O-ring (LBP or traditional), working temperature -10°C to +110°C. Installation without soldering or threading.",
            de: "90°-Pressfitting-Bogen, V-Profil. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Dichtung: EPDM-O-Ring (LBP oder klassisch), Betriebstemperatur -10 °C bis +110 °C. Montage ohne Löten oder Gewindeschneiden.",
            fr: "Coude 90° à sertir, V-profil. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Joint : O-ring EPDM (LBP ou classique), température de service -10°C à +110°C. Montage sans soudure ni filetage."
        },
        category: "coudes", diameter: "20mm", price: 5.80, image: "images/bend-90.png"
    },
    {
        id: 3,
        name: { cz: "Lisovací koleno 90°", en: "90° Press-fit bend", de: "Pressfitting-Bogen 90°", fr: "Coude 90° à sertir" },
        description: {
            cz: "Lisovací koleno 90°, V-profil. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Těsnění: EPDM O-kroužek (LBP nebo klasický), pracovní teplota -10 °C až +110 °C. Montáž bez pájení nebo závitování.",
            en: "90° press-fit elbow, V-profile. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. Seal: EPDM O-ring (LBP or traditional), working temperature -10°C to +110°C. Installation without soldering or threading.",
            de: "90°-Pressfitting-Bogen, V-Profil. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Dichtung: EPDM-O-Ring (LBP oder klassisch), Betriebstemperatur -10 °C bis +110 °C. Montage ohne Löten oder Gewindeschneiden.",
            fr: "Coude 90° à sertir, V-profil. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Joint : O-ring EPDM (LBP ou classique), température de service -10°C à +110°C. Montage sans soudure ni filetage."
        },
        category: "coudes", diameter: "26mm", price: 7.90, image: "images/bend-90.png"
    },
    {
        id: 4,
        name: { cz: "Lisovací koleno 90° s hladkým koncem", en: "90° Press-fit bend with plain end", de: "Pressfitting-Bogen 90° mit Steckende", fr: "Coude 90° à sertir avec sortie lisse" },
        description: {
            cz: "Lisovací koleno 90° s hladkým koncem, V-profil. Jeden lisovací spoj + hladký konec pro napojení na potrubí nebo komponenty bez závitu. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Těsnění: EPDM O-kroužek, -10 °C až +110 °C.",
            en: "90° press-fit elbow with plain end, V-profile. One press connection + plain end for connecting to pipe or components without thread. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. Seal: EPDM O-ring, -10°C to +110°C.",
            de: "90°-Pressfitting-Bogen mit Steckende, V-Profil. Eine Pressverbindung + glattes Steckende für den Anschluss an Rohre oder Komponenten ohne Gewinde. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Dichtung: EPDM-O-Ring, -10 °C bis +110 °C.",
            fr: "Coude 90° à sertir avec sortie lisse, V-profil. Un raccord à sertir + sortie lisse pour le raccordement à des tubes ou composants sans filetage. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Joint : O-ring EPDM, -10°C à +110°C."
        },
        category: "coudes", diameter: "16mm", price: 4.20, image: "images/bend-90-plain.png"
    },
    {
        id: 5,
        name: { cz: "Lisovací koleno 90° s hladkým koncem", en: "90° Press-fit bend with plain end", de: "Pressfitting-Bogen 90° mit Steckende", fr: "Coude 90° à sertir avec sortie lisse" },
        description: {
            cz: "Lisovací koleno 90° s hladkým koncem, V-profil. Jeden lisovací spoj + hladký konec pro napojení na potrubí nebo komponenty bez závitu. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Těsnění: EPDM O-kroužek, -10 °C až +110 °C.",
            en: "90° press-fit elbow with plain end, V-profile. One press connection + plain end for connecting to pipe or components without thread. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. Seal: EPDM O-ring, -10°C to +110°C.",
            de: "90°-Pressfitting-Bogen mit Steckende, V-Profil. Eine Pressverbindung + glattes Steckende für den Anschluss an Rohre oder Komponenten ohne Gewinde. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Dichtung: EPDM-O-Ring, -10 °C bis +110 °C.",
            fr: "Coude 90° à sertir avec sortie lisse, V-profil. Un raccord à sertir + sortie lisse pour le raccordement à des tubes ou composants sans filetage. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Joint : O-ring EPDM, -10°C à +110°C."
        },
        category: "coudes", diameter: "20mm", price: 5.50, image: "images/bend-90-plain.png"
    },

    // ── Tés / T-kusy / T-Stücke / T-pieces ───────────────────────────────────
    {
        id: 6,
        name: { cz: "Rovný T-kus lisovací", en: "Equal press-fit T-piece", de: "Gleich-T-Stück Pressfitting", fr: "Té égal à sertir" },
        description: {
            cz: "Rovný T-kus lisovací, V-profil. Tři lisovací spoje stejného průměru pro větvení potrubí. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Těsnění: EPDM O-kroužek (LBP nebo klasický), -10 °C až +110 °C. Montáž bez pájení.",
            en: "Equal press-fit T-piece, V-profile. Three press connections of the same diameter for branching pipe runs. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. Seal: EPDM O-ring (LBP or traditional), -10°C to +110°C. Installation without soldering.",
            de: "Gleich-Pressfitting-T-Stück, V-Profil. Drei Pressverbindungen gleichen Durchmessers für Rohrleitungsabzweigungen. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Dichtung: EPDM-O-Ring (LBP oder klassisch), -10 °C bis +110 °C. Montage ohne Löten.",
            fr: "Té égal à sertir, V-profil. Trois raccords du même diamètre pour les branchements. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Joint : O-ring EPDM (LBP ou classique), -10°C à +110°C. Montage sans soudure."
        },
        category: "tes", diameter: "16mm", price: 6.90, image: "images/t-equal.png"
    },
    {
        id: 7,
        name: { cz: "Rovný T-kus lisovací", en: "Equal press-fit T-piece", de: "Gleich-T-Stück Pressfitting", fr: "Té égal à sertir" },
        description: {
            cz: "Rovný T-kus lisovací, V-profil. Tři lisovací spoje stejného průměru pro větvení potrubí. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Těsnění: EPDM O-kroužek (LBP nebo klasický), -10 °C až +110 °C. Montáž bez pájení.",
            en: "Equal press-fit T-piece, V-profile. Three press connections of the same diameter for branching pipe runs. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. Seal: EPDM O-ring (LBP or traditional), -10°C to +110°C. Installation without soldering.",
            de: "Gleich-Pressfitting-T-Stück, V-Profil. Drei Pressverbindungen gleichen Durchmessers für Rohrleitungsabzweigungen. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Dichtung: EPDM-O-Ring (LBP oder klassisch), -10 °C bis +110 °C. Montage ohne Löten.",
            fr: "Té égal à sertir, V-profil. Trois raccords du même diamètre pour les branchements. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Joint : O-ring EPDM (LBP ou classique), -10°C à +110°C. Montage sans soudure."
        },
        category: "tes", diameter: "20mm", price: 8.50, image: "images/t-equal.png"
    },
    {
        id: 8,
        name: { cz: "Rovný T-kus lisovací", en: "Equal press-fit T-piece", de: "Gleich-T-Stück Pressfitting", fr: "Té égal à sertir" },
        description: {
            cz: "Rovný T-kus lisovací, V-profil. Tři lisovací spoje stejného průměru pro větvení potrubí. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Těsnění: EPDM O-kroužek (LBP nebo klasický), -10 °C až +110 °C. Montáž bez pájení.",
            en: "Equal press-fit T-piece, V-profile. Three press connections of the same diameter for branching pipe runs. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. Seal: EPDM O-ring (LBP or traditional), -10°C to +110°C. Installation without soldering.",
            de: "Gleich-Pressfitting-T-Stück, V-Profil. Drei Pressverbindungen gleichen Durchmessers für Rohrleitungsabzweigungen. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Dichtung: EPDM-O-Ring (LBP oder klassisch), -10 °C bis +110 °C. Montage ohne Löten.",
            fr: "Té égal à sertir, V-profil. Trois raccords du même diamètre pour les branchements. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Joint : O-ring EPDM (LBP ou classique), -10°C à +110°C. Montage sans soudure."
        },
        category: "tes", diameter: "26mm", price: 11.20, image: "images/t-equal.png"
    },
    {
        id: 9,
        name: { cz: "Redukční T-kus lisovací", en: "Reducing press-fit T-piece", de: "Reduzier-T-Stück Pressfitting", fr: "Té réduit à sertir" },
        description: {
            cz: "Redukční T-kus lisovací, V-profil. Průchozí větev a odbočka různých průměrů — pro propojení dvou okruhů různých dimenzí. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Těsnění: EPDM O-kroužek, -10 °C až +110 °C.",
            en: "Reducing press-fit T-piece, V-profile. Main run and branch of different diameters — for connecting two circuits of different sizes. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. Seal: EPDM O-ring, -10°C to +110°C.",
            de: "Reduzier-Pressfitting-T-Stück, V-Profil. Durchgangsstrecke und Abzweig mit unterschiedlichen Durchmessern — für den Anschluss zweier Kreisläufe verschiedener Dimensionen. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Dichtung: EPDM-O-Ring, -10 °C bis +110 °C.",
            fr: "Té réduit à sertir, V-profil. Conduite principale et branchement de diamètres différents — pour relier deux circuits de dimensions différentes. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Joint : O-ring EPDM, -10°C à +110°C."
        },
        category: "tes", diameter: "20×16×20mm", price: 9.90, image: "images/t-reducing.png"
    },
    {
        id: 10,
        name: { cz: "Redukční T-kus lisovací", en: "Reducing press-fit T-piece", de: "Reduzier-T-Stück Pressfitting", fr: "Té réduit à sertir" },
        description: {
            cz: "Redukční T-kus lisovací, V-profil. Průchozí větev a odbočka různých průměrů — pro propojení dvou okruhů různých dimenzí. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Těsnění: EPDM O-kroužek, -10 °C až +110 °C.",
            en: "Reducing press-fit T-piece, V-profile. Main run and branch of different diameters — for connecting two circuits of different sizes. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. Seal: EPDM O-ring, -10°C to +110°C.",
            de: "Reduzier-Pressfitting-T-Stück, V-Profil. Durchgangsstrecke und Abzweig mit unterschiedlichen Durchmessern — für den Anschluss zweier Kreisläufe verschiedener Dimensionen. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Dichtung: EPDM-O-Ring, -10 °C bis +110 °C.",
            fr: "Té réduit à sertir, V-profil. Conduite principale et branchement de diamètres différents — pour relier deux circuits de dimensions différentes. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Joint : O-ring EPDM, -10°C à +110°C."
        },
        category: "tes", diameter: "26×20×26mm", price: 12.50, image: "images/t-reducing.png"
    },
    {
        id: 19,
        name: { cz: "T-kus lisovací s vnitřním závitem", en: "Press-fit T-piece with female thread", de: "T-Stück Pressfitting mit Innengewinde", fr: "Té à sertir avec sortie femelle" },
        description: {
            cz: "T-kus lisovací s vnitřním závitem, V-profil. Dva lisovací spoje + vnitřní závitový vývod (G 1/2\"). Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Pro přímé napojení závitových armatur nebo měřidel. EPDM O-kroužek, -10 °C až +110 °C.",
            en: "Press-fit T-piece with female thread, V-profile. Two press connections + female-threaded outlet (G 1/2\"). Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. For direct connection of threaded valves or instruments. EPDM O-ring, -10°C to +110°C.",
            de: "Pressfitting-T-Stück mit Innengewinde, V-Profil. Zwei Pressverbindungen + Innengewinde-Abzweig (G 1/2\"). Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Für direkten Anschluss von Gewinde-Armaturen oder Messgeräten. EPDM-O-Ring, -10 °C bis +110 °C.",
            fr: "Té à sertir avec filetage femelle, V-profil. Deux raccords + sortie filetée femelle (G 1/2\"). Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Pour connexion directe de vannes filetées ou instruments. O-ring EPDM, -10°C à +110°C."
        },
        category: "tes", diameter: "20mm × 1/2\"", price: 13.90, image: "images/t-female-thread.png"
    },
    {
        id: 20,
        name: { cz: "T-kus lisovací s vnějším závitem", en: "Press-fit T-piece with male thread", de: "T-Stück Pressfitting mit Außengewinde", fr: "Té à sertir avec sortie mâle" },
        description: {
            cz: "T-kus lisovací s vnějším závitem, V-profil. Dva lisovací spoje + vnější závitový vývod (G 1/2\"). Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Pro přímé napojení na závitová hrdla kotlů nebo rozdělovačů. EPDM O-kroužek, -10 °C až +110 °C.",
            en: "Press-fit T-piece with male thread, V-profile. Two press connections + male-threaded outlet (G 1/2\"). Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. For direct connection to threaded boiler or manifold outlets. EPDM O-ring, -10°C to +110°C.",
            de: "Pressfitting-T-Stück mit Außengewinde, V-Profil. Zwei Pressverbindungen + Außengewinde-Abzweig (G 1/2\"). Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Für direkten Anschluss an Gewindestutzen von Kesseln oder Verteilern. EPDM-O-Ring, -10 °C bis +110 °C.",
            fr: "Té à sertir avec filetage mâle, V-profil. Deux raccords + sortie filetée mâle (G 1/2\"). Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Pour connexion directe aux raccords filetés de chaudières ou collecteurs. O-ring EPDM, -10°C à +110°C."
        },
        category: "tes", diameter: "20mm × 1/2\"", price: 13.90, image: "images/t-male-thread.png"
    },

    // ── Manchons / Spojky / Muffen / Couplings ────────────────────────────────
    {
        id: 11,
        name: { cz: "Lisovací spojka", en: "Press-fit coupling", de: "Pressfitting-Muffe", fr: "Manchon à sertir" },
        description: {
            cz: "Přímá lisovací spojka, V-profil. Dva lisovací spoje pro přímé spojení dvou trubek. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Těsnění: EPDM O-kroužek (LBP nebo klasický), -10 °C až +110 °C. Montáž bez pájení.",
            en: "Straight press-fit coupling, V-profile. Two press connections for directly joining two pipes. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. Seal: EPDM O-ring (LBP or traditional), -10°C to +110°C. Installation without soldering.",
            de: "Gerade Pressfitting-Muffe, V-Profil. Zwei Pressverbindungen zum direkten Verbinden zweier Rohre. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Dichtung: EPDM-O-Ring (LBP oder klassisch), -10 °C bis +110 °C. Montage ohne Löten.",
            fr: "Manchon droit à sertir, V-profil. Deux raccords pour assembler directement deux tuyaux. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Joint : O-ring EPDM (LBP ou classique), -10°C à +110°C. Montage sans soudure."
        },
        category: "manchons", diameter: "22mm", price: 3.20, image: "images/coupling.png"
    },
    {
        id: 12,
        name: { cz: "Lisovací spojka", en: "Press-fit coupling", de: "Pressfitting-Muffe", fr: "Manchon à sertir" },
        description: {
            cz: "Přímá lisovací spojka, V-profil. Dva lisovací spoje pro přímé spojení dvou trubek. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Těsnění: EPDM O-kroužek (LBP nebo klasický), -10 °C až +110 °C. Montáž bez pájení.",
            en: "Straight press-fit coupling, V-profile. Two press connections for directly joining two pipes. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. Seal: EPDM O-ring (LBP or traditional), -10°C to +110°C. Installation without soldering.",
            de: "Gerade Pressfitting-Muffe, V-Profil. Zwei Pressverbindungen zum direkten Verbinden zweier Rohre. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Dichtung: EPDM-O-Ring (LBP oder klassisch), -10 °C bis +110 °C. Montage ohne Löten.",
            fr: "Manchon droit à sertir, V-profil. Deux raccords pour assembler directement deux tuyaux. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Joint : O-ring EPDM (LBP ou classique), -10°C à +110°C. Montage sans soudure."
        },
        category: "manchons", diameter: "28mm", price: 4.10, image: "images/coupling.png"
    },
    {
        id: 13,
        name: { cz: "Lisovací spojka", en: "Press-fit coupling", de: "Pressfitting-Muffe", fr: "Manchon à sertir" },
        description: {
            cz: "Přímá lisovací spojka, V-profil. Dva lisovací spoje pro přímé spojení dvou trubek. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Těsnění: EPDM O-kroužek (LBP nebo klasický), -10 °C až +110 °C. Montáž bez pájení.",
            en: "Straight press-fit coupling, V-profile. Two press connections for directly joining two pipes. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. Seal: EPDM O-ring (LBP or traditional), -10°C to +110°C. Installation without soldering.",
            de: "Gerade Pressfitting-Muffe, V-Profil. Zwei Pressverbindungen zum direkten Verbinden zweier Rohre. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Dichtung: EPDM-O-Ring (LBP oder klassisch), -10 °C bis +110 °C. Montage ohne Löten.",
            fr: "Manchon droit à sertir, V-profil. Deux raccords pour assembler directement deux tuyaux. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Joint : O-ring EPDM (LBP ou classique), -10°C à +110°C. Montage sans soudure."
        },
        category: "manchons", diameter: "26mm", price: 5.40, image: "images/coupling.png"
    },
    {
        id: 14,
        name: { cz: "Lisovací spojka", en: "Press-fit coupling", de: "Pressfitting-Muffe", fr: "Manchon à sertir" },
        description: {
            cz: "Přímá lisovací spojka, V-profil. Dva lisovací spoje pro přímé spojení dvou trubek. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Těsnění: EPDM O-kroužek (LBP nebo klasický), -10 °C až +110 °C. Montáž bez pájení.",
            en: "Straight press-fit coupling, V-profile. Two press connections for directly joining two pipes. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. Seal: EPDM O-ring (LBP or traditional), -10°C to +110°C. Installation without soldering.",
            de: "Gerade Pressfitting-Muffe, V-Profil. Zwei Pressverbindungen zum direkten Verbinden zweier Rohre. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Dichtung: EPDM-O-Ring (LBP oder klassisch), -10 °C bis +110 °C. Montage ohne Löten.",
            fr: "Manchon droit à sertir, V-profil. Deux raccords pour assembler directement deux tuyaux. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Joint : O-ring EPDM (LBP ou classique), -10°C à +110°C. Montage sans soudure."
        },
        category: "manchons", diameter: "32mm", price: 7.80, image: "images/coupling.png"
    },

    // ── Adaptors / Přechodky / Übergangsstücke / Adaptateurs ─────────────────
    {
        id: 21,
        name: { cz: "Lisovací přechodka s vnějším závitem", en: "Press-fit adaptor with male thread", de: "Pressfitting-Übergangsstück mit Außengewinde", fr: "Adaptateur à sertir avec filetage mâle" },
        description: {
            cz: "Lisovací přechodka s vnějším závitem, V-profil. Lisovací spoj + vnější závit (G 3/4\"). Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Těsnění: EPDM O-kroužek (LBP nebo klasický), -10 °C až +110 °C. Pro propojení lisovacích trubek se závitovými ventily nebo kotlovými hrdly.",
            en: "Press-fit adaptor with male thread, V-profile. Press connection + male thread (G 3/4\"). Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. Seal: EPDM O-ring (LBP or traditional), -10°C to +110°C. For connecting press-fit pipes to threaded valves or boiler connections.",
            de: "Pressfitting-Übergangsstück mit Außengewinde, V-Profil. Pressverbindung + Außengewinde (G 3/4\"). Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Dichtung: EPDM-O-Ring (LBP oder klassisch), -10 °C bis +110 °C. Für die Verbindung von Pressfitting-Rohren mit Gewinde-Armaturen oder Kesselstutzen.",
            fr: "Adaptateur à sertir avec filetage mâle, V-profil. Raccord à sertir + filetage mâle (G 3/4\"). Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Joint : O-ring EPDM (LBP ou classique), -10°C à +110°C. Pour relier des tubes à sertir à des vannes filetées ou raccords de chaudière."
        },
        category: "adaptors", diameter: "22mm × 3/4\"", price: 5.90, image: "images/adaptor-male.png"
    },
    {
        id: 22,
        name: { cz: "Lisovací přechodka s vnitřním závitem (monoblok)", en: "Press-fit adaptor with female thread (one piece)", de: "Pressfitting-Übergangsstück mit Innengewinde (einteilig)", fr: "Adaptateur à sertir avec filetage femelle (monobloc)" },
        description: {
            cz: "Jednodílná lisovací přechodka s vnitřním závitem, V-profil. Monolitická konstrukce pro vyšší pevnost — lisovací spoj + vnitřní závit (G 3/4\"). Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. EPDM O-kroužek, -10 °C až +110 °C.",
            en: "One-piece press-fit adaptor with female thread, V-profile. One-piece construction for higher strength — press connection + female thread (G 3/4\"). Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. EPDM O-ring, -10°C to +110°C.",
            de: "Einteiliges Pressfitting-Übergangsstück mit Innengewinde, V-Profil. Einteilige Konstruktion für höhere Festigkeit — Pressverbindung + Innengewinde (G 3/4\"). Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. EPDM-O-Ring, -10 °C bis +110 °C.",
            fr: "Adaptateur monobloc à sertir avec filetage femelle, V-profil. Construction monobloc pour une résistance accrue — raccord à sertir + filetage femelle (G 3/4\"). Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. O-ring EPDM, -10°C à +110°C."
        },
        category: "adaptors", diameter: "22mm × 3/4\"", price: 6.50, image: "images/adaptor-female-onepiece.png"
    },
    {
        id: 23,
        name: { cz: "Lisovací přechodka s vnějším závitem (monoblok)", en: "Press-fit adaptor with male thread (one piece)", de: "Pressfitting-Übergangsstück mit Außengewinde (einteilig)", fr: "Adaptateur à sertir avec filetage mâle (monobloc)" },
        description: {
            cz: "Jednodílná lisovací přechodka s vnějším závitem, V-profil. Monolitická konstrukce — lisovací spoj + vnější závit (G 3/4\") pro přímé napojení na závitová hrdla kotlů nebo rozdělovačů. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. EPDM O-kroužek.",
            en: "One-piece press-fit adaptor with male thread, V-profile. One-piece construction — press connection + male thread (G 3/4\") for direct connection to threaded boiler or manifold outlets. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. EPDM O-ring.",
            de: "Einteiliges Pressfitting-Übergangsstück mit Außengewinde, V-Profil. Einteilige Konstruktion — Pressverbindung + Außengewinde (G 3/4\") für direkten Anschluss an Gewindestutzen von Kesseln oder Verteilern. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. EPDM-O-Ring.",
            fr: "Adaptateur monobloc à sertir avec filetage mâle, V-profil. Construction monobloc — raccord à sertir + filetage mâle (G 3/4\") pour connexion directe aux sorties filetées de chaudières ou collecteurs. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. O-ring EPDM."
        },
        category: "adaptors", diameter: "22mm × 3/4\"", price: 6.50, image: "images/adaptor-male-onepiece.png"
    },
    {
        id: 24,
        name: { cz: "Lisovací přechodka s přírubovou maticí (nerez, EPDM těsnění)", en: "Press-fit adaptor with union nut, stainless steel, EPDM flat seal", de: "Pressfitting-Übergangsverschraubung Edelstahl mit EPDM-Flachdichtung", fr: "Adaptateur à sertir avec raccord union inox et joint EPDM" },
        description: {
            cz: "Lisovací přechodka s nerezovou přírubovou maticí a EPDM plochým těsněním, V-profil. Lisovací spoj + přírubový spoj. Materiál tvarovky: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Matice z nerezové oceli zaručuje korozivzdornost. Pro kotly, měřiče tepla nebo termostatické ventily.",
            en: "Press-fit adaptor with stainless steel union nut and EPDM flat seal, V-profile. Press connection + union connection. Fitting material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. Stainless steel nut ensures corrosion resistance. For boilers, heat meters or thermostatic valves.",
            de: "Pressfitting-Übergangsverschraubung mit Edelstahl-Überwurfmutter und EPDM-Flachdichtung, V-Profil. Pressverbindung + Verschraubung. Fittingmaterial: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Edelstahlmutter gewährleistet Korrosionsbeständigkeit. Für Kessel, Wärmemengenzähler oder Thermostatventile.",
            fr: "Adaptateur à sertir avec raccord union inox et joint plat EPDM, V-profil. Raccord à sertir + raccord union. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Écrou inox résistant à la corrosion. Pour chaudières, compteurs de chaleur ou vannes thermostatiques."
        },
        category: "adaptors", diameter: "22mm × 3/4\"", price: 8.90, image: "images/adaptor-union.png"
    }
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function getProductsByCategory(category) {
    if (!category || category === 'all') return products;
    return products.filter(p => p.category === category);
}

function getProductById(id) {
    return products.find(p => p.id === parseInt(id));
}

function getProductName(product) {
    if (typeof product.name === 'object' && product.name !== null) {
        const lang = typeof getCurrentLang === 'function' ? getCurrentLang() : 'en';
        return product.name[lang] || product.name.en || product.name.fr || Object.values(product.name)[0];
    }
    return product.name;
}

function getProductDescription(product) {
    if (typeof product.description === 'object' && product.description !== null) {
        const lang = typeof getCurrentLang === 'function' ? getCurrentLang() : 'en';
        return product.description[lang] || product.description.en || '';
    }
    return product.description || '';
}

// ── Render product grid ───────────────────────────────────────────────────────

function renderProducts(productList, containerId = 'products-grid') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = productList.map(product => `
        <div class="product-card" data-category="${product.category}" onclick="location.href='info/index.html?id=${product.id}'">
            <div class="product-image">
                ${product.image
                    ? `<img src="${product.image}" alt="${getProductName(product)}">`
                    : `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="8" width="20" height="8" rx="2"/><line x1="2" y1="12" x2="0" y2="12"/><line x1="22" y1="12" x2="24" y2="12"/></svg>`}
            </div>
            <div class="product-info">
                <h3>${getProductName(product)}</h3>
                <p class="category">${getCategoryNameTranslated(product.category)}</p>
                <p class="diameter">Ø ${product.diameter}</p>
                <p class="price">${formatPrice(product.price)} <small>${t('inclVat')}</small></p>
                <div class="product-actions">
                    <button class="btn btn-primary btn-small" onclick="event.stopPropagation(); addToCart(${product.id})">
                        ${t('addToCart')}
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ── Products page init ────────────────────────────────────────────────────────

function initProductsPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('cat');

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        if (btn.dataset.category === (category || 'all')) btn.classList.add('active');

        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.dataset.category;
            renderProducts(getProductsByCategory(cat));
            const url = new URL(window.location);
            if (cat && cat !== 'all') { url.searchParams.set('cat', cat); } else { url.searchParams.delete('cat'); }
            window.history.pushState({}, '', url);
        });
    });

    renderProducts(getProductsByCategory(category));
}

// ── Exports ───────────────────────────────────────────────────────────────────
window.products = products;
window.getProductById = getProductById;
window.getProductName = getProductName;
window.getProductDescription = getProductDescription;
window.initProductsPage = initProductsPage;
