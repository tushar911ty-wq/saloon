
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  toggle.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
});

// ==========================================

// ===== Slider logic (robust + simple) =====
const track = document.getElementById('track');
const slides = Array.from(track.children);
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const dotsBox = document.getElementById('dots');
const viewport = document.getElementById('viewport');

if (track && slides.length > 0) {
  let index = 0;
  const count = slides.length;

  // Build dots
  const dots = slides.map((_, i) => {
    const d = document.createElement('span');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => go(i));
    dotsBox.appendChild(d);
    return d;
  });

  function go(i) {
    index = (i + count) % count;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, di) => d.classList.toggle('active', di === index));
  }

  // Buttons
  if (nextBtn) nextBtn.addEventListener('click', () => go(index + 1));
  if (prevBtn) prevBtn.addEventListener('click', () => go(index - 1));

  // Auto-play with pause on hover
  let timer = setInterval(() => go(index + 1), 5000); // 5000ms default
  const stop = () => { clearInterval(timer); timer = null; };
  const start = () => { if (!timer) timer = setInterval(() => go(index + 1), 5000); };

  if (viewport) {
    viewport.addEventListener('mouseenter', stop);
    viewport.addEventListener('mouseleave', start);
  }

  // Make sure first position is correct
  go(0);
}


// ===============================================


// Close dropdown when clicking anywhere outside or pressing Escape
(function () {
  const isOutside = (el, container) => !container.contains(el);

  document.addEventListener('click', (e) => {
    document.querySelectorAll('details.dropdown[open]')
      .forEach((d) => { if (isOutside(e.target, d)) d.removeAttribute('open'); });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('details.dropdown[open]')
        .forEach((d) => d.removeAttribute('open'));
    }
  });
})();

// ===============================================
// Backend Integration
// ===============================================

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const statusMsg = document.getElementById('formStatus');

    statusMsg.textContent = 'Sending...';
    statusMsg.style.color = 'blue';

    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, phone, message })
      });

      if (response.ok) {
        statusMsg.textContent = 'Message sent successfully!';
        statusMsg.style.color = 'green';
        contactForm.reset();
      } else {
        statusMsg.textContent = 'Failed to send message.';
        statusMsg.style.color = 'red';
      }
    } catch (error) {
      console.error('Error:', error);
      statusMsg.textContent = 'An error occurred.';
      statusMsg.style.color = 'red';
    }
  });
}

// Newsletter Form
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail').value;
    const statusMsg = document.getElementById('newsletterStatus');

    statusMsg.textContent = 'Subscribing...';
    statusMsg.style.color = 'blue';

    try {
      const response = await fetch('http://localhost:3000/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        statusMsg.textContent = 'Subscribed successfully!';
        statusMsg.style.color = 'green';
        newsletterForm.reset();
      } else {
        statusMsg.textContent = 'Failed to subscribe.';
        statusMsg.style.color = 'red';
      }
    } catch (error) {
      console.error('Error:', error);
      statusMsg.textContent = 'An error occurred.';
      statusMsg.style.color = 'red';
    }
  });
}