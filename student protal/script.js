
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');
navbarToggle.addEventListener('click', function() {
  const isOpen = navbarMenu.classList.toggle('open');
  navbarToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

document.querySelectorAll('.navbar-menu .nav-link').forEach(link => {
  link.addEventListener('click', function() {
    if (window.innerWidth <= 700) {
      navbarMenu.classList.remove('open');
      navbarToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

function setActiveLink() {
  const links = document.querySelectorAll('.navbar-menu .nav-link');
  let index = 0;
  const scrollPos = window.scrollY + 100;
  const sections = ['home', 'quicklinks', 'events', 'resources', 'announcements', 'faq', 'testimonials', 'contact'];
  for (let i = 0; i < sections.length; i++) {
    const sec = document.getElementById(sections[i]);
    if (sec && sec.offsetTop <= scrollPos) index = i;
  }
  links.forEach((link, i) => link.classList.toggle('active', i === index));
}
window.addEventListener('scroll', setActiveLink);
window.addEventListener('resize', setActiveLink);
window.addEventListener('DOMContentLoaded', setActiveLink);
document.querySelectorAll('.navbar-menu .nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    }
  });
});

const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});
scrollTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function revealOnScroll() {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

function openModal() {
  document.getElementById('modal').classList.add('open');
}
function closeModal() {
  document.getElementById('modal').classList.remove('open');
}
document.getElementById('loginBtn').onclick = openModal;
document.getElementById('loginBtn2').onclick = openModal;
document.getElementById('closeModal').onclick = closeModal;
window.onclick = function(event) {
  if (event.target === document.getElementById('modal')) closeModal();
};

document.getElementById('loginForm').onsubmit = function(e) {
  e.preventDefault();
  alert('Login functionality is demo-only.');
  closeModal();
};
document.getElementById('registerBtn').onclick = function() {
  alert('Registration functionality is demo-only.');
  closeModal();
};

document.getElementById('contactForm').onsubmit = function(e) {
  e.preventDefault();
  alert('Thank you for contacting us. We will get back to you soon!');
  this.reset();
};

document.getElementById('newsletterForm').onsubmit = function(e) {
  e.preventDefault();
  alert('You have subscribed to Student Portal updates!');
  this.reset();
};

document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', function() {
    const parent = this.parentElement;
    parent.classList.toggle('open');

    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== parent) item.classList.remove('open');
    });
  });
});

let testimonialIndex = 0;
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
function showTestimonial(idx) {
  testimonialSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === idx);
  });
}
document.querySelector('.testimonial-next').onclick = function() {
  testimonialIndex = (testimonialIndex + 1) % testimonialSlides.length;
  showTestimonial(testimonialIndex);
};
document.querySelector('.testimonial-prev').onclick = function() {
  testimonialIndex = (testimonialIndex - 1 + testimonialSlides.length) % testimonialSlides.length;
  showTestimonial(testimonialIndex);
};
setInterval(()=>{
  testimonialIndex = (testimonialIndex + 1) % testimonialSlides.length;
  showTestimonial(testimonialIndex);
},8000);

function animateCounters() {
  document.querySelectorAll('.counter').forEach(el => {
    const target = +el.getAttribute('data-count');
    let count = 0;
    const duration = 1200;
    const start = performance.now();
    function update(now) {
      const progress = Math.min((now - start)/duration, 1);
      el.innerText = Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(update);
      else el.innerText = target;
    }
    requestAnimationFrame(update);
  });
}
window.addEventListener('DOMContentLoaded', animateCounters);

const themeToggle = document.getElementById('themeToggle');
themeToggle.onclick = function() {
  const isDark = document.body.classList.toggle('light');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
};