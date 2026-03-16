import React, { useState, useEffect } from 'react';

const LanguageSwitcher: React.FC = () => {
  const [currentLang, setCurrentLang] = useState('ES');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentLang(window.location.pathname.startsWith('/en') ? 'ES' : 'EN');
    }
  }, []);

  const switchLanguage = () => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      if (currentPath.startsWith('/en')) {
        window.location.href = currentPath.replace('/en', '') || '/';
      } else {
        window.location.href = '/en' + currentPath;
      }
    }
  };

  return (
    <button onClick={switchLanguage} className="px-2 py-1 text-xs md:text-sm md:px-3 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
      {currentLang}
    </button>
  );
};

export default LanguageSwitcher;