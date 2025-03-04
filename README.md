# Planitapp Dokumentáció

Ez a dokumentáció [Next.js](https://nextjs.org/) és [Nextra](https://nextra.site/) segítségével készült.
A dokumentáció elérhető a [docs.planitapp.hu](https://docs.planitapp.hu/) webcímen.

## Főbb jellemzők

- Markdown alapú dokumentáció
- Testre szabható téma
- Beépített keresés
- Kódblokkok kiemelése
- Reszponzív design

## Fejlesztői környezet

```bash
# függőségek telepítése
bun install

# fejlesztői szerver indítása
bun run dev
```

A dokumentáció ezután megtekinthető a [http://localhost:3000](http://localhost:3000) oldalon.

## Dokumentáció szerkezete

A fő elemek az `/app` mappában elérhetőek, míg a dokumentáció oldalai a `/content` mappán belül. Az oldalak elosztásáért a `_meta.js` fájlok felelősek.
