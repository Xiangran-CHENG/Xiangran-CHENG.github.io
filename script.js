const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

const languageButtons = document.querySelectorAll("[data-set-language]");
const pageBody = document.body;
const pageRoot = document.documentElement;
const languageStorageKey = "homepage-language";

const setLanguage = (language) => {
  pageBody.dataset.language = language;
  pageRoot.lang = language === "zh" ? "zh-CN" : "en";

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.setLanguage === language);
  });

  window.localStorage.setItem(languageStorageKey, language);
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.setLanguage);
  });
});

const savedLanguage = window.localStorage.getItem(languageStorageKey);
if (savedLanguage === "zh" || savedLanguage === "en") {
  setLanguage(savedLanguage);
}
