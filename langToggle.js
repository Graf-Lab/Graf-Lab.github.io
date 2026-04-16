// This object will store our translations
let translations = {};

// This function fetches the translation file
async function loadTranslations(locale) {
  try {
    const translations = await import(`./lang/${locale}.json`);
    return translations.default;
  } catch (error) {
    console.error("Error loading translation file:", error);
    const defaultTranslations = await import("./lang/en.json");
    return defaultTranslations.default;
  }
}
