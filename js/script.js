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
        formNote.textContent = "Hvala! Vaša poruka je poslana.";
        formNote.classList.remove("form-note-error");
        contactForm.reset();
      } else {
        formNote.textContent =
          "Došlo je do greške. Pokušajte ponovno ili nas kontaktirajte izravno na info@presadnica.com.";
        formNote.classList.add("form-note-error");
      }
    } catch (err) {
      formNote.hidden = false;
      formNote.textContent =
        "Došlo je do greške. Pokušajte ponovno ili nas kontaktirajte izravno na info@presadnica.com.";
      formNote.classList.add("form-note-error");
    } finally {
      submitBtn.disabled = false;
    }
  });
}
