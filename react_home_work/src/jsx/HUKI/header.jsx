import React, { useContext } from 'react';
import ThemeContext from './themecontext';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'light' ? '#eee' : '#333', padding: '10px' }}>
      <h1>Header</h1>
      <button onClick={toggleTheme}>Переключатель тем</button>
    </div>
  );
}

export default Header;
