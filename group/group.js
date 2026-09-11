(() => {
  "use strict";
  const buttons = document.querySelectorAll("[data-set-language]");
  const storageKey = "homepage-language";
  const descriptions = {
    zh: "Materials Builders 课题组：连接材料科学、人工智能与实验验证，探索材料合成的世界模型。了解研究方向、团队成员与博士招生信息。",
    en: "Materials Builders connects materials science, AI, and experimental validation to explore world models for materials synthesis. Meet our team and discover PhD research opportunities."
  };
  function setLanguage(language, persist = false) {
    if (language !== "zh" && language !== "en") return;
    document.body.dataset.language = language;
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    buttons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.setLanguage === language)));
    document.querySelectorAll("[data-alt-zh]").forEach((image) => {
      image.alt = language === "zh" ? image.dataset.altZh : image.dataset.altEn;
    });
    document.querySelector('meta[name="description"]').content = descriptions[language];
    if (persist) {
      try { localStorage.setItem(storageKey, language); } catch { /* The page remains usable without browser storage. */ }
    }
  }
  buttons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.setLanguage, true)));
  try {
    const savedLanguage = localStorage.getItem(storageKey);
    if (savedLanguage) setLanguage(savedLanguage);
  } catch { /* Keep the readable Chinese default. */ }

  const header = document.querySelector(".site-header");
  const menu = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".primary-nav");
  function setMenu(open) {
    header.classList.toggle("nav-open", open);
    menu.setAttribute("aria-expanded", String(open));
  }
  menu.addEventListener("click", () => setMenu(menu.getAttribute("aria-expanded") !== "true"));
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      menu.focus();
    }
  });
  document.documentElement.classList.add("js-ready");

  const sections = [
    ["#main", document.querySelector(".hero")],
    ["#research", document.querySelector("#research")],
    ["#people", document.querySelector("#people")],
    ["#join", document.querySelector("#join")]
  ];
  const sectionLinks = navigation.querySelectorAll('a[href^="#"]');
  let scheduled = false;
  function updateCurrentSection() {
    const boundary = header.getBoundingClientRect().height + 120;
    let current = "#main";
    sections.forEach(([href, section]) => {
      if (section.getBoundingClientRect().top <= boundary) current = href;
    });
    sectionLinks.forEach((link) => {
      if (link.getAttribute("href") === current) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    scheduled = false;
  }
  window.addEventListener("scroll", () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateCurrentSection);
    }
  }, { passive: true });
  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 981px)").matches) setMenu(false);
    updateCurrentSection();
  });
  updateCurrentSection();
})();
