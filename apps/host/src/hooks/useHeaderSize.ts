import { useEffect, useState } from 'react';

export const useHeaderSize = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.getElementById('app-header');
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  }, []);

  return headerHeight;
};
