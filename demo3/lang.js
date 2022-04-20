let language = "en";

function setLanguage(lang) {
  if (!["en", "es", "de"].includes(lang)) return;
  language = lang;
}

module.exports = language;
