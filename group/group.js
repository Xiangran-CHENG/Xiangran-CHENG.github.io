(() => {
  "use strict";

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
  ].filter(([, section]) => section);
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
    if (window.matchMedia("(min-width: 961px)").matches) setMenu(false);
    updateCurrentSection();
  });
  updateCurrentSection();
})();
