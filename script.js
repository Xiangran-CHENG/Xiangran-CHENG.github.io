// Preserve links to the former complete publications section.
const openPublicationsPage = () => {
  if (window.location.hash === "#publications") {
    window.location.replace(new URL("group/publications.html", window.location.href));
  }
};
openPublicationsPage();
window.addEventListener("hashchange", openPublicationsPage);

const languageButtons = document.querySelectorAll("[data-set-language]");
const languageStorageKey = "homepage-language";

const setLanguage = (language) => {
  if (language !== "en" && language !== "zh") return;
  document.body.dataset.language = language;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.setLanguage === language));
  });
  try {
    window.localStorage.setItem(languageStorageKey, language);
  } catch {
    // Language switching remains available when browser storage is disabled.
  }
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.setLanguage));
});

try {
  const savedLanguage = window.localStorage.getItem(languageStorageKey);
  if (savedLanguage) setLanguage(savedLanguage);
} catch {
  // English is the default when no saved preference is available.
}
