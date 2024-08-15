'use client';

import MoonIcon from '@/assets/icons/MoonIcon';
import SunIcon from '@/assets/icons/SunIcon';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';

const ThemeSwitcher = () => {
  const { mounted, theme, handleSwitchTheme } = useThemeSwitcher();

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    handleSwitchTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center justify-center p-1 w-6 rounded-full ${
        theme === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
      }`}
    >
      {theme === 'light' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeSwitcher;
