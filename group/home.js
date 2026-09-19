(() => {
  "use strict";
  const dialog = document.querySelector(".artwork-viewer");
  if (!dialog || typeof dialog.showModal !== "function") return;

  const stage = dialog.querySelector(".artwork-stage");
  const image = stage.querySelector("img");
  const close = dialog.querySelector(".artwork-close");
  const zoom = dialog.querySelector(".artwork-zoom");
  const title = dialog.querySelector("#artwork-viewer-title");
  const caption = dialog.querySelector("#artwork-viewer-caption");
  const original = dialog.querySelector(".artwork-viewer-footer a");
  let opener = null;

  function setZoom(enabled) {
    stage.classList.toggle("is-zoomed", enabled);
    zoom.textContent = enabled ? "Fit image" : "Zoom in";
    stage.scrollTop = 0;
    stage.scrollLeft = 0;
  }

  document.querySelectorAll("[data-artwork-preview]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const figure = link.closest("figure");
      const source = figure?.querySelector("img");
      if (!source) return;
      event.preventDefault();
      opener = link;
      image.src = source.currentSrc || source.src;
      image.alt = source.alt;
      image.width = source.naturalWidth || source.width;
      image.height = source.naturalHeight || source.height;
      stage.classList.toggle("is-light", figure.classList.contains("strategy-figure"));
      stage.style.setProperty("--artwork-zoom-width", `${Math.max(image.width, 1100)}px`);
      title.textContent = figure.dataset.artworkTitle;
      caption.textContent = figure.dataset.artworkCaption;
      original.href = image.src;
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
