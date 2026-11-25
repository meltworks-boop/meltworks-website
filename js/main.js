// Meltworks.studio — small, dependency-free interactions
(() => {
  const header = document.querySelector(".site-header");
  const onScroll = () => header && header.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  // Reveal on scroll
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add("is-in"));
  }

  // Shop filters (cards carry data-cat="home desk ...")
  document.querySelectorAll("[data-filter]").forEach((chip) => {
    chip.addEventListener("click", () => {
      const cat = chip.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((c) => c.classList.toggle("is-active", c === chip));
      document.querySelectorAll("[data-cat]").forEach((card) => {
        card.hidden = cat !== "all" && !card.dataset.cat.split(" ").includes(cat);
      });
    });
  });

  // Colour swatches on product page
  document.querySelectorAll(".swatch").forEach((s) => {
    s.addEventListener("click", () => {
      document.querySelectorAll(".swatch").forEach((x) => x.classList.toggle("is-active", x === s));
      const out = document.querySelector("[data-swatch-name]");
      if (out) out.textContent = s.getAttribute("aria-label");
    });
  });

  // Theme switch: Ember (default, dark) / Chalk (light)
  const root = document.documentElement;
  const syncTheme = () => {
    const cur = root.dataset.theme === "light" ? "light" : "dark";
    document.querySelectorAll("[data-theme-set]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.themeSet === cur)));
  };
  document.querySelectorAll("[data-theme-set]").forEach((b) => {
    b.addEventListener("click", () => {
      const t = b.dataset.themeSet;
      if (t === "light") root.dataset.theme = "light"; else delete root.dataset.theme;
      try { localStorage.setItem("mw-theme", t); } catch (e) {}
      syncTheme();
    });
  });
  syncTheme();

  // Footer year
  const y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();
