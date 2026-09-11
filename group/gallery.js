(() => {
  "use strict";
  const dialog = document.querySelector(".image-viewer");
  if (!dialog || typeof dialog.showModal !== "function") return;
  const items = [...document.querySelectorAll("[data-gallery]")];
  const image = dialog.querySelector(".viewer-image");
  const title = dialog.querySelector("#viewer-title");
  const caption = dialog.querySelector("#viewer-caption");
  const previous = dialog.querySelector(".viewer-previous");
  const next = dialog.querySelector(".viewer-next");
  const count = dialog.querySelector(".viewer-count");
  const original = dialog.querySelector(".viewer-original");
  const close = dialog.querySelector(".viewer-close");
  let index = 0;
  let opener = null;
  function showItem(position) {
    index = Math.max(0, Math.min(items.length - 1, position));
    const item = items[index];
    image.src = item.href;
    image.alt = item.querySelector("img").alt;
    title.textContent = item.dataset.title;
    caption.textContent = item.dataset.caption;
    original.href = item.href;
    count.textContent = `${index + 1} / ${items.length}`;
    previous.disabled = index === 0;
    next.disabled = index === items.length - 1;
  }
  items.forEach((item, position) => {
    item.addEventListener("click", (event) => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = item;
      showItem(position);
      dialog.showModal();
      document.body.classList.add("viewer-open");
      close.focus();
    });
  });
  close.addEventListener("click", () => dialog.close());
  previous.addEventListener("click", () => showItem(index - 1));
  next.addEventListener("click", () => showItem(index + 1));
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") { event.preventDefault(); showItem(index - 1); }
    if (event.key === "ArrowRight") { event.preventDefault(); showItem(index + 1); }
  });
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("viewer-open");
    opener?.focus({ preventScroll: true });
  });
})();
