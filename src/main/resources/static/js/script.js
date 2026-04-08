// Loading Animation
window.addEventListener('load', () => {
  setTimeout(() => {
      document.querySelector('.loader-wrapper').style.opacity = '0';
      setTimeout(() => {
          document.querySelector('.loader-wrapper').style.display = 'none';
      }, 500);
  }, 2000);
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
let mobileMenu = document.querySelector('.mobile-menu');

// Create mobile menu if it doesn't exist
if (!mobileMenu) {
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelector('.nav-links');

  if (navLinks) {
    mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';

    const mobileMenuLinks = document.createElement('div');
    mobileMenuLinks.className = 'mobile-menu-links';

    // Clone nav links to mobile menu
    const links = navLinks.querySelectorAll('.nav-link');
    links.forEach(link => {
      const clonedLink = link.cloneNode(true);
      mobileMenuLinks.appendChild(clonedLink);
    });

    mobileMenu.appendChild(mobileMenuLinks);
    nav.appendChild(mobileMenu);
  }
}

// Toggle mobile menu
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  // Close menu when link is clicked
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header')) {
      mobileMenuBtn.classList.remove('active');
      mobileMenu.classList.remove('active');
    }
  });
}

// Scrolled Header
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
          setTimeout(() => {
              entry.target.classList.add('animated');
          }, index * 200);
      }
  });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
  projectObserver.observe(card);
});

const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animated');
      }
  });
}, observerOptions);

document.querySelectorAll('.timeline-content').forEach(item => {
  timelineObserver.observe(item);
});

const achievementObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
          setTimeout(() => {
              entry.target.classList.add('animated');
          }, index * 200);
      }
  });
}, observerOptions);

document.querySelectorAll('.achievement-card').forEach(card => {
  achievementObserver.observe(card);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;

      window.scrollTo({
          top: target.offsetTop - 100,
          behavior: 'smooth'
      });
  });
});