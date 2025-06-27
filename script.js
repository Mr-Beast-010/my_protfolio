const toggleSwitch = document.getElementById('themeToggle');

// Apply saved theme on load
window.addEventListener('DOMContentLoaded', () => {
  const dark = localStorage.getItem('theme') === 'dark';
  document.body.classList.toggle('dark-mode', dark);
  toggleSwitch.checked = dark;
});

toggleSwitch.addEventListener('change', () => {
  const isDark = toggleSwitch.checked;
  document.body.classList.toggle('dark-mode', isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

  // Optional: remember user's choice
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
;

// Optional: load saved theme
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});


// Scroll-aware active navbar highlighting
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

// Run on scroll
window.addEventListener('scroll', setActiveLinkOnScroll);

// Also run on load (in case user starts mid-page)
window.addEventListener('load', setActiveLinkOnScroll);

// Optional: ensure smooth scroll and instant highlight on click
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

