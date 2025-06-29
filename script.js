const toggleSwitch = document.getElementById('themeToggle');

// === Apply saved theme on load ===
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const isDark = savedTheme === 'dark';
  document.body.classList.toggle('dark-mode', isDark);
  toggleSwitch.checked = isDark;
});

// === Toggle dark mode and save preference ===
toggleSwitch.addEventListener('change', () => {
  const isDark = toggleSwitch.checked;
  document.body.classList.toggle('dark-mode', isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// === Scroll-aware active navbar link ===
const navLinks = document.querySelectorAll('.navbar-link');

function setActiveLinkOnScroll() {
  const scrollPos = window.scrollY + document.querySelector('.navbar').offsetHeight + 10;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (
      section.offsetTop <= scrollPos &&
      section.offsetTop + section.offsetHeight > scrollPos
    ) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveLinkOnScroll);
window.addEventListener('load', setActiveLinkOnScroll);

// === Instant active change on click ===
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// === Quotes List ===
const quotes = [
  { text: "Push yourself, because no one else is going to do it for you.", tag: "#motivation" },
  { text: "Don’t watch the clock; do what it does. Keep going.", tag: "#productivity" },
  { text: "Success doesn’t come from what you do occasionally, it comes from what you do consistently.", tag: "#consistency" },
  { text: "Believe you can and you're halfway there.", tag: "#belief" },
  { text: "Your limitation—it's only your imagination.", tag: "#mindset" },
];

// === Display random quote ===
function showRandomQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = `"${random.text}"`;
  document.getElementById("tag").textContent = random.tag;
}

// === Start loop on load ===
window.addEventListener('DOMContentLoaded', () => {
  showRandomQuote();
  setInterval(showRandomQuote, 5000); // refresh every 15 seconds
});
