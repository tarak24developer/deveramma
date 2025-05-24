import { ui, defaultLanguage, languages } from './translations';

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang;
  return defaultLanguage;
}

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLanguage][key] || key;
  };
}

export function getLocalizedPath(path, lang) {
  // Handle homepage special case
  if (path === '/') {
    return lang === defaultLanguage ? '/' : `/${lang}/`;
  }
  
  // Remove language prefix if exists
  const pathWithoutLang = Object.keys(languages).some(lang => path.startsWith(`/${lang}/`))
    ? path.replace(/^\/[a-z]{2}\//, '/')
    : path;
  
  // Add language prefix
  return lang === defaultLanguage
    ? pathWithoutLang
    : `/${lang}${pathWithoutLang}`;
}