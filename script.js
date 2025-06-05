const items = document.querySelectorAll('.carousel-item');
const modal = document.getElementById('product-modal');
const modalImg = document.getElementById('modal-img');
const modalDesc = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close-btn');

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const img = item.querySelector('img').src;
        const price = item.querySelector('.price').innerText;
        modalImg.src = img;
        modalDesc.innerText = `Precio: ${price}`;
        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('mouseleave', () => {
    modal.style.display = 'none';
});

let index = 0;
document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % items.length;
  updateCarousel();
});
document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
});
function updateCarousel() {
  track.style.transform = `translateX(-${index * 400}px)`;
}

function showSection(sectionId) {
  let sections = document.querySelectorAll('.section');
  sections.forEach(section => section.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';
}

// === Idiomas ===
const languageToggle = document.getElementById("language-toggle");
let currentLang = "EN";

const translations = {
  EN: {
    "nav-sea-salt": "Marino SEA SALT",
    "nav-history": "OUR HISTORY",
    "nav-products": "PRODUCTS",
    "nav-nutrition": "NUTRITIONAL TABLE",
    "nav-heritage": "NATIONAL FLAVOR HERITAGE",
    "nav-process": "PROCESS",
    "nav-social": "SOCIAL RESPONSIBILITY",
    "nav-contact": "CONTACT US",
    "sea-salt-title": "Marino SEA SALT : Pure Sea Salt for Every Taste",
    "history-title": "OUR HISTORY",
    "history-text": "Marino Sea Salt is a premium sea salt brand founded in 2025 by Marco Antonio and his brothers, dedicated to providing high-quality, hand-harvested sea salt sourced from pristine waters.",
    "products-title": "PRODUCTS",
    "products-text": "100% PURE SEA SALT FOR SALE<br>Bags of 1 kg<br>Jars in various sizes<br>Bulk sacks available",
    "nutrition-title": "NUTRITIONAL TABLE",
    "nutrition-text": "Nutritional Information for Sea Salt (per 1g serving):<br>Sodium: 387 mg<br>Calcium: 0 mg<br>Iron: 0.1 mg<br>Magnesium: 0 mg<br>Potassium: 0 mg",
    "heritage-title": "NATIONAL FLAVOR HERITAGE",
    "heritage-text": "Sea Salt: A National Flavor Heritage",
    "process-title": "PROCESS",
    "process-text": "The production process of sea salt involves the evaporation of seawater, allowing salt crystals to form naturally. This method retains essential minerals, resulting in a high-quality seasoning.",
    "social-title": "SOCIAL RESPONSIBILITY",
    "social-text": "Social responsibility refers to the commitment of businesses to contribute positively to society while balancing economic growth with the well-being of employees, communities, and the environment.",
    "contact-title": "CONTACT US",
    "contact-text": "+1 672-999-0937"
  },
  FR: {
    "nav-sea-salt": "Marino SEL DE MER",
    "nav-history": "NOTRE HISTOIRE",
    "nav-products": "PRODUITS",
    "nav-nutrition": "TABLE NUTRITIONNELLE",
    "nav-heritage": "PATRIMOINE NATIONAL DU GOÛT",
    "nav-process": "PROCESSUS",
    "nav-social": "RESPONSABILITÉ SOCIALE",
    "nav-contact": "CONTACTEZ-NOUS",
    "sea-salt-title": "Marino SEL DE MER : Sel de mer pur pour chaque goût",
    "history-title": "NOTRE HISTOIRE",
    "history-text": "La Sal de Mer Marino est une marque de sel de mer haut de gamme fondée en 2025 par Marco Antonio et ses frères, dédiée à fournir du sel de mer de haute qualité, récolté à la main, provenant des eaux pures.",
    "products-title": "PRODUITS",
    "products-text": "VENTE DE SEL DE MER 100% PUR<br>Sacs de 1 kg<br>Pots de différentes tailles<br>Sacs en vrac disponibles",
    "nutrition-title": "TABLE NUTRITIONNELLE",
    "nutrition-text": "Informations Nutritionnelles pour le Sel de Mer (par portion de 1g) :<br>Sodium : 387 mg<br>Calcium : 0 mg<br>Fer : 0,1 mg<br>Magnésium : 0 mg<br>Potassium : 0 mg",
    "heritage-title": "PATRIMOINE NATIONAL DU GOÛT",
    "heritage-text": "Sel de Mer : Un Patrimoine de Saveur Nationale",
    "process-title": "PROCESSUS",
    "process-text": "Le processus de production du sel de mer consiste à évaporer l'eau de mer, permettant aux cristaux de sel de se former naturellement. Cette méthode conserve les minéraux essentiels, produisant un assaisonnement de haute qualité.",
    "social-title": "RESPONSABILITÉ SOCIALE",
    "social-text": "La responsabilité sociale fait référence à l'engagement des entreprises à contribuer positivement à la société tout en équilibrant la croissance économique avec le bien-être des employés, des communautés et de l'environnement.",
    "contact-title": "CONTACTEZ-NOUS",
    "contact-text": "+1 672-999-0937"
  }
};

function updateLanguage() {
  const t = translations[currentLang];
  Object.keys(t).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = t[id];
  });
}

languageToggle.addEventListener("click", () => {
  currentLang = currentLang === "EN" ? "FR" : "EN";
  languageToggle.innerText = currentLang === "EN" ? "FR 🇫🇷" : "EN 🇬🇧";
  updateLanguage();
});

updateLanguage(); // Idioma inicial