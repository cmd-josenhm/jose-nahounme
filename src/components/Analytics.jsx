import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== 'function') return;
    window.gtag('config', 'G-KJKFZH1V1F', {
      page_path: `${location.pathname}${location.search}`,
    });
  }, [location.pathname, location.search]);

  return null;
}
