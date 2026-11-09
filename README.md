# ALDI VST · Wilsdruff

Aplikacja PWA do wyszukiwania sklepów VST, nawigacji Google Maps, mapy i Dispo.

**Autor: Cichocki Tomasz**

## Funkcje

- Ekran startowy ALDI → przycisk **Start**
- Języki: **PL / DE / UK** (ukraiński)
- Szukanie po VST, mieście, ulicy
- Nawigacja Google Maps, mapa (Leaflet + OSM)
- Ulubione, zarządzanie sklepami
- Dispo: ALDI, Hühndorfer Höhe 4, 01723 Wilsdruff · tel. 035204 769320
- Import/Eksport: JSON, CSV, XLSX, **PDF**
- **15 motywów** (Aero, Vista, XP, macOS, Dark + warianty Vista/Aero)
- Baza: **127 lokalizacji** (w tym punkty 129–135)

## GitHub Pages

1. Utwórz repozytorium (np. `aldi`)
2. Wrzuć **wszystkie pliki z tego folderu** do roota repo (`index.html` na górze)
3. **Settings → Pages → Deploy from branch → `main` → `/ (root)` → Save**
4. Po 1–2 min:
   - https://USER.github.io/REPO/
   - https://USER.github.io/REPO/index.html

## APK (PWA Builder)

1. Wejdź na https://www.pwabuilder.com
2. Wklej adres działającej strony, np.  
   `https://cichy78.github.io/aldi/`  
   lub  
   `https://cichy78.github.io/aldi/index.html`
3. **Package → Android**
4. **Signing key: New** (ważne – nie „None”)
5. Pobierz pakiet, rozpakuj, zainstaluj plik **`.apk`** (signed)
6. Na telefonie: **Ustawienia → Instaluj nieznane aplikacje** dla Pliki/Chrome
7. Jeśli „Aplikacja nie została zainstalowana”:
   - odinstaluj starą wersję ALDI VST
   - zrestartuj telefon
   - zainstaluj signed APK ponownie

### Alternatywa bez APK
Chrome na telefonie → strona aplikacji → menu **⋮ → Zainstaluj aplikację**

## Pliki

| Plik | Opis |
|------|------|
| `index.html` | Aplikacja |
| `manifest.json` | PWA |
| `sw.js` | Service Worker (offline) |
| `icon-192.png` / `icon-512.png` | Ikony |
| `stores_data.json` | Baza sklepów |
| `.nojekyll` | GitHub Pages |

## Aktualizacja bazy

Po zmianie `stores_data.json` zaktualizuj też tablicę `INITIAL` w `index.html` (lub wgraj nowy `index.html` z paczki).
