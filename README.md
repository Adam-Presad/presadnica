# Presadnica — web stranica

Statična jednostranična web stranica (HTML/CSS/JS, bez build alata).

## Pokretanje

Otvorite `index.html` izravno u pregledniku, ili poslužite mapu bilo kojim static serverom (npr. `npx serve .`).

## Što treba zamijeniti prije objave

Sva mjesta koja čekaju stvarne podatke označena su `<!-- TODO -->` komentarima u `index.html`:

1. **Fotografije koje još nedostaju** — `.hero-slide` (5 komada, hero pozadina) i `.offer-card .placeholder-img` (6 komada, usluge) su gotove, stvarne fotografije. Još su placeholderi:
   - `.about-portrait` — fotografija vlasnika i sina (Krešimir i Adam).
   - `.carousel-item` (6 komada) — fotografije prijašnjih projekata u galeriji.
   - Dodajte sliku u `images/`, pa u `index.html` zamijenite `<div class="placeholder-img ...">...</div>` (ili `<div class="carousel-item ...">`) s `<img src="images/vasa-slika.jpg" alt="Opis slike" class="placeholder-img">`. Za velike izvorne fotografije preporuka je prvo ih smanjiti za web (vidi napomenu ispod).

### Optimizacija fotografija

Fotografije izravno s telefona/fotoaparata (obično par tisuća piksela širine, nekoliko MB) prije korištenja treba smanjiti da stranica ostane brza. Primjer naredbe (koristi `ffmpeg`, instaliran na `C:\ffmpeg\bin\ffmpeg.exe`):

```
ffmpeg -i "izvorna-slika.jpg" -vf "scale=1920:-1" -q:v 4 "images/hero-6.jpg"
```

Za portretne fotografije koje idu u širi/niži okvir (npr. hero pozadina), skalirajte po visini umjesto širini (`scale=-2:1600`) da izrezivanje (`object-fit: cover` / `background-size: cover`) ne izreže previše sadržaja.

## Struktura

```
index.html      sadržaj i struktura stranice
css/style.css   sav dizajn (boje, tipografija, layout, responsive)
js/script.js    mobilni izbornik, scroll-reveal animacije, carousel, potvrda forme
images/logo.png logotip (kopiran iz 01_Vizuali)
```

## Boje i fontovi (za lakše buduće izmjene)

Sve boje definirane su kao CSS varijable na vrhu `css/style.css` (`:root`), preuzete iz postojećeg logotipa. Naslovi koriste "Cormorant Garamond", tekst "Inter" (Google Fonts, učitava se u `index.html`).
