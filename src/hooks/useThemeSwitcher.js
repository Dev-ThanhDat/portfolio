import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const useThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSwitchTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return { mounted, theme, handleSwitchTheme };
};

export default useThemeSwitcher;
