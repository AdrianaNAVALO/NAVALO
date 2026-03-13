// Product data
const products = [

    // ── Koleno 90° FF — 22mm → 28mm ───────────────────────────────────────────
    {
        id: 6,
        name: { cz: "Koleno 90° FF", en: "Elbow 90° FF", de: "Bogen 90° FF", fr: "Coude 90° FF" },
        description: {
            cz: "Lisovací koleno 90° FF, V-profil. Oba konce lisovací — bez závitu. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Těsnění: EPDM O-kroužek, -10 °C až +110 °C. Montáž bez pájení.",
            en: "90° press-fit elbow FF, V-profile. Both ends press-fit, no thread. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. Seal: EPDM O-ring, -10°C to +110°C.",
            de: "90°-Pressfitting-Bogen FF, V-Profil. Beide Enden als Pressanschluss, kein Gewinde. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Dichtung: EPDM-O-Ring, -10 °C bis +110 °C.",
            fr: "Coude 90° à sertir FF, V-profil. Les deux extrémités à sertir, sans filetage. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Joint : O-ring EPDM, -10°C à +110°C."
        },
        category: "coudes", diameter: "22mm", price: 2.28, image: "images/coude-90-ff.png"
    },
    {
        id: 1,
        name: { cz: "Koleno 90° FF", en: "Elbow 90° FF", de: "Bogen 90° FF", fr: "Coude 90° FF" },
        description: {
            cz: "Lisovací koleno 90° FF, V-profil. Oba konce lisovací — bez závitu. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Těsnění: EPDM O-kroužek, -10 °C až +110 °C. Montáž bez pájení.",
            en: "90° press-fit elbow FF, V-profile. Both ends press-fit, no thread. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. Seal: EPDM O-ring, -10°C to +110°C.",
            de: "90°-Pressfitting-Bogen FF, V-Profil. Beide Enden als Pressanschluss, kein Gewinde. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Dichtung: EPDM-O-Ring, -10 °C bis +110 °C.",
            fr: "Coude 90° à sertir FF, V-profil. Les deux extrémités à sertir, sans filetage. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Joint : O-ring EPDM, -10°C à +110°C."
        },
        category: "coudes", diameter: "28mm", price: 2.67, image: "images/coude-90-ff.png"
    },

    // ── Koleno 90° MF — 22mm → 28mm ───────────────────────────────────────────
    {
        id: 7,
        name: { cz: "Koleno 90° MF", en: "Elbow 90° MF", de: "Bogen 90° MF", fr: "Coude 90° MF" },
        description: {
            cz: "Lisovací koleno 90° MF, V-profil. Jeden lisovací spoj + vnější závit. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Těsnění: EPDM O-kroužek, -10 °C až +110 °C.",
            en: "90° press-fit elbow MF, V-profile. One press connection + male thread. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. Seal: EPDM O-ring, -10°C to +110°C.",
            de: "90°-Pressfitting-Bogen MF, V-Profil. Ein Pressanschluss + Außengewinde. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Dichtung: EPDM-O-Ring, -10 °C bis +110 °C.",
            fr: "Coude 90° à sertir MF, V-profil. Un raccord à sertir + filetage mâle. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Joint : O-ring EPDM, -10°C à +110°C."
        },
        category: "coudes", diameter: "22mm", price: 2.28, image: "images/coude-90-mf.png"
    },
    {
        id: 2,
        name: { cz: "Koleno 90° MF", en: "Elbow 90° MF", de: "Bogen 90° MF", fr: "Coude 90° MF" },
        description: {
            cz: "Lisovací koleno 90° MF, V-profil. Jeden lisovací spoj + vnější závit. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Těsnění: EPDM O-kroužek, -10 °C až +110 °C.",
            en: "90° press-fit elbow MF, V-profile. One press connection + male thread. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. Seal: EPDM O-ring, -10°C to +110°C.",
            de: "90°-Pressfitting-Bogen MF, V-Profil. Ein Pressanschluss + Außengewinde. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Dichtung: EPDM-O-Ring, -10 °C bis +110 °C.",
            fr: "Coude 90° à sertir MF, V-profil. Un raccord à sertir + filetage mâle. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Joint : O-ring EPDM, -10°C à +110°C."
        },
        category: "coudes", diameter: "28mm", price: 2.67, image: "images/coude-90-mf.png"
    },

    // ── Koleno 45° FF — 22mm → 28mm ───────────────────────────────────────────
    {
        id: 8,
        name: { cz: "Koleno 45° FF", en: "Elbow 45° FF", de: "Bogen 45° FF", fr: "Coude 45° FF" },
        description: {
            cz: "Lisovací koleno 45° FF, V-profil. Oba konce lisovací — bez závitu. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Těsnění: EPDM O-kroužek, -10 °C až +110 °C.",
            en: "45° press-fit elbow FF, V-profile. Both ends press-fit, no thread. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. Seal: EPDM O-ring, -10°C to +110°C.",
            de: "45°-Pressfitting-Bogen FF, V-Profil. Beide Enden als Pressanschluss, kein Gewinde. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Dichtung: EPDM-O-Ring, -10 °C bis +110 °C.",
            fr: "Coude 45° à sertir FF, V-profil. Les deux extrémités à sertir, sans filetage. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Joint : O-ring EPDM, -10°C à +110°C."
        },
        category: "coudes", diameter: "22mm", price: 2.18, image: "images/coude-45-ff.png"
    },
    {
        id: 3,
        name: { cz: "Koleno 45° FF", en: "Elbow 45° FF", de: "Bogen 45° FF", fr: "Coude 45° FF" },
        description: {
            cz: "Lisovací koleno 45° FF, V-profil. Oba konce lisovací — bez závitu. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Těsnění: EPDM O-kroužek, -10 °C až +110 °C.",
            en: "45° press-fit elbow FF, V-profile. Both ends press-fit, no thread. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. Seal: EPDM O-ring, -10°C to +110°C.",
            de: "45°-Pressfitting-Bogen FF, V-Profil. Beide Enden als Pressanschluss, kein Gewinde. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Dichtung: EPDM-O-Ring, -10 °C bis +110 °C.",
            fr: "Coude 45° à sertir FF, V-profil. Les deux extrémités à sertir, sans filetage. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Joint : O-ring EPDM, -10°C à +110°C."
        },
        category: "coudes", diameter: "28mm", price: 2.65, image: "images/coude-45-ff.png"
    },

    // ── Koleno 45° MF — 22mm → 28mm ───────────────────────────────────────────
    {
        id: 9,
        name: { cz: "Koleno 45° MF", en: "Elbow 45° MF", de: "Bogen 45° MF", fr: "Coude 45° MF" },
        description: {
            cz: "Lisovací koleno 45° MF, V-profil. Jeden lisovací spoj + vnější závit. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Těsnění: EPDM O-kroužek, -10 °C až +110 °C.",
            en: "45° press-fit elbow MF, V-profile. One press connection + male thread. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. Seal: EPDM O-ring, -10°C to +110°C.",
            de: "45°-Pressfitting-Bogen MF, V-Profil. Ein Pressanschluss + Außengewinde. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Dichtung: EPDM-O-Ring, -10 °C bis +110 °C.",
            fr: "Coude 45° à sertir MF, V-profil. Un raccord à sertir + filetage mâle. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Joint : O-ring EPDM, -10°C à +110°C."
        },
        category: "coudes", diameter: "22mm", price: 2.18, image: "images/coude-45-mf.png"
    },
    {
        id: 4,
        name: { cz: "Koleno 45° MF", en: "Elbow 45° MF", de: "Bogen 45° MF", fr: "Coude 45° MF" },
        description: {
            cz: "Lisovací koleno 45° MF, V-profil. Jeden lisovací spoj + vnější závit. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. Těsnění: EPDM O-kroužek, -10 °C až +110 °C.",
            en: "45° press-fit elbow MF, V-profile. One press connection + male thread. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. Seal: EPDM O-ring, -10°C to +110°C.",
            de: "45°-Pressfitting-Bogen MF, V-Profil. Ein Pressanschluss + Außengewinde. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. Dichtung: EPDM-O-Ring, -10 °C bis +110 °C.",
            fr: "Coude 45° à sertir MF, V-profil. Un raccord à sertir + filetage mâle. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. Joint : O-ring EPDM, -10°C à +110°C."
        },
        category: "coudes", diameter: "28mm", price: 2.65, image: "images/coude-45-mf.png"
    },

    // ── Dos d'âne (jen 28mm) ──────────────────────────────────────────────────
    {
        id: 5,
        name: { cz: "Esovité koleno", en: "S-bend", de: "S-Bogen", fr: "Dos d'âne" },
        description: {
            cz: "Lisovací esovité koleno (dos d'âne), V-profil. Pro přemostění souběžných potrubních tras — oba konce lisovací. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. EPDM O-kroužek, -10 °C až +110 °C.",
            en: "Press-fit S-bend (dos d'âne), V-profile. For bridging parallel pipe runs — both ends press-fit. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. EPDM O-ring, -10°C to +110°C.",
            de: "Pressfitting-S-Bogen (Dos d'âne), V-Profil. Für die Überbrückung paralleler Rohrleitungen — beide Enden Pressanschluss. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. EPDM-O-Ring, -10 °C bis +110 °C.",
            fr: "Raccord dos d'âne à sertir, V-profil. Pour le croisement de canalisations parallèles — les deux extrémités à sertir. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. O-ring EPDM, -10°C à +110°C."
        },
        category: "coudes", diameter: "28mm", price: 3.68, image: "images/dos-ane.png"
    },

    // ── Manchon coulissant (jen 28mm) ─────────────────────────────────────────
    {
        id: 10,
        name: { cz: "Posuvná spojka", en: "Sliding sleeve", de: "Schiebemuffe", fr: "Manchon coulissant" },
        description: {
            cz: "Lisovací posuvná spojka (manchon coulissant), V-profil. Umožňuje podélný posun pro snadnou montáž v náročných podmínkách. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. EPDM O-kroužek, -10 °C až +110 °C.",
            en: "Press-fit sliding sleeve (manchon coulissant), V-profile. Allows longitudinal movement for easy installation in tight spaces. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. EPDM O-ring, -10°C to +110°C.",
            de: "Pressfitting-Schiebemuffe, V-Profil. Ermöglicht Längsverschiebung für einfache Montage unter schwierigen Bedingungen. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. EPDM-O-Ring, -10 °C bis +110 °C.",
            fr: "Manchon coulissant à sertir, V-profil. Permet un déplacement longitudinal pour faciliter la pose dans des espaces difficiles. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. O-ring EPDM, -10°C à +110°C."
        },
        category: "manchons", diameter: "28mm", price: 2.44, image: "images/manchon-coulissant.png"
    },

    // ── T-kusy / Tees ─────────────────────────────────────────────────────────
    {
        id: 11,
        name: { cz: "T-kus rovný", en: "Equal tee", de: "T-Stück gleich", fr: "Té égal" },
        description: {
            cz: "Rovný lisovací T-kus, V-profil. Tři lisovací spoje stejného průměru pro větvení potrubí. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. EPDM O-kroužek, -10 °C až +110 °C.",
            en: "Press-fit equal tee, V-profile. Three press connections of the same diameter for branching. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. EPDM O-ring, -10°C to +110°C.",
            de: "Pressfitting-T-Stück gleich, V-Profil. Drei Pressanschlüsse gleichen Durchmessers für Rohrleitungsabzweigungen. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. EPDM-O-Ring, -10 °C bis +110 °C.",
            fr: "Té égal à sertir, V-profil. Trois raccords du même diamètre pour les branchements. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. O-ring EPDM, -10°C à +110°C."
        },
        category: "tes", diameter: "28mm", price: 3.39, image: "images/te-egal.png"
    },
    {
        id: 12,
        name: { cz: "T-kus redukovaný", en: "Reducing tee", de: "Reduzier-T-Stück", fr: "Té réduit" },
        description: {
            cz: "Redukovaný lisovací T-kus 28×15×28, V-profil. Průchozí větev 28 mm + redukovaná odbočka 15 mm. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. EPDM O-kroužek, -10 °C až +110 °C.",
            en: "Press-fit reducing tee 28×15×28, V-profile. 28mm main run + 15mm reduced branch. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. EPDM O-ring, -10°C to +110°C.",
            de: "Pressfitting-T-Stück 28×15×28, V-Profil. 28-mm-Durchgang + 15-mm-Reduzierabzweig. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. EPDM-O-Ring, -10 °C bis +110 °C.",
            fr: "Té 28×15×28 à sertir, V-profil. Passage principal 28 mm + branchement réduit 15 mm. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. O-ring EPDM, -10°C à +110°C."
        },
        category: "tes", diameter: "28×15×28mm", price: 2.81, image: "images/te-28x15x28.png"
    },
    {
        id: 13,
        name: { cz: "T-kus se závitem", en: "Tee with thread", de: "T-Stück mit Gewinde", fr: "Té fileté" },
        description: {
            cz: "Lisovací T-kus s závitovým vývodem, V-profil. Dva lisovací spoje 28 mm + odbočka G 1/2\" vnitřní závit. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. EPDM O-kroužek, -10 °C až +110 °C.",
            en: "Press-fit tee with threaded branch, V-profile. Two 28mm press connections + G 1/2\" female thread branch. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. EPDM O-ring, -10°C to +110°C.",
            de: "Pressfitting-T-Stück mit Gewindeanschluss G 1/2\", V-Profil. Zwei 28-mm-Pressanschlüsse + Innengewinde-Abzweig. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. EPDM-O-Ring, -10 °C bis +110 °C.",
            fr: "Té 28×½×28 à sertir, V-profil. Deux raccords à sertir 28 mm + sortie filetée femelle G 1/2\". Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. O-ring EPDM, -10°C à +110°C."
        },
        category: "tes", diameter: "28×½×28mm", price: 3.80, image: "images/te-28x1-2x28.png"
    },

    // ── Raccord 2 pièces — 22mm → 28mm ───────────────────────────────────────
    {
        id: 17,
        name: { cz: "Přípojka 2-dílná", en: "2-piece union", de: "2-teilige Verschraubung", fr: "Raccord 2 pièces" },
        description: {
            cz: "Dvoudílná lisovací přípojka s vnitřním závitem G 1\" a plochým těsněním, V-profil. Lisovací spoj 22 mm + vnitřní závit G 1\". Snímatelná pro servis. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. EPDM, -10 °C až +110 °C.",
            en: "2-piece press-fit connector with G 1\" female thread and flat seal, V-profile. 22mm press connection + G 1\" female thread. Removable for maintenance. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. EPDM, -10°C to +110°C.",
            de: "2-teilige Pressverbindung mit G 1\" Innengewinde und Flachdichtung, V-Profil. 22-mm-Pressanschluss + G 1\" Innengewinde. Lösbar für Wartungsarbeiten. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. EPDM, -10 °C bis +110 °C.",
            fr: "Raccord 2 pièces à sertir avec filetage femelle G 1\" et joint plat, V-profil. Raccord à sertir 22 mm + filetage femelle G 1\". Démontable pour maintenance. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. EPDM, -10°C à +110°C."
        },
        category: "adaptors", diameter: "22mm × 1\"", price: 4.61, image: "images/raccord-2-pieces.png"
    },
    {
        id: 14,
        name: { cz: "Přípojka 2-dílná", en: "2-piece union", de: "2-teilige Verschraubung", fr: "Raccord 2 pièces" },
        description: {
            cz: "Dvoudílná lisovací přípojka s vnitřním závitem G 1\" a plochým těsněním, V-profil. Lisovací spoj 28 mm + vnitřní závit G 1\". Snímatelná pro servis. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. EPDM, -10 °C až +110 °C.",
            en: "2-piece press-fit connector with G 1\" female thread and flat seal, V-profile. 28mm press connection + G 1\" female thread. Removable for maintenance. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. EPDM, -10°C to +110°C.",
            de: "2-teilige Pressverbindung mit G 1\" Innengewinde und Flachdichtung, V-Profil. 28-mm-Pressanschluss + G 1\" Innengewinde. Lösbar für Wartungsarbeiten. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. EPDM, -10 °C bis +110 °C.",
            fr: "Raccord 2 pièces à sertir avec filetage femelle G 1\" et joint plat, V-profil. Raccord à sertir 28 mm + filetage femelle G 1\". Démontable pour maintenance. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. EPDM, -10°C à +110°C."
        },
        category: "adaptors", diameter: "28mm × 1\"", price: 4.61, image: "images/raccord-2-pieces.png"
    },

    // ── Přechod M — 22mm → 28mm ──────────────────────────────────────────────
    {
        id: 18,
        name: { cz: "Přechod M", en: "Transition M", de: "Übergang M", fr: "Transition M" },
        description: {
            cz: "Lisovací přechod s vnějším závitem G 1\", V-profil. Lisovací spoj 22 mm + vnější závit G 1\". Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. EPDM O-kroužek.",
            en: "Press-fit transition with G 1\" male thread, V-profile. 22mm press connection + G 1\" male thread. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. EPDM O-ring.",
            de: "Pressfitting-Übergang mit G 1\" Außengewinde, V-Profil. 22-mm-Pressanschluss + G 1\" Außengewinde. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. EPDM-O-Ring.",
            fr: "Transition M à sertir avec filetage G 1\", V-profil. Raccord à sertir 22 mm + filetage mâle G 1\". Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. O-ring EPDM."
        },
        category: "adaptors", diameter: "22mm × 1\"", price: 3.80, image: "images/transition-m.png"
    },
    {
        id: 15,
        name: { cz: "Přechod M", en: "Transition M", de: "Übergang M", fr: "Transition M" },
        description: {
            cz: "Lisovací přechod s vnějším závitem G 1\", V-profil. Lisovací spoj 28 mm + vnější závit G 1\" pro přímé napojení na závitová hrdla kotlů nebo rozdělovačů. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. EPDM O-kroužek.",
            en: "Press-fit transition with G 1\" male thread, V-profile. 28mm press connection + G 1\" male thread for direct connection to boiler or manifold outlets. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. EPDM O-ring.",
            de: "Pressfitting-Übergang mit G 1\" Außengewinde, V-Profil. 28-mm-Pressanschluss + G 1\" Außengewinde für direkten Anschluss an Kessel- oder Verteilerstutzen. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. EPDM-O-Ring.",
            fr: "Transition M à sertir avec filetage G 1\", V-profil. Raccord à sertir 28 mm + filetage mâle G 1\" pour connexion directe aux sorties de chaudière ou collecteur. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. O-ring EPDM."
        },
        category: "adaptors", diameter: "28mm × 1\"", price: 3.80, image: "images/transition-m.png"
    },

    // ── Přechod F (jen 28mm) ──────────────────────────────────────────────────
    {
        id: 16,
        name: { cz: "Přechod F", en: "Transition F", de: "Übergang F", fr: "Transition F" },
        description: {
            cz: "Lisovací přechod s vnitřním závitem G 1\", V-profil. Lisovací spoj 28 mm + vnitřní závit G 1\" pro napojení na závitové armatury. Materiál: uhlíková ocel E195 č. 1.0034 (UNI EN 10305-3), pozinkování ≥ 7,5 μm. EPDM O-kroužek.",
            en: "Press-fit transition with G 1\" female thread, V-profile. 28mm press connection + G 1\" female thread for connecting to threaded valves. Material: carbon steel E195 n. 1.0034 (UNI EN 10305-3), zinc coated ≥ 7.5 μm. EPDM O-ring.",
            de: "Pressfitting-Übergang mit G 1\" Innengewinde, V-Profil. 28-mm-Pressanschluss + G 1\" Innengewinde für den Anschluss an Gewinde-Armaturen. Material: Kohlenstoffstahl E195 n. 1.0034 (UNI EN 10305-3), Zinkbeschichtung ≥ 7,5 μm. EPDM-O-Ring.",
            fr: "Transition F à sertir avec filetage G 1\", V-profil. Raccord à sertir 28 mm + filetage femelle G 1\" pour raccordement aux vannes filetées. Matériau : acier carbone E195 n. 1.0034 (UNI EN 10305-3), galvanisé ≥ 7,5 μm. O-ring EPDM."
        },
        category: "adaptors", diameter: "28mm × 1\"", price: 3.80, image: "images/transition-f.png"
    },

    // ── Vanne / Kohout ────────────────────────────────────────────────────────
    {
        id: 19,
        name: { cz: "Kulový kohout", en: "Ball valve", de: "Kugelhahn", fr: "Vanne à sertir" },
        description: {
            cz: "Lisovací kulový kohout 28 mm, V-profil. Oba konce lisovací — rychlá montáž bez pájení. Kulový uzávěr pro přímé uzavírání potrubního úseku. Materiál tělesa: uhlíková ocel, pozinkování. EPDM těsnění, -10 °C až +110 °C.",
            en: "Press-fit ball valve 28mm, V-profile. Both ends press-fit for quick installation without soldering. Ball shut-off for direct isolation. Body: carbon steel, zinc coated. EPDM seal, -10°C to +110°C.",
            de: "Pressfitting-Kugelhahn 28 mm, V-Profil. Beide Enden als Pressanschluss für schnelle Montage ohne Löten. Kugelabsperrung für direktes Absperren. Gehäuse: Kohlenstoffstahl, verzinkt. EPDM-Dichtung, -10 °C bis +110 °C.",
            fr: "Vanne à sertir 28 mm, V-profil. Les deux extrémités à sertir pour une pose rapide sans soudure. Robinet à boisseau sphérique pour coupure directe. Corps : acier carbone zingué. Joint EPDM, -10°C à +110°C."
        },
        category: "vannes", diameter: "28mm", price: 14.04, image: "images/vanne.png"
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
