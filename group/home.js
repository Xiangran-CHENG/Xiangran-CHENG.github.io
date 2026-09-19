(() => {
  "use strict";
  const dialog = document.querySelector(".artwork-viewer");
  const source = document.querySelector(".philosophy-image");
  if (!dialog || !source || typeof dialog.showModal !== "function") return;

  const stage = dialog.querySelector(".artwork-stage");
  const image = stage.querySelector("img");
  const close = dialog.querySelector(".artwork-close");
  const zoom = dialog.querySelector(".artwork-zoom");
  let opener = null;

  function setZoom(enabled) {
    stage.classList.toggle("is-zoomed", enabled);
    zoom.textContent = enabled ? "Fit image" : "Zoom in";
    stage.scrollTop = 0;
    stage.scrollLeft = 0;
  }

  document.querySelectorAll("[data-philosophy-preview]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      image.src = source.href;
      image.alt = source.querySelector("img").alt;
      setZoom(false);
      dialog.showModal();
      document.body.classList.add("artwork-open");
      close.focus();
    });
  });

  zoom.addEventListener("click", () => setZoom(!stage.classList.contains("is-zoomed")));
  close.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("artwork-open");
    setZoom(false);
    opener?.focus({ preventScroll: true });
  });
})();
