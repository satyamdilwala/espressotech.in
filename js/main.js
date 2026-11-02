// Main Application Logic for Espresso Tech Vending Solution
document.addEventListener("DOMContentLoaded", function () {
  initMobileNav();
  initHeaderScroll();
  initCatalogPage();
  initProductDetailPage();
  initClipboardFeature();
  initContactForm();
  initCoffeeAnimations();
});

// 1. Mobile Navigation Drawer
function initMobileNav() {
  const toggleBtn = document.getElementById("mobileNavToggle");
  const drawer = document.getElementById("mobileDrawer");
  const closeBtn = document.getElementById("mobileDrawerClose");

  if (!toggleBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.add("open");
    toggleBtn.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer.classList.remove("open");
    toggleBtn.classList.remove("active");
    document.body.style.overflow = "";
  }

  toggleBtn.addEventListener("click", function () {
    if (drawer.classList.contains("open")) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeDrawer);
  }

  // Close when clicking overlay backdrop
  drawer.addEventListener("click", function (e) {
    if (e.target === drawer) {
      closeDrawer();
    }
  });

  // Close on link click
  const drawerLinks = drawer.querySelectorAll("a");
  drawerLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}

// 2. Header Scroll Effect
function initHeaderScroll() {
  const header = document.querySelector(".main-header");
  if (!header) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// 3. Catalog Page Filtering and Product Card Rendering
function initCatalogPage() {
  const productsContainer = document.getElementById("catalogProductsGrid");
  if (!productsContainer) return;

  const filterButtons = document.querySelectorAll(".filter-btn");

  function renderCards(filterCategory = "all") {
    productsContainer.innerHTML = "";

    const filtered = productsData.filter(item => {
      if (filterCategory === "all") return true;
      if (filterCategory === "premix") return item.category === "premix";
      if (filterCategory === "vending") return item.category === "vending";
      if (filterCategory === "sachets") return item.subCategory === "sachets";
      if (filterCategory === "1kg") return item.subCategory === "1kg-pack";
      return true;
    });

    if (filtered.length === 0) {
      productsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
          <p style="font-size: 1.1rem; color: #645e59;">No products found in this category.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";

      const badgeHtml = product.badge
        ? `<div class="product-card-badge ${product.badge.includes('Flagship') || product.badge.includes('Commercial') ? 'gold' : ''}">${product.badge}</div>`
        : "";

      const metaHtml = product.netWeight
        ? `<span class="meta-pill">📦 ${product.netWeight}</span>`
        : product.specs && product.specs.Capacity
        ? `<span class="meta-pill">⚡ ${product.specs.Capacity}</span>`
        : `<span class="meta-pill">⚡ High Output</span>`;

      const shelfLifeHtml = product.shelfLife
        ? `<span class="meta-pill">⏳ ${product.shelfLife}</span>`
        : `<span class="meta-pill">🛡️ Commercial Grade</span>`;

      const waLink = getWhatsAppLink(product.name);

      card.innerHTML = `
        ${badgeHtml}
        <div class="product-image-wrap">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-body">
          <div class="product-brand">${product.brand}</div>
          <h3 class="product-title">${product.name}</h3>
          <p class="product-tagline">${product.tagline}</p>
          <div class="product-meta-pills">
            ${metaHtml}
            ${shelfLifeHtml}
            <span class="meta-pill" style="color: #c8681b; background: #fff5ee;">📍 All India Delivery & Export</span>
          </div>
          <div class="product-actions">
            <a href="${product.seoUrl || 'product-detail.html?id=' + product.id}" class="btn btn-outline btn-sm">
              View Details
            </a>
            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-wa btn-sm">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.586 1.761.88 2.79.88 3.181 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.766-5.766-5.766zm9.969 5.766c0 5.514-4.486 10-10 10-1.802 0-3.513-.487-5.008-1.341l-5.992 1.565 1.597-5.836c-.958-1.579-1.597-3.468-1.597-5.388 0-5.514 4.486-10 10-10s10 4.486 10 10z"/></svg>
              Enquire
            </a>
          </div>
        </div>
      `;

      productsContainer.appendChild(card);
    });
  }

  // Initial render
  // Check URL parameters for category
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get("cat") || "all";

  filterButtons.forEach(btn => {
    if (btn.getAttribute("data-filter") === catParam) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }

    btn.addEventListener("click", function () {
      filterButtons.forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      const filter = this.getAttribute("data-filter");
      renderCards(filter);
    });
  });

  renderCards(catParam);
}

// 4. Product Detail Page Renderer
function initProductDetailPage() {
  const detailContainer = document.getElementById("productDetailContainer");
  if (!detailContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  const product = getProductById(productId) || productsData[0];

  // Set page title for SEO
  document.title = `${product.name} | Espresso Tech Vending Solution Mumbai`;

  // Render Gallery Thumbnails
  const gallery = product.gallery && product.gallery.length ? product.gallery : [product.image];
  let thumbsHtml = "";
  if (gallery.length > 1) {
    thumbsHtml = gallery
      .map(
        (img, idx) => `
        <div class="thumb-item ${idx === 0 ? "active" : ""}" data-src="${img}">
          <img src="${img}" alt="${product.name} thumbnail ${idx + 1}">
        </div>
      `
      )
      .join("");
  }

  // Specifications or Features
  let specsHtml = "";
  if (product.specs) {
    const rows = Object.entries(product.specs)
      .map(
        ([key, val]) => `
        <tr>
          <th>${key}</th>
          <td>${val}</td>
        </tr>
      `
      )
      .join("");
    specsHtml = `
      <div class="detail-box">
        <h3>
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H6v-2h6v2zm4-4H6v-2h10v2zm0-4H6V7h10v2z"/></svg>
          Technical Specifications
        </h3>
        <table class="spec-table">
          <tbody>${rows}</tbody>
        </table>
      </div>
    `;
  }

  // Features List
  let featuresHtml = "";
  if (product.features && product.features.length) {
    const fItems = product.features
      .map(
        f => `
        <li style="display:flex; align-items:flex-start; gap:10px; margin-bottom:8px;">
          <span style="color:#c8681b; font-size:1.1rem; line-height:1;">✔</span>
          <span style="font-size:0.95rem; color:#231f20;">${f}</span>
        </li>
      `
      )
      .join("");

    featuresHtml = `
      <div class="detail-box">
        <h3>
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          Key Features & Highlights
        </h3>
        <ul style="list-style:none; padding:0;">${fItems}</ul>
      </div>
    `;
  }

  // Preparation Guide (if premix)
  let prepHtml = "";
  if (product.preparation && product.preparation.length) {
    const steps = product.preparation
      .map(
        (step, idx) => `
        <li>
          <div class="step-num">${idx + 1}</div>
          <div>${step}</div>
        </li>
      `
      )
      .join("");

    prepHtml = `
      <div class="detail-box">
        <h3>
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/></svg>
          Preparation Method / How to Prepare
        </h3>
        <ul class="steps-list">${steps}</ul>
      </div>
    `;
  }

  // Package & Product Details
  let productDetailsMeta = "";
  if (product.category === "premix") {
    productDetailsMeta = `
      <div class="detail-box">
        <h3>
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
          Product Details
        </h3>
        <table class="spec-table">
          <tbody>
            <tr><th>Net Weight</th><td>${product.netWeight || "N/A"}</td></tr>
            <tr><th>Shelf Life</th><td>${product.shelfLife || "6 Months"}</td></tr>
            <tr><th>Flavour</th><td>${product.flavour || "Pure Authentic Blend"}</td></tr>
            <tr><th>Storage Instructions</th><td>${product.storage || "Store in cool & dry place"}</td></tr>
            <tr><th>Package Includes</th><td>${product.packageIncludes || "1 Pack"}</td></tr>
            <tr><th>Supply Coverage</th><td>PAN India & Worldwide Export</td></tr>
          </tbody>
        </table>
      </div>
    `;
  }

  // Applications (if Vending)
  let appHtml = "";
  if (product.applications && product.applications.length) {
    const apps = product.applications
      .map(
        a => `
        <li style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
          <span style="color:#25D366; font-weight:bold;">✔</span>
          <span>${a}</span>
        </li>
      `
      )
      .join("");
    appHtml = `
      <div class="detail-box">
        <h3>
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
          Ideal Applications & Sectors
        </h3>
        <ul style="list-style:none; padding:0;">${apps}</ul>
      </div>
    `;
  }

  const waLink = getWhatsAppLink(product.name);

  detailContainer.innerHTML = `
    <div class="detail-layout">
      <!-- Left: Image Gallery -->
      <div class="detail-gallery">
        <div class="detail-main-img-wrap">
          <img id="detailMainImg" class="detail-main-img" src="${gallery[0]}" alt="${product.name}">
        </div>
        ${gallery.length > 1 ? `<div class="detail-thumbnails">${thumbsHtml}</div>` : ""}
        
        <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid var(--color-border); text-align: left;">
          <p style="font-size: 0.88rem; color: #645e59; margin-bottom: 8px;">
            <strong>On-site Demos in:</strong> Ghatkopar, Powai, Andheri, BKC, Thane, Vashi, Mahape, Navi Mumbai.
          </p>
          <div style="display:flex; gap:10px; flex-wrap:wrap;">
            <span class="meta-pill" style="background:#e8f5e9; color:#1b5e20;">✔ 100% Genuine Quality</span>
            <span class="meta-pill" style="background:#fff3e0; color:#e65100;">✔ Direct Manufacturer Rate</span>
            <span class="meta-pill" style="background:#e3f2fd; color:#0d47a1;">✔ Bulk HoReCa Pricing</span>
          </div>
        </div>
      </div>

      <!-- Right: Product Information -->
      <div class="detail-info">
        <div class="detail-badge-row">
          <span class="hero-badge" style="color:#c8681b; background:#fbf3ec; border-color:#f0ded2;">
            ${product.brand}
          </span>
          <span class="meta-pill" style="background:#e2f7ea; color:#128c7e; font-weight:700;">
            ${product.badge || "Verified Product"}
          </span>
        </div>

        <h1 class="detail-title">${product.name}</h1>
        <p class="detail-tagline">${product.tagline}</p>
        
        <p style="font-size: 1.05rem; line-height: 1.7; color: #4a4542;">
          ${product.description}
        </p>

        <!-- CTA Buttons -->
        <div style="display:flex; gap:14px; flex-wrap:wrap; margin: 10px 0;">
          <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-wa btn-lg" style="flex:1; min-width:240px;">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.586 1.761.88 2.79.88 3.181 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.766-5.766-5.766zm9.969 5.766c0 5.514-4.486 10-10 10-1.802 0-3.513-.487-5.008-1.341l-5.992 1.565 1.597-5.836c-.958-1.579-1.597-3.468-1.597-5.388 0-5.514 4.486-10 10-10s10 4.486 10 10z"/></svg>
            Order / Enquire on WhatsApp
          </a>
          <a href="tel:+919320066767" class="btn btn-secondary btn-lg" style="flex:1; min-width:200px;">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            Call +91-9320066767
          </a>
          <a href="tel:+919833480767" class="btn btn-secondary btn-lg" style="flex:1; min-width:200px;">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            Call +91-9833480767
          </a>
        </div>

        ${specsHtml}
        ${featuresHtml}
        ${prepHtml}
        ${productDetailsMeta}
        ${appHtml}

        <div style="background:#f7f3ed; padding:20px; border-radius:var(--radius-md); border:1px solid #e5dacf;">
          <h4 style="font-family:var(--font-heading); font-size:1.1rem; color:#1e110a; margin-bottom:6px;">
            Distributorship & HoReCa Bulk Orders
          </h4>
          <p style="font-size:0.9rem; color:#645e59; margin-bottom:12px;">
            Looking for wholesale distributor pricing, white label contract manufacturing, or corporate canteen installation across Mumbai, Thane, or Navi Mumbai?
          </p>
          <a href="services.html" class="btn btn-outline btn-sm" style="background:#fff;">
            Explore Services & Distributorship →
          </a>
        </div>
      </div>
    </div>
  `;

  // Hook Thumbnail Switcher
  const mainImg = document.getElementById("detailMainImg");
  const thumbs = document.querySelectorAll(".thumb-item");
  thumbs.forEach(thumb => {
    thumb.addEventListener("click", function () {
      thumbs.forEach(t => t.classList.remove("active"));
      this.classList.add("active");
      const newSrc = this.getAttribute("data-src");
      if (mainImg) {
        mainImg.src = newSrc;
      }
    });
  });
}

// 5. "Copy All Content to Clipboard" Feature for the User
function initClipboardFeature() {
  const copyBtn = document.getElementById("copyAllContentBtn");
  const toast = document.getElementById("clipboardToast");

  if (!copyBtn) return;

  const completeTextContent = `
======================================================
ESPRESSOTECH VENDING SOLUTION - COMPANY & PRODUCT PORTFOLIO
======================================================

CONTACT DETAILS:
Company Name : Espresso Tech Vending Solution
Telephone    : +91 22- 251 12345 / +91 22- 251 33333
Mobile No    : +91-9320066767 / +91-9833480767
Email ID     : info@espressotech.in
Website      : www.espressotech.in
Facebook     : https://www.facebook.com/profile.php?id=61595606516311
Instagram    : https://www.instagram.com/_alinza__chai_?utm_source=qr
LinkedIn     : https://www.linkedin.com/in/alinza-chai-225874444/
Address      : 4, Narayan Nagar, Nari Sewa Sadan Road, Near Trimurti Restaurant & Bar, Ghatkopar(W), Mumbai-400086, India
Major Coverage: Mumbai, Thane, Navi Mumbai & PAN India

COMPANY PROFILE:
We are a premier manufacturer of electronic and beverage-vending machines, tea/coffee premixes, and specialty beverage systems. Manufactured using high-grade raw materials procured from leading global vendors and quality checked at our in-house QA lab in Ghatkopar, Mumbai.

BRANDS:
- ALINZA
- CAFE RICH

KEY PRODUCT CATEGORIES:
1. INSTANT TEA & COFFEE PREMIXES (1 KG Packs & 20 Sachets Boxes)
2. AUTOMATIC BEVERAGE VENDING MACHINES & DIGITAL HOT WATER KETTLES

---
PREMIX PRODUCTS:
1. Elaichi Tea Instant Premix 1 KG
   - Flavour: Elaichi (Cardamom) Tea
   - Ready in Seconds, Just Add Hot Water
   - Net Weight: 1 Kg | Shelf Life: 6 Months

2. Masala Tea Instant Premix 1 Kg
   - Traditional Indian Masala Chai with Cardamom, Ginger, Clove, Cinnamon
   - Just Add Hot Water | 1 Kg Pack

3. Ginger Tea Instant Premix 1 Kg
   - Authentic Ginger (Adrak) Chai | Warming & Refreshing
   - 1 Kg Pack | 6 Months Shelf Life

4. Premium Coffee Instant Premix 1 Kg
   - Rich & Creamy Café-style Coffee
   - 1 Kg Pack | 6 Months Shelf Life

5. Lemon Instant Tea Premix 1 Kg
   - Hot & Chilled Iced Lemon Tea Mix
   - 1 Kg Pack | 6 Months Shelf Life

6. ALINZA Chai Magic Formula – 300 gm
   - Start Your Own Tea Business Without Any Franchise
   - 50+ Cups from one 300 gm pack!
   - Preparation: 2L milk + 1L water, add 300g ALINZA formula, boil 5 mins.

7. Premium Instant Coffee Premix – 20 Sachets Box
8. Premium Instant Masala Tea Premix – 20 Sachets Box
9. Premium Instant Ginger Tea Premix – 20 Sachets Box
10. Premium Instant Lemon Tea Premix – 20 Sachets Box
11. Premium Instant Elaichi Tea Premix – 20 Sachets Box
12. Aam Panna Instant Premix (1 Kg & 20 Sachets Box)

---
VENDING MACHINES & EQUIPMENT:
1. ALINZA / CAFE RICH Multi-Purpose Hot Water Kettle (10 Liter)
   - Capacity: 10 Liters
   - Food-Grade Stainless Steel Body
   - Fully Digital LED Microprocessor Temperature Controller
   - Tap Dispensing | Heavy-Duty Commercial Use

2. Bean to Cup Automatic Espresso Coffee Machine
   - Fresh Bean to Cup Brewing with Built-in Conical Burr Grinder
   - Up to 8 Beverage Options (Espresso, Latte, Cappuccino, etc.)
   - One-Touch Digital Microprocessor Control

3. Digital Fully Automatic 4 Option + Hot Water Vending Machine
   - 4 Beverage Selections + Dedicated Hot Water
   - High-Power 2000W Heater | 20L Bubble Top Compatible | RFID & QR Code Ready

4. Digital Fully Automatic 3 Option + Hot Water Vending Machine
   - 3 Beverage Selections + Dedicated Hot Water
   - 2000W Heater | Consistent Taste | Closed Hygienic Chamber

5. Digital Fully Automatic 2 Option + Hot Water Vending Machine
   - 2 Beverage Selections (Tea & Coffee) + Hot Water
   - Compact, Durable, Cost-Effective for Clinics & Small Offices

---
SERVICES:
1. Distributorship Opportunities across India (High margins, direct manufacturer pricing)
2. HoReCa Solutions for Hotels, Restaurants, Caterers & Corporate Cafeterias
3. White Labelling & Private Label Contract Manufacturing
======================================================
`;

  copyBtn.addEventListener("click", function () {
    navigator.clipboard
      .writeText(completeTextContent.trim())
      .then(() => {
        if (toast) {
          toast.classList.add("show");
          setTimeout(() => {
            toast.classList.remove("show");
          }, 3500);
        } else {
          alert("Company profile and product content copied to clipboard!");
        }
      })
      .catch(err => {
        console.error("Clipboard copy failed: ", err);
        // Fallback
        const textarea = document.createElement("textarea");
        textarea.value = completeTextContent.trim();
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        if (toast) {
          toast.classList.add("show");
          setTimeout(() => toast.classList.remove("show"), 3500);
        }
      });
  });
}

// 6. Contact Form Handler (Astra Custom API + WhatsApp Desk)
function initContactForm() {
  const form = document.getElementById("websiteContactForm");
  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const name = document.getElementById("formName")?.value || "";
    const phone = document.getElementById("formPhone")?.value || "";
    const email = document.getElementById("formEmail")?.value || "";
    const city = document.getElementById("formCity")?.value || "Mumbai";
    const product = document.getElementById("formProduct")?.value || "General Enquiry";
    const msg = document.getElementById("formMessage")?.value || "";
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnHtml = submitBtn ? submitBtn.innerHTML : "Submit Inquiry";

    let feedback = document.getElementById("formFeedback");
    if (!feedback) {
      feedback = document.createElement("div");
      feedback.id = "formFeedback";
      feedback.style.marginTop = "14px";
      feedback.style.padding = "12px";
      feedback.style.borderRadius = "8px";
      feedback.style.fontSize = "14px";
      feedback.style.textAlign = "center";
      form.appendChild(feedback);
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending Inquiry...";
    }
    feedback.style.display = "block";
    feedback.style.background = "#fff8e6";
    feedback.style.color = "#8f4b00";
    feedback.innerHTML = "Sending enquiry to dialnsearch@gmail.com...";

    try {
      const response = await fetch("https://astra.salesfundaa.com/v1/CRM1/espressotech-in/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          phone: phone,
          email: email,
          city: city,
          productName: product,
          message: msg,
          subject: `Website Inquiry: ${product}`
        })
      });

      const dataRaw = await response.json();
      const data = typeof dataRaw === "string" ? JSON.parse(dataRaw) : dataRaw;

      if (data && (data.success || data.ok)) {
        feedback.style.background = "#dcfce7";
        feedback.style.color = "#15803d";
        feedback.innerHTML = "✅ Inquiry sent successfully! Opening WhatsApp...";
      } else {
        feedback.style.background = "#fef9c3";
        feedback.style.color = "#854d0e";
        feedback.innerHTML = "Inquiry recorded. Connecting to WhatsApp...";
      }
    } catch (err) {
      console.warn("Enquiry API note:", err);
      feedback.style.background = "#fef9c3";
      feedback.style.color = "#854d0e";
      feedback.innerHTML = "Connecting to WhatsApp...";
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
      }
      setTimeout(() => {
        const text = `Hello Espressotech, My Name: ${name}, Phone: ${phone}, Email: ${email}, City: ${city}, Interested In: ${product}, Message: ${msg}`;
        const waUrl = `https://wa.me/919320066767?text=${encodeURIComponent(text)}`;
        window.open(waUrl, "_blank");
      }, 1000);
    }
  });
}

// 7. Interactive Coffee Experience & Mouse Parallax
function initCoffeeAnimations() {
  const brewButtons = document.querySelectorAll(".brew-btn");
  const statusText = document.getElementById("brewStatusText");
  const tempBadge = document.getElementById("brewTempBadge");
  const feedbackText = document.getElementById("brewFeedbackText");
  const orderBtn = document.getElementById("brewOrderBtn");
  const heroCard = document.querySelector(".hero-visual-card");
  const machineImg = document.getElementById("heroMachineImg");
  const aromaRings = document.querySelector(".aroma-ring-container");

  const drinkDetails = {
    "Espresso": {
      desc: "Rich 9-Bar Crema Extraction with Freshly Ground Beans in 8s",
      temp: "🌡️ 92°C BOILER",
      waText: "Hello Espressotech, I am interested in tasting or ordering the Espresso Coffee Solution & Bean-to-Cup Machine."
    },
    "Cappuccino": {
      desc: "Velvety Microfoam with Silky Dairy Layering in 12s",
      temp: "🌡️ 88°C OPTIMAL",
      waText: "Hello Espressotech, I would like to inquire about your Cappuccino Premix and Commercial Machines."
    },
    "Elaichi Chai": {
      desc: "Royally Fragrant Green Cardamom Chai with Rich Body in 6s",
      temp: "🌡️ 94°C PIPING HOT",
      waText: "Hello Espressotech, I want to order Elaichi Tea Premix (1Kg / Sachets) for my office/store."
    },
    "Masala Chai": {
      desc: "Authentic Kadak Mumbai Chai with Clove, Ginger & Spices in 6s",
      temp: "🌡️ 94°C PIPING HOT",
      waText: "Hello Espressotech, I want to order Traditional Masala Chai Premix and Vending Dispenser."
    }
  };

  if (brewButtons.length > 0) {
    brewButtons.forEach(btn => {
      btn.addEventListener("click", function () {
        brewButtons.forEach(b => b.classList.remove("active"));
        this.classList.add("active");

        const drink = this.getAttribute("data-drink");
        const details = drinkDetails[drink] || drinkDetails["Espresso"];

        if (statusText) {
          statusText.innerHTML = `DISPENSING <span style="color:#ffc06a;">${drink.toUpperCase()}</span>...`;
          setTimeout(() => {
            statusText.innerHTML = `READY • FRESH ${drink.toUpperCase()} SERVED`;
          }, 1200);
        }

        if (tempBadge) {
          tempBadge.textContent = details.temp;
        }

        if (feedbackText) {
          feedbackText.innerHTML = `Selected: <strong>${drink}</strong> (${details.desc})`;
        }

        if (orderBtn) {
          orderBtn.href = `https://wa.me/919320066767?text=${encodeURIComponent(details.waText)}`;
        }

        // Aroma & machine pulse reaction
        if (aromaRings) {
          aromaRings.style.animation = "none";
          void aromaRings.offsetWidth; // trigger reflow
          aromaRings.style.animation = "aroma-pulse 2s ease-out";
        }

        if (machineImg) {
          machineImg.style.transform = "scale(1.05) translateY(-5px)";
          setTimeout(() => {
            machineImg.style.transform = "";
          }, 350);
        }
      });
    });
  }

  // Smooth Mouse Parallax on Desktop
  const heroSection = document.querySelector(".hero-section");
  const beans = document.querySelectorAll(".coffee-bean-wrap");

  if (heroSection && beans.length > 0 && window.innerWidth > 992) {
    heroSection.addEventListener("mousemove", function (e) {
      const rect = heroSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      beans.forEach((bean, idx) => {
        const factor = (idx + 1) * 12;
        bean.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });

      if (heroCard) {
        heroCard.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
      }
    });

    heroSection.addEventListener("mouseleave", function () {
      beans.forEach(bean => {
        bean.style.transform = "";
      });
      if (heroCard) {
        heroCard.style.transform = "";
      }
    });
  }
}

