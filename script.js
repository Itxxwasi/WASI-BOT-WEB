/* ═══════════════════════ HEADER SCROLL ═══════════════════════ */
const scrollHeader = () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class
    this.scrollY >= 50 ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header');
};
window.addEventListener('scroll', scrollHeader);

/* ═══════════════════════ SCROLL UP ═══════════════════════ */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-top');
    // When the scroll is higher than 350 viewport height, add the show-scroll class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

/* ═══════════════════════ MOBILE MENU ═══════════════════════ */
const navToggle = document.getElementById('nav-toggle'),
    navList = document.getElementById('nav-list');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navList.classList.toggle('show-menu');
        // Toggle icon
        const icon = navToggle.querySelector('i');
        if (navList.classList.contains('show-menu')) {
            icon.classList.remove('ri-menu-3-line');
            icon.classList.add('ri-close-line');
        } else {
            icon.classList.remove('ri-close-line');
            icon.classList.add('ri-menu-3-line');
        }
    });
}

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('show-menu');
        const icon = navToggle.querySelector('i');
        icon.classList.remove('ri-close-line');
        icon.classList.add('ri-menu-3-line');
    });
});

/* ═══════════════════════ ACTIVE LINK SCROLL ═══════════════════════ */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 100,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass?.classList.add('active-link');
        } else {
            sectionsClass?.classList.remove('active-link');
        }
    });
};
window.addEventListener('scroll', scrollActive);

/* ═══════════════════════ FORM SUBMISSION (PREVENT DEFAULT) ═══════════════════════ */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerHTML;

        btn.innerHTML = '<i class="ri-loader-4-line ri-spin"></i> Sending...';
        btn.style.opacity = '0.8';
        btn.style.cursor = 'not-allowed';

        // Simulate sending
        setTimeout(() => {
            btn.innerHTML = '<i class="ri-check-line"></i> Sent Successfully!';
            btn.style.background = '#25d366';
            contactForm.reset();

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.style.opacity = '1';
                btn.style.cursor = 'pointer';
            }, 3000);
        }, 1500);
    });
}

/* ═══════════════════════ PREVENT COPY/INSPECT (OPTIONAL) ═══════════════════════ */
// Keeping the original anti-rip logic but making it cleaner
document.onkeydown = function (e) {
    if (e.ctrlKey &&
        (e.key === 'c' || e.key === 'C' ||
            e.key === 'u' || e.key === 'U' ||
            e.key === 's' || e.key === 'S' ||
            e.key === 'a' || e.key === 'A' ||
            e.key === 'p' || e.key === 'P')) {
        return false;
    }
    // F12
    if (e.keyCode === 123) {
        return false;
    }
};

document.addEventListener('contextmenu', event => event.preventDefault());