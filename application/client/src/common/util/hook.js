import { useEffect } from 'react';

/**
 * Utility hook to set the title of a webpage
 */
export const useHtmlTitle = (newTitle) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = newTitle;
    return () => {
      document.title = previousTitle;
    };
  });
};
