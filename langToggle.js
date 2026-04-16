// Function to load translations
async function loadTranslations(language) {
  try {
    const response = await fetch(`/translations/${language}.json`);
    if (!response.ok) {
      throw new Error(`Failed to load translations for ${language}`);
    }
    const translations = await response.json();
    return translations;
  } catch (error) {
    console.error("Error loading translations:", error);
    return null;
  }
}

// Function to update the UI with translations
function updateUI(translations) {
  // Select all elements with the data-i18n attribute
  const elements = document.querySelectorAll("[data-i18n]");

  // Loop through each element and update its text content
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[key]) {
      element.textContent = translations[key];
    }
  });
}

// Event listener for language toggle
document.addEventListener("DOMContentLoaded", () => {
  const languageToggle = document.getElementById("languageToggle");

  // Load default language (e.g., English)
  loadTranslations("en").then((translations) => {
    if (translations) {
      updateUI(translations);
    }
  });

  // Update translations when language changes
  languageToggle.addEventListener("change", async (event) => {
    const selectedLanguage = event.target.value;
    const translations = await loadTranslations(selectedLanguage);
    if (translations) {
      updateUI(translations);
    }
  });
});
