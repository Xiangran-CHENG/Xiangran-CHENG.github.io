(() => {
  "use strict";

  const header = document.querySelector(".site-header");
  const navigation = document.querySelector(".primary-nav");

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
  function updateHeader() {
    document.documentElement.style.setProperty("--header-offset", `${Math.ceil(header.getBoundingClientRect().height) + 18}px`);
    updateCurrentSection();
  }
  window.addEventListener("resize", updateHeader);
  if ("ResizeObserver" in window) new ResizeObserver(updateHeader).observe(header);
  updateHeader();
})();
