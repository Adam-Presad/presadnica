// Language toggle (HR / EN)
const translations = {
  hr: {
    "meta.title": "Presadnica — Vrtlarstvo",
    "meta.description":
      "Presadnica — vrtlarstvo u Zagrebu. Košnja, orezivanje, sadnja, održavanje i dizajn vrta uz maksimalnu stručnost i ugodno partnerstvo.",
    "navToggle.aria": "Otvori izbornik",
    "nav.about": "O nama",
    "nav.offer": "Ponuda",
    "nav.gallery": "Galerija",
    "nav.contact": "Kontakt",
    "lang.switchAria": "Odabir jezika",
    "hero.title": "Ostvarite svoj savršen vrt",
    "hero.subtitle":
      "Presadnica će vam pomoći realizirati vaš idealan vrt uz maksimalnu stručnost i ugodno partnerstvo.",
    "hero.ctaOffer": "Pogledajte ponudu",
    "hero.ctaContact": "Pošaljite upit",
    "hero.scrollAria": "Pomakni se prema dolje",
    "about.kicker": "O nama",
    "about.title": "Obiteljska priča nastala 2010. godine",
    "about.p1":
      "Presadnica je hortikulturna kompanija koja posluje od 2010. godine kada ju je u Zagrebu osnovao Krešimir Gašpar. Danas u Presadnici s njim radi i njegov sin Adam. Misija Presadnice je svaki vrt istaknuti u najboljem svjetlu, pružajući zeleni dom po želji njegovog vlasnika. Od održavanja vrta poput orezivanja i košnje, do projekata sađenja, ideacije i stvaranja novoga vrta, Presadnica vam stoji na usluzi.",
    "about.p2": "Nudimo suradnju na dulje vremenske etape i partnerstva ili jednokratne poslove.",
    "placeholder.comingSoon": "Uskoro dostupno",
    "offer.kicker": "Ponuda",
    "offer.title": "Usluge koje nudimo",
    "offer.card1.alt": "Košnja trave",
    "offer.card1.title": "Košnja trave",
    "offer.card1.desc": "Uređivanje travnjaka ili uklanjanje jakog i visokog rasta trave i/ili raslinja.",
    "offer.card2.alt": "Orezivanje bilja",
    "offer.card2.title": "Orezivanje bilja",
    "offer.card2.desc": "Oblikovanje bilja radi izgleda te zdravlja bilja.",
    "offer.card3.alt": "Sadnja",
    "offer.card3.title": "Sadnja",
    "offer.card3.desc": "Besprijekorna integracija novog bilja u Vaš vrt.",
    "offer.card4.alt": "Održavanje vrta",
    "offer.card4.title": "Održavanje vrta",
    "offer.card4.desc": "Usluge grabljanja, raspuhivanja, plijevljenja i drugih poslova održavanja.",
    "offer.card5.alt": "Dizajn novog vrta",
    "offer.card5.title": "Dizajn novog vrta",
    "offer.card5.desc": "Osmišljavanje tlocrta, izgleda i biljnog sastava vrta, uz 3D sliku.",
    "offer.card6.alt": "Realizacija novog vrta",
    "offer.card6.title": "Realizacija novog vrta",
    "offer.card6.desc": "Ostvarivanje zamišljenog dizajna vrta.",
    "gallery.kicker": "Galerija",
    "gallery.title": "Prijašnji projekti",
    "gallery.prevAria": "Prethodni projekt",
    "gallery.nextAria": "Sljedeći projekt",
    "contact.kicker": "Kontakt",
    "contact.title": "Javite nam se",
    "contact.p": "Imate pitanje o ponudi ili želite dogovoriti posjet? Pošaljite nam poruku ili nas kontaktirajte izravno.",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Telefon",
    "contact.formName": "Ime i prezime",
    "contact.formEmail": "Email",
    "contact.formMessage": "Poruka",
    "contact.formSubmit": "Pošaljite poruku",
    "contact.formSuccess": "Hvala! Vaša poruka je poslana.",
    "contact.formError":
      "Došlo je do greške. Pokušajte ponovno ili nas kontaktirajte izravno na info@presadnica.com.",
    "footer.rights": "Presadnica. Sva prava pridržana.",
  },
  en: {
    "meta.title": "Presadnica — Garden Care",
    "meta.description":
      "Presadnica — garden care in Zagreb. Mowing, pruning, planting, maintenance and garden design with expert care and a personal touch.",
    "navToggle.aria": "Open menu",
    "nav.about": "About",
    "nav.offer": "Services",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "lang.switchAria": "Language selector",
    "hero.title": "Create your perfect garden",
    "hero.subtitle":
      "Presadnica will help you bring your ideal garden to life with expert care and a personal touch.",
    "hero.ctaOffer": "View our services",
    "hero.ctaContact": "Get in touch",
    "hero.scrollAria": "Scroll down",
    "about.kicker": "About us",
    "about.title": "A family story that began in 2010",
    "about.p1":
      "Presadnica is a horticulture company that has been operating since 2010, when it was founded in Zagreb by Krešimir Gašpar. Today his son Adam works alongside him at Presadnica. Our mission is to put every garden in its best light, giving its owner the green home they want. From garden maintenance like pruning and mowing, to planting projects, design and building new gardens, Presadnica is here for you.",
    "about.p2": "We offer both long-term partnerships and one-off projects.",
    "placeholder.comingSoon": "Coming soon",
    "offer.kicker": "Services",
    "offer.title": "What we offer",
    "offer.card1.alt": "Lawn mowing",
    "offer.card1.title": "Lawn mowing",
    "offer.card1.desc": "Lawn upkeep or clearing overgrown grass and vegetation.",
    "offer.card2.alt": "Plant pruning",
    "offer.card2.title": "Plant pruning",
    "offer.card2.desc": "Shaping plants for appearance and plant health.",
    "offer.card3.alt": "Planting",
    "offer.card3.title": "Planting",
    "offer.card3.desc": "Seamless integration of new plants into your garden.",
    "offer.card4.alt": "Garden maintenance",
    "offer.card4.title": "Garden maintenance",
    "offer.card4.desc": "Raking, leaf blowing, weeding, and other upkeep services.",
    "offer.card5.alt": "New garden design",
    "offer.card5.title": "New garden design",
    "offer.card5.desc": "Designing the layout, look, and plant palette of your garden, with a 3D visual.",
    "offer.card6.alt": "New garden build",
    "offer.card6.title": "New garden build",
    "offer.card6.desc": "Bringing your garden design to life.",
    "gallery.kicker": "Gallery",
    "gallery.title": "Past projects",
    "gallery.prevAria": "Previous project",
    "gallery.nextAria": "Next project",
    "contact.kicker": "Contact",
    "contact.title": "Get in touch",
    "contact.p": "Have a question about our services, or want to schedule a visit? Send us a message or contact us directly.",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Phone",
    "contact.formName": "Full name",
    "contact.formEmail": "Email",
    "contact.formMessage": "Message",
    "contact.formSubmit": "Send message",
    "contact.formSuccess": "Thank you! Your message has been sent.",
    "contact.formError":
      "Something went wrong. Please try again or contact us directly at info@presadnica.com.",
    "footer.rights": "Presadnica. All rights reserved.",
  },
};

let currentLang = localStorage.getItem("presadnica-lang") === "en" ? "en" : "hr";

const applyLanguage = (lang) => {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = translations[lang][el.dataset.i18n];
    if (text === undefined) return;
    if (el.dataset.i18nAttr) {
      el.setAttribute(el.dataset.i18nAttr, text);
    } else {
      el.textContent = text;
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  localStorage.setItem("presadnica-lang", lang);
};

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

applyLanguage(currentLang);

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const primaryNav = document.getElementById("primaryNav");

navToggle.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

primaryNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    primaryNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Scroll reveal
const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// Gallery carousel
const carouselTrack = document.getElementById("carouselTrack");
const carouselPrev = document.querySelector(".carousel-prev");
const carouselNext = document.querySelector(".carousel-next");

if (carouselTrack && carouselPrev && carouselNext) {
  const scrollByCard = (direction) => {
    const card = carouselTrack.querySelector(".carousel-item");
    const gap = 20;
    const distance = card ? card.getBoundingClientRect().width + gap : 300;
    carouselTrack.scrollBy({ left: direction * distance, behavior: "smooth" });
  };
  carouselPrev.addEventListener("click", () => scrollByCard(-1));
  carouselNext.addEventListener("click", () => scrollByCard(1));
}

// Contact form: submit via fetch to Web3Forms so we can show an inline message
// without navigating away from the page
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(contactForm),
      });
      const result = await response.json();

      formNote.hidden = false;
      if (response.ok && result.success) {
        formNote.textContent = translations[currentLang]["contact.formSuccess"];
        formNote.classList.remove("form-note-error");
        contactForm.reset();
      } else {
        formNote.textContent = translations[currentLang]["contact.formError"];
        formNote.classList.add("form-note-error");
      }
    } catch (err) {
      formNote.hidden = false;
      formNote.textContent = translations[currentLang]["contact.formError"];
      formNote.classList.add("form-note-error");
    } finally {
      submitBtn.disabled = false;
    }
  });
}
