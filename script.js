/**
 * KUST Housing Society - Interactive JavaScript
 * WhatsApp: +92 336 0606905
 * High performance, zero dependencies, responsive navigation & tools
 */

// Plot Data Store for Dynamic Details View
const PLOT_DATA = {
  '5marla': {
    title: '5 Marla Residential Plot',
    price: 'PKR 22,50,000',
    priceSub: 'Easy 36-Month Installment Plan: PKR 35,000 / month',
    size: '5 Marla (125 Sq. Yds / 25 × 45 ft)',
    category: 'Residential',
    location: 'Sector B & C (Garden Enclave)',
    facing: 'Scenic Community Green Belt',
    status: 'Possession in 18 Months',
    statusClass: 'text-success',
    mainImg: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
    thumbs: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=300&q=80'
    ],
    features: [
      'Prime Location in Garden Sector C',
      'Facing Community Green Belt and Walking Trails',
      '50-ft Wide Carpeted Access Road with LED streetlights',
      'Gated Sector with Dedicated Biometric Security',
      'Underground Electrical & Fiber Optic Provision'
    ]
  },
  '10marla': {
    title: '10 Marla Residential Plot',
    price: 'PKR 45,00,000',
    priceSub: 'Flexible 36-Month Installment Plan Available',
    size: '10 Marla (250 Sq. Yds / 35 × 65 ft)',
    category: 'Residential',
    location: 'Block A (Park Facing)',
    facing: 'Central Theme Park',
    status: 'Immediate Possession Ready',
    statusClass: 'text-success',
    mainImg: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    thumbs: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=300&q=80'
    ],
    features: [
      'Prime Location directly on Sector A Boulevard',
      'Park Facing with Unobstructed Panoramic Green Views',
      '50-ft Wide Carpeted Access Road',
      'Secure Gated Community with 24/7 Mobile Patrol',
      'All Modern Underground Facilities (Water, Gas, Electricity)'
    ]
  },
  '1kanal': {
    title: '1 Kanal Luxury Villa Plot',
    price: 'PKR 85,00,000',
    priceSub: 'Executive Lakeview Block - Custom Villa Zone',
    size: '1 Kanal (500 Sq. Yds / 50 × 90 ft)',
    category: 'Luxury Residential',
    location: 'Executive Sector D (Lake Block)',
    facing: 'Waterfront & Sunset Boulevard',
    status: 'Ready for Immediate Construction',
    statusClass: 'text-success',
    mainImg: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    thumbs: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=300&q=80'
    ],
    features: [
      'Prestigious Executive Lakeview Sector',
      'Dual Frontage / Corner Options Available',
      '80-ft Wide Tree-Lined Residential Avenue',
      'Complimentary Social Club & Sports Membership for 3 Years',
      'High-Pressure Water System & Underground 3-Phase Power'
    ]
  },
  'commercial': {
    title: 'Commercial Broadway Plot (4 & 8 Marla)',
    price: 'PKR 1,20,00,000',
    priceSub: 'High Footfall Main 150-ft Boulevard Zone',
    size: '4 & 8 Marla Commercial (Various Dimensions)',
    category: 'Commercial Plaza',
    location: '150-ft Central Main Boulevard',
    facing: 'Main Highway Expressway Link',
    status: 'Immediate Allotment & NOC Granted',
    statusClass: 'text-success',
    mainImg: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
    thumbs: [
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80'
    ],
    features: [
      'Zero-Setback Ground + 6 Storey Commercial Approval',
      'Dedicated Basement Customer Parking Corridor',
      'Direct Frontage on 150-ft Main Boulevard Arterial Route',
      'Ideal for Banks, Multinational Brands, Food Franchises, Corporate Offices',
      'Guaranteed Rental Yield Expectation 9-11% Annually'
    ]
  }
};

/* ================= 1. PAGE ROUTING (SPA) ================= */
function switchPage(pageId) {
  // Normalize page name
  if (!pageId || pageId === '') pageId = 'home';
  pageId = pageId.replace('#', '');

  const validPages = ['home', 'about', 'masterplan', 'amenities', 'location', 'plots', 'gallery', 'news', 'contact'];
  if (!validPages.includes(pageId)) {
    pageId = 'home';
  }

  // Hide all views
  const allViews = document.querySelectorAll('.page-view');
  allViews.forEach(view => view.classList.remove('active'));

  // Show active view
  const targetView = document.getElementById(`view-${pageId}`);
  if (targetView) {
    targetView.classList.add('active');
  }

  // Update Nav links (desktop)
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.getAttribute('data-page') === pageId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Update Mobile links
  const mobileLinks = document.querySelectorAll('.mobile-link');
  mobileLinks.forEach(link => {
    if (link.getAttribute('data-page') === pageId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Update URL hash without re-triggering hashchange jump
  if (window.location.hash !== `#${pageId}`) {
    history.pushState(null, null, `#${pageId}`);
  }

  // Close mobile drawer if opened
  closeDrawer();

  // Scroll smoothly to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Listen to browser Back/Forward buttons
window.addEventListener('popstate', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    switchPage(hash);
  } else {
    switchPage('home');
  }
});

/* ================= 2. MOBILE MENU DRAWER ================= */
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileDrawer = document.getElementById('mobileDrawer');
const mobileOverlay = document.getElementById('mobileOverlay');
const drawerCloseBtn = document.getElementById('drawerCloseBtn');

function openDrawer() {
  if (mobileDrawer) mobileDrawer.classList.add('open');
  if (mobileOverlay) mobileOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  if (mobileDrawer) mobileDrawer.classList.remove('open');
  if (mobileOverlay) mobileOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openDrawer);
if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
if (mobileOverlay) mobileOverlay.addEventListener('click', closeDrawer);

// Mobile Links click handler
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', (e) => {
    const page = link.getAttribute('data-page');
    if (page) {
      e.preventDefault();
      switchPage(page);
    }
  });
});

/* ================= HERO GLASSMORPHISM QUICK SEARCH ================= */
function handleHeroSearch() {
  const sizeSelect = document.getElementById('heroSearchSize');
  const typeSelect = document.getElementById('heroSearchType');
  const budgetSelect = document.getElementById('heroSearchBudget');

  const selectedSize = sizeSelect ? sizeSelect.value : '10marla';
  const sizeLabel = sizeSelect ? sizeSelect.options[sizeSelect.selectedIndex].text : '';

  selectPlotDetail(selectedSize);
  showToast(`Filtered for: ${sizeLabel}. Showing live inventory & payment plan.`);
}

/* ================= 3. PLOT DETAILS INTERACTION ================= */
function selectPlotDetail(plotKey) {
  const data = PLOT_DATA[plotKey];
  if (!data) return;

  // Update tabs active state
  document.querySelectorAll('.plot-tab-btn').forEach(btn => {
    if (btn.getAttribute('data-plot') === plotKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update text fields
  const titleEl = document.getElementById('plotTitle');
  const crumbEl = document.getElementById('crumbPlotName');
  const priceEl = document.getElementById('plotPrice');
  const priceSubEl = document.getElementById('plotPriceSub');
  const sizeEl = document.getElementById('specSize');
  const catEl = document.getElementById('specCategory');
  const locEl = document.getElementById('specLocation');
  const faceEl = document.getElementById('specFacing');
  const statusEl = document.getElementById('specStatus');
  const mainImgEl = document.getElementById('plotMainImg');
  const bookBtnEl = document.getElementById('plotBookBtn');

  if (titleEl) titleEl.textContent = data.title;
  if (crumbEl) crumbEl.textContent = data.title;
  if (priceEl) priceEl.textContent = data.price;
  if (priceSubEl) priceSubEl.textContent = data.priceSub;
  if (sizeEl) sizeEl.textContent = data.size;
  if (catEl) catEl.textContent = data.category;
  if (locEl) locEl.textContent = data.location;
  if (faceEl) faceEl.textContent = data.facing;
  if (statusEl) {
    statusEl.textContent = data.status;
    statusEl.className = `spec-val ${data.statusClass}`;
  }
  if (mainImgEl) mainImgEl.src = data.mainImg;
  if (bookBtnEl) {
    bookBtnEl.onclick = () => openBookingModal(data.title);
  }

  // Update thumbnails
  const thumbsContainer = document.querySelector('.plot-thumbnails-row');
  if (thumbsContainer && data.thumbs) {
    thumbsContainer.innerHTML = '';
    data.thumbs.forEach((thumbSrc, index) => {
      const thumbDiv = document.createElement('div');
      thumbDiv.className = `thumb-item ${index === 0 ? 'active' : ''}`;
      thumbDiv.onclick = function() { changeMainPlotImage(this, thumbSrc); };
      thumbDiv.innerHTML = `<img src="${thumbSrc}" alt="Thumbnail ${index + 1}">`;
      thumbsContainer.appendChild(thumbDiv);
    });
  }

  // Update features list
  const featuresList = document.querySelector('.features-checklist');
  if (featuresList && data.features) {
    featuresList.innerHTML = '';
    data.features.forEach(feat => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="check-icon">&#10003;</span> ${feat}`;
      featuresList.appendChild(li);
    });
  }

  // Ensure plots view is active
  switchPage('plots');
}

function changeMainPlotImage(thumbElement, fullSrc) {
  const mainImg = document.getElementById('plotMainImg');
  if (mainImg) {
    mainImg.style.opacity = '0.4';
    setTimeout(() => {
      mainImg.src = fullSrc;
      mainImg.style.opacity = '1';
    }, 150);
  }
  document.querySelectorAll('.thumb-item').forEach(th => th.classList.remove('active'));
  if (thumbElement) thumbElement.classList.add('active');
}

/* ================= 4. MASTER PLAN INTERACTIVE HIGHLIGHTS ================= */
function highlightSector(title, description, price) {
  const inspector = document.getElementById('mpInspector');
  const titleEl = document.getElementById('mpInspectTitle');
  const descEl = document.getElementById('mpInspectDesc');
  const priceEl = document.getElementById('mpInspectPrice');

  if (titleEl) titleEl.textContent = title;
  if (descEl) descEl.textContent = description;
  if (priceEl) priceEl.textContent = price;

  if (inspector) {
    inspector.style.animation = 'none';
    inspector.offsetHeight; // trigger reflow
    inspector.style.animation = 'fadeIn 0.3s ease';
  }

  showToast(`Inspecting: ${title}`);
}

/* ================= 5. GALLERY FILTER & LIGHTBOX ================= */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filterVal = btn.getAttribute('data-filter');
    const items = document.querySelectorAll('.gallery-item');

    items.forEach(item => {
      const cat = item.getAttribute('data-category');
      if (filterVal === 'all' || cat === filterVal) {
        item.style.display = 'block';
        item.style.animation = 'fadeIn 0.3s ease';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

function openLightbox(imgSrc, captionText) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');

  if (img) img.src = imgSrc;
  if (cap) cap.textContent = captionText || 'KUST Housing Society';
  if (modal) modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  // If clicked directly on the image, do not close unless clicking outside
  if (e && e.target && e.target.id === 'lightboxImg') return;
  const modal = document.getElementById('lightboxModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

/* ================= 6. BOOKING MODAL ================= */
function openBookingModal(plotCategory) {
  const modal = document.getElementById('bookingModal');
  const input = document.getElementById('modalPlotType');
  if (input && plotCategory) {
    input.value = plotCategory;
  }
  if (modal) modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function handleBookingSubmit(event) {
  event.preventDefault();
  closeBookingModal();
  showToast('Booking request received! Our sales officer will contact you on +92 336 0606905 / WhatsApp.');
}

/* ================= 7. INSTALLMENT CALCULATOR ================= */
function openCalcModal() {
  const modal = document.getElementById('calcModal');
  if (modal) modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  runCalculator();
}

function closeCalcModal() {
  const modal = document.getElementById('calcModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function formatPKR(val) {
  return 'PKR ' + Number(val).toLocaleString('en-PK');
}

function runCalculator() {
  const priceSelect = document.getElementById('calcPlotSize');
  const downSelect = document.getElementById('calcDownPercent');
  const tenureSelect = document.getElementById('calcTenure');

  if (!priceSelect || !downSelect || !tenureSelect) return;

  const total = parseFloat(priceSelect.value);
  const downPct = parseFloat(downSelect.value);
  const tenureMonths = parseInt(tenureSelect.value, 10);

  const downPayment = total * downPct;
  const remaining = total - downPayment;
  const monthly = remaining / tenureMonths;

  document.getElementById('calcResTotal').textContent = formatPKR(total);
  document.getElementById('calcResDown').textContent = formatPKR(downPayment);
  document.getElementById('calcResBalance').textContent = formatPKR(remaining);
  document.getElementById('calcResMonthly').textContent = formatPKR(Math.round(monthly)) + ' / mo';
}

function proceedFromCalculator() {
  const priceSelect = document.getElementById('calcPlotSize');
  const selectedText = priceSelect.options[priceSelect.selectedIndex].text.split('(')[0].trim();
  closeCalcModal();
  openBookingModal(`${selectedText} (Calculated Plan)`);
}

/* ================= WELCOME MODAL POPUP ================= */
function openWelcomeModal() {
  const modal = document.getElementById('welcomeModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeWelcomeModal() {
  const modal = document.getElementById('welcomeModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function initWelcomePopup() {
  // Show welcome popup smoothly when visitor lands on website
  setTimeout(() => {
    openWelcomeModal();
  }, 750);
}

/* ================= 8. VIDEO & NEWS MODALS ================= */
function openVideoModal() {
  const modal = document.getElementById('videoModal');
  if (modal) modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function openNewsModal(title, date, body) {
  const modal = document.getElementById('newsModal');
  document.getElementById('newsModalTitle').textContent = title;
  document.getElementById('newsModalDate').textContent = date;
  document.getElementById('newsModalBody').textContent = body;
  if (modal) modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeNewsModal() {
  const modal = document.getElementById('newsModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

/* ================= 9. CONTACT & NEWSLETTER HANDLERS ================= */
function handleContactSubmit(event) {
  event.preventDefault();
  const form = document.getElementById('contactPageForm');
  if (form) form.reset();
  showToast('Thank you! Your message has been sent to KUST Housing Society.');
}

function handleNewsletter(event) {
  event.preventDefault();
  const input = event.target.querySelector('input');
  if (input) input.value = '';
  showToast('Subscribed! You will receive new sector launch updates.');
}

function triggerBrochureDownload() {
  showToast('Downloading KUST Housing Society Official Master Brochure (PDF)...');
}

/* ================= 10. TOAST NOTIFICATION SYSTEM ================= */
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const toastText = document.getElementById('toastText');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

/* ================= 11. SCROLL REVEAL & ANIMATIONS OBSERVER ================= */
let scrollObserver;

function initScrollAnimations() {
  // Add reveal-on-scroll class to content sections and cards if not already present
  const elementsToAnimate = document.querySelectorAll(`
    .features-bar-grid,
    .lifestyle-content,
    .lifestyle-media,
    .plot-card,
    .two-col-grid,
    .stats-counter-strip,
    .size-col-card,
    .amenity-feature-card,
    .amenity-hero-banner-card,
    .location-map-frame,
    .distance-item-card,
    .plot-detail-container,
    .gallery-item,
    .news-item-card,
    .contact-form-box,
    .contact-info-card
  `);

  elementsToAnimate.forEach(el => {
    if (!el.classList.contains('reveal-on-scroll')) {
      el.classList.add('reveal-on-scroll');
    }
  });

  if ('IntersectionObserver' in window) {
    if (scrollObserver) scrollObserver.disconnect();

    scrollObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');

          // If it's the stats counter strip, trigger number count-up
          if (entry.target.classList.contains('stats-counter-strip')) {
            runStatsCounter();
          }

          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal-on-scroll:not(.revealed)').forEach(el => {
      scrollObserver.observe(el);
    });
  } else {
    // Fallback for older browsers
    document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('revealed'));
  }
}

/* Animated Number Counter for Stats Strip */
let statsCounted = false;
function runStatsCounter() {
  if (statsCounted) return;
  statsCounted = true;

  document.querySelectorAll('.stat-num[data-target]').forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    const duration = 1600; // ms
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target + (counter.getAttribute('data-target') === '100' ? '%' : '+');
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current) + (counter.getAttribute('data-target') === '100' ? '%' : '+');
      }
    }, stepTime);
  });
}

// Re-observe animations whenever a new SPA page view is activated
const originalSwitchPage = switchPage;
switchPage = function(pageId) {
  originalSwitchPage(pageId);
  setTimeout(() => {
    initScrollAnimations();
  }, 100);
};

// Close modals when clicking backdrop
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-backdrop')) {
    e.target.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// Escape key to close any active modal
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-backdrop.open, .lightbox-backdrop.open').forEach(modal => {
      modal.classList.remove('open');
    });
    closeDrawer();
    document.body.style.overflow = '';
  }
});

// Initial boot check
document.addEventListener('DOMContentLoaded', () => {
  const initialHash = window.location.hash.replace('#', '');
  if (initialHash) {
    switchPage(initialHash);
  } else {
    switchPage('home');
  }

  // Initialize scroll observer
  initScrollAnimations();

  // Welcome modal popup when someone visits website
  initWelcomePopup();
});
