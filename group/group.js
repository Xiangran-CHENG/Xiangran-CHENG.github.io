(() => {
  "use strict";

  const legacySections = {
    "#research": "research.html",
    "#people": "people.html",
    "#join": "join.html",
    "#synthesis": "research.html#synthesis",
    "#energy-materials": "research.html#energy-materials",
    "#autonomous-lab": "research.html#autonomous-lab"
  };
  function openLegacySection() {
    const target = document.body.dataset.page === "home" && legacySections[window.location.hash];
    if (!target) return false;
    window.location.replace(new URL(target, window.location.href));
    return true;
  }
  if (openLegacySection()) return;
  window.addEventListener("hashchange", openLegacySection);

  const header = document.querySelector(".site-header");
  function updateHeader() {
    document.documentElement.style.setProperty("--header-offset", `${Math.ceil(header.getBoundingClientRect().height) + 18}px`);
  }
  window.addEventListener("resize", updateHeader);
  if ("ResizeObserver" in window) new ResizeObserver(updateHeader).observe(header);
  updateHeader();
})();
