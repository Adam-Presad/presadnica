# Presadnica — web stranica

Statična jednostranična web stranica (HTML/CSS/JS, bez build alata).

## Pokretanje

Otvorite `index.html` izravno u pregledniku, ili poslužite mapu bilo kojim static serverom (npr. `npx serve .`).

## Što treba zamijeniti prije objave

Sva mjesta koja čekaju stvarne podatke označena su `<!-- TODO -->` komentarima u `index.html`:

1. **Fotografije** — trenutno su gradijentni placeholderi (klase `.ph-1`–`.ph-6`, `.placeholder-img`) na četiri mjesta:
   - `.hero-slide` (4 komada) — pozadinske fotografije u rotirajućem slideshowu na vrhu stranice.
   - `.about-portrait` — fotografija vlasnika i sina (Krešimir i Adam).
   - `.offer-card .placeholder-img` (6 komada) — po jedna fotografija za svaku uslugu.
   - `.carousel-item` (6 komada) — fotografije prijašnjih projekata u galeriji.
   - Dodajte sliku u `images/` (preporučeno: širina 1200px, format `.jpg` ili `.webp`, komprimirano za web), zamijenite `<div class="placeholder-img ph-1">...</div>` s `<img src="images/vasa-slika.jpg" alt="Opis slike" class="placeholder-img">` (ili dodajte `background-image` u CSS ako želite zadržati `div`).
2. **Formspree ID** — forma šalje na `https://formspree.io/f/YOUR_FORM_ID`. Registrirajte se besplatno na [formspree.io](https://formspree.io), kreirajte formu i zamijenite `YOUR_FORM_ID` svojim ID-jem u `index.html` (`<form ... action="...">`).
3. **Društvene mreže** — poveznice na Instagram/Facebook u footeru trenutno vode na `#`.

## Struktura

```
index.html      sadržaj i struktura stranice
css/style.css   sav dizajn (boje, tipografija, layout, responsive)
js/script.js    mobilni izbornik, scroll-reveal animacije, carousel, potvrda forme
images/logo.png logotip (kopiran iz 01_Vizuali)
```

## Boje i fontovi (za lakše buduće izmjene)

Sve boje definirane su kao CSS varijable na vrhu `css/style.css` (`:root`), preuzete iz postojećeg logotipa. Naslovi koriste "Cormorant Garamond", tekst "Inter" (Google Fonts, učitava se u `index.html`).
