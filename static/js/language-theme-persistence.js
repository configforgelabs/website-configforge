/**
 * Language and Theme Persistence Script
 * Handles automatic browser language detection and localStorage persistence
 * for both language and dark/light theme preferences
 */

(function () {
  'use strict';

  // Configuration
  const STORAGE_KEYS = {
    LANGUAGE: 'docusaurus.language',
    THEME: 'theme'
  };

  const SUPPORTED_LANGUAGES = ['en', 'de'];
  const DEFAULT_LANGUAGE = 'en';

  /**
   * Get browser's preferred language
   * @returns {string} Two-letter language code
   */
  function getBrowserLanguage() {
    // Get all browser languages in order of preference
    const languages = navigator.languages || [navigator.language || navigator.userLanguage];

    for (const lang of languages) {
      // Extract two-letter language code
      const langCode = lang.split('-')[0].toLowerCase();

      // Check if we support this language
      if (SUPPORTED_LANGUAGES.includes(langCode)) {
        return langCode;
      }
    }

    return DEFAULT_LANGUAGE;
  }

  /**
   * Get stored language preference or auto-detect
   * @returns {string} Language code to use
   */
  function getLanguagePreference() {
    // Check if user has a stored preference
    const storedLanguage = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    if (storedLanguage && SUPPORTED_LANGUAGES.includes(storedLanguage)) {
      return storedLanguage;
    }

    // Auto-detect browser language
    const browserLanguage = getBrowserLanguage();

    // Store the detected language for future visits
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, browserLanguage);

    return browserLanguage;
  }

  /**
   * Get current language from URL or default
   * @returns {string} Current language code
   */
  function getCurrentLanguage() {
    const pathSegments = window.location.pathname.split('/').filter(Boolean);

    // Check if first segment is a language code
    if (pathSegments.length > 0 && SUPPORTED_LANGUAGES.includes(pathSegments[0])) {
      return pathSegments[0];
    }

    return DEFAULT_LANGUAGE;
  }

  /**
   * Redirect to appropriate language version
   * @param {string} targetLanguage - Language to redirect to
   */
  function redirectToLanguage(targetLanguage) {
    const currentLanguage = getCurrentLanguage();

    // Don't redirect if already on correct language
    if (currentLanguage === targetLanguage) {
      return;
    }

    let newPath = window.location.pathname;

    // Remove current language from path if it exists
    if (currentLanguage !== DEFAULT_LANGUAGE) {
      newPath = newPath.replace(`/${currentLanguage}`, '');
    }

    // Add target language to path (unless it's default)
    if (targetLanguage !== DEFAULT_LANGUAGE) {
      newPath = `/${targetLanguage}${newPath}`;
    }

    // Ensure path starts with /
    if (!newPath.startsWith('/')) {
      newPath = '/' + newPath;
    }

    // Redirect to new language
    window.location.href = newPath + window.location.search + window.location.hash;
  }

  /**
   * Save language preference when user changes it
   */
  function setupLanguagePersistence() {
    // Monitor for language changes in the navbar dropdown
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === 'childList') {
          // Check for language dropdown links
          const languageLinks = document.querySelectorAll('[class*="localeDropdown"] a');
          languageLinks.forEach(function (link) {
            link.addEventListener('click', function (e) {
              // Extract language from href
              const href = link.getAttribute('href');
              const langMatch = href.match(/^\/([a-z]{2})(\/|$)/);
              const targetLanguage = langMatch ? langMatch[1] : DEFAULT_LANGUAGE;

              // Save preference
              localStorage.setItem(STORAGE_KEYS.LANGUAGE, targetLanguage);
            });
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  /**
   * Get system theme preference
   * @returns {string} 'dark' or 'light'
   */
  function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  /**
   * Initialize theme persistence
   */
  function setupThemePersistence() {
    // Save theme changes to localStorage
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          const theme = document.documentElement.getAttribute('data-theme');
          if (theme) {
            localStorage.setItem(STORAGE_KEYS.THEME, theme);
          }
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    // Listen for system theme changes
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', function (e) {
        // Only auto-switch if user hasn't set a manual preference
        const storedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
        if (!storedTheme) {
          const newTheme = e.matches ? 'dark' : 'light';
          document.documentElement.setAttribute('data-theme', newTheme);
        }
      });
    }
  }

  /**
   * Initialize the language and theme system
   */
  function initialize() {
    // Only run on initial page load, not on every navigation
    if (sessionStorage.getItem('languageInitialized')) {
      return;
    }

    // Get preferred language
    const preferredLanguage = getLanguagePreference();

    // Redirect if necessary (only on initial load)
    if (window.location.pathname === '/' || window.location.pathname.match(/^\/[^\/]*$/)) {
      const currentLanguage = getCurrentLanguage();
      if (currentLanguage !== preferredLanguage) {
        redirectToLanguage(preferredLanguage);
        return; // Don't continue initialization since we're redirecting
      }
    }

    // Mark as initialized for this session
    sessionStorage.setItem('languageInitialized', 'true');

    // Setup persistence listeners
    setupLanguagePersistence();
    setupThemePersistence();

    console.log('🌍 Language detection initialized:', {
      preferred: preferredLanguage,
      current: getCurrentLanguage(),
      browser: getBrowserLanguage()
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }

})();
