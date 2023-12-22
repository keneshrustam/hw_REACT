// Content.js

import React, { useContext } from 'react';
import ThemeContext from './themecontext';

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ color: theme === 'light' ? 'black' : 'white', padding: '20px' }}>
      <h2>Content</h2>
      <p>приложения.</p>
    </div>
  );
}

export default Content;

